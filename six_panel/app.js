const COD_ENDPOINT = "https://weather.cod.edu/datapoints/forecast/get-files.php";
const CONFIGURATION_STORAGE_KEY = "nexlab-six-panel-configurations";

const regionNames = {
  NIL: "Northern Illinois", MW: "Midwest", GL: "Great Lakes", US: "Continental U.S.",
  NA: "North America", NE: "Northeast", SE: "Southeast", NW: "Northwest", SW: "Southwest",
  MA: "Mid-Atlantic", NGP: "Northern Plains", SGP: "Southern Plains", CGP: "Central Great Plains",
  GBSN: "Great Basin", AK: "Alaska", WCAN: "Western Canada", CA: "Canada", WLD: "World",
  AO: "Atlantic Ocean", PO: "Pacific Ocean", FLT1: "Floater 1", FLT2: "Floater 2", FLT3: "Floater 3"
};

const regionSets = {
  HRRR: ["NIL", "FLT1", "FLT2", "FLT3", "CGP", "GBSN", "GL", "MA", "MW", "NE", "NGP", "NW", "SE", "SGP", "SW"],
  RAP: ["NIL", "US", "CGP", "GBSN", "GL", "MA", "MW", "NE", "NGP", "NW", "SE", "SGP", "SW"],
  NAM: ["NIL", "US", "AK", "CGP", "GBSN", "GL", "MA", "MW", "NE", "NGP", "NW", "SE", "SGP", "SW", "WCAN"],
  NAMNST: ["NIL", "FLT1", "FLT2", "FLT3", "CGP", "GBSN", "GL", "MA", "MW", "NE", "NGP", "NW", "SE", "SGP", "SW"],
  GFS: ["NIL", "NA", "US", "AK", "AO", "CGP", "GBSN", "GL", "MA", "MW", "NE", "NGP", "NW", "PO", "SE", "SGP", "SW", "WCAN", "WLD"],
  ECMWF: ["NIL", "NA", "US", "AO", "CGP", "GL", "MA", "MW", "NE", "NGP", "NW", "SE", "SGP", "SW", "WLD"],
  RDPS: ["NIL", "US", "CA", "CGP", "GBSN", "GL", "MA", "MW", "NE", "NGP", "NW", "WCAN"],
  GDPS: ["NIL", "NA", "US"],
  GEFS: ["NA", "US", "CGP", "GL", "MA", "MW", "NE", "NGP", "PO", "SE", "SGP"]
};

const names = {
  pres: "Pressure @ 2PVU", tadv: "Temperature Advection", wetblb: "Wet Bulb Temperature",
  vis: "Surface Visibility", lsi: "Lid Strength Index", "3kmehi": "3km EHI",
  lapse57: "Mid-Level Lapse Rate", lapse81: "Low-Level Lapse Rate",
  radar: "Simulated Reflectivity", uphlysw: "Helicity Swaths", uphlysw6: "6hr Helicity Swaths",
  sbcape: "Surface Based CAPE", mlcape: "Mean Layer CAPE", mucape: "Most Unstable CAPE",
  cape3km: "0-3km CAPE", stp: "Significant Tornado Parameter", scp: "Supercell Composite",
  "3kmhel": "0-3km SRH", "1kmhel": "0-1km SRH", vil: "Vertically Integrated Liquid",
  ltng: "Lightning Density", gust: "Wind Gust", temp: "Temperature", dewp: "Dewpoint",
  "30mbdewp": "Mixed Dewpoint (0-30mb)",
  thetae: "Theta-E", rhum: "Relative Humidity", avort: "Vorticity", vvel: "Vertical Velocity",
  spd: "Wind Speed", prec: "SLP and Precipitation", precacc: "Total Precipitation",
  cprec: "Convective Precipitation", precacc6: "6hr Precipitation", precacc12: "12hr Precipitation",
  precacc24: "24hr Precipitation", snow6: "6hr Snow", snow12: "12hr Snow", snow24: "24hr Snow",
  kuchsnow6: "6hr Kuchera Snow", kuchsnow12: "12hr Kuchera Snow", kuchsnow24: "24hr Kuchera Snow",
  kratio: "Kuchera Snow Ratio", frzra: "Freezing Rain Accumulation", cthk: "Critical Thickness",
  cloud: "Cloud Cover", ptype: "Precipitation Type", snow: "Snow Accumulation",
  kuchsnow: "Kuchera Snow", pwat: "Precipitable Water", shear: "Bulk Shear",
  meanprec: "Mean SLP and Precipitation", meanprecacc: "Mean Precipitation", paccens: "Precipitation Ensemble",
  meanscp: "Mean Supercell Composite", maxscp: "Max Supercell Composite", scpens: "SCP Ensemble",
  ptypens: "Precipitation Type Ensemble", meansnacc: "Mean Snow", snens: "Snow Ensemble"
};

