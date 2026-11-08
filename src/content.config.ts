import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const copy = defineCollection({
  type: 'content',
  schema: z.object({}),
});

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
      .refine((d) => !d.image || d.imageAlt, { message: 'imageAlt is required when image is set' }),
});

export const collections = { copy, news };
