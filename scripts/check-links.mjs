// Checks every internal link and file reference in the built site (dist/).
// Fails (exit 1) on a link to a missing page or file, a link without the base path, or an in-page
// anchor with no matching id. Lists links that land on "Coming soon" pages as a reminder.
// The base path is read from astro.config.mjs, so the check follows the site if it moves.
// Usage: npm run check-links   (runs `astro build` first)
import fs from 'node:fs';
import path from 'node:path';
import config from '../astro.config.mjs';

const dist = process.argv[2] ?? 'dist';
const BASE = (config.base ?? '').replace(/\/+$/, ''); // '' when the site is at the root
const ROOT = BASE || '/';

// Every built page, keyed by its URL without a trailing slash (the homepage is ROOT).
const htmlFiles = [];
(function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    if (fs.statSync(file).isDirectory()) walk(file);
    else if (name.endsWith('.html')) htmlFiles.push(file);
  }
})(dist);

const urlOf = (file) => {
  const rel = path.relative(dist, file).split(path.sep).join('/');
  const url = `${BASE}/${rel.replace(/index\.html$/, '').replace(/\.html$/, '')}`.replace(/\/$/, '');
  return url || ROOT;
};
const pages = new Map(htmlFiles.map((file) => [urlOf(file), fs.readFileSync(file, 'utf8')]));
const idsOn = new Map([...pages].map(([url, html]) => [url, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))]));
const comingSoon = new Set([...pages].filter(([, html]) => />Coming soon</.test(html)).map(([url]) => url));

const isFile = (url) => {
  const file = path.join(dist, url.slice(BASE.length));
  return fs.existsSync(file) && fs.statSync(file).isFile();
};

const statusOf = (page, href) => {
  const [p, hash] = href.split('#');
  let target = p === '' ? page : p.startsWith('/') ? p : path.posix.join(page, p);
  target = target.replace(/\/$/, '') || ROOT;
  if (BASE && target !== BASE && !target.startsWith(`${BASE}/`)) return 'MISSING BASE PATH';
  if (!pages.has(target) && !isFile(target)) return 'BROKEN (no such page or file)';
  if (hash && pages.has(target) && !idsOn.get(target).has(hash)) return `BROKEN ANCHOR #${hash}`;
  if (comingSoon.has(target)) return 'coming-soon page';
  return 'ok';
};

const rows = [];
const seen = new Set();
for (const [page, html] of pages) {
  for (const [, attr, raw] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    const href = raw.replace(/&amp;/g, '&');
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(href)) continue;
    const key = `${page} → ${href}`;
    if (seen.has(key)) continue;
    seen.add(key);
    rows.push({ page, attr, href, status: statusOf(page, href) });
  }
}

const byStatus = Map.groupBy(rows, (r) => r.status);
console.log(`pages: ${pages.size}, unique links/assets checked: ${rows.length}`);
console.log(`coming-soon pages: ${[...comingSoon].join(', ')}`);
for (const [status, list] of byStatus) {
  console.log(`\n## ${status} (${list.length})`);
  if (status !== 'ok' && status !== 'coming-soon page') list.forEach((r) => console.log(`  ${r.page}  ${r.attr}=${r.href}`));
}

console.log('\n## links from built pages to coming-soon pages');
for (const r of byStatus.get('coming-soon page') ?? []) if (!comingSoon.has(r.page)) console.log(`  ${r.page} → ${r.href}`);

const broken = rows.filter((r) => r.status !== 'ok' && r.status !== 'coming-soon page');
if (broken.length) {
  console.error(`\n${broken.length} broken link(s).`);
  process.exit(1);
}
console.log('\nNo broken links.');
