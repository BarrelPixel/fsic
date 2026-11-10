# 12 — Homepage Engagement Review

**Status:** Built (November 10, 2026): 2.1–2.7 are on the page. 2.8 waits for the client's copy review. New copy is in `home.md`, marked ⚠ Review.
**Builds on:** `11-homepage-story.md` (built). That review put the sections in story order. This one asks two other questions:
1. **Does the page hold attention?** Does each section give a reason to read the next?
2. **Can a visitor find what they came for** without reading the whole story?

Reviewed on the built page (`main`, November 10, 2026), from its text and screenshots at 1440 and 375 px.

Every proposal below uses material that is already published or approved: FSIC's own press releases, approved copy on other pages, and cited sources. Nothing is invented (`03-content-guidelines.md`).

---

## 1. What a story needs, and what the page has

A story holds attention when it has a person, a problem with stakes, evidence that the problem is real, and a way through. The page has the way through (the engines, the phases) and the evidence (the economics). It is missing the other two.

| Element | On the page now | Available, already published or approved |
|---------|-----------------|------------------------------------------|
| **A person** | None until the board list in section 04, as names only | Erik Ahlgren's quote in the launch release (May 25, 2026): he moved home to New Smyrna Beach, but nearly every space job "required long commutes to the Cape or Orlando". FSIC "brings the industry closer to Southeast Volusia so talent doesn't have to leave the community." |
| **Stakes** | "Without coordination, growth concentrates elsewhere." (abstract) | The Strategic Moment page's approved pair. **Without FSIC**, Volusia County risks becoming "a logistics corridor, a low-wage service economy, a commuter community for neighboring counties". **With FSIC** it becomes "a magnet for high-value employers…" Also "The next five years will determine…" |
| **Scale** | "Florida's space economy is expanding rapidly" (vague) | "The Space Coast is now the busiest launch corridor in the world" (approved, Strategic Moment). The global space economy grows "from roughly $630 billion in 2023 to $1.8 trillion by 2035" (FAQ, cited to WEF and McKinsey, April 2024) |
| **Evidence** | The economic ranges | Unchanged |
| **Progress** | "Year 1 · Underway" in small type at the bottom of the Talent column | Unchanged; it just needs to be visible |

## 2. Findings

### 2.1 The page has no person in it (high)
The hero states a principle and section 01 states a thesis. Neither shows anyone it happens to. The most compelling account of the problem is already published by FSIC: its Board Chair moved home and found the industry he trained for an hour's drive away. That is the problem in one person, and it's a story that engineers, parents and council members all recognize.

**Proposal:** in 01, put the quote in the label column, in place of "Without coordination, growth concentrates elsewhere.". Cut it to its two strongest sentences, attributed "Erik Ahlgren, Board Chair, at FSIC's launch". Set it in Lead type (a quote is not a thesis statement). The source is the release, so it's not an invented testimonial. The project lead confirms the cut.

### 2.2 The stakes are abstract (high)
"Without coordination, growth concentrates elsewhere" asks the reader to imagine the cost. The approved Strategic Moment pair names it: commuter community, low-wage service economy, logistics corridor. That's the tension the rest of the page resolves.

**Proposal:** under 01's two paragraphs, add the pair as two adjacent rows, the DESIGN.md before/after pattern. "Without FSIC, Volusia County risks becoming:" gets a gray dot (problems). "With FSIC, Volusia County becomes:" gets a lagoon dot (community impact). This is the same structure and wording as the Strategic Moment page, so the homepage teaser and the page agree.

### 2.3 The scale is a vague claim when a number exists (medium)
"Expanding rapidly" is the kind of claim the content guidelines ask to replace with a number. Two approved facts do the job: "the busiest launch corridor in the world" and "$630 billion in 2023 to $1.8 trillion by 2035".

**Proposal:** 01's first paragraph uses both. The source line goes under the section, as it does in the FAQ. The figure is global, so the paragraph says so.

