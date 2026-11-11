// The blog's RSS feed (docs/14 §7): published posts, newest first, with their summaries. Lets readers,
// newsletters and aggregators follow new posts. No dependency: the feed is small and built here.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absolute } from '../../lib/seo';
import { isLive } from '../../lib/blog-status';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', (p) => isLive(p.data))).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const items = posts
    .map((p) => {
      const link = absolute(`/blog/${p.id}/`);
      return `    <item>\n      <title>${esc(p.data.title)}</title>\n      <link>${link}</link>\n      <guid>${link}</guid>\n      <pubDate>${p.data.date.toUTCString()}</pubDate>\n      <description>${esc(p.data.summary)}</description>\n    </item>`;
    })
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Florida Space Innovation Center: Blog</title>\n    <link>${absolute('/blog/')}</link>\n    <description>Explainers and guides from the Florida Space Innovation Center.</description>\n    <language>en-us</language>\n${items}\n  </channel>\n</rss>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
