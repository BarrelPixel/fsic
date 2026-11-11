// Share images for blog posts (docs/14 §4, "Visuals"): a 1200 × 630 card per post on the site's grid, in its type and colors,
// so a post shared on LinkedIn, Facebook or X shows its question instead of the homepage photo.
//
//   npm run blog-cards           make a card for every post that has none (src/content/blog/images/<slug>.png)
//                                and set the post's `image` and `imageAlt`
//   npm run blog-cards -- --all  remake every card (after a title changes)
//
// It needs Playwright and its Chromium (`npx playwright install chromium`); it isn't a project dependency, since
// cards are made when a post is written, not at build time. The cards are committed with the posts.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { parse } from 'yaml';

const ROOT = new URL('..', import.meta.url).pathname;
const POSTS = join(ROOT, 'src/content/blog');
const OUT = join(POSTS, 'images');
const all = process.argv.includes('--all');

// The topic labels shown on the card (TOPICS in src/lib/blog.ts).
const TOPICS = {
  talent: 'Talent and workforce',
  innovation: 'Innovation and research',
  market: 'Business and supply chains',
  civic: 'Community',
  economy: 'The regional economy',
  region: 'The Space Coast and Southeast Volusia',
  organization: 'About FSIC',
};

let chromium;
try {
  ({ chromium } = createRequire(import.meta.url)('playwright'));
} catch {
  console.error('blog-cards needs Playwright: npm i -D playwright && npx playwright install chromium');
  process.exit(1);
}

const b64 = (path) => readFileSync(join(ROOT, path)).toString('base64');
const font = (file, weight) =>
  `@font-face { font-family: ${file.includes('barlow') ? 'Display' : 'Sans'}; font-weight: ${weight}; src: url(data:font/woff2;base64,${b64('node_modules/' + file)}) format('woff2'); }`;
const fonts = [
  font('@fontsource/barlow-semi-condensed/files/barlow-semi-condensed-latin-600-normal.woff2', 600),
  font('@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2', '100 900'),
].join('\n');
const logo = `data:image/png;base64,${b64('public/images/fsic-logo-reverse.png')}`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

// The question's number: its place in the plan (src/data/blog-plan.json), the same number as the calendar in docs/14
// §10. The plan only grows at the end, so a card's number never changes.
const plan = JSON.parse(readFileSync(join(ROOT, 'src/data/blog-plan.json'), 'utf8')).plan;
const number = (slug) => {
  const i = plan.findIndex((e) => e.slug === slug);
  return i < 0 ? '' : String(i + 1).padStart(2, '0');
};

// Marker colors keep their meaning (src/lib/tones.ts, on night): orange the space industry (the Talent, Innovation
// and Market Engines), lagoon the community (the Civic Engine), white for the rest.
const TONE = { talent: '#E37A2D', innovation: '#E37A2D', market: '#E37A2D', civic: '#7FB8AC' };

// Sentence case, as Swiss typography sets headlines: lower-case every word except the first of each sentence,
// acronyms (two or more capitals: FSIC, SBIR, R&D) and the proper names below.
const NAMES = ['Regional Talent Marketplace', 'Talent Engine', 'Innovation Engine', 'Market Engine', 'Civic Engine', 'Space Coast', 'Southeast Volusia', 'Florida'];
function sentenceCase(title) {
  const keep = [];
  let t = title;
  NAMES.forEach((n, i) => {
    t = t.replace(new RegExp(n, 'g'), `\u0000${i}\u0000`);
    keep[i] = n;
  });
  let start = true;
  // Acronyms: two capitals in a row, or around "&" (FSIC, SBIR, ROI, R&D). Hyphenated words are cased part by part.
  const acronym = (part) => /[A-Z]{2}|[A-Z]&[A-Z]/.test(part);
  t = t.replace(/[^\s]+/g, (w) => {
    const out = w.includes('\u0000')
      ? w
      : w
          .split('-')
          .map((part, i) => (acronym(part) ? part : start && i === 0 ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase() : part.toLowerCase()))
          .join('-');
    start = /[?.!:]$/.test(w);
    return out;
  });
  return t.replace(/\u0000(\d+)\u0000/g, (_, i) => keep[+i]);
}

