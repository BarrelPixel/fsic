# News & Media Copy

**Status:** Draft
**Last Updated:** November 2026
**Route:** /news (built November 2026), plus one page per release at /news/<slug>
**Sources:** fsic.space/news

---

## UPDATES

Short entries in the site's own voice, usually from a post FSIC made on social media: what happened, when, why it matters to the region, and a link to the original post ("First posted on…"). Unlike press releases, updates are rewritten to the content guidelines (`docs/03`): no hashtags, no hype, and every fact checked against a source. Photos only when FSIC owns them or has permission; photos of students or minors need consent on file. Labeled "Update" on the News list and the entry page (`kind: update` in the file).

### FSIC at NASA's MAX POWER Aerospace Expo (`2026-11-10-fsic-at-nasa-max-power.md`)

From FSIC's Facebook post about the expo (November 10, 2026). Facts checked against NASA's announcements and trade coverage (November 2026): the expo dates (November 7–8, Kennedy Space Center), Administrator Jared Isaacman's skydive, the X-70 Fractal, astronaut applications, the $1 million student Moon Base challenge and the awards involving 12 companies (NASA's count). Left out: the MiG-29 flight (no source found) and the post's hashtags and promotional wording.

> **⚠ Review:** new wording, and the post's three photos (the Thunderbirds, a parachutist, Jared Isaacman on the Air Show Tour stage) are held until FSIC confirms who took them and that it may use them.

### NASA's Moon Base Challenge: An Invitation to Volusia County Students (`2026-11-11-nasa-moon-base-challenge-for-students.md`)

From FSIC's Facebook post of November 11, 2026, calling on Volusia County Schools high school students to enter. Facts checked against NASA's announcement and coverage of it (November 2026): the $1 million, the six categories, the two divisions (high school ages 13–18; post-secondary), teams of two to five students with an adult coach, and registration through NASA's STEM Gateway by January 25, 2027. The post listed fields (engineering, manufacturing, robotics, IT, environmental systems, construction); the entry uses NASA's six categories instead. Left out: the hashtags, and later deadlines reported by only one outlet. It doesn't say FSIC runs the challenge or partners with Volusia County Schools on it.

> **⚠ Review:** new wording. moonbasechallenge.org, the site the post links, couldn't be reached to check; confirm it is the official challenge site.

### Lunch with NASA Pioneer JoAnn Morgan (`2026-11-12-lunch-with-joann-morgan.md`)

From John Joaquin's post of November 12, 2026 (LinkedIn; also on his private Facebook). Facts checked against NASA's profile ("Rocket Fuel in Her Blood") and news coverage (2019 Apollo 11 anniversary, her 2003 retirement): instrumentation controller, the only woman in the launch firing room at the Apollo 11 liftoff (July 16, 1969), the first woman senior executive at Kennedy Space Center, a career from 1958 to 2003. The quote is John's own words from the post. Photos: the lunch photo, FSIC's own (John had it taken); two NASA archive photos (public domain, credited "NASA", no endorsement implied). Source link: John's LinkedIn post (his Facebook is private).

> **Confirmed (November 12, 2026, project lead):** FSIC owns the lunch photo (John had it taken); all three captions are correct; JoAnn Morgan is fine with being named a New Smyrna Beach resident.

### Remembering Margaret Hamilton (`2026-10-11-remembering-margaret-hamilton.md`)

From FSIC's Facebook post of October 11, 2026. Facts checked against the Associated Press obituary and MIT (October 2026): died September 30, 2026, at 90; led the MIT team that wrote the Apollo onboard flight software; Presidential Medal of Freedom, 2016. "Widely credited with naming the field of software engineering" is the usual wording in her obituaries. Left out: the hashtags. The condolence line is new.

> **⚠ Review:** new wording, including the condolence line.

### Preparing Southeast Volusia's Space Workforce, and a New Initiative for Girls and Young Women (`2026-09-24-preparing-the-space-workforce-in-southeast-volusia.md`)

From FSIC's Facebook post of September 24, 2026. The post's NASA link was missing; the entry links NASA's "NASA Kicks Off Nationwide Effort to Prepare Tomorrow's Space Workforce" (the State Hubs for Skilled Technical Workforce kickoff, September 15, 2026, Space Center Houston), which matches the post's wording, and Space Florida's release on Project ORBIT, Florida's hub. Changed from the post: "helped make the first Apollo mission possible" is now "helped launch Apollo 11, the first Moon landing" (Apollo 11 was not the first Apollo mission); "is bringing together" is now "is working to bring together"; the closing slogans and emoji are left out. The entry doesn't claim a partnership with NASA or Space Florida.

