import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Press releases: one Markdown file per release, wording as published (see src/content/copy/news.md).
// The file name (without .md) is the URL slug: /news/<slug>.
const news = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        date: z.coerce.date(),
        // The graphic published with the release (src/content/news/images/). Its text goes in imageAlt.
        image: image().optional(),
        imageAlt: z.string().optional(),
      })
      .refine((d) => !d.image || d.imageAlt, { error: 'imageAlt is required when image is set' }),
});

// Blog posts: FSIC's own articles (explainers and guides), one Markdown file each in src/content/blog/; the file
// name is the URL slug (/blog/<slug>). Unlike press releases they are written for search and answer engines,
// so the schema enforces the content strategy (docs/14-blog-content-strategy.md): a meta description short
// enough for search results, an answer-first summary, at least one source, a named topic (its pillar page),
// and an approval status. Only `published` posts are built for the public site; `draft` and `review` show in
// `npm run dev` only.
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
        topic: z.enum(['talent', 'innovation', 'market', 'civic', 'economy', 'region', 'organization']),
        audiences: z.array(z.enum(['employers', 'educators', 'students-families', 'job-seekers', 'policymakers', 'community', 'funders'])).default([]),
        /** Short questions and answers at the end of the post (FAQPage structured data). */
        faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
        /** Every figure and claim traces to one of these (docs/03 "Attribution"). */
        sources: z.array(z.object({ title: z.string(), publisher: z.string(), url: z.url().optional(), date: z.string().optional() })).min(1),
        status: z.enum(['draft', 'review', 'published']).default('draft'),
        image: image().optional(),
        imageAlt: z.string().optional(),
      })
      .refine((d) => !d.image || d.imageAlt, { error: 'imageAlt is required when image is set' })
      .refine((d) => !d.updated || d.updated >= d.date, { error: 'updated must be on or after date' }),
});

// src/content/copy/ is the copy deck: Markdown documents for people, not a collection the site reads.
export const collections = { news, blog };
