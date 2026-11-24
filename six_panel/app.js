const COD_ENDPOINT = "https://weather.cod.edu/datapoints/forecast/get-files.php";
const CONFIGURATION_STORAGE_KEY = "nexlab-six-panel-configurations";

const regionNames = COD_MODEL_CATALOG.sectors;
const levelNames = COD_MODEL_CATALOG.levels;
const modelOrder = Object.keys(COD_MODEL_CATALOG.models);
const regionSets = Object.fromEntries(modelOrder.map(id => [id, COD_MODEL_CATALOG.models[id].sectors]));
const modelLabels = Object.fromEntries(modelOrder.map(id => [id, COD_MODEL_CATALOG.models[id].label]));
const modelCycles = Object.fromEntries(modelOrder.map(id => [id, COD_MODEL_CATALOG.models[id].runs]));
function productsFor(panel) {
  const model = COD_MODEL_CATALOG.models[panel.model];
  const levels = model.productsByLevel[panel.region] || model.productsByLevel.general;
  return Object.entries(levels).flatMap(([level, ids]) => ids.map(id => ({ level, id, label: COD_MODEL_CATALOG.products[id] || id })));
}

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
  "RRFS CAM": configuration("RRFS", "NIL", ["prec/radar", "con/mucape", "sfc/thetae", "con/scp", "con/stp", "con/3kmhel"])
};

["RRFS", "REFS", "AIFS", "AIFSENS", "AIGFS", "AIGEFS", "CFS"].forEach(model => {
  const region = regionSets[model].includes("US") ? "US" : "NIL";
  const available = productsFor({model, region});
  const preferred = ["AIFSENS", "AIGEFS"].includes(model)
    ? ["500/meanwind", "500/hghtens", "850/meantemp", "850/tempens", "prec/meanprec", "prec/meanprecacc"]
    : ["500/spd", "850/thetae", "prec/prec", "sfc/temp", "sfc/dewp", "con/mucape"];
  const keys = preferred.map((key, index) => available.some(item => `${item.level}/${item.id}` === key) ? key : `${available[index % available.length].level}/${available[index % available.length].id}`);
  BUILTIN_CONFIGURATIONS[`${modelLabels[model]} ${region}`] = configuration(model, region, keys);
});
Object.values(BUILTIN_CONFIGURATIONS).forEach(setup => setup.panels.forEach(panel => {
  const available = productsFor(panel);
  if (!available.some(item => `${item.level}/${item.id}` === panel.productKey)) {
    const preferred = available.find(item => item.id === "radar") || available[0];
    panel.productKey = `${preferred.level}/${preferred.id}`;
  }
}));

BUILTIN_CONFIGURATIONS["Midwest Snow - Short Range (Kuchera)"] = {
  panels: ["HRRR", "RAP", "RRFS", "NAM", "RDPS", "GFS"].map(model => ({
    model, region: "MW", productKey: "winter/kuchsnow"
  }))
};

BUILTIN_CONFIGURATIONS["Midwest Snow - Long Range (Kuchera)"] = {
  panels: [0, 1].flatMap(runOffset => ["GFS", "ECMWF", "AIFS"].map(model => ({
    model, region: "MW", productKey: "winter/kuchsnow", runOffset, extendedRun: ["ECMWF", "AIFS"].includes(model)
  })))
};

function configuration(model, region, productKeys) {
  return { panels: productKeys.map((productKey) => ({ model, region, productKey })) };
}

const els = {
  app: document.getElementById("app"), panelGrid: document.getElementById("panelGrid"), status: document.getElementById("status"),
  slider: document.getElementById("frameSlider"), validTime: document.getElementById("validTime"), playIcon: document.getElementById("playIcon"),
  picker: document.getElementById("productPicker"), pickerTitle: document.getElementById("pickerTitle"), productGroups: document.getElementById("productGroups"),
  configurationSelect: document.getElementById("configurationSelect"), deleteConfiguration: document.getElementById("deleteConfiguration")
};

function panelState(model, region, productKey) {
  return { model, region, productKey, requestedRun: "0", runOffset: 0, extendedRun: false, frames: [], validtimes: [], index: 0, run: "", fellBackToLatest: false, request: 0, dom: null };
}

function selectedProduct(panel) {
  return productsFor(panel).find((item) => `${item.level}/${item.id}` === panel.productKey) || productsFor(panel)[0];
}

function endpoint(panel, requestedRun = panel.requestedRun) {
  const product = selectedProduct(panel);
  return `${COD_ENDPOINT}?parms=${encodeURIComponent([panel.model, requestedRun, panel.region, product.level, product.id].join("-"))}`;
}

