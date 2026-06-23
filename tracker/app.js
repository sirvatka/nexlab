const SERVICE_BASE = window.location.protocol === "file:" ? "http://127.0.0.1:8787" : "";
const serviceUrl = (path) => `${SERVICE_BASE}${path}`;
const TRACKER_URL = serviceUrl("/api/tracker");
const RADAR_URL = "https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913/{z}/{x}/{y}.png";
const config = window.TRACKER_CONFIG || {};

const els = {
  trackerStatus: document.getElementById("trackerStatus"),
  vehicleName: document.getElementById("vehicleName"),
  vehiclePosition: document.getElementById("vehiclePosition"),
  vehicleReport: document.getElementById("vehicleReport"),
  surfaceToggle: document.getElementById("surfaceToggle"),
  surfaceStatus: document.getElementById("surfaceStatus"),
  hazardsToggle: document.getElementById("hazardsToggle"),
  radarToggle: document.getElementById("radarToggle"),
  centerVehicle: document.getElementById("centerVehicle"),
  feedToggle: document.getElementById("feedToggle"),
  refreshFeed: document.getElementById("refreshFeed"),
  feedStatus: document.getElementById("feedStatus"),
  feedList: document.getElementById("feedList")
};

const baseLayer = new ol.layer.Tile({ source: new ol.source.OSM() });
const radarSource = new ol.source.XYZ({ url: RADAR_URL, crossOrigin: "anonymous" });
const radarLayer = new ol.layer.Tile({ source: radarSource, opacity: 0.48, zIndex: 3 });
const hazardsSource = new ol.source.Vector();
const hazardsLayer = new ol.layer.Vector({
  source: hazardsSource,
  zIndex: 4,
  declutter: true,
  style: hazardStyle
});
const surfaceSource = new ol.source.Vector();
const view = new ol.View({ center: ol.proj.fromLonLat([-98.5, 39.5]), zoom: 5, minZoom: 3 });
const surfaceLayer = new ol.layer.Vector({
  source: surfaceSource,
  visible: false,
  zIndex: 6,
  declutter: true,
  style: surfaceStationStyle
});
const map = new ol.Map({ target: "map", layers: [baseLayer, radarLayer, hazardsLayer, surfaceLayer], view });

const markerElement = document.createElement("div");
markerElement.className = "van-marker";
markerElement.innerHTML = '<span class="van-arrow"></span>';
const vehicleOverlay = new ol.Overlay({ element: markerElement, positioning: "center-center", stopEvent: false });
map.addOverlay(vehicleOverlay);

let vehiclePosition = null;
let firstPosition = true;
let surfaceRequest = null;
let surfaceTimer = null;

function hazardColor(eventName) {
  const event = String(eventName || "");
  if (event === "Severe Thunderstorm Warning") return "#168cff";
  if (event === "Tornado Warning") return "#f22f43";
  if (event === "Flash Flood Warning") return "#20a464";
  if (event === "Tornado Watch") return "#7a1020";
  if (event === "Severe Thunderstorm Watch") return "#0a2f66";
  if (event.endsWith("Watch")) return "#b850d6";
  return "#f08024";
}

function hazardStyle(feature) {
  const event = feature.get("event") || "Weather Warning";
  const color = hazardColor(event);
  const zoom = view.getZoom() || 0;
  const isWatch = event.endsWith("Watch");
  const watchNumber = feature.get("watchNumber");
  const label = isWatch && watchNumber
    ? `${event === "Tornado Watch" ? "TOR" : "SVR"} WATCH #${watchNumber}`
    : event.replace("Severe Thunderstorm", "Severe T-storm");
  return new ol.style.Style({
    zIndex: isWatch ? 20 : 10,
    fill: new ol.style.Fill({ color: isWatch ? `${color}40` : `${color}24` }),
    stroke: new ol.style.Stroke({ color, width: isWatch ? 4 : 3 }),
    text: zoom >= (isWatch ? 5 : 7) ? new ol.style.Text({
      text: label,
      font: isWatch ? "700 12px Arial, sans-serif" : "700 10px Arial, sans-serif",
      fill: new ol.style.Fill({ color: "#ffffff" }),
      stroke: new ol.style.Stroke({ color: isWatch ? color : "rgba(12,24,35,.9)", width: isWatch ? 5 : 3 }),
      overflow: false
    }) : undefined
  });
}

function stationTextStyle(text, offsetX, offsetY, color, align = "center") {
  return new ol.style.Style({
    text: new ol.style.Text({
      text,
      offsetX,
      offsetY,
      textAlign: align,
      font: "700 10px Arial, sans-serif",
      fill: new ol.style.Fill({ color }),
      stroke: new ol.style.Stroke({ color: "rgba(255,255,255,.94)", width: 3 })
    })
  });
}

