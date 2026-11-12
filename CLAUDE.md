# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Public website for the **Florida Space Innovation Center (FSIC)**, a regional workforce and innovation initiative based in New Smyrna Beach, Southeast Volusia County, Florida. Built by Barrel & Pixel. It will replace the current Wix site at https://www.fsic.space.

- **Stack:** Astro 7 (static, `compressHTML: true` to keep HTML whitespace between inline elements) + Tailwind CSS v4 (via `@tailwindcss/vite`), TypeScript.
- **Hosting:** GitHub Pages under the `/fsic` base path for now (`astro.config.mjs`); fsic.space will point here (steps in `docs/06-launch-plan.md`, "Switching to fsic.space"). Deployed by `.github/workflows/deploy.yml` on push to `main`. The deploy runs `npm run check` and `npm run check-links`, so a type error or broken link fails it.

## Commands

```bash
npm run dev       # dev server at http://localhost:4321/fsic
npm run build     # static build to dist/ (run before finishing any change)
npm run preview   # serve the built site
npm run check        # type-check .astro and .ts files (astro check)
npm run check-links  # build, then check every internal link and anchor (fails on broken ones), and that the blog plan is current
npm run review-items # list every open "⚠ Review" note in the copy deck and every open question
npm run blog-plan    # add published posts' follow-ups to the blog plan and rewrite the calendar in docs/14
npm run blog-cards   # make a share card for each new blog post (needs Playwright; -- --all remakes them)
```

There is no linter or test suite. `npm run check` (types) and `npm run check-links` (build and links) are the checks; the deploy runs both.

## Layout

```
src/pages/           One .astro file per route. index, model, economic-impact, deployment, governance, partnership-funding, strategic-moment, programs-facilities, long-term-vision, faq, news, contact and blog: every page is built (<ComingSoon> remains for future pages). privacy and accessibility are drafts: noindex and not linked until FSIC approves them. 404.astro is the not-found page (noindex; links from getNavColumns())
src/components/      Grid components (Section, Grid, Row, List, PageHero, SectionBar, RunningHead),
                     Button, Header, Footer, Disclosure, ProgramList, HeroIndex, Closing, RangeBar, RangeLegend,
                     RangeBarsDraw, RangeTable, RangeRow, TableRow, YearScale, YearBar, Dot, MoreLink,
                     ConceptRendering, HomeHero, BaseLinks (post links and tables), SocialIcons, PostVisual (a blog post's "at a glance" figure), RegionMap (a regional map and the next launch; not on a page for now), SolicitationDisclosure, Analytics, ComingSoon
src/layouts/         BaseLayout.astro (meta tags, font loading, header and footer)
src/styles/global.css  Design tokens (@theme), base styles, range-bar animation
src/content/copy/    Copy deck: one Markdown file per page (see below)
src/content/news/    Press releases, one Markdown file each, wording as published (built into /news and /news/<slug>);
                     images/ holds the graphic published with each release
src/content/blog/    Blog posts, one Markdown file each (/blog/<slug>), with status draft | review | scheduled | published
                     (dated posts publish on their publishDate; images/ holds the share cards);
                     the schema enforces the post anatomy in docs/14 (question, answer-first summary, sources)
src/lib/blog.ts      Blog helpers: getPosts (drafts in dev only), TOPICS (pillar pages), checkFigures
src/lib/blog-status.ts  isLive: when a post is live (publish by date; BLOG_NOW=YYYY-MM-DD previews a coming day)
src/lib/launches.ts  The next launch from the Cape, read at build time (RegionMap)
src/lib/news.ts      Press release helpers
src/lib/nav.ts       Site navigation (groups and links), shared by Header, Footer and the 404 page
src/lib/site.ts      EMAIL, mailto(), SOCIAL_LINKS: use these, don't retype the address or links
src/lib/url.ts       url('/path'): a site path with the base path (works under /fsic and at the root)
src/lib/format.ts    pad2() for 01, 02… numbering
src/lib/sections.ts  A page's sections listed once (hero index, SectionBar, running heads)
src/lib/tones.ts     Marker colors by meaning (toneBg), on white and on night; used by Dot and bars
src/lib/seo.ts       Indexing switch, absolute URLs, schema.org builders, the one-sentence "what is FSIC"
src/data/            Page content as typed data, shared where pages overlap: economics (the Master Plan
                     ranges, read by home, Economic Impact, Partnership & Funding and the FAQ), phases,
                     engines, programs, faq, partnership, governance, paths (Example Paths), onward (page endings),
                     strategic, authors, blog-plan.json (the blog plan), region-map.json
docs/                Project docs 00–25 (IA, content guidelines, site audit, copy-deck workflow, homepage reviews, refactor/SEO/AEO review, blog strategy, site elevation plan, narrative, accessibility review)
DESIGN.md            Visual design direction: source of truth for design decisions
mnt/data/            Source PDFs (Master Plan, Overview). Not deployed
scripts/             check-links, review-items, blog-plan, blog-cards (npm scripts above); region-map (by hand)
```