### 2.4 Progress is the strongest proof, and it's in the smallest type (medium)
"Year 1 · Underway" sits in label-size type at the bottom of the first engine column, and its height shifts with the summary above it. Engines starting in order is the section's headline, but nothing shows it at a glance.

**Proposal:** under the four engine columns, a single **Years 1–5 track** with one bar per engine, starting where each starts. This reuses the pattern the Deployment and Partnership & Funding pages already use for years. Each bar is in its engine's color (`toneBg`), with a "Now" mark at Year 1. It's static, so it's not a second animation. The "Year 1 · Underway" line can then go.

### 2.5 Section 04 tells the same news twice (medium)
The three release headlines are all appointments ("Florida Space Innovation Center Announces Appointment of…"). The board list two screens later names the same people, and their names already link to those releases. A reader meets Ryan Trine and Diezel DePew twice.

**Proposal:** lead 04 with **the people**: the board and Founders Council rows, with names linking to their releases as now. Drop the three-headline list. "All News & Media" and the follow line stay as one line. Governance's principles follow. The section gets shorter, and proof by people beats proof by press-release titles. When a release that isn't an appointment arrives (a program, a partnership), it can return as "Latest:" followed by one headline.

### 2.6 "Find your part" adds a hop (medium)
Each hero audience link jumps 7,000 px down to the close, whose row then links to the page that has the answer. An employer who knows what they want clicks twice and scrolls through the whole story to get there.

**Proposal:** the hero links go **straight to the destination**: Partnership & Funding, Employers & Industry; and so on. The close keeps its rows for readers who arrive there by reading. That's one click to the answer from the first screen.

### 2.7 The question residents ask most isn't among the common questions (medium)
The close lists four FAQ questions. It leaves out "What is the role of developers in the FSIC?". In a region where, as the FAQ itself says, "many residents value slow growth", that's the question that decides whether a resident trusts the rest of the page, and FSIC's answer to it is strong.

**Proposal:** add it to the common questions (five), linking to its FAQ answer.

### 2.8 Smaller items
- **The engines' "Transforming … into …" lines** (4 times): the content guidelines prefer "strengthens" unless the word is precise. It's approved Model copy, so flag it for the client rather than change it.
- **"View Economic Impact"** is the hero's second button. For a first-time visitor, "How it works" (the Model page) may be the more common next question. That's a judgment call for the client: it ties to the open question "Stakeholder CTA priorities".
- **The economic intro is long** ("Independent 25-year analysis projects that FSIC will generate, with full implementation (the Master Plan's FSIC 2.0 scenario):"). The scenario name could move to the source line, so the intro reads in one breath. It's in review already.

## 3. Proposed changes by section

| Section | Change | Approval |
|---------|--------|----------|
| Hero | "Find your part" links go straight to each audience's page (2.6) | No (link targets only) |
| 01 Why now | The quote replaces the label (2.1). The first paragraph uses the sourced scale (2.3). Without / With rows from Strategic Moment (2.2) | The quote's cut, and placing approved lines on the homepage (⚠ Review) |
| 02 What it's worth | Optional: scenario name to the source line (2.8) | In review already |
| 03 How it works | A Years 1–5 track for the four engines with a "Now" mark; drop the small timing lines (2.4) | No (layout; data from `phases.ts`) |
| 04 Where it stands | People first; drop the three appointment headlines (2.5) | No (wording unchanged) |
| Close | Add the developers question (2.7) | No (FAQ question as published) |

Expected effect: the first two screens give a person, a problem with stakes and a sourced sense of scale before the evidence. Progress is visible at a glance. Section 04 gets shorter. Every audience is one click from its answer.

## 4. Order

1. 2.6, 2.7, 2.5 and 2.4: no new wording, so they can go in now.
2. 2.1, 2.2 and 2.3 as one change to section 01: approved wording moved onto the homepage, plus the quote's cut, marked ⚠ Review in `home.md`.
3. 2.8 with the client's copy review.

Each step: `npm run check` and `npm run check-links`, screenshots at 1440 and 375 px, and the copy deck and IA updated.
