# Florida Space Innovation Center — Website

Public website for the Florida Space Innovation Center (FSIC), a coordinated regional platform strengthening workforce, innovation, and economic growth for Southeast Volusia and the Space Coast. It will replace the current Wix site at https://www.fsic.space.

**Built by:** Barrel & Pixel
**Launch date:** to be set (the original May 25, 2026 target has passed; see `docs/06-launch-plan.md`)

## Tech Stack

- **Framework:** [Astro](https://astro.build/) 7 with TypeScript
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`), design tokens in `src/styles/global.css`
- **Output:** Static HTML (SSG)
- **Hosting:** GitHub Pages under the `/fsic` base path, deployed by `.github/workflows/deploy.yml` on push to `main` (Node 24, from `.nvmrc`). The deploy runs `npm run check` and `npm run check-links`, so a type error or broken internal link stops it. fsic.space will point to this site; the steps are in `docs/06-launch-plan.md` ("Switching to fsic.space").

## Getting Started

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:4321/fsic
npm run build        # static build to dist/
npm run preview      # serve the built site
npm run check        # type-check .astro and .ts files
npm run check-links  # build, then check every internal link and anchor
npm run review-items # list every open "⚠ Review" note and open question (-- --json for all, in full)
npm run blog-plan    # keep the blog plan and the calendar in docs/14 current (the deploy checks it)
npm run blog-cards   # make share cards for new blog posts (needs Playwright)
```

There is no linter or test suite. `npm run check` and `npm run check-links` are the checks.

Internal links must include the base path: write `url('/path')` from `src/lib/url.ts` (`Button` does it for hrefs starting with `/`). Don't join `import.meta.env.BASE_URL` by hand: at the root of fsic.space it is `/`, which would give `//path`.

## Project Structure

```
/
├── DESIGN.md                    # Visual design direction (source of truth for design)
├── CLAUDE.md                    # Working rules for this repo
├── docs/                        # Project documentation (00–25, listed below)
├── mnt/data/                    # Source PDFs (Master Plan, Overview). Not deployed
├── public/
│   ├── favicon.svg, favicon.ico
│   └── images/                  # Logo (light and reverse)
├── scripts/
│   ├── check-links.mjs          # Run via `npm run check-links`
│   ├── review-items.mjs         # Run via `npm run review-items`
│   ├── blog-plan.mjs            # Run via `npm run blog-plan` (and `--check` in the deploy)
│   ├── blog-cards.mjs           # Run via `npm run blog-cards`
│   └── region-map.mjs           # Regenerates src/data/region-map.json (by hand; see the file)
└── src/
    ├── assets/                  # Images processed by astro:assets (homepage hero photo, campus concept rendering)
    ├── components/
    │   ├── Section, Grid, Row, List, PageHero, SectionBar, RunningHead   # grid components
    │   ├── Button, Header, Footer, Disclosure, ProgramList, HeroIndex, Closing
    │   ├── RangeBar, RangeLegend, RangeBarsDraw   # estimate ranges and their draw-in
    │   ├── PostVisual, BaseLinks                  # a blog post's "at a glance" figure; post links and tables
    │   ├── SocialIcons, HomeHero, RegionMap       # social icons; the homepage hero; a regional map (not on a page)
    │   └── ComingSoon           # placeholder for unbuilt pages
    ├── content/copy/            # Copy deck: one Markdown file per page (docs/09)
    ├── content/news/            # Press releases, one Markdown file each (as published); images/ holds their graphics
    ├── content/blog/            # Blog posts, one Markdown file each, published by date (docs/14, docs/20); images/ holds share cards
    ├── lib/blog.ts, blog-status.ts  # Blog helpers; the publish-by-date rule (isLive)
    ├── lib/launches.ts          # The next launch from the Cape (used by RegionMap)
    ├── lib/seo.ts, tones.ts     # Indexing switch and schema.org; marker colors by meaning
    ├── lib/news.ts              # Press release helpers (sorting, dates, excerpts)
    ├── lib/nav.ts               # Site navigation, shared by Header, Footer and the 404 page
    ├── lib/sections.ts          # A page's sections listed once (hero index, SectionBar, running heads)
    ├── lib/site.ts              # Email address, social links (with icons), legal and tax status
    ├── lib/url.ts               # url('/path'): site paths with the base path
    ├── lib/format.ts            # pad2() numbering helper
    ├── data/                    # Page content as typed data (economics, phases, engines, programs, faq, paths, onward, blog-plan, …)
    ├── layouts/BaseLayout.astro # Meta tags (canonical, Open Graph, noindex), self-hosted fonts, header and footer
    ├── pages/                   # One .astro file per route (404.astro is the not-found page); pages/news/ holds the list and [slug] pages
    └── styles/global.css        # Design tokens (@theme), base styles, range-bar animation
```

## Current Status

**Built:** Home (`/`), The FSIC Model (`/model`), Economic Impact (`/economic-impact`), Phased Deployment (`/deployment`), Governance & Transparency (`/governance`), Partnership & Funding (`/partnership-funding`), The Strategic Moment (`/strategic-moment`), Programs & Facilities (`/programs-facilities`), Long-Term Vision (`/long-term-vision`), FAQ (`/faq`), News & Media (`/news`, one page per press release), Contact (`/contact`, email links by topic; no form yet), Blog (`/blog`, one page per post; posts publish by date, `docs/14`), and a not-found page (`404.html`, served by GitHub Pages for any missing address). Privacy (`/privacy`) and Accessibility (`/accessibility`) are drafts: built, `noindex` and not linked until FSIC approves them.

**Coming Soon stubs:** none. Every page in the IA is built; `<ComingSoon>` remains for future pages.

**Leadership** is part of Governance, not its own page (`/leadership` forwards there).

Copy status for every page is tracked in `docs/09-copy-deck.md`. Open content decisions are in `docs/07-open-questions.md` and `docs/08-current-site-audit.md` §3.

## Design

See `DESIGN.md` for colors, type (Barlow Semi Condensed, Source Serif 4, Archivo), the 12-column grid, the interior page template and the component list. `docs/04-design-system.md` holds the earlier specs and is superseded where they disagree.

## Documentation

- **00** — Project overview and scope
- **01** — Source material extracts with PDF page references
- **02** — Information architecture and sitemap
- **03** — Content and tone guidelines
- **04** — Design system (earlier specs; superseded in part by `DESIGN.md`)
- **05** — SEO and accessibility requirements
- **06** — Launch plan and QA checklist
- **07** — Open questions requiring stakeholder input
- **08** — Audit of the current site (fsic.space) and content conflicts
- **09** — Copy deck workflow
- **10–12** — Homepage plan, story and engagement reviews
- **13** — Refactor, SEO and AEO review
- **14** — Blog content strategy (anatomy, workflow, cadence, calendar)
- **15** — Animation enhancements (as revised)
- **16** — Analytics setup (Plausible, switched on at launch)
- **18, 22** — Session logs (historical)
- **19** — Performance audit (November 10 snapshot)
- **20** — Publishing blog posts by date
- **21** — Blog post queue (superseded by 14)
- **23** — Site elevation plan (interior pages)
- **24** — Narrative: example paths; the regional map (off the page for now)
- **25** — Accessibility review (WCAG 2.2 AA)