function buildPanels() {
  els.panelGrid.innerHTML = "";
  state.panels.forEach((panel, index) => {
    const article = document.createElement("article");
    article.className = "model-panel";
    article.innerHTML = `<header class="panel-head"><span class="panel-number">${index + 1}</span><select class="model-select" aria-label="Panel ${index + 1} model"></select><select class="region-select" aria-label="Panel ${index + 1} sector" hidden></select><button class="map-button panel-map-button" type="button" aria-label="Change panel ${index + 1} map"></button><button class="product-button" type="button"></button></header><div class="image-stage"><img class="panel-image" alt="Panel ${index + 1} forecast image"><div class="panel-message">Loading COD frames...</div></div><footer class="panel-caption"><span class="frame-caption">Waiting for frames</span><span class="run-caption">Latest run</span></footer>`;
    panel.dom = {
      article, model: article.querySelector(".model-select"), region: article.querySelector(".region-select"), map: article.querySelector(".panel-map-button"), product: article.querySelector(".product-button"),
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
    panel.dom.map.addEventListener("click", (event) => { event.stopPropagation(); selectPanel(index); openMapPicker(index); });
    panel.dom.product.addEventListener("click", (event) => { event.stopPropagation(); selectPanel(index); openProductPicker(index); });
    panel.dom.model.addEventListener("change", (event) => {
      event.stopPropagation();
      markConfigurationCustom();
      panel.model = panel.dom.model.value;
      if (!(regionSets[panel.model] || []).includes(panel.region)) panel.region = (regionSets[panel.model] || ["NIL"])[0];
      const preferred = productsFor(panel).find((item) => item.id === "radar") || productsFor(panel)[0];
      panel.productKey = `${preferred.level}/${preferred.id}`;
      panel.requestedRun = "0";
      panel.runOffset = 0;
      panel.extendedRun = false;
      refreshPanelControls(panel); loadPanel(index);
    });
    panel.dom.region.addEventListener("change", (event) => { event.stopPropagation(); markConfigurationCustom(); panel.region = panel.dom.region.value; refreshPanelControls(panel); loadPanel(index); });
    els.panelGrid.appendChild(article);
  });
  selectPanel(0);
}

function refreshPanelControls(panel) {
  panel.dom.region.innerHTML = (regionSets[panel.model] || []).map((id) => `<option value="${id}">${regionNames[id] || id}</option>`).join("");
  panel.dom.region.value = panel.region;
  panel.dom.map.textContent = `Map: ${regionNames[panel.region] || panel.region}`;
  panel.dom.map.title = `Change this panel map (${regionNames[panel.region] || panel.region})`;
  const product = selectedProduct(panel);
  panel.productKey = `${product.level}/${product.id}`;
  panel.dom.product.textContent = `${levelNames[product.level] || product.level} · ${product.label}`;
  panel.dom.product.title = `Choose product: ${product.label}`;
}

function selectPanel(index) {
  state.active = index;
  state.panels.forEach((panel, panelIndex) => panel.dom.article.classList.toggle("active", panelIndex === index));
  updateTimeControls();
}

async function loadPanel(index) {
  if (state.playing) setPlaying(false);
  const panel = state.panels[index];
  const request = ++panel.request;
  panel.frames = [];
  panel.validtimes = [];
  panel.index = 0;
  panel.dom.frame.textContent = "Waiting for frames";
  panel.dom.run.textContent = "";
  panel.dom.message.hidden = false;
  panel.dom.message.textContent = "Loading COD frames...";
  panel.dom.image.removeAttribute("src");
  if (index === state.active) updateTimeControls();
  try {
    const requestedRun = panel.requestedRun;
    const fetchRun = async (run) => {
      const response = await fetch(endpoint(panel, run), { headers: { Accept: "application/json" }, cache: "no-store" });
      if (!response.ok) throw new Error(`COD returned ${response.status}`);
      return response.json();
    };
    const hasFrames = (data) => Array.isArray(data?.files) && data.files.length > 0;
    let data = { files: [], validtimes: [] };
    let firstError = null;
    try {
      data = await fetchRun(requestedRun);
    } catch (error) {
      firstError = error;
    }
    let fellBackToLatest = false;
    if (requestedRun !== "0" && !hasFrames(data)) {
      try {
        data = await fetchRun("0");
        if (hasFrames(data)) fellBackToLatest = true;
      } catch {
        data = { files: [], validtimes: [] };
      }
    }
    if (!hasFrames(data)) {
      const candidates = buildRunCandidates(formatRunId(new Date()), panel.model);
      for (const candidate of candidates) {
        if (candidate === requestedRun) continue;
        try {
          const candidateData = await fetchRun(candidate);
          if (!hasFrames(candidateData)) continue;
          data = candidateData;
          fellBackToLatest = true;
          break;
        } catch {
          // Continue backward until this product exists for the model.
        }
      }
    }
    if (panel.extendedRun && hasFrames(data)) {
      const availableRun = extractRun(data.files[0]);
      if (!["00", "12"].includes(availableRun.slice(8))) {
        let extendedData = null;
        for (const candidate of buildRunCandidates(availableRun, panel.model).filter(run => ["00", "12"].includes(run.slice(8)))) {
          try {
            const candidateData = await fetchRun(candidate);
            if (hasFrames(candidateData) && ["00", "12"].includes(extractRun(candidateData.files[0]).slice(8))) {
              extendedData = candidateData;
              break;
            }
          } catch { /* Continue to an earlier extended cycle. */ }
        }
        if (!extendedData) throw new Error("Extended forecast cycle unavailable.");
        data = extendedData;
      }
    }
    if (panel.runOffset === 1) {
      if (!hasFrames(data)) throw new Error("Latest run unavailable; cannot identify the previous run.");
      const latestRun = extractRun(data.files[0]);
      let previousData = null;
      for (const candidate of buildRunCandidates(latestRun, panel.model).slice(1).filter(run => !panel.extendedRun || ["00", "12"].includes(run.slice(8)))) {
        try {
          const earlier = await fetchRun(candidate);
          if (hasFrames(earlier) && extractRun(earlier.files[0]) < latestRun) {
            previousData = earlier;
            break;
          }
        } catch { /* Try the next earlier available cycle. */ }
      }
      if (!previousData) throw new Error("Previous run unavailable for this product.");
      data = previousData;
      fellBackToLatest = false;
    }
    if (request !== panel.request) return;
    if (!hasFrames(data) && firstError) throw firstError;
    panel.fellBackToLatest = fellBackToLatest;
    if (fellBackToLatest) panel.requestedRun = "0";
    panel.frames = Array.isArray(data.files) ? data.files : [];
    panel.validtimes = Array.isArray(data.validtimes) ? data.validtimes : [];
    panel.run = extractRun(panel.frames[0]);
    panel.index = closestIndex(state.validTime, panel.validtimes);
    if (!panel.frames.length) {
      panel.dom.message.textContent = `No ${modelLabels[panel.model]} frames for ${regionNames[panel.region] || panel.region} / ${selectedProduct(panel).label}.`;
    } else {
      panel.dom.message.hidden = true;
      if (state.validTime == null && index === state.active) setValidFromActive(panel.index);
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
  const firstValid = Number(panel.validtimes[0]);
  const lastValid = Number(panel.validtimes[panel.validtimes.length - 1]);
  if (state.validTime != null && (state.validTime < firstValid || state.validTime > lastValid)) {
    panel.dom.image.removeAttribute("src");
    panel.dom.message.hidden = false;
    panel.dom.message.textContent = state.validTime > lastValid
      ? `Forecast ends ${formatValid(lastValid)} (F${forecastHour(panel.frames[panel.frames.length - 1])})`
      : `Forecast starts ${formatValid(firstValid)}`;
    panel.dom.frame.textContent = "Selected valid time unavailable";
    panel.dom.run.textContent = panel.run ? `Run ${formatRun(panel.run)}` : "Latest run";
    return;
  }
  panel.dom.message.hidden = true;
  panel.dom.image.src = frame;
  const product = selectedProduct(panel);
  panel.dom.image.alt = `${modelLabels[panel.model]} ${regionNames[panel.region] || panel.region} ${product.label}`;
  panel.dom.frame.textContent = `F${forecastHour(frame)} · Valid ${formatValid(panel.validtimes[panel.index])}`;
  panel.dom.run.textContent = panel.run
    ? `Run ${formatRun(panel.run)}${panel.runOffset ? (panel.extendedRun ? " · previous extended run" : " · previous available run") : panel.fellBackToLatest ? " · latest available" : ""}`
    : "Latest run";
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
    panels: state.panels.map((panel) => ({ model: panel.model, region: panel.region, productKey: panel.productKey, runOffset: panel.runOffset || 0, extendedRun: !!panel.extendedRun }))
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
  saved.panels.forEach((configuration, index) => {
    const panel = state.panels[index];
    if (configuration.model === "NAMNST") configuration = { ...configuration, model: "RRFS" };
    panel.model = modelOrder.includes(configuration.model) ? configuration.model : "GFS";
    panel.region = (regionSets[panel.model] || []).includes(configuration.region) ? configuration.region : (regionSets[panel.model] || ["US"])[0];
    const product = productsFor(panel).find((item) => `${item.level}/${item.id}` === configuration.productKey) || productsFor(panel)[0];
    panel.productKey = `${product.level}/${product.id}`;
    panel.requestedRun = "0";
    panel.runOffset = configuration.runOffset === 1 ? 1 : 0;
    panel.extendedRun = configuration.extendedRun === true;
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
  const legacyModels = ["HRRR", "RAP", "NAM", "GFS", "ECMWF", "RDPS", "GDPS", "GEFS"];
  const target = legacyModels.includes(panel.model)
    ? `../forecast/index.html?${params.toString()}`
    : `https://weather.cod.edu/forecast/?parms=${[panel.run || "current", panel.model, panel.region, product.level, product.id, Number(forecastHour(panel.frames[panel.index])) || 0, 0, 100].join("-")}`;
  window.open(target, "_blank", "noopener");
}

function updateTimeControls() {
  const panel = state.panels[state.active];
  els.slider.disabled = !panel.frames.length;
  els.slider.max = String(Math.max(0, panel.frames.length - 1));
  els.slider.value = String(panel.index);
  els.validTime.value = state.validTime ? `Valid ${formatValid(state.validTime)}` : "Valid time unavailable";
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
  markConfigurationCustom();
  state.panels.forEach((panel, index) => {
    panel.runOffset = 0;
    panel.extendedRun = false;
    panel.requestedRun = run === "0" ? "0" : closestRunForModel(run, panel.model);
    loadPanel(index);
  });
}

function applyGlobalModel(model) {
  if (!modelOrder.includes(model)) return;
  markConfigurationCustom();
  state.panels.forEach((panel, index) => {
    const previousProduct = selectedProduct(panel);
    panel.model = model;
    panel.region = (regionSets[model] || []).includes(panel.region) ? panel.region : ((regionSets[model] || []).includes("US") ? "US" : (regionSets[model] || ["NIL"])[0]);
    const product = productsFor(panel).find((item) => item.level === previousProduct.level && item.id === previousProduct.id)
      || productsFor(panel).find((item) => item.id === previousProduct.id)
      || productsFor(panel).find((item) => item.id === "radar")
      || productsFor(panel)[0];
    panel.productKey = `${product.level}/${product.id}`;
    panel.requestedRun = "0";
    panel.runOffset = 0;
    panel.extendedRun = false;
    panel.dom.model.value = model;
    refreshPanelControls(panel);
    loadPanel(index);
  });
}

function applyGlobalRegion(region) {
  if (!region) return;
  markConfigurationCustom();
  let changed = 0;
  state.panels.forEach((panel, index) => {
    if (!(regionSets[panel.model] || []).includes(region)) return;
    panel.region = region;
    refreshPanelControls(panel);
    loadPanel(index);
    changed += 1;
  });
  els.status.textContent = changed === state.panels.length
    ? `All panels changed to ${regionNames[region] || region}`
    : `${changed}/${state.panels.length} panels support ${regionNames[region] || region}`;
}

function setValidFromActive(index) {
  const panel = state.panels[state.active];
  const nextIndex = Math.max(0, Math.min(index, panel.frames.length - 1));
  const validTime = Number(panel.validtimes[nextIndex]);
  if (!panel.frames.length || !Number.isFinite(validTime)) return;
  state.validTime = validTime;
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
  productsFor(panel).forEach((product) => {
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

const choicePicker = document.getElementById("choicePicker");
let choicePickerReturnFocus = null;

function openChoicePicker(title, help, choices, apply) {
  choicePickerReturnFocus = document.activeElement;
  document.getElementById("choicePickerTitle").textContent = title;
  document.getElementById("choicePickerHelp").textContent = help;
  const options = document.getElementById("choiceOptions");
  options.replaceChildren();
  choices.forEach(({ value, label, selected }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "product-option";
    button.textContent = label;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
    button.addEventListener("click", () => {
      closeChoicePicker();
      apply(value);
    });
    options.appendChild(button);
  });
  choicePicker.hidden = false;
  (options.querySelector(".active") || options.querySelector("button"))?.focus();
}

function closeChoicePicker() {
  choicePicker.hidden = true;
  choicePickerReturnFocus?.focus();
}

function openMapPicker(index = null) {
  const panels = index == null ? state.panels : [state.panels[index]];
  const ids = [...new Set(panels.flatMap(panel => regionSets[panel.model]))];
  const choices = ids.sort((a, b) => (regionNames[a] || a).localeCompare(regionNames[b] || b)).map(region => {
    const supported = panels.filter(panel => regionSets[panel.model].includes(region)).length;
    return {
      value: region,
      label: (regionNames[region] || region) + (index == null ? " (" + supported + "/" + panels.length + " panels)" : ""),
      selected: panels.every(panel => panel.region === region)
    };
  });
  openChoicePicker(
    index == null ? "Change map: all panels" : "Change map: panel " + (index + 1),
    index == null ? "Choose a region. Panels that do not support it keep their current map." : "Choose a region for this panel.",
    choices,
    region => {
      if (index == null) {
        applyGlobalRegion(region);
        return;
      }
      const panel = state.panels[index];
      markConfigurationCustom();
      panel.region = region;
      refreshPanelControls(panel);
      loadPanel(index);
    }
  );
}

function openModelPicker() {
  const choices = modelOrder.map(model => ({
    value: model,
    label: modelLabels[model],
    selected: state.panels.every(panel => panel.model === model)
  }));
  openChoicePicker("Change model: all panels", "Choose a forecast model for all six panels.", choices, applyGlobalModel);
}

function openRunPicker() {
  const models = new Set(state.panels.map(panel => panel.model));
  const now = formatRunId(new Date());
  const runs = new Set([...models].flatMap(model => buildRunCandidates(now, model)));
  state.panels.forEach(panel => {
    if (panel.run) runs.add(panel.run);
    if (panel.requestedRun !== "0") runs.add(panel.requestedRun);
  });
  const choices = ["0", ...[...runs].sort().reverse()].map(run => ({
    value: run,
    label: run === "0" ? "Latest available run" : run.slice(0, 4) + "-" + run.slice(4, 6) + "-" + run.slice(6, 8) + " " + run.slice(8) + "Z",
    selected: state.panels.every(panel => panel.runOffset === 0 && !panel.extendedRun && panel.requestedRun === (run === "0" ? run : closestRunForModel(run, panel.model)))
  }));
  openChoicePicker(
    "Change run: all panels",
    "Choose an initialization time (UTC). Each model uses its cycle at or before that time, or the latest available run if that cycle has no data.",
    choices,
    applyGlobalRun
  );
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
document.getElementById("expandApp").addEventListener("click", toggleExpansion);
document.getElementById("closePicker").addEventListener("click", closeProductPicker);
els.picker.addEventListener("click", (event) => { if (event.target === els.picker) closeProductPicker(); });
els.slider.addEventListener("input", () => setValidFromActive(Number(els.slider.value)));
document.getElementById("changeAllMaps").addEventListener("click", () => openMapPicker());
document.getElementById("changeAllModels").addEventListener("click", openModelPicker);
document.getElementById("changeAllRuns").addEventListener("click", openRunPicker);
document.getElementById("closeChoicePicker").addEventListener("click", closeChoicePicker);
choicePicker.addEventListener("click", event => {
  if (event.target === choicePicker) closeChoicePicker();
});
// Release completed dropdown choices so the next arrow navigates the forecast.
document.addEventListener("change", event => {
  if (event.target?.tagName === "SELECT") queueMicrotask(() => event.target.blur());
}, true);
document.addEventListener("keydown", event => {
  if (!choicePicker.hidden) {
    if (event.key === "Escape") { event.preventDefault(); closeChoicePicker(); }
    if (event.key === "Tab") {
      const buttons = [...choicePicker.querySelectorAll("button")];
      const first = buttons[0], last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    return;
  }
  if (event.key === "Escape" && !els.picker.hidden) { closeProductPicker(); return; }
  if (!els.picker.hidden || event.ctrlKey || event.metaKey || event.altKey) return;
  const target = event.target;
  const editing = target?.isContentEditable || target?.tagName === "TEXTAREA"
    || (target?.tagName === "INPUT" && !["range", "button", "checkbox", "radio"].includes(target.type));
  if (editing || target?.tagName === "SELECT") return;
  if (event.key === " " && target?.closest("button")) return;
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    moveFrame(event.key === "ArrowRight" ? 1 : -1);
    return;
  }
  if (event.key === " ") { event.preventDefault(); setPlaying(!state.playing); }
  if (event.key.toLowerCase() === "x") { event.preventDefault(); toggleExpansion(); }
  if (["1", "2", "3", "4", "5", "6"].includes(event.key)) selectPanel(Number(event.key) - 1);
}, true);

buildPanels();
seedBuiltInConfigurations();
renderConfigurationOptions("GFS US");
state.panels.forEach((_, index) => loadPanel(index));
