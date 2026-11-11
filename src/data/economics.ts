// The economic figures, Master Plan pp. 7–9 and 28–29. CLAUDE.md: they must match the Master Plan
// exactly and appear as ranges. Every page that shows them reads this file (home, Economic Impact,
// Partnership & Funding, the FAQ), so a correction is made once.
// Copy: src/content/copy/economic-impact.md and home.md.
// Scenario bodies are trusted, hand-written HTML (they may hold a link).
import { url } from '../lib/url';

/** The headline ranges: the Master Plan's Extended FSIC (FSIC 2.0) scenario. `short` is for tables;
 *  `words` is the range in running text ("… to …"). */
export const FIGURES = {
  output: { low: 10.2, high: 12.4, display: '$10.2–$12.4 billion', short: '$10.2–$12.4B' },
  jobYears: { low: 74500, high: 79500, display: '74,500–79,500', short: '74,500–79,500' },
  wages: { low: 1.35, high: 1.55, display: '$1.35–$1.55 billion', short: '$1.35–$1.55B' },
  fiscal: { low: 690, high: 910, display: '$690–$910 million', short: '$690–$910M' },
  externalFunding: { low: 0.8, high: 1.56, display: '$800 million–$1.56 billion', short: '$800M–$1.56B', words: '$800 million to $1.56 billion' },
} as const;

/** A key of FIGURES (a blog post's `visual.figures` names them). */
export type FigureKey = keyof typeof FIGURES;
export const FIGURE_KEYS = Object.keys(FIGURES) as [FigureKey, ...FigureKey[]];

/** display, low and high of a headline figure, for the at-a-glance rows. */
const pick = (f: { display: string; low: number; high: number }) => ({ display: f.display, low: f.low, high: f.high });

/** The Master Plan's caveat on every projection. Shown with the figures wherever they appear. */
export const DISCLAIMER = 'These are estimates based upon assumptions that may or may not be accurate over time.';

export const SOURCE = `Source: FSIC Master Plan 2026–2031. ${DISCLAIMER}`;

// 01 · 25-year impact at a glance (Extended FSIC / FSIC 2.0), Master Plan pp. 7–8
export const glance = [
  { metric: 'Economic output', ...pick(FIGURES.output), body: 'FSIC generates several times the economic output of the Baseline scenario by accelerating development, increasing operational activity, and expanding visitor spending.' },
  { metric: 'Job-years supported', ...pick(FIGURES.jobYears), body: 'Jobs span construction, operations, research, training, and the broader supply chain — creating sustained employment across the region.' },
  { metric: 'New wages', ...pick(FIGURES.wages), body: 'FSIC strengthens the regional workforce and expands access to higher-wage career pathways in aerospace, engineering, advanced manufacturing, and technology.' },
  { metric: 'Fiscal revenue', ...pick(FIGURES.fiscal), body: 'Local governments benefit from increased property tax, sales tax, and tourism-related revenue — supporting infrastructure, public services, and community investments.' },
  { metric: 'External funding potential', ...pick(FIGURES.externalFunding), body: 'FSIC aligns with federal, state, private, and philanthropic funding streams tied to workforce development, innovation, research, and economic competitiveness.' },
];

// 02 · Three scenarios, Master Plan pp. 8–9.
// Scenarios are ordered, so they use one hue stepping light to dark (validated as an ordinal ramp on
// white with the dataviz validator). The colors are theme tokens: scenario-baseline, scenario-1, scenario-2.
export const scenarios = [
  {
    name: 'Baseline (No FSIC)',
    short: 'Baseline',
    color: 'var(--color-scenario-baseline)',
    body: 'The Baseline scenario reflects a slow growth future with limited job creation, modest fiscal gains, and a decades long buildout.',
  },
  {
    name: 'FSIC 1.0',
    short: 'FSIC 1.0',
    color: 'var(--color-scenario-1)',
    body: `FSIC 1.0 is the foundational phase of the Florida Space Innovation Center, designed to activate the region's economic engine through <a href="${url('/model')}" class="link">four coordinated program areas</a>: Talent, Innovation, Market, and Civic Advancement. This phase establishes the structure, partnerships, and programming needed to convene a regional space ecosystem and align with federal, state, and private funding sources. It is a low-risk, high-leverage platform that organizes the region, attracts early partners, and prepares the groundwork for larger capital investments in FSIC 2.0.`,
  },
  {
    name: 'FSIC 2.0',
    short: 'FSIC 2.0',
    color: 'var(--color-scenario-2)',
    body: `FSIC 2.0 represents a transformational path: a fully realized innovation district anchored by NASA, university partners, high tech employers, and a convention and <a href="${url('/long-term-vision#performing-arts')}" class="link">performing arts center</a>. This expanded model generates the strongest economic output, highest wage job creation, and the largest influx of external funding, while establishing New Smyrna Beach as a statewide hub for space related research, education, and tourism.`,
  },
];

