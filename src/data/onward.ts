// What each interior page leads to (docs/23-site-elevation-plan.md S2, S3, S5), shown under its closing by
// Closing.astro. Defined once here so the site's reading order and cross-links can't drift.
//   next       the next page in the story: why now → what it's worth → how it works → when → what it offers →
//              who runs it → get involved
//   questions  FAQ questions that belong to the page and aren't already answered on it (ids in src/data/faq.ts)
//   topics     blog topics whose published posts the page lists (TOPICS in src/lib/blog.ts)
import type { Post } from '../lib/blog';

type Topic = Post['data']['topic'];

export const onward: Record<string, { next?: string; questions: string[]; topics: Topic[] }> = {
  '/strategic-moment': { next: '/economic-impact', questions: ['market-opportunity', 'economic-impact'], topics: ['region'] },
  '/economic-impact': { next: '/model', questions: ['funding', 'market-opportunity'], topics: ['economy'] },
  '/model': { next: '/deployment', questions: ['first-programs', 'businesses-and-entrepreneurs'], topics: ['talent', 'innovation', 'market', 'civic'] },
  '/deployment': { next: '/programs-facilities', questions: ['location', 'funding'], topics: ['talent'] },
  '/programs-facilities': { next: '/governance', questions: ['first-programs', 'get-involved'], topics: ['talent', 'civic', 'market'] },
  '/governance': { next: '/partnership-funding', questions: ['leadership', 'funding'], topics: ['organization'] },
  '/partnership-funding': { questions: ['compete', 'what-kind-of-organization'], topics: ['market', 'organization'] },
  '/long-term-vision': { next: '/partnership-funding', questions: ['location', 'developers'], topics: [] },
};
