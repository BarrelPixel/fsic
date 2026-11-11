// When a blog post is live (docs/14 §8, docs/20). Pure functions on frontmatter, with no astro:content import,
// so the menu (nav.ts), the page head, the sitemap and the feeds can all use the same rule:
//   published  live now (approved and released)
//   scheduled  approved by FSIC; goes live when publishDate has passed, at the next build. The deploy
//              rebuilds every morning (.github/workflows/deploy.yml), so a scheduled post appears on its day
//              without anyone committing anything.
//   draft, review  never live. Review means waiting for FSIC's approval; nothing publishes it automatically.
type Status = { status?: string; publishDate?: Date | string };

export function isLive(d: Status, now: Date = new Date()): boolean {
  if (d.status === 'published') return true;
  if (d.status !== 'scheduled' || !d.publishDate) return false;
  const day = typeof d.publishDate === 'string' ? new Date(`${d.publishDate}T00:00:00Z`) : d.publishDate;
  return day.getTime() <= now.getTime();
}

// Read synchronously at build time from the posts' frontmatter: the menu and the RSS link need it before any
// page renders. The Blog link joins the menu with the first live post.
const files = import.meta.glob<{ frontmatter: Status }>('../content/blog/*.md', { eager: true });
export const HAS_PUBLISHED_POSTS = Object.values(files).some((f) => isLive(f.frontmatter));
