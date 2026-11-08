// A page's numbered sections, listed once: the PageHero index (`name`), the SectionBar (`short`) and
// each Section's id and running head (`01 / 04`) all read the same list, so they can't drift apart.

export interface PageSection {
  id: string;
  /** Name in the PageHero index. */
  name: string;
  /** Label in the SectionBar. */
  short: string;
}

/**
 * Props for <Section {...sectionProps(sections, id)}>: its id and running-head index and total.
 * Takes any list of ids in page order, so a page without a hero index (the homepage) can use it too.
 */
export function sectionProps(sections: { id: string }[], id: string) {
  const i = sections.findIndex((s) => s.id === id);
  if (i < 0) throw new Error(`No section "${id}" in this page's sections list`);
  return { id, index: i + 1, total: sections.length };
}

/** Items for <SectionBar>. */
export const sectionBarItems = (sections: PageSection[]) => sections.map((s) => ({ id: s.id, label: s.short }));
