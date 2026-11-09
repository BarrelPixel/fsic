// Partnership & Funding: the three benefits (May 25, 2026 launch release), the seven partner types
// (Master Plan pp. 22–24) and the funding streams (pp. 25–26).
// Copy: src/content/copy/partnership-funding.md (Draft).
// Partner roles are trusted, hand-written HTML (they may hold a link).
import { url } from '../lib/url';

export const benefits = [
  { title: 'Ecosystem Building & Convening Power', body: 'FSIC aligns schools, employers, civic organizations, and industry partners around shared priorities — reducing fragmentation and accelerating progress.' },
  { title: 'A Platform for Significant External Funding', body: 'By demonstrating readiness, coordination, and long-term strategy, FSIC positions Florida to compete for federal, philanthropic, and private-sector investment at a scale individual organizations cannot secure alone.' },
  { title: 'Closing Gaps in Workforce, Talent, and Innovation', body: 'FSIC strengthens the talent pipeline, supports innovators, and helps local companies grow — ensuring Florida has the skilled workforce and innovation capacity required for the next generation of space and technology industries.' },
];

export const partners = [
  {
    id: 'employers',
    name: 'Employers & Industry',
    overview: "Employers are central to FSIC's mission. Their involvement ensures that programs remain aligned with real workforce needs, emerging technologies, and industry standards.",
    roles: ['Validate curriculum and micro-credentials', 'Provide challenge lab problems and innovation projects', 'Host internships, apprenticeships, and job shadowing', `Participate in <a href="${url('/governance#structure')}" class="link">advisory councils</a>`],
    benefits: ['Stronger talent pipelines', 'Reduced hiring friction', 'Increased employer retention and expansion', 'Enhanced competitiveness for federal funding'],
  },
  {
    id: 'k12',
    name: 'K–12 School Districts',
    overview: 'FSIC partners with school districts to expand STEM access, strengthen career pathways, and support teacher development.',
    roles: ['Co-design dual-enrollment and micro-credential pathways', 'Provide student access to challenge labs and innovation programs', 'Support teacher upskilling and professional development'],
    benefits: ['Improved student outcomes', 'Stronger career readiness', 'Expanded access to high-value opportunities', 'Enhanced district competitiveness'],
  },
  {
    id: 'higher-ed',
    name: 'State College & Universities',
    overview: 'Higher education institutions are essential partners in applied research, talent development, and innovation.',
    roles: ['Co-develop curriculum and degree pathways', 'Provide faculty expertise for challenge labs', 'Collaborate on applied research and dual-use technologies', 'Co-locate programs or research teams at FSIC', 'Pursue joint federal funding opportunities'],
    benefits: ['Expanded research impact', 'Stronger industry alignment', 'Increased competitiveness for grants', 'Enhanced student engagement and experiential learning'],
  },
  {
    id: 'local-government',
    name: 'Local Government',
    overview: "Cities and counties play a critical role in supporting FSIC's mission through policy alignment, economic development coordination, and community engagement.",
    roles: ['Support employer recruitment and retention', 'Align zoning and infrastructure with innovation district development', 'Collaborate on grant applications and federal funding', 'Promote community engagement and public events', 'Provide in-kind support and strategic alignment'],
    benefits: ['Stronger economic development outcomes', 'Increased competitiveness for state and federal investment', 'Enhanced community identity and cohesion', 'Support for long-term regional planning'],
  },
  {
    id: 'workforce-agencies',
    name: 'Economic Development & Workforce Agencies',
    overview: "Regional economic development organizations and workforce boards are essential partners in aligning FSIC's programs with broader regional strategies.",
    roles: ['Provide labor market data and analysis', 'Support employer engagement', 'Collaborate on workforce initiatives', 'Align regional strategies and funding opportunities', 'Support grant applications and reporting'],
    benefits: ['Stronger alignment across regional initiatives', 'Increased access to funding', 'Enhanced employer recruitment', 'Improved workforce outcomes'],
  },
  {
    id: 'agencies',
    name: 'Federal & State Agencies',
    overview: 'Federal and state agencies provide critical funding, technical expertise, and strategic alignment.',
    roles: ['Support applied research and innovation', 'Provide grant funding and technical assistance', 'Collaborate on dual-use technology development', 'Participate in challenge labs and innovation programs', 'Support workforce development initiatives'],
    benefits: ['Increased access to federal and state funding', 'Stronger regional competitiveness', 'Enhanced national visibility', 'Expanded research and innovation capacity'],
  },
  {
    id: 'community',
    name: 'Community & Civic Organizations',
    overview: "Community organizations, nonprofits, and civic groups ensure that FSIC's impact is broad-based and inclusive.",
    roles: ['Support community engagement and outreach', 'Collaborate on STEM events and exhibitions', 'Provide access to underserved populations', 'Strengthen regional storytelling and identity', 'Support volunteer and mentorship programs'],
    benefits: ['Stronger community trust', 'Expanded access to opportunities', 'Enhanced civic cohesion', 'Broader public support for innovation-driven growth'],
  },
];

// Funding streams, Master Plan pp. 25–26. start/end on the Years 1–5 axis; null = not stated in the source.
export const streams = [
  { name: 'Startup Funding', start: 1, end: 2, purpose: 'Startup funding focuses on establishing core operations, launching the Talent Engine, and building early momentum.', sources: ['Philanthropic contributions', 'Family foundations', 'Corporate sponsorships', 'Local government support', 'In-kind contributions (space, equipment, staffing)'] },
  { name: 'Public Funding & Government Grants', start: 1, end: 5, purpose: "Public funding plays a critical role in scaling FSIC's programs and facilities.", sources: ['State workforce development grants', 'Florida Department of Education innovation funding', 'Space Florida partnerships', 'EDA Tech Hubs & Build Back Better programs', 'NSF Engines & STEM education grants'] },
  { name: 'Employer Partnerships & Corporate', start: null, end: null, purpose: "Employers benefit directly from FSIC's programs and therefore play a key role in funding operations and program delivery.", sources: ['Annual employer memberships', 'Sponsorship of labs, programs, and events', 'Equipment donations', 'Paid internships and apprenticeships', 'Co-funded research and innovation projects'] },
  { name: 'Earned Revenue Streams', start: 2, end: 5, purpose: "Earned revenue becomes a significant component of FSIC's financial model as programs mature and demand increases.", sources: ['Tuition for micro-credentials and adult training', 'Contract training for employers', 'Facility rentals for events and conferences', 'Innovation challenge sponsorships', 'Startup incubation fees'] },
  { name: 'Federal Innovation & Research Funding', start: 2, end: 5, purpose: "FSIC's Innovation and Market Engines position the organization to compete for major federal innovation funding.", sources: ['SBIR/STTR partnerships', 'Dual-use technology development grants', 'Applied research funding from DoD, NASA, NSF', 'EDA innovation and entrepreneurship grants'] },
  { name: 'Long-Term Sustainability Model', start: 3, end: 5, purpose: 'A balanced, diversified funding model ensures FSIC remains resilient, adaptable, and capable of long-term regional impact.', sources: ['Recurring employer memberships', 'Contract training', 'Startup and supplier development programs', 'Federal and state grants', 'Philanthropic support for innovation and expansion'] },
] as { name: string; start: number | null; end: number | null; purpose: string; sources: string[] }[];