const P = (level, ...ids) => ids.map((id) => ({ level, id, label: names[id] || id }));

const products = {
  HRRR: [...P("700", "vvel"), ...P("sfc", "temp", "dewp", "rhum", "thetae", "gust", "avort"), ...P("con", "sbcape", "mlcape", "mucape", "cape3km", "stp", "scp", "uphlysw", "uphlysw6", "3kmhel", "1kmhel", "vil", "ltng"), ...P("prec", "radar", "precacc", "cloud"), ...P("winter", "ptype", "snow", "kuchsnow")],
  RAP: [...P("500", "spd", "avort", "temp", "vvel", "rhum"), ...P("700", "spd", "temp", "vvel", "rhum"), ...P("850", "spd", "temp", "dewp", "thetae", "vvel", "rhum"), ...P("sfc", "temp", "dewp", "rhum", "thetae", "avort"), ...P("con", "sbcape", "mlcape", "mucape", "cape3km", "stp", "scp", "3kmhel", "1kmhel"), ...P("prec", "radar", "prec", "precacc", "pwat"), ...P("winter", "ptype", "snow", "kuchsnow")],
  NAM: [...P("500", "spd", "avort", "temp", "vvel", "rhum"), ...P("700", "spd", "temp", "vvel", "rhum"), ...P("850", "spd", "temp", "dewp", "thetae", "vvel", "rhum"), ...P("sfc", "temp", "dewp", "rhum", "thetae", "avort"), ...P("con", "sbcape", "mlcape", "mucape", "stp", "scp", "3kmhel", "1kmhel"), ...P("prec", "radar", "prec", "precacc", "pwat", "cloud"), ...P("winter", "ptype", "snow", "kuchsnow")],
  NAMNST: [...P("700", "vvel"), ...P("sfc", "temp", "dewp", "rhum", "thetae", "gust"), ...P("con", "sbcape", "mlcape", "mucape", "stp", "scp", "uphlysw", "uphlysw6", "3kmhel", "1kmhel"), ...P("prec", "radar", "precacc"), ...P("winter", "ptype", "snow", "kuchsnow")],
  GFS: [...P("2pvu", "pres"), ...P("250", "spd", "rhum"), ...P("500", "spd", "avort", "temp", "vvel", "rhum"), ...P("700", "spd", "avort", "temp", "vvel", "rhum"), ...P("850", "spd", "thetae", "temp", "tadv", "dewp", "vvel", "rhum"), ...P("925", "spd", "thetae", "temp", "rhum"), ...P("sfc", "temp", "dewp", "rhum", "thetae", "wetblb", "30mbdewp", "vis", "avort"), ...P("con", "sbcape", "mlcape", "mucape", "lsi", "scp", "3kmhel", "3kmehi", "lapse57", "lapse81"), ...P("prec", "prec", "radar", "cprec", "precacc", "precacc6", "precacc12", "precacc24", "pwat", "cloud"), ...P("winter", "ptype", "snow", "snow6", "snow12", "snow24", "kuchsnow", "kuchsnow6", "kuchsnow12", "kuchsnow24", "kratio", "frzra", "cthk")],
  ECMWF: [...P("500", "spd", "avort", "temp", "rhum"), ...P("700", "spd", "temp", "rhum"), ...P("850", "spd", "temp", "dewp", "thetae", "rhum"), ...P("sfc", "temp", "dewp", "thetae"), ...P("con", "mucape", "shear"), ...P("prec", "prec", "precacc", "pwat"), ...P("winter", "kuchsnow")],
  RDPS: [...P("500", "spd", "avort", "temp", "vvel", "rhum"), ...P("700", "spd", "temp", "vvel", "rhum"), ...P("850", "spd", "temp", "dewp", "thetae", "vvel", "rhum"), ...P("sfc", "temp", "dewp", "thetae", "avort"), ...P("con", "sbcape"), ...P("prec", "precacc", "pwat", "cloud"), ...P("winter", "ptype", "snow", "kuchsnow")],
  GDPS: [...P("500", "spd", "avort", "temp", "vvel", "rhum"), ...P("700", "spd", "temp", "vvel", "rhum"), ...P("850", "spd", "temp", "dewp", "thetae", "vvel", "rhum"), ...P("sfc", "temp", "dewp", "thetae", "avort"), ...P("con", "sbcape"), ...P("prec", "precacc", "pwat", "cloud"), ...P("winter", "ptype", "snow", "kuchsnow")],
  GEFS: [...P("con", "meanscp", "maxscp", "scpens"), ...P("prec", "meanprec", "meanprecacc", "paccens"), ...P("winter", "ptypens", "meansnacc", "snens")]
};