function pressureCode(value) {
  const pressure = Number(value);
  if (!Number.isFinite(pressure)) return "";
  return String(Math.round(pressure * 10)).slice(-3).padStart(3, "0");
}

function fahrenheit(value) {
  const celsius = Number(value);
  return Number.isFinite(celsius) ? Math.round(celsius * 9 / 5 + 32) : null;
}

function lineStyle(geometry, color, width) {
  return new ol.style.Style({ geometry, stroke: new ol.style.Stroke({ color, width }) });
}

function windBarbStyles(feature, resolution) {
  const speed = Math.max(0, Math.round(Number(feature.get("wspd")) / 5) * 5);
  const direction = Number(feature.get("wdir"));
  if (!speed || !Number.isFinite(direction)) return [];

  const center = feature.getGeometry().getCoordinates();
  const radians = direction * Math.PI / 180;
  const along = [Math.sin(radians), Math.cos(radians)];
  const across = [Math.cos(radians), -Math.sin(radians)];
  const point = (forward, side = 0) => [
    center[0] + along[0] * resolution * forward + across[0] * resolution * side,
    center[1] + along[1] * resolution * forward + across[1] * resolution * side
  ];

  const staff = new ol.geom.LineString([point(5), point(30)]);
  const styles = [lineStyle(staff, "rgba(255,255,255,.95)", 4), lineStyle(staff, "#17232d", 1.7)];
  let remaining = speed;
  let position = 30;

  while (remaining >= 50) {
    const flag = new ol.geom.Polygon([[
      point(position),
      point(position - 8),
      point(position, 10),
      point(position)
    ]]);
    styles.push(new ol.style.Style({
      geometry: flag,
      fill: new ol.style.Fill({ color: "#17232d" }),
      stroke: new ol.style.Stroke({ color: "rgba(255,255,255,.95)", width: 1.5 })
    }));
    remaining -= 50;
    position -= 9;
  }

  while (remaining >= 10) {
    const barb = new ol.geom.LineString([point(position), point(position + 5, 10)]);
    styles.push(lineStyle(barb, "rgba(255,255,255,.95)", 4), lineStyle(barb, "#17232d", 1.7));
    remaining -= 10;
    position -= 4;
  }

  if (remaining >= 5) {
    const halfBarb = new ol.geom.LineString([point(position), point(position + 2.5, 5)]);
    styles.push(lineStyle(halfBarb, "rgba(255,255,255,.95)", 4), lineStyle(halfBarb, "#17232d", 1.7));
  }
  return styles;
}

function surfaceStationStyle(feature, resolution) {
  const zoom = view.getZoom() || 0;
  if (zoom < 5) return null;
  const props = feature.getProperties();
  const categoryColors = { VFR: "#39ad65", MVFR: "#438ee8", IFR: "#e74f4f", LIFR: "#b54acb" };
  const styles = [
    new ol.style.Style({
      image: new ol.style.Circle({
        radius: 4,
        fill: new ol.style.Fill({ color: categoryColors[props.fltcat] || "#3c4650" }),
        stroke: new ol.style.Stroke({ color: "#ffffff", width: 1 })
      })
    })
  ];

  const temp = fahrenheit(props.temp);
  const dewp = fahrenheit(props.dewp);
  if (temp != null) styles.push(stationTextStyle(`${temp}`, -11, -11, "#d83b34", "right"));
  if (dewp != null) styles.push(stationTextStyle(`${dewp}`, -11, 11, "#168644", "right"));
  const pressure = pressureCode(props.slp || props.altim);
  if (pressure) styles.push(stationTextStyle(pressure, 11, -11, "#17232d", "left"));
  if (zoom >= 7 && props.id) styles.push(stationTextStyle(props.id, 0, 24, "#17232d"));
  styles.push(...windBarbStyles(feature, resolution));
  return styles;
}

function setSurfaceStatus(message = "", error = false) {
  els.surfaceStatus.hidden = !message;
  els.surfaceStatus.textContent = message;
  els.surfaceStatus.classList.toggle("error", error);
}

function surfaceBounds() {
  const extent = ol.proj.transformExtent(view.calculateExtent(map.getSize()), "EPSG:3857", "EPSG:4326");
  const [minLon, minLat, maxLon, maxLat] = extent;
  return [minLat, minLon, maxLat, maxLon].map((value) => Math.max(-180, Math.min(180, value)).toFixed(3)).join(",");
}

