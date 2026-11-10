// sitemap.xml (docs/13 B2): every page in the menus, the homepage, and each press release (lastmod: its date).
// Absolute URLs from `site` and the base path, so it is right on the preview and at fsic.space.
import type { APIRoute } from 'astro';
import { absolute, sitePages } from '../lib/seo';
import { getReleases, isoDate } from '../lib/news';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const pages = sitePages().map((p) => ({ loc: absolute(p.path.endsWith('/') ? p.path : `${p.path}/`) }));
  const releases = (await getReleases()).map((r) => ({ loc: absolute(`/news/${r.id}/`), lastmod: isoDate(r.data.date) }));
  const posts = (await getCollection('blog', (p) => p.data.status === 'published')).map((p) => ({ loc: absolute(`/blog/${p.id}/`), lastmod: isoDate(p.data.updated ?? p.data.date) }));
  const body = [...pages, ...releases, ...posts]
    .map((u) => `  <url><loc>${u.loc}</loc>${'lastmod' in u ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
    .join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
