// The four engines: names, colors, what each transforms, and the Model page's detail. Read by the
// homepage (name, shift, homeSummary, tone) and the Model page (everything). Programs per engine are in
// programs.ts. Copy: src/content/copy/model.md and home.md.

export type EngineId = 'talent' | 'innovation' | 'market' | 'civic';

export type Engine = {
  id: EngineId;
  name: string;
  tone: 'orange' | 'lagoon';
  shift: string;
  /** The homepage's one-sentence summary. */
  homeSummary: string;
  launchesFirst: boolean;
  summary: string[];
  together: string[];
  solves: string[];
  impact: string[];
};

export const engines: Engine[] = [
  {
    id: 'talent',
    name: 'Talent Engine',
    tone: 'orange',
    shift: 'Transforming individuals into skilled talent',
    homeSummary: 'Drives employer-aligned training, micro-credential academies, dual-enrollment pathways, and industry-embedded learning.',
    launchesFirst: true,
    summary: [
      'A coordinated, employer-validated workforce pipeline aligned to launch operations, spacecraft manufacturing, advanced manufacturing, robotics, and dual-use technologies.',
    ],
    together: ["Students", "Educators", "Employers"],
    solves: [
      "Fragmented talent pipelines",
      "Lack of space-specific training",
      "Insufficient hands-on learning",
      "Limited employer access to local talent",
      "Weak alignment between education and industry",
    ],
    impact: [
      "Increases the supply of job-ready talent",
      "Reduces hiring friction for employers",
      "Strengthens regional competitiveness",
      "Expands economic mobility for residents",
      "Positions Southeast Volusia as a workforce hub for the Space Coast",
    ],
  },
  {
    id: 'innovation',
    name: 'Innovation Engine',
    tone: 'orange',
    shift: 'Transforming knowledge into innovation',
    homeSummary: 'Powers challenge labs, applied research partnerships, prototyping studios, and university collaboration.',
    launchesFirst: false,
    summary: [
      "The region's first civilian-facing applied innovation hub.",
      'Enables students, educators, researchers, startups, and industry partners to collaborate on real aerospace and advanced technology challenges.',
      'Accelerates prototyping, applied research, and dual-use technology development.',
    ],
    together: ["Industry", "Universities", "Startups", "Community partners"],
    solves: [
      "No civilian innovation hub on the Space Coast",
      "Limited applied research capacity",
      "Lack of shared prototyping and testing facilities",
      "Weak industry-university collaboration",
      "No platform for dual-use technology development",
    ],
    impact: [
      "Accelerates R&D and commercialization",
      "Strengthens university partnerships",
      "Attracts federal innovation funding",
      "Builds a culture of problem-solving and experimentation",
      "Positions Southeast Volusia as a hub for dual-use innovation",
    ],
  },
  {
    id: 'market',
    name: 'Market Engine',
    tone: 'orange',
    shift: 'Transforming opportunity into market success',
    homeSummary: 'Accelerates supplier readiness, startup development, SBIR/STTR navigation, and venture pathways.',
    launchesFirst: false,
    summary: [
      'Strengthens the regional supplier base by helping companies secure certifications, navigate SBIR/STTR funding, access federal procurement pathways, and scale into sustainable ventures.',
      'Ensures innovation generated in the region becomes market-ready and economically impactful.',
    ],
    together: ["Local companies", "Buyers and primes", "Investors"],
    solves: [
      "Local companies locked out of supply chains",
      "Lack of certification and compliance support",
      "No regional accelerator or incubator",
      "Limited access to capital",
      "No structured pathway to federal procurement",
    ],
    impact: [
      "Strengthens the local supplier base",
      "Increases contract wins and federal funding",
      "Supports startup formation and growth",
      "Attracts employers seeking a ready ecosystem",
      "Diversifies the regional economy",
    ],
  },
  {
    id: 'civic',
    name: 'Civic Engine',
    tone: 'lagoon',
    shift: 'Transforming innovation into shared identity',
    homeSummary: 'Engages the broader community through STEM programming, exhibitions, arts-and-space initiatives, and public events.',
    launchesFirst: false,
    summary: [
      'Builds public trust, regional identity, and community engagement through STEM events, arts and space programming, public exhibitions, and transparent governance.',
      'Ensures innovation is visible, accessible, and meaningful to residents.',
    ],
    together: ["Residents", "Educators", "Employers", "Artists", "Civic leaders"],
    solves: [
      "Lack of public understanding of the space economy",
      "Weak regional identity",
      "Limited community access to STEM experiences",
      "Insufficient civic engagement",
      "Need for visible public benefit",
    ],
    impact: [
      "Builds community pride and belonging",
      "Strengthens civic trust and transparency",
      "Expands access to STEM opportunities",
      "Creates a shared narrative around regional growth",
    ],
  },
];

/** An engine's name by id, for files that only need the label. */
export const engineName = (id: EngineId) => engines.find((e) => e.id === id)!.name;