async function refreshSurface() {
  if (!surfaceLayer.getVisible()) return;
  if ((view.getZoom() || 0) < 5) {
    surfaceSource.clear();
    setSurfaceStatus("Zoom in to view surface observations");
    return;
  }

  if (surfaceRequest) surfaceRequest.abort();
  surfaceRequest = new AbortController();
  setSurfaceStatus("Loading surface observations...");
  try {
    const endpoint = config.surfaceEndpoint || serviceUrl("/api/metars");
    const response = await fetch(`${endpoint}?bbox=${encodeURIComponent(surfaceBounds())}`, {
      cache: "no-store",
      signal: surfaceRequest.signal
    });
    if (!response.ok) throw new Error(`Surface service returned ${response.status}`);
    const data = await response.json();
    const features = new ol.format.GeoJSON().readFeatures(data, { featureProjection: "EPSG:3857" });
    const zoom = view.getZoom() || 0;
    const stride = zoom < 6 ? 4 : zoom < 7 ? 2 : 1;
    surfaceSource.clear();
    surfaceSource.addFeatures(features.filter((_, index) => index % stride === 0));
    setSurfaceStatus(`${surfaceSource.getFeatures().length} surface stations`);
    setTimeout(() => {
      if (surfaceLayer.getVisible()) setSurfaceStatus("");
    }, 1800);
  } catch (error) {
    if (error.name === "AbortError") return;
    setSurfaceStatus(`Surface unavailable: ${error.message}`, true);
  }
}

async function refreshHazards() {
  try {
    const response = await fetch(`${config.alertsEndpoint || serviceUrl("/api/alerts")}?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Alert service returned ${response.status}`);
    const data = await response.json();
    const features = new ol.format.GeoJSON().readFeatures(data, { featureProjection: "EPSG:3857" });
    hazardsSource.clear();
    hazardsSource.addFeatures(features);
  } catch (error) {
    console.warn(`Watches and warnings unavailable: ${error.message}`);
  }
}

function scheduleSurfaceRefresh() {
  clearTimeout(surfaceTimer);
  surfaceTimer = setTimeout(refreshSurface, 250);
}

