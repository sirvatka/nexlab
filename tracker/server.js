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
  ["KUIL", "72797", "Quillayute", 47.95, -124.55], ["KSLE", "72694", "Salem", 44.92, -123.00],
  ["KMFR", "72597", "Medford", 42.37, -122.87], ["KOAK", "72493", "Oakland", 37.73, -122.22],
  ["KVBG", "72393", "Vandenberg", 34.73, -120.58], ["KNKX", "72293", "San Diego", 32.85, -117.12],
  ["KREV", "72489", "Reno", 39.57, -119.80], ["KBOI", "72681", "Boise", 43.57, -116.22],
  ["KLKN", "72582", "Elko", 40.86, -115.74], ["KSLC", "72572", "Salt Lake City", 40.77, -111.97],
  ["KFGZ", "72376", "Flagstaff", 35.23, -111.82], ["KTUS", "72274", "Tucson", 32.12, -110.93],
  ["KGJT", "72476", "Grand Junction", 39.12, -108.53], ["KDNR", "72469", "Denver", 39.75, -104.87],
  ["KABQ", "72365", "Albuquerque", 35.04, -106.62], ["KEPZ", "72364", "Santa Teresa", 31.87, -106.70],
  ["KMAF", "72265", "Midland", 31.95, -102.18], ["KAMA", "72363", "Amarillo", 35.23, -101.70],
  ["KDDC", "72451", "Dodge City", 37.76, -99.97], ["KOUN", "72357", "Norman", 35.23, -97.46],
  ["KFWD", "72249", "Fort Worth", 32.83, -97.30], ["KDRT", "72261", "Del Rio", 29.37, -100.92],
  ["KBRO", "72250", "Brownsville", 25.90, -97.43], ["KCRP", "72251", "Corpus Christi", 27.77, -97.50],
  ["KSHV", "72248", "Shreveport", 32.45, -93.83], ["KLCH", "72240", "Lake Charles", 30.12, -93.22],
  ["KLIX", "72233", "Slidell", 30.34, -89.82], ["KJAN", "72235", "Jackson", 32.32, -90.08],
  ["KBMX", "72230", "Birmingham", 33.16, -86.77], ["KFFC", "72215", "Peachtree City", 33.36, -84.56],
  ["KTLH", "72214", "Tallahassee", 30.38, -84.37], ["KTBW", "72210", "Tampa Bay", 27.70, -82.40],
  ["KMFL", "72202", "Miami", 25.75, -80.38], ["KEYW", "72201", "Key West", 24.55, -81.78],
  ["KJAX", "72206", "Jacksonville", 30.49, -81.70], ["KCHS", "72208", "Charleston", 32.90, -80.03],
  ["KMHX", "72305", "Newport", 34.78, -76.88], ["KGSO", "72317", "Greensboro", 36.08, -79.95],
  ["KRNK", "72318", "Blacksburg", 37.20, -80.41], ["KWAL", "72402", "Wallops Island", 37.93, -75.48],
  ["KIAD", "72403", "Sterling", 38.98, -77.47], ["KGYX", "74389", "Gray", 43.89, -70.26],
  ["KPIT", "72520", "Pittsburgh", 40.53, -80.22], ["KBUF", "72528", "Buffalo", 42.94, -78.74],
  ["KALB", "72518", "Albany", 42.75, -73.80], ["KOKX", "72501", "Upton", 40.87, -72.86],
  ["KCHH", "74494", "Chatham", 41.67, -69.97], ["KCAR", "72712", "Caribou", 46.87, -68.02],
  ["KAPX", "72634", "Gaylord", 44.91, -84.72], ["KDTX", "72632", "Detroit", 42.70, -83.47],
  ["KGRB", "72645", "Green Bay", 44.48, -88.14], ["KDVN", "74455", "Davenport", 41.61, -90.58],
  ["KILX", "74560", "Lincoln", 40.15, -89.34], ["KMPX", "72649", "Twin Cities", 44.85, -93.57],
  ["KINL", "72747", "International Falls", 48.57, -93.38], ["KBIS", "72764", "Bismarck", 46.77, -100.75],
  ["KUNR", "72662", "Rapid City", 44.07, -103.21], ["KOAX", "72558", "Omaha", 41.32, -96.36],
  ["KTOP", "72456", "Topeka", 39.07, -95.62], ["KSGF", "72440", "Springfield", 37.24, -93.40],
  ["KLZK", "72340", "Little Rock", 34.83, -92.26], ["KBNA", "72327", "Nashville", 36.25, -86.56],
  ["KDMX", "72546", "Des Moines", 41.73, -93.72], ["KNQA", "72334", "Memphis", 35.35, -89.87],
  ["KFGF", "72757", "Grand Forks", 47.93, -97.08], ["KIWX", "72533", "North Webster", 41.36, -85.70],
  ["KLSX", "72434", "St. Louis", 38.70, -90.68], ["KCLL", "", "College Station", 30.59, -96.36],
  ["KHVR", "72777", "Havre", 48.54, -109.76],
  ["CYVR", "71892", "Vancouver", 49.19, -123.18], ["CYYC", "71877", "Calgary", 51.12, -114.02],
  ["CYXS", "71896", "Prince George", 53.88, -122.68], ["CYXY", "71964", "Whitehorse", 60.72, -135.07],
  ["CYEV", "71957", "Inuvik", 68.30, -133.48], ["CYZF", "71936", "Yellowknife", 62.46, -114.44],
  ["CYSM", "71934", "Fort Smith", 60.02, -111.97], ["CYQD", "71867", "The Pas", 53.97, -101.10],
  ["CYQR", "71863", "Regina", 50.43, -104.67], ["CYWG", "71852", "Winnipeg", 49.91, -97.24],
  ["CYQT", "71749", "Thunder Bay", 48.37, -89.32], ["CYMO", "71836", "Moosonee", 51.29, -80.61],
  ["CYPL", "71845", "Pickle Lake", 51.45, -90.20], ["CYSB", "71730", "Sudbury", 46.63, -80.80],
  ["CYOW", "71628", "Ottawa", 45.32, -75.67], ["CYUL", "71627", "Montreal", 45.47, -73.75],
  ["CYQB", "71714", "Quebec City", 46.79, -71.39], ["CYYR", "71816", "Goose Bay", 53.32, -60.42],
  ["CYJT", "71815", "Stephenville", 48.54, -58.55], ["CYQX", "71803", "Gander", 48.95, -54.57],
  ["CYHZ", "71395", "Halifax", 44.88, -63.51], ["CYQI", "71603", "Yarmouth", 43.83, -66.09],
  ["CYFB", "71909", "Iqaluit", 63.75, -68.55],
  ["MMTJ", "76151", "Tijuana", 32.55, -116.97], ["MMHO", "76160", "Hermosillo", 29.08, -110.93],
  ["MMLP", "76405", "La Paz", 24.07, -110.36], ["MMCU", "76225", "Chihuahua", 28.70, -105.97],
  ["MMMY", "76394", "Monterrey", 25.78, -100.10], ["MMGL", "76612", "Guadalajara", 20.52, -103.31],
  ["MMMX", "76679", "Mexico City", 19.43, -99.07], ["MMVR", "76692", "Veracruz", 19.15, -96.18],
  ["MMMD", "76644", "Merida", 20.94, -89.66], ["MMUN", "76595", "Cancun", 21.04, -86.87]
];

