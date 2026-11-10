# 13 — Refactor, SEO and AEO Review

**Status:** Proposed (November 10, 2026). Nothing in this review is built yet.
**Reviewed:** `main` after PR #49, from the source and the built site (`dist/`).

Part A is code that can be simpler or harder to get wrong. Part B is how well search engines (SEO) and answer engines such as ChatGPT, Perplexity, Gemini and Google's AI Overviews (AEO) can find, understand and quote the site.

---

## Part A — Refactor

The first round (PRs #43–#45) shared the FAQ text, dots, tables and range bars. These findings are what's left, plus the duplication the homepage rounds since then added. All of them are behavior-preserving, checked by the before/after screenshot diff used for #43–#44.

### A1. The Years 1–5 track exists three times (medium)
The homepage ("When each starts"), Deployment and Partnership & Funding each build the same thing by hand: a "Year 1 … Year 5" head and a `grid-cols-5` bar per row. Each has its own height, background and on-dark variant.
**Proposal:** a `YearTrack` component (`start`, `end`, `tone`, `dark`) and a `YearTrackHead` (`current` year marked "Now"). Bar colors come from `toneBg`. One height (`h-2.5`) unless a page has a reason to differ.

### A2. The homepage holds data that belongs in `src/data` (medium)
`index.astro` is 409 lines. Most of the length is data:
- **`people`** (the board and Founders Council) is typed in the page, and again in `governance.md`. When the roster is confirmed, the Governance page should show the same list.
- **`fit`** (the five audiences) summarizes `partnership.ts`.
- **"This phased approach:"** with its four points is typed on both the homepage and Deployment.
- **The vision list** and the **governance principles** are inline arrays.

**Proposal:**
- move `people` to `src/data/governance.ts`
- move `fit` to `src/data/partnership.ts`
- move the phased-approach points to `src/data/phases.ts`
- extract the 45-line hero into `HomeHero.astro`

The page then reads as the story it tells.

### A3. FAQ lookups by id are written twice, one of them unsafe (low)
`faq.ts` uses `faqs.find(...)!` (a non-null assertion: a wrong id fails at runtime, not at build). The homepage repeats the lookup with its own error.
**Proposal:** one `faqById(id)` in `faq.ts` that throws at build time with the id in the message. Both callers use it.

### A4. Two lists still copy `Row` by hand (low)
Economic Impact's scenario descriptions write `dt`/`dd` grid classes because `Row` has no slot for the colored square before the label.
**Proposal:** give `Row` an optional `marker` slot. This changes the scenario rows' spacing by a few pixels, to match every other `Row`. It's the only change in Part A with a visible effect, so it ships separately with screenshots.

### A5. Unused code paths (low, decide)
`ComingSoon` and the `built` flag in `nav.ts` serve no page today. They're documented as kept for future pages.
**Recommendation:** keep them. They're small and the IA may grow. Note in `nav.ts` that no page uses the flag at present.

---

## Part B — SEO and AEO

### What the site already does well
- **Head tags:** every page has its own `<title>`, its own description, one `<h1>`, a canonical URL and `lang="en"`. The 404 page is `noindex`.
- **Text and alt text:** facts are in HTML text (figures, dates, names), never only in images. Alt text is complete; the decorative news thumbnails correctly have empty `alt`.
- **Dates and deep links:** releases carry `<time datetime>`. FAQ answers have stable deep links (`/faq#developers`).
- **Speed:** images go through `astro:assets`, and fonts are self-hosted and preloaded.

### B1. No structured data anywhere (high: the biggest AEO gap)
Answer engines and Google read JSON-LD to know what an entity is, and the site has none. FSIC's facts are now firm enough to state: the name, the legal name, the 501(c)(3) status, the EIN, New Smyrna Beach, the social profiles and the founding date.

**Proposal:** a `StructuredData` component in `BaseLayout` with:
- **Every page:** `Organization`, subtype `NGO`. Fields:
  - `name` and `legalName` ("Florida Space Innovation Center Inc.")
  - `alternateName` ("FSIC")
  - `url` and `logo`
  - `email` (`info@fsic.space`)
  - `address` (New Smyrna Beach, FL; locality only)
  - `areaServed` (Southeast Volusia County; Volusia County, Florida)
  - `foundingDate` (2026-05-25)
  - `nonprofitStatus` (`Nonprofit501c3`) and `taxID` (EIN), both from `ORG`
  - `sameAs` (LinkedIn, Facebook, X, from `SOCIAL_LINKS`)
- **Every page:** `WebSite` (name, url) on the homepage, and `BreadcrumbList` on interior pages.
- **`/faq`:** `FAQPage` with the 16 questions and their answers as plain text, built from `faq.ts`. Google shows FAQ rich results only for government and health sites now, but answer engines still parse it. It's the most quotable content on the site.
- **Each release:** `NewsArticle` with headline, `datePublished`, image, and `publisher` set to the Organization.

All of it is generated from the existing data (`site.ts`, `faq.ts`, the news collection), so it can't drift from the page.

### B2. No sitemap or robots.txt (high)
Without a sitemap, crawlers discover pages only through links. There's no `robots.txt` either.
**Proposal:**
- `src/pages/sitemap.xml.ts` lists every indexable page from the build. It needs no new dependency, and release pages get `lastmod` from their dates.
- `src/pages/robots.txt.ts` points to the sitemap. Both read `site` and `base`, so they're right under `/fsic` and at fsic.space.

### B3. The GitHub Pages preview is indexable (high; decision)
The preview has canonical URLs on `barrelpixel.github.io/fsic`. If search engines index it now, those URLs compete with fsic.space at launch. This is the open question "Search indexing before launch".
**Recommendation:**
- **Now:** `noindex` on every page and `Disallow: /` in `robots.txt`, controlled by one setting.
- **At launch:** flip the setting when `site` becomes `https://fsic.space`, and add the switch to `06-launch-plan.md`.

AEO crawlers honor `robots.txt` too, so the preview won't leak into AI answers before the real domain exists.

### B4. Old Wix addresses will 404 at launch (high, at launch)
fsic.space's current URLs (`/about-4`, `/copy-of-news-media`, `/talent`, `/innovation`…) carry whatever search ranking and inbound links FSIC has. At the switch they all land on the 404 page. The mapping is drafted in the open question "Redirects from fsic.space" (`08-current-site-audit.md` §1 has the inventory).
**Proposal:** Astro `redirects` in `astro.config.mjs` (a meta-refresh page per old URL, with a canonical to the new page). Add it to the launch checklist, ready before the DNS switch.

### B5. Share images on only 6 of 18 pages (medium)
Only the homepage (the hero photo) and the five releases have `og:image`. A shared link to the FAQ, Economic Impact or Get Involved shows no picture, and answer engines that show link cards show none either.
**Proposal:** the hero photo as the default `og:image` for pages without their own. That's the open question "Default share image": the homepage already uses it. Later, generated per-page cards (title on night) could replace it, but the default comes first.

### B6. Titles (medium)
- **Homepage:** the `<title>` is just "Florida Space Innovation Center" (31 characters). It says nothing about what or where, which is what a searcher scans for.
  Proposal (copy, ⚠ Review): "Florida Space Innovation Center | Space Coast Workforce and Innovation in Southeast Volusia".
- **Releases:** titles run 109–155 characters, because the published headline already contains the name and the site adds " | Florida Space Innovation Center" again. Proposal:
  - drop the suffix when the title already names FSIC
  - add `og:type` `article` with `article:published_time`
  - leave the headline itself as published

### B7. Descriptions (low)
- The homepage uses the default description (170 characters; Google cuts at about 155–160). It doesn't say "nonprofit" or "New Smyrna Beach", the words people search with.
  Proposal (⚠ Review): "A 501(c)(3) nonprofit in New Smyrna Beach building workforce, innovation and industry partnerships so the Space Coast's growth benefits Southeast Volusia." (152 characters)
- Long-Term Vision (194) and Programs & Facilities (180) are long; trim them to about 155.

### B8. Answer-engine readiness of the content (medium)
Answer engines quote short, self-contained statements of fact.
- **One canonical "what is FSIC" sentence.** It exists in three versions: the hero lead, the meta description and the FAQ's first answer. Pick one wording that names what (a nonprofit regional platform), where (New Smyrna Beach, Southeast Volusia), since when (May 25, 2026) and for whom. Use it in the FAQ's first answer, the Organization `description` and the homepage meta description.
- **`/llms.txt`.** A short Markdown index of the site for LLM crawlers: what FSIC is, the key facts, and links to the main pages and the FAQ. It's an emerging convention, cheap to generate from the same data, and it doesn't affect search.
- **The FAQ is the best AEO asset.** It already answers the questions people ask an AI ("Where will FSIC be located?", "How is FSIC funded?"). Keep the answers starting with a direct one-sentence answer before the detail. Most already do; "What economic impact will FSIC have?" opens with "dramatically improves", which an engine may quote out of context. Flag it for the copy review.

### B9. Not in scope here
- **Google Business Profile** (search "Florida Space Innovation Center New Smyrna Beach"). That's an FSIC account, not code. Worth listing on the launch checklist.
- **Analytics and Search Console.** They're needed to measure any of this. Search Console verification goes on the launch checklist (open question "Analytics").

---

## Order

| Step | Work | Approval |
|------|------|----------|
| 1 | B3: noindex on the preview, controlled by one setting | Settles the open question "Search indexing before launch" (recommended answer: yes, keep it out) |
| 2 | B1 and B2: structured data, sitemap, robots.txt | No (data already on the site) |
| 3 | B5 and B6 mechanics: default share image, release title suffix, `og:type` article | Default image: open question, recommend the hero |
| 4 | A1–A3, A5: refactor, screenshot-diffed | No |
| 5 | A4: `Row` marker (small visible change) | No |
| 6 | B6, B7 and B8 copy: homepage title and description, the canonical "what is FSIC" sentence, `llms.txt` | Yes (copy in review) |
| 7 | B4: Wix redirects | The mapping, before the domain switch |

Each step: `npm run check` and `npm run check-links`. Structured data is validated with a schema validator, by parsing every page's JSON-LD in the build.
