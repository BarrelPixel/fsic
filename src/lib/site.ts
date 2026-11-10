// Site-wide contact details, used by the footer and any page that links to them.
// Copy: src/content/copy/site-wide.md and contact.md.

export const EMAIL = 'info@fsic.space';

/** A mailto: link to EMAIL, with the subject filled in when given. */
export const mailto = (subject?: string) =>
  subject ? `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}` : `mailto:${EMAIL}`;

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/florida-space-innovation-center/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61589280681125' },
  { label: 'X', href: 'https://x.com/FLSpaceCenter' },
];

/**
 * FSIC's legal and tax status, from its IRS determination letter (Letter 947, October 20, 2026): exempt under
 * IRC 501(c)(3) as a public charity, effective July 1, 2026; contributions deductible under IRC 170.
 * The EIN is public for charities and lets donors and grant-makers verify the status.
 */
export const ORG = {
  legalName: 'Florida Space Innovation Center Inc.',
  status: '501(c)(3) nonprofit organization',
  ein: '43-2277165',
  /** IRS classification and dates, from the determination letter. */
  publicCharity: '509(a)(2)',
  exemptSince: 'July 1, 2026',
  determinationDate: 'October 20, 2026',
  fiscalYear: 'July 1 to June 30',
  /**
   * Florida charitable-solicitation registration number (FDACS, Chapter 496, Florida Statutes). Set it once FSIC
   * is registered: the state's disclosure then appears wherever the site discusses contributions
   * (SolicitationDisclosure). Until then the site must not ask the public for donations.
   */
  floridaRegistration: null as string | null,
};

/** The IRS's public search for tax-exempt organizations, where anyone can confirm FSIC's status by its EIN. */
export const IRS_EXEMPT_SEARCH = 'https://apps.irs.gov/app/eos/';
