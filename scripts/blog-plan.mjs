// Keeps the blog's editorial plan connected to the posts (docs/14-blog-content-strategy.md §10).
//
//   npm run blog-plan            update src/data/blog-plan.json and the calendar in docs/14
//   node scripts/blog-plan.mjs --check   fail (exit 1) if either is out of date; the deploy runs this
//
// What it does:
// - Every post is in the plan (a post written outside the plan is added to it).
// - Every published post's follow-up question is in the plan: when a post is published, its follow-up is added as
//   the next planned topic, marked as following that post. If the follow-up names a question already planned,
//   that entry is linked to the post instead of duplicated. So each published post adds (or claims) one topic,
//   and the plan always grows from what's been published.
// - The connections hold: a post's `from` names a real post; no two planned entries ask the same question;
//   topics are the seven in docs/14 §3.
// - The calendar table in docs/14 (between the calendar markers) is rewritten from the plan and the posts' status.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

const ROOT = new URL('..', import.meta.url).pathname;
const POSTS_DIR = join(ROOT, 'src/content/blog');
const PLAN = join(ROOT, 'src/data/blog-plan.json');
const DOC = join(ROOT, 'docs/14-blog-content-strategy.md');
const START = '<!-- calendar:start -->';
const END = '<!-- calendar:end -->';
const check = process.argv.includes('--check');

// The seven topics (src/content.config.ts, TOPICS in src/lib/blog.ts).
const TOPICS = {
  talent: 'Talent',
  innovation: 'Innovation',
  market: 'Business',
  civic: 'Community',
  economy: 'Regional economy',
  region: 'The region',
  organization: 'About FSIC',
};

const errors = [];
const norm = (q) => q.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

// Posts: frontmatter only.
const posts = readdirSync(POSTS_DIR)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const text = readFileSync(join(POSTS_DIR, f), 'utf8');
    const fm = text.match(/^---\n([\s\S]*?)\n---/);
    if (!fm) {
      errors.push(`${f}: no frontmatter`);
      return null;
    }
    return { slug: f.replace(/\.md$/, ''), ...parse(fm[1]) };
  })
  .filter(Boolean);
const bySlug = new Map(posts.map((p) => [p.slug, p]));

const planFile = JSON.parse(readFileSync(PLAN, 'utf8'));
const plan = planFile.plan.map((e) => ({ ...e }));
const inPlan = (slug) => plan.find((e) => e.slug === slug);

// Every post is in the plan.
for (const p of posts) {
  if (!inPlan(p.slug)) {
    plan.push({ slug: p.slug, question: p.question, topic: p.topic, audiences: '', sources: '', ...(p.from ? { from: p.from } : {}) });
  }
}

// Connections from the posts.
for (const p of posts) {
  if (p.from && !bySlug.has(p.from)) errors.push(`${p.slug}: "from: ${p.from}" names no post`);
  if (p.from) {
    const e = inPlan(p.slug);
    if (e && !e.from) e.from = p.from;
  }
  if (!p.followUp) continue;
  const f = p.followUp;
  if (!TOPICS[f.topic]) errors.push(`${p.slug}: follow-up topic "${f.topic}" isn't one of the seven topics`);
  if (f.slug === p.slug) errors.push(`${p.slug}: the follow-up can't be the post itself`);
  if (p.status !== 'published') continue;
  // A published post's follow-up joins the plan (or claims the planned question it names).
  const existing = inPlan(f.slug);
  if (existing) {
    if (!existing.from) existing.from = p.slug;
  } else {
    const same = plan.find((e) => norm(e.question) === norm(f.question));
    if (same) errors.push(`${p.slug}: its follow-up question is already planned as "${same.slug}"; set followUp.slug to "${same.slug}"`);
    else plan.push({ slug: f.slug, question: f.question, topic: f.topic, audiences: '', sources: '', from: p.slug });
  }
}

// The plan holds together.
const seenQ = new Map();
for (const e of plan) {
  if (!TOPICS[e.topic]) errors.push(`plan "${e.slug}": topic "${e.topic}" isn't one of the seven topics`);
  const q = norm(e.question);
  if (seenQ.has(q)) errors.push(`plan: "${e.slug}" and "${seenQ.get(q)}" ask the same question`);
  seenQ.set(q, e.slug);
  if (e.from && !bySlug.has(e.from)) errors.push(`plan "${e.slug}": "from: ${e.from}" names no post`);
}
if (new Set(plan.map((e) => e.slug)).size !== plan.length) errors.push('plan: two entries share a slug');

if (errors.length) {
  console.error(`Blog plan: ${errors.length} problem(s)\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

// The plan file, one entry per line.
const planOut =
  '{\n' +
  `  "_about": ${JSON.stringify(planFile._about)},\n` +
  '  "plan": [\n' +
  plan.map((e) => `    ${JSON.stringify(e)}`).join(',\n') +
  '\n  ]\n}\n';

// The calendar table.
const STATUS = { published: 'Published', review: 'In review', draft: 'Drafted' };
const cell = (s) => String(s ?? '').replace(/\|/g, '\\|');
const title = (slug) => bySlug.get(slug)?.title ?? slug;
const rows = plan.map((e, i) => {
  const post = bySlug.get(e.slug);
  const status = post ? `**${STATUS[post.status] ?? 'Drafted'}** (\`${e.slug}\`)` : 'Planned';
  const follows = e.from ? `${cell(title(e.from))}` : '';
  return `| ${i + 1} | ${cell(e.question)} | ${TOPICS[e.topic]} | ${cell(e.audiences)} | ${cell(e.sources)} | ${follows} | ${status} |`;
});
const table = [
  `${START}`,
  '<!-- Generated by `npm run blog-plan` from src/data/blog-plan.json and the posts. Edit the plan file, not this table. -->',
  '',
  '| # | Question | Topic | For | Sources | Follows | Status |',
  '|---|----------|-------|-----|---------|---------|--------|',
  ...rows,
  '',
  `${END}`,
].join('\n');

const doc = readFileSync(DOC, 'utf8');
const a = doc.indexOf(START);
const b = doc.indexOf(END);
if (a < 0 || b < 0) {
  console.error(`docs/14: the calendar markers (${START} … ${END}) are missing`);
  process.exit(1);
}
const docOut = doc.slice(0, a) + table + doc.slice(b + END.length);

const planChanged = planOut !== readFileSync(PLAN, 'utf8');
const docChanged = docOut !== doc;
if (check) {
  if (planChanged || docChanged) {
    console.error(
      `Blog plan out of date (${[planChanged && 'src/data/blog-plan.json', docChanged && 'the calendar in docs/14'].filter(Boolean).join(' and ')}). Run \`npm run blog-plan\` and commit the result.`,
    );
    process.exit(1);
  }
  console.log(`Blog plan up to date: ${plan.length} topics, ${posts.length} posts, ${posts.filter((p) => p.status === 'published').length} published.`);
} else {
  if (planChanged) writeFileSync(PLAN, planOut);
  if (docChanged) writeFileSync(DOC, docOut);
  console.log(`Blog plan: ${plan.length} topics (${planChanged ? 'plan updated' : 'plan unchanged'}; ${docChanged ? 'calendar rewritten' : 'calendar unchanged'}).`);
}
