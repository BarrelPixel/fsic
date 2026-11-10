// The FAQ: its questions and answers, and the topics that group them on /faq.
// Copy: src/content/copy/faq.md (Draft). Answers are as published on fsic.space, except where the
// copy deck notes a change (economic ranges, the five phases, the sourced space-economy figures, the
// removed regional housing figure).
import { EMAIL, mailto } from '../lib/site';
import { url } from '../lib/url';
import { DISCLAIMER, FIGURES } from './economics';
import { phases, phaseLabel } from './phases';
import { SPACE_ECONOMY_SOURCE } from './strategic';

const mail = `<a href="${mailto()}">${EMAIL}</a>`;
const page = (path: string, text: string) => `<a href="${url(path)}">${text}</a>`;

/** An answer is a list of blocks. Strings are trusted, hand-written HTML (links and <strong>). */
export type Block =
  | { p: string }
  | { list: string[]; label?: string }
  | { source: string };

/**
 * Sentences and lists that other pages show word for word (Governance, Programs & Facilities, Partnership &
 * Funding). Defined once here, so an edit to the FAQ wording reaches every page. Plain text, no HTML.
 */
export const faqText = {
  residentsLead: 'FSIC expands opportunity for residents of all ages by making the space economy accessible and visible.',
  businessesLead: 'FSIC helps small businesses and startups participate in aerospace and advanced manufacturing supply chains — opportunities that are currently difficult to access.',
  businessesPipeline: 'This creates a pipeline of supplier-ready companies capable of competing in high-value markets.',
  developersRole: "Developers play a collaborative — not controlling — role in FSIC's work.",
  developersIndependent: 'FSIC is an independent, community-aligned organization, and we recognize that many residents value slow growth or prefer no additional growth at all. Large developments in the region have already been approved, and FSIC does not influence or promote those decisions.',
  developersApproved: 'Our role is to help ensure that what happens within that approved growth reflects community priorities by steering opportunities toward high-wage, future-focused industries rather than low-value or high-impact uses. Developers may help create spaces that support training, innovation, and community engagement, but FSIC does not endorse specific projects or drive development.',
  developersFocus: 'Our focus is protecting community character while shaping the future economy in ways that benefit the people who already live here.',
  backbone: 'FSIC is a neutral backbone organization that coordinates the work of schools, colleges, universities, employers, and civic partners. It does not replace existing institutions — it strengthens them.',
  fillsGaps: 'FSIC fills gaps, aligns stakeholders, and builds the connective infrastructure that no single organization can create alone.',
  competeLead: 'FSIC is intentionally designed to amplify, not compete with, existing institutions. It:',
  coordinate: "FSIC's role is to coordinate, align, and accelerate — not duplicate.",
  locationNow: 'FSIC is a virtual organization located in New Smyrna Beach.',
  locationSite: 'A specific future site in Volusia County will be determined through a collaborative process with community members, civic leaders, industry partners, and other stakeholders. This ensures the final location reflects community priorities, long-term economic strategy, and the needs of partners.',
  fundingLead: 'FSIC uses a proven public-private funding model that blends:',
  leadershipBroad: "FSIC's leadership model is intentionally broad. A cross-sector Board of Directors and a Multi-Institution Advisory Council — representing education, industry, workforce, civic, and government partners — will be featured on the FSIC website as they are formally seated. This structure ensures FSIC remains a neutral, community-anchored institution.",
  getInvolvedLead: 'FSIC is designed to be a community-powered movement, and there are many ways for residents, educators, businesses, and civic partners to participate from the very beginning.',
  getInvolvedSeeking: "In addition, FSIC is actively seeking leaders and volunteers with relevant experience across the Center's four core engines — Talent, Innovation, Market, and Civic. Individuals with backgrounds in STEM education, engineering, advanced manufacturing, entrepreneurship, arts and culture, workforce development, community engagement, or related fields are encouraged to step forward. These early contributors will help shape programs, guide partnerships, and build the foundation for FSIC's long-term impact.",
  forStudents: ['Hands-on STEM learning and maker experiences', 'Dual-enrollment pathways', 'Micro-credentials tied to real jobs', 'Community STEM and arts events'],
  forAdults: ['Short, employer-validated training programs', 'Job placement, apprenticeships, and upskilling', 'Clear pathways into high-wage technical careers'],
  forCommunity: ['Higher wages and economic mobility', 'A stronger regional identity tied to innovation', 'More opportunities for youth and families to engage in STEM'],
  businessSupport: ['Supplier-readiness bootcamps', 'Certification and contracting navigation', 'SBIR/STTR proposal support', 'Startup incubation and acceleration', 'Access to prototyping labs and applied research partners'],
  competeList: ['Co-brands programs with partners', 'Shares credit, curriculum, and facilities', 'Strengthens enrollment in partner institutions', 'Builds pathways that benefit all stakeholders'],
  getInvolvedResidents: ['Community STEM nights that bring families together around hands-on learning', 'Public exhibitions and arts-and-space events that celebrate creativity and innovation', 'Student programs and camps that spark curiosity and build early skills', 'Volunteer and mentorship opportunities supporting learners, educators, and small businesses', 'Employer councils and advisory groups that help shape training, innovation challenges, and regional strategy'],
  fundingBlend: ['Philanthropic and private investment', 'State and federal workforce grants', 'Space Florida and economic development programs', 'Earned revenue from training, partnerships, events and other activities.'],
};

