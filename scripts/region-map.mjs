// Extracts county outlines around Southeast Volusia from the Census Bureau's 1:500,000 cartographic boundary file
// and writes projected, simplified SVG path data (src/data/region-map.json in the repo).
import * as shapefile from 'shapefile';
import { writeFileSync } from 'node:fs';

// Usage: download https://www2.census.gov/geo/tiger/GENZ2023/shp/cb_2023_us_county_500k.zip, unzip it, then
//   npm i --no-save shapefile@0.6.6 && node scripts/region-map.mjs <path/to/cb_2023_us_county_500k.shp> src/data/region-map.json
const SHP = process.argv[2];
const OUT = process.argv[3];

// Frame: Daytona Beach (north) to below Cape Canaveral (south), Orlando (west) to the Atlantic (east).
const BBOX = { west: -81.47, east: -80.5, south: 28.5, north: 29.26 };
const W = 640;
const lat0 = ((BBOX.north + BBOX.south) / 2) * (Math.PI / 180);
const kx = W / ((BBOX.east - BBOX.west) * Math.cos(lat0));
const H = Math.round((BBOX.north - BBOX.south) * kx);
const proj = ([lon, lat]) => [(lon - BBOX.west) * Math.cos(lat0) * kx, (BBOX.north - lat) * kx];

// Douglas–Peucker simplification in screen units.
function simplify(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    const [x1, y1] = pts[a], [x2, y2] = pts[b];
    const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1;
    let max = 0, idx = -1;
    for (let i = a + 1; i < b; i++) {
      // Distance to the chord, or to the point itself when the chord has no length (a closed ring's ends).
      const d = dx || dy ? Math.abs(dy * pts[i][0] - dx * pts[i][1] + x2 * y1 - y2 * x1) / len : Math.hypot(pts[i][0] - x1, pts[i][1] - y1);
      if (d > max) { max = d; idx = i; }
    }
    if (max > tol && idx > 0) { keep[idx] = 1; stack.push([a, idx], [idx, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}

const inFrame = (ring) => ring.some(([lon, lat]) => lon > BBOX.west - 0.3 && lon < BBOX.east + 0.3 && lat > BBOX.south - 0.3 && lat < BBOX.north + 0.3);
const counties = [];
const src = await shapefile.open(SHP);
for (;;) {
  const { done, value } = await src.read();
  if (done) break;
  const p = value.properties;
  if (p.STATEFP !== '12') continue;
  const polys = value.geometry.type === 'Polygon' ? [value.geometry.coordinates] : value.geometry.coordinates;
  const rings = polys.flat().filter(inFrame);
  if (!rings.length) continue;
  const d = rings
    .map((r) => simplify(r.map(proj), 0.6))
    .filter((r) => r.length > 2)
    .map((r) => 'M' + r.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L') + 'Z')
    .join('');
  counties.push({ name: p.NAME, d });
}

// Places (WGS84). Launch complexes: LC-39A (Kennedy Space Center) and SLC-40 (Cape Canaveral Space Force Station).
const places = {
  newSmyrnaBeach: [-80.927, 29.0258],
  edgewater: [-80.9023, 28.9889],
  oakHill: [-80.8545, 28.8664],
  daytonaBeach: [-81.0228, 29.2108],
  titusville: [-80.8076, 28.6122],
  orlando: [-81.3792, 28.5384],
  lc39a: [-80.6041, 28.6082],
  slc40: [-80.5772, 28.562],
};
const miles = ([lon1, lat1], [lon2, lat2]) => {
  const r = Math.PI / 180, R = 3958.8;
  const a = Math.sin(((lat2 - lat1) * r) / 2) ** 2 + Math.cos(lat1 * r) * Math.cos(lat2 * r) * Math.sin(((lon2 - lon1) * r) / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
};
const out = {
  _about: 'Generated from the U.S. Census Bureau cartographic boundary file cb_2023_us_county_500k (1:500,000). Straight-line distances in miles.',
  width: W,
  height: H,
  counties,
  places: Object.fromEntries(Object.entries(places).map(([k, v]) => [k, proj(v).map((n) => +n.toFixed(1))])),
  distances: {
    toLaunchComplex: Math.round(miles(places.newSmyrnaBeach, places.lc39a)),
    toOrlando: Math.round(miles(places.newSmyrnaBeach, places.orlando)),
  },
};
writeFileSync(OUT, JSON.stringify(out));
console.log(`${counties.length} counties, ${W}×${H}, ${Math.round(JSON.stringify(out).length / 1024)} KB`, out.distances, counties.map((c) => c.name).join(', '));
