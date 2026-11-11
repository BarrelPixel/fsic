// The next scheduled launch from Cape Canaveral (homepage, "Within sight of the Cape"), read at build time from
// The Space Devs' Launch Library 2 (a free, public launch schedule). The deploy rebuilds daily, so the line is at
// most a day old. Any failure (network, rate limit, an unexpected answer) returns null and the line is left out:
// the site never shows a guessed or stale launch, and the build never fails because of it.
const API = 'https://ll.thespacedevs.com/2.3.0/launches/upcoming/';
// Launch Library location ids: 12 Cape Canaveral Space Force Station, 27 Kennedy Space Center.
const QUERY = '?limit=5&mode=list&location__ids=12,27';

export type NextLaunch = { rocket: string; mission: string; date: Date; precise: boolean };

let cached: Promise<NextLaunch | null> | undefined;

async function load(): Promise<NextLaunch | null> {
  try {
    const res = await fetch(API + QUERY, { signal: AbortSignal.timeout(8000), headers: { accept: 'application/json' } });
    if (!res.ok) return null;
    const data = (await res.json()) as { results?: { name?: string; net?: string; net_precision?: { abbrev?: string } }[] };
    const now = Date.now();
    for (const r of data.results ?? []) {
      if (!r.name || !r.net) continue;
      const date = new Date(r.net);
      if (Number.isNaN(date.getTime()) || date.getTime() < now) continue;
      // Only a launch with a day set (not "sometime this month or year").
      const p = r.net_precision?.abbrev ?? '';
      if (!['SEC', 'MIN', 'HR', 'DAY'].includes(p)) continue;
      const [rocket, mission = ''] = r.name.split(' | ');
      return { rocket: rocket.replace(/ Block \d+$/, ''), mission, date, precise: p !== 'DAY' };
    }
    return null;
  } catch {
    return null;
  }
}

/** The next launch from the Cape with a scheduled day, or null. Fetched once per build. */
export const nextLaunch = () => (cached ??= load());

/** "Friday, November 13", in Eastern time (the Space Coast's). */
export const launchDay = (d: Date) => d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'America/New_York' });
