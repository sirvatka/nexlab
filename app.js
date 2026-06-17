const COD_ENDPOINT = "https://weather.cod.edu/datapoints/forecast/get-files.php";

const models = [
  { id: "HRRR", label: "HRRR", title: "High-Resolution Rapid Refresh", color: "#f2c94c", cycleHours: Array.from({ length: 24 }, (_, i) => i), fullHour: 48 },
  { id: "RAP", label: "RAP", title: "Rapid Refresh", color: "#f05a4f", cycleHours: Array.from({ length: 24 }, (_, i) => i), fullHour: 51 },
  { id: "NAM", label: "NAM", title: "North American Mesoscale", color: "#58c783", cycleHours: [0, 6, 12, 18], fullHour: 84 },
  { id: "NAMNST", label: "NAMNST", title: "NAM Nest", color: "#36d7c7", cycleHours: [0, 6, 12, 18], fullHour: 60 },
  { id: "GFS", label: "GFS", title: "Global Forecast System", color: "#58b9ef", cycleHours: [0, 6, 12, 18], fullHour: 384 },
  { id: "ECMWF", label: "ECMWF", title: "ECMWF", color: "#a68cff", cycleHours: [0, 6, 12, 18], fullHour: 240 },
  { id: "RDPS", label: "RDPS", title: "Regional Deterministic Prediction System", color: "#ff9f43", cycleHours: [0, 6, 12, 18], fullHour: 84 },
  { id: "GDPS", label: "GDPS", title: "Global Deterministic Prediction System", color: "#2dd4bf", cycleHours: [0, 12], fullHour: 240 },
  { id: "GEFS", label: "GEFS", title: "Global Ensemble Forecast System", color: "#c084fc", cycleHours: [0, 6, 12, 18], fullHour: 384 }
];

const regionNames = {
  NA: "North America",
  US: "Continental U.S.",
  WLD: "World",
  AO: "Atlantic Ocean",
  PO: "Pacific Ocean",
  CA: "Canada",
  FLT1: "Floater 1",
  FLT2: "Floater 2",
  FLT3: "Floater 3",
  WCAN: "Western Canada",
  AK: "Alaska",
  CGP: "Central Great Plains",
  GBSN: "Great Basin",
  GL: "Great Lakes",
  MA: "Mid-Atlantic",
  MW: "Midwest",
  NE: "Northeast",
  NIL: "Northern Illinois",
  NGP: "Northern Plains",
  NW: "Northwest",
  SE: "Southeast",
  SGP: "Southern Plains",
  SW: "Southwest"
};

const modelRegions = {
  HRRR: ["NW", "SW", "SE", "NE", "GBSN", "MA", "GL", "MW", "NGP", "CGP", "SGP", "NIL", "FLT1", "FLT2", "FLT3"],
  RAP: ["US", "NW", "SW", "SE", "NE", "GBSN", "MA", "GL", "MW", "NGP", "CGP", "SGP", "NIL", "FLT1", "FLT2", "FLT3"],
  NAM: ["US", "WCAN", "AK", "NW", "SW", "SE", "NE", "GBSN", "MA", "GL", "MW", "NGP", "CGP", "SGP", "NIL", "FLT1", "FLT2", "FLT3"],
  NAMNST: ["NW", "SW", "SE", "NE", "GBSN", "MA", "GL", "MW", "NGP", "CGP", "SGP", "NIL", "FLT1", "FLT2", "FLT3"],
  GFS: ["NA", "US", "WLD", "AO", "PO", "AK", "WCAN", "NE", "MA", "SE", "NW", "GBSN", "SW", "GL", "MW", "NGP", "CGP", "SGP", "NIL", "FLT1", "FLT2", "FLT3"],
  ECMWF: ["NA", "US", "WLD", "AO", "NW", "SW", "NE", "MA", "SE", "GL", "MW", "NGP", "CGP", "SGP", "NIL", "FLT1", "FLT2", "FLT3"],
  RDPS: ["US", "CA", "WCAN", "NW", "NE", "GBSN", "MA", "GL", "MW", "NGP", "CGP", "NIL", "FLT1", "FLT2", "FLT3"],
  GDPS: ["NA", "US", "NIL", "FLT1", "FLT2", "FLT3"],
  GEFS: ["NA", "US", "PO", "NE", "MA", "SE", "GL", "MW", "NGP", "CGP", "SGP", "FLT1", "FLT2", "FLT3"]
};

const levelLabels = {
  "2pvu": "Dynamic Tropopause",
  "250": "250mb",
  "300": "300mb",
  "500": "500mb",
  "700": "700mb",
  "850": "850mb",
  "925": "925mb",
  sfc: "Surface",
  con: "Convective",
  prec: "Precipitation",
  winter: "Winter"
};

const levelOrder = ["2pvu", "250", "300", "500", "700", "850", "925", "sfc", "con", "prec", "winter"];

