import { url } from './url';
import { HAS_PUBLISHED_POSTS } from './blog-status';

// Site navigation, shared by the header and the footer (docs/02-information-architecture.md).
// Pages are grouped by the question they answer. Set `built: false` for a page that still uses
// <ComingSoon>: it stays out of both menus until it ships, so no menu leads to a placeholder.
// No page uses it at present (November 2026); it's kept, with <ComingSoon>, for pages the IA adds later.

export interface NavLink {
  label: string;
  /** Path without the base, starting with '/' ('/' for home). */
  path: string;
  built?: boolean;
  /** The phone menu shows this link as its one button, after the list (Header.astro). */
  cta?: boolean;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

export type NavItem = NavLink | NavGroup;

const nav: NavItem[] = [
  {
    label: 'Why FSIC',
    links: [
      { label: 'The Strategic Moment', path: '/strategic-moment' },
      { label: 'Economic Impact', path: '/economic-impact' },
      { label: 'Long-Term Vision', path: '/long-term-vision' },
    ],
  },
  {
    label: 'The Model',
    links: [
      { label: 'The FSIC Model', path: '/model' },
      { label: 'Phased Deployment', path: '/deployment' },
      { label: 'Programs & Facilities', path: '/programs-facilities' },
    ],
  },
  { label: 'Governance', path: '/governance' },
  // Get Involved is the Partnership & Funding page. Contact has its own link below; each page appears once.
  { label: 'Get Involved', path: '/partnership-funding', cta: true },
  { label: 'News', path: '/news' },
  // In the menu once a post is published (src/lib/blog-status.ts); until then /blog is a noindex holding page.
  { label: 'Blog', path: '/blog', built: HAS_PUBLISHED_POSTS },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export const isGroup = (item: NavItem): item is NavGroup => 'links' in item;

const isBuilt = (link: NavLink) => link.built !== false;

/** The menu with unbuilt pages removed, and groups left empty by that removed too. */
export function getNav(): NavItem[] {
  return nav
    .map((item) => (isGroup(item) ? { ...item, links: item.links.filter(isBuilt) } : item))
    .filter((item) => (isGroup(item) ? item.links.length > 0 : isBuilt(item)));
}

/**
 * The menu as columns, for the footer and the 404 page: one column per group, then the single links,
 * with Home first, as "FSIC". Each page appears once.
 */
export function getNavColumns(): { label: string; links: NavLink[] }[] {
  const nav = getNav();
  const groups = nav.filter(isGroup);
  const singles = nav.filter((item): item is NavLink => !isGroup(item));
  return [...groups.map((g) => ({ label: g.label, links: g.links })), { label: 'FSIC', links: [{ label: 'Home', path: '/' }, ...singles] }];
}

/** A nav path with the base path (see src/lib/url.ts). */
export const href = (path: string) => url(path);
