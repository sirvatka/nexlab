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
  serveStatic(url, res);
}).listen(port, "127.0.0.1", () => {
  console.log(`Chase tracker running at http://127.0.0.1:${port}`);
});