const modelLabels = { HRRR: "HRRR", RAP: "RAP", NAM: "NAM", NAMNST: "NAM Nest", GFS: "GFS", ECMWF: "ECMWF", RDPS: "RDPS", GDPS: "GDPS", GEFS: "GEFS" };
const modelOrder = Object.keys(modelLabels);
const modelCycles = {
  HRRR: Array.from({ length: 24 }, (_, hour) => hour), RAP: Array.from({ length: 24 }, (_, hour) => hour),
  NAM: [0, 6, 12, 18], NAMNST: [0, 6, 12, 18], GFS: [0, 6, 12, 18], ECMWF: [0, 6, 12, 18],
  RDPS: [0, 6, 12, 18], GDPS: [0, 12], GEFS: [0, 6, 12, 18]
};
const levelNames = { "2pvu": "Dynamic Tropopause", "250": "250mb", "500": "500mb", "700": "700mb", "850": "850mb", "925": "925mb", sfc: "Surface", con: "Convective", prec: "Precipitation", winter: "Winter" };

const state = {
  active: 0,
  validTime: null,
  playing: false,
  timer: null,
  panels: [
    panelState("GFS", "US", "500/spd"),
    panelState("GFS", "US", "850/thetae"),
    panelState("GFS", "US", "prec/prec"),
    panelState("GFS", "US", "sfc/temp"),
    panelState("GFS", "US", "sfc/30mbdewp"),
    panelState("GFS", "US", "con/mucape")
  ]
};

const BUILTIN_CONFIGURATIONS = {
  "GFS US": configuration("GFS", "US", ["500/spd", "850/thetae", "prec/prec", "sfc/temp", "sfc/30mbdewp", "con/mucape"]),
  "RAP US": configuration("RAP", "US", ["500/spd", "850/thetae", "prec/prec", "sfc/temp", "sfc/dewp", "con/mucape"]),
  "NAM US": configuration("NAM", "US", ["500/spd", "850/thetae", "prec/prec", "sfc/temp", "sfc/dewp", "con/mucape"]),
  "ECMWF US": configuration("ECMWF", "US", ["500/spd", "850/thetae", "prec/prec", "sfc/temp", "sfc/dewp", "con/mucape"]),
  "RDPS US": configuration("RDPS", "US", ["500/spd", "850/thetae", "prec/precacc", "sfc/temp", "sfc/dewp", "con/sbcape"]),
  "GDPS US": configuration("GDPS", "US", ["500/spd", "850/thetae", "prec/precacc", "sfc/temp", "sfc/dewp", "con/sbcape"]),
  "GEFS US": configuration("GEFS", "US", ["prec/meanprec", "prec/meanprecacc", "prec/paccens", "con/meanscp", "con/maxscp", "con/scpens"]),
  "HRRR CAM": configuration("HRRR", "NIL", ["prec/radar", "con/mucape", "sfc/thetae", "con/scp", "con/uphlysw6", "con/ltng"]),
  "NAM Nest CAM": configuration("NAMNST", "NIL", ["prec/radar", "con/mucape", "sfc/thetae", "con/scp", "con/stp", "con/3kmhel"])
};

function configuration(model, region, productKeys) {
  return { panels: productKeys.map((productKey) => ({ model, region, productKey })) };
}

