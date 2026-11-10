// Blog authors (docs/14 §6, E-E-A-T): real people at FSIC, named with the role that gives them standing on the
// topic. Add a person only with their approval and an approved one-line bio. `org` is FSIC itself, for posts
// written by the team as a whole.

export type Author = { name: string; role: string; bio: string; kind: 'person' | 'organization' };

export const authors: Record<string, Author> = {
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
