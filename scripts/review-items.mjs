// Lists everything waiting on a decision, in one place:
//   - every "⚠ Review" note in the copy deck (src/content/copy/*.md), by page and section
//   - every unchecked item in docs/07-open-questions.md, by heading
// The notes stay where they are (next to the copy they're about); this just collects them.
// Usage: npm run review-items            (a summary)
//        npm run review-items -- --json  (every item in full, as JSON)
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const copyDir = path.join(root, 'src/content/copy');
const clip = (s, n = 160) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s);
const clean = (s) => s.replace(/\*\*/g, '').replace(/`/g, '').replace(/\s+/g, ' ').trim();

let total = 0;
const out = [];
const json = [];
const asJson = process.argv.includes('--json');

// 1. Copy deck review notes
for (const file of fs.readdirSync(copyDir).filter((f) => f.endsWith('.md')).sort()) {
  const lines = fs.readFileSync(path.join(copyDir, file), 'utf8').split('\n');
  let section = '';
  const items = [];
  for (const line of lines) {
    const heading = line.match(/^#{2,3}\s+(.*)/);
    if (heading) section = clean(heading[1]);
    // A note that opens with the marker, or a note or table row that carries it after its first words (e.g. "Added
    // (…). **⚠ Review:** new wording"). Lines that only mention the marker ("are marked **⚠ Review**") don't count.
    const note = line.match(/^>\s*\*\*⚠ Review[^*]*\*\*:?\s*(.*)/);
    if (note) items.push({ section, text: clean(note[1]), full: clean(line.replace(/^>\s*/, '')) });
    else if (/^(>|\|)/.test(line) && /\*\*⚠ Review|\(⚠ Review\)/.test(line) && !/marked \*\*⚠ Review/.test(line))
      items.push({ section, text: clean(line.replace(/^>\s*/, '')), full: clean(line.replace(/^>\s*/, '')) });
  }
  if (!items.length) continue;
  total += items.length;
  json.push(...items.map((i) => ({ source: `src/content/copy/${file}`, section: i.section, text: i.full ?? i.text })));
  out.push(`\n${file}  (${items.length})`);
  for (const { section, text } of items) out.push(`  - ${section ? `[${section}] ` : ''}${clip(text)}`);
}

// 2. Open questions
const questions = fs.readFileSync(path.join(root, 'docs/07-open-questions.md'), 'utf8').split('\n');
let heading = '';
const open = [];
for (const line of questions) {
  const h = line.match(/^##\s+(.*)/);
  if (h) heading = clean(h[1]);
  const q = line.match(/^- \[ \]\s*(.*)/);
  if (q) {
    open.push({ heading, text: clean(q[1]) });
    json.push({ source: 'docs/07-open-questions.md', section: heading, text: clean(q[1]) });
  }
}
total += open.length;
if (open.length) {
  out.push(`\ndocs/07-open-questions.md  (${open.length})`);
  for (const { heading, text } of open) out.push(`  - [${heading}] ${clip(text)}`);
}

if (asJson) {
  // Every item in full, for the FSIC review page (npm run review-items -- --json).
  console.log(JSON.stringify(json, null, 2));
} else {
  console.log(`${total} items waiting on a decision`);
  console.log(out.join('\n'));
}