const els = {
  app: document.getElementById("app"), panelGrid: document.getElementById("panelGrid"), status: document.getElementById("status"),
  slider: document.getElementById("frameSlider"), validTime: document.getElementById("validTime"), playIcon: document.getElementById("playIcon"),
  picker: document.getElementById("productPicker"), pickerTitle: document.getElementById("pickerTitle"), productGroups: document.getElementById("productGroups"),
  configurationSelect: document.getElementById("configurationSelect"), deleteConfiguration: document.getElementById("deleteConfiguration"),
  globalRun: document.getElementById("globalRun"), globalModel: document.getElementById("globalModel"), globalRegion: document.getElementById("globalRegion")
};

function panelState(model, region, productKey) {
  return { model, region, productKey, requestedRun: "0", frames: [], validtimes: [], index: 0, run: "", request: 0, dom: null };
}

function selectedProduct(panel) {
  return (products[panel.model] || []).find((item) => `${item.level}/${item.id}` === panel.productKey) || products[panel.model][0];
}

function endpoint(panel) {
  const product = selectedProduct(panel);
  return `${COD_ENDPOINT}?parms=${encodeURIComponent([panel.model, panel.requestedRun, panel.region, product.level, product.id].join("-"))}`;
}

function buildPanels() {
  els.panelGrid.innerHTML = "";
  state.panels.forEach((panel, index) => {
    const article = document.createElement("article");
    article.className = "model-panel";
    article.innerHTML = `<header class="panel-head"><span class="panel-number">${index + 1}</span><select class="model-select" aria-label="Panel ${index + 1} model"></select><select class="region-select" aria-label="Panel ${index + 1} sector"></select><button class="product-button" type="button"></button></header><div class="image-stage"><img class="panel-image" alt="Panel ${index + 1} forecast image"><div class="panel-message">Loading COD frames...</div></div><footer class="panel-caption"><span class="frame-caption">Waiting for frames</span><span class="run-caption">Latest run</span></footer>`;
    panel.dom = {
      article, model: article.querySelector(".model-select"), region: article.querySelector(".region-select"), product: article.querySelector(".product-button"),
      stage: article.querySelector(".image-stage"), image: article.querySelector(".panel-image"), message: article.querySelector(".panel-message"),
      frame: article.querySelector(".frame-caption"), run: article.querySelector(".run-caption")
    };
    panel.dom.model.innerHTML = modelOrder.map((id) => `<option value="${id}">${modelLabels[id]}</option>`).join("");
    panel.dom.model.value = panel.model;
    refreshPanelControls(panel);
    article.addEventListener("click", () => selectPanel(index));
    article.addEventListener("dblclick", (event) => {
      if (event.target.closest("button, select, input")) return;
      openInSingleViewer(index);
    });
    panel.dom.stage.addEventListener("click", (event) => {
      event.stopPropagation();
      selectPanel(index);
    });
    panel.dom.product.addEventListener("click", (event) => { event.stopPropagation(); selectPanel(index); openProductPicker(index); });
    panel.dom.model.addEventListener("change", (event) => {
      event.stopPropagation();
      markConfigurationCustom();
      panel.model = panel.dom.model.value;
      if (!(regionSets[panel.model] || []).includes(panel.region)) panel.region = (regionSets[panel.model] || ["NIL"])[0];
      const preferred = (products[panel.model] || []).find((item) => item.id === "radar") || products[panel.model][0];
      panel.productKey = `${preferred.level}/${preferred.id}`;
      panel.requestedRun = "0";
      refreshPanelControls(panel); loadPanel(index);
    });
    panel.dom.region.addEventListener("change", (event) => { event.stopPropagation(); markConfigurationCustom(); panel.region = panel.dom.region.value; loadPanel(index); });
    els.panelGrid.appendChild(article);
  });
  selectPanel(0);
}

function refreshPanelControls(panel) {
  panel.dom.region.innerHTML = (regionSets[panel.model] || []).map((id) => `<option value="${id}">${regionNames[id] || id}</option>`).join("");
  panel.dom.region.value = panel.region;
  const product = selectedProduct(panel);
  panel.dom.product.textContent = `${levelNames[product.level] || product.level} · ${product.label}`;
  panel.dom.product.title = `Choose product: ${product.label}`;
}

function selectPanel(index) {
  state.active = index;
  state.panels.forEach((panel, panelIndex) => panel.dom.article.classList.toggle("active", panelIndex === index));
  updateTimeControls();
}