const productNames = {
  pres: "Pressure @ 2PVU",
  spd: "Wind Speed",
  spdsa: "Std. Wind Speed Anomalies",
  uwndsa: "Std. U-Wind Anomalies",
  meanwind: "Mean Wind",
  hghtens: "Spaghetti Plot",
  windens: "Ensemble Wind",
  hgtsa: "Std. Hgt. Anomalies",
  temp: "Temperature",
  meantemp: "Mean Temperature",
  tempens: "Ensemble Temperature",
  tempsa: "Std. Temp Anomalies",
  tempanom: "Temp Anomalies",
  dewp: "Dewpoint Temp.",
  rhum: "Relative Humidity",
  thetae: "Theta-E",
  wetblb: "Wet Bulb Temp.",
  "30mbdewp": "Mixed Dewpoint (SFC-30mb AGL)",
  tadv: "Temperature Advection",
  avort: "Vorticity",
  vvel: "Vertical Velocity",
  fronto: "Frontogenesis",
  vis: "SFC Visibility",
  gust: "Wind Gust",
  mslpsa: "Std. MSLP Anomalies",
  prec: "SLP and Precipitation",
  meanprec: "Mean SLP and Precipitation",
  cprec: "Convective Precip.",
  precacc: "Total Precip. Accumulation",
  meanprecacc: "Mean Precip. Accumulation",
  paccens: "Ensemble Prec. Acc.",
  precacc1: "1hr Precip. Accumulation",
  precacc6: "6hr Precip. Accumulation",
  precacc12: "12hr Precip. Accumulation",
  precacc24: "24hr Precip. Accumulation",
  pwat: "Precipitable Water",
  pwatsa: "Std. PWAT Anomalies",
  radar: "Simulated Reflectivity",
  cloud: "Average Cloud Cover",
  irsat: "Sim. IR Satellite",
  sbcape: "Surface Based CAPE/CINH",
  cape1000: "Prob. of CAPE > 1000 J/kg",
  capeens: "Ensemble SBCAPE",
  mlcape: "Mean Layer CAPE/CINH",
  mucape: "Most Unstable CAPE/Shear",
  cape3km: "0-3km CAPE",
  lsi: "Lid Strength Index",
  mconv: "Moisture Flux Convergence",
  massconv: "Mass Convergence",
  stp: "Significant Tornado Parameter",
  scp: "Supercell Composite",
  meanscp: "Mean Supercell Composite",
  maxscp: "Max Supercell Composite",
  prob3kmehi: "Probability of 3km EHI",
  probscp: "Probability of SCP",
  scpens: "Ensemble SCP",
  "3kmehi": "3km EHI",
  "1kmehi": "1km EHI",
  lapse57: "Mid-Level Lapse Rate",
  lapse81: "Low-Level Lapse Rate",
  shear: "Bulk Shear (H5-SFC BWD)",
  uphly: "Updraft Helicity",
  uphlysw: "UD Helicity Swaths",
  uphlysw6: "6hr UD Helicity Swaths",
  "1kmhel": "0-1km SRH",
  "3kmhel": "0-3km SRH",
  vil: "Vertically Integrated Liquid",
  ltng: "Lightning Density",
  etop: "Simulated Echo Tops",
  hailswsfc: "Hail Swath (SFC)",
  hailswclm: "Hail Swath (CLM)",
  hailswsig01: "Hail Swath (SIG01)",
  ptype: "Precipitation Type",
  ptypens: "Ensemble Prec. Type",
  frzra: "Freezing Rain Accumulation",
  cthk: "Critical Thickness",
  dgzdepth: "DGZ Depth",
  snow: "Total Snow Accum. (10:1)",
  snow1: "1h Snow Accum. (10:1)",
  snow6: "6h Snow Accum. (10:1)",
  snow12: "12h Snow Accum. (10:1)",
  snow24: "24h Snow Accum. (10:1)",
  kuchsnow: "Total Snow Accum. (Kuchera)",
  kuchsnow1: "1h Snow Accum. (Kuchera)",
  kuchsnow6: "6h Snow Accum. (Kuchera)",
  kuchsnow12: "12h Snow Accum. (Kuchera)",
  kuchsnow24: "24h Snow Accum. (Kuchera)",
  kratio: "Kuchera Snow Ratio",
  meansnacc: "Mean Snow Accumulation",
  snens: "Ensemble Snow Acc."
};

const productHotkeys = {
  h: ["uphlysw"],
  l: ["ltng"],
  g: ["gust"],
  r: ["radar"],
  s: ["scp"],
  p: ["precacc", "prec"],
  P: ["stp"],
  V: [{ id: "avort", level: "500" }],
  "7": [{ id: "vvel", level: "700" }],
  b: ["sbcape"],
  m: ["mlcape"],
  "@": [{ id: "spd", level: "250" }],
  "%": [{ id: "spd", level: "500" }],
  "&": [{ id: "spd", level: "700" }],
  "*": [{ id: "spd", level: "850" }],
  "(": [{ id: "spd", level: "925" }],
  "6": ["uphlysw6"],
  t: ["temp"],
  d: ["30mbdewp", "dewp"],
  e: ["thetae"],
  v: ["vil"],
  "0": ["cape3km"],
  "1": ["1kmhel"],
  "3": ["3kmhel"]
};

