# 14 — Blog Content Strategy (SEO and AEO)

**Status:** In use (updated November 12, 2026). 28 posts are written: 2 published and 25 dated to publish one every 2 to 4 working days through February 4, 2027 (§10), plus one held as a draft. Posts publish by date at the daily rebuild; there is no approval gate (§8, `20-scheduled-blog-publishing.md`).
**Owner:** Barrel & Pixel drafts, fact-checks and dates posts. FSIC can read every post and hold any (the review page linked from `07-open-questions.md`); a held post goes back to `draft`.
**Related:**
- `03-content-guidelines.md` (voice, nonprofit rules, attribution)
- `13-refactor-seo-aeo.md` (the site's search and answer-engine setup)
- `09-copy-deck.md` (approval workflow)

---

## 1. What the blog is for

The rest of the site says what FSIC is and plans. The blog answers the questions people bring to a search box or an AI assistant, about the space economy, training, jobs and taking part in Southeast Volusia, and shows that FSIC is the place that answers them well.

| Content | Job | Where |
|---------|-----|-------|
| Interior pages | The canonical statement of each part of FSIC (the model, the economics, governance) | `/model`, `/economic-impact`… |
| FAQ | Short, direct answers to the most common questions about FSIC | `/faq` |
| News & Media | Press releases, as published | `/news` |
| **Blog** | **Depth:** explainers, how-to guides and context. Each post answers one question fully and links back to the page it supports | `/blog` |

### Three goals, in order
1. **Be the source answer engines cite** when people ask about workforce training, the space economy or FSIC in Southeast Volusia (AEO).
2. **Bring the right visitors from search**: residents, employers, educators, policymakers and funders, each to the page that serves them (SEO).
3. **Show momentum and expertise** between press releases, so a funder or partner sees an active, knowledgeable organization.

### What the blog is not
- Not press releases (those stay in News, as published).
- Not opinion on elections, candidates or pending legislation (`03`, "Nonprofit Rules").
- Not promotion of any partner's business or a specific development.

---

## 2. Audiences and what they ask

Search and AI queries are questions. Each audience brings its own. The questions below are **hypotheses** drawn from the FAQ and the audience pages. No keyword-volume data exists for this region yet; after launch, Search Console's query report replaces guesses with real searches (§9).

| Audience | Typical questions | Post types that serve them | Pillar page |
|----------|------------------|-----------------------------|-------------|
| Students and families | What is dual enrollment? What is a micro-credential? What space jobs exist near New Smyrna Beach? | Explainers, guides | The Talent Engine; Programs & Facilities |
| Job-seekers and career-switchers | How do I train for a job in aerospace or advanced manufacturing without a four-year degree? | How-to guides | The Talent Engine |
| Employers | How do I find trained local talent? How do I become a supplier to the space industry? What is SBIR/STTR? | Guides, explainers | The Market Engine; Partnership & Funding |
| Educators | How can my school or college partner with FSIC? What is teacher upskilling? | Guides | Partnership & Funding |
| Policymakers and local government | What will FSIC mean for Volusia County's economy? How is it governed? | Data explainers, context | Economic Impact; Governance |
| Funders and philanthropy | Is FSIC a 501(c)(3)? How is it funded and held accountable? | Explainers | Governance; Partnership & Funding |
| Residents | What will FSIC do for my community? What is the role of developers? | Explainers, context | The Civic Engine; The Strategic Moment |

---

## 3. Topics and pillars (topic clusters)

Every post belongs to one **topic**, and each topic has a **pillar page**: the interior page the post supports. A post links to its pillar near the top or bottom, and the pillar can list its posts later. This is how the site builds topical authority without posts competing with the pages.

| Topic (`topic` in a post) | Pillar page | Covers |
|---------------------------|-------------|--------|
| `talent`: Talent and workforce | The Talent Engine (`/model#talent`) | Training, credentials, dual enrollment, teacher upskilling, careers |
| `innovation`: Innovation and research | The Innovation Engine (`/model#innovation`) | Challenge labs, applied research, university partnerships |
| `market`: Business and supply chains | The Market Engine (`/model#market`) | Supplier readiness, certifications, SBIR/STTR, startups |
| `civic`: Community | The Civic Engine (`/model#civic`) | STEM programs, exhibitions, arts and space, public events |
| `economy`: The regional economy | Economic Impact (`/economic-impact`) | The Master Plan's projections and what they mean |
| `region`: The Space Coast and Southeast Volusia | The Strategic Moment (`/strategic-moment`) | The space economy, regional growth, why now |
| `organization`: About FSIC | Governance & Transparency (`/governance`) | Nonprofit status, governance, funding, accountability |

The topics are fixed in the collection schema (`src/content.config.ts`), so a post can't drift outside them without a deliberate change.

---

## 4. The anatomy of a post (built for SEO and AEO)

Answer engines quote short, self-contained passages that state facts plainly, and search engines reward pages that answer the query fast and completely. The post template does both, and the schema enforces the parts that can be checked.

| Part | Rule | Why | Enforced |
|------|------|-----|----------|
| **Question** (`question`) | The one question the post answers, worded the way people ask it | One post, one intent: no two posts compete for the same query | Required |
| **Headline** (`title`) | Close to the question; 60 characters or fewer when possible; names the subject plainly ("What Is a Micro-Credential?") | Search results truncate around 60 characters; question-form headlines match conversational queries | ≤ 90 |
| **Description** (`description`) | 70–155 characters: what the reader will learn | The search snippet and link preview | 70–155 |
| **Answer first** (`summary`) | 40–90 words that answer the question completely on their own, shown under the headline | Answer engines quote one passage. Make it this one. Readers who stop here are still served | 150–600 characters |
| **Body** | H2s phrased as the follow-up questions (numbered 01, 02… on the page, and listed as "In this post" beside the body from desktop width); a one-sentence definition wherever a term is introduced ("A micro-credential is…"); paragraphs of 2–4 sentences; lists for steps and sets | Each section can be quoted alone; question headings match "People also ask" and follow-up prompts | Review |
| **Facts** | Every figure and claim traces to a listed source. Master Plan figures exactly as in `FIGURES`, always as ranges, with the disclaimer. Time-sensitive facts dated ("as of November 2026") | Trust (E-E-A-T); CLAUDE.md's figures rule | Ranges checked at build (§8) |
| **Questions and answers** (`faqs`) | 2–4 short follow-up questions, each answered in one to three sentences. Not copies of `/faq` entries: link to those instead | `FAQPage` structured data; quotable answers | Optional |
| **Sources** (`sources`) | At least one, listed at the end with publisher and date or page; link when public | Answer engines and readers check sources; it's the attribution rule | ≥ 1 |
| **Links** | At least three internal links: the pillar page, a related page or FAQ answer, and a related post when one exists. External links only to primary sources | Topical clusters; keeps readers on FSIC's answers | Review |
| **Follow-up** (`followUp`) | The question a reader is likely to ask next, with its slug and topic. Required before review. Publishing the post adds it to the plan (§10) | Every post leads somewhere, and the plan grows from what readers of each post will want next | Required from review on |
| **Author** (`author`) | A real person at FSIC with their role, or FSIC itself (`src/data/authors.ts`) | Experience and accountability (E-E-A-T) | Required |
| **Dates** (`date`, `updated`) | Publication date; `updated` only when the substance changes | Freshness signals; honest dating | `updated` ≥ `date` |
| **At a glance** (`visual`, optional) | One figure under the summary, drawn from the site's data so it can't drift from its source: `diagram` (`job-years`, `scenarios`), `figures` (keys of `FIGURES`, shown as range bars with the legend and disclaimer) and/or `phases` (1–5: where the post's subject sits on the Years 1–5 track). Use it when the answer has a shape (a range, a comparison, a timeframe); leave it off when it doesn't | A reader sees the answer's shape before reading it; the same visual language as the pages | Keys checked by the schema |
| **Share image** (`image`) | The post's card: `npm run blog-cards` makes a 1200 × 630 card on the site's 12-column grid: a hairline carrying the question's number (its place in the plan), its topic with a meaning-coded dot and "FSIC Blog"; the headline in sentence case, flush left and anchored low; a hairline foot with the logo and address (`src/content/blog/images/<slug>.png`) and sets `image` and `imageAlt`. Remake with `-- --all` after a headline changes. A real, owned photograph may replace it. No stock rockets or astronauts (DESIGN.md) | Share previews on LinkedIn, Facebook and X show the question, not the homepage photo | `imageAlt` with `image` |

**Length:** as long as the question needs. Most explainers run 600–1,200 words. Don't pad: answer engines and readers both prefer the shortest complete answer.

**Voice:** institutional, measured and plain (`03-content-guidelines.md`). No hype words, no exclamation marks. Write for a reader with no background: define every acronym on first use (SBIR, STTR, STEM).

---

## 5. SEO rules

1. **One primary question per post.** Before writing, search the site (pages, FAQ, posts) for the question. If it's answered, improve that answer or link to it instead of competing with it.
2. **Slugs** are the file name: short, lowercase, words joined by hyphens, the question's key words, no dates ("what-is-a-micro-credential"). They never change after publication. If one must, add a redirect.
3. **Place names, used consistently:** New Smyrna Beach, Southeast Volusia, Volusia County, the Space Coast, Florida. Local queries ("training New Smyrna Beach") need them in the text, not just the metadata.
4. **Internal links** use descriptive anchor text ("the Economic Impact page"), never "click here". Write them from the site root ("/economic-impact/"); the site adds the base path.
5. **No keyword stuffing, no AI-generated filler, no thin posts.** A post that can't add something beyond the FAQ answer shouldn't exist.
6. **Handled by the site:**
   - canonical URLs, titles and descriptions, share images, `og:type` article with dates
   - `BlogPosting` structured data with citations, plus `FAQPage` when the post has questions, and breadcrumbs
   - the sitemap with `lastmod`, the RSS feed, `llms.txt`
   - `noindex` on drafts and on the preview

---

## 6. AEO rules (being quoted by ChatGPT, Perplexity, Gemini, Google AI Overviews)

1. **The summary is the answer.** Write it last, after the body, as the best 40–90 words on the question. It should still be true and complete if quoted alone, without the headline.
2. **Name things the same way every time.** "Florida Space Innovation Center (FSIC)" on first use, then "FSIC". The legal name "Florida Space Innovation Center Inc." only where legal status matters. The place is "New Smyrna Beach, Florida" or "Southeast Volusia". These match the structured data and `llms.txt`, so engines connect the posts to the organization.
3. **State facts as facts:** a subject, a number, a date and a source in one sentence ("The Master Plan projects 74,500–79,500 job-years over 25 years with full implementation."). Avoid sentences that only make sense in context ("This means…" at the start of a section).
4. **Define, then explain.** Engines favor definitional sentences ("A job-year is one job held for one year."). Put the definition first in its section.
5. **No overstatement.** Engines quote it out of context. "Projected", "planned" and "designed to" are accurate; "will transform" isn't. Every projection carries its scenario and the disclaimer nearby.
6. **Keep answers current.** When a fact changes (a program launches, a figure is revised), update the post, set `updated`, and say what changed in a line at the end. An outdated answer quoted by an engine is worse than none.
7. **Check whether FSIC is being cited** (§9) and improve the posts that aren't.

---

## 7. Trust, authorship and compliance (E-E-A-T)

- **Authors are real.** A person is added to `src/data/authors.ts` only with their approval, a role that gives them standing on the topic, an approved one-line bio and, optionally, an approved headshot. The post shows the author's photo, name and role under the headline and an "About the author" note at the end, and the structured data names them as a `Person` with their role, bio and photo. The first author is **Erik Ahlgren, Board Chair** (November 2026). Later: author pages with bios and links to their posts.
- **Expert review:**
  - Posts on taxes, law or funding (501(c)(3), solicitation, grants) are reviewed by FSIC's counsel or CPA before publication.
  - Posts on training programs are reviewed by the program lead.
- **Nonprofit rules** (`03`):
  - No candidate or campaign content, ever.
  - No asks to support or oppose specific legislation without approval and tracking.
  - No promotion of a partner's business.
  - Sponsor recognition is neutral.
- **No invented content.** No invented quotes, statistics, partners or testimonials. Quotes come from FSIC's releases or from the person, approved in writing.
- **Never name a campus site** or the development the Master Plan proposes for it (CLAUDE.md).

---

## 8. Workflow

| Step | Who | Output |
|------|-----|--------|
| 1. Brief | B&P, from the calendar (§10) | The brief template (§12) filled in: question, audience, topic, sources available |
| 2. Draft | B&P | `src/content/blog/<slug>.md` with `status: draft`, its `visual` if the answer has a shape (§4), and its share card (`npm run blog-cards`). Readable in place with `npm run dev` (marked as a draft); not on the public site |
| 3. Check | B&P | Every fact against its source. Figures exactly as in `FIGURES` (the build fails on a dollar or thousands range that isn't one of them). Links work (`npm run check-links`). Nonprofit rules |
| 4. Review | FSIC (and counsel or the program lead where §7 says), optional | `status: review` with a proposed `publishDate`. Review is not a gate: the post publishes on its date unless someone sets it back to `draft` |
| 5. Publish | Automatic | The post goes live on its `publishDate`, at the deploy's daily rebuild (`isLive`, `src/lib/blog-status.ts`), whether its status is `review` or `scheduled`; `published` makes it live at once. A `draft` never publishes. Run `npm run blog-plan` after dating a post: a dated post's follow-up joins the plan and the calendar below (§10). Commit both. The first live post adds Blog to the menu, the sitemap, the RSS feed and `llms.txt` automatically |
| 6. Share | FSIC | LinkedIn, Facebook and X, partner newsletters, and the RSS feed |
| 7. Maintain | B&P, quarterly | §11 |

---

## 9. Measurement

These need the analytics decision and Search Console (open questions; `13-refactor-seo-aeo.md` B9). Until then, nothing can be measured, so set them up at the domain switch.

| What | How | Look for |
|------|-----|----------|
| Search visibility | Search Console, per post: impressions, clicks, average position, and **the queries people used** | Real questions to write about next; posts ranking for queries they don't answer well (rewrite the summary) |
| Answer-engine citations | Monthly, ask ChatGPT, Perplexity, Gemini and Google (AI Overviews) each post's `question`. Log whether FSIC is cited and which passage is quoted | Posts never cited: sharpen the summary and definitions, and add a source or a figure |
| Engagement | Analytics: engaged time, scroll depth, clicks to the pillar page and to Get Involved | Posts that bring visitors who then leave without going further |
| Outcomes | Partner inquiries and contact emails that mention a post | Which topics bring partners |

Targets are modest at first. Six months after launch: every published post indexed, each ranking on page one for its own question in the region, and FSIC cited for at least a third of the posts' questions.

---

## 10. Calendar and connected posts

**Cadence (set November 12, 2026; was every 3 to 7 days):** one post every 2 to 4 days, on working weekdays only, at irregular intervals rather than on a fixed weekday, so the blog reads as edited, not automated. **Times:** each post also has a time, Eastern, weighted toward the hours people read professional content (about a quarter 8–10 AM, a third 10 AM–noon, a quarter noon–1:30 PM, the rest 1:30–3:30 PM), at an irregular minute: `npm run blog-times` gives a time to every dated post that has only a date, drawn from its slug so it stays the same. The deploy checks hourly on weekdays and publishes a post within the hour after its time. No posts on weekends, U.S. federal holidays, the day after Thanksgiving, Christmas Eve or New Year's Eve; a gap next to a holiday can run to 5 days. `npm run blog-plan` fails if a dated post falls on one of those days or outside 8 AM–4 PM Eastern (the holidays are worked out from the calendar, so every year is covered). Every post carries a `publishDate` on that rhythm, and it publishes on that date (§8); set a post to `draft` to hold it. A post never comes before the post it follows (`from`): `npm run blog-plan` fails if one does. When FSIC holds a post, the dates after it can stay as they are (a longer gap is fine) or move up.

The first topics could all be written **from sources FSIC already has** (the Master Plan, the FAQ, approved copy, IRS and federal program pages), so nothing waits on new data.

### Connected posts: each published post adds the next topic

Every post names its **follow-up**: the question a reader of that post is most likely to ask next, with the slug the answering post will have and its topic. The follow-up is required before a post can go to review.

When a post is published, `npm run blog-plan` adds its follow-up to the plan, marked as following that post. So the calendar grows by one topic with every post, and every topic comes from a question real readers of a real post will have.

**What the script does:**
- **No duplicates.** If the follow-up is already a planned question, the post claims that entry instead of adding a new one (the micro-credential post leads to the planned dual-enrollment post).
- **Posts link both ways.** The post that answers a follow-up names its parent in `from`. The two then link to each other: the parent shows **Read next**, the follow-up shows **This follows**.
- **Everything stays in the seven topics.** A follow-up must have one of them.
- **Nothing drifts.** Two planned entries can't ask the same question, and every `from` must name a real post.
- **The deploy enforces it.** It runs the same check, so a post can't go live without its follow-up being in the plan.

**Choosing a follow-up:**
- **Prefer the same topic,** which deepens one cluster around its pillar page. Move to another topic only when that is where the reader's next question really goes (job-years → the three economic scenarios, both in the regional economy).
- **It must be answerable from sources FSIC has or can cite.** If it isn't yet, it waits in the plan until it is.
- **It must not be already answered** by a page or the FAQ. If it is, choose a deeper question.

**The plan itself:**
- It lives in `src/data/blog-plan.json`: question, slug, topic, audience, sources, and which post it follows.
- Edit that file to add, reword or reorder planned topics, then run `npm run blog-plan`.
- The table below is generated from the plan and the posts' status, so don't edit the table itself.

<!-- calendar:start -->
<!-- Generated by `npm run blog-plan` from src/data/blog-plan.json and the posts. Edit the plan file, not this table. -->

| # | Question | Topic | For | Sources | Follows | Status |
|---|----------|-------|-----|---------|---------|--------|
| 1 | What is a job-year, and what does FSIC's projection mean? | Regional economy | Policymakers, funders | Master Plan pp. 7–8 |  | **Published** (`what-is-a-job-year`) |
| 2 | What is a micro-credential, and how will FSIC offer them? | Talent | Students, job-seekers, employers | Master Plan pp. 13, 19–21; FAQ |  | **Published** (`what-is-a-micro-credential`) |
| 3 | Why does FSIC start with the Talent Engine? | Talent | Partners, funders | Master Plan p. 13; Deployment page |  | **Scheduled** 2026-11-16, 11:41 AM ET (`why-fsic-starts-with-talent`) |
| 4 | What is dual enrollment, and how will FSIC expand STEM pathways? | Talent | Students and families, educators | Master Plan; Florida Department of Education (dual enrollment) | What Is a Micro-Credential? FSIC’s Short, Job-Focused Training | **Scheduled** 2026-12-23, 1:13 PM ET (`what-is-dual-enrollment`) |
| 5 | How can a small business become a supplier to the space industry? | Business | Employers | Master Plan (supplier readiness); certification bodies' public pages (AS9100, CMMC) | What Are SBIR and STTR? Federal Funding for Small Business R&D | **Scheduled** 2026-11-23, 11:13 AM ET (`how-to-become-a-space-supplier`) |
| 6 | What are SBIR and STTR, and how can a Volusia County business apply? | Business | Employers, startups | SBIR.gov; Master Plan |  | **Scheduled** 2026-11-13, 12:29 PM ET (`what-are-sbir-and-sttr`) |
| 7 | What is a challenge lab? | Innovation | Universities, employers | Master Plan pp. 19–21 |  | **Scheduled** 2026-11-25, 2:15 PM ET (`what-is-a-challenge-lab`) |
| 8 | What is a "backbone organization", and why is FSIC one? | About FSIC | Policymakers, partners | FAQ; Governance page |  | **Scheduled** 2026-11-30, 1:16 PM ET (`what-is-a-backbone-organization`) |
| 9 | What does FSIC's 501(c)(3) status mean for donors and partners? | About FSIC | Funders | IRS determination letter; IRS Publication 4221-PC. Counsel review |  | **Scheduled** 2026-12-04, 12:40 PM ET (`what-fsic-501c3-status-means`) |
| 10 | How is the space economy growing, and what does it mean for Southeast Volusia? | The region | Residents, policymakers | WEF and McKinsey (April 2024); Strategic Moment |  | **Scheduled** 2026-12-14, 12:54 PM ET (`how-the-space-economy-is-growing`) |
| 11 | What will the Civic Engine offer residents? | Community | Residents, families | Master Plan pp. 19–21; Programs & Facilities |  | **Scheduled** 2026-12-18, 11:54 AM ET (`what-the-civic-engine-offers`) |
| 12 | How is FSIC governed, and how is it kept independent? | About FSIC | Funders, residents | Governance page; Master Plan pp. 15–17 | What Is a Backbone Organization? FSIC's Role | **Scheduled** 2026-12-21, 12:12 PM ET (`how-fsic-is-governed`) |
| 13 | What are the three scenarios in FSIC's economic analysis, and how do they differ? | Regional economy |  |  | What Is a Job-Year? Reading FSIC’s 25-Year Projections | **Scheduled** 2026-11-20, 8:28 AM ET (`what-are-fsics-economic-scenarios`) |
| 14 | What apprenticeships will FSIC offer for aerospace and advanced manufacturing? | Talent |  |  | What Is Dual Enrollment? FSIC's STEM Pathways | **Drafted (held)** (`what-apprenticeships-will-fsic-offer`) |
| 15 | How will FSIC's economic impact be measured and reported over time? | Regional economy |  |  | What Are FSIC's Three Economic Scenarios? | **Scheduled** 2026-12-07, 12:40 PM ET (`how-fsic-measures-economic-impact`) |
| 16 | How will FSIC measure Talent Engine outcomes and report results? | About FSIC |  |  | Why Does FSIC Start with the Talent Engine? | **Scheduled** 2026-12-10, 8:41 AM ET (`how-fsic-measures-talent-outcomes`) |
| 17 | What is FSIC's relationship with developers and real estate interests? | About FSIC |  |  | How Is FSIC Governed and Kept Independent? | **Scheduled** 2027-01-15, 8:27 AM ET (`fsic-relationship-with-developers`) |
| 18 | How does FSIC report its finances and outcomes to the public? | About FSIC |  |  | What Does FSIC's 501(c)(3) Status Mean? | **Scheduled** 2026-12-30, 11:06 AM ET (`how-fsic-reports-finances`) |
| 19 | How can schools and community groups partner with FSIC's Civic Engine? | Community |  |  | What Will the Civic Engine Offer Residents? | **Scheduled** 2027-01-21, 2:32 PM ET (`how-to-partner-with-civic-engine`) |
| 20 | What are industry-recognized credentials, and why do they matter? | Talent |  |  | How Will FSIC Measure Talent Engine Outcomes? | **Scheduled** 2027-01-07, 10:45 AM ET (`what-are-industry-recognized-credentials`) |
| 21 | What is return on investment (ROI) for workforce development programs? | Regional economy |  |  | How Will FSIC Measure Its Economic Impact? | **Scheduled** 2027-01-11, 12:50 PM ET (`what-is-roi-for-workforce-programs`) |
| 22 | What is teacher upskilling, and what does FSIC plan for educators? | Talent |  |  |  | **Scheduled** 2027-01-19, 9:07 AM ET (`what-is-teacher-upskilling`) |
| 23 | How do employers help shape FSIC's training programs? | Talent |  |  | What Are Industry-Recognized Credentials, and Why Do They Matter? | **Scheduled** 2027-01-29, 11:05 AM ET (`how-employers-shape-fsic-training`) |
| 24 | How will FSIC be funded over its first five years? | About FSIC |  |  | What Is Return on Investment (ROI) for Workforce Programs? | **Scheduled** 2027-01-25, 10:29 AM ET (`how-is-fsic-funded`) |
| 25 | How can school districts partner with FSIC? | Talent |  |  | What Is Teacher Upskilling? FSIC's Plans for Educators | **Scheduled** 2027-02-01, 10:49 AM ET (`how-school-districts-partner-with-fsic`) |
| 26 | What aerospace and advanced manufacturing jobs exist on the Space Coast, and what do they pay? | The region |  |  |  | **Scheduled** 2027-01-04, 12:43 PM ET (`space-coast-aerospace-jobs-and-pay`) |
| 27 | What is a rapid prototyping studio, and what happens at an innovation sprint? | Innovation |  |  |  | **Scheduled** 2026-12-28, 11:16 AM ET (`what-is-a-rapid-prototyping-studio`) |
| 28 | What is the Regional Talent Marketplace, and how will it connect employers and job seekers? | Talent |  |  | How Do Employers Help Shape FSIC's Training Programs? | **Scheduled** 2027-02-04, 12:59 PM ET (`what-is-the-regional-talent-marketplace`) |
| 29 | What are FSIC's advisory councils, and what do they do? | About FSIC |  |  | What Is FSIC's Relationship With Developers? | Planned |
| 30 | What is a Form 990, and what does it show about a nonprofit? | About FSIC |  |  | How Does FSIC Report Its Finances and Outcomes? | Planned |
| 31 | What are EDA Tech Hubs and NSF Engines, and why do they matter for regions like Southeast Volusia? | The region |  |  | How Will FSIC Be Funded Over Its First Five Years? | Planned |
| 32 | What is K–12 STEM exploration, and what will FSIC offer younger students? | Talent |  |  | How Can School Districts Partner With FSIC? | Planned |
| 33 | What is the difference between 'old space' and 'new space' companies? | The region |  |  | How Is the Space Economy Growing? | Planned |
| 34 | What is AS9100 certification, and do all aerospace suppliers need it? | Business |  |  | How Can a Small Business Become a Space Industry Supplier? | Planned |
| 35 | How can residents volunteer or mentor with FSIC? | Community |  |  | How Can Schools and Community Groups Partner With the Civic Engine? | Planned |
| 36 | Where do Southeast Volusia residents work, and how far do they commute? | The region |  |  | What Do Aerospace and Manufacturing Jobs Pay on the Space Coast? | Planned |
| 37 | How can a business sponsor a challenge lab project at FSIC? | Innovation |  |  | What Is a Challenge Lab? | Planned |
| 38 | What is dual-use technology, and why does FSIC focus on it? | Innovation |  |  | What Is a Rapid Prototyping Studio and an Innovation Sprint? | Planned |
| 39 | What is industry-embedded learning, and how will students learn on the job? | Talent |  |  | What Is FSIC's Regional Talent Marketplace? | Planned |

<!-- calendar:end -->

**Timely posts**, alongside the calendar:
- When a program opens: what it is, who it's for, how to apply.
- After the first board meeting: what was decided.
- The May 25 launch anniversary: what FSIC did in its first year.

These link to the matching press release rather than repeating it.

---

## 11. Maintenance

- **Quarterly audit:**
  - Check each post's facts against current sources and update stale ones (set `updated`).
  - Merge posts that compete for one question, redirecting the weaker to the stronger.
  - Retire posts that no longer serve anyone, with a redirect.
- **When the Master Plan's figures change**, `FIGURES` changes once and the build flags every post that quotes the old wording.
- **When a planned program becomes real,** rewrite "plans" as "offers", with dates. Engines quote the newest dated statement.

---

## 12. Brief template

```
Question:          (the one question, as people ask it)
Headline idea:     (≤ 60 characters)
Topic / pillar:    (one of §3)
Audience:          (who asks this, and what they'll do next)
Answer in brief:   (2–3 sentences: the summary's substance)
Follow-up questions (H2s and FAQs):
Sources available: (Master Plan pages, FAQ answers, approved copy, primary public sources)
Internal links:    (pillar; a related page or FAQ answer; a related post)
Reviewer:          (FSIC; counsel or the program lead if §7 applies)
Not in this post:  (what belongs on another page or post)
```

---

## 13. How it's built (for maintainers)

| Part | Where |
|------|-------|
| Posts | `src/content/blog/<slug>.md`, validated by the `blog` collection (`src/content.config.ts`) |
| Statuses | `draft` never publishes (shown only in `npm run dev`, marked, `noindex`). `review` and `scheduled` publish on their `publishDate`; `published` is live now. Until its date, a dated post is like a draft |
| Publishing by date | A post with a `publishDate` (status `review` or `scheduled`; a date and time) is live once that moment has passed, at build time (`src/lib/blog-status.ts`). The deploy checks hourly on weekdays (`scripts/blog-due.mjs`) and rebuilds when a post comes due, plus daily at 14:00 UTC (`.github/workflows/deploy.yml`). Posts show, sort and report their publish date (`postDate`, `src/lib/blog.ts`). `draft` never publishes (`docs/20`) |
| Pages | `/blog` (index; a `noindex` holding note until a post is published), `/blog/<slug>` (the post anatomy in §4) |
| Menu | "Blog" appears with the first published post (`src/lib/blog-status.ts`, `nav.ts`) |
| Structured data | `BlogPosting` with author, dates, section and citations; `FAQPage` from `faqs`; breadcrumb Home › Blog › post (`src/lib/seo.ts`) |
| Feeds and indexes | `/blog/rss.xml`, `sitemap.xml` (with `lastmod`), `llms.txt`, plus the RSS link in every page's head once a post is published |
| Figures guard | `checkFigures` (`src/lib/blog.ts`): a dollar or thousands range that isn't a `FIGURES` wording fails the build |
| Links in Markdown | Written from the site root; `BaseLinks` adds the base path |
| Authors | `src/data/authors.ts` |
| Topics and pillars | `TOPICS` in `src/lib/blog.ts` |
| Plan and follow-ups | `src/data/blog-plan.json`; `npm run blog-plan` adds each published post's follow-up and rewrites §10's calendar; the deploy runs `node scripts/blog-plan.mjs --check` (inside `npm run check-links`) |
| At a glance and cards | `visual` → `src/components/PostVisual.astro` (diagrams, `FIGURES` range bars, the phase track); share cards by `scripts/blog-cards.mjs` (`npm run blog-cards`, needs Playwright), committed in `src/content/blog/images/` |
| Read next / This follows | The post page links a post to the post that answers its follow-up (`from`), both ways |
| Old Wix blog | `/blog` now belongs to this blog (the old redirect to News is removed). The old `/post/*` addresses still go to the 404 page. Once their slugs are known, redirect any with a matching new post |