## Rules

### Design
Read **`DESIGN.md`** before changing any UI. In short:
- Every page sits on one 12-column grid: framing in cols 1–4, detail in cols 5–12. Build sections from the grid components (`Section`, `Grid`, `Row`, `List`, and `TableRow` for full-width table rows), and interior pages from the template in DESIGN.md "Interior page template" (`PageHero` first; `src/pages/model.astro` is the reference). Don't hand-write grid classes. An interior page that lists its sections in `PageHero` also gets a sticky `SectionBar`.
- The homepage hero photo (`src/assets/fsic-hero.png`, a launch plume seen from the dunes) is the only signature element (DESIGN.md "Signature element" and "Imagery"). Range bars drawing in (homepage, Economic Impact) are the site's only automatic animation (DESIGN.md "Motion"); reuse that pattern for new range bars (`RangeBar` and `RangeLegend`), but don't add a different one, and use the motion tokens in `global.css` for interaction feedback.
- Orange means the space industry. Lagoon green means the community. Don't use either as decoration.
- Never put white text on the brand orange, and never use orange text on light backgrounds (contrast). Primary buttons are white on `orange-deep` (the `Button` component handles this).
- Barlow Semi Condensed for headings (`font-display`), Source Serif 4 for reading text (the body default), Archivo for UI (`font-sans`: nav, buttons, captions, labels, data). No all-caps eyebrow labels, no fade-in on scroll, no cards, no chips or pills.
- Square corners and no shadows (only the small dots are round). Reading text is 18px on a 28px line everywhere; don't add `text-lg` or `leading-*` to paragraphs or lists. White text on night uses `white/90`, `/75` or `/60` only. Lists use `List` (a small round dot on the column edge, no rules or dashes); put a list's meaning on its label (`Row` `dot`).

### Copy
- Wording comes from `src/content/copy/<page>.md`. Press releases are the exception: each is a file in `src/content/news/`, kept as published. Write and approve copy there first, then build it into the page. The workflow and markers (`> Source`, `⚠ Review`, `[TODO]`) are in `docs/09-copy-deck.md`.
- Follow `docs/03-content-guidelines.md`: institutional tone, no hype words, no exclamation marks.
- **Economic figures must match the Master Plan exactly, shown as ranges** ("$10.2–$12.4 billion"), never only the upper bound. They are defined once, in `src/data/economics.ts` (`FIGURES`); pages read them from there.
- Don't invent partners, quotes, testimonials, logos or statistics. When unsure, leave it out.
- Don't name a specific campus site or the development the Master Plan proposes for it, anywhere on the site or in the docs (decided November 2026; `docs/08-current-site-audit.md` §3.3). Say "Southeast Volusia" or "the region".
- Open content conflicts (development figures, unsourced claims, which economic scenario the headline figures describe) are listed in `docs/08-current-site-audit.md` §3 and `docs/07-open-questions.md`. Don't settle them in copy without the user.