> **⚠ Review:** new wording. (1) Confirm the NASA announcement is the one the post meant. (2) The post doesn't name the woman who inspired the initiative (JoAnn Morgan, from the November 12 update); the entry doesn't either. Name her and link the two only if FSIC and she agree. (3) Has the initiative a name, and is it still recruiting? If not, update or remove the call for volunteers.

## PRESS RELEASES

Each release is its own Markdown file in `src/content/news/`, named `<YYYY-MM-DD>-<slug>.md`, with the headline and date in the frontmatter. The file name is the URL. To publish a new release, add a file; the list page and the "More news" links update themselves.

Keep the wording as published, including quotes. Fix only obvious formatting (bold subheads on their own line, one line per media-contact line). The current Wix blog posts (Dec 15, 2025) are **not** included. They are generic filler and should be retired (see audit §1).

| Date | File |
|------|------|
| August 3, 2026 | `2026-08-03-jake-johansson-joins-founders-council.md` |
| July 29, 2026 | `2026-07-29-ryan-trine-joins-board.md` |
| July 13, 2026 | `2026-07-13-diezel-depew-joins-board.md` |
| July 7, 2026 | `2026-07-07-jessie-thompson-joins-board.md` |
| May 25, 2026 | `2026-05-25-fsic-launches-on-may-25.md` |

> **Source:** fsic.space/news (verbatim). Checked November 8, 2026: no releases newer than July 29.
> **August 3 release (Jake Johansson, Founders Council):** text and graphic supplied by the project lead (November 8, 2026), not taken from fsic.space. Added as supplied; the only changes are the bold dateline and ordinary hyphens in place of non-breaking ones ("county-level", "fastest-growing", "long-term", "forward-looking").
> **⚠ Review:** The Founders Council is now named on the homepage and the Governance page (Jake Johansson), but nothing says what it is or does. Describe it in `governance.md` if it is a standing body.
> **Note:** The releases use words the content guidelines avoid ("proud to announce", "premier hub"). They stay as published.
> **Images:** each release shows the graphic published with it on fsic.space/news (November 2026). The files are in `src/content/news/images/`, set by `image` and `imageAlt` in each release's frontmatter. The alt text transcribes the words in the graphic.

> **⚠ Review:** The Trine and DePew graphics show a building signed "Florida Space Innovation Center" next to a rocket, and FSIC has no building yet. Confirm these graphics should stay, and that FSIC owns them.

> **Resolved (November 11, 2026):** the Jessie Thompson graphic says "Executive Board"; the release says "Board of Directors". The graphic stays as FSIC published it (DESIGN.md: release graphics aren't altered); the site's own text uses the release's "Board of Directors".

---

## RELATED ON THIS SITE (November 12, 2026)

Under each press release, a short list of site pages to read next (`related` in the release's file), so releases link into the site without changing their published wording: the launch release to the Strategic Moment, the FSIC Model, Economic Impact and Get Involved; each appointment to Governance and the matching partner row or engine. Updates link inline instead (Talent Engine and other engine anchors, Example Paths, the jobs-and-pay post, each other).

> **⚠ Review:** the link labels are new.

## LIST PAGE

**Headline:** News & Media

**Lead:** Press releases from the Florida Space Innovation Center, newest first.

**Aside:** Media inquiries: info@fsic.space

> **⚠ Review:** Lead and aside are new. The media contact uses the general address rather than a named person until titles are confirmed (audit §3.6, §3.8).

Each row shows the date, the headline (linking to the release) and the release's first sentence, without its dateline (`firstSentence()` in `src/lib/news.ts`; initials such as "U.S." don't end a sentence). On wide screens, a thumbnail of the release graphic, all at one height, sits under the date and also links to the release.

---

## RELEASE PAGE

Headline, then "<date> · Press release", the release graphic beside the text (after it on small screens, so the text comes first; also the page's share image), the release text, a link back to "All news and media", and a "More news" list of the other releases. The meta description is the first paragraph, shortened to about 155 characters.

---

## BOILERPLATE

> **Resolved (November 11, 2026):** use the newer (July 7) paragraph as the standard boilerplate for future releases. Published releases stay as published.
