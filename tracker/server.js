const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 8787);
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

function send(res, status, body, contentType = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*"
  });
  res.end(body);
}

const upperAirStations = [
  ["UIL", "72797", "Quillayute", 47.95, -124.55],
  ["SLE", "72694", "Salem", 44.92, -123.00],
  ["MFR", "72597", "Medford", 42.37, -122.87],
  ["OAK", "72493", "Oakland", 37.73, -122.22],
  ["VBG", "72393", "Vandenberg", 34.73, -120.58],
  ["NKX", "72293", "San Diego", 32.85, -117.12],
  ["REV", "72489", "Reno", 39.57, -119.80],
  ["BOI", "72681", "Boise", 43.57, -116.22],
  ["LKN", "72582", "Elko", 40.86, -115.74],
  ["SLC", "72572", "Salt Lake City", 40.77, -111.97],
  ["FGZ", "72376", "Flagstaff", 35.23, -111.82],
  ["TUS", "72274", "Tucson", 32.12, -110.93],
  ["GJT", "72476", "Grand Junction", 39.12, -108.53],
  ["DNR", "72469", "Denver", 39.75, -104.87],
  ["ABQ", "72365", "Albuquerque", 35.04, -106.62],
  ["EPZ", "72364", "Santa Teresa", 31.87, -106.70],
  ["MAF", "72265", "Midland", 31.95, -102.18],
  ["AMA", "72363", "Amarillo", 35.23, -101.70],
  ["DDC", "72451", "Dodge City", 37.76, -99.97],
  ["OUN", "72357", "Norman", 35.23, -97.46],
  ["FWD", "72249", "Fort Worth", 32.83, -97.30],
  ["CRP", "72251", "Corpus Christi", 27.77, -97.50],
  ["LCH", "72240", "Lake Charles", 30.12, -93.22],
  ["LIX", "72233", "Slidell", 30.34, -89.82],
  ["JAN", "72235", "Jackson", 32.32, -90.08],
  ["BMX", "72230", "Birmingham", 33.16, -86.77],
  ["FFC", "72215", "Peachtree City", 33.36, -84.56],
  ["TBW", "72210", "Tampa Bay", 27.70, -82.40],
  ["MFL", "72202", "Miami", 25.75, -80.38],
  ["JAX", "72206", "Jacksonville", 30.49, -81.70],
  ["CHS", "72208", "Charleston", 32.90, -80.03],
  ["GSO", "72317", "Greensboro", 36.08, -79.95],
  ["RNK", "72318", "Blacksburg", 37.20, -80.41],
  ["IAD", "72403", "Sterling", 38.98, -77.47],
  ["PIT", "72520", "Pittsburgh", 40.53, -80.22],
  ["BUF", "72528", "Buffalo", 42.94, -78.74],
  ["ALB", "72518", "Albany", 42.75, -73.80],
  ["OKX", "72501", "Upton", 40.87, -72.86],
  ["CHH", "74494", "Chatham", 41.67, -69.97],
  ["CAR", "72712", "Caribou", 46.87, -68.02],
  ["APX", "72634", "Gaylord", 44.91, -84.72],
  ["DTX", "72632", "Detroit", 42.70, -83.47],
  ["GRB", "72645", "Green Bay", 44.48, -88.14],
  ["DVN", "74455", "Davenport", 41.61, -90.58],
  ["ILX", "74560", "Lincoln", 40.15, -89.34],
  ["MPX", "72649", "Twin Cities", 44.85, -93.57],
  ["INL", "72747", "International Falls", 48.57, -93.38],
  ["BIS", "72764", "Bismarck", 46.77, -100.75],
  ["UNR", "72662", "Rapid City", 44.07, -103.21],
  ["OAX", "72558", "Omaha", 41.32, -96.36],
  ["TOP", "72456", "Topeka", 39.07, -95.62],
  ["SGF", "72440", "Springfield", 37.24, -93.40],
  ["LZK", "72340", "Little Rock", 34.83, -92.26],
  ["BNA", "72327", "Nashville", 36.25, -86.56]
];

function latestUpperAirCycles(anchor = null) {
  const now = anchor || new Date();
  const latestHour = now.getUTCHours() >= 12 ? 12 : 0;
  const base = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), latestHour));
  if (!anchor && base.getTime() > now.getTime() - 90 * 60 * 1000) base.setUTCHours(base.getUTCHours() - 12);
  return Array.from({ length: 4 }, (_, index) => new Date(base.getTime() - index * 12 * 60 * 60 * 1000));
}

function parseUpperCycle(value) {
  const match = String(value || "").match(/^(\d{4})(\d{2})(\d{2})(\d{2})$/);
  if (!match) return null;
  return new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4])));
}

