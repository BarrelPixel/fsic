// The five phases (Master Plan pp. 13–14; facilities pp. 17–18), chosen by the project lead. Read by
// Deployment (the full phases), Programs & Facilities (planned core spaces) and the FAQ (names and
// timeframes). Copy: src/content/copy/deployment.md and programs-facilities.md.

export type Tone = 'orange' | 'lagoon' | 'navy';
export type Phase = {
  id: string;
  short: string;
  name: string;
  timeframe: string;
  /** Years on the 1–5 axis. */
  start: number;
  end: number;
  /** Engine color: orange for the industry engines, lagoon for Civic, navy for integration. */
  tone: Tone;
  /** The phase FSIC is in now (the homepage marks it "Under way"). Move it when the next phase starts. */
  current?: boolean;
  overview: string;
  activities: string[];
  outcomes: string[];
  facilities: string;
  /** Planned core spaces (Master Plan p. 18), shown on Programs & Facilities. */
  spaces: string[];
};

export const phases: Phase[] = [
  {
    id: 'phase-1',
    short: 'Talent',
    name: 'Foundation & Talent Engine Launch',
    timeframe: 'Year 1',
    current: true,
    start: 1,
    end: 1,
    tone: 'orange',
    overview: "Establishes FSIC's operational foundation and launches the Talent Engine, the first and most critical component of the model. This phase focuses on building credibility, demonstrating early wins, and establishing the partnerships required for long-term success.",
    activities: ['Launch micro-credential academies', 'Establish dual-enrollment STEM pathways', 'Begin teacher upskilling programs', 'Deploy the Regional Talent Marketplace', 'Form employer advisory councils', 'Secure initial philanthropic and public funding', 'Establish governance, bylaws, and board independence'],
    outcomes: ['First cohort of students enrolled in micro-credentials', 'Employer-validated curriculum in place', 'Teacher professional development underway', 'Regional Talent Marketplace operational', 'Strong early partnerships with K–12, colleges, and employers', "FSIC recognized as the region's workforce backbone"],
    facilities: 'Focuses on establishing a functional, cost-efficient startup facility that enables immediate program delivery.',
    spaces: ['Classrooms and training labs for micro-credentials', 'Flexible multipurpose space for workshops and events', 'Small prototyping and fabrication area', 'Office space for staff and partners', 'Meeting rooms for employer and advisory council engagement'],
  },
  {
    id: 'phase-2',
    short: 'Innovation',
    name: 'Innovation Engine Activation',
    timeframe: 'Years 1–2',
    start: 1,
    end: 2,
    tone: 'orange',
    overview: "Introduces the Innovation Engine, creating the region's first civilian-facing applied innovation hub. This phase expands FSIC's impact beyond workforce development into applied research, prototyping, and dual-use technology development.",
    activities: ['Launch challenge labs and innovation sprints', 'Establish rapid prototyping studio', 'Form university and federal research partnerships', 'Host community innovation events', 'Begin dual-use technology development programs', 'Expand employer engagement'],
    outcomes: ['First prototypes developed through challenge labs', 'University partnerships formalized', 'Applied research projects underway', 'Increased visibility and community engagement', 'Stronger employer recruitment and retention'],
    facilities: 'Enables FSIC to support applied innovation, dual-use technology development, and deeper employer engagement.',
    spaces: ['Challenge labs for student and industry collaboration', 'Rapid prototyping studio with fabrication tools', 'Small research and testing labs', 'Collaboration zones for university and industry partners', 'Expanded multipurpose space for innovation events'],
  },
  {
    id: 'phase-3',
    short: 'Market',
    name: 'Market Engine Deployment',
    timeframe: 'Years 2–3',
    start: 2,
    end: 3,
    tone: 'orange',
    overview: 'Activates the Market Engine, supporting local businesses, startups, and entrepreneurs through commercialization, supplier readiness, and federal funding pathways.',
    activities: ['Launch supplier-readiness bootcamps', 'Provide certification support (AS9100, ITAR, CMMC)', 'Establish SBIR/STTR navigation services', 'Create startup acceleration programs', 'Build contract matchmaking and procurement pathways'],
    outcomes: ['Local companies entering aerospace and defense supply chains', 'Increased SBIR/STTR submissions and awards', 'Startups accelerated and supported', 'Stronger local supplier base', 'Increased economic diversification and resilience'],
    facilities: 'Introduces facilities that support commercialization, supplier readiness, and startup acceleration.',
    spaces: ['Small business resource center', 'Certification and compliance training rooms', 'Startup incubation and co-working space', 'Meeting rooms for procurement and contracting support', 'Expanded prototyping and testing capacity'],
  },
  {
    id: 'phase-4',
    short: 'Civic',
    name: 'Civic Engine Expansion',
    timeframe: 'Years 2–4',
    start: 2,
    end: 4,
    tone: 'lagoon',
    overview: 'Expands the Civic Engine, strengthening community engagement, regional identity, and public trust. This phase ensures that innovation is visible, accessible, and meaningful to residents.',
    activities: ['Host community STEM nights and exhibitions', 'Integrate arts and space programming', 'Launch regional storytelling and branding initiatives', 'Expand public events and convenings', 'Strengthen transparent governance and reporting'],
    outcomes: ['Increased community participation', 'Stronger regional identity', 'Expanded access to STEM experiences', 'Greater civic trust and transparency', 'Broad public support for innovation-driven growth'],
    facilities: "Expands FSIC's public-facing spaces to support community engagement, exhibitions, and regional identity building.",
    spaces: ['Public exhibition gallery', 'Community event space', 'Arts-and-space integration areas', 'STEM exploration zones for families and youth', 'Outdoor gathering and placemaking spaces'],
  },
  {
    id: 'phase-5',
    short: 'Integration',
    name: 'Full Ecosystem Integration',
    timeframe: 'Years 3–5',
    start: 3,
    end: 5,
    tone: 'navy',
    overview: 'Integrates all four engines into a cohesive regional innovation ecosystem capable of competing for major federal and state investments. This phase positions FSIC as a durable regional institution.',
    activities: ['Integrate Talent, Innovation, Market, and Civic Engines', 'Expand facilities and programming', 'Pursue major federal funding (EDA, NSF, DoD, NASA)', 'Strengthen employer recruitment and retention'],
    outcomes: ['Fully integrated regional innovation ecosystem', 'Strong federal and state funding pipeline', 'Increased employer attraction and expansion', 'Sustainable operating model with diversified revenue', 'FSIC recognized as a regional anchor institution'],
    facilities: 'Positions FSIC as a permanent anchor institution for Southeast Volusia.',
    spaces: ['Full-scale innovation center', 'Expanded research and prototyping labs', 'Large multipurpose event and conference space', 'Co-located university and industry partner suites', 'Outdoor innovation plaza and community spaces'],
  },
];

/** "Phase 2: Innovation Engine Activation (Years 1–2)". */
export const phaseLabel = (phase: Phase) => `Phase ${phases.indexOf(phase) + 1}: ${phase.name} (${phase.timeframe})`;

/** Why phase it (Master Plan p. 13): shown on Deployment (hero aside) and the homepage (How it works). */
export const phasedApproach = ['Reduces risk', 'Aligns with funding cycles', 'Ensures operational discipline', 'Builds momentum before expansion'];
