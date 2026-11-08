import { engineName, type EngineId } from './engines';

// The Master Plan's program portfolio (pp. 19–21), by engine. One list for the whole site: the
// Programs & Facilities page (portfolio) and the Model page (each engine's programs) both read it.
// Copy: src/content/copy/programs-facilities.md, "PROGRAM PORTFOLIO".

export type Program = { name: string; lead: string; items?: string[]; outcome?: string };
export type EnginePrograms = { id: EngineId; name: string; line: string; programs: Program[] };

export const engines: EnginePrograms[] = [
  {
    id: 'talent',
    name: engineName('talent'),
    line: 'The Talent Engine provides a coordinated, employer-validated workforce pipeline that prepares students and adults for high-demand careers in aerospace, advanced manufacturing, robotics, and dual-use technologies.',
    programs: [
      { name: 'Micro-Credential Academies', lead: 'Short, stackable credentials aligned to employer needs, including:', items: ['Robotics & automation', 'Composites & materials', 'Avionics fundamentals', 'Precision machining', 'Additive manufacturing', 'Launch operations support'], outcome: 'These credentials provide rapid pathways into high-value careers.' },
      { name: 'Dual-Enrollment STEM Pathways', lead: 'Partnerships with state colleges and universities to offer:', items: ['Engineering technology', 'Advanced manufacturing', 'Computer science and cybersecurity', 'Aerospace technology'], outcome: 'Students earn college credit while gaining hands-on experience.' },
      { name: 'Industry-Embedded Learning', lead: 'Programs that place students in real industry environments, including:', items: ['Job shadowing', 'Internships', 'Apprenticeships', 'Employer-led workshops'], outcome: 'These experiences strengthen career readiness and employer relationships.' },
      { name: 'Teacher Upskilling & Professional Development', lead: 'Training for educators in:', items: ['Emerging technologies', 'Industry-aligned curriculum', 'Hands-on lab instruction', 'STEM pedagogy'], outcome: 'This expands regional teaching capacity and improves program quality.' },
      { name: 'Regional Talent Marketplace', lead: 'A digital platform that connects:', items: ['Students', 'Job seekers', 'Employers', 'Educators'], outcome: 'The marketplace provides visibility into regional opportunities and strengthens talent alignment.' },
    ],
  },
  {
    id: 'innovation',
    name: engineName('innovation'),
    line: "The Innovation Engine provides the region's first civilian-facing applied innovation hub, enabling collaboration among students, educators, researchers, startups, and industry partners.",
    programs: [
      { name: 'Challenge Labs', lead: 'Teams work on real aerospace and advanced manufacturing problems provided by employers, universities, or federal partners. Outcomes include prototypes, research findings, and new technologies.' },
      { name: 'Rapid Prototyping Studio', lead: 'A hands-on fabrication environment equipped with:', items: ['3D printers', 'CNC machines', 'Electronics benches', 'Materials testing tools'], outcome: 'This space supports rapid iteration and applied learning.' },
      { name: 'Innovation Sprints & Hackathons', lead: 'Short, intensive events that bring together:', items: ['Students', 'Engineers', 'Designers', 'Entrepreneurs'], outcome: 'These events build community, accelerate problem-solving, and generate new ideas.' },
      { name: 'Applied Research Partnerships', lead: 'Collaborations with universities and federal agencies to support:', items: ['Dual-use technology development', 'Autonomy and AI research', 'Materials and manufacturing innovation', 'Space systems and sensors'], outcome: 'These partnerships strengthen regional competitiveness for federal funding.' },
    ],
  },
  {
    id: 'market',
    name: engineName('market'),
    line: 'The Market Engine supports local businesses, startups, and entrepreneurs through commercialization, supplier readiness, and federal funding pathways.',
    programs: [
      { name: 'Supplier Readiness Bootcamps', lead: 'Training and support for companies seeking to enter aerospace and defense supply chains, including:', items: ['Quality systems', 'Compliance requirements', 'Contracting', 'Procurement pathways'] },
      { name: 'Certification & Compliance Support', lead: 'Assistance with:', items: ['AS9100', 'ITAR', 'CMMC', 'ISO standards'] },
      { name: 'SBIR/STTR Navigation', lead: 'Guidance for small businesses pursuing federal innovation funding, including:', items: ['Topic identification', 'Proposal development', 'Partner matching', 'Post-award support'] },
      { name: 'Startup Acceleration', lead: 'Programs that support early-stage companies through:', items: ['Mentorship', 'Business model development', 'Access to capital', 'Prototyping resources'] },
      { name: 'Contract Matchmaking & Procurement Support', lead: 'Connections to:', items: ['Prime contractors', 'Federal agencies', 'Spaceport operators', 'Local government procurement'] },
    ],
  },
  {
    id: 'civic',
    name: engineName('civic'),
    line: 'The Civic Engine ensures that innovation is visible, accessible, and meaningful to the public. It builds community trust, regional identity, and broad-based support for innovation-driven growth.',
    programs: [
      { name: 'Community STEM Nights', lead: 'Hands-on events for families and youth that build excitement around science, technology, and space.' },
      { name: 'Arts + Space Integration', lead: 'Programs that blend creativity and technology, including:', items: ['Public art installations', 'Space-themed exhibitions', 'Artist-in-residence programs'] },
      { name: 'Public Exhibitions and Demonstrations', lead: 'Showcases of:', items: ['Student projects', 'Prototypes', 'Research outcomes', 'Community innovations'] },
      { name: 'Regional Storytelling & Branding', lead: 'Narratives that highlight:', items: ['Local innovators', 'Regional achievements', 'Community impact', 'Economic opportunity'] },
      { name: 'Community Convenings & Placemaking', lead: 'Events that bring residents together to build a shared sense of identity and belonging.' },
    ],
  },
];

export type { EngineId };

export const programsFor = (id: EngineId): Program[] => engines.find((e) => e.id === id)!.programs;
