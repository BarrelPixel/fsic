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
};
