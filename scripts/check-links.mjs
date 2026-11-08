// Checks every internal link and file reference in the built site (dist/).
// Fails (exit 1) on a link to a missing page or file, a link without the /fsic base path, or an
// in-page anchor with no matching id. Lists links that land on "Coming soon" pages as a reminder.
// Usage: npm run check-links   (runs `astro build` first)
import fs from 'node:fs'; import path from 'node:path';
const dist = process.argv[2] ?? 'dist', BASE = '/fsic';
const pages = [];
(function walk(d){ for (const f of fs.readdirSync(d)) { const p=path.join(d,f); if (fs.statSync(p).isDirectory()) walk(p); else if (f.endsWith('.html')) pages.push(p);} })(dist);
const urlOf = p => BASE + '/' + path.relative(dist, p).replace(/index\.html$/,'').replace(/\.html$/,'');
const html = Object.fromEntries(pages.map(p => [urlOf(p).replace(/\/$/,'') || BASE, fs.readFileSync(p,'utf8')]));
const ids = Object.fromEntries(Object.entries(html).map(([u,h]) => [u, new Set([...h.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]))]));
const coming = new Set(Object.entries(html).filter(([,h]) => />Coming soon</.test(h)).map(([u])=>u));
const resolveAsset = u => { const rel = u.slice(BASE.length); const f = path.join(dist, rel); return fs.existsSync(f) && fs.statSync(f).isFile(); };
const rows = [], seen = new Map();
for (const [page, h] of Object.entries(html)) {
  for (const m of h.matchAll(/\s(href|src)="([^"]+)"/g)) {
    let [, attr, href] = m; href = href.replace(/&amp;/g,'&');
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(href)) continue;
    let [p, hash] = href.split('#');
    let target = p === '' ? page : (p.startsWith('/') ? p : path.posix.join(page, p));
    target = target.replace(/\/$/,'') || BASE;
    let status = 'ok';
    if (!target.startsWith(BASE)) status = 'MISSING BASE PATH';
    else if (html[target] === undefined && !resolveAsset(target)) status = 'BROKEN (no such page or file)';
    else if (hash && html[target] && !ids[target].has(hash)) status = `BROKEN ANCHOR #${hash}`;
    else if (coming.has(target)) status = 'coming-soon page';
    const key = `${page} → ${href}`;
    if (!seen.has(key)) { seen.set(key,1); rows.push({page, attr, href, status}); }
  }
}
const bad = rows.filter(r => r.status !== 'ok' && r.status !== 'coming-soon page');
console.log(`pages: ${Object.keys(html).length}, unique links/assets checked: ${rows.length}`);
console.log(`coming-soon pages: ${[...coming].join(', ')}`);
const byStatus = {}; for (const r of rows) (byStatus[r.status] ??= []).push(r);
for (const [s, rs] of Object.entries(byStatus)) {
  console.log(`\n## ${s} (${rs.length})`);
  if (s !== 'ok' && s !== 'coming-soon page') rs.forEach(r => console.log(`  ${r.page}  ${r.attr}=${r.href}`));
}
// summary of which built pages link to coming-soon targets
const built = Object.keys(html).filter(u => !coming.has(u));
console.log('\n## links from built pages to coming-soon pages');
for (const r of byStatus['coming-soon page'] ?? []) if (built.includes(r.page)) console.log(`  ${r.page} → ${r.href}`);
if (bad.length) { console.error(`\n${bad.length} broken link(s).`); process.exit(1); }
console.log('\nNo broken links.');