export const faqs: { q: string; id: string; a: Block[] }[] = [
  {
    q: 'What is the Florida Space Innovation Center (FSIC)?',
    id: 'what-is-fsic',
    a: [
      { p: "The FSIC is a regional innovation and workforce engine designed to connect residents, students, educators, small businesses, and employers to the rapidly expanding space and advanced technology economy. It is not a single building, but a coordinated platform that brings together universities, industry, government, and community partners to accelerate economic activity and expand opportunity. Rooted in the city's goal to diversify its economy and bring higher wage jobs to local residents, FSIC aims to ensure that our children and grandchildren can live and thrive in our communities for generations to come." },
      {
        label: 'FSIC operates through four integrated engines:',
        list: [
          '<strong>Talent</strong> — developing a cradle-to-career STEM and technical workforce',
          '<strong>Innovation</strong> — challenge labs, prototyping, and applied research',
          '<strong>Market</strong> — helping small businesses and startups enter aerospace and advanced manufacturing supply chains',
          '<strong>Civic</strong> — community STEM engagement, arts integration, and public programming',
        ],
      },
      { p: `Each engine and its programs are on the ${page('/model', 'FSIC Model')} page.` },
    ],
  },
  {
    q: 'What is the history of the Florida Space Innovation Center (FSIC)?',
    id: 'history',
    a: [
      { p: "The origins of FSIC trace back to the City of New Smyrna Beach's 2023 Economic Development Task Force formed to develop recommendations for economic diversification and better career pathways for local residents. As regional growth accelerates, FSIC provides the strategy to match that population surge with high-quality jobs built in our own communities." },
    ],
  },
  {
    q: 'Why is FSIC needed now?',
    id: 'why-now',
    a: [
      { p: 'Southeast Volusia sits beside one of the fastest-growing aerospace and advanced manufacturing corridors in the world — yet currently captures very little of its value. Students lack clear pathways into high-growth careers, small businesses struggle to access certifications and contracts, and the region has no unified system to connect local talent and companies to the booming Space Coast economy.' },
      { p: 'FSIC fills this gap by providing the structure, partnerships, and momentum needed to ensure the region participates fully in the opportunities unfolding next door.' },
      { p: `The full case is on the ${page('/strategic-moment', 'Strategic Moment')} page.` },
    ],
  },
  {
    q: 'What is the market opportunity for the space industry over the next 20 years?',
    id: 'market-opportunity',
    a: [
      { p: 'The global space economy is projected to grow from roughly $630 billion in 2023 to $1.8 trillion by 2035, driven by lower launch costs, mass-produced satellites, AI-enabled applications, and rising demand for space-based data across nearly every industry. Industry leaders now see the space economy growing far beyond rockets and satellites, opening the door to whole new industries.' },
      { p: 'FSIC positions the region to seize this opportunity by building the talent pipeline employers need, connecting local businesses to space-related supply chains, and creating a hub for innovation and commercialization. It aligns K-12 schools, colleges, workforce agencies, employers, and civic partners into a coordinated system that can produce skilled workers, support entrepreneurs, and attract new industry. FSIC also serves as the backbone organization that organizes partners, secures funding, and accelerates pilot programs that prepare residents and businesses for space-driven economic growth.' },
      { p: 'FSIC ensures that Florida — starting with Southeast Volusia — has the structure, strategy, and community alignment needed to compete for the next wave of jobs, investment, and innovation. It transforms the space economy from something happening "near us" into something that directly benefits local families, students, and businesses.' },
      { source: SPACE_ECONOMY_SOURCE },
    ],
  },
  {
    q: 'How will FSIC benefit local residents and families?',
    id: 'residents-and-families',
    a: [
      { p: faqText.residentsLead },
      { label: 'For students and families:', list: faqText.forStudents },
      { label: 'For adults and career-switchers:', list: faqText.forAdults },
      { label: 'For the community:', list: faqText.forCommunity },
      { p: `Programs for each audience are on the ${page('/programs-facilities#audiences', 'Programs &amp; Facilities')} page.` },
    ],
  },
  {
    q: 'How does FSIC support local businesses and entrepreneurs?',
    id: 'businesses-and-entrepreneurs',
    a: [
      { p: faqText.businessesLead },
      { label: 'Support includes:', list: faqText.businessSupport },
      { p: faqText.businessesPipeline },
      { p: `These are the Market Engine's programs, on the ${page('/model#market', 'FSIC Model')} page.` },
    ],
  },
  {
    q: 'What economic impact will FSIC have on the region?',
    id: 'economic-impact',
    a: [
      { p: `Independent economic modeling shows that FSIC dramatically improves the region's long-term economic trajectory. With full implementation over 25 years (the Master Plan's Extended FSIC, or FSIC 2.0, scenario), FSIC is projected to help the region generate ${FIGURES.output.display} in economic output, support ${FIGURES.jobYears.display} job-years, increase local wages by ${FIGURES.wages.display}, and generate ${FIGURES.fiscal.display} in fiscal revenue for local and state governments. It also positions the region to attract ${FIGURES.externalFunding.words} in external funding tied to workforce development, innovation, and research. ${DISCLAIMER} For the full analysis contact us at ${mail}.` },
      { p: `The full analysis is on the ${page('/economic-impact#at-a-glance', 'Economic Impact')} page.` },
      { source: 'Source: FSIC Master Plan 2026–2031, pp. 7–8.' },
    ],
  },
  {
    q: 'What is the role of developers in the FSIC?',
    id: 'developers',
    a: [
      { p: faqText.developersRole },
      { p: faqText.developersIndependent },
      { p: faqText.developersApproved },
      { p: faqText.developersFocus },
      { p: `FSIC's governance is set out on the ${page('/governance#developers', 'Governance &amp; Transparency')} page.` },
    ],
  },
  {
    q: 'Is FSIC a school, a research center, or an economic development agency?',
    id: 'what-kind-of-organization',
    a: [
      { p: faqText.backbone },
      { p: faqText.fillsGaps },
      { p: `FSIC's role as a backbone organization is set out on the ${page('/governance#backbone', 'Governance &amp; Transparency')} page.` },
    ],
  },
  {
    q: 'Will FSIC compete with local schools, colleges, or nonprofits?',
    id: 'compete',
    a: [
      { label: `No. ${faqText.competeLead}`, list: faqText.competeList },
      { p: faqText.coordinate },
    ],
  },
  {
    q: 'What kinds of programs will FSIC offer first?',
    id: 'first-programs',
    a: [
      { p: 'FSIC launches with a phased, low-risk model focused on early wins and visible community value.' },
      { label: phaseLabel(phases[0]), list: ['Micro-credential academies', 'Dual-enrollment STEM pathways', 'Teacher upskilling', 'Industry-embedded learning', 'K–12 STEM exploration programs'] },
      { label: 'Then:', list: phases.slice(1).map(phaseLabel) },
      { p: `Each phase's activities are on the ${page('/deployment', 'Phased Deployment')} page.` },
    ],
  },
  {
    q: 'Where will FSIC be located?',
    id: 'location',
    a: [
      { p: `${faqText.locationNow} ${faqText.locationSite}` },
      { p: `The facilities planned for each phase are on the ${page('/programs-facilities#facilities', 'Programs &amp; Facilities')} page.` },
    ],
  },
  {
    q: 'How is FSIC funded?',
    id: 'funding',
    a: [
      { label: faqText.fundingLead, list: faqText.fundingBlend },
      { p: "Long-term projections show significant external funding potential aligned with FSIC's mission and program areas." },
      { p: `Each funding stream is on the ${page('/partnership-funding#funding', 'Partnership &amp; Funding')} page.` },
    ],
  },
  {
    q: 'Who leads FSIC?',
    id: 'leadership',
    a: [
      { p: 'The Florida Space Innovation Center is founded by John Joaquin, a technology industry leader and civic strategist with more than four decades of experience driving large-scale innovation, workforce, and modernization initiatives across government, healthcare, and advanced technology sectors. He has held executive roles at Adobe, ADP, IBM, and Ernst &amp; Young (EY) and has led major ecosystem-building efforts, including one of the nation\'s earliest regional quantum innovation ecosystems.' },
      { p: "In addition, he served as chair of the City of New Smyrna Beach's Economic Development Task Force (EDTF) and the Southeast Volusia Chamber of Commerce's Advocacy &amp; Economic Development (A&amp;ED) committee, where the idea of the FSIC was developed." },
      { p: faqText.leadershipBroad },
      { p: `The board, councils and committees are described on the ${page('/governance#structure', 'Governance &amp; Transparency')} page.` },
    ],
  },
  {
    q: 'How can the public get involved?',
    id: 'get-involved',
    a: [
      { p: faqText.getInvolvedLead },
      { label: 'Residents can get involved through:', list: faqText.getInvolvedResidents },
      { p: faqText.getInvolvedSeeking },
      { p: 'The FSIC website will include updates, program announcements, and a simple way to express interest in volunteering, advising, or serving in a leadership capacity.' },
      { p: `Each way to take part is on the ${page('/partnership-funding#get-involved', 'Get Involved')} page.` },
    ],
  },
  {
    q: 'What could FSIC look like in the future?',
    id: 'future',
    a: [
      { label: 'While no outcomes are guaranteed, we envision FSIC evolving into a regional hub that may include:', list: ['A multi-university research and learning center', 'A performing arts and convening space', 'A startup incubator and accelerator', 'A regional talent marketplace serving thousands annually', 'A recognized civilian-facing innovation hub for the Space Coast'] },
      { p: 'These concepts reflect the direction FSIC is planning toward, and we are building our partnerships, programs, and strategy to make these possibilities achievable.' },
      { p: `These concepts are set out on the ${page('/long-term-vision', 'Long-Term Vision')} page.` },
    ],
  },
];