function initializeGlobalControls() {
  els.globalModel.innerHTML = '<option value="">All models...</option>' + modelOrder.map((id) => `<option value="${id}">${modelLabels[id]}</option>`).join("");
  const allRegions = [...new Set(Object.values(regionSets).flat())].sort((a, b) => (regionNames[a] || a).localeCompare(regionNames[b] || b));
  els.globalRegion.innerHTML = '<option value="">All sectors...</option>' + allRegions.map((id) => `<option value="${id}">${regionNames[id] || id}</option>`).join("");
}

async function loadPanel(index) {
  const panel = state.panels[index];
  const request = ++panel.request;
  panel.dom.message.hidden = false;
  panel.dom.message.textContent = "Loading COD frames...";
  panel.dom.image.removeAttribute("src");
  try {
    const response = await fetch(endpoint(panel), { headers: { Accept: "application/json" }, cache: "no-store" });
    if (!response.ok) throw new Error(`COD returned ${response.status}`);
    const data = await response.json();
    if (request !== panel.request) return;
    panel.frames = Array.isArray(data.files) ? data.files : [];
    panel.validtimes = Array.isArray(data.validtimes) ? data.validtimes : [];
    panel.run = extractRun(panel.frames[0]);
    panel.index = closestIndex(state.validTime, panel.validtimes);
    if (!panel.frames.length) {
      panel.dom.message.textContent = `No ${modelLabels[panel.model]} frames for ${regionNames[panel.region] || panel.region} / ${selectedProduct(panel).label}.`;
    } else {
      panel.dom.message.hidden = true;
      if (state.validTime == null && index === state.active) state.validTime = Number(panel.validtimes[panel.index]) || null;
    }
    renderPanel(index);
  } catch (error) {
    if (request !== panel.request) return;
    panel.frames = [];
    panel.dom.message.hidden = false;
    panel.dom.message.textContent = `Could not load COD data: ${error.message}`;
  }
  updateStatus();
  if (index === state.active) updateTimeControls();
}

function renderPanel(index) {
  const panel = state.panels[index];
  const frame = panel.frames[panel.index];
  if (!frame) return;
  panel.dom.image.src = frame;
  const product = selectedProduct(panel);
  panel.dom.image.alt = `${modelLabels[panel.model]} ${regionNames[panel.region] || panel.region} ${product.label}`;
  panel.dom.frame.textContent = `F${forecastHour(frame)} · Valid ${formatValid(panel.validtimes[panel.index])}`;
  panel.dom.run.textContent = panel.run ? `Run ${formatRun(panel.run)}` : "Latest run";
}

function updateStatus() {
  const loaded = state.panels.filter((panel) => panel.frames.length).length;
  els.status.textContent = `${loaded}/${state.panels.length} panels loaded · double-click a panel to open the full forecast viewer`;
}

