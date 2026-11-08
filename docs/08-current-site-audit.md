# 08 — Current Site Audit (fsic.space)

**Audited:** November 7, 2026
**Site:** https://www.fsic.space (Wix)
**Purpose:** List every page on the current site, say which copy can move to the new site, and log the conflicts that need a decision before that copy is approved.

The copy that can move has been placed into the per-page copy files in `src/content/copy/`. See `09-copy-deck.md` for how those files work.

---

## 1. Page Inventory

The Wix sitemap lists 33 URLs. Only five are linked from the navigation. The rest are hidden pages, unused Wix template pages, or app pages left from the template.

### Linked from navigation

| Page | URL | Content | Migrate? |
|------|-----|---------|----------|
| Home | `/` | Hero, four engine summaries, "engine" definition, latest blog posts, newsletter signup | Yes, in part (engine summaries, engine definition) |
| About | `/about-4` | Why FSIC, four engines, phased model, Why Now, development catalyst, contact form | **Yes.** This is the main source of long-form copy |
| News & Media | `/news` | Four press releases (May 25 to July 29, 2026) | **Yes**, all four |
| FAQ | `/copy-of-news-media` | Mission, vision, 16 Q&As | **Yes**, all of it |
| Talent Engine | `/talent` | Overview and 6 components (linked from the home page card only) | **Yes** |

### Not linked, but with real copy

| Page | URL | Content | Migrate? |
|------|-----|---------|----------|
| Innovation Engine | `/innovation` | Overview and 6 components. **Not linked anywhere** | **Yes** |
| Market Engine | `/market` | Overview and 6 components. **Not linked anywhere** | **Yes** |
| Civic Engine | `/civic` | Overview and 6 components. **Not linked anywhere** | **Yes** |
| John Joaquin | `/john-joaquin` | Founder bio, community leadership, career, education | Yes. Contact block is placeholder |
| News & Media (old) | `/about-7` | Duplicate of `/news` | No (duplicate) |
| Why we are building FSIC | `/1-why-we-are-building-the-fsic` | Older draft of About, using the Master Plan's single-development figures, mixed with Wix placeholder text | No. Useful only for the figure conflict (§3.1) |
| Alternate home | `/copy-of-home` | "A Future We Shape Ourselves" (short manifesto) | Maybe. Kept in `faq.md` as an unused block |

### Placeholder or template content (do not migrate)

| Page | URL | Problem |
|------|-----|---------|
| Leadership | `/leadership` | Wix sample team ("Ashley Jones, Tech Lead", "Tess Brown", "Lisa Rose"); only John Joaquin is real. `info@mysite.com`, `123-456-7890` |
| Book Online / Services | `/book-online`, `/service-page/*` | Sample services with made-up prices: Challenge Lab $100, STEM Outreach Event $80, Micro-Credential Academy $250 |
| Events | `/event-list`, `/event-details/*` | Three sample events, all "Jan 15, 2026, 8:33 AM", registration closed |
| Programs | `/challenges`, `/challenge-page/*` | Three "Free" online programs with no content |
| Blog | `/blog`, `/post/*` | Three posts dated Dec 15, 2025. They read as generic filler (TechShop, Detroit community gardens, Code for America) and conflict with the content guidelines. Recommend retiring them |
| Privacy Policy | `/blank` | Unedited Wix template |
| Accessibility Statement | `/blank-1` | Unedited Wix template with `[enter organization name]` placeholders |
| Terms & Conditions | `/blank-2` | Unedited Wix template |
| Refund Policy | `/blank-3` | Unedited Wix template (unlabeled link in the footer) |
| General, Coming Soon, Home copy | `/general-clean`, `/coming-soon-03`, `/copy-of-home-1` | Template text or copies of the home page |

**Note:** The legal pages are live and linked in the footer, but they contain template text. The new site should not launch with legal links until real policies exist (see `07-open-questions.md`, Legal & Compliance).

---

## 2. Where the Current Copy Goes on the New Site

