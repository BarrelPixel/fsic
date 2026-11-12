// Search and answer-engine metadata (docs/13-refactor-seo-aeo.md, Part B): whether the site may be indexed,
// absolute URLs, and the schema.org records (JSON-LD) every page carries. Built from the site's own data
// (site.ts, faq.ts, the news collection), so the structured data can't drift from what the pages say.
import { url } from './url';
import { EMAIL, ORG, SOCIAL_LINKS } from './site';
import { getNavColumns } from './nav';
import type { Block } from '../data/faq';

/**
 * Index the site only at its real address. The GitHub Pages preview (astro.config.mjs `site`) is kept out of
 * search and AI answers so it can't compete with fsic.space at launch: every page gets `noindex`, and
 * robots.txt disallows crawling. Setting `site` to https://fsic.space at launch turns indexing on; nothing
 * else changes (docs/06-launch-plan.md).
 */
export const SITE = import.meta.env.SITE ?? 'https://fsic.space';
export const INDEXABLE = new URL(SITE).hostname === 'fsic.space';

/** An absolute URL for a site path (base path included). */
export const absolute = (path: string) => new URL(url(path), SITE).href;

/**
 * The one sentence that says what FSIC is: used for the Organization's description, the homepage meta
 * description and llms.txt (docs/13 B8). Copy: src/content/copy/site-wide.md.
 */
export const WHAT_IS_FSIC =
  'A 501(c)(3) nonprofit in New Smyrna Beach building workforce, innovation and industry partnerships so the Space Coast’s growth benefits Southeast Volusia.';

const ORG_ID = `${absolute('/')}#organization`;

/** FSIC as an organization (schema.org NGO), on every page. */
export const organization = () => ({
  '@type': 'NGO',
  '@id': ORG_ID,
  name: 'Florida Space Innovation Center',
  legalName: ORG.legalName,
  alternateName: 'FSIC',
  description: WHAT_IS_FSIC,
  url: absolute('/'),
  logo: absolute('/images/fsic-logo.png'),
  email: EMAIL,
  foundingDate: '2026-05-25',
  nonprofitStatus: 'Nonprofit501c3',
  taxID: ORG.ein,
  address: { '@type': 'PostalAddress', addressLocality: 'New Smyrna Beach', addressRegion: 'FL', addressCountry: 'US' },
  areaServed: [
    { '@type': 'Place', name: 'Southeast Volusia County, Florida' },
    { '@type': 'AdministrativeArea', name: 'Volusia County, Florida' },
  ],
  sameAs: SOCIAL_LINKS.map((s) => s.href),
});

/** The site itself, on the homepage. */
export const website = () => ({
  '@type': 'WebSite',
  '@id': `${absolute('/')}#website`,
  name: 'Florida Space Innovation Center',
  alternateName: 'FSIC',
  url: absolute('/'),
  publisher: { '@id': ORG_ID },
});

/** Where a page sits: Home, then its parent (a release's is News & Media), then the page. */
export const breadcrumb = (trail: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: absolute(c.path),
  })),
});

/** A press release (schema.org NewsArticle). */
export const newsArticle = (a: { headline: string; path: string; date: Date; description: string; image?: string }) => ({
  '@type': 'NewsArticle',
  headline: a.headline,
  description: a.description,
  url: absolute(a.path),
  mainEntityOfPage: absolute(a.path),
  datePublished: a.date.toISOString().slice(0, 10),
  ...(a.image ? { image: new URL(a.image, SITE).href } : {}),
  author: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
});

/** A blog post (schema.org BlogPosting). A person author is named with their role; otherwise FSIC is the author. */
export const blogPosting = (p: {
  headline: string;
  description: string;
  path: string;
  date: Date;
  updated?: Date;
  section: string;
  author: { name: string; role: string; kind: 'person' | 'organization'; image?: string; description?: string };
  sources: { title: string; publisher: string; url?: string }[];
  image?: string;
}) => ({
  '@type': 'BlogPosting',
  headline: p.headline,
  description: p.description,
  url: absolute(p.path),
  mainEntityOfPage: absolute(p.path),
  datePublished: p.date.toISOString(),
  dateModified: (p.updated ?? p.date).toISOString().slice(0, 10),
  articleSection: p.section,
  inLanguage: 'en-US',
  author:
    p.author.kind === 'person'
      ? {
          '@type': 'Person',
          name: p.author.name,
          jobTitle: p.author.role,
          ...(p.author.description ? { description: p.author.description } : {}),
          ...(p.author.image ? { image: new URL(p.author.image, SITE).href } : {}),
          worksFor: { '@id': ORG_ID },
        }
      : { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
  citation: p.sources.map((s) => ({ '@type': 'CreativeWork', name: s.title, publisher: s.publisher, ...(s.url ? { url: s.url } : {}) })),
  ...(p.image ? { image: new URL(p.image, SITE).href } : {}),
});

/** HTML (the FAQ's trusted, hand-written answers) to plain text for structured data and llms.txt. */
export const toText = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** An FAQ answer's blocks as one plain-text answer: paragraphs, lists as one sentence, the source last. */
export const answerText = (blocks: Block[]) =>
  blocks
    .map((b) => ('p' in b ? toText(b.p) : 'list' in b ? `${b.label ? `${toText(b.label)} ` : ''}${b.list.map(toText).join('; ')}.` : toText(b.source)))
    .join(' ')
    .replace(/\.\./g, '.');

/** The FAQ (schema.org FAQPage): each question with its whole answer as plain text. */
export const faqPage = (items: { q: string; answer: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

/** Every page in the menus, plus the homepage: the sitemap and llms.txt list these. */
export const sitePages = () => {
  const seen = new Set<string>();
  return getNavColumns()
    .flatMap((c) => c.links)
    .filter((l) => (seen.has(l.path) ? false : (seen.add(l.path), true)));
};
