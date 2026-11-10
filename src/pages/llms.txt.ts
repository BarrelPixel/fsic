// llms.txt (docs/13 B8): a short Markdown guide to the site for AI assistants and answer engines: what FSIC
// is, its key facts, and links to the pages and FAQ answers. Generated from the site's data, so it matches
// the pages. https://llmstxt.org
import type { APIRoute } from 'astro';
import { absolute, sitePages, WHAT_IS_FSIC, toText } from '../lib/seo';
import { EMAIL, ORG } from '../lib/site';
import { FIGURES, DISCLAIMER } from '../data/economics';
import { faqs } from '../data/faq';
import { engines } from '../data/engines';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', (p) => p.data.status === 'published')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const lines = [
    '# Florida Space Innovation Center (FSIC)',
    '',
    `> ${WHAT_IS_FSIC}`,
    '',
    '## Key facts',
    '',
    `- Legal name: ${ORG.legalName}, a ${ORG.status} (EIN ${ORG.ein}).`,
    '- Based in New Smyrna Beach, Florida; serves Southeast Volusia County and the Space Coast.',
    '- Launched May 25, 2026. A virtual organization today; a future site will be chosen with the community.',
    `- Four engines: ${engines.map((e) => e.name).join(', ')}. The Talent Engine launched first (Year 1).`,
    `- Projected 25-year impact with full implementation (FSIC Master Plan, FSIC 2.0 scenario): ${FIGURES.output.display} in economic output, ${FIGURES.jobYears.display} job-years, ${FIGURES.wages.display} in new wages, ${FIGURES.fiscal.display} in fiscal revenue. Always quote these as ranges. ${DISCLAIMER}`,
    `- Contact: ${EMAIL}`,
    '',
    '## Pages',
    '',
    ...sitePages().map((p) => `- [${p.label}](${absolute(p.path.endsWith('/') ? p.path : `${p.path}/`)})`),
    '',
    '## Frequently asked questions',
    '',
    ...faqs.map((f) => `- [${toText(f.q)}](${absolute('/faq/')}#${f.id})`),
    '',
    ...(posts.length > 0 ? ['## Blog', '', ...posts.map((p) => `- [${p.data.title}](${absolute(`/blog/${p.id}/`)}): ${p.data.description}`), ''] : []),
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