function parseReportTime(value) {
  const normalized = String(value || "").trim().replace(" ", "T");
  const date = new Date(`${normalized}Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function headingDegrees(value) {
  const match = String(value || "").match(/\((\d+(?:\.\d+)?)\)/);
  return match ? Number(match[1]) : 0;
}

function markerColor(ageMinutes) {
  if (ageMinutes < 5) return "#25984a";
  if (ageMinutes < 20) return "#e59a2c";
  return "#df514b";
}

function formatReportTime(date) {
  if (!date) return "Last report unavailable";
  return `Last report ${date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
}

async function updateVehicle(center = false) {
  try {
    const response = await fetch(`${TRACKER_URL}?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`COD returned ${response.status}`);
    const xml = new DOMParser().parseFromString(await response.text(), "application/xml");
    const spotter = xml.querySelector("spotter");
    if (!spotter) throw new Error("No vehicle position was returned");

    const lat = Number(spotter.getAttribute("lat"));
    const lng = Number(spotter.getAttribute("lng"));
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) throw new Error("Invalid vehicle coordinates");

    const heading = spotter.getAttribute("heading") || "STATIONARY";
    const reportTime = parseReportTime(spotter.getAttribute("report_at"));
    const ageMinutes = reportTime ? Math.max(0, (Date.now() - reportTime.getTime()) / 60000) : Infinity;
    const color = markerColor(ageMinutes);
    vehiclePosition = ol.proj.fromLonLat([lng, lat]);
    vehicleOverlay.setPosition(vehiclePosition);
    markerElement.style.setProperty("--marker-color", color);
    markerElement.style.setProperty("--heading", `${headingDegrees(heading)}deg`);
    markerElement.classList.toggle("stationary", heading === "STATIONARY");

    els.vehicleName.textContent = spotter.getAttribute("name") || "COD chase vehicle";
    els.vehiclePosition.textContent = `${lat.toFixed(4)}, ${lng.toFixed(4)} · ${heading}`;
    els.vehicleReport.textContent = formatReportTime(reportTime);
    els.trackerStatus.classList.toggle("live", ageMinutes < 20);
    els.trackerStatus.classList.toggle("stale", ageMinutes >= 20);
    els.trackerStatus.querySelector("span:last-child").textContent = ageMinutes < 20
      ? `Vehicle reporting · ${Math.round(ageMinutes)} min ago`
      : `Vehicle report is ${Math.round(ageMinutes)} min old`;

    if (firstPosition || center) {
      view.animate({ center: vehiclePosition, zoom: Math.max(view.getZoom(), 8), duration: 500 });
      firstPosition = false;
    }
  } catch (error) {
    els.trackerStatus.classList.remove("live");
    els.trackerStatus.classList.add("stale");
    els.trackerStatus.querySelector("span:last-child").textContent = `Tracker unavailable: ${error.message}`;
  }
}

function escapeHtml(value) {
  const span = document.createElement("span");
  span.textContent = String(value || "");
  return span.innerHTML;
}

function formatFeedTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

function renderFeed(items) {
  const sorted = [...items].sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
  els.feedList.innerHTML = sorted.length ? "" : '<div class="feed-card"><p>No chase updates have been posted.</p></div>';
  sorted.forEach((item) => {
    const article = document.createElement("article");
    article.className = "feed-card";
    article.innerHTML = `
      <div class="feed-card-head"><strong>${escapeHtml(item.author)}</strong><time datetime="${escapeHtml(item.postedAt)}">${escapeHtml(formatFeedTime(item.postedAt))}</time></div>
      <p>${escapeHtml(item.text)}</p>
      ${item.imageUrl ? `<img src="${escapeHtml(item.imageUrl)}" alt="Chase update from ${escapeHtml(item.author)}">` : ""}
      ${item.xUrl ? `<a href="${escapeHtml(item.xUrl)}" target="_blank" rel="noreferrer">View on X <i data-lucide="external-link" aria-hidden="true"></i></a>` : ""}
    `;
    els.feedList.appendChild(article);
  });
  if (window.lucide) window.lucide.createIcons();
}

async function loadFeed() {
  let items = Array.isArray(window.CHASE_FEED) ? window.CHASE_FEED : [];
  if (config.feedEndpoint) {
    try {
      const response = await fetch(`${config.feedEndpoint}${config.feedEndpoint.includes("?") ? "&" : "?"}v=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) throw new Error(`Feed returned ${response.status}`);
      const data = await response.json();
      items = Array.isArray(data) ? data : data.items || [];
      els.feedStatus.textContent = `Live Discord feed · updated ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
    } catch (error) {
      els.feedStatus.textContent = `Feed connection failed · showing local preview`;
    }
  } else if (Array.isArray(config.discordPublishers) && config.discordPublishers.length) {
    els.feedStatus.textContent = `Preview · ${config.discordPublishers.map((name) => `@${name}`).join(" and ")} authorized`;
  }
  renderFeed(items);
}

function toggleFeed() {
  const collapsed = document.body.classList.toggle("feed-collapsed");
  els.feedToggle.setAttribute("aria-expanded", String(!collapsed));
  els.feedToggle.title = collapsed ? "Show chase updates" : "Hide chase updates";
  setTimeout(() => map.updateSize(), 220);
}

els.radarToggle.addEventListener("click", () => {
  const visible = !radarLayer.getVisible();
  radarLayer.setVisible(visible);
  els.radarToggle.classList.toggle("active", visible);
  els.radarToggle.setAttribute("aria-pressed", String(visible));
});

els.hazardsToggle.addEventListener("click", () => {
  const visible = !hazardsLayer.getVisible();
  hazardsLayer.setVisible(visible);
  els.hazardsToggle.classList.toggle("active", visible);
  els.hazardsToggle.setAttribute("aria-pressed", String(visible));
});

els.surfaceToggle.addEventListener("click", () => {
  const visible = !surfaceLayer.getVisible();
  surfaceLayer.setVisible(visible);
  els.surfaceToggle.classList.toggle("active", visible);
  els.surfaceToggle.setAttribute("aria-pressed", String(visible));
  if (visible) refreshSurface();
  else {
    if (surfaceRequest) surfaceRequest.abort();
    surfaceSource.clear();
    setSurfaceStatus("");
  }
});

els.centerVehicle.addEventListener("click", () => {
  if (vehiclePosition) view.animate({ center: vehiclePosition, zoom: Math.max(view.getZoom(), 8), duration: 400 });
  else updateVehicle(true);
});
els.feedToggle.addEventListener("click", toggleFeed);
els.refreshFeed.addEventListener("click", loadFeed);
map.on("moveend", scheduleSurfaceRefresh);

if (window.lucide) window.lucide.createIcons();
updateVehicle(true);
loadFeed();
refreshHazards();
setInterval(updateVehicle, config.trackerRefreshMs || 60000);
setInterval(loadFeed, config.feedRefreshMs || 30000);
setInterval(refreshHazards, 60000);