function savedConfigurations() {
  try {
    const value = JSON.parse(localStorage.getItem(CONFIGURATION_STORAGE_KEY) || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

function seedBuiltInConfigurations() {
  const configurations = savedConfigurations();
  let changed = false;
  ["HRRR CAM - Vorticity", "HRRR CAM - Lightning"].forEach((name) => {
    if (!configurations[name]) return;
    delete configurations[name];
    changed = true;
  });
  Object.entries(BUILTIN_CONFIGURATIONS).forEach(([name, configurationValue]) => {
    if (configurations[name]) return;
    configurations[name] = configurationValue;
    changed = true;
  });
  if (!changed) return;
  try {
    localStorage.setItem(CONFIGURATION_STORAGE_KEY, JSON.stringify(configurations));
  } catch {
    els.status.textContent = "This browser could not initialize saved configurations.";
  }
}

function renderConfigurationOptions(selectedName = "") {
  const configurations = savedConfigurations();
  els.configurationSelect.innerHTML = '<option value="">Saved configurations</option>';
  Object.keys(configurations).sort((a, b) => a.localeCompare(b)).forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    els.configurationSelect.appendChild(option);
  });
  els.configurationSelect.value = configurations[selectedName] ? selectedName : "";
  els.deleteConfiguration.disabled = !els.configurationSelect.value;
}

function markConfigurationCustom() {
  els.configurationSelect.value = "";
  els.deleteConfiguration.disabled = true;
}

function saveCurrentConfiguration() {
  const suggested = els.configurationSelect.value || "My six-panel setup";
  const entered = window.prompt("Name this six-panel configuration:", suggested);
  const name = String(entered || "").trim().slice(0, 60);
  if (!name) return;
  const configurations = savedConfigurations();
  if (configurations[name] && !window.confirm(`Replace the saved configuration "${name}"?`)) return;
  configurations[name] = {
    panels: state.panels.map((panel) => ({ model: panel.model, region: panel.region, productKey: panel.productKey }))
  };
  try {
    localStorage.setItem(CONFIGURATION_STORAGE_KEY, JSON.stringify(configurations));
    renderConfigurationOptions(name);
    els.status.textContent = `Saved configuration: ${name}`;
  } catch {
    els.status.textContent = "This browser could not save the configuration.";
  }
}

function applyConfiguration(name) {
  const saved = savedConfigurations()[name];
  if (!saved || !Array.isArray(saved.panels) || saved.panels.length !== state.panels.length) return;
  setPlaying(false);
  state.validTime = null;
  saved.panels.forEach((configuration, index) => {
    const panel = state.panels[index];
    panel.model = modelOrder.includes(configuration.model) ? configuration.model : "GFS";
    panel.region = (regionSets[panel.model] || []).includes(configuration.region) ? configuration.region : (regionSets[panel.model] || ["US"])[0];
    const product = (products[panel.model] || []).find((item) => `${item.level}/${item.id}` === configuration.productKey) || products[panel.model][0];
    panel.productKey = `${product.level}/${product.id}`;
    panel.requestedRun = "0";
    panel.dom.model.value = panel.model;
    refreshPanelControls(panel);
    loadPanel(index);
  });
  selectPanel(0);
  els.status.textContent = `Loaded configuration: ${name}`;
}

function deleteSelectedConfiguration() {
  const name = els.configurationSelect.value;
  if (!name || !window.confirm(`Delete the saved configuration "${name}"?`)) return;
  const configurations = savedConfigurations();
  delete configurations[name];
  try {
    localStorage.setItem(CONFIGURATION_STORAGE_KEY, JSON.stringify(configurations));
    renderConfigurationOptions();
    els.status.textContent = `Deleted configuration: ${name}`;
  } catch {
    els.status.textContent = "This browser could not update saved configurations.";
  }
}

function openInSingleViewer(index) {
  const panel = state.panels[index];
  const product = selectedProduct(panel);
  const valid = Number(panel.validtimes[panel.index]) || state.validTime || "";
  const params = new URLSearchParams({
    model: panel.model,
    region: panel.region,
    level: product.level,
    product: product.id
  });
  if (valid) params.set("valid", String(valid));
  window.open(`../forecast/index.html?${params.toString()}`, "_blank", "noopener");
}

function updateTimeControls() {
  const panel = state.panels[state.active];
  els.slider.max = String(Math.max(0, panel.frames.length - 1));
  els.slider.value = String(panel.index);
  els.validTime.value = state.validTime ? `Valid ${formatValid(state.validTime)}` : "Valid time unavailable";
  renderRunOptions();
}

function renderRunOptions() {
  const panel = state.panels[state.active];
  const actualRun = panel.run;
  const selectedRun = panel.requestedRun;
  els.globalRun.innerHTML = `<option value="0">${actualRun ? `Latest (${formatRun(actualRun)})` : "Latest run"}</option>`;
  buildRunCandidates(actualRun, panel.model).slice(1, 9).forEach((run) => {
    const option = document.createElement("option");
    option.value = run;
    option.textContent = formatRun(run);
    els.globalRun.appendChild(option);
  });
  if (selectedRun !== "0" && ![...els.globalRun.options].some((option) => option.value === selectedRun)) {
    const option = document.createElement("option");
    option.value = selectedRun;
    option.textContent = formatRun(selectedRun);
    els.globalRun.appendChild(option);
  }
  els.globalRun.value = selectedRun;
}

function buildRunCandidates(run, model) {
  const date = parseRun(run);
  if (!date) return [];
  const cycles = modelCycles[model] || [0, 6, 12, 18];
  const candidates = [];
  const cursor = new Date(date);
  while (candidates.length < 10) {
    if (cycles.includes(cursor.getUTCHours())) candidates.push(formatRunId(cursor));
    cursor.setUTCHours(cursor.getUTCHours() - 1);
  }
  return candidates;
}

function closestRunForModel(run, model) {
  const date = parseRun(run);
  if (!date) return "0";
  const cycles = modelCycles[model] || [0, 6, 12, 18];
  while (!cycles.includes(date.getUTCHours())) date.setUTCHours(date.getUTCHours() - 1);
  return formatRunId(date);
}

function applyGlobalRun(run) {
  state.panels.forEach((panel, index) => {
    panel.requestedRun = run === "0" ? "0" : closestRunForModel(run, panel.model);
    loadPanel(index);
  });
}

function applyGlobalModel(model) {
  if (!modelOrder.includes(model)) return;
  markConfigurationCustom();
  state.validTime = null;
  state.panels.forEach((panel, index) => {
    const previousProduct = selectedProduct(panel);
    panel.model = model;
    panel.region = (regionSets[model] || []).includes(panel.region) ? panel.region : ((regionSets[model] || []).includes("US") ? "US" : (regionSets[model] || ["NIL"])[0]);
    const product = (products[model] || []).find((item) => item.level === previousProduct.level && item.id === previousProduct.id)
      || (products[model] || []).find((item) => item.id === previousProduct.id)
      || (products[model] || []).find((item) => item.id === "radar")
      || products[model][0];
    panel.productKey = `${product.level}/${product.id}`;
    panel.requestedRun = "0";
    panel.dom.model.value = model;
    refreshPanelControls(panel);
    loadPanel(index);
  });
  els.globalModel.value = "";
}

function applyGlobalRegion(region) {
  if (!region) return;
  markConfigurationCustom();
  let changed = 0;
  state.panels.forEach((panel, index) => {
    if (!(regionSets[panel.model] || []).includes(region)) return;
    panel.region = region;
    panel.dom.region.value = region;
    loadPanel(index);
    changed += 1;
  });
  els.globalRegion.value = "";
  els.status.textContent = changed === state.panels.length
    ? `All panels changed to ${regionNames[region] || region}`
    : `${changed}/${state.panels.length} panels support ${regionNames[region] || region}`;
}

function setValidFromActive(index) {
  const panel = state.panels[state.active];
  panel.index = Math.max(0, Math.min(index, panel.frames.length - 1));
  state.validTime = Number(panel.validtimes[panel.index]) || null;
  state.panels.forEach((item, panelIndex) => {
    item.index = closestIndex(state.validTime, item.validtimes);
    renderPanel(panelIndex);
  });
  updateTimeControls();
}

function moveFrame(delta) {
  const panel = state.panels[state.active];
  if (!panel.frames.length) return;
  let next = panel.index + delta;
  if (next > panel.frames.length - 1) next = 0;
  if (next < 0) next = panel.frames.length - 1;
  setValidFromActive(next);
}

function setPlaying(value) {
  state.playing = value;
  clearTimeout(state.timer);
  els.playIcon.setAttribute("d", value ? "M8 5h3v14H8V5Zm5 0h3v14h-3V5Z" : "M8 5v14l11-7L8 5Z");
  if (value) scheduleFrame();
}

function toggleExpansion() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    return;
  }
  if (els.app.requestFullscreen) {
    els.app.requestFullscreen().catch(() => els.app.classList.toggle("expanded"));
    return;
  }
  els.app.classList.toggle("expanded");
}

