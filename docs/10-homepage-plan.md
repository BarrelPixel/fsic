# 10 — Homepage Presentation Plan

**Status:** Track A built (November 10, 2026): A1–A4 are on the page. Tracks B and C are proposed.
**Scope:** `src/pages/index.astro`, `src/content/copy/home.md`, and the data files the homepage reads.
**Builds on:** the homepage review of November 2026 (latest news, the five phases, audience links, common questions). This plan is the next step, not a redo.

---

## 1. What the homepage has to do

The homepage serves six audiences on a first visit: employers, university leaders, policymakers and local government, workforce and economic-development partners, funders, and residents (`02-information-architecture.md`). For each of them it has three jobs, in this order:

1. **Say what FSIC is and why it matters here**, within the first screen.
2. **Show that it is credible and already moving**: the analysis, the plan, and the people.
3. **Hand each audience its next step**, before they stop scrolling.

The design idea in `DESIGN.md` is "from spectator to participant": opportunity flows into Southeast Volusia, not past it. The page should make that argument in order, and each visitor should be able to find their own part in it.

## 2. What works now (keep)

- **The hero photo.** A launch seen from the dunes is the right signature: it's about the region watching the Cape. The phone treatment (photo pinned, text rising over it) is well made.
- **The economic table.** Ranges, range bars that draw in, source and disclaimer: credible and readable. The only automatic animation, used where it explains something.
- **The grid and type.** The 12-column grid, the label-column theses and the three type families give the page an institutional voice. No cards, no hype.
- **Proof of activity.** Latest news, the five phases and the linked common questions (all added in November) moved the page from "planned" to "underway".

## 3. Findings

Ordered by how much each one costs the page with its audience. Measurements are from the current build at 1440 px and 375 px.

### 3.1 The first screen doesn't say what FSIC is (high)
The headline, "A New Commitment to the Space Coast", doesn't name the region or say what FSIC does. The first paragraph is about 1961. The definition ("a coordinated regional platform…") is in the meta description but not on the page; "Southeast Volusia" first appears in the second paragraph. On a 375 × 812 phone the two buttons start about 1,070 px down, below the first screen, after three paragraphs. The 1961 parallel was written for the May 25 launch; six months later it reads as a history lesson before the point.

### 3.2 Audiences find their part only at the end (high)
The links that route each audience to what FSIC offers it are in the closing section, near the end of the page: 8,500 px down on desktop (of 9,600) and 11,500 px on a phone (of 13,600, some 14 screens). An employer or a council member who doesn't read the whole argument never sees "here's your role".

### 3.3 The argument is interrupted, and the page is long (medium)
Order now: why (strategic moment) → how big (economics) → **news** → what (engines) → when (phases) → value → governance → vision → close. News between the economics and the model breaks the why → what → how line. Strategic Value (two points) and Governance (four bullets and a line) are each a full section for little content; they add length (9,600 px desktop, 13,600 px phone) without adding a new idea. Each of their points belongs next to something already on the page.

### 3.4 Progress isn't shown on the timeline (medium)
The five phases list Year 1 to Years 3–5, but nothing says where FSIC is now. FSIC launched on May 25, 2026, so Phase 1 is under way. A visitor evaluating feasibility wants "we are here".

### 3.5 The people behind FSIC are hidden in headlines (medium)
Credibility for this audience is largely who is involved. Four appointments (a school board member, a mayor, a company CEO, a Founders Council member) appear only as long release headlines. Names and roles, stated once and plainly, would do more than any adjective. (They are public in FSIC's own releases; see the caution in §6.)

### 3.6 Copy that undercuts the measured tone (low, needs approval)
- "**Transformational**, Long-Term Regional Impact": the content guidelines prefer "strengthens" over "transforms" unless precise, and the figures make the point on their own.
- The headline figures are the Master Plan's FSIC 2.0 (full implementation) scenario but aren't named as such on the homepage (`08-current-site-audit.md` §3.10, open).

### 3.7 Sharing and follow-up (low)
- The homepage has no share image: a link posted to social media or in an email shows no picture. The hero photo, which FSIC owns, is the obvious one (open question "Default share image").
- There is no way to follow progress from the page except the footer's social links. A visitor who is interested but not ready to partner has no next step.

### 3.8 Imagery of the place (asset gap)
The page has two images: the launch and a concept rendering. Nothing shows the community the page is about (the lagoon, classrooms, local shops, people). `DESIGN.md` already prefers real regional photographs when they exist. This can't be solved in code.

## 4. Proposed page

Same grid, components and design rules. Eight numbered sections become six, and the audiences move up.

| # | Section | Change |
|---|---------|--------|
| — | **Hero** | Headline names the region and the idea; one-sentence definition as the lead; buttons right after it. The 1961 parallel moves down (see 01). |
| — | **Where you fit** (new, unnumbered band directly under the hero) | The five audiences as rows: audience (label column) \| one line on what FSIC offers them, linking to their part of Partnership & Funding or Programs by Audience. Wording comes from `src/data/partnership.ts` overviews. Rows, not cards. |
| 01 | **The strategic moment** | Unchanged argument; opens with the 1961 → 2026 parallel as its lead, shortened. |
| 02 | **The economic case** | Scenario named (if approved); "Alignment with Major Funding Channels" joins the external-funding paragraph, where it belongs. |
| 03 | **The four-engine model** | "Talent Attraction & Retention" joins the Talent Engine's homepage summary or the closing row (it is the Talent Engine's local outcome). |
| 04 | **Phased deployment** | Phase 1 marked "Under way" in text beside its timeframe (no chip; the existing dot plus a word). |
| 05 | **Underway: people and progress** | Latest news (as now), plus a "Who's involved" row with the appointed board and council members by name and role as published, plus Governance condensed to its closing line and the four principles as one `Row`, linking to the Governance page. A "Follow FSIC" line with the social links. |
| 06 | **Long-range vision** | Unchanged. |
| — | **Close** | Buttons and common questions stay. The audience list here becomes redundant with "Where you fit" and can go, or stay as a short reprise. |

