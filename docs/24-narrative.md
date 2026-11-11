# 24 — Narrative: place, paths and the present tense

**Status:** Example Paths built (November 11, 2026); wording awaits FSIC's review (⚠ Review in `programs-facilities.md`). The map and next-launch line were built, then taken off the homepage for now at the project lead's direction; `RegionMap`, `src/data/region-map.json` and `src/lib/launches.ts` stay in the code so they can return.
**Builds on:** `23-site-elevation-plan.md`. That plan made every page answer its question; this one gives the story a place, a person-shaped path, and something happening now.

## What was missing
The site argued well but read like a plan: the visitor learned what FSIC intends, rarely saw the place, a path through it, or anything happening this week. Three changes, all within DESIGN.md (no new animation, no stock imagery, no invented people or quotes):

| Change | Where | Built from |
|--------|-------|------------|
| **Within sight of the Cape:** a map of Southeast Volusia, the launch complexes and Orlando, with straight-line distances (35 and 43 miles), captioned with the Master Plan's warning about becoming "a commuter community to Brevard and Orlando" (p. 3) | Homepage, Why now (`RegionMap`) | Census Bureau county boundaries (`scripts/region-map.mjs` → `src/data/region-map.json`); place coordinates; Master Plan p. 3 |
| **The next launch from the Cape:** one line under the map, refreshed by the daily rebuild | Homepage, in the map's caption | The Space Devs' Launch Library 2, read at build time (`src/lib/launches.ts`); left out if it can't be read |
| **Example paths:** a high-school student, an adult changing careers and a local manufacturer, each step a Master Plan program on the Years 1–5 track | Programs & Facilities, Example Paths (`src/data/paths.ts`); the homepage's Residents line links to it | Master Plan pp. 13–14 (timing) and 19–20 (programs) |

## Rules kept
- The map marks no campus site, and its markers keep their meaning: lagoon for Southeast Volusia's communities, orange for the launch complexes (the space industry), navy for other places.
- The paths are labeled as illustrations, not people. A program the plan gives no phase (industry-embedded learning) shows no timeframe.
- The launch line shows only a launch with a scheduled day, says schedules change, and names its source. A count of launches this year was considered and left out: it couldn't be checked against an official figure.

## Next (needs FSIC)
- Real photos: launch-watchers on the beach, a classroom, a shop floor, the board (DESIGN.md "Imagery").
- Board members in their own words, from their appointment releases, with photos.
- A Year 1 progress section: the Phase 1 milestones with their real status, updated each quarter (open question "Public dashboards").
