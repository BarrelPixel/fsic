# 11 — Homepage Story Review

**Status:** Built (November 10, 2026): S1–S7 are on the page. New copy is in `home.md`, marked ⚠ Review. Result: 10,135 → 8,523 px on desktop (−16%), 14,555 → 12,540 px on a phone (−14%), 11 buttons → 4. The phone hero buttons are unchanged (815 px on 375 × 812); see §3.9.
**Builds on:** `10-homepage-plan.md` (Tracks A and B are on the page). That plan fixed what the first screen says and where each audience finds its part. This review is about the **story**: whether a visitor who keeps scrolling is carried from one section to the next, and whether someone who only skims the headlines gets the argument.

Measured on the built page (`main`, November 10, 2026) at 1440 × 900 and 375 × 812: 10,135 px tall on desktop (11 screens), 14,555 px on a phone (18 screens), about 1,080 words, 11 buttons.

---

## 1. The story the page should tell

One line per beat, in order. Each section should answer the question the one before it raises.

1. **The promise** (hero): opportunity should flow into Southeast Volusia, not past it.
2. **Why now** (01): the Space Coast is growing either way; the region has to choose to take part.
3. **What it's worth** (02): 25 years of output, jobs, wages and revenue, as ranges.
4. **How it works, and when** (03–04): four engines, starting with Talent, phased in over five years.
5. **Proof it's real** (05): launched May 25, 2026, with a board, a council and releases since.
6. **Where it leads** (06): a permanent anchor institution.
7. **Your part** (close): what each kind of visitor can do next.

## 2. How the page reads now

| Order | Section | Beat | What gets in the way |
|-------|---------|------|----------------------|
| Hero | Opportunity That Flows Into Southeast Volusia — Not Past It | Promise | On a phone, the buttons start at the bottom edge of the first screen |
| — | Where You Fit | Your part | Asks "what's your role?" before the page has made the case. Seven beats are told in the order 1, 7, 2, 3… |
| 01 | The Question Is Not Whether… | Why now | Opens with the 1961 parallel, a history detour before the argument. Four paragraphs plus a closing line |
| 02 | Long-Term Impact for the Region | Worth | Strong table. The headline is generic. |
| 03 | One Coordinated Platform… | How | Four equal columns; nothing says which comes first |
| 04 | Start Small… | When | Its first two paragraphs repeat the engines just above. 03–05 are three white sections in a row, about 4,000 px of text |
| 05 | FSIC Is Underway | Proof | The release headlines all start "Florida Space Innovation Center Announces…" |
| 06 | A Landmark Campus… | Future | Good |
| Close | Partner. Collaborate. Participate. | Your part | Its paragraph lists the five audiences again in prose, after Where You Fit already did it in rows |

## 3. Findings

### 3.1 The audience band interrupts the story (high)
Where You Fit fixed a real problem: the audience links used to be 8,500 px down. But putting the full five-row band under the hero puts the ask before the case. A visitor gets "here is your role" before "here is why it matters", and the close then says the same thing a second time.

**Proposal:** split the job in two.
- A **one-line audience index in the hero**, under the buttons: "Find your part: Employers · Universities · Local government · Workforce partners · Residents". Each name links to its row in the close. It's one line of UI, so routing stays in the first screen.
- The **full rows move to the close**, replacing the prose paragraph that lists the same five audiences. The close becomes the payoff: the story ends with "here's your part", and that's where the hero's links land.

### 3.2 "How it works" and "When" tell the same thing twice (high)
03 lists the four engines. 04 opens by saying Talent launches first and the others follow, then lists five phases named after the same engines. A reader meets each engine twice, two sections apart.

**Proposal:** one section, "How it works":
- the four engine columns as now
- under each engine name, its phase and timeframe (Talent: Phase 1 · Year 1 · Underway; Innovation: Years 1–2; Market: Years 2–3; Civic: Years 2–4)
- Phase 5 (Full Ecosystem Integration, Years 3–5) and "This phased approach: reduces risk…" as the closing row
- one link to the Model page and one to Deployment

This removes a section and about one screen, and breaks up the run of three white sections. The "what" and the "when" are then visible together.

### 3.3 The 1961 parallel belongs to the launch, not the argument (medium)
In 01 it sits between the headline's question and the answer, as the first thing read. Its real point is the launch date, which is the opening of the proof section ("Launched May 25, 2026").

**Proposal:** open 05 with the parallel ("On May 25, 1961… Sixty-five years later, on the same date, Southeast Volusia launched FSIC"), followed by the releases since. 01 then goes straight from the question to the answer.

### 3.4 Wayfinding: the running heads could carry the story (medium)
The running-head labels are topic names ("The strategic moment", "The economic case"). They're wayfinding, not copy (`home.md` layout note), so they can change without copy approval.

**Proposal:** make them the questions the page answers:

