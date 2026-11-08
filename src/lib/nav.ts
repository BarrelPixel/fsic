// Site navigation, shared by the header and the footer (docs/02-information-architecture.md).
// Pages are grouped by the question they answer. Set `built: false` for a page that still uses
// <ComingSoon>: it stays out of both menus until it ships, so no menu leads to a placeholder.

export interface NavLink {
  label: string;
  /** Path without the base, starting with '/' ('/' for home). */
  path: string;
  built?: boolean;
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
      { label: 'Long-Term Vision', path: '/long-term-vision', built: false },
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
  { label: 'Get Involved', path: '/partnership-funding' },
  { label: 'News', path: '/news' },
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

/** Joins the base path (import.meta.env.BASE_URL, no trailing slash) to a nav path. */
export const href = (base: string, path: string) => (path === '/' ? base || '/' : `${base}${path}`);
