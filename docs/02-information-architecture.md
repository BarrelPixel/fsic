# 02 — Information Architecture

## Sitemap

```
/                           Home
/strategic-moment           The Strategic Moment
/model                      The FSIC Model
/economic-impact            Economic Impact
/deployment                 Phased Deployment
/programs-facilities        Programs & Facilities
/governance                 Governance & Transparency
/partnership-funding        Partnership & Funding
/long-term-vision           Long-Term Vision
/contact                    Contact
/news                       News & Media (and /news/<slug> per press release)
/faq                        FAQ
/404                        Page Not Found (404.html: shown for any missing address; noindex)
```

## Page Goals

### Home (`/`) — IMPLEMENTED
**Goal:** Establish credibility, convey institutional gravity, and orient visitors.
**Audience:** All stakeholders (first visit).
**Key content:** One story in five numbered sections (`11-homepage-story.md`, November 2026; new copy in review): hero (headline, one-sentence definition, buttons, and "Find your part" linking to each audience's row in the close); 01 Why now (the Board Chair's words at the launch, the sourced scale of the space economy, and the Without / With FSIC stakes); 02 What it's worth (the economic figures as ranges, the scenario named, external funding and funding channels); 03 How it works (the four engines, then a Years 1–5 track of when each starts, and the phased approach); 04 Where it stands (the 1961 → 2026 launch, the board and Founders Council, news and follow links, governance); 05 Where it leads (the long-range vision); the close (each audience with its part and link, five common questions linked to the FAQ, Become a Partner and Contact). Buttons only in the hero and the close; in-story calls to action are text links. The hero photo is the share image.
**Primary CTAs:** Get Involved (hero; was Explore the Vision until November 2026, pending the client's call on CTA priorities), View Economic Impact, Become a Partner, Contact FSIC.

### The Strategic Moment (`/strategic-moment`) — IMPLEMENTED
**Goal:** Explain why now — the convergence of Space Coast growth, regional development, and federal funding shifts.
**Audience:** Policymakers, economic development professionals, funders.
**Key content:** Regional inflection point analysis, national shift toward place-based innovation, regional development as catalyst (the Master Plan's figures for one master-planned development, not named), the window of opportunity.
**Source:** Master Plan Pages 4–6.

### The FSIC Model (`/model`) — IMPLEMENTED
**Goal:** Deep-dive into the four-engine architecture with detailed program descriptions.
**Audience:** Education partners, employers, university leaders.
**Key content:** Full Talent/Innovation/Market/Civic engine descriptions, program tables, guiding principles, how engines reinforce each other.
**Source:** Master Plan Pages 9–14.

### Economic Impact (`/economic-impact`) — IMPLEMENTED
**Goal:** Present the full 25-year economic analysis with three-scenario comparison.
**Audience:** Funders, policymakers, local government, employers.
**Key content:** Impact summary table, three-scenario comparison (Baseline vs FSIC 1.0 vs FSIC 2.0), absorption timeline acceleration, external funding potential, ROI framework.
**Source:** Master Plan Pages 7–8, 28–29.

### Phased Deployment (`/deployment`) — IMPLEMENTED
**Goal:** Show the structured, risk-managed rollout plan.
**Audience:** Partners evaluating commitment, funders evaluating feasibility.
**Key content:** Phase-by-phase timeline, milestones, expected outcomes, facilities plan per phase.
**Source:** Master Plan Pages 13–14, 17–19, 32–34.

### Programs & Facilities (`/programs-facilities`) — IMPLEMENTED
**Goal:** Detail every program offering across all four engines plus facilities plan.
**Audience:** Students, educators, businesses, community members.
**Key content:** Programs by audience (FAQ); the Master Plan's program portfolio, one row per engine with each program opening in place and a link to that engine on the Model page; the facilities plan: FSIC is a virtual organization today, guiding principles, and planned core spaces per phase (no development named).
**Source:** Master Plan Pages 17–21.

### Governance & Transparency (`/governance`) — IMPLEMENTED
**Goal:** Demonstrate institutional credibility through transparent governance structure.
**Audience:** Funders, government partners, community stakeholders.
**Key content:** Board structure, advisory councils, committees, compliance framework, founder transition plan, evaluation metrics.
**Source:** Master Plan Pages 15–17, 29–32.

### Partnership & Funding (`/partnership-funding`) — IMPLEMENTED
**Goal:** Show the partnership model and funding strategy. Invite prospective partners.
**Audience:** Employers, universities, government agencies, philanthropic organizations.
**Key content:** Stakeholder value propositions, partnership roles, funding strategy, five-year financial outlook.
**Source:** Master Plan Pages 11–12, 22–27.

### Long-Term Vision (`/long-term-vision`) — IMPLEMENTED
**Goal:** Inspire with the 2032–2040 vision of a landmark campus.
**Audience:** All stakeholders; especially community members and long-term funders.
**Key content:** The Master Plan's 2032–2040 vision (pp. 36–38), framed by the FAQ's caveat: multi-university consortium, performing arts center, a landmark campus for Southeast Volusia with the concept rendering (no site named).
**Source:** Overview Page 3; Master Plan Pages 36–38.

### Contact (`/contact`) — IMPLEMENTED (no form)
**Goal:** Route inquiries to FSIC.
**Audience:** Partners, volunteers, media, the public.
**Key content:** Email, location, social links, and four topics (Partnerships, Volunteering and leadership, Media, General), each opening an email to info@fsic.space with the subject set. The contact form waits on a backend and routing decision (`07-open-questions.md`). No phone number is published.

### FAQ (`/faq`) — IMPLEMENTED
**Goal:** Answer common questions about FSIC in one place.
**Audience:** All, especially residents.
**Key content:** Mission and vision in the hero with an index of four topics (About FSIC, Why Now, Programs and Funding, Getting Involved), then one section per topic holding the 16 questions from the live FAQ page, each opening from its question with its own link (`/faq#<id>`). Answers are as published except where `faq.md` notes a change (economic ranges, five phases, sourced space-economy figures).

### News & Media (`/news`) — IMPLEMENTED
**Goal:** Publish FSIC's press releases as issued.
**Audience:** Media, partners, residents.
**Key content:** Press releases, newest first, each on its own page (`/news/<slug>`), with the graphic published with each release. One Markdown file per release in `src/content/news/`; graphics in `src/content/news/images/`.

## Proposed Additions
The current site (fsic.space) has founder bio content with no place in this sitemap. Proposed: `/leadership` (or a section of `/governance`). Copy for these is drafted in `src/content/copy/`. See `08-current-site-audit.md`.

## Navigation Structure

Defined once in `src/lib/nav.ts` and shared by the header and footer. Pages are grouped by the question they answer. A page that still uses `<ComingSoon>` is listed with `built: false` and stays out of both menus until it ships (none at present).

**Header (desktop):** dropdown groups and plain links.
- Why FSIC ▾ — The Strategic Moment, Economic Impact, Long-Term Vision
- The Model ▾ — The FSIC Model, Phased Deployment, Programs & Facilities
- Governance
- Get Involved (links to Partnership & Funding)
- News (News & Media)
- FAQ
- Contact

The logo links to Home. Each page appears once in the menu. On phones, the menu lists each group under its name.

**Footer:** one column per group (Why FSIC, The Model), then a column "FSIC" with Home, Governance, Get Involved, News, FAQ and Contact. Each page appears once. The 404 page lists the same columns (`getNavColumns()` in `src/lib/nav.ts`).

## Implementation Note
Built (November 2026): Home, The FSIC Model, Economic Impact, Phased Deployment, Governance & Transparency, Partnership & Funding, The Strategic Moment, Programs & Facilities, Long-Term Vision, FAQ, News & Media, and Contact (no form yet), plus the 404 page. The Governance page leaves out board member names and the founder transition until they are confirmed (see `governance.md`). Interior pages follow the template in `DESIGN.md` ("Interior page template"); `src/pages/model.astro` is the reference. No page uses `<ComingSoon>` at present; it remains for future pages. After building a page, run `npm run check` and `npm run check-links` (the deploy runs both and stops on a type error or broken link).
