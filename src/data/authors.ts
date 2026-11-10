// Blog authors (docs/14 §6, E-E-A-T): real people at FSIC, named with the role that gives them standing on the
// topic. Add a person only with their approval and an approved one-line bio. `org` is FSIC itself, for posts
// written by the team as a whole. A photo is optional: a real headshot the person has approved, in
// src/assets/authors/, with alt text.
import type { ImageMetadata } from 'astro';
import erikAhlgren from '../assets/authors/erik-ahlgren.webp';

export type Author = {
  name: string;
  role: string;
  bio: string;
  kind: 'person' | 'organization';
  photo?: { src: ImageMetadata; alt: string };
};

export const authors: Record<string, Author> = {
  // Headshot from barrelandpixel.com/about (November 2026), at the project lead's direction. Bio facts: FSIC's
  // May 25, 2026 release (aerospace career in California, moved home to New Smyrna Beach), the July 29 release
  // (Board Chair) and the project lead (now a web developer).
  'erik-ahlgren': {
    name: 'Erik Ahlgren',
    role: 'Board Chair, Florida Space Innovation Center',
    bio: 'Erik Ahlgren is Board Chair of the Florida Space Innovation Center. He worked in California’s aerospace sector before moving home to New Smyrna Beach, where he is a web developer.',
    kind: 'person',
    photo: { src: erikAhlgren, alt: 'Erik Ahlgren, smiling, in a dark suit and white open-collared shirt.' },
  },
  org: {
    name: 'Florida Space Innovation Center',
    role: 'FSIC staff',
    bio: 'The Florida Space Innovation Center is a 501(c)(3) nonprofit in New Smyrna Beach working to bring the Space Coast’s growth to Southeast Volusia.',
    kind: 'organization',
  },
};

export function authorFor(key: string): Author {
  const a = authors[key];
  if (!a) throw new Error(`No blog author "${key}" (src/data/authors.ts)`);
  return a;
}