function formatRunDate(date) {
  return [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0"),
    String(date.getUTCHours()).padStart(2, "0")
  ].join("");
}

function offsetRun(run, hourOffset) {
  const text = String(run);
  const date = new Date(Date.UTC(
    Number(text.slice(0, 4)),
    Number(text.slice(4, 6)) - 1,
    Number(text.slice(6, 8)),
    Number(text.slice(8, 10)) + hourOffset
  ));
  return formatRunDate(date);
}

function parseAnalysisDate(text) {
  const value = String(text || "").trim().toUpperCase();
  const compact = value.match(/(\d{4})(\d{2})(\d{2})(\d{2})/);
  if (compact) {
    return new Date(Date.UTC(
      Number(compact[1]),
      Number(compact[2]) - 1,
      Number(compact[3]),
      Number(compact[4])
    ));
  }
  const months = { JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 };
  const cod = value.match(/(\d{2})Z.*?\b(\d{1,2})\s+([A-Z]{3})\s+(\d{2,4})\b/);
  if (!cod || months[cod[3]] == null) return null;
  const year = Number(cod[4].length === 2 ? `20${cod[4]}` : cod[4]);
  return new Date(Date.UTC(year, months[cod[3]], Number(cod[2]), Number(cod[1])));
}

function supplementTiming(url, observedStations) {
  const requestedAnalysis = parseAnalysisDate(url.searchParams.get("analysis") || url.searchParams.get("cycle"));
  const observedAnalysis = observedStations.map((station) => parseAnalysisDate(station?.validTime)).find(Boolean);
  const analysisDate = requestedAnalysis || observedAnalysis || new Date();
  const analysisRun = formatRunDate(analysisDate);
  return {
    analysisRun,
    forecastRun: offsetRun(analysisRun, -3),
    forecastHour: 3
  };
}