export type Cell = { display: string; low: number; high: number };
// low/high are in the row's own unit; bars are scaled within each row (one scale per row, never shared).
export const comparison: { metric: string; cells: [Cell, Cell, Cell] }[] = [
  { metric: 'Economic output', cells: [{ display: '$1.8–$2.4B', low: 1.8, high: 2.4 }, { display: '$8.1–$9.7B', low: 8.1, high: 9.7 }, { display: FIGURES.output.short, low: 10.2, high: 12.4 }] },
  { metric: 'Net-new external funding', cells: [{ display: 'Minimal', low: 0, high: 0 }, { display: '$250–$500M', low: 250, high: 500 }, { display: FIGURES.externalFunding.short, low: 800, high: 1560 }] },
  { metric: 'Fiscal impact (city + county)', cells: [{ display: '$110–$160M', low: 110, high: 160 }, { display: '$420–$520M', low: 420, high: 520 }, { display: FIGURES.fiscal.short, low: 690, high: 910 }] },
  { metric: 'Job-years supported', cells: [{ display: '18,000–22,000', low: 18000, high: 22000 }, { display: '18,000–22,000', low: 18000, high: 22000 }, { display: FIGURES.jobYears.short, low: 74500, high: 79500 }] },
  { metric: 'Total wage impact', cells: [{ display: '$450–$600M', low: 450, high: 600 }, { display: '$1.05–$1.25B', low: 1050, high: 1250 }, { display: FIGURES.wages.short, low: 1350, high: 1550 }] },
  { metric: 'Annual visitor volume', cells: [{ display: 'Under 10,000', low: 0, high: 10000 }, { display: '40,000–60,000', low: 40000, high: 60000 }, { display: '150,000–210,000', low: 150000, high: 210000 }] },
];

// 04 · Return on investment, Master Plan pp. 28–29
export const roi = [
  {
    area: 'Workforce & Talent',
    outcomes: ['Increased number of job ready graduates', 'Higher placement rates in high value careers', 'Reduced hiring friction for employers', 'Expanded access to STEM pathways for students', 'Increased adult upskilling and reskilling'],
    implications: ['Higher regional wages', 'Stronger employer retention', 'Increased attractiveness for new employers', 'Reduced reliance on imported labor'],
  },
  {
    area: 'Employer & Industry',
    outcomes: ['Access to a reliable talent pipeline', 'Reduced recruitment and training costs', 'Increased productivity and innovation capacity', 'Stronger partnerships with education and research institutions'],
    implications: ['Increased employer investment', 'Higher job creation', 'Stronger regional competitiveness', 'Expanded tax base'],
  },
  {
    area: 'Small Business & Supplier',
    outcomes: ['Increased SBIR/STTR submissions and awards', 'More local companies entering aerospace and defense supply chains', 'Stronger startup formation and growth', 'Expanded access to capital and mentorship'],
    implications: ['Increased contract wins', 'Higher business revenue', 'Greater economic diversification', 'Stronger regional resilience'],
  },
  {
    area: 'Innovation & Research',
    outcomes: ['Increased number of prototypes and research projects', 'Stronger university partnerships', 'Expanded dual-use technology development', 'Greater participation in federal innovation programs'],
    implications: ['Increased federal research funding', 'Stronger intellectual property generation', 'Enhanced regional reputation for innovation', 'Attraction of high-value employers and researchers'],
  },
  {
    area: 'Community & Civic',
    outcomes: ['Increased participation in STEM events', 'Expanded access to hands-on learning', 'Stronger regional storytelling and identity', 'Greater civic engagement and pride'],
    implications: ['Increased community vitality', 'Stronger support for regional development', 'Enhanced quality of life', 'Attraction of families and talent'],
  },
];