| New page | Copy file | Copy taken from fsic.space | Remaining gaps |
|----------|-----------|----------------------------|----------------|
| Home `/` | `home.md` (approved, unchanged) | — | Consider adding the mission statement (§3.7) |
| The Strategic Moment | `strategic-moment.md` | About → "Why Now" (whole section) | Hero, CTA |
| The FSIC Model | `model.md` | Engine definition, About engine summaries, all 24 engine components | Guiding principles, how the engines reinforce each other |
| Economic Impact | `economic-impact.md` | FAQ economic answer and disclaimer | Three-scenario comparison, ROI framework (Master Plan) |
| Phased Deployment | `deployment.md` | About → phased model, FAQ → first programs | Milestones, facilities per phase (Master Plan) |
| Programs & Facilities | `programs-facilities.md` | FAQ → residents, businesses, location | Program details, facilities plan |
| Governance | `governance.md` | FAQ → leadership, neutrality, developers; board members from press releases; structure, reporting and metrics from the Master Plan | Confirmed board roster, bios and photos; founder transition wording |
| Partnership & Funding | `partnership-funding.md` | FAQ → funding, get involved; launch release → three core benefits | Stakeholder value propositions, financial outlook |
| Long-Term Vision | `long-term-vision.md` | FAQ → "What could FSIC look like" | Visuals; location wording (§3.3) |
| Contact | `contact.md` | Contact form, email, location, social links | Routing, form backend |
| *Proposed:* FAQ | `faq.md` | Entire FAQ page | — |
| News & Media (built) | `news.md`, `src/content/news/` | All four press releases | Images and their usage rights; one standard boilerplate |
| *Proposed:* Leadership | `leadership.md` | John Joaquin bio | Board member bios |
| Site-wide | `site-wide.md` | Footer, social links, newsletter | Legal pages |

**Recommendation:** Add **FAQ**, **News**, and **Leadership** to the information architecture (News is now built) (`02-information-architecture.md`). The current site's best copy is in these three pages, and stakeholders already link to the press releases.

---

## 3. Conflicts to Resolve Before Approval

These conflicts are between the current site, the source PDFs, and the new site build. Each one is also flagged inline (⚠) in the copy file it affects.

### 3.1 Development scale figures (high priority)
- **Current About page:** "more than **20,000** new homes and over **12 million** square feet of industrial and commercial space planned across the region … in Edgewater, New Smyrna Beach and Daytona Beach."
- **Older About draft and Master Plan (pp. 4, 6):** a single named development "will add more than **10,000** homes and over **10 million** square feet."
- **FAQ:** "tens of thousands of new homes approved across Edgewater, New Smyrna Beach, and Daytona Beach."

These figures describe different areas (all of Southeast Volusia versus one development). Decide which framing the new site uses and give a source for the regional figure, which is not in the PDFs.

### 3.2 Economic impact: ranges versus upper bound (high priority)
- `home.md` (approved) and the Master Plan give **ranges**: $10.2–$12.4B, 74,500–79,500 job-years, $1.35–$1.55B, $690–$910M.
- The built home page (`src/pages/index.astro`) shows **only the top of each range** ($12.4B, 79,500, $1.55B, $910M) under "projects that FSIC will generate."
- The current FAQ uses conservative wording ("over $10 billion", "more than $1 billion") and adds a disclaimer.

The built page doesn't match the approved copy, and it doesn't follow the content guidelines (figures must match the PDFs). Either show the ranges, or label the figures as "up to" and add the disclaimer.

**Status (November 2026): resolved.** The home page now shows the full ranges with range bars, the source and the disclaimer. The Economic Impact page does the same. See §3.10 for a related open question about which scenario the figures describe.

### 3.3 Location
- **Current FAQ:** "FSIC is a virtual organization located in New Smyrna Beach. A specific future site in Volusia County will be determined through a collaborative process."
- **Current FAQ (developers):** "FSIC does not endorse specific projects or drive development."
- **Master Plan and the first build of the new home page:** named a specific campus site.
- The current About page has replaced the site name with regional language.

**Decision (November 2026):** the project lead chose not to name a site anywhere on the new site or in its docs. The home page vision headline is now "A Landmark Campus for Southeast Volusia". The Economic Impact page drops the absorption-timeline figures and the development size, which were about the named development, and the Deployment page drops the Phase 5 activity that named it.

### 3.4 Number of phases
- **Master Plan:** five phases (Talent → Innovation → Market → Civic → Integration) over Years 1–5.
- **Current FAQ:** three phases (Talent; Innovation; Market and Civic together).

Use one model across the deployment page, the FAQ, and the home page.

