// Governance & Transparency: the governing bodies (Master Plan pp. 15–17) and the metrics by area (p. 32).
// Copy: src/content/copy/governance.md (Draft).

// 02 · Governing bodies, Master Plan pp. 15–17
export type Body = {
  name: string;
  purpose: string;
  lists: { label: string; items: string[] }[];
  duties?: { label: string; items: string[] };
};

export const bodies: Body[] = [
  {
    name: 'Board of Directors',
    purpose: 'The Board of Directors serves as the governing body responsible for strategic oversight, fiduciary stewardship, and organizational accountability. The board is intentionally structured to ensure independence, diversity of expertise, and representation across key regional sectors.',
    lists: [
      { label: 'Composition', items: ['Independent community leaders', 'Industry and employer representatives', 'Education and workforce leaders', 'Economic development partners', 'Philanthropic and civic leaders', 'Non-voting ex officio roles for key partners'] },
      { label: 'Board independence', items: ['Independent board chair', 'Term limits', 'Conflict-of-interest policies', 'Balanced representation across sectors', 'Clear separation between governance and operations'] },
    ],
    duties: { label: 'Responsibilities', items: ['Strategic direction and mission alignment', 'Fiscal oversight and budget approval', 'CEO hiring, evaluation, and succession planning', 'Policy development and compliance', 'Oversight of major partnerships and agreements', 'Ensuring transparency and public accountability'] },
  },
  {
    name: 'Executive Leadership',
    purpose: 'The executive team is responsible for day-to-day operations, program execution, partnership management, and organizational growth. The CEO leads the organization with support from directors overseeing each engine.',
    lists: [
      { label: 'Key roles', items: ['Chief Executive Officer', 'Director of Talent Engine', 'Director of Innovation Engine', 'Director of Market Engine', 'Director of Civic Engine', 'Director of Operations and Finance'] },
    ],
    duties: { label: 'Responsibilities', items: ['Implementing board-approved strategy', 'Managing staff and operations', 'Building partnerships with employers, schools, and universities', 'Securing funding and managing grants', 'Ensuring program quality and impact', 'Reporting outcomes to the board and public'] },
  },
  {
    name: 'Advisory Councils',
    purpose: 'Advisory councils provide specialized expertise, employer input, and community insight. They ensure that FSIC remains aligned with industry needs, educational priorities, and community expectations.',
    lists: [
      { label: 'Councils', items: ['Employer Advisory Council', 'Education and Workforce Advisory Council', 'Innovation and Research Advisory Council', 'Community and Civic Advisory Council', 'Small Business and Supplier Advisory Council'] },
    ],
    duties: { label: 'Functions', items: ['Provide technical expertise', 'Validate curriculum and program design', 'Identify emerging industry needs', 'Support employer recruitment and partnerships', 'Strengthen community engagement'] },
  },
  {
    name: 'Board of Advisors',
    purpose: 'The Board of Advisors provides high-level guidance, strategic insight, and relationship-driven support to the CEO and leadership team.',
    lists: [
      { label: 'Composition', items: ['Influential community and regional leaders', 'Senior executives from key industries', 'Philanthropic and civic influencers', 'University, research, and innovation partners', 'Entrepreneurs, founders, and small-business leaders', 'Former elected officials and policy influencers', 'Strategic connectors who open networks and opportunities', "Subject-matter experts aligned to FSIC's four engines"] },
    ],
    duties: { label: 'Responsibilities', items: ['Open doors to employers, funders, and institutional partners', 'Support resource development and philanthropic outreach', 'Offer insight on regional trends, opportunities, and risks', 'Serve as ambassadors for FSIC in the community and across sectors', "Strengthen FSIC's visibility, credibility, and influence", 'Advise on program relevance and emerging industry needs', 'Support special initiatives, events, and public engagement'] },
  },
  {
    name: 'Committees',
    purpose: 'Committees support board governance and ensure compliance with nonprofit regulations, funder requirements, and best practices.',
    lists: [
      { label: 'Standing committees', items: ['Finance and Audit Committee', 'Governance and Nominating Committee', 'Programs and Impact Committee', 'Development and Partnerships Committee'] },
    ],
  },
];

// 04 · Metrics by area, Master Plan p. 32. Engines keep their site-wide numbers and colors.
export const metrics = [
  { name: 'Talent Engine', number: 1, tone: 'orange', items: ['Number of students enrolled in micro-credentials', 'Completion and certification rates', 'Dual-enrollment participation and credit attainment', 'Teacher upskilling participation', 'Internship, apprenticeship, and job placement rates', 'Employer satisfaction and alignment'], cadence: ['Quarterly program dashboards', 'Annual workforce impact report', 'Employer advisory council reviews'] },
  { name: 'Innovation Engine', number: 2, tone: 'orange', items: ['Number of challenge labs conducted', 'Prototypes developed and tested', 'University and federal research partnerships', 'Innovation sprint and hackathon participation', 'Dual-use technology projects initiated'], cadence: ['Semiannual innovation reports', 'Annual research and development summary', 'Partner feedback sessions'] },
  { name: 'Market Engine', number: 3, tone: 'orange', items: ['Number of businesses supported', 'SBIR/STTR submissions and awards', 'Certifications achieved (AS9100, ITAR, CMMC)', 'Startup acceleration participation', 'Contract matchmaking outcomes', 'Revenue growth among participating companies'], cadence: ['Quarterly business impact dashboards', 'Annual supplier readiness report', 'Federal grant reporting as required'] },
  { name: 'Civic Engine', number: 4, tone: 'lagoon', items: ['Attendance at community STEM nights', 'Participation in exhibitions and public events', 'Arts-and-space program engagement', 'Public awareness and perception metrics', 'Volunteer and mentorship participation'], cadence: ['Quarterly community engagement summaries', 'Annual civic impact report', 'Public presentations and exhibitions'] },
  { name: 'Organizational Health', number: null, tone: null, items: ['Financial performance and revenue diversification', 'Board engagement and governance effectiveness', 'Staff retention and professional development', 'Partnership growth and satisfaction', 'Compliance and audit outcomes'], cadence: ['Monthly internal dashboards', 'Quarterly board reports', 'Annual audit and compliance review'] },
] as const;