### Code
- **Base path:** internal links must include the base path (`/fsic` on the GitHub Pages preview; none once the site is at the root of fsic.space). Write `url('/path')` (`src/lib/url.ts`); `Button` and the nav helpers do this for you. Never write `` `${import.meta.env.BASE_URL}/path` ``: at the root `BASE_URL` is `/`, which gives `//path`, a link to another host. A bare `/path` breaks on the preview.
- **CSS layers:** base element styles in `global.css` live inside `@layer base`. Keep them there. Styles outside a layer override Tailwind utilities.
- Use the theme tokens (`bg-night`, `text-lagoon`, `border-rule`…) rather than raw hex values, and the type-scale classes (`text-statement`, `text-lead`, `text-label`, `text-caption`) and link classes (`link`, `link-on-dark`, `links-in`) rather than re-typing their Tailwind classes (DESIGN.md "Type scale").
- **Navigation** lives in `src/lib/nav.ts`; Header and Footer both read it, so change menus there, not in the components. Pages are grouped by question in two dropdowns (Why FSIC, The Model), with plain links for the rest; "Get Involved" is the Partnership & Funding page. Each page appears once in the menu. A page still on `<ComingSoon>` has `built: false` and stays out of both menus; set it to `true` (or remove the flag) when the page ships. Header highlighting uses `isActive()` in `Header.astro` (Home matches only itself); a group is highlighted when one of its pages is current.
- **Press releases:** add `src/content/news/<YYYY-MM-DD>-<slug>.md` with `title` and `date`. If the release was published with a graphic, put it in `src/content/news/images/` and set `image` and `imageAlt` (required with `image`; transcribe the words in the graphic). The release page uses it as the share image. If `npm run dev` is running when you add a release with an image, restart it: until then the dev server shows `LocalImageUsedWrongly` for that image (the build is fine).
- `BaseLayout` takes an optional `image` (a built image `src`, e.g. from `getImage()`) for `og:image` and `twitter:image`; pages without one share the hero photo. It also writes the page's schema.org JSON-LD (FSIC as an `NGO` on every page, a breadcrumb or the `WebSite`); pages add their own with `jsonLd` (the FAQ's `FAQPage`, a release's `NewsArticle`), and a release passes `article` and `parents`. The builders are in `src/lib/seo.ts`.
- **Indexing:** the GitHub Pages preview is `noindex` and robots.txt disallows crawling; both switch on automatically when `site` becomes https://fsic.space (`INDEXABLE` in `src/lib/seo.ts`). `sitemap.xml` and `robots.txt` are generated (`src/pages/*.ts`). A title that already names FSIC gets no " | Florida Space Innovation Center" suffix.
- **Blog posts:** add `src/content/blog/<slug>.md` following `docs/14-blog-content-strategy.md` (§4 anatomy, §8 workflow). Start at `status: draft` (visible only in `npm run dev`). Write site links from the root ("/economic-impact/"); `BaseLinks` adds the base path. Quote Master Plan figures exactly as in `FIGURES`, or the build fails. Give a post a `visual` when its answer has a shape (a range, the scenarios, a phase; docs/14 §4) and run `npm run blog-cards` for its share card. The first published post adds Blog to the menu, sitemap, RSS and `llms.txt`. Every post names a `followUp` (required from review on); after publishing, run `npm run blog-plan` and commit: it adds the follow-up to `src/data/blog-plan.json` and the calendar in docs/14 (the deploy fails until you do). A post that answers another's follow-up sets `from`, and the two link to each other. **Publishing is by date:** a post with a `publishDate` (status `review` or `scheduled`) goes live on that date at the deploy's daily rebuild (`.github/workflows/deploy.yml`, 9 AM Eastern; rule in `src/lib/blog-status.ts`). There is no approval gate (project lead, November 2026). To hold a post, set it to `draft`. Dates run one post every 3 to 7 days, and a follow-up comes after the post it follows (`npm run blog-plan` checks). Run `npm run blog-plan` and commit after dating a post. See `docs/20-scheduled-blog-publishing.md`.
- The `<html>` element gets a `js` class from an inline script in `BaseLayout`. Use it to gate JS-only states so the page still works without JS.

## Before finishing a change
1. `npm run check` reports no errors, and `npm run check-links` builds and reports no broken links.
2. Check the page at desktop width and at 375px. Nothing scrolls horizontally, and keyboard focus is visible.
3. If copy changed, update the copy file's status, and the status table in `docs/09-copy-deck.md` if needed.