const modelProductCatalog = {
  HRRR: {
    "700": ["vvel"],
    sfc: ["temp", "dewp", "rhum", "thetae", "vis", "gust", "avort"],
    con: ["sbcape", "mlcape", "mucape", "cape3km", "stp", "scp", "uphly", "uphlysw", "uphlysw6", "hailswsfc", "hailswclm", "hailswsig01", "3kmhel", "1kmhel", "vil", "ltng", "etop"],
    prec: ["precacc", "precacc6", "precacc12", "cloud", "radar"],
    winter: ["frzra", "ptype", "dgzdepth", "snow", "snow6", "snow12", "kuchsnow", "kuchsnow6", "kuchsnow12", "kratio"]
  },
  RAP: {
    "250": ["spd", "rhum"],
    "500": ["spd", "avort", "temp", "vvel", "rhum"],
    "700": ["spd", "temp", "avort", "vvel", "rhum"],
    "850": ["spd", "thetae", "temp", "tadv", "dewp", "vvel", "rhum"],
    "925": ["spd", "thetae", "temp", "rhum"],
    sfc: ["temp", "dewp", "wetblb", "rhum", "thetae", "30mbdewp", "avort"],
    con: ["sbcape", "mlcape", "mucape", "cape3km", "lsi", "mconv", "massconv", "stp", "scp", "3kmhel", "1kmhel", "3kmehi", "1kmehi", "lapse57", "lapse81"],
    prec: ["prec", "cprec", "precacc", "precacc6", "precacc12", "pwat", "radar"],
    winter: ["snow", "snow6", "snow12", "kuchsnow", "kuchsnow6", "kuchsnow12", "kratio", "dgzdepth", "frzra", "ptype", "cthk"]
  },
  NAM: {
    "250": ["spd", "rhum"],
    "500": ["spd", "avort", "temp", "vvel", "rhum"],
    "700": ["spd", "avort", "temp", "fronto", "vvel", "rhum"],
    "850": ["spd", "thetae", "temp", "tadv", "dewp", "fronto", "vvel", "rhum"],
    "925": ["spd", "thetae", "temp", "rhum"],
    sfc: ["temp", "dewp", "rhum", "thetae", "wetblb", "30mbdewp", "avort"],
    con: ["sbcape", "mlcape", "mucape", "lsi", "mconv", "massconv", "stp", "scp", "3kmhel", "1kmhel", "3kmehi", "1kmehi", "lapse57", "lapse81"],
    prec: ["prec", "cprec", "precacc", "precacc6", "precacc12", "precacc24", "pwat", "radar", "cloud"],
    winter: ["ptype", "frzra", "cthk", "snow", "snow6", "snow12", "snow24", "kuchsnow", "kuchsnow6", "kuchsnow12", "kuchsnow24", "kratio"]
  },
  NAMNST: {
    "700": ["vvel"],
    sfc: ["temp", "dewp", "rhum", "thetae", "gust"],
    con: ["sbcape", "mlcape", "mucape", "scp", "stp", "uphlysw", "uphlysw6", "1kmhel", "3kmhel"],
    prec: ["precacc", "precacc6", "precacc12", "precacc24", "radar", "irsat"],
    winter: ["snow", "snow6", "snow12", "snow24", "kuchsnow", "kuchsnow6", "kuchsnow12", "kuchsnow24", "kratio", "ptype", "frzra"]
  },
  ECMWF: {
    "250": ["spd", "rhum"],
    "500": ["spd", "temp", "avort", "rhum"],
    "700": ["spd", "temp", "rhum"],
    "850": ["spd", "temp", "dewp", "thetae", "tadv", "rhum"],
    "925": ["spd", "temp", "thetae", "rhum"],
    sfc: ["temp", "dewp", "thetae"],
    con: ["mucape", "shear"],
    prec: ["prec", "precacc", "pwat"],
    winter: ["kuchsnow", "kratio", "cthk"]
  },
  RDPS: {
    "250": ["spd"],
    "500": ["spd", "temp", "avort", "vvel", "rhum"],
    "700": ["spd", "temp", "avort", "vvel", "rhum"],
    "850": ["spd", "temp", "dewp", "thetae", "tadv", "vvel", "rhum"],
    "925": ["spd", "temp", "thetae", "rhum"],
    sfc: ["temp", "dewp", "thetae", "wetblb", "avort"],
    con: ["sbcape"],
    prec: ["precacc", "precacc6", "precacc12", "precacc24", "pwat", "cloud"],
    winter: ["ptype", "snow", "snow6", "snow12", "snow24", "kuchsnow", "kuchsnow6", "kuchsnow12", "kuchsnow24", "kratio", "cthk"]
  },
  GDPS: {
    "250": ["spd"],
    "500": ["spd", "temp", "avort", "vvel", "rhum"],
    "700": ["spd", "temp", "avort", "vvel", "rhum"],
    "850": ["spd", "temp", "dewp", "thetae", "tadv", "vvel", "rhum"],
    "925": ["spd", "temp", "thetae", "rhum"],
    sfc: ["temp", "dewp", "thetae", "wetblb", "avort"],
    con: ["sbcape"],
    prec: ["precacc", "precacc6", "precacc12", "precacc24", "pwat", "cloud"],
    winter: ["ptype", "snow", "snow6", "snow12", "snow24", "kuchsnow", "kuchsnow6", "kuchsnow12", "kuchsnow24", "kratio", "cthk"]
  },
  GFS: {
    "2pvu": ["pres"],
    "250": ["spd", "rhum"],
    "500": ["spd", "avort", "temp", "vvel", "rhum"],
    "700": ["spd", "avort", "temp", "vvel", "rhum"],
    "850": ["spd", "thetae", "temp", "tadv", "dewp", "vvel", "rhum"],
    "925": ["spd", "thetae", "temp", "rhum"],
    sfc: ["temp", "dewp", "rhum", "thetae", "wetblb", "30mbdewp", "vis", "avort"],
    con: ["sbcape", "mlcape", "mucape", "lsi", "scp", "3kmhel", "3kmehi", "lapse57", "lapse81"],
    prec: ["prec", "radar", "cprec", "precacc", "precacc6", "precacc12", "precacc24", "pwat", "cloud"],
    winter: ["ptype", "snow", "snow6", "snow12", "snow24", "kuchsnow", "kuchsnow6", "kuchsnow12", "kuchsnow24", "kratio", "frzra", "cthk"]
  },
  GEFS: {
    "500": ["meanwind", "hghtens", "windens"],
    "850": ["meantemp", "tempens"],
    con: ["cape1000", "capeens", "prob3kmehi", "meanscp", "maxscp", "probscp", "scpens"],
    prec: ["meanprec", "meanprecacc", "paccens"],
    winter: ["ptypens", "meansnacc", "snens"]
  }
};

const state = {
  model: "HRRR",
  region: "MW",
  product: "radar",
  productLevel: "prec",
  run: "0",
  actualRun: "",
  targetValidTime: null,
  frameIndex: 0,
  frames: [],
  validtimes: [],
  imageInfo: { width: 800, height: 600 },
  productAvailability: new Map(),
  runCompletion: new Map(),
  openProductLevels: new Set(["prec"]),
  playing: false,
  direction: 1,
  timer: null,
  refreshTimer: null,
  refreshMs: 60000,
  requestKey: 0,
  availabilityKey: 0,
  runCompletionKey: 0
};

const els = {
  viewer: document.querySelector(".viewer"),
  canvas: document.getElementById("weatherCanvas"),
  image: document.getElementById("modelImage"),
  stage: document.querySelector(".image-stage"),
  title: document.getElementById("title"),
  caption: document.getElementById("caption"),
  captionMain: document.getElementById("captionMain"),
  captionRun: document.getElementById("captionRun"),
  slider: document.getElementById("frameSlider"),
  playIcon: document.getElementById("playIcon"),
  loadingStatus: document.getElementById("loadingStatus"),
  runPicker: document.getElementById("runPicker"),
  frameInfoButton: document.getElementById("frameInfoButton"),
  speedSlider: document.getElementById("speedSlider"),
  firstHold: document.getElementById("firstHold"),
  lastHold: document.getElementById("lastHold"),
  loopMode: document.getElementById("loopMode"),
  preloadToggle: document.getElementById("preloadToggle"),
  autoRefreshToggle: document.getElementById("autoRefreshToggle"),
  frameTicks: document.getElementById("frameTicks"),
  sliderMarker: document.getElementById("sliderMarker"),
  expandViewer: document.getElementById("expandViewer"),
  hotkeyHelp: document.getElementById("hotkeyHelp"),
  closeHotkeyHelp: document.getElementById("closeHotkeyHelp")
};

const ctx = els.canvas.getContext("2d");

function selectedModel() {
  return models.find((item) => item.id === state.model) || models[0];
}

function selectedRegion() {
  return regionsForSelection().find((item) => item.id === state.region) || regionsForSelection()[0];
}

function selectedProduct() {
  const products = productsForSelection();
  return products.find((item) => item.id === state.product && item.level === state.productLevel)
    || products.find((item) => item.id === state.product)
    || products[0];
}

function endpointUrl(product = selectedProduct(), run = state.run) {
  const params = [state.model, run, state.region, product.level, product.id].join("-");
  return `${COD_ENDPOINT}?parms=${encodeURIComponent(params)}`;
}

