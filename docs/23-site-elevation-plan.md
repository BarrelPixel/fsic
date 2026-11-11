# 23 — Site Elevation Plan (interior pages)

**Status:** Proposed (November 11, 2026). Nothing in this plan is built yet.
**Builds on:** the homepage reviews (`10-homepage-plan.md`, `11-homepage-story.md`, `12-homepage-engagement.md`). The same lenses, applied to the twelve interior pages:
1. **Story:** does each page, and the site as a whole, run in an order a reader can follow?
2. **Answer first:** does the first screen answer the page's question?
3. **People and stakes:** is there a person and a concrete reason to care?
4. **Findability:** can each visitor reach their next step without reading everything?

Measured on the built site (`main` at 2c0ca30) at 1440 × 900 and 375 × 812.

| Page | Desktop | Phone | Words | Links to other pages |
|------|---------|-------|-------|----------------------|
| The Strategic Moment | 4,460 px | 6,338 px | 410 | 3 |
| Economic Impact | 7,628 | 12,152 | 982 | 5 |
| Long-Term Vision | 5,263 | 7,760 | 555 | 3 |
| The FSIC Model | 7,504 | 11,430 | 749 | 4 |
| Phased Deployment | 7,569 | 11,593 | 802 | 4 |
| Programs & Facilities | 7,189 | 10,311 | 791 | 4 |
| Governance & Transparency | 8,845 | 13,425 | 1,094 | 2 |
| Partnership & Funding (Get Involved) | 7,928 | 12,574 | 1,181 | 3 |
| News, FAQ, Contact, Blog | 1,700–3,400 | 2,700–4,800 | 130–260 | 3–8 |

---

## 1. What already works

- **One template, applied faithfully.** Every content page opens with `PageHero`, has a section index and sticky `SectionBar`, numbered sections on the 12-column grid, and a `Closing`. A visitor learns the layout once.
- **The structure shows the content.** Range bars, the Years 1–5 track, the engine rows and the partner rows are each the right shape for their content.
- **Sourced and careful.** Figures are ranges with sources and disclaimers, and no site is named.

The problems are the ones the homepage had before its rounds of review, repeated across the site.

---

## 2. Site-wide findings

### S1. Every page opens with a table of contents, not an answer (high)
Each hero is the title, a general lead sentence ("FSIC operates under a partner-first, coalition-driven governance structure."), then the index of sections. The answer to the page's own question comes two or three screens down:
- **Economic Impact** doesn't show a single figure on its first screen. Its hero statement is still "Transformational, Long-Term Regional Impact", the line the homepage dropped.
- **Get Involved** (Partnership & Funding) doesn't say how to get involved, or show a button, until the end (7,900 px).
- **Governance** doesn't say who governs.

**Proposal: an answer-first hero on every page.** Keep the template, and replace the lead with the page's answer in two or three plain sentences. Put the one fact or action that matters most on the first screen:
- the 25-year ranges on Economic Impact
- "Year 1: the Talent Engine, underway" on Deployment
- the first step for each partner on Get Involved

This is the summary rule from the blog strategy (`14` §4), applied to pages. It also gives answer engines the passage to quote.

### S2. The pages don't lead anywhere in order (high)
Each page ends with two buttons chosen one page at a time. Model leads to Deployment and Programs; Deployment leads back to Model. No page carries the reader through the argument the menu implies:

Why now → What it's worth → How it works → When → What it offers → Who runs it → Get involved

**Proposal: a "Next" link at every page's close, in story order**, under the closing statement and before its buttons, so a reader can go through the whole site like one long homepage:
- Strategic Moment → Economic Impact → The Model → Phased Deployment → Programs & Facilities → Governance → Get Involved
- Long-Term Vision → Get Involved

The order is defined once (`src/lib/nav.ts`), so it can't drift.

### S3. Pages don't connect to the posts that explain them (high)
There are now 16 blog posts written: three published and thirteen in review. Each has a topic tied to a pillar page (`14` §3), and the strategy says "the pillar can list its posts later." No page does yet: the Model page doesn't link the micro-credential or challenge-lab posts, and Economic Impact doesn't link the job-year post.

**Proposal: "Read more on this topic"** near each pillar page's close: its published posts, newest first, from `TOPICS`. This turns the posts and pages into the topic clusters the strategy describes, the strongest internal-linking signal the site can give. It only shows published posts, so it fills as the drip schedule runs.

### S4. No people on the pages that need them most (medium)
- **Governance** describes the board's structure but names no one. The homepage now lists the board and Founders Council, and Erik Ahlgren's quote opens "Why now".
- **Get Involved** names no contact.

**Proposal:**
- Governance shows the same board and council list as the homepage, from `src/data/governance.ts`, with the same ⚠ Review on titles.
- Strategic Moment's opening can carry Erik Ahlgren's quote, moving it from the homepage label if FSIC prefers it in one place.

