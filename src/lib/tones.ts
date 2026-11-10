// What each marker color means (DESIGN.md "Color"): orange the space industry, lagoon the community,
// navy integration (the fifth phase), gray a problem. One map for every dot and bar, so the dark-background
// variants are decided once: lagoon becomes lagoon-light on night, navy becomes white.

export type Tone = 'orange' | 'lagoon' | 'navy' | 'gray';

const onLight: Record<Tone, string> = { orange: 'bg-orange', lagoon: 'bg-lagoon', navy: 'bg-navy', gray: 'bg-gray/60' };
const onDark: Record<Tone, string> = { orange: 'bg-orange', lagoon: 'bg-lagoon-light', navy: 'bg-white/80', gray: 'bg-gray/60' };

/** The background class for a marker of this tone, on white or (dark) on night. */
export const toneBg = (tone: Tone, dark = false) => (dark ? onDark : onLight)[tone];
