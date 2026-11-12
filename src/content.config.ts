import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { FIGURE_KEYS } from './data/economics';
import { glob } from 'astro/loaders';

// News: press releases (wording as published) and updates (short entries in the site's own voice, often from a
// post FSIC made on social media: what happened, when, and a link to the original). See src/content/copy/news.md.
// The file name (without .md) is the URL slug: /news/<slug>.
const news = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        date: z.coerce.date(),
        /** 'release': a press release, kept as published. 'update': a short entry in the site's voice. */
        kind: z.enum(['release', 'update']).default('release'),
        /** Where the update was first posted (e.g. FSIC's Facebook post), linked at its foot. */
        source: z.object({ url: z.url(), label: z.string() }).optional(),
        // The graphic published with the release (src/content/news/images/). Its text goes in imageAlt.
        image: image().optional(),
        imageAlt: z.string().optional(),
        /**
         * Photos shown with an update, below its text, each with a caption that says who and what is shown and
         * whose photo it is. Only photos FSIC owns or has permission to use (src/content/copy/news.md, Updates).
         * The first is the share image when the entry has no `image`.
         */
        photos: z
          .array(z.object({ src: image(), alt: z.string(), caption: z.string(), credit: z.string().optional() }))
          .optional(),
      })
      .refine((d) => !d.image || d.imageAlt, { error: 'imageAlt is required when image is set' }),
});

// Blog posts: FSIC's own articles (explainers and guides), one Markdown file each in src/content/blog/; the file
// name is the URL slug (/blog/<slug>). Unlike press releases they are written for search and answer engines,
// so the schema enforces the content strategy (docs/14-blog-content-strategy.md): a meta description short
// enough for search results, an answer-first summary, at least one source, a named topic (its pillar page),
// and an approval status. Only `published` posts are built for the public site; `draft` and `review` show in
// `npm run dev` only.
// The seven topics (docs/14 §3); a post and its follow-up each take one.
const topic = z.enum(['talent', 'innovation', 'market', 'civic', 'economy', 'region', 'organization']);

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z
      .object({
        /** The headline (h1 and <title>). Aim for 60 characters or fewer; phrase it the way people search. */
        title: z.string().max(90),
        /** Meta description: 70–155 characters, what the reader will learn. */
        description: z.string().min(70).max(155),
        /** The question the post answers, as people ask it (docs/14 §4). */
        question: z.string(),
        /** The answer first: 40–90 words that stand on their own; shown under the headline. */
        summary: z.string().min(150).max(600),
        date: z.coerce.date(),
        /** Set when the substance changes (not for typo fixes); shown as "Updated". */
        updated: z.coerce.date().optional(),
        /** A key in src/data/authors.ts. */
        author: z.string(),
        topic,
        /** Who the post is for (docs/14 §2), the primary audience first. */
        audiences: z.array(z.enum(['employers', 'educators', 'students-families', 'job-seekers', 'policymakers', 'community', 'funders'])).default([]),
        /** Short questions and answers at the end of the post (FAQPage structured data). */
        faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
        /** Every figure and claim traces to one of these (docs/03 "Attribution"). */
        sources: z.array(z.object({ title: z.string(), publisher: z.string(), url: z.url().optional(), date: z.string().optional() })).min(1),
        /** draft (never live: a post on hold) · review or scheduled (live on publishDate) · published (live now). */
        status: z.enum(['draft', 'review', 'scheduled', 'published']).default('draft'),
        /**
         * The date the post goes live (YYYY-MM-DD), at the deploy's daily rebuild (src/lib/blog-status.ts), whether its
         * status is review or scheduled. Required with 'scheduled'. A draft never publishes, whatever its date.
         */
        publishDate: z.coerce.date().optional(),
        /**
         * The question a reader of this post is likely to ask next (docs/14 §10, "Connected posts"). Required from
         * review on: publishing a post adds its follow-up to the plan (src/data/blog-plan.json) by
         * `npm run blog-plan`, so the calendar grows with every post and every post leads somewhere. `slug` may
         * name a question already in the plan. Prefer the same topic; another topic is fine when the question
         * leads there.
         */
        followUp: z.object({ question: z.string(), slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), topic }).optional(),
        /** The post whose follow-up this post answers (its slug), so the two link to each other. */
        from: z.string().optional(),
        /** The share image (og:image), e.g. the card made by `npm run blog-cards`. */
        image: image().optional(),
        imageAlt: z.string().optional(),
        /**
         * The "at a glance" figure under the summary (src/components/PostVisual.astro), drawn from the site's data:
         * a diagram, Master Plan figures (keys of FIGURES) and/or the phases (1–5) the post is about.
         */
        visual: z
          .object({
            diagram: z.enum(['job-years', 'scenarios']).optional(),
            figures: z.array(z.enum(FIGURE_KEYS)).optional(),
            phases: z.array(z.number().int().min(1).max(5)).optional(),
          })
          .optional(),
      })
      .refine((d) => !d.image || d.imageAlt, { error: 'imageAlt is required when image is set' })
      .refine((d) => !d.updated || d.updated >= d.date, { error: 'updated must be on or after date' })
      .refine((d) => !d.publishDate || d.publishDate >= d.date, { error: 'publishDate must be on or after date' })
      .refine((d) => d.status !== 'scheduled' || d.publishDate, { error: 'a scheduled post needs a publishDate' })
      .refine((d) => d.status === 'draft' || d.followUp, { error: 'followUp is required before a post goes to review or is published (docs/14 §10)' }),
});

// src/content/copy/ is the copy deck: Markdown documents for people, not a collection the site reads.
export const collections = { news, blog };
