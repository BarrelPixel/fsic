// When a blog post is live (docs/14 §8, docs/20). Pure functions on frontmatter, with no astro:content import,
// so the menu (nav.ts), the page head, the sitemap and the feeds can all use the same rule:
//   published            live now
//   review or scheduled  live once its publishDate has passed, at the next build. The publish date is what
//                        decides (project lead, November 2026); review is not an approval gate. The deploy
//                        rebuilds every morning (.github/workflows/deploy.yml), so a post appears on its day
//                        without anyone committing anything.
//   draft                never live, whatever its date. Set a post to draft to hold it.
type Status = { status?: string; publishDate?: Date | string };

// Builds use today's date. BLOG_NOW=YYYY-MM-DD builds the site as it will be on that day (e.g. to check that a
// coming release builds and links cleanly: BLOG_NOW=2027-03-09 npm run check-links).
// (Read through globalThis: the browser bundle has no `process`, and the project has no Node types.)
const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
// A preview day means the end of its working day (after every post's time).
const NOW = env?.BLOG_NOW ? new Date(`${env.BLOG_NOW}T23:59:00Z`) : new Date();

export function isLive(d: Status, now: Date = NOW): boolean {
  if (d.status === 'published') return true;
  if (d.status === 'draft' || !d.publishDate) return false;
  const day = typeof d.publishDate === 'string' ? new Date(`${d.publishDate}T00:00:00Z`) : d.publishDate;
  return day.getTime() <= now.getTime();
}

// Read synchronously at build time from the posts' frontmatter: the menu and the RSS link need it before any
// page renders. The Blog link joins the menu with the first live post.
const files = import.meta.glob<{ frontmatter: Status }>('../content/blog/*.md', { eager: true });
export const HAS_PUBLISHED_POSTS = Object.values(files).some((f) => isLive(f.frontmatter));
