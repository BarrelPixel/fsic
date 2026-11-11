// Blog helpers (docs/14-blog-content-strategy.md). Published posts appear on the public site; drafts and
// posts in review appear only in `npm run dev`, marked as such, so they can be read in place before approval.
import { getCollection, type CollectionEntry } from 'astro:content';
import { url } from './url';
import { FIGURES } from '../data/economics';

export type Post = CollectionEntry<'blog'>;

import { isLive } from './blog-status';

/** Live on the public site: published, or scheduled with its publishDate passed (src/lib/blog-status.ts). */
export const isPublished = (p: Post) => isLive(p.data);
const visible = (p: Post) => isPublished(p) || import.meta.env.DEV;

/** Posts to show, newest first. */
export async function getPosts(): Promise<Post[]> {
  return (await getCollection('blog', visible)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const postHref = (post: Post) => url(`/blog/${post.id}`);

/** Minutes to read at about 225 words a minute (the body, the summary and the FAQs). */
export function readingMinutes(post: Post): number {
  const words = [post.body ?? '', post.data.summary, ...post.data.faqs.flatMap((f) => [f.q, f.a])].join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}

/**
 * Each topic and its pillar page: the interior page a post supports and links back to (docs/14 §3).
 * `path` is a site path (url() adds the base).
 */
export const TOPICS: Record<Post['data']['topic'], { label: string; pillar: { name: string; path: string } }> = {
  talent: { label: 'Talent and workforce', pillar: { name: 'The Talent Engine', path: '/model#talent' } },
  innovation: { label: 'Innovation and research', pillar: { name: 'The Innovation Engine', path: '/model#innovation' } },
  market: { label: 'Business and supply chains', pillar: { name: 'The Market Engine', path: '/model#market' } },
  civic: { label: 'Community', pillar: { name: 'The Civic Engine', path: '/model#civic' } },
  economy: { label: 'The regional economy', pillar: { name: 'Economic Impact', path: '/economic-impact' } },
  region: { label: 'The Space Coast and Southeast Volusia', pillar: { name: 'The Strategic Moment', path: '/strategic-moment' } },
  organization: { label: 'About FSIC', pillar: { name: 'Governance & Transparency', path: '/governance' } },
};

/**
 * Posts are Markdown, so they can't read FIGURES. CLAUDE.md requires the Master Plan's figures exactly and as
 * ranges: any dollar range or thousands range in a post must be one of FIGURES' wordings, or the build fails
 * with the offending text. (Single values and year ranges such as "Years 1–5" are not checked.)
 */
const ALLOWED = Object.values(FIGURES).flatMap((f) => [f.display, 'words' in f ? f.words : f.display]);
const RANGE = /\$[\d.,]+(?:\s*(?:billion|million))?\s*(?:–|to)\s*\$[\d.,]+\s*(?:billion|million)|\b\d{1,3},\d{3}\s*(?:–|to)\s*\d{1,3},\d{3}\b/g;
export function checkFigures(post: Post): void {
  const text = [post.body ?? '', post.data.summary, post.data.description, ...post.data.faqs.flatMap((f) => [f.q, f.a])].join('\n');
  for (const m of text.matchAll(RANGE)) {
    if (!ALLOWED.some((a) => a === m[0])) {
      throw new Error(`Blog post "${post.id}": "${m[0]}" is not one of the Master Plan figures in src/data/economics.ts (FIGURES). Quote them exactly: ${ALLOWED.join(' · ')}`);
    }
  }
}