// The card (1200 × 630) on the site's 12-column grid (DESIGN.md "Grid"): 64px margins, 24px gutters. A hairline at
// the top carries the question's number, its topic and the blog's name in three column groups; the headline hangs
// from the left margin, set flush left in sentence case and anchored to the bottom of its field; a hairline at the
// foot carries the logo and the address. Night ground, white type at the site's opacities, one meaning-coded dot.
const card = (post, slug) => {
  const title = sentenceCase(post.title);
  const size = title.length <= 34 ? 92 : title.length <= 52 ? 80 : 68;
  const tone = TONE[post.topic] ?? 'rgb(255 255 255 / .8)';
  return `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; background: #0D2138; color: #fff; font-family: Sans; padding: 0 64px;
    display: grid; grid-template-columns: repeat(12, 1fr); column-gap: 24px; grid-template-rows: 64px auto 1fr auto 64px; }
  .rule { grid-column: 1 / -1; border-top: 1px solid rgb(255 255 255 / .25); }
  .head { display: contents; }
  .head > * { grid-row: 2; align-self: start; display: flex; align-items: center; gap: 12px; height: 20px; margin-top: 19px;
    font-size: 20px; line-height: 1; }
  .no { grid-column: 1 / span 2; color: rgb(255 255 255 / .6); font-variant-numeric: tabular-nums; }
  .topic { grid-column: 3 / span 7; color: rgb(255 255 255 / .9); display: flex; align-items: center; gap: 12px; }
  .dot { width: 12px; height: 12px; border-radius: 50%; background: ${tone}; flex: none; }
  .blog { grid-column: 10 / span 3; color: rgb(255 255 255 / .6); }
  h1 { grid-column: 1 / span 10; grid-row: 3; align-self: end; padding-bottom: 40px; font-family: Display; font-weight: 600;
    font-size: ${size}px; line-height: 1.02; letter-spacing: -0.01em; text-wrap: pretty; }
  .foot { grid-row: 4; grid-column: 1 / -1; display: grid; grid-template-columns: subgrid; align-items: center;
    border-top: 1px solid rgb(255 255 255 / .25); padding-top: 18px; }
  .foot img { grid-column: 1 / span 3; height: 44px; width: auto; }
  .foot span { grid-column: 10 / span 3; font-size: 20px; color: rgb(255 255 255 / .6); }
</style></head><body>
  <div class="rule" style="grid-row: 2; grid-column: 1 / -1; align-self: start"></div>
  <div class="head"><span class="no">No. ${number(slug)}</span><span class="topic"><i class="dot"></i>${esc(TOPICS[post.topic] ?? '')}</span><span class="blog">FSIC Blog</span></div>
  <h1>${esc(title)}</h1>
  <div class="foot"><img src="${logo}" alt=""><span>fsic.space/blog</span></div>
</body></html>`;
};

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
let made = 0;
for (const file of readdirSync(POSTS).filter((f) => f.endsWith('.md'))) {
  const slug = file.replace(/\.md$/, '');
  const path = join(POSTS, file);
  const text = readFileSync(path, 'utf8');
  const fm = text.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) continue;
  const post = parse(fm[1]);
  // A post with its own image (not a card) keeps it.
  if (post.image && post.image !== `./images/${slug}.png`) continue;
  const png = join(OUT, `${slug}.png`);
  if (!all && post.image && existsSync(png)) continue;

  await page.setContent(card(post, slug), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: png });
  made++;

  if (!post.image) {
    const alt = `${post.title} (FSIC Blog)`;
    const fields = `image: ./images/${slug}.png\nimageAlt: ${JSON.stringify(alt)}\n`;
    writeFileSync(path, text.replace(/\nstatus: /, `\n${fields}status: `));
  }
}
await browser.close();
console.log(`Blog cards: ${made} made (src/content/blog/images/).`);
