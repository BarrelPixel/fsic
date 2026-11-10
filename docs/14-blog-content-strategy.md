# 14 — Blog Content Strategy (SEO and AEO)

**Status:** Proposed (November 10, 2026). The blog is built (`/blog`) and two drafts are written. No post is published, so the blog is out of the menu, the sitemap and search until the first approval.
**Owner:** FSIC approves every post. Barrel & Pixel drafts and publishes.
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
| **Body** | H2s phrased as the follow-up questions; a one-sentence definition wherever a term is introduced ("A micro-credential is…"); paragraphs of 2–4 sentences; lists for steps and sets | Each section can be quoted alone; question headings match "People also ask" and follow-up prompts | Review |
| **Facts** | Every figure and claim traces to a listed source. Master Plan figures exactly as in `FIGURES`, always as ranges, with the disclaimer. Time-sensitive facts dated ("as of November 2026") | Trust (E-E-A-T); CLAUDE.md's figures rule | Ranges checked at build (§8) |
| **Questions and answers** (`faqs`) | 2–4 short follow-up questions, each answered in one to three sentences. Not copies of `/faq` entries: link to those instead | `FAQPage` structured data; quotable answers | Optional |
| **Sources** (`sources`) | At least one, listed at the end with publisher and date or page; link when public | Answer engines and readers check sources; it's the attribution rule | ≥ 1 |
| **Links** | At least three internal links: the pillar page, a related page or FAQ answer, and a related post when one exists. External links only to primary sources | Topical clusters; keeps readers on FSIC's answers | Review |
| **Author** (`author`) | A real person at FSIC with their role, or FSIC itself (`src/data/authors.ts`) | Experience and accountability (E-E-A-T) | Required |
| **Dates** (`date`, `updated`) | Publication date; `updated` only when the substance changes | Freshness signals; honest dating | `updated` ≥ `date` |
| **Image** (optional) | Only real, owned photographs or the post's own diagram, with descriptive alt text. No stock rockets or astronauts (DESIGN.md) | Share previews; accessibility | `imageAlt` with `image` |

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
| 2. Draft | B&P | `src/content/blog/<slug>.md` with `status: draft`. Readable in place with `npm run dev` (marked as a draft); not on the public site |
| 3. Check | B&P | Every fact against its source. Figures exactly as in `FIGURES` (the build fails on a dollar or thousands range that isn't one of them). Links work (`npm run check-links`). Nonprofit rules |
| 4. Review | FSIC (and counsel or the program lead where §7 says) | `status: review`, then approval in writing |
| 5. Publish | B&P | `status: published`. The first published post adds Blog to the menu, the sitemap, the RSS feed and `llms.txt` automatically. Merge; the deploy checks types and links |
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

## 10. Calendar: the first twelve posts

Two posts a month is sustainable and enough to build topical depth. Each topic below can be written **from sources FSIC already has** (the Master Plan, the FAQ, approved copy, IRS and federal program pages), so nothing waits on new data. The first two are drafted.

| # | Question (headline direction) | Topic | Audience | Sources | Status |
|---|-------------------------------|-------|----------|---------|--------|
| 1 | What is a job-year, and what does FSIC's projection mean? | economy | Policymakers, funders | Master Plan pp. 7–8 | **Drafted** (`what-is-a-job-year`) |
| 2 | What is a micro-credential, and how will FSIC offer them? | talent | Students, job-seekers, employers | Master Plan pp. 13, 19–21; FAQ | **Drafted** (`what-is-a-micro-credential`) |
| 3 | Why does FSIC start with the Talent Engine? | talent | Partners, funders | Master Plan p. 13; Deployment page | Brief |
| 4 | What is dual enrollment, and how will FSIC expand STEM pathways? | talent | Students and families, educators | Master Plan; Florida Department of Education (dual enrollment) | Brief |
| 5 | How can a small business become a supplier to the space industry? | market | Employers | Master Plan (supplier readiness); certification bodies' public pages (AS9100, CMMC) | Brief |
| 6 | What are SBIR and STTR, and how can a Volusia County business apply? | market | Employers, startups | SBIR.gov; Master Plan | Brief |
| 7 | What is a challenge lab? | innovation | Universities, employers | Master Plan pp. 19–21 | Brief |
| 8 | What is a "backbone organization", and why is FSIC one? | organization | Policymakers, partners | FAQ; Governance page | Brief |
| 9 | What does FSIC's 501(c)(3) status mean for donors and partners? | organization | Funders | IRS determination letter; IRS Publication 4221-PC. Counsel review | Brief |
| 10 | How is the space economy growing, and what does it mean for Southeast Volusia? | region | Residents, policymakers | WEF and McKinsey (April 2024); Strategic Moment | Brief |
| 11 | What will the Civic Engine offer residents? | civic | Residents, families | Master Plan pp. 19–21; Programs & Facilities | Brief |
| 12 | How is FSIC governed, and how is it kept independent? | organization | Funders, residents | Governance page; Master Plan pp. 15–17 | Brief |

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
| Statuses | `draft` and `review` show only in `npm run dev` (marked) and are `noindex`; `published` goes live |
| Pages | `/blog` (index; a `noindex` holding note until a post is published), `/blog/<slug>` (the post anatomy in §4) |
| Menu | "Blog" appears with the first published post (`src/lib/blog-status.ts`, `nav.ts`) |
| Structured data | `BlogPosting` with author, dates, section and citations; `FAQPage` from `faqs`; breadcrumb Home › Blog › post (`src/lib/seo.ts`) |
| Feeds and indexes | `/blog/rss.xml`, `sitemap.xml` (with `lastmod`), `llms.txt`, plus the RSS link in every page's head once a post is published |
| Figures guard | `checkFigures` (`src/lib/blog.ts`): a dollar or thousands range that isn't a `FIGURES` wording fails the build |
| Links in Markdown | Written from the site root; `BaseLinks` adds the base path |
| Authors | `src/data/authors.ts` |
| Topics and pillars | `TOPICS` in `src/lib/blog.ts` |
| Old Wix blog | `/blog` now belongs to this blog (the old redirect to News is removed). The old `/post/*` addresses still go to the 404 page. Once their slugs are known, redirect any with a matching new post |
