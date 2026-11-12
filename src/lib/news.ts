import { getCollection, type CollectionEntry } from 'astro:content';
import { url } from './url';

export type Release = CollectionEntry<'news'>;

/** All press releases, newest first. */
export async function getReleases(): Promise<Release[]> {
  const releases = await getCollection('news');
  return releases.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** The release page's address: /news/<slug>, with the base path. */
/** "Press release" or "Update", for the list and the entry page. */
export const kindLabel = (release: Release) => (release.data.kind === 'update' ? 'Update' : 'Press release');

export const releaseHref = (release: Release) => url(`/news/${release.id}`);

/** "2026-07-29", for <time datetime>. */
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

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

/**
 * The release's first sentence (from firstParagraph), for the news list. A sentence ends at . ! or ?
 * followed by a space and a capital letter or opening quote, except after a single capital letter,
 * so initials and abbreviations ("U.S. Army", "John F. Kennedy") don't end it.
 */
export function firstSentence(release: Release): string {
  const text = firstParagraph(release);
  for (const m of text.matchAll(/[.!?](?=\s+[A-Z“"(])/g)) {
    const before = text.slice(0, m.index);
    if (/(?:^|[\s.])[A-Z]$/.test(before)) continue;
    return text.slice(0, m.index + 1);
  }
  return text;
}

/** Shortened at a word boundary for meta descriptions (about 155 characters). */
export function truncate(text: string, max = 155): string {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(' ', max)).replace(/[,;:—-]\s*$/, '') + '…';
}
