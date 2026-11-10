// Whether any blog post is published, read synchronously at build time from the posts' frontmatter. The menu
// (nav.ts), the sitemap and the RSS link in the page head need it before any page renders, so it can't wait
// for getCollection. The Blog link joins the menu with the first published post (docs/14 §7).
const files = import.meta.glob<{ frontmatter: { status?: string } }>('../content/blog/*.md', { eager: true });
export const HAS_PUBLISHED_POSTS = Object.values(files).some((f) => f.frontmatter.status === 'published');