Dark/white rhythm stays: night hero → white band and 01 → night 02 → white 03–05 → night 06 → white close → night footer.

Expected effect: the definition and both buttons inside the first phone screen; each audience's next step within the first two screens on desktop; page length down by roughly a fifth.

## 5. Execution

Three tracks. Track A can start now. Tracks B and C wait on copy approval and client input, and each item lands as its own commit so it can be reviewed or reverted alone.

### Track A — structure and code, no new wording

| Step | Work | Files |
|------|------|-------|
| A1 | **Share image**: pass the hero photo (via `getImage()`, 1200 px wide) as `image` to `BaseLayout` on the homepage. Pending the open question; reversible in one line. | `index.astro`, `07-open-questions.md` |
| A2 | **Reorder**: move Latest News after Phased Deployment, so the argument runs why → how big → what → when → proof. Update the `sections` list (running heads follow it). | `index.astro`, `02-information-architecture.md` |
| A3 | **Merge Governance into the news section** as one `Row` (existing approved wording: the four principles, the closing line, the button), dropping its own section. | `index.astro`, `home.md` (layout note) |
| A4 | **Fold Strategic Value's two points** into the sections they support (funding channels → economic case; talent retention → engines' closing row), wording unchanged. | `index.astro`, `home.md` (layout note) |

### Track B — new or changed wording (write in `home.md` first, marked ⚠ Review)

| Step | Work | Depends on |
|------|------|------------|
| B1 | **Hero**: a headline that names Southeast Volusia and the idea (draft options in `home.md`, e.g. built from the live site's "opportunity flows into Southeast Volusia — not past it"), the definition already used as the meta description as the lead, buttons directly after. Move the 1961 paragraph to open 01. | Client approval of the hero copy |
| B2 | **Where you fit** band: five rows, each a one-line offer drawn from `partnership.ts` (no new claims), linked as the close's audience list is now. Add `homeLine` to the partner data so the line is defined once. | B1 (they share the first screen) |
| B3 | **"Under way" on Phase 1**, read from `phases.ts` (a `current` flag), so it moves when the phase does. | Client confirms which phase(s) are active |
| B4 | **Who's involved** row: names and roles exactly as in the releases, each linking to its release. | Client confirms titles and the seated board (open question "Titles") |
| B5 | **Economic headline and scenario**: replace "Transformational" (draft options in `home.md`); name the scenario in the intro if decided. | Open question "Economic scenario" |
| B6 | **Follow FSIC** line in the news section from `SOCIAL_LINKS` (and a newsletter sign-up, if one is chosen). | Newsletter decision for the sign-up part only |

### Track C — inputs from the client

- **Regional photography** (lagoon, beach launch viewing, classrooms, shops, people at FSIC events), with rights. When it exists, one photo could open the "Where you fit" band or sit with the engines; until then, none.
- **Hero source image** larger than 1440×900 (it's soft on large and high-density screens).
- **Analytics choice**, so the effect of these changes (button clicks, scroll depth, which audience links are used) can be measured rather than assumed.
- **Approvals**: B1, B5 and the remaining ⚠ Review items already in `home.md`.

### For every step

1. Copy changes go into `home.md` first (status Draft for that section, ⚠ Review on new lines), then the page.
2. `npm run check` and `npm run check-links` pass.
3. Check at 1440 px and 375 px: nothing scrolls horizontally, focus is visible, the label and content columns share their top line, and hero text contrast stays at 6:1 or better if the hero changes.
4. Update `02-information-architecture.md` (homepage key content) and the status table in `09-copy-deck.md`.

## 6. Constraints this plan keeps

- No cards, chips, pills, all-caps labels, scroll fade-ins or new animations; the range bars stay the only automatic animation and the hero photo the only signature element.
- Economic figures stay ranges from `src/data/economics.ts`.
- No campus site named. No invented partners, quotes, logos or statistics: the "Where you fit" lines come from the Master Plan wording already in `partnership.ts`, and names come only from FSIC's own releases.
- The Governance page leaves board names out until the roster is confirmed, so B4 waits for the same confirmation rather than putting names on the homepage first.
- Orange stays industry, lagoon stays community: the "Where you fit" community row and the residents' links use lagoon; nothing new is colored for decoration.

## 7. Suggested order

1. A1–A4 in one pull request (structure only; existing approved wording).
2. B1–B2 drafted in `home.md` and sent for approval together, since they are the first screen.
3. B3–B6 as their open questions are answered.
4. Track C as assets and decisions arrive.
