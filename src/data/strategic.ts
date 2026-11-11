// The strategic moment's stakes and scale, shared by the homepage (01 Why now) and The Strategic Moment page.
// Copy: src/content/copy/strategic-moment.md (lists verbatim from fsic.space/about-4) and faq.md (the
// space-economy figure, cited). Plain text.

export const stakes = {
  without: { label: 'Without FSIC, Volusia County risks becoming:', items: ['a logistics corridor', 'a low-wage service economy', 'a commuter community for neighboring counties'] },
  with: { label: 'With FSIC, Volusia County becomes:', items: ['a magnet for high-value employers', 'a hub for space and advanced manufacturing', 'a destination for innovation, education, and community engagement', 'a regional anchor for economic mobility and identity'] },
};

/** The source of the global space-economy figures ($630 billion in 2023, $1.8 trillion by 2035). HTML (<cite>). */
export const SPACE_ECONOMY_SOURCE = 'Source: World Economic Forum and McKinsey &amp; Company, <cite>Space: The $1.8 Trillion Opportunity for Global Economic Growth</cite> (April 2024).';

/** The map's caption (RegionMap, homepage "Why now"): the stakes in the Master Plan's words (p. 3). Copy: home.md. */
export const COMMUTER_RISK = {
  lead: 'Launches from Cape Canaveral can be seen from Southeast Volusia\'s beaches. The jobs behind them are a commute away.',
  quote: 'Without intervention, the region risks becoming a commuter community to Brevard and Orlando—absorbing population growth without capturing the high-wage jobs, employer investment, and economic mobility that should accompany it.',
  source: 'FSIC Master Plan 2026–2031, p. 3',
};
