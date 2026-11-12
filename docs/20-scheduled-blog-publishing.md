> **Current rule (November 11, 2026, project lead): the publish date decides.** A post with a `publishDate` (a date and an Eastern time, from `npm run blog-times`) goes live within the hour after that time: on weekdays the deploy checks hourly from 7 AM to 6 PM Eastern and rebuilds when a post has come due (`scripts/blog-due.mjs`), with a full rebuild every morning as a backstop (`.github/workflows/deploy.yml`). This holds whether its status is `review` or `scheduled` (`isLive`, `src/lib/blog-status.ts`). There is no approval gate. A `draft` never publishes: set a post to `draft` to hold it. Dates run one post every 2 to 4 days, on working weekdays only (no weekends or holidays), each follow-up after the post it follows (`npm run blog-plan` checks both), and no commit is needed on the day. To check a coming release before it happens, build as of that day: `BLOG_NOW=YYYY-MM-DD npm run check-links`. The notes below record the earlier versions.

> **Earlier revision (November 11, 2026), superseded by the rule above.** The first version published any post in `review` on its `publishDate`, by a workflow that committed to `main`. Review means waiting for FSIC's approval, so that skipped approval; and a push made by that workflow's token doesn't trigger the deploy, so posts wouldn't have appeared anyway. It's replaced by:
> - **`status: scheduled`** means FSIC has approved the post. It goes live when `publishDate` has passed, at the next build (`isLive` in `src/lib/blog-status.ts`). No commit is needed.
> - **The deploy rebuilds every morning** (`schedule` in `.github/workflows/deploy.yml`, 14:00 UTC), so a scheduled post appears on its day. `publish-scheduled-posts.yml` is removed.
> - **Posts in `review` are never published automatically.** To schedule a post after approval, set `status: scheduled` and `publishDate`, run `npm run blog-plan` (an approved post's follow-up joins the plan at approval), and commit.
>
> The rest of this document describes the first version and is kept for the record.

# Scheduled Blog Publishing

**Created:** November 10, 2026  
**Purpose:** Automate the publication of approved blog posts on specific dates

---

## Overview

Blog posts can now be published automatically on a scheduled date instead of requiring manual publication. This is handled by a GitHub Actions workflow that runs daily at 9 AM EST (2 PM UTC).

---

## How to Schedule a Post

1. **Complete the post** following the blog content strategy (docs/14-blog-content-strategy.md)
2. **Get approval** from FSIC (and counsel or program lead if required)
3. **Set the status** to `review` in the post's frontmatter
4. **Add a publish date** in the frontmatter:

```yaml
status: review
publishDate: 2026-11-15
```

5. **Commit and push** to `main`

The post will automatically be published on the specified date. The workflow will:
- Change `status: review` to `status: published`
- Run `npm run blog-plan` to update the content calendar
- Verify type checks and links
- Commit and push the changes
- Trigger the deploy workflow

---

## Manual Publishing (Immediate)

To publish a post immediately without scheduling:

1. Set `status: published` in the frontmatter (omit `publishDate`)
2. Run `npm run blog-plan` locally
3. Commit both the post and the updated blog plan
4. Push to `main`

---

## Manual Trigger

The scheduled publishing workflow can also be triggered manually:

1. Go to the repository on GitHub
2. Navigate to **Actions** → **Publish Scheduled Blog Posts**
3. Click **Run workflow** → **Run workflow**

This is useful for:
- Testing the workflow
- Publishing posts immediately on their scheduled date (instead of waiting for the daily run)
- Recovering from workflow failures

---

## Validation Rules

The blog schema enforces:
- `publishDate` must be on or after the post's `date`
- `publishDate` is optional (omit it for manual publishing)
- Posts with `publishDate` should have `status: review` (posts with `status: published` are already live)

---

## Workflow Schedule

**Daily run:** 9:00 AM EST (2:00 PM UTC)  
**File:** `.github/workflows/publish-scheduled-posts.yml`

The workflow checks all posts in `src/content/blog/` for:
- `status: review`
- `publishDate` on or before today's date

---

## Monitoring

**Check workflow runs:**
- Repository → **Actions** → **Publish Scheduled Blog Posts**
- View logs for each run
- Failed runs send notifications to repository admins

**After publication:**
- The post appears at `/blog/<slug>`
- Blog appears in the main navigation (after the first post is published)
- RSS feed updates at `/blog/rss.xml`
- Sitemap includes the new post

---

## Example Frontmatter

### Scheduled post (publishes automatically on Nov 15, 2026):

```yaml
---
title: "What Is Dual Enrollment? FSIC's STEM Pathways"
description: "Dual enrollment lets high school students earn college credits. How FSIC plans to expand STEM pathways in Southeast Volusia."
question: "What is dual enrollment, and how will FSIC expand STEM pathways?"
summary: "Dual enrollment lets high school students take college courses and earn credits toward their degree while still in high school..."
date: 2026-11-10
author: erik-ahlgren
topic: talent
audiences: [students-families, educators]
status: review
publishDate: 2026-11-15
followUp:
  question: "What apprenticeships will FSIC offer?"
  slug: what-apprenticeships-will-fsic-offer
  topic: talent
sources:
  - title: "Florida Space Innovation Center Master Plan"
    publisher: "FSIC"
    date: "2026"
---
```

### Immediate publication (no scheduling):

```yaml
---
title: "What Is a Micro-Credential? FSIC's Short, Job-Focused Training"
status: published
# No publishDate - publishes as soon as merged to main
---
```

---

## Technical Details

**Schema:** `src/content.config.ts` (blog collection)  
**Workflow:** `.github/workflows/publish-scheduled-posts.yml`  
**Blog plan script:** `scripts/blog-plan.mjs`  
**Status helper:** `src/lib/blog-status.ts`

The workflow uses Node.js scripts to:
1. Parse frontmatter from all blog posts
2. Compare `publishDate` to today's date
3. Update `status` using string replacement
4. Run the blog plan script
5. Commit changes using the `github-actions[bot]` user
