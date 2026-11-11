// Share images for blog posts (docs/14 §4, "Visuals"): a 1200 × 630 card per post, in the site's type and colors,
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
const fonts = `
  @font-face { font-family: Display; font-weight: 700; src: url(data:font/woff2;base64,${b64('node_modules/@fontsource/barlow-semi-condensed/files/barlow-semi-condensed-latin-700-normal.woff2')}) format('woff2'); }
  @font-face { font-family: Sans; font-weight: 100 900; src: url(data:font/woff2;base64,${b64('node_modules/@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2')}) format('woff2'); }`;
const logo = `data:image/png;base64,${b64('public/images/fsic-logo-reverse.png')}`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

// Colors are the theme tokens (src/styles/global.css): night, white at 90/75/60, the on-dark rule.
const card = (post) => `<!doctype html><html><head><meta charset="utf-8"><style>${fonts}
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; background: #0D2138; color: #fff; font-family: Sans; padding: 64px 80px; display: flex; flex-direction: column; }
  img { height: 72px; width: auto; align-self: flex-start; }
  .kicker { margin-top: auto; font-size: 26px; color: rgb(255 255 255 / .75); }
  h1 { margin-top: 18px; font-family: Display; font-weight: 700; font-size: var(--size); line-height: 1.04; color: #fff; max-width: 1040px; text-wrap: balance; }
  .foot { margin-top: 44px; padding-top: 22px; border-top: 1px solid rgb(255 255 255 / .25); display: flex; justify-content: space-between; font-size: 22px; color: rgb(255 255 255 / .6); }
</style></head><body style="--size:${post.title.length <= 32 ? 96 : post.title.length <= 60 ? 76 : 62}px">
  <img src="${logo}" alt="">
  <p class="kicker">FSIC Blog · ${esc(TOPICS[post.topic] ?? '')}</p>
  <h1>${esc(post.title)}</h1>
  <div class="foot"><span>Florida Space Innovation Center</span><span>fsic.space/blog</span></div>
</body></html>`;

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

  await page.setContent(card(post), { waitUntil: 'load' });
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