function upperAirUrl(stationNumber, cycle) {
  const yyyy = cycle.getUTCFullYear();
  const mm = String(cycle.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(cycle.getUTCDate()).padStart(2, "0");
  const hh = String(cycle.getUTCHours()).padStart(2, "0");
  return `https://weather.uwyo.edu/cgi-bin/sounding?region=naconf&TYPE=TEXT%3ALIST&YEAR=${yyyy}&MONTH=${mm}&FROM=${dd}${hh}&TO=${dd}${hh}&STNM=${stationNumber}`;
}

function parseUpperRows(html) {
  const text = html.replace(/<[^>]+>/g, "\n");
  return text.split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^\d{3,4}(?:\.\d)?\s+/.test(line))
    .map((line) => {
      const parts = line.split(/\s+/).map(Number);
      if (parts.length < 8 || parts.some((value, index) => index < 2 && !Number.isFinite(value))) return null;
      return {
        pres: parts[0],
        height: parts[1],
        temp: Number.isFinite(parts[2]) ? parts[2] : null,
        dewp: Number.isFinite(parts[3]) ? parts[3] : null,
        wdir: Number.isFinite(parts[6]) ? parts[6] : null,
        wspd: Number.isFinite(parts[7]) ? parts[7] : null
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.pres - a.pres);
}

function interpolateLevel(rows, level) {
  const exact = rows.find((row) => Math.abs(row.pres - level) < 0.2);
  if (exact) return exact;
  const lower = rows.find((row) => row.pres < level);
  const upper = [...rows].reverse().find((row) => row.pres > level);
  if (!lower || !upper) return null;
  const ratio = (level - lower.pres) / (upper.pres - lower.pres);
  const lerp = (a, b) => (Number.isFinite(a) && Number.isFinite(b) ? a + (b - a) * ratio : null);
  return {
    pres: level,
    height: lerp(lower.height, upper.height),
    temp: lerp(lower.temp, upper.temp),
    dewp: lerp(lower.dewp, upper.dewp),
    wdir: lerp(lower.wdir, upper.wdir),
    wspd: lerp(lower.wspd, upper.wspd)
  };
}

async function loadObservedUpperStation(station, level, cycles) {
  const [id, number, name, lat, lon] = station;
  for (const cycle of cycles) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4500);
    try {
      const response = await fetch(upperAirUrl(number, cycle), {
        headers: { "User-Agent": "COD-NexLab-Upper-Air/1.0" },
        signal: controller.signal
      });
      clearTimeout(timer);
      if (!response.ok) continue;
      const rows = parseUpperRows(await response.text());
      const data = interpolateLevel(rows, level);
      if (!data || data.temp == null || data.height == null) continue;
      return {
        id,
        number,
        name,
        lat,
        lon,
        level,
        source: "observed",
        validTime: cycle.toISOString(),
        ...data
      };
    } catch {
      // Try the next cycle before giving up on this station.
    } finally {
      clearTimeout(timer);
    }
  }
  return null;
}

async function proxyUpperAnalysis(url, res) {
  const level = Number(url.searchParams.get("level") || 500);
  if (!Number.isFinite(level) || level < 100 || level > 1000) {
    send(res, 400, JSON.stringify({ error: "Invalid pressure level" }), mimeTypes[".json"]);
    return;
  }

  try {
    const requestedCycle = parseUpperCycle(url.searchParams.get("cycle"));
    const cycles = requestedCycle ? [requestedCycle] : latestUpperAirCycles();
    const observed = await Promise.all(upperAirStations.map((station) => loadObservedUpperStation(station, level, cycles)));
    const stations = observed.filter(Boolean);
    const validTime = stations[0]?.validTime || cycles[0].toISOString();
    send(res, 200, JSON.stringify({
      level,
      validTime,
      stations,
      note: "Forecast sounding fill is supported by the client marker format; connect the 11Z model sounding source to add S markers for missing observed stations."
    }), mimeTypes[".json"]);
  } catch (error) {
    send(res, 502, JSON.stringify({ error: error.message }), mimeTypes[".json"]);
  }
}