function codRaobTextUrl(stationId) {
  const id = stationId.length === 3 ? `K${stationId}` : stationId;
  return `https://weather.cod.edu/climate-decom/products/analysis/raob/index.php?type=conus-current-current-text-${id}-0`;
}

function codForecastSoundingUrl(run, station, hour = 3, model = "RAP") {
  const [, , , lat, lon] = station;
  const type = `${run}|${model}|US|500|temp|${hour}|${Number(lat).toFixed(2)},${Number(lon).toFixed(2)}|ml|severe`;
  return `https://weather.cod.edu/forecast/fsound/index.php?type=${encodeURIComponent(type)}`;
}

function parseUpperRows(html) {
  const text = html.replace(/<[^>]+>/g, "\n");
  return text.split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^\d+\s+/.test(line))
    .map((line) => {
      const parts = line.split(/\s+/).map(Number);
      if (parts.length < 7) return null;
      if (parts.length === 7 && parts[1] >= 100 && parts[1] <= 1100) {
        return {
          pres: parts[1],
          height: parts[2],
          temp: Number.isFinite(parts[3]) ? parts[3] : null,
          dewp: null,
          wdir: Number.isFinite(parts[4]) ? parts[4] : null,
          wspd: Number.isFinite(parts[5]) ? parts[5] : null
        };
      }
      const hasLevColumn = parts.length >= 10 && parts[1] >= 100 && parts[1] <= 1100;
      const offset = hasLevColumn ? 1 : 0;
      const row = {
        pres: parts[offset],
        height: parts[offset + 1],
        temp: Number.isFinite(parts[offset + 2]) ? parts[offset + 2] : null,
        dewp: Number.isFinite(parts[offset + 3]) ? parts[offset + 3] : null,
        wdir: Number.isFinite(parts[offset + 7]) ? parts[offset + 7] : null,
        wspd: Number.isFinite(parts[offset + 8]) ? parts[offset + 8] : null
      };
      if (!Number.isFinite(row.pres) || row.pres < 100 || row.pres > 1100) return null;
      if (!Number.isFinite(row.height) || row.height < -500 || row.height > 50000) return null;
      if (row.temp != null && (row.temp < -120 || row.temp > 60)) return null;
      if (row.dewp != null && (row.dewp < -140 || row.dewp > 60)) row.dewp = null;
      if (row.wdir != null && (row.wdir < 0 || row.wdir > 360)) row.wdir = null;
      if (row.wspd != null && (row.wspd < 0 || row.wspd > 250)) row.wspd = null;
      return row;
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

async function fetchTextWithTimeout(url, timeoutMs = 6500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "COD-NexLab-Upper-Air/1.0 (weather.cod.edu)" },
      signal: controller.signal
    });
    if (!response.ok) throw new Error(`source returned ${response.status}`);
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let nextIndex = 0;
  async function run() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