function scheduleFrame() {
  clearTimeout(state.timer);
  if (!state.playing) return;
  state.timer = setTimeout(() => { moveFrame(1); scheduleFrame(); }, 650);
}

function openProductPicker(index) {
  selectPanel(index);
  const panel = state.panels[index];
  els.pickerTitle.textContent = `Panel ${index + 1}: Choose Product`;
  els.productGroups.innerHTML = "";
  const groups = new Map();
  (products[panel.model] || []).forEach((product) => {
    if (!groups.has(product.level)) groups.set(product.level, []);
    groups.get(product.level).push(product);
  });
  groups.forEach((items, level) => {
    const group = document.createElement("section");
    group.className = "product-group";
    group.innerHTML = `<h3>${levelNames[level] || level}</h3><div class="product-options"></div>`;
    items.forEach((product) => {
      const button = document.createElement("button");
      button.className = "product-option";
      button.classList.toggle("active", panel.productKey === `${product.level}/${product.id}`);
      button.type = "button";
      button.textContent = product.label;
      button.addEventListener("click", () => {
        markConfigurationCustom();
        panel.productKey = `${product.level}/${product.id}`;
        refreshPanelControls(panel);
        closeProductPicker();
        loadPanel(index);
      });
      group.querySelector(".product-options").appendChild(button);
    });
    els.productGroups.appendChild(group);
  });
  els.picker.hidden = false;
}