async function proxyMetars(url, res) {
  const bbox = url.searchParams.get("bbox") || "";
  if (!/^-?\d+(?:\.\d+)?(?:,-?\d+(?:\.\d+)?){3}$/.test(bbox)) {
    send(res, 400, JSON.stringify({ error: "Invalid bbox" }), mimeTypes[".json"]);
    return;
  }

  try {
    const target = `https://aviationweather.gov/api/data/metar?bbox=${encodeURIComponent(bbox)}&format=geojson&hours=2`;
    const response = await fetch(target, { headers: { "User-Agent": "COD-NexLab-Chase-Tracker/1.0" } });
    if (!response.ok) {
      send(res, response.status, await response.text(), mimeTypes[".json"]);
      return;
    }

    const data = await response.json();
    const latestByStation = new Map();
    for (const feature of data.features || []) {
      const properties = feature.properties || {};
      const stationId = properties.id || properties.icaoId || feature.id;
      if (!stationId) continue;
      const observedAt = Date.parse(properties.obsTime || properties.reportTime || properties.receiptTime || "") || 0;
      const existing = latestByStation.get(stationId);
      if (!existing || observedAt > existing.observedAt) latestByStation.set(stationId, { observedAt, feature });
    }
    data.features = [...latestByStation.values()].map(({ feature }) => feature);
    send(res, 200, JSON.stringify(data), mimeTypes[".json"]);
  } catch (error) {
    send(res, 502, JSON.stringify({ error: error.message }), mimeTypes[".json"]);
  }
}

async function proxyAlerts(res) {
  try {
    const headers = {
      "User-Agent": "COD-NexLab-Chase-Tracker/1.0 (weather.cod.edu)",
      "Accept": "application/geo+json"
    };
    const response = await fetch("https://api.weather.gov/alerts/active?status=actual&message_type=alert", { headers });
    if (!response.ok) {
      send(res, response.status, await response.text(), mimeTypes[".json"]);
      return;
    }
    const data = await response.json();
    data.features = (data.features || []).filter((feature) => {
      const event = String(feature.properties?.event || "");
      return feature.geometry && event.endsWith("Warning");
    });

    const watchIndex = await fetch("https://www.spc.noaa.gov/products/watch/", { headers });
    if (watchIndex.ok) {
      const html = await watchIndex.text();
      const watchNumbers = [...new Set([...html.matchAll(/href=["']ww(\d{4})\.html["']/gi)].map((match) => match[1]))];
      const watchFeatures = await Promise.all(watchNumbers.map(async (watchNumber) => {
        const watchResponse = await fetch(`https://www.spc.noaa.gov/products/watch/wou${watchNumber}.html`, { headers });
        if (!watchResponse.ok) return null;
        const watchHtml = await watchResponse.text();
        const coordinateMatch = watchHtml.match(/LAT\.\.\.LON\s+(\d{8})\s+(\d{8})\s+(\d{8})\s+(\d{8})/i);
        if (!coordinateMatch) return null;
        const coordinates = coordinateMatch.slice(1).map((pair) => [
          -Number(pair.slice(4)) / 100,
          Number(pair.slice(0, 4)) / 100
        ]);
        coordinates.push(coordinates[0]);
        const isTornado = /TORNADO WATCH\s+\d+/i.test(watchHtml);
        return {
          type: "Feature",
          id: `spc-watch-${watchNumber}`,
          geometry: { type: "Polygon", coordinates: [coordinates] },
          properties: {
            event: isTornado ? "Tornado Watch" : "Severe Thunderstorm Watch",
            watchNumber: Number(watchNumber),
            source: "NOAA Storm Prediction Center"
          }
        };
      }));
      data.features.push(...watchFeatures.filter(Boolean));
    }
    send(res, 200, JSON.stringify(data), mimeTypes[".json"]);
  } catch (error) {
    send(res, 502, JSON.stringify({ error: error.message }), mimeTypes[".json"]);
  }
}

async function proxyTracker(res) {
  try {
    const response = await fetch("https://weather.cod.edu/chasing/tracker/assets/xml/cod-tracker.xml", {
      headers: { "User-Agent": "COD-NexLab-Chase-Tracker/1.0 (weather.cod.edu)" },
      cache: "no-store"
    });
    send(res, response.status, await response.text(), "application/xml; charset=utf-8");
  } catch (error) {
    send(res, 502, `<error>${error.message}</error>`, "application/xml; charset=utf-8");
  }
}

function serveStatic(url, res) {
  const relative = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
  const filePath = path.resolve(root, relative);
  if (!filePath.startsWith(`${root}${path.sep}`) && filePath !== path.join(root, "index.html")) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      send(res, error.code === "ENOENT" ? 404 : 500, error.code === "ENOENT" ? "Not found" : "Server error");
      return;
    }
    send(res, 200, data, mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream");
  });
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
  if (url.pathname === "/api/metars") {
    await proxyMetars(url, res);
    return;
  }
  if (url.pathname === "/api/alerts") {
    await proxyAlerts(res);
    return;
  }
  if (url.pathname === "/api/tracker") {
    await proxyTracker(res);
    return;
  }
  if (url.pathname === "/api/upper-analysis") {
    await proxyUpperAnalysis(url, res);
    return;
  }
  serveStatic(url, res);
}).listen(port, "127.0.0.1", () => {
  console.log(`Chase tracker running at http://127.0.0.1:${port}`);
});
