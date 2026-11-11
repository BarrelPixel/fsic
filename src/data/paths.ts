// Example paths through FSIC's programs (Programs & Facilities, "Example Paths"): how one person or business could
// move through the programs, step by step. Illustrations, not people: every step is a program the Master Plan
// describes (pp. 19–20, src/data/programs.ts), and its timing is the phase that starts it (pp. 13–14,
// src/data/phases.ts). A program the plan gives no phase is shown without a timeframe rather than a guess.
// Copy: src/content/copy/programs-facilities.md (⚠ Review).
import type { Tone } from '../lib/tones';

export type Step = {
  program: string;
  /** What this person or business does there, in the program's own terms. */
  what: string;
  /** Years on the 1–5 track, from the phase that starts the program; null when the plan sets none. */
  start: number | null;
  end: number | null;
  when: string;
  /** Where the program is described. */
  href: string;
};
export type Path = { id: string; who: string; tone: Tone; steps: Step[] };

const microCredential: Step = {
  program: 'Micro-Credential Academies',
  what: 'A short, stackable credential aligned to employer needs, in a field such as precision machining, avionics fundamentals or launch operations support.',
  start: 1, end: 1, when: 'Year 1', href: '/programs-facilities/#portfolio',
};
const embedded = (what: string): Step => ({
  program: 'Industry-Embedded Learning',
  what,
  start: null, end: null, when: 'Timing not yet set', href: '/programs-facilities/#portfolio',
});
const marketplace = (what: string): Step => ({
  program: 'Regional Talent Marketplace',
  what,
  start: 1, end: 1, when: 'Year 1', href: '/programs-facilities/#portfolio',
});
const market = (program: string, what: string): Step => ({ program, what, start: 2, end: 3, when: 'Years 2–3', href: '/model/#market' });

export const paths: Path[] = [
  {
    id: 'student',
    who: 'A high-school student',
    tone: 'orange',
    steps: [
      { program: 'Dual-Enrollment STEM Pathways', what: 'College credit while still in high school, with hands-on experience, in engineering technology, advanced manufacturing, computer science and cybersecurity, or aerospace technology.', start: 1, end: 1, when: 'Year 1', href: '/programs-facilities/#portfolio' },
      microCredential,
      embedded('Job shadowing, then an internship or apprenticeship in a real industry setting.'),
      marketplace('A digital platform that connects students, job seekers, employers and educators, with visibility into opportunities in the region.'),
    ],
  },
  {
    id: 'career-switcher',
    who: 'An adult changing careers',
    tone: 'orange',
    steps: [
      microCredential,
      embedded('An apprenticeship or employer-led workshops, to learn on the job.'),
      marketplace('The same platform, connecting job seekers with employers and with visibility into opportunities in the region.'),
    ],
  },
  {
    id: 'manufacturer',
    who: 'A local manufacturer',
    tone: 'orange',
    steps: [
      { program: 'Employer advisory councils', what: 'A say in what FSIC teaches: councils validate curriculum and micro-credentials, so graduates have the skills the shop needs.', start: 1, end: 1, when: 'Year 1', href: '/governance/#structure' },
      marketplace('The same platform, connecting employers with students, job seekers and educators in the region.'),
      market('Supplier Readiness Bootcamps', 'Training in quality systems, compliance, contracting and procurement, to enter aerospace and defense supply chains.'),
      market('Certification & Compliance Support', 'Help with AS9100, ITAR, CMMC and ISO standards.'),
      market('Contract Matchmaking & Procurement Support', 'Connections to prime contractors, federal agencies, spaceport operators and local government procurement.'),
    ],
  },
];