function buttonGrid(containerId, items, key) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  items.forEach((item) => {
    const button = document.createElement("button");
    button.className = "option";
    button.type = "button";
    button.dataset.value = item.id;
    button.innerHTML = `<span>${item.label}</span>`;
    button.addEventListener("click", () => {
      if (button.disabled) return;
      rememberCurrentValidTime();
      state[key] = item.id;
      state.direction = 1;
      if (key === "model" || key === "region") {
        state.run = "0";
        state.actualRun = "";
        state.productAvailability.clear();
        ensureSelectedRegion();
        ensureSelectedProduct();
        state.openProductLevels = new Set([selectedProduct().level]);
        renderRegionButtons();
        renderRunPicker();
        probeProductAvailability();
      }
      renderLabels();
      loadFrames();
    });
    container.appendChild(button);
  });
}

function renderRegionButtons() {
  const container = document.getElementById("regionButtons");
  container.innerHTML = "";
  regionsForSelection().forEach((item) => {
    const button = document.createElement("button");
    button.className = "option";
    button.type = "button";
    button.dataset.value = item.id;
    button.innerHTML = `<span>${item.label}</span>`;
    button.addEventListener("click", () => {
      rememberCurrentValidTime();
      state.region = item.id;
      state.run = "0";
      state.actualRun = "";
      state.direction = 1;
      state.productAvailability.clear();
      state.runCompletion.clear();
      renderLabels();
      renderRunPicker();
      probeProductAvailability();
      loadFrames();
    });
    container.appendChild(button);
  });
}

function regionsForSelection() {
  const ids = modelRegions[state.model] || modelRegions.GFS;
  return ids
    .map((id) => ({ id, label: regionNames[id] || id }))
    .sort((a, b) => {
      if (a.id === "NA") return -1;
      if (b.id === "NA") return 1;
      if (a.id === "US") return b.id === "NA" ? 1 : -1;
      if (b.id === "US") return a.id === "NA" ? -1 : 1;
      return a.label.localeCompare(b.label);
    });
}

function ensureSelectedRegion() {
  const regions = regionsForSelection();
  if (!regions.some((region) => region.id === state.region)) {
    const preferred = regions.find((region) => region.id === "US") || regions.find((region) => region.id === "MW") || regions[0];
    state.region = preferred.id;
  }
}

function renderProductGroups() {
  const container = document.getElementById("productButtons");
  container.innerHTML = "";
  groupProductsByLevel().forEach((group) => {
    const section = document.createElement("div");
    section.className = "product-accordion";
    const isOpen = state.openProductLevels.has(group.level);
    section.classList.toggle("open", isOpen);

    const header = document.createElement("button");
    header.className = "product-accordion-header";
    header.type = "button";
    header.setAttribute("aria-expanded", String(isOpen));
    header.innerHTML = `<span>${levelLabels[group.level] || group.level}</span>`;
    header.addEventListener("click", () => {
      if (state.openProductLevels.has(group.level)) {
        state.openProductLevels.clear();
      } else {
        state.openProductLevels = new Set([group.level]);
      }
      renderProductGroups();
      activeButtons();
    });
    section.appendChild(header);

    const list = document.createElement("div");
    list.className = "product-accordion-list";
    group.products.forEach((product) => {
      const button = document.createElement("button");
      const count = state.productAvailability.get(productKey(product));
      button.className = "option product-option";
      button.type = "button";
      button.dataset.value = `${product.level}/${product.id}`;
      button.dataset.productId = product.id;
      button.dataset.level = product.level;
      button.disabled = count === 0;
      button.innerHTML = `<span>${product.label}</span>`;
      button.addEventListener("click", () => {
        if (button.disabled) return;
        rememberCurrentValidTime();
        state.product = product.id;
        state.productLevel = product.level;
        state.openProductLevels = new Set([product.level]);
        state.direction = 1;
        renderLabels();
        renderProductGroups();
        loadFrames();
      });
      list.appendChild(button);
    });
    section.appendChild(list);
    container.appendChild(section);
  });
}

function groupProductsByLevel() {
  const levels = [];
  productsForSelection().forEach((product) => {
    let group = levels.find((item) => item.level === product.level);
    if (!group) {
      group = { level: product.level, products: [] };
      levels.push(group);
    }
    group.products.push(product);
  });
  return levels;
}

function productsForSelection() {
  const catalog = modelProductCatalog[state.model] || modelProductCatalog.GFS;
  const products = [];
  levelOrder.forEach((level) => {
    (catalog[level] || []).forEach((id) => {
      products.push({ id, level, label: productNames[id] || id });
    });
  });
  return products;
}

function ensureSelectedProduct() {
  const products = productsForSelection();
  if (!products.some((product) => product.id === state.product && product.level === state.productLevel)) {
    const preferred = products.find((product) => product.id === "temp") || products[0];
    state.product = preferred.id;
    state.productLevel = preferred.level;
    state.openProductLevels = new Set([preferred.level]);
  }
}

function productKey(product) {
  return `${product.level}/${product.id}`;
}

function renderRunPicker() {
  els.runPicker.innerHTML = "";
  const actual = state.actualRun || extractRunFromUrl(state.frames[0]);
  const latest = document.createElement("button");
  latest.className = "run";
  latest.type = "button";
  latest.dataset.run = "0";
  applyRunButtonContent(latest, formatRunCompact(actual) || "Latest", actual);
  latest.addEventListener("click", () => selectRun("0"));
  els.runPicker.appendChild(latest);

  if (!actual) {
    activeButtons();
    return;
  }

  const candidates = buildRunCandidates(actual, selectedModel().cycleHours).filter((run) => run !== actual).slice(0, 7);
  candidates.forEach((run) => {
    const button = document.createElement("button");
    button.className = "run";
    button.type = "button";
    button.dataset.run = run;
    applyRunButtonContent(button, formatRunCompact(run), run);
    button.title = formatRunLong(run);
    button.addEventListener("click", () => selectRun(run));
    els.runPicker.appendChild(button);
  });
  activeButtons();
}

function applyRunButtonContent(button, label, run) {
  const completion = state.runCompletion.get(run);
  button.classList.toggle("full", Boolean(completion?.full));
  button.classList.toggle("partial", Boolean(completion && !completion.full));
  const progress = completion ? `${completion.percent}%` : "--";
  button.innerHTML = `<span class="run-name">${label}</span><span class="run-progress">${progress}</span>`;
}

function selectRun(run) {
  rememberCurrentValidTime();
  state.run = run;
  state.direction = 1;
  renderLabels();
  loadFrames();
}