**Decision (November 2026):** the project lead chose the Master Plan's **five phases**. The Deployment page uses them, with the Master Plan's timeframes (Year 1; Years 1–2; 2–3; 2–4; 3–5). Still to do: rewrite the FAQ answer (`faq.md`). The home page's two-stage summary ("First: the Talent Engine" / "Then: Innovation, Market, and Civic") is compatible and can stay. Open: the Master Plan's year-by-year milestones (pp. 33–34) sequence the phases one per year, which doesn't match the overlapping phase table; the page leaves the milestones out until FSIC confirms which is current.

### 3.5 Claims not in the source PDFs
Under the content guidelines, these need a citation before they are used:
- "The global space economy is projected to grow from roughly $630 billion today to more than $1 trillion within the next decade" (FAQ)
- "SpaceX's IPO S-1 filing … $28.5 trillion market opportunity" (FAQ)
- ~~"By Year 3, FSIC is positioned to sustain 30–50% of its operating budget through recurring earned revenue" (About).~~ **Confirmed** in the Master Plan (pp. 2 and 27); used on the Deployment and Partnership & Funding pages.
- "Billions in funding … flowing to regions" (About)

### 3.6 Leadership titles
- The current leadership page lists John Joaquin as **"Founder & CEO"**. The Master Plan (p. 17) describes the founder as an **unpaid CEO during startup**, who later moves to an advisory role.
- Press releases name **Erik Ahlgren** as "founding leader" and "Communications Leader" (May 25), then as **"Board Chair"** (July 29).
- FAQ: "more than **four decades** of experience". Bio: "decades".

Confirm current titles and the full seated board. The July 7 release mentions an **inaugural board meeting in September**, so more members may have been seated since then.

### 3.7 Mission and vision statements
The FAQ page has a formal **mission statement** and **vision statement**. The new site has neither. They have been copied into `faq.md`. Decide where they appear (home, governance, or an About section).

### 3.8 Contact details
- The current footer shows `info@FSIC.space`, but the link sends to **`info@mysite.com`** (a Wix placeholder).
- The founder bio and service pages show `info@mysite.com` and `123-456-7890`.
- The source PDFs list a personal email and phone number for John Joaquin. Decide whether these are public or whether all contact goes to `info@fsic.space`.

### 3.9 Things the current site has that the new build does not
- **Social links:** LinkedIn, Facebook, X (@FLSpaceCenter). Now in the new footer.
- **Newsletter signup** (email and opt-in). Already an open question in `07-open-questions.md`.
- **Logo:** now in the header and footer from a PNG (300×128). Still ask for an SVG or larger source (see `07-open-questions.md`, Branding).

### 3.10 Which scenario the headline figures describe (high priority)
- The chart on Master Plan p. 8 compares three 25-year scenarios: **Baseline (No FSIC)**, **FSIC 1.0** (the foundational program phase) and **FSIC 2.0** (a full innovation district anchored by NASA, universities, employers and a convention and performing arts center).
- The headline figures used everywhere ($10.2–$12.4B output, 74,500–79,500 job-years, $1.35–$1.55B wages, $690–$910M fiscal, $800M–$1.56B funding) are the **FSIC 2.0** values. FSIC 1.0 is $8.1–$9.7B output, $250–$500M funding, $420–$520M fiscal, $1.05–$1.25B wages.
- The approved home page introduces them as "Independent 25-year analysis projects that FSIC will generate:" without naming the scenario. The current FAQ says "with full implementation", which fits FSIC 2.0.
- The Economic Impact page labels them "Extended FSIC (FSIC 2.0) scenario" and shows all three scenarios.
- Two possible errors in the same chart: **job-years** are 18k–22k for both Baseline and FSIC 1.0, and **fiscal impact** is labeled "City + County" while the text (p. 7) says "local and state governments".

Decide whether the home page should name the scenario, and confirm the two chart values with whoever produced the analysis.

---

## 4. Tone Notes

Some current copy uses words the content guidelines avoid: "powerhouse", "unprecedented speed", "dramatically", "once-in-a-lifetime", "premier hub", "proud to announce". The copy files keep the current wording word for word so that it can be traced back. Edit it to the guidelines when moving a file from **Draft** to **In review**.

The current site uses non-breaking hyphens (U+2011) in many words, such as "micro‑credential". The copy files use plain hyphens instead.