/** A question by its id; a wrong id fails the build with the id in the message, rather than a blank answer. */
export function faqById(id: string) {
  const f = faqs.find((faq) => faq.id === id);
  if (!f) throw new Error(`No FAQ question with id "${id}" (src/data/faq.ts)`);
  return f;
}

// Topics group the questions (the published order is kept within each topic). Topic names are
// new labels (faq.md, PAGE). Every question belongs to exactly one topic.
export const topics = [
  { id: 'about', name: 'About FSIC', ids: ['what-is-fsic', 'history', 'what-kind-of-organization', 'compete', 'leadership', 'location'] },
  { id: 'why-fsic-now', name: 'Why Now', ids: ['why-now', 'market-opportunity', 'economic-impact'] },
  { id: 'programs-funding', name: 'Programs and Funding', ids: ['residents-and-families', 'businesses-and-entrepreneurs', 'first-programs', 'funding', 'developers'] },
  { id: 'getting-involved', name: 'Getting Involved', ids: ['get-involved', 'future'] },
].map((t) => ({ ...t, faqs: t.ids.map(faqById) }));

const assigned = topics.flatMap((t) => t.ids);
if (assigned.length !== faqs.length || new Set(assigned).size !== faqs.length || topics.some((t) => t.faqs.includes(undefined as never))) {
  throw new Error('src/data/faq.ts: every question must belong to exactly one topic');
}