| | Now | Proposed |
|---|-----|----------|
| 01 | The strategic moment | Why now |
| 02 | The economic case | What it's worth |
| 03 | The four-engine model | How it works |
| 04 | Latest news and governance | Where it stands |
| 05 | Long-range vision | Where it leads |

Read down the page, the labels are the story in five steps. A skimmer gets the outline even without reading the headlines.

### 3.5 Too many ways off the page (medium)
The page has 11 buttons. Six are outlined "Explore / Learn more / View / Review…" buttons at the end of each section. Each one invites the reader to leave mid-story, and the primary action (Get Involved, Become a Partner) competes with all of them.

**Proposal:** inside the story, change "read more" buttons to text links in the closing row, e.g. "The full economic analysis" using the `link` style. Keep buttons where the page asks for action: the hero (2) and the close (2). That takes the page from 11 buttons to 4, and the orange primary button becomes the clear next step.

### 3.6 Headlines don't read as a story when skimmed (medium, copy approval)
Headlines only, in order:

> Opportunity That Flows Into Southeast Volusia — Not Past It · Where You Fit · The Question Is Not Whether the Space Coast Will Grow… · Long-Term Impact for the Region · One Coordinated Platform. Four Integrated Engines. · Start Small. Deliver Early Wins. Scale with Readiness. · FSIC Is Underway · A Landmark Campus for Southeast Volusia · Partner. Collaborate. Participate.

The strong ones make a claim; the weak ones name a topic. "Long-Term Impact for the Region" is the weakest, on the section with the strongest content. Draft options for `home.md`:
- 02: "What Participation Is Worth Over 25 Years"
- 03 (merged with 04): "Four Engines, Started in Order"

Word repetition also flattens the voice. In about 1,080 words, "coordinated/coordination" appears 10 times, "region/regional" 13 and "engine" 16. The hero lead, 01's closing line, the engines' closing line and the close all call FSIC "coordinated". Keep it where it makes the argument (01, "Without coordination, growth concentrates elsewhere") and vary it elsewhere. The engines' "Transforming … into …" lines (4 times) go against the content guidelines' preference for "strengthens" unless the word is precise. They're approved Model copy, so flag them, don't change them.

### 3.7 One word, two spellings (low, fix now)
"FSIC Is **Underway**" (05 headline) and Phase 1 "**Under way**". Current AP style is one word, "underway", in every use. Use it in both places.

### 3.8 Seven screens of text between the two images (asset gap)
From the hero photo to the concept rendering, the page is all type. That's on brand (no stock imagery), but it's long. Merging 03 and 04 (3.2) and moving the audience rows to the close (3.1) shorten it. A real regional photograph (Track C, `10-homepage-plan.md`) would best sit at the start of 05: people at an FSIC event, or the place.

### 3.9 Phone first screen (low)
The hero buttons start at 815 px on a 812 px screen. Moving routing into one line (3.1) doesn't help, because the index sits below the buttons. Shortening the headline would ("Opportunity That Flows Into Southeast Volusia", without "— Not Past It", is one line shorter). It's already in review as plan B1.

## 4. Proposed page

| # | Running head | Section | Background |
|---|--------------|---------|------------|
| — | — | Hero, with the audience index under the buttons | night (photo) |
| 01 | Why now | The Question Is Not Whether… (without the 1961 paragraphs) | white |
| 02 | What it's worth | Economic case (headline in review) | night |
| 03 | How it works | Engines with their phases; Phase 5 and the phased approach as the closing row | white |
| 04 | Where it stands | Opens with 1961 → 2026; releases; governance and people | white |
| 05 | Where it leads | Long-range vision | night |
| — | — | Close: Partner. Collaborate. Participate. The five audience rows, the buttons, common questions | white |

Six numbered sections become five, plus the close. Expected: about 1.5 fewer desktop screens and about 2 fewer phone screens, 4 buttons instead of 11, the audience index in the hero, and the audience rows at the close.

## 5. Execution

| Step | Work | Approval needed |
|------|------|-----------------|
| S1 | "Underway" in both places (3.7) | No (spelling) |
| S2 | Running-head labels as questions (3.4) | No (wayfinding) |
| S3 | Mid-story buttons become text links; buttons only in the hero and close (3.5) | No (link labels unchanged) |
| S4 | Merge engines and phases into one section (3.2) | Layout uses existing wording. Deployment's two lead paragraphs drop off the homepage; they stay in `home.md` |
| S5 | Audience index in the hero; audience rows move to the close and replace its prose paragraph (3.1) | The index line is new copy (⚠ Review) |
| S6 | 1961 parallel moves to open 04 (3.3) | Placement only (⚠ Review note) |
| S7 | Headline drafts and the "coordinated" pass (3.6) | Yes: drafts in `home.md` for the client |

Order: S1–S3 first (no approval needed), then S4–S6 as one change to the page's structure, then S7 when the client reviews copy. Each step: `npm run check` and `npm run check-links`, screenshots at 1440 and 375 px, and the copy deck and IA updated.