function stepRun(direction) {
  const runs = availableRunOrder();
  if (!runs.length) return;
  rememberCurrentValidTime();
  const actual = state.actualRun || runs[0];
  const current = state.run === "0" ? actual : state.run;
  let index = runs.indexOf(current);
  if (index < 0) index = 0;
  const nextIndex = Math.min(Math.max(index + direction, 0), runs.length - 1);
  if (nextIndex === index && state.run !== "0") return;
  state.run = runs[nextIndex] === actual ? "0" : runs[nextIndex];
  state.direction = 1;
  renderLabels();
  loadFrames();
}

function availableRunOrder() {
  const actual = state.actualRun || extractRunFromUrl(state.frames[0]);
  if (!actual) return [];
  return buildRunCandidates(actual, selectedModel().cycleHours).slice(0, 8);
}

function buildRunCandidates(run, cycleHours) {
  const date = parseRun(run);
  if (!date) return [];
  const hours = cycleHours && cycleHours.length ? cycleHours : [0, 6, 12, 18];
  const candidates = [];
  const cursor = new Date(date.getTime());
  for (let day = 0; day < 5; day++) {
    for (const hour of [...hours].sort((a, b) => b - a)) {
      const item = new Date(Date.UTC(cursor.getUTCFullYear(), cursor.getUTCMonth(), cursor.getUTCDate(), hour));
      if (item <= date) candidates.push(formatRunId(item));
    }
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return [...new Set(candidates)];
}

async function probeRunCompletion() {
  const actual = state.actualRun || extractRunFromUrl(state.frames[0]);
  if (!actual) return;
  const key = ++state.runCompletionKey;
  const product = selectedProduct();
  const candidates = buildRunCandidates(actual, selectedModel().cycleHours).slice(0, 8);
  const runs = [...new Set([actual, ...candidates])];
  runs.forEach((run) => state.runCompletion.set(run, null));
  renderRunPicker();

  const results = await Promise.all(runs.map(async (run) => {
    try {
      const response = await fetch(endpointUrl(product, run), { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(String(response.status));
      const data = await response.json();
      const files = Array.isArray(data.files) ? data.files : [];
      return { run, files };
    } catch {
      return { run, files: [] };
    }
  }));
  if (key !== state.runCompletionKey) return;

  results.forEach((result) => {
    const targetHour = expectedRunHour(result.run, result.files);
    const maxHour = maxForecastHour(result.files);
    const percent = targetHour ? Math.min(100, Math.round(maxHour / targetHour * 100)) : 0;
    state.runCompletion.set(result.run, {
      maxHour,
      targetHour,
      percent,
      full: maxHour >= targetHour && targetHour > 0
    });
  });
  renderRunPicker();
  renderLabels();
}

function probeProductAvailability() {
  const key = ++state.availabilityKey;
  const products = productsForSelection();
  products.forEach((product) => state.productAvailability.set(productKey(product), null));
  renderProductAvailability();

  Promise.all(products.map(async (product) => {
    try {
      const response = await fetch(endpointUrl(product, "0"), { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(String(response.status));
      const data = await response.json();
      return { id: product.id, level: product.level, count: Array.isArray(data.files) ? data.files.length : 0 };
    } catch {
      return { id: product.id, level: product.level, count: 0 };
    }
  })).then((results) => {
    if (key !== state.availabilityKey) return;
    results.forEach((result) => state.productAvailability.set(productKey(result), result.count));
    if ((state.productAvailability.get(productKey(selectedProduct())) || 0) === 0) {
      const firstAvailable = results.find((result) => result.count > 0);
      if (firstAvailable) {
        rememberCurrentValidTime();
        state.product = firstAvailable.id;
        state.productLevel = firstAvailable.level;
        state.openProductLevels = new Set([firstAvailable.level]);
        loadFrames();
      }
    }
    renderProductAvailability();
    activeButtons();
  });
}

function renderProductAvailability() {
  renderProductGroups();
}

function activeButtons() {
  document.querySelectorAll(".option").forEach((button) => {
    const value = button.dataset.value;
    const isProduct = Boolean(button.dataset.productId);
    button.classList.toggle("active", isProduct
      ? button.dataset.productId === state.product && button.dataset.level === state.productLevel
      : [state.model, state.region].includes(value));
  });
  document.querySelectorAll(".run").forEach((button) => {
    button.classList.toggle("active", button.dataset.run === state.run || (state.run === "0" && button.dataset.run === "0"));
  });
}

async function loadFrames() {
  const requestKey = ++state.requestKey;
  const model = selectedModel();
  const product = selectedProduct();
  const region = selectedRegion();
  els.loadingStatus.hidden = false;
  els.loadingStatus.textContent = "Loading COD model frames...";
  els.stage.classList.remove("using-fallback");

  try {
    const response = await fetch(endpointUrl(), { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`COD returned ${response.status}`);
    const data = await response.json();
    if (requestKey !== state.requestKey) return;

    state.frames = Array.isArray(data.files) ? data.files : [];
    state.validtimes = Array.isArray(data.validtimes) ? data.validtimes : [];
    state.imageInfo = data.img || { width: 800, height: 600 };
    state.frameIndex = closestFrameIndex(state.targetValidTime, state.validtimes);
    state.direction = 1;
    const loadedRun = extractRunFromUrl(state.frames[0]);
    if (state.run === "0" || !state.actualRun) {
      state.actualRun = loadedRun || state.actualRun;
    }

    if (!state.frames.length) {
      els.loadingStatus.textContent = `No COD frames for ${model.label} ${region.id} ${product.level}/${product.id}; showing local fallback.`;
      els.stage.classList.add("using-fallback");
      drawCanvas();
    } else {
      els.loadingStatus.textContent = data.warn || "Loaded COD model frames.";
      if (els.preloadToggle.checked) preloadFrames();
      setTimeout(() => {
        if (requestKey === state.requestKey && state.frames.length) els.loadingStatus.hidden = true;
      }, 1400);
    }
  } catch (error) {
    if (requestKey !== state.requestKey) return;
    state.frames = [];
    els.loadingStatus.textContent = `Could not fetch COD frames: ${error.message}. Showing local fallback.`;
    els.stage.classList.add("using-fallback");
    drawCanvas();
  }

  renderRunPicker();
  probeRunCompletion();
  renderLabels();
  renderFrame();
}

async function refreshFrames() {
  if (!els.autoRefreshToggle.checked || !state.frames.length) return;
  const requestKey = state.requestKey;
  const previousSignature = frameSignature(state.frames);
  const previousValid = currentValidTime();
  try {
    const response = await fetch(endpointUrl(), { headers: { Accept: "application/json" }, cache: "no-store" });
    if (!response.ok) throw new Error(`COD returned ${response.status}`);
    const data = await response.json();
    if (requestKey !== state.requestKey) return;
    const files = Array.isArray(data.files) ? data.files : [];
    const signature = frameSignature(files);
    if (signature === previousSignature) {
      probeRunCompletion();
      return;
    }
    state.frames = files;
    state.validtimes = Array.isArray(data.validtimes) ? data.validtimes : [];
    state.imageInfo = data.img || state.imageInfo;
    state.actualRun = state.run === "0" ? (extractRunFromUrl(state.frames[0]) || state.actualRun) : state.actualRun;
    state.frameIndex = closestFrameIndex(previousValid, state.validtimes);
    if (els.preloadToggle.checked) preloadFrames();
    els.loadingStatus.hidden = false;
    els.loadingStatus.textContent = `Auto refresh: ${state.frames.length} images available.`;
    setTimeout(() => {
      els.loadingStatus.hidden = true;
    }, 1400);
    renderRunPicker();
    probeRunCompletion();
    renderLabels();
    renderFrame();
  } catch (error) {
    els.loadingStatus.hidden = false;
    els.loadingStatus.textContent = `Auto refresh failed: ${error.message}`;
  }
}

function frameSignature(frames) {
  if (!frames.length) return "0";
  return `${frames.length}|${frames[0]}|${frames[frames.length - 1]}`;
}

function scheduleAutoRefresh() {
  clearInterval(state.refreshTimer);
  state.refreshTimer = setInterval(refreshFrames, state.refreshMs);
}

function preloadFrames() {
  state.frames.forEach((src, index) => {
    if (index > 80) return;
    const img = new Image();
    img.decoding = "async";
    img.src = src;
  });
}

function renderLabels() {
  const model = selectedModel();
  const region = selectedRegion();
  const product = selectedProduct();
  els.title.textContent = `${model.label} - ${region.label} - ${product.label}`;
  activeButtons();
}

function renderFrame() {
  const model = selectedModel();
  const region = selectedRegion();
  const product = selectedProduct();
  const maxIndex = Math.max(0, state.frames.length - 1);
  state.frameIndex = Math.min(Math.max(0, state.frameIndex), maxIndex);
  els.slider.max = String(maxIndex);
  els.slider.step = "1";
  els.slider.value = String(state.frameIndex);

  const frameUrl = state.frames[state.frameIndex];
  const hour = getForecastHour(frameUrl, state.frameIndex);
  const validTime = formatValidTime(state.validtimes[state.frameIndex]);
  els.frameInfoButton.textContent = validTime ? `Valid: ${validTime}` : "Valid: unavailable";
  els.captionMain.textContent = `${model.label} | ${region.id} | ${product.level}/${product.id} | F${hour} | Valid: ${validTime || "unavailable"}`;
  els.captionRun.textContent = `Run Time: ${model.label} ${formatRunLong(displayedRun()) || "unavailable"}`;
  renderSliderMarker();
  renderFrameTicks();

  if (frameUrl) {
    els.stage.classList.remove("using-fallback");
    els.image.src = frameUrl;
    els.image.alt = `${model.label} ${region.label} ${product.label} forecast hour ${hour}`;
  } else {
    els.stage.classList.add("using-fallback");
    drawCanvas();
  }
}

function renderFrameTicks() {
  els.frameTicks.innerHTML = "";
  if (!state.frames.length) return;
  const count = Math.min(8, state.frames.length);
  for (let i = 0; i < count; i++) {
    const index = Math.round(i * (state.frames.length - 1) / Math.max(1, count - 1));
    const span = document.createElement("span");
    span.textContent = formatTickValidTime(state.validtimes[index]);
    span.style.left = sliderThumbLeft(index);
    els.frameTicks.appendChild(span);
  }
}

function renderSliderMarker() {
  els.sliderMarker.style.left = sliderThumbLeft(state.frameIndex);
  els.sliderMarker.querySelector("span").textContent = formatMarkerValidHour(state.validtimes[state.frameIndex]);
}

function sliderThumbLeft(index) {
  const max = Math.max(1, Number(els.slider.max));
  const percent = state.frames.length ? index / max * 100 : 0;
  const thumbOffset = 8 - percent * 0.16;
  return `calc(${percent}% + ${thumbOffset}px)`;
}

function getForecastHour(url, fallbackIndex) {
  const match = String(url || "").match(/_(\d{3})\.png$/);
  if (match) return match[1];
  return String(fallbackIndex).padStart(3, "0");
}

function currentValidTime() {
  const value = state.validtimes[state.frameIndex];
  return Number.isFinite(Number(value)) ? Number(value) : null;
}

function rememberCurrentValidTime() {
  const value = currentValidTime();
  if (value != null) state.targetValidTime = value;
}

function closestFrameIndex(target, validtimes) {
  if (!Array.isArray(validtimes) || !validtimes.length) return 0;
  if (target == null || !Number.isFinite(Number(target))) return 0;
  let bestIndex = 0;
  let bestDistance = Infinity;
  validtimes.forEach((valid, index) => {
    const distance = Math.abs(Number(valid) - Number(target));
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });
  return bestIndex;
}

function maxForecastHour(files) {
  return files.reduce((max, file) => {
    const match = String(file || "").match(/_(\d{3})\.png$/);
    const hour = match ? Number(match[1]) : 0;
    return Math.max(max, Number.isFinite(hour) ? hour : 0);
  }, 0);
}

function inferTargetHour(files) {
  return Math.max(1, maxForecastHour(files));
}

function expectedRunHour(run, files = []) {
  const model = selectedModel();
  const date = parseRun(run);
  if (model.id === "HRRR" && date) {
    return [0, 6, 12, 18].includes(date.getUTCHours()) ? 48 : 18;
  }
  return model.fullHour || inferTargetHour(files);
}

function advanceFrame() {
  const max = Number(els.slider.max);
  if (!max) return;
  const mode = els.loopMode.value;
  const atStart = state.frameIndex <= 0;
  const atEnd = state.frameIndex >= max;

  if (mode === "once" && atEnd) {
    setPlaying(false);
    return;
  }

  if (mode === "bounce") {
    if (atEnd) state.direction = -1;
    if (atStart) state.direction = 1;
    state.frameIndex += state.direction;
  } else {
    state.frameIndex = atEnd ? 0 : state.frameIndex + 1;
  }
  renderFrame();
}

function scheduleNextFrame() {
  clearTimeout(state.timer);
  if (!state.playing) return;
  const max = Number(els.slider.max);
  const atStart = state.frameIndex === 0;
  const atEnd = state.frameIndex === max;
  let delay = Number(els.speedSlider.value);
  if (atStart) delay += Number(els.firstHold.value || 0);
  if (atEnd) delay += Number(els.lastHold.value || 0);
  state.timer = setTimeout(() => {
    advanceFrame();
    scheduleNextFrame();
  }, delay);
}

function setPlaying(value) {
  state.playing = value;
  clearTimeout(state.timer);
  if (value) {
    els.playIcon.setAttribute("d", "M8 5h3v14H8V5Zm5 0h3v14h-3V5Z");
    scheduleNextFrame();
  } else {
    els.playIcon.setAttribute("d", "M8 5v14l11-7L8 5Z");
  }
}

function extractRunFromUrl(url) {
  const match = String(url || "").match(/forecast\/[^/]+\/(\d{10})\//);
  return match ? match[1] : "";
}

function parseRun(run) {
  const match = String(run || "").match(/^(\d{4})(\d{2})(\d{2})(\d{2})$/);
  if (!match) return null;
  return new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4])));
}

function formatRunId(date) {
  return `${date.getUTCFullYear()}${pad2(date.getUTCMonth() + 1)}${pad2(date.getUTCDate())}${pad2(date.getUTCHours())}`;
}

function formatRunCompact(run) {
  const date = parseRun(run);
  if (!date) return run || "";
  return `${pad2(date.getUTCDate())}/${pad2(date.getUTCHours())}Z`;
}

function formatRunLong(run) {
  const date = parseRun(run);
  if (!date) return run || "Latest run";
  return `${date.toLocaleDateString(undefined, { month: "short", day: "numeric", timeZone: "UTC" })} ${pad2(date.getUTCHours())}Z`;
}

function formatValidTime(value) {
  if (!value) return "";
  const date = new Date(Number(value) * 1000);
  if (Number.isNaN(date.getTime())) return "";
  const local = date.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });
  const utc = `${pad2(date.getUTCDate())}/${pad2(date.getUTCHours())}Z`;
  return `${local} (${utc})`;
}

function formatTickValidTime(value) {
  if (!value) return "VT --";
  const date = new Date(Number(value) * 1000);
  if (Number.isNaN(date.getTime())) return "VT --";
  return `VT ${pad2(date.getUTCDate())}/${pad2(date.getUTCHours())}Z`;
}

function formatMarkerValidHour(value) {
  if (!value) return "--Z";
  const date = new Date(Number(value) * 1000);
  if (Number.isNaN(date.getTime())) return "--Z";
  return `${pad2(date.getUTCHours())}Z`;
}

function displayedRun() {
  if (state.run && state.run !== "0") return state.run;
  return state.actualRun || extractRunFromUrl(state.frames[0]);
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

els.image.addEventListener("load", () => {
  if (state.frames.length) els.loadingStatus.hidden = true;
});

els.image.addEventListener("error", () => {
  els.loadingStatus.hidden = false;
  els.loadingStatus.textContent = "The COD image did not load; showing local fallback.";
  els.stage.classList.add("using-fallback");
  drawCanvas();
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (!state.frames.length) drawCanvas();
});

document.getElementById("firstFrame").addEventListener("click", () => {
  state.frameIndex = 0;
  renderFrame();
});

document.getElementById("lastFrame").addEventListener("click", () => {
  state.frameIndex = Number(els.slider.max);
  renderFrame();
});

document.getElementById("prevFrame").addEventListener("click", () => {
  state.frameIndex = Math.max(0, state.frameIndex - 1);
  renderFrame();
});

document.getElementById("nextFrame").addEventListener("click", () => {
  state.frameIndex = Math.min(Number(els.slider.max), state.frameIndex + 1);
  renderFrame();
});

document.getElementById("playPause").addEventListener("click", () => setPlaying(!state.playing));

els.expandViewer.addEventListener("click", toggleViewerExpansion);

function toggleViewerExpansion() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    return;
  }
  if (els.viewer.requestFullscreen) {
    els.viewer.requestFullscreen().catch(() => {
      els.viewer.classList.toggle("expanded");
      updateExpandButton();
    });
    return;
  }
  els.viewer.classList.toggle("expanded");
  updateExpandButton();
}

