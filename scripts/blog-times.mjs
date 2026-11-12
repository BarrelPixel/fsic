// Gives each dated blog post a publishing time (docs/14 §10, cadence), so posts appear at the hours people read
// professional content rather than all at the same minute.
//
//   npm run blog-times           give a time to every dated post that has only a date
//   npm run blog-times -- --all  choose every unpublished post's time again
//
// Times are Eastern (the Space Coast's), on the post's date, weighted toward late morning and midday:
//   8:10–9:55 AM 25% · 10:00–11:55 AM 35% · 12:00–1:25 PM 25% · 1:30–3:30 PM 15%
// with an irregular minute (never on the hour or half hour). A time is drawn from the post's slug, so running the
// script again gives the same time unless --all is used with a different seed (--seed=N).
// The deploy checks hourly on weekdays during working hours and publishes a post at the first check after its
// time (.github/workflows/deploy.yml).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const POSTS = join(ROOT, 'src/content/blog');
const all = process.argv.includes('--all');
const seed = Number((process.argv.find((a) => a.startsWith('--seed=')) ?? '--seed=0').slice(7));

const WINDOWS = [
  { from: 8 * 60 + 10, to: 9 * 60 + 55, weight: 0.25 },
  { from: 10 * 60, to: 11 * 60 + 55, weight: 0.35 },
  { from: 12 * 60, to: 13 * 60 + 25, weight: 0.25 },
  { from: 13 * 60 + 30, to: 15 * 60 + 30, weight: 0.15 },
];

// A small seeded generator (mulberry32) from the slug, so each post's time is stable.
function random(text) {
  let h = 2166136261 ^ seed;
  for (const c of text) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  // Final mix (murmur3 fmix32), so slugs that differ by a letter don't give neighboring times.
  h ^= h >>> 16; h = Math.imul(h, 0x85ebca6b); h ^= h >>> 13; h = Math.imul(h, 0xc2b2ae35); h ^= h >>> 16;
  const next = () => {
    h = (h + 0x6d2b79f5) | 0;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  next(); next(); // discard the first draws
  return next;
}

function minuteOfDay(slug) {
  const r = random(slug);
  let pick = r();
  const w = WINDOWS.find((x) => (pick -= x.weight) < 0) ?? WINDOWS[0];
  let m = w.from + Math.floor(r() * (w.to - w.from + 1));
  if (m % 30 === 0) m += 1 + Math.floor(r() * 4); // not on the hour or half hour
  return m;
}

// The offset of America/New_York on a date ("-05:00" in winter, "-04:00" in summer).
function easternOffset(date) {
  const name = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', timeZoneName: 'longOffset' })
    .formatToParts(new Date(`${date}T12:00:00Z`))
    .find((p) => p.type === 'timeZoneName').value; // "GMT-05:00"
  return name.replace('GMT', '') || '+00:00';
}

let changed = 0;
for (const file of readdirSync(POSTS).filter((f) => f.endsWith('.md'))) {
  const path = join(POSTS, file);
  const text = readFileSync(path, 'utf8');
  const fm = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const status = fm.match(/^status: (\w+)/m)?.[1];
  const line = fm.match(/^publishDate: (\S+)$/m)?.[1];
  if (!line || status === 'draft' || status === 'published') continue;
  const date = line.slice(0, 10);
  if (line.length > 10 && !all) continue; // already has a time
  const m = minuteOfDay(file.replace(/\.md$/, ''));
  const time = `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}:00`;
  const value = `${date}T${time}${easternOffset(date)}`;
  if (value === line) continue;
  writeFileSync(path, text.replace(/^publishDate: \S+$/m, `publishDate: ${value}`));
  changed++;
}
console.log(`Blog times: ${changed} post(s) given a time.`);