async function loadObservedUpperStation(station, level) {
  const [id, number, name, lat, lon] = station;
  try {
    const text = await fetchTextWithTimeout(codRaobTextUrl(id));
    const rows = parseUpperRows(text);
    const data = interpolateLevel(rows, level);
    const valid = text.match(/Date:\s*([^\n\r]+)/i);
    if (!data || data.temp == null || data.height == null) throw new Error("No observed level row");
    return {
      id,
      number,
      name,
      lat,
      lon,
      level,
      source: "observed",
      validTime: valid ? valid[1].trim() : "COD current RAOB",
      ...data
    };
  } catch {
    return null;
  }
}

async function loadForecastUpperStation(station, level, run, hour = 3) {
  const [id, number, name, lat, lon] = station;
  const model = "RAP";
  const candidateRun = run;
  try {
    const text = await fetchTextWithTimeout(codForecastSoundingUrl(candidateRun, station, hour, model), 15000);
    const rows = parseUpperRows(text);
    const data = interpolateLevel(rows, level);
    const valid = text.match(/Date:\s*([^\n\r]+)/i);
    if (!data || data.temp == null || data.height == null) throw new Error("No forecast level row");
    return {
      id,
      number,
      name,
      lat,
      lon,
      level,
      source: "forecast",
      marker: "S",
      model,
      run: candidateRun,
      forecastHour: hour,
      validTime: valid ? valid[1].trim() : `${candidateRun} F${String(hour).padStart(3, "0")}`,
      ...data
    };
  } catch {
    return null;
  }
}

async function proxyUpperAnalysis(url, res) {
  const level = Number(url.searchParams.get("level") || 500);
  if (!Number.isFinite(level) || level < 100 || level > 1000) {
    send(res, 400, JSON.stringify({ error: "Invalid pressure level" }), mimeTypes[".json"]);
    return;
  }

  try {
    const sourceMode = String(url.searchParams.get("source") || url.searchParams.get("mode") || "observed").toLowerCase();
    let forecastRun = String(url.searchParams.get("run") || "").replace(/[^0-9]/g, "").slice(0, 10);
    let forecastHour = Number(url.searchParams.get("hour") || 3);
    let analysisRun = "";
    let stations;
    if (sourceMode === "observed") {
      const observed = await mapLimit(upperAirStations, 8, (station) => loadObservedUpperStation(station, level));
      const timing = supplementTiming(url, observed.filter(Boolean));
      analysisRun = timing.analysisRun;
      forecastRun = forecastRun || timing.forecastRun;
      forecastHour = Number.isFinite(forecastHour) ? forecastHour : timing.forecastHour;
      stations = await mapLimit(upperAirStations, 2, (station, index) => {
        if (observed[index]) return Promise.resolve(observed[index]);
        return loadForecastUpperStation(station, level, forecastRun, forecastHour);
      });
    } else {
      const timing = supplementTiming(url, []);
      analysisRun = timing.analysisRun;
      forecastRun = forecastRun || timing.forecastRun;
      forecastHour = Number.isFinite(forecastHour) ? forecastHour : timing.forecastHour;
      const forecast = await mapLimit(upperAirStations, 2, (station) => loadForecastUpperStation(station, level, forecastRun, forecastHour));
      stations = await mapLimit(upperAirStations, 8, (station, index) => {
        if (forecast[index]) return Promise.resolve(forecast[index]);
        return loadObservedUpperStation(station, level);
      });
    }
    const validStations = stations.filter(Boolean);
    const validTime = validStations[0]?.validTime || `COD HRRR ${forecastRun} F${forecastHour}`;
    send(res, 200, JSON.stringify({
      level,
      sourceMode,
      analysisRun,
      forecastRun,
      forecastHour,
      validTime,
      stations: validStations,
      sources: {
        observed: "COD RAOB sounding text",
        forecast: "COD RAP F003 forecast sounding from the run 3 hours before the analysis"
      }
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
