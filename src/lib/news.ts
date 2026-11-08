import { getCollection, type CollectionEntry } from 'astro:content';

export type Release = CollectionEntry<'news'>;

/** All press releases, newest first. */
export async function getReleases(): Promise<Release[]> {
  const releases = await getCollection('news');
  return releases.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** "July 29, 2026". Dates are stored as UTC midnight, so format in UTC. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

/** The release's first paragraph as plain text, without the dateline ("**City, FL** — "). */
export function firstParagraph(release: Release): string {
  const para = (release.body ?? '').trim().split(/\n\s*\n/)[0] ?? '';
  return para
    .replace(/^\*\*[^*]+\*\*\s*—\s*/, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Shortened at a word boundary for meta descriptions (about 155 characters). */
export function truncate(text: string, max = 155): string {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(' ', max)).replace(/[,;:—-]\s*$/, '') + '…';
}
