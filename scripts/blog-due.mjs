// Is a blog post due? Used by the deploy's hourly check (.github/workflows/deploy.yml): prints "due=true" when a
// dated post (not a draft) reached its publishDate within the last WINDOW minutes, so the site is rebuilt and the
// post goes live; otherwise "due=false" and the check ends without building. Reads only the frontmatter lines it
// needs, so it runs before `npm ci`.
//   node scripts/blog-due.mjs [--window=130]
import { readFileSync, readdirSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';

const POSTS = new URL('../src/content/blog/', import.meta.url).pathname;
const windowMin = Number((process.argv.find((a) => a.startsWith('--window=')) ?? '--window=130').slice(9));
const now = Date.now();
const due = [];
for (const file of readdirSync(POSTS).filter((f) => f.endsWith('.md'))) {
  const fm = readFileSync(join(POSTS, file), 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  if (/^status: draft$/m.test(fm)) continue;
  const when = fm.match(/^publishDate: (\S+)$/m)?.[1];
  if (!when) continue;
  const t = new Date(when.length === 10 ? `${when}T00:00:00Z` : when).getTime();
  if (t <= now && t > now - windowMin * 60_000) due.push(file.replace(/\.md$/, ''));
}
const line = `due=${due.length > 0}`;
console.log(line, due.join(' '));
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `${line}\n`);