function closeProductPicker() { els.picker.hidden = true; }

function closestIndex(target, validtimes) {
  if (!validtimes.length || target == null) return 0;
  let best = 0;
  let distance = Infinity;
  validtimes.forEach((value, index) => {
    const current = Math.abs(Number(value) - Number(target));
    if (current < distance) { best = index; distance = current; }
  });
  return best;
}

function forecastHour(url) {
  return String(url || "").match(/_(\d{3})\.png$/)?.[1] || "---";
}

function extractRun(url) {
  return String(url || "").match(/forecast\/[^/]+\/(\d{10})\//)?.[1] || "";
}

function formatRun(run) { return run ? `${run.slice(6, 8)}/${run.slice(8, 10)}Z` : ""; }

function parseRun(run) {
  const match = String(run || "").match(/^(\d{4})(\d{2})(\d{2})(\d{2})$/);
  if (!match) return null;
  return new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4])));
}

function formatRunId(date) {
  return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(date.getUTCDate()).padStart(2, "0")}${String(date.getUTCHours()).padStart(2, "0")}`;
}

function formatValid(value) {
  const date = new Date(Number(value) * 1000);
  if (Number.isNaN(date.getTime())) return "unavailable";
  return `${String(date.getUTCDate()).padStart(2, "0")}/${String(date.getUTCHours()).padStart(2, "0")}Z`;
}

document.getElementById("prevFrame").addEventListener("click", () => moveFrame(-1));
document.getElementById("nextFrame").addEventListener("click", () => moveFrame(1));
document.getElementById("playPause").addEventListener("click", () => setPlaying(!state.playing));
document.getElementById("refreshAll").addEventListener("click", () => state.panels.forEach((_, index) => loadPanel(index)));
document.getElementById("saveConfiguration").addEventListener("click", saveCurrentConfiguration);
els.deleteConfiguration.addEventListener("click", deleteSelectedConfiguration);
els.configurationSelect.addEventListener("change", () => {
  els.deleteConfiguration.disabled = !els.configurationSelect.value;
  if (els.configurationSelect.value) applyConfiguration(els.configurationSelect.value);
});
els.globalRun.addEventListener("change", () => applyGlobalRun(els.globalRun.value));
els.globalModel.addEventListener("change", () => { if (els.globalModel.value) applyGlobalModel(els.globalModel.value); });
els.globalRegion.addEventListener("change", () => { if (els.globalRegion.value) applyGlobalRegion(els.globalRegion.value); });
document.getElementById("expandApp").addEventListener("click", toggleExpansion);
document.getElementById("closePicker").addEventListener("click", closeProductPicker);
els.picker.addEventListener("click", (event) => { if (event.target === els.picker) closeProductPicker(); });
els.slider.addEventListener("input", () => setValidFromActive(Number(els.slider.value)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.picker.hidden) { closeProductPicker(); return; }
  if (!els.picker.hidden) return;
  if (["INPUT", "SELECT", "TEXTAREA"].includes(event.target?.tagName) || event.target?.isContentEditable) return;
  if (event.key === " ") { event.preventDefault(); setPlaying(!state.playing); }
  if (event.key.toLowerCase() === "x") { event.preventDefault(); toggleExpansion(); }
  if (event.key === "ArrowLeft") { event.preventDefault(); moveFrame(-1); }
  if (event.key === "ArrowRight") { event.preventDefault(); moveFrame(1); }
  if (["1", "2", "3", "4", "5", "6"].includes(event.key)) selectPanel(Number(event.key) - 1);
});

buildPanels();
initializeGlobalControls();
seedBuiltInConfigurations();
renderConfigurationOptions("GFS US");
state.panels.forEach((_, index) => loadPanel(index));