document.addEventListener("fullscreenchange", updateExpandButton);

function updateExpandButton() {
  const expanded = Boolean(document.fullscreenElement) || els.viewer.classList.contains("expanded");
  els.expandViewer.title = expanded ? "Exit expanded view" : "Expand viewer";
  els.expandViewer.setAttribute("aria-label", expanded ? "Exit expanded view" : "Expand viewer");
}

els.slider.addEventListener("input", () => {
  state.frameIndex = Number(els.slider.value);
  renderFrame();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.hotkeyHelp.hidden) {
    event.preventDefault();
    closeHotkeyHelp();
    return;
  }
  if (event.key === "Escape" && els.viewer.classList.contains("expanded")) {
    els.viewer.classList.remove("expanded");
    updateExpandButton();
    return;
  }
  if (isTypingTarget(event.target)) return;
  if (event.ctrlKey && !event.altKey && !event.metaKey && event.key.toLowerCase() === "v") {
    event.preventDefault();
    selectProductShortcut([{ id: "avort", level: "sfc" }]);
    return;
  }
  if (event.ctrlKey && !event.altKey && !event.metaKey && event.key.toLowerCase() === "f") {
    event.preventDefault();
    selectRegionShortcut("FLT3");
    return;
  }
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === "?") {
    event.preventDefault();
    openHotkeyHelp();
    return;
  }
  if (event.key === " ") {
    event.preventDefault();
    if (event.shiftKey) {
      toggleRockMode();
    } else {
      setPlaying(!state.playing);
    }
    return;
  }
  if (event.key === "F") {
    event.preventDefault();
    selectRegionShortcut("FLT2");
    return;
  }
  const productShortcut = productHotkeys[event.key] || productHotkeys[event.key.toLowerCase()];
  if (productShortcut) {
    event.preventDefault();
    selectProductShortcut(productShortcut);
    return;
  }
  if (event.shiftKey) return;
  if (event.key.toLowerCase() === "x") {
    event.preventDefault();
    toggleViewerExpansion();
    return;
  }
  if (event.key.toLowerCase() === "u") {
    event.preventDefault();
    goToContinentalUS();
    return;
  }
  if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    selectRegionShortcut("FLT1");
    return;
  }
  if (event.key.toLowerCase() === "n") {
    event.preventDefault();
    selectRegionShortcut("NIL");
    return;
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    stepRun(1);
    return;
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    stepRun(-1);
    return;
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    state.frameIndex = Math.max(0, state.frameIndex - 1);
    renderFrame();
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    state.frameIndex = Math.min(Number(els.slider.max), state.frameIndex + 1);
    renderFrame();
  }
});