### S5. Each page's questions are answered only on the FAQ (medium)
The FAQ's sixteen answers each belong to a page: the developers question to Governance, funding to Get Involved, location to Programs & Facilities. Visitors on those pages don't see them.

**Proposal: "Questions about this"** near each page's close: the two or three FAQ questions that belong to it, linking to their answers (`/faq#id`). The question list is defined once (`faqById`).

### S6. Copy the homepage already fixed, still on the pages (low; copy approval)
- **Hype:** "Transformational" (Economic Impact hero), "Once-in-a-Generation Catalyst" (Strategic Moment), and the engines' "Transforming … into …" lines.
- **"Coordinated"** opens or closes most pages.
- **Long-Term Vision's lead isn't a sentence** ("A Permanent, Multi-University, Cultural, and Innovation Anchor for the Space Coast").
- **Titles mix labels and slogans:** "Economic Impact" versus "Partner. Collaborate. Participate.". The menu labels the pages; the H1s could all be plain names, with the claim in the answer-first lead.

These go to the copy deck as drafts (⚠ Review), as the homepage's did.

### S7. Long pages without a shortcut (medium)
Governance (13,400 px on a phone) and Get Involved (12,600 px) are the longest pages and the ones partners and funders read most closely.

The answer-first hero (S1) is the shortcut. It means a reader who stops after the first screen still has the answer, and the section bar takes them to the detail. No content needs cutting. Where a section repeats another page (Governance's metrics against Economic Impact's), say so and link instead.

---

## 3. Page by page

| Page | Answer first (S1) | Other changes |
|------|-------------------|---------------|
| **The Strategic Moment** | "The Space Coast is growing either way. The next five years decide whether Southeast Volusia takes part." Then the Without / With FSIC pair, which is already on the page. | Optional: Erik Ahlgren's quote (S4). Drop "Once-in-a-Generation" (S6). Next: Economic Impact |
| **Economic Impact** | The four 25-year ranges on the first screen, with the scenario named and the disclaimer. Replace "Transformational…" with the homepage's "What Participation Is Worth Over 25 Years" | Posts: job-year, scenarios, measuring impact (S3). Questions: economic impact, funding (S5). Next: The Model |
| **The FSIC Model** | "Four engines, started in order: Talent now, then Innovation, Market and Civic." With the Years 1–5 track from the homepage | Posts by engine (S3). Next: Phased Deployment |
| **Phased Deployment** | "Year 1: the Talent Engine is underway." The track, with "Now" | Questions: first programs (S5). Next: Programs & Facilities |
| **Programs & Facilities** | "What FSIC offers you": by audience, first screen. Students and families, adults, businesses, community, each linked to its row | Posts: micro-credentials, dual enrollment, apprenticeships, challenge labs, Civic Engine (S3). Questions: residents, businesses, location (S5). Next: Governance |
| **Governance & Transparency** | "An independent board of community and industry leaders, accountable in public." The board and council named (S4) | Questions: developers, competition with institutions, leadership (S5). Posts: backbone organization, how FSIC is governed, 501(c)(3) (S3). Next: Get Involved |
| **Partnership & Funding (Get Involved)** | "How to take part": each partner type's first step and a contact, on the first screen, with the primary button | Questions: funding, get involved (S5). Posts: SBIR/STTR, becoming a supplier (S3). Closing buttons: Contact and email by topic |
| **Long-Term Vision** | A full-sentence lead. The concept rendering earlier | Next: Get Involved |
| **News & Media** | — | Link the blog ("Explainers and guides") alongside |
| **FAQ** | — | Each answer's "on this page" link exists. Add "Read more" to a post where one answers the question in depth (S3) |
| **Contact** | — | Fine as is |
| **Blog** | — | Topic filter once more than a dozen posts are published |

---

## 4. Order of work

| Step | Work | Approval |
|------|------|----------|
| 1 | **S2 Next links, S3 topic posts, S5 page questions.** Shared components, data defined once, no new wording beyond labels | No (labels only) |
| 2 | **S4 board on Governance.** Same data and review status as the homepage | Titles still ⚠ Review (open question "Titles") |
| 3 | **S1 answer-first heroes, one page at a time.** Economic Impact and Get Involved first (the biggest gaps), then the rest. Facts on the first screen come from existing data; leads are new copy | Yes: drafts in each page's copy file (⚠ Review) |
| 4 | **S6 copy pass** with the client's review | Yes |

Each step:
- `npm run check` and `npm run check-links`
- screenshots at 1440 and 375 px
- a pixel diff of pages that shouldn't change
- the copy deck and IA updated

Expected effect: every page answers its question on its first screen; a reader can follow the site in order from any page; and each pillar page connects to its posts and questions.
