// Site paths with the base path. The base is '/fsic' on the GitHub Pages preview and '' once the site
// is at the root of fsic.space (astro.config.mjs). import.meta.env.BASE_URL is '/fsic' in the first
// case but '/' in the second, so never write `${BASE_URL}/path` (it would give '//path', a link to
// another host): use url('/path').

/** The base path without a trailing slash: '/fsic', or '' at the root of a domain. */
export const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** A site path ('/model', '/model#talent', '/news/slug', '/' for home) with the base path. */
export const url = (path: string) => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