els.closeHotkeyHelp.addEventListener("click", closeHotkeyHelp);
els.hotkeyHelp.addEventListener("click", (event) => {
  if (event.target === els.hotkeyHelp) closeHotkeyHelp();
});

function openHotkeyHelp() {
  els.hotkeyHelp.hidden = false;
  els.closeHotkeyHelp.focus();
}

function closeHotkeyHelp() {
  els.hotkeyHelp.hidden = true;
}

function toggleRockMode() {
  els.loopMode.value = els.loopMode.value === "bounce" ? "forward" : "bounce";
  if (state.playing) scheduleNextFrame();
}

function selectRegionShortcut(regionId) {
  if (!regionsForSelection().some((region) => region.id === regionId)) {
    els.loadingStatus.hidden = false;
    els.loadingStatus.textContent = `${regionNames[regionId] || regionId} is not available for ${selectedModel().label}.`;
    return;
  }
  if (state.region === regionId) return;
  rememberCurrentValidTime();
  state.region = regionId;
  state.run = "0";
  state.actualRun = "";
  state.direction = 1;
  state.productAvailability.clear();
  state.runCompletion.clear();
  ensureSelectedProduct();
  renderRegionButtons();
  renderLabels();
  renderProductGroups();
  renderRunPicker();
  probeProductAvailability();
  loadFrames();
}

