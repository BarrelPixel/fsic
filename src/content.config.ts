import { defineCollection, z } from 'astro:content';

const copy = defineCollection({
  type: 'content',
  schema: z.object({}),
});

export const collections = { copy };