function selectProductShortcut(productIds) {
  const products = productsForSelection();
  const product = productIds
    .map((target) => findShortcutProduct(products, target))
    .find(Boolean);

  if (!product) {
    els.loadingStatus.hidden = false;
    els.loadingStatus.textContent = `${productShortcutLabel(productIds)} is not available for ${selectedModel().label}.`;
    return;
  }

  rememberCurrentValidTime();
  state.product = product.id;
  state.productLevel = product.level;
  state.openProductLevels = new Set([product.level]);
  state.direction = 1;
  renderLabels();
  renderProductGroups();
  loadFrames();
}

function findShortcutProduct(products, target) {
  if (typeof target === "string") {
    return products.find((item) => item.id === target);
  }
  return products.find((item) => item.id === target.id && item.level === target.level);
}

function productShortcutLabel(productIds) {
  return productIds.map((target) => {
    if (typeof target === "string") return productNames[target] || target;
    return `${levelLabels[target.level] || target.level} ${productNames[target.id] || target.id}`;
  }).join(" / ");
}

function goToContinentalUS() {
  if (!regionsForSelection().some((region) => region.id === "US")) {
    els.loadingStatus.hidden = false;
    els.loadingStatus.textContent = `Continental U.S. is not available for ${selectedModel().label}.`;
    return;
  }
  if (state.region === "US") return;
  rememberCurrentValidTime();
  state.region = "US";
  state.run = "0";
  state.actualRun = "";
  state.direction = 1;
  state.productAvailability.clear();
  state.runCompletion.clear();
  ensureSelectedProduct();
  renderRegionButtons();
  renderLabels();
  renderProductGroups();
  renderRunPicker();
  probeProductAvailability();
  loadFrames();
}

function isTypingTarget(target) {
  const tag = target?.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target?.isContentEditable;
}

[els.speedSlider, els.firstHold, els.lastHold, els.loopMode].forEach((control) => {
  control.addEventListener("input", () => {
    if (state.playing) scheduleNextFrame();
  });
});

els.preloadToggle.addEventListener("change", () => {
  if (els.preloadToggle.checked) preloadFrames();
});

els.autoRefreshToggle.addEventListener("change", () => {
  if (els.autoRefreshToggle.checked) refreshFrames();
});

function drawBaseMap(w, h) {
  const water = ctx.createLinearGradient(0, 0, w, h);
  water.addColorStop(0, "#0b1823");
  water.addColorStop(1, "#172433");
  ctx.fillStyle = water;
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#1d2d2b";
  ctx.beginPath();
  ctx.moveTo(w * .09, h * .18);
  ctx.lineTo(w * .82, h * .1);
  ctx.lineTo(w * .92, h * .34);
  ctx.lineTo(w * .83, h * .66);
  ctx.lineTo(w * .65, h * .78);
  ctx.lineTo(w * .29, h * .72);
  ctx.lineTo(w * .14, h * .55);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(207,220,230,.3)";
  ctx.lineWidth = 1;
  for (let i = 1; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(w * (.15 + i * .08), h * .17);
    ctx.lineTo(w * (.12 + i * .085), h * .72);
    ctx.stroke();
  }
  for (let i = 1; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(w * .12, h * (.2 + i * .08));
    ctx.bezierCurveTo(w * .36, h * (.18 + i * .08), w * .6, h * (.25 + i * .06), w * .88, h * (.22 + i * .075));
    ctx.stroke();
  }
}

function drawWeather(w, h) {
  const model = selectedModel();
  const product = selectedProduct();
  const cells = product.id === "temp" ? 30 : 20;
  for (let i = 0; i < cells; i++) {
    const x = w * (.15 + ((i * 73 + model.id.length * 17) % 680) / 1000);
    const y = h * (.19 + ((i * 47 + product.id.length * 23) % 470) / 1000);
    const radius = 52 + (i % 5) * 23;
    const gradient = ctx.createRadialGradient(x, y, 3, x, y, radius);
    gradient.addColorStop(0, hexToRgba(model.color, .9));
    gradient.addColorStop(.55, hexToRgba(model.color, .34));
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function drawCanvas() {
  const w = els.canvas.width;
  const h = els.canvas.height;
  const model = selectedModel();
  const region = selectedRegion();
  const product = selectedProduct();
  drawBaseMap(w, h);
  drawWeather(w, h);
  ctx.fillStyle = "rgba(5,8,12,.78)";
  ctx.fillRect(24, 20, 620, 92);
  ctx.fillStyle = "#f4f8fb";
  ctx.font = "900 31px Inter, Arial";
  ctx.fillText(`${model.label} Latest`, 42, 58);
  ctx.font = "700 18px Inter, Arial";
  ctx.fillStyle = "#aebdcc";
  ctx.fillText(`${region.label} | ${product.level}/${product.id} | local fallback`, 42, 90);
}

buttonGrid("modelButtons", models, "model");
renderRegionButtons();
renderProductGroups();
renderRunPicker();
renderLabels();
probeProductAvailability();
loadFrames();
scheduleAutoRefresh();
