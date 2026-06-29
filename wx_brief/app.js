const products = {
  "chi-surface": {
    section: "Local Weather",
    title: "Chicago (LOT) Surface Map",
    url: "https://weather.cod.edu/wxdata/surface/states/chi.sfc.gif",
    type: "surface-dashboard",
    fit: "contain"
  },
  "upper-air-500": {
    section: "Local Weather",
    title: "US 500mb Raw Upper-Air Plot",
    url: "https://weather.cod.edu/climate-decom/flanis/analysis/upper/index.php?type=US-500-raw-0",
    imageUrl: "https://weather.cod.edu/wxdata/upper/US/500/current/US500raw.gif",
    pdfUrl: "https://weather.cod.edu/wxdata/upper/US/pdf/current/US500.pdf",
    type: "upper-air",
    level: 500
  },
  "spc-day1": {
    section: "Severe Weather",
    title: "SPC Day 1 Categorical",
    url: "https://weather.cod.edu/wxdata/text/images/spc/co/day1/categorical/spccoday1.categorical.latest.png",
    type: "image"
  },
  "spc-day2": {
    section: "Severe Weather",
    title: "SPC Day 2 Categorical",
    url: "https://weather.cod.edu/wxdata/text/images/spc/co/day2/categorical/spccoday2.categorical.latest.png",
    type: "image"
  },
  "spc-day3": {
    section: "Severe Weather",
    title: "SPC Day 3 Categorical",
    url: "https://weather.cod.edu/wxdata/text/images/spc/co/day3/categorical/spccoday3.categorical.latest.png",
    type: "image"
  },
  "campus-weather": {
    section: "Local Weather",
    title: "Campus Weather",
    url: "https://weather.cod.edu/campusweather/",
    type: "external"
  },
  "iowa-state-meteogram": {
    section: "Local Weather",
    title: "Iowa State Meteorogram",
    url: "https://www.meteor.iastate.edu/~ckarsten/bufkit/image_loader.phtml?site=kord",
    type: "station"
  },
  "satrad-images": {
    section: "Local Weather",
    title: "Satrad Images",
    url: "https://weather.cod.edu/satrad/?parms=subregional-IL-02-12-1-100-1&checked=map&colorbar=undefined",
    type: "satrad"
  },
  "forecast-dupage": {
    section: "Local Weather",
    title: "DuPage Forecast",
    url: "https://weather.cod.edu/textserv/product/KLOT/FPUS53_ZFPLOT/",
    type: "zone-forecast",
    zoneName: "DUPAGE"
  },
  "forecast-nrn-cook": {
    section: "Local Weather",
    title: "Northern Cook Forecast",
    url: "https://weather.cod.edu/textserv/product/KLOT/FPUS53_ZFPLOT/",
    type: "zone-forecast",
    zoneName: "NORTHERN COOK"
  },
  "forecast-lake": {
    section: "Local Weather",
    title: "Lake County Forecast",
    url: "https://weather.cod.edu/textserv/product/KLOT/FPUS53_ZFPLOT/",
    type: "zone-forecast",
    zoneName: "LAKE IL"
  },
  "forecast-mchenry": {
    section: "Local Weather",
    title: "McHenry County Forecast",
    url: "https://weather.cod.edu/textserv/product/KLOT/FPUS53_ZFPLOT/",
    type: "zone-forecast",
    zoneName: "MCHENRY"
  },
  "obs-dpa": {
    section: "Aviation",
    title: "METARs and TAFs: DPA",
    url: "https://aviationweather.gov/data/metar/?ids=KDPA&format=decoded&hours=72&taf=on",
    type: "embed"
  },
  "obs-ord": {
    section: "Aviation",
    title: "METARs and TAFs: ORD",
    url: "https://aviationweather.gov/data/metar/?ids=KORD&format=decoded&hours=72&taf=on",
    type: "embed"
  },
  "obs-rfd": {
    section: "Aviation",
    title: "METARs and TAFs: RFD",
    url: "https://aviationweather.gov/data/metar/?ids=KRFD&format=decoded&hours=72&taf=on",
    type: "embed"
  },
  "obs-mdw": {
    section: "Aviation",
    title: "METARs and TAFs: MDW",
    url: "https://aviationweather.gov/data/metar/?ids=KMDW&format=decoded&hours=72&taf=on",
    type: "embed"
  },
  "aviation-custom": {
    section: "Aviation",
    title: "METARs and TAFs: Custom",
    url: "https://aviationweather.gov/data/metar/?ids=KORD&format=decoded&hours=72&taf=on",
    type: "aviation"
  },
  "nws-timeseries": {
    section: "Local Weather",
    title: "NWS 3-min Obs",
    url: "https://www.weather.gov/wrh/timeseries?site=KDPA",
    type: "timeseries"
  },
  "lot-text": {
    section: "Local Weather",
    title: "Chicago (LOT) Text Products",
    url: "https://kamala.cod.edu/il/latest.fxus63.KLOT.html",
    type: "lot-text"
  },
  "sref-plumes-ord": {
    section: "Local Weather",
    title: "SREF Plumes: ORD",
    url: "https://www.spc.noaa.gov/exper/sref/srefplumes/?SID=ORD",
    type: "external"
  },
  "climate-dpa": {
    section: "Local Weather",
    title: "DPA Daily Climate",
    url: "https://kamala.cod.edu/il/latest.cdus43.DPA.KLOT.html",
    type: "embed"
  },
  "climate-ord": {
    section: "Local Weather",
    title: "ORD Daily Climate",
    url: "https://kamala.cod.edu/il/latest.cdus43.ORD.KLOT.html",
    type: "embed"
  },
  "climate-mdw": {
    section: "Local Weather",
    title: "MDW Daily Climate",
    url: "https://kamala.cod.edu/il/latest.cdus43.MDW.KLOT.html",
    type: "embed"
  },
  "convective-frame": {
    section: "Severe Weather",
    title: "COD Convective Products",
    url: "https://weather.cod.edu/text/exper/cat/?parms=convective",
    type: "convective"
  },
  "active-hazards-severe": {
    section: "Severe Weather",
    title: "Active Weather Hazards",
    url: "https://nexlabweather.com/weather-data/text-hazards-outlooks/active-weather-hazards",
    type: "embed"
  },
  "spc-href": {
    section: "Severe Weather",
    title: "SPC HREF UH Probs.",
    url: "https://www.spc.noaa.gov/exper/href/?model=href&product=uh25_004hmax_pb075&sector=conus",
    type: "external"
  },
  "lsr-map": {
    section: "Severe Weather",
    title: "24-hr Storm Report Map",
    url: "https://weather.cod.edu/textserv/lsr?days=3",
    type: "lsr-map"
  },
  "hrrr-severe": {
    section: "Severe Weather",
    title: "HRRR Severe Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-HRRR-FLT1-prec-radar-0-0-100",
    type: "model",
    model: "HRRR"
  },
  "rap-severe": {
    section: "Severe Weather",
    title: "RAP Severe Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-RAP-FLT1-prec-radar-0-0-100",
    type: "model",
    model: "RAP"
  },
  "nam-severe": {
    section: "Severe Weather",
    title: "NAM Severe Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-NAM-FLT1-prec-radar-0-0-100",
    type: "model",
    model: "NAM"
  },
  "namnest-severe": {
    section: "Severe Weather",
    title: "NAMNST Severe Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-NAMNST-FLT1-prec-radar-0-0-100",
    type: "model",
    model: "NAMNST"
  },
  "gfs-severe": {
    section: "Severe Weather",
    title: "GFS Severe Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-GFS-FLT1-prec-radar-0-0-100",
    type: "model",
    model: "GFS"
  },
  "ecmwf-severe": {
    section: "Severe Weather",
    title: "ECMWF Severe Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-ECMWF-FLT1-sfc-temp-0-0-100",
    type: "model",
    model: "ECMWF"
  },
  "winter-frame": {
    section: "Winter Weather",
    title: "COD Winter Products",
    url: "https://weather.cod.edu/text/exper/cat/?parms=winter",
    type: "winter"
  },
  "active-hazards-winter": {
    section: "Winter Weather",
    title: "Active Weather Hazards",
    url: "https://nexlabweather.com/weather-data/text-hazards-outlooks/active-weather-hazards",
    type: "embed"
  },
  "hrrr-winter": {
    section: "Winter Weather",
    title: "HRRR Winter Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-HRRR-FLT1-winter-ptype-0-0-100",
    type: "model",
    model: "HRRR",
    modelMode: "winter"
  },
  "rap-winter": {
    section: "Winter Weather",
    title: "RAP Winter Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-RAP-FLT1-winter-ptype-0-0-100",
    type: "model",
    model: "RAP",
    modelMode: "winter"
  },
  "nam-winter": {
    section: "Winter Weather",
    title: "NAM Winter Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-NAM-FLT1-winter-ptype-0-0-100",
    type: "model",
    model: "NAM",
    modelMode: "winter"
  },
  "namnest-winter": {
    section: "Winter Weather",
    title: "NAMNST Winter Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-NAMNST-FLT1-winter-ptype-0-0-100",
    type: "model",
    model: "NAMNST",
    modelMode: "winter"
  },
  "gfs-winter": {
    section: "Winter Weather",
    title: "GFS Winter Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-GFS-FLT1-winter-ptype-0-0-100",
    type: "model",
    model: "GFS",
    modelMode: "winter"
  },
  "ecmwf-winter": {
    section: "Winter Weather",
    title: "ECMWF Winter Fields",
    url: "https://weather.cod.edu/forecast/?parms=current-ECMWF-FLT1-sfc-temp-0-0-100",
    type: "model",
    model: "ECMWF",
    modelMode: "winter"
  }
};

const convectiveImages = [
  ["Day 1 Categorical", "https://weather.cod.edu/wxdata/text/images/spc/co/day1/categorical/spccoday1.categorical.latest.png", "https://kamala.cod.edu/SPC/latest.acus01.KWNS.html"],
  ["Day 1 Tornado", "https://weather.cod.edu/wxdata/text/images/spc/co/day1/tornado/spccoday1.tornado.latest.png", "https://kamala.cod.edu/SPC/latest.acus01.KWNS.html"],
  ["Day 1 Hail", "https://weather.cod.edu/wxdata/text/images/spc/co/day1/hail/spccoday1.hail.latest.png", "https://kamala.cod.edu/SPC/latest.acus01.KWNS.html"],
  ["Day 1 Wind", "https://weather.cod.edu/wxdata/text/images/spc/co/day1/wind/spccoday1.wind.latest.png", "https://kamala.cod.edu/SPC/latest.acus01.KWNS.html"],
  ["Day 2 Categorical", "https://weather.cod.edu/wxdata/text/images/spc/co/day2/categorical/spccoday2.categorical.latest.png", "https://kamala.cod.edu/SPC/latest.acus02.KWNS.html"],
  ["Day 2 Tornado", "https://weather.cod.edu/wxdata/text/images/spc/co/day2/tornado/spccoday2.tornado.latest.png", "https://kamala.cod.edu/SPC/latest.acus02.KWNS.html"],
  ["Day 2 Hail", "https://weather.cod.edu/wxdata/text/images/spc/co/day2/hail/spccoday2.hail.latest.png", "https://kamala.cod.edu/SPC/latest.acus02.KWNS.html"],
  ["Day 2 Wind", "https://weather.cod.edu/wxdata/text/images/spc/co/day2/wind/spccoday2.wind.latest.png", "https://kamala.cod.edu/SPC/latest.acus02.KWNS.html"],
  ["Day 3 Categorical", "https://weather.cod.edu/wxdata/text/images/spc/co/day3/categorical/spccoday3.categorical.latest.png", "https://kamala.cod.edu/SPC/latest.acus03.KWNS.html"],
  ["Day 3 Severe Prob.", "https://weather.cod.edu/wxdata/text/images/spc/co/day3/severe/spccoday3.severe.latest.png", "https://kamala.cod.edu/SPC/latest.acus03.KWNS.html"]
];

const day48Images = [4, 5, 6, 7, 8].map((day) => [
  `Day ${day} Severe Prob.`,
  `https://weather.cod.edu/wxdata/text/images/spc/co/day${day}/severe/spccoday${day}.severe.latest.png`,
  "https://kamala.cod.edu/SPC/latest.acus48.KWNS.html"
]);

const convectiveTextLinks = [
  ["Mesoscale Discussions", "https://weather.cod.edu/textserv/mds"],
  ["Convective Watches", "https://weather.cod.edu/textserv/watches"],
  ["Warnings Table", "https://weather.cod.edu/textserv/svr"],
  ["Local Storm Reports", "https://weather.cod.edu/textserv/lsr?days=3"],
  ["TOR/SVR Hourly", "https://weather.cod.edu/textserv/product/KWNS/NWUS22_STAHRY/"],
  ["TOR/SVR Daily", "https://weather.cod.edu/textserv/product/KWNS/NWUS20_STADTS/"]
];

const winterImages = [
  ["Snow Depth", "https://weather.cod.edu/wxdata/text/images/nohrsc/snowd/nohrscsnowd.latest.png", ""],
  ["Snow-Water Equivalent", "https://weather.cod.edu/wxdata/text/images/nohrsc/swe/nohrscswe.latest.png", ""],
  ["Day 1 Snow > 4\"", "https://weather.cod.edu/wxdata/text/images/wpc/winter/snow04/day1/wpcsnow04day1.latest.png", ""],
  ["Day 1 Snow > 8\"", "https://weather.cod.edu/wxdata/text/images/wpc/winter/snow08/day1/wpcsnow08day1.latest.png", ""],
  ["Day 1 Ice > 1/4\"", "https://weather.cod.edu/wxdata/text/images/wpc/winter/ice0.25/day1/wpcice0.25day1.latest.png", ""],
  ["Day 2 Snow > 4\"", "https://weather.cod.edu/wxdata/text/images/wpc/winter/snow04/day2/wpcsnow04day2.latest.png", ""],
  ["Day 2 Snow > 8\"", "https://weather.cod.edu/wxdata/text/images/wpc/winter/snow08/day2/wpcsnow08day2.latest.png", ""],
  ["Day 2 Ice > 1/4\"", "https://weather.cod.edu/wxdata/text/images/wpc/winter/ice0.25/day2/wpcice0.25day2.latest.png", ""],
  ["Day 3 Snow > 4\"", "https://weather.cod.edu/wxdata/text/images/wpc/winter/snow04/day3/wpcsnow04day3.latest.png", ""],
  ["Day 3 Snow > 8\"", "https://weather.cod.edu/wxdata/text/images/wpc/winter/snow08/day3/wpcsnow08day3.latest.png", ""],
  ["Day 3 Ice > 1/4\"", "https://weather.cod.edu/wxdata/text/images/wpc/winter/ice0.25/day3/wpcice0.25day3.latest.png", ""]
];

const winterTextLinks = [
  ["WPC Heavy Snow/Icing Discussion", "https://kamala.cod.edu/offs/KWBC/FOUS11_QPFHSD.html"],
  ["LOT Area Forecast Discussion", "https://kamala.cod.edu/il/latest.fxus63.KLOT.html"],
  ["LOT AFD Winter Weather Section", "https://kamala.cod.edu/il/latest.fxus63.KLOT.html"],
  ["LOT Winter Weather Message", "https://kamala.cod.edu/il/latest.wwus43.KLOT.html"],
  ["LOT Watches/Warnings/Advisories", "https://kamala.cod.edu/il/latest.wwus83.KLOT.html"],
  ["LOT Hazardous Weather Outlook", "https://kamala.cod.edu/il/latest.flus43.KLOT.html"]
];

const defaultModelProducts = [
  ["500mb Wind", "500", "spd"],
  ["Most Unstable CAPE", "con", "mucape"],
  ["Surface Theta-E", "sfc", "thetae"],
  ["Mean Layer CAPE", "con", "mlcape"],
  ["Convective Precip", "prec", "cprec"],
  ["Surface Temp", "sfc", "temp"],
  ["850 Theta-E", "850", "thetae"],
  ["Sfc Mixed-Layer Td", "sfc", "30mbdewp"]
];

const ecmwfModelProducts = [
  ["500mb Wind", "500", "spd"],
  ["250mb Wind", "250", "spd"],
  ["Surface Theta-E", "sfc", "thetae"],
  ["Mean Layer CAPE", "con", "mlcape"],
  ["Convective Precip", "prec", "cprec"],
  ["Surface Temp", "sfc", "temp"],
  ["850 Theta-E", "850", "thetae"],
  ["Sfc Mixed-Layer Td", "sfc", "30mbdewp"]
];

const rapidSevereProducts = [
  ["Simulated Reflectivity", "prec", "radar"],
  ["Theta-E", "sfc", "thetae"],
  ["Most Unstable CAPE", "con", "mucape"],
  ["Td", "sfc", "dewp"],
  ["Supercell Composite", "con", "scp"],
  ["Sig Tor", "con", "stp"],
  ["0-3km CAPE", "con", "cape3km"],
  ["Vorticity", "sfc", "avort"]
];

const hrrrSevereProducts = [
  ...rapidSevereProducts,
  ["Lightning Density", "con", "ltng"],
  ["VIL", "con", "vil"]
];

const winterModelProducts = [
  ["Precip Type", "winter", "ptype"],
  ["Freezing Rain", "winter", "frzra"],
  ["Surface Temp", "sfc", "temp"],
  ["Surface Dewpoint", "sfc", "dewp"],
  ["Kuchera Snow", "winter", "kuchsnow"],
  ["Snow Depth", "winter", "sndepth"],
  ["Snow Ratio", "winter", "kratio"],
  ["DGZ Depth", "winter", "dgzdepth"]
];

const namWinterProducts = [
  ["Precip Type", "winter", "ptype"],
  ["Freezing Rain", "winter", "frzra"],
  ["Critical Thickness", "winter", "cthk"],
  ["Surface Temp", "sfc", "temp"],
  ["Surface Dewpoint", "sfc", "dewp"],
  ["Kuchera Snow", "winter", "kuchsnow"],
  ["Snow Depth", "winter", "sndepth"],
  ["Snow Ratio", "winter", "kratio"]
];

const ecmwfWinterProducts = [
  ["Surface Temp", "sfc", "temp"],
  ["Surface Dewpoint", "sfc", "dewp"],
  ["850 Temp", "850", "temp"],
  ["850 Dewpoint", "850", "dewp"],
  ["850 Theta-E", "850", "thetae"],
  ["Precip", "prec", "prec"],
  ["Accum Precip", "prec", "precacc"],
  ["PWAT", "prec", "pwat"]
];

const sectorLabels = {
  WLD: "World",
  NA: "North America",
  AO: "Arctic",
  PO: "Pacific Ocean",
  US: "United States",
  NE: "Northeast",
  MA: "Mid-Atlantic",
  SE: "Southeast",
  NGP: "Northern Great Plains",
  GL: "Great Lakes",
  NIL: "Northern Illinois",
  MW: "Midwest",
  CGP: "Central Great Plains",
  SGP: "Southern Great Plains",
  NW: "Northwest",
  GBSN: "Great Basin",
  SW: "Southwest",
  AK: "Alaska",
  WCAN: "Western Canada",
  DEN: "Denver",
  OKC: "Oklahoma City",
  DPG: "Dugway",
  FLT1: "Floater 1",
  FLT2: "Floater 2",
  FLT3: "Floater 3"
};

const floaterSectors = ["FLT1", "FLT2", "FLT3"];
const largeSectors = ["AK", "AO", "NA", "PO", "US", "WCAN", "WLD"];

const modelConfigs = {
  HRRR: {
    label: "HRRR",
    defaultSector: "FLT1",
    sectors: ["FLT1", "FLT2", "FLT3", "CGP", "DEN", "GBSN", "GL", "MA", "MW", "NE", "NIL", "NGP", "NW", "OKC", "SE", "SGP", "SW"],
    products: hrrrSevereProducts,
    winterProducts: winterModelProducts,
    targetRule: "rapid",
    runCadenceHours: 1
  },
  RAP: {
    label: "RAP",
    defaultSector: "FLT1",
    sectors: ["FLT1", "FLT2", "CGP", "GBSN", "GL", "MA", "MW", "NE", "NIL", "NGP", "NW", "SE", "SGP", "SW", "US"],
    products: rapidSevereProducts,
    winterProducts: winterModelProducts,
    targetRule: "rapid",
    runCadenceHours: 1
  },
  NAM: {
    label: "NAM",
    defaultSector: "FLT1",
    sectors: ["FLT1", "FLT2", "AK", "CGP", "GBSN", "GL", "MA", "MW", "NE", "NIL", "NGP", "NW", "SE", "SGP", "SW", "US", "WCAN"],
    winterProducts: namWinterProducts,
    targetRule: "synoptic00z",
    runCadenceHours: 6
  },
  NAMNST: {
    label: "NAMNST",
    defaultSector: "FLT1",
    sectors: ["FLT1", "FLT2", "CGP", "DPG", "GBSN", "GL", "MA", "MW", "NE", "NIL", "NGP", "NW", "SE", "SGP", "SW"],
    products: rapidSevereProducts,
    winterProducts: namWinterProducts,
    targetRule: "rapid",
    runCadenceHours: 1
  },
  GFS: {
    label: "GFS",
    defaultSector: "FLT1",
    sectors: ["FLT1", "FLT2", "AK", "AO", "CGP", "GBSN", "GL", "MA", "MW", "NA", "NE", "NIL", "NGP", "NW", "PO", "SE", "SGP", "SW", "US", "WCAN", "WLD"],
    winterProducts: namWinterProducts,
    targetRule: "synoptic00z",
    runCadenceHours: 6
  },
  ECMWF: {
    label: "ECMWF",
    defaultSector: "FLT1",
    sectors: ["FLT1", "FLT2", "AO", "CGP", "GL", "MA", "MW", "NA", "NE", "NIL", "NGP", "NW", "SE", "SGP", "SW", "US", "WLD"],
    products: ecmwfModelProducts,
    winterProducts: ecmwfWinterProducts,
    targetRule: "synoptic00z",
    runCadenceHours: 12
  }
};

function lotProductUrl(wmo, pil, office = "KLOT") {
  return `https://weather.cod.edu/textserv/product/${office}/${wmo}_${pil}/`;
}

const lotClimateLinks = [
  ["Aurora Municipal (ARR)", "https://weather.cod.edu/textserv/product/KLOT/CDUS43_CLIARR/", "CLIARR", "styled"],
  ["Chicago Executive (PWK)", "https://weather.cod.edu/textserv/product/KLOT/CDUS43_CLIPWK/", "CLIPWK", "styled"],
  ["Chicago Midway (MDW)", "https://weather.cod.edu/textserv/product/KLOT/CDUS43_CLIMDW/", "CLIMDW", "styled"],
  ["Chicago O'Hare (ORD)", "https://weather.cod.edu/textserv/product/KLOT/CDUS43_CLIORD/", "CLIORD", "styled"],
  ["DuPage Airport (DPA)", "https://weather.cod.edu/textserv/product/KLOT/CDUS43_CLIDPA/", "CLIDPA", "styled"],
  ["Rockford (RFD)", "https://weather.cod.edu/textserv/product/KLOT/CDUS43_CLIRFD/", "CLIRFD", "styled"],
  ["Romeoville WFO (LOT)", "https://weather.cod.edu/textserv/product/KLOT/CDUS43_CLILOT/", "CLILOT", "styled"],
  ["Valparaiso (VPZ)", "https://weather.cod.edu/textserv/product/KLOT/CDUS43_CLIVPZ/", "CLIVPZ", "styled"],
  ["Waukegan (UGN)", "https://weather.cod.edu/textserv/product/KLOT/CDUS43_CLIUGN/", "CLIUGN", "styled"]
];

const lotTextLinks = [
  ["LOT Area Forecast Discussion", "https://weather.cod.edu/textserv/product/KLOT/FXUS63_AFDLOT/", "AFD", "styled"],
  ["LOT Hazardous Weather Outlook", "https://weather.cod.edu/textserv/product/KLOT/FLUS43_HWOLOT/", "HWO", "styled"],
  ["LOT Public Information Statement", "https://weather.cod.edu/textserv/product/KLOT/NOUS43_PNSLOT/", "PNS", "styled"],
  ["LOT Regional Weather Roundup", "https://weather.cod.edu/textserv/product/KLOT/ASUS43_RWRIL/", "RWR", "styled"],
  ["Southern Lake Michigan Water Temperatures", "https://weather.cod.edu/textserv/product/KLOT/SXUS83_OMRLOT/", "OMR", "styled"]
];

const wpcTextLinks = [
  ["WPC Short Range Forecast", "https://weather.cod.edu/textserv/product/KWBC/FXUS01_PMDSPD/", "SPD", "styled"],
  ["WPC Extended Forecast", "wpc-extended-latest", "EPD", "styled-latest-extended"]
];

const lotTextViewerTabs = [...lotTextLinks, ...lotClimateLinks, ...wpcTextLinks];

const localForecastZones = [
  ["DuPage", "DUPAGE", "https://weather.cod.edu/textserv/product/KLOT/FPUS53_ZFPLOT/"],
  ["Nrn Cook", "NORTHERN COOK", "https://weather.cod.edu/textserv/product/KLOT/FPUS53_ZFPLOT/"],
  ["Lake", "LAKE IL", "https://weather.cod.edu/textserv/product/KLOT/FPUS53_ZFPLOT/"],
  ["McHenry", "MCHENRY", "https://weather.cod.edu/textserv/product/KLOT/FPUS53_ZFPLOT/"]
];

const satradImages = [
  {
    title: "Visible Satellite",
    imageUrl: "https://weather.cod.edu/wxdata/satellite/subregional/IL/current/IL.02.jpg",
    mapUrl: "https://weather.cod.edu/wxdata/satellite/subregional/IL/maps/IL_map.png",
    loopUrl: "https://weather.cod.edu/satrad/?parms=subregional-IL-02-12-1-100-1&checked=map&colorbar=undefined"
  },
  {
    title: "Clean IR Satellite",
    imageUrl: "https://weather.cod.edu/wxdata/satellite/subregional/IL/current/IL.13.jpg",
    mapUrl: "https://weather.cod.edu/wxdata/satellite/subregional/IL/maps/IL_map.png",
    loopUrl: "https://weather.cod.edu/satrad/?parms=subregional-IL-13-12-1-100-1&checked=map&colorbar=undefined"
  },
  {
    title: "Mid-Level Water Vapor",
    imageUrl: "https://weather.cod.edu/wxdata/satellite/continental/conus/current/conus.09.jpg",
    loopUrl: "https://weather.cod.edu/satrad/?parms=continental-US-09-12-1-100-1&checked=map&colorbar=undefined"
  },
  {
    title: "Composite Radar",
    dynamic: "mosaic-radar",
    mapUrl: "https://weather.cod.edu/wxdata/satellite/subregional/IL/maps/IL_map.png",
    loopUrl: "https://weather.cod.edu/satrad/?parms=subregional-IL-comp_radar-12-1-100-1&checked=map&colorbar=undefined"
  }
];

const preview = document.querySelector("#preview");
const viewer = document.querySelector(".viewer");
const selectedSection = document.querySelector("#selected-section");
const selectedTitle = document.querySelector("#selected-title");
const openSource = document.querySelector("#open-source");
const viewerStatus = document.querySelector("#viewer-status");
const refresh = document.querySelector("#refresh");
const backView = document.querySelector("#back-view");
let selectedId = "chi-surface";
let viewHistory = [];
const localServiceBase = ["127.0.0.1", "localhost", ""].includes(window.location.hostname) ? "http://127.0.0.1:8787" : "";
const pageParams = new URLSearchParams(window.location.search);

function updateClock() {
  const now = new Date();
  const utc = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC"
  }).format(now);
  const local = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(now);
  document.querySelector("#clock").textContent = `${utc} Z (${local} local)`;
}

function cacheBust(url) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}_=${Date.now()}`;
}

function aviationWeatherUrl(station) {
  const cleanStation = station.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!cleanStation) return "";
  const stationId = cleanStation.length === 3 ? `K${cleanStation}` : cleanStation;
  return `https://aviationweather.gov/data/metar/?ids=${encodeURIComponent(stationId)}&format=decoded&hours=72&taf=on`;
}

function setActive(id) {
  document.querySelectorAll(".product").forEach((button) => {
    button.classList.toggle("active", button.dataset.product === id);
  });
}

function updateBackButton() {
  backView.disabled = viewHistory.length === 0;
}

function rememberCurrentProduct(nextId) {
  if (selectedId && selectedId !== nextId) {
    viewHistory.push({ type: "product", id: selectedId });
  }
  updateBackButton();
}

function renderProduct(id, options = {}) {
  const product = products[id];
  if (product.type === "external") {
    window.open(product.url, "_blank", "noreferrer");
    return;
  }

  if (!options.skipHistory) {
    rememberCurrentProduct(id);
  }
  selectedId = id;
  selectedSection.textContent = product.section;
  selectedTitle.textContent = product.title;
  selectedTitle.hidden = false;
  viewer.classList.toggle("no-status", product.type === "surface-dashboard" || product.type === "convective");
  openSource.href = product.url;
  preview.replaceChildren();

  if (product.type === "image") {
    viewerStatus.textContent = "Live COD image";
    const img = document.createElement("img");
    img.src = cacheBust(product.url);
    img.alt = product.title;
    if (product.fit === "contain") {
      img.className = "fit-contain";
    }
    preview.append(img);
  }

  if (product.type === "surface-dashboard") {
    viewerStatus.textContent = "Chicago surface analysis with COD campus weather statistics";
    preview.append(renderSurfaceDashboard(product));
  }

  if (product.type === "upper-air") {
    viewerStatus.textContent = "Raw 500mb observed station plots with RAP sounding supplements";
    preview.append(renderUpperAirPanel(product));
  }

  if (product.type === "launch") {
    viewerStatus.textContent = "Loaded in viewer. Use Open source if the provider blocks framing.";
    const frame = document.createElement("iframe");
    frame.src = product.url;
    frame.title = product.title;
    preview.append(frame);
  }

  if (product.type === "satrad") {
    viewerStatus.textContent = "Latest COD Satrad images. Click any image for its 12-frame loop.";
    preview.append(renderSatradPanel());
  }

  if (product.type === "zone-forecast") {
    viewerStatus.textContent = "COD LOT zone forecast";
    preview.append(renderZoneForecastPanel(product));
  }

  if (product.type === "station") {
    viewerStatus.textContent = "Iowa State meteogram";
    preview.append(renderStationViewer("KORD"));
  }

  if (product.type === "timeseries") {
    viewerStatus.textContent = "NWS Time Series Viewer, last 72 hours";
    preview.append(renderTimeSeriesViewer("KDPA"));
  }

  if (product.type === "aviation") {
    viewerStatus.textContent = "AviationWeather METARs and TAFs, last 72 hours";
    preview.append(renderAviationViewer("ORD"));
  }

  if (product.type === "embed") {
    viewerStatus.textContent = product.section === "Aviation" ? "AviationWeather METARs and TAFs, last 72 hours" : "Live COD text product";
    const frame = document.createElement("iframe");
    frame.src = product.url;
    frame.title = product.title;
    preview.append(frame);
  }

  if (product.type === "embed-fallback") {
    viewerStatus.textContent = "Trying to load in the viewer. If the provider blocks framing, a new tab will open.";
    const frame = document.createElement("iframe");
    let loaded = false;
    frame.addEventListener("load", () => {
      loaded = true;
    });
    frame.addEventListener("error", () => {
      window.open(product.url, "_blank", "noreferrer");
    });
    frame.src = product.url;
    frame.title = product.title;
    preview.append(frame);
    window.setTimeout(() => {
      if (!loaded) window.open(product.url, "_blank", "noreferrer");
    }, 2500);
  }

  if (product.type === "campus") {
    viewerStatus.textContent = "Campus Weather recreated from COD assets";
    preview.append(renderCampusPanel());
  }

  if (product.type === "lot-text") {
    viewerStatus.textContent = "Chicago (LOT) text and climate products from Kamala COD";
    preview.append(renderLotProductsPanel());
  }

  if (product.type === "convective") {
    viewerStatus.textContent = "COD convective products frame recreated locally";
    preview.append(renderConvectivePanel());
  }

  if (product.type === "lsr-map") {
    viewerStatus.textContent = "COD local storm reports by local calendar day";
    preview.append(renderLsrMapPanel());
  }

  if (product.type === "winter") {
    viewerStatus.textContent = "COD winter products recreated locally with Kamala text links";
    preview.append(renderWinterPanel());
  }

  if (product.type === "model") {
    const config = modelConfigs[product.model];
    const mode = product.modelMode || "severe";
    viewerStatus.textContent = `Latest COD ${config.label} ${mode === "winter" ? "winter-weather" : "severe-weather"} fields`;
    preview.append(renderModelPanel(product.model, config.defaultSector, mode));
  }

  setActive(id);
  updateBackButton();
}

function renderStationViewer(defaultStation) {
  const stationLookup = [
    ["KARR", "Aurora Municipal", "Aurora, IL"],
    ["KBMI", "Central Illinois Regional", "Bloomington/Normal, IL"],
    ["KCMI", "University of Illinois Willard", "Champaign/Urbana, IL"],
    ["KDEC", "Decatur Airport", "Decatur, IL"],
    ["KDPA", "DuPage Airport", "West Chicago, IL"],
    ["KGYY", "Gary/Chicago International", "Gary, IN"],
    ["KIKK", "Greater Kankakee", "Kankakee, IL"],
    ["KJOT", "Joliet Regional", "Joliet, IL"],
    ["KLOT", "Chicago/Romeoville WFO", "Romeoville, IL"],
    ["KMDW", "Chicago Midway", "Chicago, IL"],
    ["KMLI", "Quad City International", "Moline, IL"],
    ["KORD", "Chicago O'Hare", "Chicago, IL"],
    ["KPIA", "Peoria International", "Peoria, IL"],
    ["KPWK", "Chicago Executive", "Wheeling/Prospect Heights, IL"],
    ["KRFD", "Chicago Rockford", "Rockford, IL"],
    ["KSBN", "South Bend International", "South Bend, IN"],
    ["KSPI", "Abraham Lincoln Capital", "Springfield, IL"],
    ["KUGN", "Waukegan National", "Waukegan, IL"],
    ["KUIN", "Quincy Regional", "Quincy, IL"],
    ["KVPZ", "Porter County Regional", "Valparaiso, IN"],
    ["KDBQ", "Dubuque Regional", "Dubuque, IA"],
    ["KCID", "Eastern Iowa", "Cedar Rapids, IA"],
    ["KDSM", "Des Moines International", "Des Moines, IA"],
    ["KLSE", "La Crosse Regional", "La Crosse, WI"],
    ["KMSN", "Dane County Regional", "Madison, WI"],
    ["KMKE", "Milwaukee Mitchell", "Milwaukee, WI"],
    ["KOSH", "Wittman Regional", "Oshkosh, WI"]
  ];
  const airportLookup = window.IATA_AIRPORT_LOOKUP || {};
  const airportEntries = Object.values(airportLookup).map((entry) => {
    const cleanEntry = {
      iata: cleanAirportText(entry.iata).toUpperCase(),
      icao: cleanAirportText(entry.icao).toUpperCase(),
      name: cleanAirportText(entry.name),
      location: cleanAirportText(entry.location)
    };
    return [airportStationId(cleanEntry), cleanEntry.name, cleanEntry.location, cleanEntry];
  }).filter(([id, name]) => id && name);
  const stationNames = Object.fromEntries(stationLookup.map(([id, name]) => [id, name]));
  const stationPlaces = Object.fromEntries(stationLookup.map(([id, , place]) => [id, place]));
  airportEntries.forEach(([id, name, , entry]) => {
    stationNames[id] = name;
    stationPlaces[id] = entry.location;
    if (entry.iata) stationNames[entry.iata] = name;
    if (entry.iata) stationPlaces[entry.iata] = entry.location;
    if (entry.icao) {
      stationNames[entry.icao] = name;
      stationPlaces[entry.icao] = entry.location;
    }
  });
  const stripProducts = [
    ["Temp", "tf"],
    ["Precip Accum", "qpf_accum"],
    ["Dew Point", "td"],
    ["Snowfall", "snow_accum"],
    ["Apparent Temp", "hiwc"],
    ["Wind Speed", "wind"],
    ["Wind Direction", "wdir"],
    ["Freezing Rain", "frz_rain"],
    ["Sleet", "sleet"]
  ];
  const panel = document.createElement("div");
  panel.className = "station-viewer";
  panel.innerHTML = `
    <div class="station-toolbar">
      <form class="station-form" id="station-form">
        <label for="station-input">Station</label>
        <input id="station-input" value="${defaultStation}" aria-label="Station ID">
        <button type="submit">Load</button>
      </form>
      <div class="station-mode-tabs" aria-label="Iowa State meteogram view">
        ${stripProducts.map(([label, variable]) => `<button type="button" data-mode="${variable}">${label}</button>`).join("")}
        <button type="button" data-mode="full">Full</button>
      </div>
      <div class="station-lookup">
        <label for="station-lookup-input">Code Lookup</label>
        <input id="station-lookup-input" aria-label="Find station ID">
        <div class="station-lookup-results" id="station-lookup-results"></div>
      </div>
    </div>
    <div id="station-display" class="station-display"></div>
    <div class="station-shortcuts" aria-label="Station shortcuts">
      <button type="button" data-station="KORD">ORD</button>
      <button type="button" data-station="KDPA">DPA</button>
      <button type="button" data-station="KRFD">RFD</button>
      <button type="button" data-station="KMDW">MDW</button>
      <button type="button" data-station="KLOT">LOT</button>
    </div>
  `;

  const display = panel.querySelector("#station-display");
  const input = panel.querySelector("#station-input");
  const lookupInput = panel.querySelector("#station-lookup-input");
  const lookupResults = panel.querySelector("#station-lookup-results");
  const modeButtons = panel.querySelectorAll("[data-mode]");
  let activeMode = "tf";
  let activeStation = defaultStation;
  let stationCachePromise = null;
  let lookupRequestId = 0;

  function normalizeIowaStation(station) {
    const clean = station.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!clean) return "";
    return clean.length === 3 ? `k${clean}` : clean;
  }

  function cleanAirportText(value) {
    return String(value || "").split(/\n+/)[0].replace(/\s+/g, " ").trim();
  }

  function airportStationId(entry) {
    if (entry.icao) return entry.icao;
    if (entry.iata && entry.location.includes("United States")) return `K${entry.iata}`;
    return entry.iata || "";
  }

  function stationDisplayName(station) {
    const id = station.toUpperCase();
    const name = stationNames[id] || id;
    const place = stationPlaces[id];
    if (!place) return name;
    return `${name} - ${shortPlaceName(place)}`;
  }

  function rememberStationDetails(id) {
    const cleanId = id.toUpperCase();
    const iata = cleanId.startsWith("K") && cleanId.length === 4 ? cleanId.slice(1) : cleanId;
    const airport = airportLookup[iata];
    if (!airport) return;
    const name = cleanAirportText(airport.name);
    const place = cleanAirportText(airport.location);
    if (!name) return;
    stationNames[cleanId] = name;
    stationPlaces[cleanId] = place;
    if (airport.iata) {
      stationNames[airport.iata] = name;
      stationPlaces[airport.iata] = place;
    }
    if (airport.icao) {
      stationNames[airport.icao] = name;
      stationPlaces[airport.icao] = place;
    }
  }

  function shortPlaceName(place) {
    return cleanAirportText(place).replace(/,\s*(United States|Canada)$/, "");
  }

  function normalizedLookupId(station) {
    const clean = station.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!clean) return "";
    return clean.length === 3 ? `K${clean}` : clean;
  }

  function stationIdFromEntry(entry) {
    if (entry.icaoId) return entry.icaoId;
    if (entry.faaId && entry.faaId.length === 3) return `K${entry.faaId}`;
    return entry.id || "";
  }

  function stationPlaceFromEntry(entry) {
    return [entry.state, entry.country].filter(Boolean).join(", ") || "US";
  }

  function stationTokens(id) {
    const tokens = [id];
    if (id.startsWith("K") && id.length === 4) tokens.push(id.slice(1));
    return tokens;
  }

  function dedupeLookupMatches(matches) {
    return matches.filter(([id], index, list) => (
      list.findIndex(([otherId]) => otherId === id) === index
    ));
  }

  function loadStationCache() {
    if (!stationCachePromise) {
      stationCachePromise = fetch("https://aviationweather.gov/data/cache/stations.cache.json")
        .then((response) => response.json())
        .then((stations) => {
          const seen = new Set();
          return stations
            .filter((station) => station.country === "US" && (station.siteType || []).includes("METAR"))
            .map((station) => [stationIdFromEntry(station), station.site || stationIdFromEntry(station), stationPlaceFromEntry(station)])
            .filter(([id]) => {
              if (!id || seen.has(id)) return false;
              seen.add(id);
              return true;
            });
        });
    }
    return stationCachePromise;
  }

  function makeLookupButton(id, name, place) {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<strong>${id}</strong><span>${name}</span><small>${place}</small>`;
    button.addEventListener("click", () => {
      stationNames[id] = name;
      stationPlaces[id] = place;
      input.value = id;
      lookupInput.value = "";
      renderLookupResults();
      loadStation(id);
    });
    return button;
  }

  function setLookupResults(matches) {
    lookupResults.replaceChildren();
    matches.forEach(([id, name, place]) => {
      lookupResults.append(makeLookupButton(id, name, place));
    });
  }

  function renderLookupResults(query = "") {
    const requestId = ++lookupRequestId;
    const clean = query.trim().toLowerCase();
    const lookupId = normalizedLookupId(query);
    const cleanCode = query.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
    const localMatches = stationLookup
      .filter(([id, name, place]) => {
        if (!clean) return ["KORD", "KDPA", "KMDW", "KRFD", "KLOT"].includes(id);
        return `${stationTokens(id).join(" ")} ${name} ${place}`.toLowerCase().includes(clean);
      })
      .sort(([idA], [idB]) => Number(idB === lookupId) - Number(idA === lookupId))
      .slice(0, 8);

    const airportMatches = clean
      ? airportEntries
        .filter(([id, name, place, entry]) => {
          const haystack = `${stationTokens(id).join(" ")} ${entry.iata} ${entry.icao} ${name} ${place}`.toLowerCase();
          return haystack.includes(clean) || id === lookupId || entry.iata === cleanCode || entry.icao === cleanCode;
        })
        .sort(([idA, , , entryA], [idB, , , entryB]) => {
          const exactA = Number(idA === lookupId || entryA.iata === cleanCode || entryA.icao === cleanCode);
          const exactB = Number(idB === lookupId || entryB.iata === cleanCode || entryB.icao === cleanCode);
          return exactB - exactA;
        })
        .slice(0, 10)
      : [];

    setLookupResults(dedupeLookupMatches([...localMatches, ...airportMatches]).slice(0, 10));

    if (clean.length < 2) return;

    loadStationCache()
      .then((stations) => {
        if (requestId !== lookupRequestId) return;
        const nationalMatches = stations
          .filter(([id, name, place]) => {
            const haystack = `${stationTokens(id).join(" ")} ${name} ${place}`.toLowerCase();
            return haystack.includes(clean) || id === lookupId;
          })
          .sort(([idA], [idB]) => Number(idB === lookupId) - Number(idA === lookupId))
          .slice(0, 10);
        const combined = dedupeLookupMatches([...localMatches, ...airportMatches, ...nationalMatches]).slice(0, 10);
        setLookupResults(combined);
      })
      .catch(() => {
        if (requestId === lookupRequestId && localMatches.length === 0 && airportMatches.length === 0) {
          setLookupResults([[normalizedLookupId(query), "Station lookup unavailable", "Try loading by ID"]]);
        }
      });
  }

  function stationPageUrl(station) {
    return `https://www.meteor.iastate.edu/~ckarsten/bufkit/image_loader.phtml?site=${encodeURIComponent(station)}`;
  }

  function stationStripUrl(station, variable) {
    const params = new URLSearchParams({
      site: station,
      var: variable,
      nam: "1",
      namm: "1",
      nam4km: "1",
      gfs: "1",
      gfsm: "1",
      rap: "1",
      nam_mos: "1",
      gfs_mos: "1",
      gfsm_mos: "1",
      nws: "1",
      obs: "1",
      con: "1"
    });
    return `https://www.meteor.iastate.edu/~ckarsten/bufkit/images/plotter.php?${params.toString()}`;
  }

  function updateModeButtons() {
    modeButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.mode === activeMode);
    });
  }

  function renderStationMode() {
    updateModeButtons();
    display.replaceChildren();
    if (activeMode !== "full") {
      const strip = stripProducts.find(([, variable]) => variable === activeMode) || ["Temp", "tf"];
      const imageUrl = stationStripUrl(activeStation, strip[1]);
      const link = document.createElement("a");
      link.className = "station-strip";
      link.href = imageUrl;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.innerHTML = `<strong>${strip[0]} Strip</strong><img src="${cacheBust(imageUrl)}" alt="${activeStation.toUpperCase()} ${strip[0]} meteogram">`;
      display.append(link);
      openSource.href = imageUrl;
      selectedTitle.textContent = `Iowa State Meteogram ${strip[0]}: ${stationDisplayName(activeStation)}`;
      viewerStatus.textContent = `Iowa State meteogram for ${stationDisplayName(activeStation)}`;
      return;
    }

    const frame = document.createElement("iframe");
    frame.title = "Iowa State BUFKIT Meteogram";
    frame.src = stationPageUrl(activeStation);
    display.append(frame);
    openSource.href = stationPageUrl(activeStation);
    selectedTitle.textContent = `Iowa State BUFKIT Meteogram: ${stationDisplayName(activeStation)}`;
    viewerStatus.textContent = `Iowa State meteogram for ${stationDisplayName(activeStation)}`;
  }

  function loadStation(station) {
    const cleanStation = normalizeIowaStation(station);
    if (!cleanStation) return;
    activeStation = cleanStation;
    rememberStationDetails(cleanStation);
    input.value = cleanStation.toUpperCase();
    renderStationMode();
  }

  panel.querySelector("#station-form").addEventListener("submit", (event) => {
    event.preventDefault();
    loadStation(input.value);
  });

  panel.querySelectorAll("[data-station]").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.station;
      loadStation(button.dataset.station);
    });
  });

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeMode = button.dataset.mode;
      renderStationMode();
    });
  });

  lookupInput.addEventListener("input", () => renderLookupResults(lookupInput.value));

  renderLookupResults();
  loadStation(defaultStation);
  return panel;
}

function renderTimeSeriesViewer(defaultStation) {
  const panel = document.createElement("div");
  panel.className = "station-viewer";
  panel.innerHTML = `
    <div class="station-toolbar">
      <form class="station-form" id="timeseries-form">
        <label for="timeseries-input">Station</label>
        <input id="timeseries-input" value="${defaultStation}" aria-label="Station ID">
        <button type="submit">Load</button>
      </form>
    </div>
    <iframe id="timeseries-frame" title="NWS Time Series Viewer"></iframe>
    <div class="station-shortcuts" aria-label="Station shortcuts">
      <button type="button" data-station="KDPA">DPA</button>
      <button type="button" data-station="KORD">ORD</button>
      <button type="button" data-station="KRFD">RFD</button>
      <button type="button" data-station="KMDW">MDW</button>
    </div>
  `;

  const frame = panel.querySelector("#timeseries-frame");
  const input = panel.querySelector("#timeseries-input");

  function loadStation(station) {
    const cleanStation = station.trim().toUpperCase();
    if (!cleanStation) return;
    const url = `https://www.weather.gov/wrh/timeseries?site=${encodeURIComponent(cleanStation)}`;
    frame.src = url;
    openSource.href = url;
    selectedTitle.textContent = `NWS 3-min Obs: ${cleanStation}`;
  }

  panel.querySelector("#timeseries-form").addEventListener("submit", (event) => {
    event.preventDefault();
    loadStation(input.value);
  });

  panel.querySelectorAll("[data-station]").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.station;
      loadStation(button.dataset.station);
    });
  });

  loadStation(defaultStation);
  return panel;
}

function renderAviationViewer(defaultStation) {
  const panel = document.createElement("div");
  panel.className = "station-viewer";
  panel.innerHTML = `
    <div class="station-toolbar">
      <form class="station-form" id="aviation-form">
        <label for="aviation-input">3-letter ID</label>
        <input id="aviation-input" value="${defaultStation}" maxlength="4" aria-label="Airport ID">
        <button type="submit">Load</button>
      </form>
    </div>
    <iframe id="aviation-frame" title="METARs and TAFs"></iframe>
    <div class="station-shortcuts" aria-label="Airport shortcuts">
      <button type="button" data-station="DPA">DPA</button>
      <button type="button" data-station="ORD">ORD</button>
      <button type="button" data-station="RFD">RFD</button>
      <button type="button" data-station="MDW">MDW</button>
    </div>
  `;

  const frame = panel.querySelector("#aviation-frame");
  const input = panel.querySelector("#aviation-input");

  function loadStation(station) {
    const url = aviationWeatherUrl(station);
    if (!url) return;
    const cleanStation = station.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
    const displayStation = cleanStation.length === 3 ? cleanStation : cleanStation.replace(/^K/, "");
    frame.src = url;
    openSource.href = url;
    selectedTitle.textContent = `METARs and TAFs: ${displayStation}`;
  }

  panel.querySelector("#aviation-form").addEventListener("submit", (event) => {
    event.preventDefault();
    loadStation(input.value);
  });

  panel.querySelectorAll("[data-station]").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.station;
      loadStation(button.dataset.station);
    });
  });

  loadStation(defaultStation);
  return panel;
}

function renderUpperAirPanel(product) {
  const panel = document.createElement("div");
  panel.className = "upper-air-panel";
  panel.innerHTML = `
    <header class="upper-air-toolbar">
      <div>
        <p class="eyebrow">Raw Upper-Air Analysis</p>
        <h3>${product.level}mb station model</h3>
      </div>
      <div class="upper-air-actions">
        <span class="upper-air-status" data-upper-status>Waiting for data...</span>
        <a class="button upper-air-pdf" href="${product.imageUrl}" target="_blank" rel="noreferrer">COD GIF</a>
        <a class="button upper-air-pdf" href="${product.pdfUrl}" target="_blank" rel="noreferrer">PDF</a>
        <button type="button" data-upper-print>Create PDF Map</button>
        <button type="button" data-upper-refresh>Refresh</button>
      </div>
    </header>
    <div class="upper-air-map" data-upper-map></div>
    <footer class="upper-air-legend">
      <span><i class="upper-air-dot"></i> COD observed RAOB</span>
      <span><i class="upper-air-s">S</i> COD RAP F003 sounding supplement</span>
      <span><i class="upper-air-missing">?</i> no data returned</span>
      <span>Temp upper-left, dewpoint lower-left, height upper-right, wind barb in knots</span>
    </footer>
  `;

  const status = panel.querySelector("[data-upper-status]");
  const mapNode = panel.querySelector("[data-upper-map]");
  let map = null;
  let layer = null;

  function setStatus(text, error = false) {
    status.textContent = text;
    status.classList.toggle("error", error);
  }

  function ensureMap() {
    if (map || !window.L) return;
    map = L.map(mapNode, {
      zoomControl: true,
      attributionControl: false,
      preferCanvas: true
    }).setView([39.2, -96.5], 4);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 9
    }).addTo(map);
    layer = L.layerGroup().addTo(map);
    L.control.attribution({ prefix: "" }).addAttribution("Upper air: COD sounding parser").addTo(map);
  }

  function load() {
    if (!window.L) {
      setStatus("Map library did not load.", true);
      return;
    }
    ensureMap();
    setStatus("Loading upper-air stations...");
    const params = new URLSearchParams({ level: String(product.level), source: "observed" });
    const requestedCycle = pageParams.get("upperCycle");
    if (requestedCycle) params.set("cycle", requestedCycle);
    const upperServiceBase = pageParams.get("upperService") || localServiceBase || "";
    const endpoint = `${upperServiceBase}/api/upper-analysis?${params.toString()}`;
    fetch(cacheBust(endpoint), { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error(`upper-air service returned ${response.status}`);
        return response.json();
      })
      .then((data) => {
        layer.clearLayers();
        const stations = Array.isArray(data.stations) ? data.stations : [];
        stations.forEach((station) => {
          L.marker([station.lat, station.lon], {
            icon: L.divIcon({
              className: "upper-air-marker",
              html: upperAirStationHtml(station),
              iconSize: [172, 140],
              iconAnchor: [86, 70]
            })
          }).bindTooltip(upperAirTooltip(station), { direction: "top", opacity: 0.95 }).addTo(layer);
        });
        if (stations.length > 0) {
          map.fitBounds(L.latLngBounds(stations.map((station) => [station.lat, station.lon])), { padding: [22, 22], maxZoom: 5 });
        }
        const observed = stations.filter((station) => station.source === "observed").length;
        const forecast = stations.filter((station) => station.source === "forecast").length;
        const missing = stations.filter((station) => station.source === "missing").length;
        setStatus(`${stations.length} stations - ${observed} observed${forecast ? `, ${forecast} RAP supplements` : ""}${missing ? `, ${missing} missing` : ""} - ${data.validTime || "latest run"}`);
        window.setTimeout(() => map.invalidateSize(), 100);
      })
      .catch((error) => {
        setStatus(`Upper-air plot needs local service: ${error.message}`, true);
        if (layer) layer.clearLayers();
      });
  }

  panel.querySelector("[data-upper-refresh]").addEventListener("click", load);
  panel.querySelector("[data-upper-print]").addEventListener("click", () => {
    document.body.classList.add("printing-upper-air");
    if (map) map.invalidateSize();
    window.setTimeout(() => {
      window.print();
      window.setTimeout(() => document.body.classList.remove("printing-upper-air"), 500);
    }, 80);
  });
  window.setTimeout(load, 0);
  return panel;
}

function upperAirStationHtml(station) {
  const marker = station.source === "forecast" ? "S" : station.source === "missing" ? "?" : "";
  return `
    <div class="upper-station-model ${station.source === "forecast" ? "forecast" : station.source === "missing" ? "missing" : "observed"}">
      <span class="ua-temp">${formatUpperNumber(station.temp)}</span>
      <span class="ua-dewp">${formatUpperNumber(station.dewp)}</span>
      <span class="ua-height">${formatUpperHeight(station.height)}</span>
      <span class="ua-id">${escapeHtml(station.id)}</span>
      <span class="ua-center">${marker}</span>
      ${upperAirWindBarbSvg(station.wdir, station.wspd)}
    </div>
  `;
}

function upperAirTooltip(station) {
  const sourceLabel = station.source === "forecast" ? "RAP F003 sounding supplement" : station.source === "missing" ? "missing data" : "observed RAOB";
  return `${station.id} ${station.name || ""}<br>${station.level || 500}mb ${sourceLabel}<br>Temp ${formatUpperNumber(station.temp)} C, Td ${formatUpperNumber(station.dewp)} C<br>Height ${formatUpperHeight(station.height)} dam, Wind ${Math.round(station.wdir || 0)}/${Math.round(station.wspd || 0)} kt`;
}

function formatUpperNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? String(Math.round(number)) : "";
}

function formatUpperHeight(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "";
  return String(Math.round(number / 10)).slice(-3).padStart(3, "0");
}

function upperAirWindBarbSvg(direction, speed) {
  const dir = Number(direction);
  const spd = Math.max(0, Math.round(Number(speed) / 5) * 5);
  if (!Number.isFinite(dir) || !spd) return "";
  let remaining = spd;
  let y = -64;
  const parts = ['<line x1="0" y1="0" x2="0" y2="-68"></line>'];
  while (remaining >= 50) {
    parts.push(`<path d="M 0 ${y} L 24 ${y - 10} L 0 ${y + 20} Z"></path>`);
    remaining -= 50;
    y += 20;
  }
  while (remaining >= 10) {
    parts.push(`<line x1="0" y1="${y}" x2="24" y2="${y - 10}"></line>`);
    remaining -= 10;
    y += 10;
  }
  if (remaining >= 5) {
    parts.push(`<line x1="0" y1="${y}" x2="14" y2="${y - 6}"></line>`);
  }
  return `<svg class="ua-barb" viewBox="-36 -84 84 104" aria-hidden="true"><g transform="translate(0,0) rotate(${dir})">${parts.join("")}</g></svg>`;
}

function renderSurfaceDashboard(product) {
  const panel = document.createElement("div");
  panel.className = "surface-dashboard";
  panel.innerHTML = `
    <section class="surface-map-panel">
      <img src="${cacheBust(product.url)}" alt="${product.title}">
    </section>
    <section class="weather-stats-panel" aria-live="polite">
      <div class="weather-stats-content">
        <div class="stats-header">
          <p class="eyebrow">COD Weather Statistics</p>
          <h3>Campus Conditions</h3>
        </div>
        <div class="stats-loading">Loading campus weather statistics...</div>
      </div>
      <a class="campus-photo" href="https://weather.cod.edu/campusweather/" target="_blank" rel="noreferrer" aria-label="Open COD Campus Weather">
        <img src="${cacheBust("https://weather.cod.edu/wxcdata/skycam/images/current/skycam_ani.gif")}" alt="College of DuPage SkyCam">
        <span>College of DuPage SkyCam</span>
      </a>
    </section>
  `;

  loadCampusStats(panel.querySelector(".weather-stats-content"));
  return panel;
}

function textFrom(root, selector) {
  const node = root.querySelector(selector);
  return node ? node.textContent.replace(/\s+/g, " ").trim() : "";
}

function campusStatFromText(text, label) {
  const pattern = new RegExp(`${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:?\\s*([^\\n\\r]+)`, "i");
  const match = text.match(pattern);
  return match ? match[1].replace(/\s+/g, " ").trim() : "--";
}

function loadCampusStats(container) {
  fetch(cacheBust("https://weather.cod.edu/campusweather/"))
    .then((response) => response.text())
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const current = doc.querySelector("#current");
      if (!current) {
        throw new Error("Campus current conditions not found.");
      }

      const condition = textFrom(current, "#preswx") || "Current conditions";
      const tempRows = Array.from(current.querySelectorAll(".temp tr"));
      const temperature = textFrom(tempRows[1] || current, "td") || "--";
      const feelsLike = textFrom(tempRows[3] || current, "td") || "--";
      const dewPoint = textFrom(tempRows[5] || current, "td:first-child") || "--";
      const humidity = textFrom(tempRows[5] || current, "td:last-child") || "--";
      const wind = textFrom(current, ".wind_readout") || "--";
      const icon = current.querySelector(".wx img");
      const iconUrl = icon ? icon.getAttribute("src") : "";
      const campusText = doc.body ? doc.body.textContent : html;
      const highTemp = campusStatFromText(campusText, "Highest Temperature (Today)");
      const lowTemp = campusStatFromText(campusText, "Lowest Temperature (Today)");

      container.innerHTML = `
        <div class="stats-header">
          <p class="eyebrow">COD Weather Statistics</p>
          <h3>Campus Conditions</h3>
        </div>
        <div class="conditions-summary">
          ${iconUrl ? `<img src="${iconUrl}" alt="">` : ""}
          <div>
            <span>${condition}</span>
            <strong>${temperature}</strong>
          </div>
        </div>
        <dl class="stats-grid">
          <div>
            <dt>Feels Like</dt>
            <dd>${feelsLike}</dd>
          </div>
          <div>
            <dt>Dew Point</dt>
            <dd>${dewPoint}</dd>
          </div>
          <div>
            <dt>Humidity</dt>
            <dd>${humidity}</dd>
          </div>
          <div>
            <dt>Wind</dt>
            <dd>${wind}</dd>
          </div>
          <div>
            <dt>24 hr High</dt>
            <dd>${highTemp}</dd>
          </div>
          <div>
            <dt>24 hr Low</dt>
            <dd>${lowTemp}</dd>
          </div>
        </dl>
      `;
    })
    .catch(() => {
      container.querySelector(".stats-loading").textContent = "Campus weather statistics are unavailable right now.";
    });
}

function renderSatradPanel() {
  const panel = document.createElement("div");
  panel.className = "satrad-panel";

  satradImages.forEach((item) => {
    const link = document.createElement("a");
    link.className = "satrad-tile";
    if (item.dynamic === "mosaic-radar") {
      link.classList.add("radar-tile");
    }
    link.href = item.loopUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    const overlay = item.mapUrl ? `<img class="map-overlay" src="${cacheBust(item.mapUrl)}" alt="">` : "";
    link.innerHTML = `
      <strong>${item.title}</strong>
      <span class="satrad-image-stack">
        <img class="base" alt="${item.title}">
        ${overlay}
      </span>
    `;
    const img = link.querySelector("img");
    if (item.dynamic === "mosaic-radar") {
      img.src = "";
      findLatestMosaicRadar().then((url) => {
        img.src = cacheBust(url);
      }).catch(() => {
        img.alt = "Composite Radar image unavailable";
      });
    } else {
      img.src = cacheBust(item.imageUrl);
    }
    panel.append(link);
  });

  return panel;
}

function renderZoneForecastPanel(product) {
  const panel = document.createElement("article");
  panel.className = "watch-text-document zone-forecast-panel";
  panel.innerHTML = `<div class="model-loading">Loading ${escapeHtml(product.title)}...</div>`;

  resolveLatestCodTextUrl("https://weather.cod.edu/textserv/product/KLOT/FPUS53_ZFPLOT/")
    .then((textUrl) => fetch(cacheBust(toRawTextUrl(textUrl))).then((response) => response.text()).then((text) => ({ text, textUrl })))
    .then(({ text, textUrl }) => {
      renderZoneForecastContent(panel, text, product.zoneName, textUrl);
    })
    .catch(() => {
      panel.innerHTML = `
        <div class="watch-text-source">
          <strong>${escapeHtml(product.title)}</strong>
          <a href="${product.url}" target="_blank" rel="noreferrer">Open source</a>
        </div>
        <div class="kamala-text-stage caps-mode">
          <pre>${escapeHtml(`${product.title} is unavailable right now.`.toUpperCase())}</pre>
        </div>
      `;
    });

  return panel;
}

function renderZoneForecastContent(panel, rawText, activeZoneName, textUrl) {
  const activeZone = localForecastZones.find(([, zoneName]) => zoneName === activeZoneName) || localForecastZones[0];
  const [label, zoneName, url] = activeZone;
  const text = extractZoneForecastText(rawText, zoneName);
  if (!text) throw new Error("Zone forecast not found.");
  openSource.href = textUrl || url;
  selectedTitle.textContent = `${label} Forecast`;
  renderForecastTextContent(panel, rawText, activeZone, text, textUrl || url);
}

function renderForecastTextContent(panel, rawText, activeZone, text, textUrl) {
  const [label, , url] = activeZone;
  const officialText = text.toUpperCase();
  const readableText = readableWeatherText(officialText);
  panel.innerHTML = `
    <nav class="product-tabs zone-tabs" aria-label="Local forecast areas">
      ${localForecastZones.map(([zoneLabel, zoneName]) => `
        <button type="button" data-zone-name="${zoneName}" class="${zoneLabel === label ? "active" : ""}">
          ${escapeHtml(zoneLabel)}
        </button>
      `).join("")}
    </nav>
    <div class="watch-text-source">
      <strong>${escapeHtml(label)} Forecast</strong>
      <div class="watch-case-toggle" aria-label="Text case">
        <button type="button" class="active" data-case-mode="caps">All Caps</button>
        <button type="button" data-case-mode="readable">Readable</button>
      </div>
      <a href="${textUrl || url}" target="_blank" rel="noreferrer">Open source</a>
    </div>
    <div class="kamala-text-stage caps-mode">
      <pre></pre>
    </div>
  `;

  const textStage = panel.querySelector(".kamala-text-stage");
  const textBlock = panel.querySelector("pre");
  renderFormattedWeatherText(textBlock, officialText);

  panel.querySelectorAll("[data-zone-name]").forEach((button) => {
    button.addEventListener("click", () => {
      renderZoneForecastContent(panel, rawText, button.dataset.zoneName, textUrl);
    });
  });

  panel.querySelectorAll("[data-case-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      panel.querySelectorAll("[data-case-mode]").forEach((candidate) => candidate.classList.toggle("active", candidate === button));
      const readableMode = button.dataset.caseMode === "readable";
      textStage.classList.toggle("readable-mode", readableMode);
      textStage.classList.toggle("caps-mode", !readableMode);
      renderFormattedWeatherText(textBlock, readableMode ? readableText : officialText);
    });
  });
}

function extractZoneForecastText(html, zoneName) {
  const normalizedName = zoneName.toUpperCase();
  const text = html.includes("<") ? htmlToForecastText(html) : html;
  const lines = text.replace(/\r/g, "").split("\n").map((line) => line.trimEnd());
  const start = lines.findIndex((line) => normalizedForecastZoneName(line) === normalizedName);
  if (start < 0) return "";
  let zoneCodeIndex = start;
  while (zoneCodeIndex > 0 && !/^[A-Z]{2}Z\d{3}-\d{6}-/.test(lines[zoneCodeIndex].trim())) {
    zoneCodeIndex -= 1;
  }
  const end = lines.findIndex((line, index) => index > start && /^[A-Z]{2}Z\d{3}-\d{6}-/.test(line.trim()));
  const sliceEnd = end > start ? end : lines.length;
  return lines.slice(zoneCodeIndex, sliceEnd).join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function normalizedForecastZoneName(line) {
  return line.trim().replace(/\s*-\s*$/, "").trim().toUpperCase();
}

function htmlToForecastText(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html.replace(/<br\s*\/?>/gi, "\n"), "text/html");
  const source = doc.querySelector("pre") || doc.body;
  return (source ? source.textContent : html)
    .replace(/\u00a0/g, " ")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .trim();
}

function findLatestMosaicRadar() {
  const now = new Date();
  const rounded = new Date(now);
  rounded.setUTCSeconds(0, 0);
  rounded.setUTCMinutes(Math.floor(rounded.getUTCMinutes() / 5) * 5);

  const candidates = [];
  for (let i = 0; i < 36; i += 1) {
    const time = new Date(rounded.getTime() - i * 5 * 60 * 1000 + 60 * 1000);
    const yyyy = time.getUTCFullYear();
    const mm = String(time.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(time.getUTCDate()).padStart(2, "0");
    const hh = String(time.getUTCHours()).padStart(2, "0");
    const min = String(time.getUTCMinutes()).padStart(2, "0");
    candidates.push(`https://weather.cod.edu/wxdata/satellite_r/subregional/IL/radar/IL.radar.${yyyy}${mm}${dd}.${hh}${min}00.gif`);
  }

  return findFirstImage(candidates);
}

function findFirstImage(urls) {
  return new Promise((resolve, reject) => {
    let index = 0;

    function tryNext() {
      if (index >= urls.length) {
        reject(new Error("No working image found."));
        return;
      }

      const url = urls[index];
      index += 1;
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = tryNext;
      img.src = cacheBust(url);
    }

    tryNext();
  });
}

function renderCampusPanel() {
  const panel = document.createElement("div");
  panel.className = "campus-panel";
  panel.innerHTML = `
    <section class="campus-hero">
      <div>
        <p class="eyebrow">College of DuPage</p>
        <h3>Campus Weather</h3>
        <p>The source page blocks direct framing, so this panel keeps the useful COD campus weather pieces inside our viewer.</p>
      </div>
      <a class="button" href="https://weather.cod.edu/campusweather/" target="_blank" rel="noreferrer">Open full page</a>
    </section>

    <section class="campus-grid">
      <a class="campus-card image-card" href="https://weather.cod.edu/campusweather/" target="_blank" rel="noreferrer">
        <strong>COD SkyCam</strong>
        <img src="https://weather.cod.edu/wxcdata/skycam/images/current/skycam_ani.gif" alt="COD SkyCam">
      </a>
      <a class="campus-card" href="https://weather.cod.edu/satrad/?parms=local-N_Illinois-02-12-0-100-1&checked=radar-counties-map-ww&colorbar=undefined" target="_blank" rel="noreferrer">
        <strong>Regional Satellite/Radar</strong>
        <span>With watches and warnings</span>
      </a>
      <a class="campus-card" href="https://weather.cod.edu/satrad/?parms=local-N_Illinois-02-12-0-100-1&checked=radar-counties-map-glm_flash&colorbar=undefined" target="_blank" rel="noreferrer">
        <strong>Regional Satellite/Radar</strong>
        <span>With lightning detection</span>
      </a>
      <a class="campus-card" href="https://weather.cod.edu/text/?load=dupagefcst" target="_blank" rel="noreferrer">
        <strong>DuPage Forecast</strong>
        <span>COD local weather text product</span>
      </a>
      <a class="campus-card" href="https://weather.cod.edu/satrad/nexrad/?type=LOT-N0Q-1-24" target="_blank" rel="noreferrer">
        <strong>DuPage NEXRAD Radar</strong>
        <span>LOT radar product</span>
      </a>
      <a class="campus-card" href="https://weather.cod.edu/analysis/?load=chisfc" target="_blank" rel="noreferrer">
        <strong>Chicago Metro Surface Map</strong>
        <span>COD analysis page</span>
      </a>
    </section>
  `;
  return panel;
}

function renderLinkPanel(title, links, status = "Kamala text product") {
  const panel = document.createElement("div");
  panel.className = "link-panel";
  panel.innerHTML = `<h3>${title}</h3>`;
  const list = document.createElement("div");
  list.className = "text-links";

  links.forEach(([label, url]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      renderInlineFrame("Local Weather", label, url, status);
    });
    list.append(button);
  });

  panel.append(list);
  return panel;
}

function renderLotProductsPanel() {
  const panel = document.createElement("div");
  panel.className = "link-panel link-panel-sections";
  panel.innerHTML = `
    <h3>Chicago (LOT) Text Products</h3>
    <section class="link-subsection">
      <div>
        <p class="eyebrow">Forecast Desk</p>
        <h4>Forecast and Local Text</h4>
      </div>
      <div class="text-links" data-link-group="lot-text"></div>
    </section>
    <section class="link-subsection">
      <div>
        <p class="eyebrow">Climate Desk</p>
        <h4>Daily Climate Reports</h4>
      </div>
      <div class="text-links" data-link-group="lot-climate"></div>
    </section>
    <section class="link-subsection">
      <div>
        <p class="eyebrow">WPC</p>
        <h4>National Forecast Discussions</h4>
      </div>
      <div class="text-links" data-link-group="wpc-text"></div>
    </section>
  `;

  fillTextLinks(panel.querySelector('[data-link-group="lot-text"]'), lotTextLinks, "Kamala LOT text product", lotTextViewerTabs);
  fillTextLinks(panel.querySelector('[data-link-group="lot-climate"]'), lotClimateLinks, "Kamala LOT climate product", lotTextViewerTabs);
  fillTextLinks(panel.querySelector('[data-link-group="wpc-text"]'), wpcTextLinks, "COD WPC text product", lotTextViewerTabs);
  return panel;
}

function fillTextLinks(container, links, status, tabLinks = null) {
  links.forEach(([label, url, pil, mode]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<span>${label}</span>${pil ? `<small>${pil}</small>` : ""}`;
    button.addEventListener("click", () => {
      if (mode && mode.startsWith("styled")) {
        renderStyledTextProduct("Local Weather", label, url, status, tabLinks);
      } else if (tabLinks) {
        renderTabbedTextFrame("Local Weather", label, url, status, tabLinks);
      } else {
        renderInlineFrame("Local Weather", label, url, status);
      }
    });
    container.append(button);
  });
}

function renderTabbedTextFrame(section, title, url, status, tabLinks, options = {}) {
  const activeTab = tabLinks.find(([, productUrl]) => productUrl === url);
  if (activeTab && activeTab[3] && activeTab[3].startsWith("styled")) {
    renderStyledTextProduct(section, title, url, status, tabLinks, options);
    return;
  }

  if (!options.skipHistory) {
    viewHistory.push({ type: "product", id: selectedId });
    updateBackButton();
  }
  selectedSection.textContent = section;
  selectedTitle.textContent = title;
  openSource.href = url;
  viewerStatus.textContent = status;
  preview.replaceChildren();

  const wrap = document.createElement("div");
  wrap.className = "tabbed-text-viewer";
  wrap.innerHTML = `
    <nav class="product-tabs" aria-label="Text product PILs">
      ${tabLinks.map(([label, productUrl, pil, mode]) => `
        <button type="button" data-product-url="${productUrl}" data-product-mode="${mode || ""}" class="${productUrl === url ? "active" : ""}" title="${label}">
          ${pil || label}
        </button>
      `).join("")}
    </nav>
    <iframe src="${url}" title="${title}"></iframe>
  `;
  preview.append(wrap);

  wrap.querySelectorAll("[data-product-url]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = tabLinks.find(([, productUrl]) => productUrl === button.dataset.productUrl);
      if (!target) return;
      if (button.dataset.productMode.startsWith("styled")) {
        renderStyledTextProduct(section, target[0], target[1], "COD WPC text product", tabLinks, { skipHistory: true });
      } else {
        renderTabbedTextFrame(section, target[0], target[1], status, tabLinks, { skipHistory: true });
      }
    });
  });
}

function renderStyledTextProduct(section, title, url, status, tabLinks, options = {}) {
  if (!options.skipHistory) {
    viewHistory.push({ type: "product", id: selectedId });
    updateBackButton();
  }
  selectedSection.textContent = section;
  selectedTitle.textContent = title;
  openSource.href = url === "wpc-extended-latest" ? "https://weather.cod.edu/textserv/product/KWBC/FXUS02_PMDEPD/" : url;
  viewerStatus.textContent = status;
  preview.replaceChildren();

  const wrap = document.createElement("div");
  wrap.className = "tabbed-text-viewer styled-text-viewer";
  wrap.innerHTML = `
    <nav class="product-tabs" aria-label="Text product PILs">
      ${tabLinks.map(([label, productUrl, pil, mode]) => `
        <button type="button" data-product-url="${productUrl}" data-product-mode="${mode || ""}" class="${productUrl === url ? "active" : ""}" title="${label}">
          ${pil || label}
        </button>
      `).join("")}
    </nav>
    <article class="watch-text-document" aria-live="polite">
      <div class="model-loading">Loading ${escapeHtml(title)}...</div>
    </article>
  `;
  preview.append(wrap);

  const textPanel = wrap.querySelector(".watch-text-document");
  loadStyledTextProduct(textPanel, title, url);

  wrap.querySelectorAll("[data-product-url]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = tabLinks.find(([, productUrl]) => productUrl === button.dataset.productUrl);
      if (!target) return;
      if (button.dataset.productMode.startsWith("styled")) {
        renderStyledTextProduct(section, target[0], target[1], status, tabLinks, { skipHistory: true });
      } else {
        renderTabbedTextFrame(section, target[0], target[1], status, tabLinks, { skipHistory: true });
      }
    });
  });
}

function loadStyledTextProduct(container, label, url) {
  resolveStyledTextUrl(url)
    .then((resolvedUrl) => fetch(cacheBust(toRawTextUrl(resolvedUrl))).then((response) => response.text()).then((html) => ({ html, resolvedUrl })))
    .then(({ html, resolvedUrl }) => {
      const text = html.includes("<") ? extractTextProduct(html) : html.trim();
      if (!text || looksLikeWatchLinkIndex(text)) throw new Error("Styled text product unavailable.");
      openSource.href = resolvedUrl;
      renderWatchTextContent(container, label, resolvedUrl, text);
    })
    .catch(() => {
      container.innerHTML = `
        <div class="watch-text-source">
          <strong>${escapeHtml(label)}</strong>
          <a href="${openSource.href}" target="_blank" rel="noreferrer">Open source</a>
        </div>
        <div class="kamala-text-stage caps-mode">
          <pre>${escapeHtml(`${label} is unavailable as a direct text product.`.toUpperCase())}</pre>
        </div>
      `;
    });
}

function resolveStyledTextUrl(url) {
  if (url !== "wpc-extended-latest") return Promise.resolve(url);
  return latestCodTextProduct([
    { label: "Preliminary Extended", url: "https://weather.cod.edu/textserv/product/KWNH/FXUS02_PREEPD/" },
    { label: "Final Extended", url: "https://weather.cod.edu/textserv/product/KWBC/FXUS02_PMDEPD/" }
  ]);
}

function resolveLatestCodTextUrl(url) {
  return fetch(cacheBust(url))
    .then((response) => response.text())
    .then((html) => {
      const latest = latestCodProductVersion(html);
      return latest ? latest.url : url;
    });
}

function toRawTextUrl(url) {
  return url.replace("/textserv/product/", "/textserv/raw/");
}

function latestCodTextProduct(candidates) {
  return Promise.all(candidates.map((candidate) => (
    fetch(cacheBust(candidate.url))
      .then((response) => response.text())
      .then((html) => {
        const latest = latestCodProductVersion(html);
        return latest ? { ...candidate, ...latest } : null;
      })
      .catch(() => null)
  ))).then((results) => {
    const valid = results.filter(Boolean).sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
    if (!valid.length) throw new Error("No latest COD text product found.");
    return valid[0].url;
  });
}

function latestCodProductVersion(html) {
  const match = html.match(/<option value="([^"]+)"[^>]*id="(\d{12})"/);
  return match ? { url: match[1], timestamp: match[2] } : null;
}

function renderInlineFrame(section, title, url, status, options = {}) {
  if (!options.skipHistory) {
    viewHistory.push({ type: "product", id: selectedId });
    updateBackButton();
  }
  selectedSection.textContent = section;
  selectedTitle.textContent = title;
  openSource.href = url;
  viewerStatus.textContent = status;
  preview.replaceChildren();

  if (options.backLabel && options.backAction) {
    const toolbar = document.createElement("div");
    toolbar.className = "inline-frame-toolbar";
    const back = document.createElement("button");
    back.type = "button";
    back.textContent = options.backLabel;
    back.addEventListener("click", options.backAction);
    toolbar.append(back);
    preview.append(toolbar);
  }

  const frame = document.createElement("iframe");
  frame.src = url;
  frame.title = title;
  preview.append(frame);
}

function renderConvectivePanel() {
  const panel = document.createElement("div");
  panel.className = "convective-panel";

  const outlooks = document.createElement("section");
  outlooks.innerHTML = "<h3>Convective Outlooks</h3>";
  const dayGroups = document.createElement("div");
  dayGroups.className = "convective-day-groups";

  [1, 2, 3].forEach((day) => {
    const dayGroup = document.createElement("section");
    dayGroup.className = "convective-day-group";
    dayGroup.innerHTML = `<h4>Day ${day}</h4>`;
    const imageGrid = document.createElement("div");
    imageGrid.className = "convective-day-grid";

    convectiveImages
      .filter(([title]) => title.startsWith(`Day ${day} `))
      .forEach(([title, imageUrl, textUrl]) => {
        const tile = document.createElement("button");
        tile.type = "button";
        tile.className = "convective-tile";
        tile.innerHTML = `<strong>${title}</strong><img src="${cacheBust(imageUrl)}" alt="${title}">`;
        tile.addEventListener("click", () => renderConvectiveDiscussion(title, imageUrl, textUrl));
        imageGrid.append(tile);
      });

    dayGroup.append(imageGrid);
    dayGroups.append(dayGroup);
  });

  outlooks.append(dayGroups);

  const extended = document.createElement("section");
  extended.innerHTML = "<h3>Day 4-8 Severe Probability</h3>";
  const extendedGrid = document.createElement("div");
  extendedGrid.className = "day48-grid";

  day48Images.forEach(([title, imageUrl, textUrl]) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "convective-tile";
    tile.innerHTML = `<strong>${title}</strong><img src="${cacheBust(imageUrl)}" alt="${title}">`;
    tile.addEventListener("click", () => renderConvectiveDiscussion(title, imageUrl, textUrl));
    extendedGrid.append(tile);
  });

  extended.append(extendedGrid);

  const text = document.createElement("section");
  text.innerHTML = "<h3>Current and Short-Term Text</h3>";
  const links = document.createElement("div");
  links.className = "text-links convective-text-links";

  convectiveTextLinks.forEach(([title, url]) => {
    if (url === "https://weather.cod.edu/textserv/mds") {
      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = `<span>${title}</span>`;
      button.addEventListener("click", () => renderMesoscaleGallery());
      links.append(button);
      return;
    }
    if (url === "https://weather.cod.edu/textserv/watches") {
      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = `<span>${title}</span>`;
      button.addEventListener("click", () => renderWatchGallery());
      links.append(button);
      return;
    }
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = title;
    links.append(link);
  });

  text.append(links);
  panel.append(text, outlooks, extended);
  return panel;
}

function renderWinterPanel() {
  const panel = document.createElement("div");
  panel.className = "convective-panel winter-panel";

  const graphics = document.createElement("section");
  graphics.innerHTML = "<h3>Winter Outlooks and Analysis</h3>";
  const imageGrid = document.createElement("div");
  imageGrid.className = "tile-grid";

  winterImages.forEach(([title, imageUrl]) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "convective-tile";
    tile.innerHTML = `<strong>${title}</strong><img src="${cacheBust(imageUrl)}" alt="${title}">`;
    tile.addEventListener("click", () => renderImageDetail(title, imageUrl, "Winter Weather"));
    imageGrid.append(tile);
  });

  graphics.append(imageGrid);

  const text = document.createElement("section");
  text.innerHTML = "<h3>Winter Text Products</h3>";
  const links = document.createElement("div");
  links.className = "text-links";

  winterTextLinks.forEach(([title, url]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = title;
    button.addEventListener("click", () => renderTextProduct(title, url, "Winter Weather"));
    links.append(button);
  });

  text.append(links);
  panel.append(graphics, text);
  return panel;
}

function renderMesoscaleGallery(options = {}) {
  if (!options.skipHistory) {
    viewHistory.push({ type: "product", id: selectedId });
    updateBackButton();
  }
  selectedSection.textContent = "Severe Weather";
  selectedTitle.textContent = "Mesoscale Discussions";
  openSource.href = "https://weather.cod.edu/textserv/mds";
  viewerStatus.textContent = "Current COD mesoscale discussion graphics with Kamala text links";
  preview.replaceChildren();

  const panel = document.createElement("div");
  panel.className = "md-gallery-panel";
  panel.innerHTML = `
    <div class="md-gallery-head">
      <div>
        <p class="eyebrow">SPC/WPC</p>
        <h3>Mesoscale Discussions - Last 48 Hours</h3>
      </div>
      <a class="button" href="https://weather.cod.edu/textserv/mds" target="_blank" rel="noreferrer">Older products</a>
    </div>
    <div class="md-gallery-grid">
      <div class="model-loading">Loading current mesoscale discussions...</div>
    </div>
  `;
  preview.append(panel);

  loadMesoscaleDiscussions()
    .then((items) => {
      const grid = panel.querySelector(".md-gallery-grid");
      grid.replaceChildren();
      const recentItems = items.filter((item) => item.ageHours <= 48);
      if (recentItems.length === 0) {
        grid.innerHTML = `<div class="model-loading">No mesoscale discussions found in the last 48 hours.</div>`;
        return;
      }
      grid.append(
        renderMdGalleryColumn("Mesoscale Convective Discussions", recentItems.filter((item) => item.product === "MCD"), recentItems),
        renderMdGalleryColumn("Mesoscale Precipitation Discussions", recentItems.filter((item) => item.product === "MPD"), recentItems)
      );
    })
    .catch(() => {
      panel.querySelector(".md-gallery-grid").innerHTML = `<div class="model-loading">Unable to load COD mesoscale discussions.</div>`;
    });
}

function loadMesoscaleDiscussions() {
  return fetch(cacheBust("https://weather.cod.edu/textserv/json/md/"))
    .then((response) => response.json())
    .then((items) => items.map(normalizeMdItem).filter(Boolean));
}

function normalizeMdItem(item) {
  const file = item.files && item.files[0] ? item.files[0] : "";
  const timestamp = item.graphic && item.graphic.match(/\.(\d{12})\.png$/)
    ? item.graphic.match(/\.(\d{12})\.png$/)[1]
    : file.split("/").pop();
  if (!timestamp) return null;
  const isMpd = item.type === "MPD" || item.id.includes("MPD");
  const product = isMpd ? "MPD" : "MCD";
  const number = item.number || item.id.split("_")[1] || "";
  return {
    id: item.id,
    product,
    number,
    title: `${isMpd ? "Mesoscale Precipitation Discussion" : "Mesoscale Convective Discussion"} ${number}`,
    graphic: item.graphic || mdGraphicUrl(product, timestamp),
    textUrl: mdKamalaTextUrl(product, timestamp),
    codTextUrl: `https://weather.cod.edu/textserv/md/`,
    concerning: item.concerning || "",
    areas: item.areas_affected || "",
    watchProb: item.watch_prob || "N/A",
    active: !item.not_active,
    begin: item.time_begin || "",
    end: item.time_end || "",
    timestamp,
    ageHours: ageHoursFromTimestamp(timestamp)
  };
}

function ageHoursFromTimestamp(timestamp) {
  const date = new Date(Date.UTC(
    Number(timestamp.slice(0, 4)),
    Number(timestamp.slice(4, 6)) - 1,
    Number(timestamp.slice(6, 8)),
    Number(timestamp.slice(8, 10)),
    Number(timestamp.slice(10, 12))
  ));
  return (Date.now() - date.getTime()) / 36e5;
}

function mdGraphicUrl(product, timestamp) {
  const isMpd = product === "MPD";
  const base = isMpd ? "https://weather.cod.edu/wxdata/text/images/wpc/mpd/awus01" : "https://weather.cod.edu/wxdata/text/images/spc/mcd/acus11";
  return `${base}.${timestamp}.png`;
}

function mdKamalaTextUrl(product, timestamp) {
  const yymmddhhmm = `${timestamp.slice(2, 8)}${timestamp.slice(8, 12)}`;
  if (product === "MPD") {
    return `https://kamala.cod.edu/offs/KWNH/${yymmddhhmm}.awus01.html`;
  }
  return `https://kamala.cod.edu/offs/KWNS/${yymmddhhmm}.acus11.html`;
}

function renderMdGalleryCard(item, items) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `md-card ${item.active ? "active" : "expired"}`;
  button.innerHTML = `
    <img src="${cacheBust(item.graphic)}" alt="${escapeHtml(item.title)}">
    <div>
      <strong>${escapeHtml(item.title)}</strong>
      <span>${item.active ? "Valid" : "Expired"}: ${escapeHtml(item.end)}Z</span>
      <small>${escapeHtml(item.concerning)}</small>
    </div>
  `;
  button.addEventListener("click", () => renderMdDetail(item, items));
  return button;
}

function renderMdGalleryColumn(title, items, allItems) {
  const section = document.createElement("section");
  section.className = "md-gallery-column";
  section.innerHTML = `<h4>${title}<span>${items.length}</span></h4>`;
  const list = document.createElement("div");
  list.className = "md-gallery-list";
  if (items.length === 0) {
    list.innerHTML = `<div class="model-loading">None in the last 48 hours.</div>`;
  } else {
    items.forEach((item) => list.append(renderMdGalleryCard(item, allItems)));
  }
  section.append(list);
  return section;
}

function renderMdDetail(item, items, options = {}) {
  if (!options.skipHistory) {
    viewHistory.push({ type: "md-gallery" });
    updateBackButton();
  }
  selectedSection.textContent = "Severe Weather";
  selectedTitle.textContent = item.title;
  openSource.href = item.textUrl;
  viewerStatus.textContent = "COD mesoscale graphic with Kamala discussion text";
  preview.replaceChildren();
  const activeItems = items.filter((target) => target.active);
  const navItems = activeItems.length > 0 ? activeItems : [item];

  const detail = document.createElement("div");
  detail.className = "md-detail outlook-detail";
  detail.innerHTML = `
    <nav class="outlook-day-tabs" aria-label="Mesoscale discussion navigation">
      ${navItems.map((target) => `
        <button type="button" data-md-id="${target.id}" class="${target.id === item.id ? "active" : ""}" title="${escapeHtml(target.title)}">
          ${target.product} ${target.number}
        </button>
      `).join("")}
    </nav>
    <section class="outlook-graphic md-graphic">
      <a class="outlook-image-card" href="${item.graphic}" target="_blank" rel="noreferrer">
        <strong>${escapeHtml(item.title)}</strong>
        <img src="${cacheBust(item.graphic)}" alt="${escapeHtml(item.title)}">
      </a>
    </section>
    <section class="outlook-text">
      <iframe src="${item.textUrl}" title="${escapeHtml(item.title)} text"></iframe>
    </section>
  `;
  preview.append(detail);

  detail.querySelectorAll("[data-md-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = navItems.find((candidate) => candidate.id === button.dataset.mdId);
      if (target) renderMdDetail(target, items, { skipHistory: true });
    });
  });
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function renderWatchGallery(options = {}) {
  if (!options.skipHistory) {
    viewHistory.push({ type: "product", id: selectedId });
    updateBackButton();
  }
  selectedSection.textContent = "Severe Weather";
  selectedTitle.textContent = "Convective Watches";
  openSource.href = "https://weather.cod.edu/textserv/watches";
  viewerStatus.textContent = "Recent COD convective watch graphics with styled text";
  preview.replaceChildren();

  const panel = document.createElement("div");
  panel.className = "md-gallery-panel";
  panel.innerHTML = `
    <div class="md-gallery-head">
      <div>
        <p class="eyebrow">SPC</p>
        <h3>Convective Watches</h3>
      </div>
      <a class="button" href="https://weather.cod.edu/textserv/watches" target="_blank" rel="noreferrer">COD source</a>
    </div>
    <div class="md-gallery-grid single">
      <div class="model-loading">Loading recent convective watches...</div>
    </div>
  `;
  preview.append(panel);

  loadConvectiveWatches()
    .then((items) => {
      const grid = panel.querySelector(".md-gallery-grid");
      grid.replaceChildren();
      if (items.length === 0) {
        grid.innerHTML = `<div class="model-loading">No convective watches found.</div>`;
        return;
      }
      items.forEach((item) => grid.append(renderWatchGalleryCard(item, items)));
    })
    .catch(() => {
      panel.querySelector(".md-gallery-grid").innerHTML = `<div class="model-loading">Unable to load COD convective watches.</div>`;
    });
}

function loadConvectiveWatches() {
  return fetch(cacheBust("https://weather.cod.edu/textserv/json/watch/"))
    .then((response) => response.json())
    .then((items) => items.map(normalizeWatchItem).filter(Boolean).sort((a, b) => Number(b.number) - Number(a.number)));
}

function normalizeWatchItem(item) {
  if (!item.number) return null;
  return {
    id: `watch-${item.number}`,
    number: item.number,
    title: `${item.watch_type} Watch ${item.number}`,
    watchType: item.watch_type || "Watch",
    graphic: item.graphic || `https://weather.cod.edu/wxdata/spc/watches/ww${item.number}.png`,
    textUrl: `https://weather.cod.edu/textserv/watch/${item.number}`,
    active: !item.not_active,
    begin: item.time_begin || "",
    end: item.time_end || "",
    states: item.states || [],
    probabilities: item.probabilities || {},
    attributes: item.attributes || {}
  };
}

function renderWatchGalleryCard(item, items) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `md-card watch-card ${item.active ? "active" : "expired"}`;
  button.innerHTML = `
    <img src="${cacheBust(item.graphic)}" alt="${escapeHtml(item.title)}">
    <div>
      <strong>${escapeHtml(item.title)}</strong>
      <span>${item.active ? "Valid" : "Ended"}: ${escapeHtml(item.end)} UTC</span>
      <small>${escapeHtml(item.states.join(", ") || "No states listed")}</small>
    </div>
  `;
  button.addEventListener("click", () => renderWatchDetail(item, items));
  return button;
}

function renderWatchDetail(item, items, options = {}) {
  if (!options.skipHistory) {
    viewHistory.push({ type: "watch-gallery" });
    updateBackButton();
  }
  selectedSection.textContent = "Severe Weather";
  selectedTitle.textContent = item.title;
  openSource.href = item.textUrl;
  viewerStatus.textContent = "COD watch graphic with styled COD watch text";
  preview.replaceChildren();
  const activeItems = items.filter((target) => target.active);
  const navItems = activeItems.length > 0 ? activeItems : [item];

  const detail = document.createElement("div");
  detail.className = "md-detail outlook-detail";
  detail.innerHTML = `
    <nav class="outlook-day-tabs" aria-label="Convective watch navigation">
      ${navItems.map((target) => `
        <button type="button" data-watch-id="${target.id}" class="${target.id === item.id ? "active" : ""}" title="${escapeHtml(target.title)}">
          WW ${target.number}
        </button>
      `).join("")}
    </nav>
    <section class="outlook-graphic md-graphic">
      <a class="outlook-image-card" href="${item.graphic}" target="_blank" rel="noreferrer">
        <strong>${escapeHtml(item.title)}</strong>
        <img src="${cacheBust(item.graphic)}" alt="${escapeHtml(item.title)}">
      </a>
      <div class="md-meta">
        <span>${item.active ? "Active" : "Ended"}</span>
        <span>Valid ${escapeHtml(item.begin)} UTC to ${escapeHtml(item.end)} UTC</span>
        <strong>${escapeHtml(item.states.join(", ") || "States unavailable")}</strong>
        ${watchMetaRows(item)}
      </div>
    </section>
    <section class="outlook-text watch-text-panel" data-watch-text="${item.number}">
      <div class="model-loading">Loading COD watch text products...</div>
    </section>
  `;
  preview.append(detail);
  loadWatchTextPanel(detail.querySelector(".watch-text-panel"), item);

  detail.querySelectorAll("[data-watch-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = navItems.find((candidate) => candidate.id === button.dataset.watchId);
      if (target) renderWatchDetail(target, items, { skipHistory: true });
    });
  });
}

function loadWatchTextPanel(container, item) {
  loadCodWatchLinks(item)
    .then((links) => {
      renderWatchTextPanel(container, item, links);
    })
    .catch(() => {
      renderWatchTextUnavailable(container, item, "COD watch text products are unavailable for this watch.");
    });
}

function loadCodWatchLinks(item) {
  return fetch(cacheBust(item.textUrl))
    .then((response) => response.text())
    .then((html) => extractCodWatchLinks(html, item.number))
    .then((codLinks) => loadKamalaWatchLinks(item.number)
      .then((kamalaLinks) => mergeWatchLinks(codLinks, kamalaLinks))
      .catch(() => codLinks));
}

function extractCodWatchLinks(html, number) {
  const watchNumber = String(number);
  const linkMap = new Map();
  const calls = Array.from(html.matchAll(/load_text\('([^']+)'\)">([^<]+)</g));

  calls.forEach((match) => {
    const url = match[1];
    if (url.includes("/WWUS20_")) {
      linkMap.set("Watch Text", [`Watch Text #${watchNumber}`, url]);
      const preliminaryUrl = preliminaryWatchUrlFromCodProduct(url);
      if (preliminaryUrl) {
        linkMap.set("Preliminary Text", [`Preliminary Text #${watchNumber}`, preliminaryUrl]);
      }
    }
    if (url.includes("/WOUS64_")) {
      linkMap.set("Watch Outline Update", [`Watch Outline Update #${watchNumber}`, url]);
    }
  });

  if (!linkMap.has("Watch Text") && !linkMap.has("Watch Outline Update")) {
    throw new Error("No COD watch text links found.");
  }
  return orderedWatchLinks(watchNumber, linkMap);
}

function preliminaryWatchUrlFromCodProduct(url) {
  const match = url.match(/\/(\d{12})$/);
  if (!match) return "";
  const timestamp = match[1];
  const productMatch = url.match(/\/WWUS20_SEL(\d)\//);
  const productNumber = productMatch ? productMatch[1] : timestamp.charAt(timestamp.length - 1);
  return `https://weather.cod.edu/textserv/product/KWNS/WWUS30_SAW${productNumber}/${timestamp}`;
}

function loadKamalaWatchLinks(number) {
  return fetch(cacheBust("https://kamala.cod.edu/SPC/"))
    .then((response) => response.text())
    .then((html) => extractKamalaWatchLinks(html, number));
}

function extractKamalaWatchLinks(html, number) {
  const watchNumber = String(number);
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const anchors = Array.from(doc.querySelectorAll("a"));
  const linkMap = new Map();
  const seen = new Set();

  anchors.forEach((anchor) => {
    const text = anchor.textContent.replace(/\s+/g, " ").trim();
    const href = anchor.getAttribute("href") || "";
    if (!text.includes(watchNumber) && !href.includes(watchNumber.padStart(4, "0"))) return;
    let label = "";
    if (text.match(new RegExp(`WATCH #?${watchNumber}\\b`, "i"))) label = "Watch Text";
    if (text.match(new RegExp(`WW ${watchNumber} Preliminary Text`, "i"))) label = "Preliminary Text";
    if (text.match(new RegExp(`Watch Outline Update WW ${watchNumber}`, "i"))) label = "Watch Outline Update";
    if (!label) return;
    const url = new URL(href, "https://kamala.cod.edu/SPC/").href;
    if (seen.has(url)) return;
    seen.add(url);
    linkMap.set(label, [`${label} #${watchNumber}`, url]);
  });

  return orderedWatchLinks(watchNumber, linkMap);
}

function fallbackWatchLinks(item) {
  return orderedWatchLinks(item.number, new Map([
    ["Watch Text", [`Watch Text #${item.number}`, item.textUrl]]
  ]));
}

function mergeWatchLinks(primaryLinks, secondaryLinks) {
  const merged = new Map();
  primaryLinks.forEach(([label, url]) => {
    merged.set(baseWatchLabel(label), [label, url]);
  });
  secondaryLinks.forEach(([label, url]) => {
    const baseLabel = baseWatchLabel(label);
    if (!merged.has(baseLabel)) {
      merged.set(baseLabel, [label, url]);
    }
  });
  return [
    "Watch Text",
    "Preliminary Text",
    "Watch Outline Update"
  ].map((label) => merged.get(label)).filter(Boolean);
}

function baseWatchLabel(label) {
  return String(label).replace(/\s+#\d+\s*$/, "").trim();
}

function orderedWatchLinks(number, preferredLinks = new Map()) {
  const watchNumber = String(number);
  const fallbackLinks = new Map([
    ["Watch Text", [`Watch Text #${watchNumber}`, "https://kamala.cod.edu/offs/KWNS/wwus20.chunk.html"]],
    ["Preliminary Text", [`Preliminary Text #${watchNumber}`, "https://kamala.cod.edu/offs/KWNS/wwus30.chunk.html"]],
    ["Watch Outline Update", [`Watch Outline Update #${watchNumber}`, "https://kamala.cod.edu/offs/KWNS/wous64.chunk.html"]]
  ]);

  return [
    "Watch Text",
    "Preliminary Text",
    "Watch Outline Update"
  ].map((label) => preferredLinks.get(label) || fallbackLinks.get(label));
}

function validateWatchLinks(links) {
  if (!links.length) {
    throw new Error("No Kamala watch links found.");
  }
  return links;
}

function renderWatchTextPanel(container, item, links) {
  const watchLinks = validateWatchLinks(links);
  const first = watchLinks[0];
  openSource.href = first[1];
  container.innerHTML = `
    <nav class="product-tabs watch-text-tabs" aria-label="Watch text products">
      ${watchLinks.map(([label, url], index) => `
        <button type="button" data-watch-text-url="${url}" class="${index === 0 ? "active" : ""}">
          ${escapeHtml(label)}
        </button>
      `).join("")}
    </nav>
    <article class="watch-text-document" aria-live="polite">
      <div class="model-loading">Loading ${escapeHtml(first[0])}...</div>
    </article>
  `;

  const documentPanel = container.querySelector(".watch-text-document");
  loadWatchTextDocument(documentPanel, item, first[1], first[0]);
  container.querySelectorAll("[data-watch-text-url]").forEach((button) => {
    button.addEventListener("click", () => {
      container.querySelectorAll("[data-watch-text-url]").forEach((candidate) => candidate.classList.toggle("active", candidate === button));
      openSource.href = button.dataset.watchTextUrl;
      loadWatchTextDocument(documentPanel, item, button.dataset.watchTextUrl, button.textContent.trim());
    });
  });
}

function loadWatchTextDocument(container, item, sourceUrl, label) {
  container.innerHTML = `<div class="model-loading">Loading ${escapeHtml(label)}...</div>`;
  resolveWatchTextUrl(sourceUrl, item.number)
    .then((textUrl) => fetch(cacheBust(textUrl)).then((response) => response.text()).then((html) => ({ html, textUrl })))
    .then(({ html, textUrl }) => {
      const text = extractTextProduct(html);
      if (looksLikeWatchLinkIndex(text)) {
        throw new Error("Watch link index was returned instead of a text product.");
      }
      openSource.href = textUrl;
      renderWatchTextContent(container, label, textUrl, text);
    })
    .catch(() => {
      renderWatchTextUnavailable(container, item, `${label} is unavailable as a direct text product.`);
    });
}

function renderWatchTextUnavailable(container, item, message) {
  openSource.href = item.textUrl;
  container.innerHTML = `
    <div class="watch-text-source">
      <strong>${escapeHtml(item.title)}</strong>
      <a href="${item.textUrl}" target="_blank" rel="noreferrer">Open source</a>
    </div>
    <div class="kamala-text-stage caps-mode">
      <pre>${escapeHtml(message.toUpperCase())}</pre>
    </div>
  `;
}

function renderWatchTextContent(container, label, textUrl, text) {
  const officialText = text.toUpperCase();
  const readableText = readableWeatherText(officialText);
  container.innerHTML = `
    <div class="watch-text-source">
      <strong>${escapeHtml(label)}</strong>
      <div class="watch-case-toggle" aria-label="Text case">
        <button type="button" class="active" data-case-mode="caps">All Caps</button>
        <button type="button" data-case-mode="readable">Readable</button>
      </div>
      <a href="${textUrl}" target="_blank" rel="noreferrer">Open source</a>
    </div>
    <div class="kamala-text-stage caps-mode">
      <pre></pre>
    </div>
  `;

  const textStage = container.querySelector(".kamala-text-stage");
  const textBlock = container.querySelector("pre");
  renderFormattedWeatherText(textBlock, officialText);
  container.querySelectorAll("[data-case-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      container.querySelectorAll("[data-case-mode]").forEach((candidate) => candidate.classList.toggle("active", candidate === button));
      const readableMode = button.dataset.caseMode === "readable";
      textStage.classList.toggle("readable-mode", readableMode);
      textStage.classList.toggle("caps-mode", !readableMode);
      renderFormattedWeatherText(textBlock, readableMode ? readableText : officialText);
    });
  });
}

function renderFormattedWeatherText(node, text) {
  node.innerHTML = formatWeatherTextHtml(text);
}

function formatWeatherTextHtml(text) {
  return text.split("\n").map((line) => {
    const escaped = escapeHtml(line);
    return escaped.replace(/^(\s*)([A-Z]{4,6}\d{1,2})(\b)/, '$1<span class="kamala-blue">$2</span>$3');
  }).join("\n");
}

function resolveWatchTextUrl(sourceUrl, number) {
  const watchNumber = String(number);
  if (!sourceUrl.includes(".chunk.html")) return Promise.resolve(sourceUrl);

  return fetch(cacheBust(sourceUrl))
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const anchors = Array.from(doc.querySelectorAll("a"));
      const match = anchors.find((anchor) => {
        const text = anchor.textContent.replace(/\s+/g, " ").trim();
        return watchTextMatchesNumber(text, watchNumber);
      });
      if (!match) throw new Error("No matching watch text link found.");
      return new URL(match.getAttribute("href"), sourceUrl).href;
    });
}

function watchTextMatchesNumber(text, watchNumber) {
  const escapedNumber = watchNumber.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return [
    new RegExp(`WATCH\\s*-?\\s*NUMBER\\s+${escapedNumber}\\b`, "i"),
    new RegExp(`WATCH\\s+NUMBER\\s+${escapedNumber}\\b`, "i"),
    new RegExp(`WW\\s+${escapedNumber}\\b`, "i"),
    new RegExp(`WS\\s+${escapedNumber}\\b`, "i")
  ].some((pattern) => pattern.test(text));
}

function extractTextProduct(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const source = doc.querySelector("pre") || doc.body;
  return (source ? source.textContent : html).replace(/\r/g, "").trim();
}

function looksLikeWatchLinkIndex(text) {
  return /THAT PRODUCT DOES NOT EXIST/i.test(text)
    || /WATCH NOTIFICATION MESSAGES/i.test(text)
    && /WATCH OUTLINES/i.test(text)
    && /WATCH AVIATION NOTIFICATION MESSAGES/i.test(text);
}

function readableWeatherText(text) {
  let sentenceStart = true;
  return text.split("\n").map((line) => {
    if (shouldPreserveWeatherLine(line)) {
      sentenceStart = true;
      return line;
    }

    let converted = "";
    const parts = line.split(/(\s+|[^A-Za-z']+)/);
    parts.forEach((part) => {
      if (!part || !/[A-Za-z]/.test(part)) {
        converted += part;
        if (/[.!?:]\s*$/.test(part)) sentenceStart = true;
        return;
      }

      const replacement = readableWeatherWord(part, sentenceStart);
      converted += replacement;
      if (/[A-Za-z]/.test(replacement)) sentenceStart = false;
    });

    if (!converted.trim()) sentenceStart = true;
    return converted;
  }).join("\n");
}

function shouldPreserveWeatherLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (/^[A-Z]{2,}\d{2,}\s+[A-Z]{4}\s+\d{6}$/.test(trimmed)) return true;
  if (/^[A-Z]{3,}\d?$/.test(trimmed)) return true;
  if (/^[A-Z]{2,}\s+\d{6}$/.test(trimmed)) return true;
  if (/^[A-Z]{2,3}[CZ]\d{3}[-A-Z0-9]+$/.test(trimmed)) return true;
  if (/^\$\$/.test(trimmed)) return true;
  return false;
}

function readableWeatherWord(word, sentenceStart) {
  if (word !== word.toUpperCase()) return word;
  if (preserveWeatherToken(word)) return word;
  const lower = word.toLowerCase();
  if (!commonWeatherEnglishWords.has(lower)) return word;
  return sentenceStart ? `${lower.charAt(0).toUpperCase()}${lower.slice(1)}` : lower;
}

function preserveWeatherToken(word) {
  if (word.length <= 1 && word !== "A" && word !== "I") return true;
  if (/[0-9]/.test(word)) return true;
  if (weatherUppercaseTokens.has(word)) return true;
  if (usStateTokens.has(word)) return true;
  if (/^[A-Z]{4}$/.test(word) && word.startsWith("K")) return true;
  return false;
}

const usStateTokens = new Set("AL AK AZ AR CA CO CT DE FL GA HI IA ID IL IN KS KY LA MA MD ME MI MN MO MS MT NC ND NE NH NJ NM NV NY OH OK OR PA RI SC SD TN TX UT VA VT WA WI WV WY DC PR VI GU AS MP".split(" "));

const weatherUppercaseTokens = new Set("NWS SPC COD NEXLAB KWNS WFO AFD HWO MCD MPD WOU SEL WW WS UTC Z EDT EST CDT CST MDT MST PDT PST AM PM EF EF0 EF1 EF2 EF3 EF4 EF5 MPH KT KTS KM MSL MB DBZ CAPE MUCAPE MLCAPE SBCAPE CIN SRH LLJ QLCS MCS HP LP supercell".toUpperCase().split(" "));

const commonWeatherEnglishWords = new Set(`
a about above across afternoon again air aloft along also an and are area areas around as associated at
be become becoming been before being below between broadcast but by can central close complete conditions
continue could damaging depiction east eastern effective evening extreme favorable few for from gusts has
hail have in immediate include includes inches into is isolated issued later line listen likely local
means miles morning moving near north northeast northwest of ok on or other portions possible preparedness
precautionary primary risk see severe should south southeast southwest scattered statute storm storms summary
sweep the these this threatening thunderstorm thunderstorms through to tornado tornadoes turbulence until
urgent watch weather western with within winds
`.trim().split(/\s+/));

function watchMetaRows(item) {
  const rows = [];
  if (item.attributes["MAX HAIL /INCHES/"]) rows.push(`Max hail: ${item.attributes["MAX HAIL /INCHES/"]}"`);
  if (item.attributes["MAX WIND GUSTS SURFACE /KNOTS/"]) rows.push(`Max wind: ${item.attributes["MAX WIND GUSTS SURFACE /KNOTS/"]} kt`);
  if (item.attributes["PARTICULARLY DANGEROUS SITUATION"]) rows.push(`PDS: ${item.attributes["PARTICULARLY DANGEROUS SITUATION"]}`);
  const probs = Object.entries(item.probabilities).slice(0, 3).map(([label, value]) => `${label.replace("PROB OF ", "")}: ${value}`);
  return [...rows, ...probs].map((row) => `<span>${escapeHtml(row)}</span>`).join("");
}

function renderLsrMapPanel(dayOffset = 0) {
  const panel = document.createElement("div");
  panel.className = "lsr-map-panel";
  const dayWindow = lsrDayWindow(dayOffset);
  panel.innerHTML = `
    <div class="lsr-map-header">
      <div>
        <p class="eyebrow">COD Local Storm Reports</p>
        <h3>${escapeHtml(dayWindow.title)}</h3>
      </div>
      <nav class="lsr-day-tabs" aria-label="Storm report day">
        ${[0, 1, 2].map((offset) => `
          <button type="button" data-lsr-day="${offset}" class="${offset === dayOffset ? "active" : ""}">
            ${escapeHtml(lsrDayWindow(offset).tab)}
          </button>
        `).join("")}
      </nav>
      <a class="button lsr-source-link" href="https://weather.cod.edu/textserv/lsr?days=3" target="_blank" rel="noreferrer">Open 3-day reports</a>
      <div class="lsr-legend" aria-label="Storm report legend">
        <span><i class="legend-icon tornado"></i>Tornado</span>
        <span><i class="legend-icon hail"></i>Hail &ge; 1"</span>
        <span><i class="legend-dot flood"></i>Flash Flood</span>
        <span><i class="legend-dot wind"></i>Wind Damage</span>
      </div>
    </div>
    <div class="lsr-map-body">
      <div id="lsr-map" class="lsr-map"></div>
    </div>
  `;

  panel.querySelectorAll("[data-lsr-day]").forEach((button) => {
    button.addEventListener("click", () => {
      preview.replaceChildren(renderLsrMapPanel(Number(button.dataset.lsrDay)));
    });
  });

  window.setTimeout(() => loadLsrMap(panel, dayOffset), 0);
  return panel;
}

function loadLsrMap(panel, dayOffset = 0) {
  const mapNode = panel.querySelector("#lsr-map");
  const dayWindow = lsrDayWindow(dayOffset);

  if (!window.L) {
    mapNode.textContent = "Map library did not load.";
    return;
  }

  const map = L.map(mapNode, {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([39.5, -96], 4);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 11,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  fetch(cacheBust("https://weather.cod.edu/textserv/json/lsr?days=3"))
    .then((response) => response.json())
    .then((reports) => {
      const filtered = reports
        .map(normalizeLsrReport)
        .filter(Boolean)
        .filter((report) => report.timestamp >= dayWindow.start.getTime() && report.timestamp < dayWindow.end.getTime())
        .filter((report) => report.category);

      const bounds = [];
      filtered.forEach((report) => {
        bounds.push([report.lat, report.lon]);
        const marker = createLsrMarker(report).addTo(map);
        marker.bindPopup(lsrPopupHtml(report));
        marker.bindTooltip(lsrTooltipHtml(report), {
          direction: "top",
          opacity: 0.96,
          sticky: true
        });
      });

      if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [24, 24], maxZoom: 6 });
      } else {
        mapNode.textContent = `No matching reports for ${dayWindow.title.toLowerCase()}`;
      }
      window.setTimeout(() => map.invalidateSize(), 100);
    })
    .catch(() => {
      mapNode.textContent = "Unable to load COD storm reports.";
    });
}

function lsrDayWindow(dayOffset = 0) {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dayOffset);
  const end = dayOffset === 0
    ? now
    : new Date(now.getFullYear(), now.getMonth(), now.getDate() - dayOffset + 1);
  const labels = ["Today", "Yesterday", "Day Before"];
  const zone = localTimeZoneAbbrev(start);
  const dateLabel = start.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
  return {
    start,
    end,
    tab: labels[dayOffset] || dateLabel,
    title: dayOffset === 0
      ? `Today: Midnight to Current Time ${zone} (${dateLabel})`
      : `${labels[dayOffset] || "Reports"}: ${dateLabel} ${zone}`
  };
}

function localTimeZoneAbbrev(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "short"
  }).formatToParts(date);
  return (parts.find((part) => part.type === "timeZoneName") || {}).value || "local";
}

function normalizeLsrReport(report) {
  const lat = Number(report.latlon && report.latlon[0]);
  const lon = Number(report.latlon && report.latlon[1]);
  const timestamp = Number(report.valid_time_ts) * 1000;
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || !Number.isFinite(timestamp)) return null;

  const category = classifyLsrReport(report);
  if (!category) return null;
  return {
    ...report,
    lat,
    lon,
    category: category.key,
    color: category.color,
    stroke: category.stroke,
    timestamp
  };
}

function classifyLsrReport(report) {
  const event = String(report.event || "").toLowerCase();
  const magnitude = Number(report.magnitude_f || 0);
  if (event.includes("tornado")) {
    return { key: "tornado", color: "#18a558", stroke: "#0b5c31" };
  }
  if (event.includes("flash flood")) {
    return { key: "flood", color: "#18a558", stroke: "#0b5c31" };
  }
  if (event.includes("hail") && magnitude >= 1) {
    return { key: "hail", color: "#1e78ff", stroke: "#0d3675" };
  }
  const isWindDamage = event.includes("wnd dmg") || event.includes("wind damage") || event.includes("tstm wnd dmg");
  const isWindGust = event.includes("wnd gst") || event.includes("wind gust") || event.includes("tstm wnd gst");
  if (isWindDamage || (isWindGust && magnitude >= 58)) {
    return { key: "wind", color: "#3f454d", stroke: "#16191d" };
  }
  return null;
}

function createLsrMarker(report) {
  if (report.category === "tornado") {
    return L.marker([report.lat, report.lon], {
      icon: L.divIcon({
        className: "lsr-div-icon",
        html: '<span class="lsr-map-marker tornado-marker" aria-hidden="true"></span>',
        iconSize: [23, 23],
        iconAnchor: [12, 12]
      })
    });
  }

  if (report.category === "hail") {
    return L.marker([report.lat, report.lon], {
      icon: L.divIcon({
        className: "lsr-div-icon",
        html: '<span class="lsr-map-marker hail-marker" aria-hidden="true"></span>',
        iconSize: [13, 13],
        iconAnchor: [7, 7]
      })
    });
  }

  return L.circleMarker([report.lat, report.lon], {
    radius: 6.25,
    color: report.stroke,
    fillColor: report.color,
    fillOpacity: 0.88,
    weight: 1.5
  });
}

function lsrPopupHtml(report) {
  const magnitude = report.magnitude_str ? `<br><b>Magnitude:</b> ${report.magnitude_str}` : "";
  return `
    <b>${report.event}</b>${magnitude}<br>
    ${report.location}, ${report.state}<br>
    <b>Time:</b> ${report.valid_time_short}<br>
    <b>Source:</b> ${report.source || "Unknown"}<br>
    ${report.remark || ""}
  `;
}

function lsrTooltipHtml(report) {
  const magnitude = report.magnitude_str ? ` - ${report.magnitude_str}` : "";
  const remark = report.remark ? `<br>${report.remark}` : "";
  return `<strong>${report.event}${magnitude}</strong><br>${report.location}, ${report.state}<br>${report.valid_time_short}${remark}`;
}

function renderLsrListItem(report) {
  const item = document.createElement("button");
  item.type = "button";
  item.className = `lsr-report-item ${report.category}`;
  item.innerHTML = `
    <span>${report.event}</span>
    <strong>${report.location}, ${report.state}</strong>
    <small>${report.valid_time_short}${report.magnitude_str ? ` - ${report.magnitude_str}` : ""}</small>
  `;
  return item;
}

function renderGroupedLsrReports(container, reports) {
  container.replaceChildren();
  const states = Array.from(new Set(reports.map((report) => report.state || "??"))).sort();
  states.forEach((state, index) => {
    const stateReports = reports
      .filter((report) => (report.state || "??") === state)
      .sort((a, b) => Number(b.valid_time_ts) - Number(a.valid_time_ts));
    const group = document.createElement("details");
    group.className = "lsr-state-group";
    group.open = index === 0;
    group.innerHTML = `<summary>${state}<span>${lsrStateSummary(stateReports)}</span></summary>`;
    const items = document.createElement("div");
    items.className = "lsr-state-items";
    stateReports.forEach((report) => items.append(renderLsrListItem(report)));
    group.append(items);
    container.append(group);
  });
}

function lsrStateSummary(reports) {
  const counts = reports.reduce((acc, report) => {
    acc[report.category] = (acc[report.category] || 0) + 1;
    return acc;
  }, {});
  const parts = [
    ["Tor", counts.tornado],
    ["Hail", counts.hail],
    ["Flood", counts.flood],
    ["Wind", counts.wind]
  ].filter(([, count]) => count);
  return `${reports.length}${parts.length ? ` - ${parts.map(([label, count]) => `${label} ${count}`).join(", ")}` : ""}`;
}

function renderImageDetail(title, imageUrl, section) {
  viewHistory.push({ type: "product", id: selectedId });
  updateBackButton();
  selectedSection.textContent = section;
  selectedTitle.textContent = title;
  openSource.href = imageUrl;
  viewerStatus.textContent = "Live COD winter graphic";
  preview.replaceChildren();

  const link = document.createElement("a");
  link.className = "image-link";
  link.href = imageUrl;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.innerHTML = `<img src="${cacheBust(imageUrl)}" alt="${title}" class="fit-contain">`;
  preview.append(link);
}

function renderTextProduct(title, url, section) {
  viewHistory.push({ type: "product", id: selectedId });
  updateBackButton();
  selectedSection.textContent = section;
  selectedTitle.textContent = title;
  openSource.href = url;
  viewerStatus.textContent = "Latest Kamala COD text product";
  preview.replaceChildren();

  const frame = document.createElement("iframe");
  frame.src = url;
  frame.title = title;
  preview.append(frame);
}

function renderModelPanel(model, defaultSector, mode = "severe") {
  const config = modelConfigs[model];
  const productList = mode === "winter" ? config.winterProducts : config.products;
  const modeLabel = mode === "winter" ? "Winter Fields" : "Severe Fields";
  const defaultProduct = (productList || defaultModelProducts)[0] || ["Simulated Reflectivity", "prec", "radar"];
  const sectorGroups = groupedModelSectors(config.sectors);
  const panel = document.createElement("div");
  panel.className = "convective-panel hrrr-panel";
  panel.innerHTML = `
    <section>
      <div class="hrrr-toolbar">
        <div>
          <h3>Latest ${config.label} ${modeLabel}</h3>
          <p>Default sector is Floater 1. Tiles display only when the target valid forecast hour is available.</p>
        </div>
        <form class="station-form hrrr-form" id="hrrr-form">
          <label for="hrrr-sector">Sector</label>
          <input id="hrrr-sector" value="${defaultSector}" aria-label="HRRR sector">
          <button type="submit">Load</button>
        </form>
      </div>
      <div class="hrrr-sector-groups" aria-label="${config.label} sector shortcuts">
        ${sectorGroups.map((group) => `
          <section class="hrrr-sector-group">
            <h4>${group.title}</h4>
            <div class="station-shortcuts hrrr-shortcuts">
              ${group.sectors.map((id) => `<button type="button" data-sector="${id}" title="${id}">${sectorLabels[id] || id}</button>`).join("")}
            </div>
          </section>
        `).join("")}
      </div>
      <div class="model-animation-controls" id="model-animation-controls" hidden>
        <div>
          <strong id="model-frame-label">Synced frame</strong>
          <span id="model-frame-detail"></span>
        </div>
        <div class="model-animation-buttons">
          <button type="button" data-model-step="-1" aria-label="Previous synced frame">Prev</button>
          <button type="button" data-model-play aria-label="Play synced model loop">Play</button>
          <button type="button" data-model-step="1" aria-label="Next synced frame">Next</button>
          <span class="model-run-buttons" data-model-run-buttons></span>
        </div>
      </div>
      <div class="tile-grid hrrr-grid" id="hrrr-grid"></div>
    </section>
  `;

  const form = panel.querySelector("#hrrr-form");
  const input = panel.querySelector("#hrrr-sector");
  const grid = panel.querySelector("#hrrr-grid");
  const controls = panel.querySelector("#model-animation-controls");
  const frameLabel = panel.querySelector("#model-frame-label");
  const frameDetail = panel.querySelector("#model-frame-detail");
  const playButton = panel.querySelector("[data-model-play]");
  const stepButtons = panel.querySelectorAll("[data-model-step]");
  const runButtons = panel.querySelector("[data-model-run-buttons]");
  let animationState = null;
  let playTimer = null;
  let latestRunBase = null;

  function loadSector(sector, requestedRun = "current") {
    const cleanSector = sector.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!cleanSector) return;
    const runLabel = requestedRun === "current" ? "latest" : formatModelRun(requestedRun);
    stopPlayback();
    input.value = cleanSector;
    grid.innerHTML = `<div class="model-loading">Loading ${runLabel} ${config.label} ${cleanSector} images...</div>`;
    controls.hidden = true;
    openSource.href = `https://weather.cod.edu/forecast/?parms=${requestedRun}-${model}-${cleanSector}-${defaultProduct[1]}-${defaultProduct[2]}-0-0-100`;

    Promise.all((productList || defaultModelProducts).map(([title, level, field]) => loadModelProductTimeline(model, cleanSector, title, level, field, requestedRun)))
      .then((items) => {
        const availableItems = items.filter(Boolean);
        grid.replaceChildren();
        if (availableItems.length === 0) {
          grid.innerHTML = `<div class="model-loading">No target-time ${config.label} images found for ${cleanSector}. Try another sector or wait for more forecast hours.</div>`;
          return;
        }
        const timeline = commonModelHours(availableItems);
        if (timeline.length === 0) {
          grid.innerHTML = `<div class="model-loading">No shared forecast-hour timeline found for ${config.label} ${cleanSector}. Try another sector or wait for more fields.</div>`;
          return;
        }
        animationState = {
          model,
          sector: cleanSector,
          config,
          items: availableItems,
          timeline,
          frameIndex: startingTimelineIndex(timeline, desiredModelForecastHour(Number(String(availableItems[0].run).slice(-2)), config.targetRule))
        };
        latestRunBase = requestedRun === "current" ? availableItems[0].run : (latestRunBase || availableItems[0].run);
        availableItems.forEach((item) => grid.append(renderModelTileShell(item, cleanSector)));
        controls.hidden = false;
        renderModelRunButtons(cleanSector, availableItems[0].run);
        updateSyncedModelFrame();
      })
      .catch(() => {
        controls.hidden = true;
        grid.innerHTML = `<div class="model-loading">No ${config.label} images found for ${cleanSector}. Try another COD sector ID.</div>`;
      });
  }

  function renderModelRunButtons(sector, activeRun) {
    runButtons.replaceChildren();
    const baseRun = latestRunBase || activeRun;
    const runCount = model === "HRRR" ? 5 : 4;
    modelRunOptions(baseRun, runCount, config.runCadenceHours || 6).forEach((run) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = shortModelRun(run);
      button.title = formatModelRun(run);
      button.className = run === activeRun ? "active" : "";
      button.addEventListener("click", () => loadSector(sector, run));
      runButtons.append(button);
    });
  }

  function stepFrame(delta) {
    if (!animationState) return;
    const count = animationState.timeline.length;
    animationState.frameIndex = (animationState.frameIndex + delta + count) % count;
    updateSyncedModelFrame();
  }

  function startPlayback() {
    if (!animationState || playTimer) return;
    playButton.textContent = "Pause";
    playTimer = window.setInterval(() => stepFrame(1), 700);
  }

  function stopPlayback() {
    if (playTimer) {
      window.clearInterval(playTimer);
      playTimer = null;
    }
    if (playButton) playButton.textContent = "Play";
  }

  function togglePlayback() {
    if (playTimer) {
      stopPlayback();
    } else {
      startPlayback();
    }
  }

  function updateSyncedModelFrame() {
    if (!animationState) return;
    const hour = animationState.timeline[animationState.frameIndex];
    const firstItem = animationState.items[0];
    frameLabel.textContent = `${formatModelValid(firstItem.run, hour)} - F${String(hour).padStart(3, "0")}`;
    frameDetail.textContent = `${formatModelRun(firstItem.run)} - ${animationState.frameIndex + 1} of ${animationState.timeline.length}`;

    animationState.items.forEach((item) => {
      const frame = item.frames.find((candidate) => Number(candidate.forecastHour) === Number(hour));
      const tile = grid.querySelector(`[data-product-id="${item.productId}"]`);
      if (!frame || !tile) return;
      const img = tile.querySelector("img");
      const run = tile.querySelector("[data-model-run]");
      const valid = tile.querySelector("[data-model-valid]");
      img.src = cacheBust(frame.url);
      img.alt = `${item.title} ${formatModelValid(item.run, frame.forecastHour)}`;
      run.textContent = `${item.modelLabel} ${animationState.sector} - ${formatModelRun(item.run)}`;
      valid.textContent = `${formatModelValid(item.run, frame.forecastHour)} - F${String(frame.forecastHour).padStart(3, "0")}`;
      tile.dataset.loopUrl = frame.loopUrl;
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    loadSector(input.value);
  });

  panel.querySelectorAll("[data-sector]").forEach((button) => {
    button.addEventListener("click", () => loadSector(button.dataset.sector));
  });

  stepButtons.forEach((button) => {
    button.addEventListener("click", () => stepFrame(Number(button.dataset.modelStep)));
  });

  playButton.addEventListener("click", togglePlayback);

  document.addEventListener("keydown", (event) => {
    if (!panel.isConnected || !animationState) return;
    if (document.activeElement && ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepFrame(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepFrame(1);
    }
    if (event.key === " ") {
      event.preventDefault();
      togglePlayback();
    }
  });

  loadSector(defaultSector);
  return panel;
}

function groupedModelSectors(sectors) {
  const available = new Set(sectors);
  const floaters = floaterSectors.filter((id) => available.has(id));
  const regional = sectors
    .filter((id) => !floaterSectors.includes(id) && !largeSectors.includes(id))
    .sort((a, b) => (sectorLabels[a] || a).localeCompare(sectorLabels[b] || b));
  const large = sectors
    .filter((id) => largeSectors.includes(id))
    .sort((a, b) => (sectorLabels[a] || a).localeCompare(sectorLabels[b] || b));

  return [
    { title: "Floaters", sectors: floaters },
    { title: "Regional Sectors", sectors: regional },
    { title: "Large Sectors", sectors: large }
  ].filter((group) => group.sectors.length > 0);
}

function loadModelProductTimeline(model, sector, title, level, field, run = "current") {
  const productId = `${level}-${field}`;
  const url = `https://weather.cod.edu/forecast/assets/php/scripts/get-files.php?parms=${run}-${model}-${encodeURIComponent(sector)}-${level}-${field}-0-0-100`;
  return fetch(cacheBust(url))
    .then((response) => response.json())
    .then((data) => {
      if (data.err !== "false" || !data.files || data.files.length === 0) {
        return null;
      }
      const run = data.parms && data.parms[0] ? data.parms[0] : "current";
      const frames = modelFileCandidates(run, model, sector, level, field, data.files);
      if (frames.length === 0) return null;
      return {
        title,
        run,
        frames,
        productId,
        modelLabel: modelConfigs[model].label
      };
    })
    .catch(() => null);
}

function modelFileCandidates(run, model, sector, level, field, files) {
  return files.map((url) => {
    const match = url.match(/_(\d{3})\.(?:png|gif)$/i);
    const forecastHour = match ? String(Number(match[1])) : "0";
    return {
      url,
      forecastHour,
      sourceUrl: `https://weather.cod.edu/forecast/?parms=${[run, model, sector, level, field, forecastHour, "0", "100"].join("-")}`,
      loopUrl: `https://weather.cod.edu/forecast/?parms=${[run, model, sector, level, field, "0", "1", "100"].join("-")}`
    };
  }).sort((a, b) => Number(a.forecastHour) - Number(b.forecastHour));
}

function commonModelHours(items) {
  const [first, ...rest] = items;
  if (!first) return [];
  const common = new Set(first.frames.map((frame) => Number(frame.forecastHour)));
  rest.forEach((item) => {
    const hours = new Set(item.frames.map((frame) => Number(frame.forecastHour)));
    Array.from(common).forEach((hour) => {
      if (!hours.has(hour)) common.delete(hour);
    });
  });
  return Array.from(common).sort((a, b) => a - b);
}

function startingTimelineIndex(timeline, desiredHour) {
  const exact = timeline.findIndex((hour) => Number(hour) === Number(desiredHour));
  if (exact >= 0) return exact;
  const later = timeline.findIndex((hour) => Number(hour) > Number(desiredHour));
  return later >= 0 ? later : 0;
}

function loadModelProduct(model, sector, title, level, field) {
  const productId = `${level}-${field}`;
  const url = `https://weather.cod.edu/forecast/assets/php/scripts/get-files.php?parms=current-${model}-${encodeURIComponent(sector)}-${level}-${field}-0-0-100`;
  return fetch(cacheBust(url))
    .then((response) => response.json())
    .then((data) => {
      if (data.err !== "false" || !data.files || data.files.length === 0) {
        return null;
      }
      const selectedFile = selectTargetModelFile(data.parms[0], data.files, modelConfigs[model]);
      if (!selectedFile) return null;
      const imageUrl = selectedFile.url;
      const run = data.parms && data.parms[0] ? data.parms[0] : "current";
      const hour = selectedFile.forecastHour;
      return {
        title,
        imageUrl,
        sourceUrl: `https://weather.cod.edu/forecast/?parms=${[run, model, sector, level, field, hour, "0", "100"].join("-")}`,
        loopUrl: `https://weather.cod.edu/forecast/?parms=${[run, model, sector, level, field, "0", "1", "100"].join("-")}`,
        productId,
        forecastHour: hour.padStart(3, "0"),
        runLabel: formatModelRun(run),
        validLabel: formatModelValid(run, hour),
        modelLabel: modelConfigs[model].label
      };
    })
    .catch(() => null);
}

function selectTargetModelFile(run, files, config = {}) {
  const runHour = Number(String(run).slice(-2));
  const desiredHour = desiredModelForecastHour(runHour, config.targetRule);
  const candidates = files.map((url) => {
    const match = url.match(/_(\d{3})\.(?:png|gif)$/i);
    const forecastHour = match ? String(Number(match[1])) : "0";
    return { url, forecastHour };
  }).sort((a, b) => Number(a.forecastHour) - Number(b.forecastHour));
  const selected = candidates.find((file) => Number(file.forecastHour) === desiredHour)
    || candidates.find((file) => Number(file.forecastHour) > desiredHour);

  return selected || null;
}

function desiredModelForecastHour(runHour, targetRule = "rapid") {
  if (targetRule === "synoptic00z") {
    const next00z = (24 - runHour) % 24;
    return next00z >= 6 ? next00z : next00z + 24;
  }
  if (runHour >= 0 && runHour <= 5) return 1;
  if (runHour >= 6 && runHour < 14) return 11;
  return (24 - runHour) % 24;
}

function formatModelRun(run) {
  const text = String(run);
  if (text.length < 10) return `Run ${text}`;
  return `Run ${text.slice(4, 6)}/${text.slice(6, 8)} ${text.slice(8, 10)}Z`;
}

function shortModelRun(run) {
  const text = String(run);
  if (text.length < 10) return text;
  return `${text.slice(8, 10)}Z`;
}

function modelRunOptions(run, count, cadenceHours = 1) {
  const text = String(run);
  if (text.length < 10) return [];
  const base = new Date(Date.UTC(
    Number(text.slice(0, 4)),
    Number(text.slice(4, 6)) - 1,
    Number(text.slice(6, 8)),
    Number(text.slice(8, 10))
  ));
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(base.getTime() - index * cadenceHours * 60 * 60 * 1000);
    return [
      date.getUTCFullYear(),
      String(date.getUTCMonth() + 1).padStart(2, "0"),
      String(date.getUTCDate()).padStart(2, "0"),
      String(date.getUTCHours()).padStart(2, "0")
    ].join("");
  });
}

function formatModelValid(run, forecastHour) {
  const text = String(run);
  if (text.length < 10) return `VT F${String(forecastHour).padStart(3, "0")}`;
  const valid = new Date(Date.UTC(
    Number(text.slice(0, 4)),
    Number(text.slice(4, 6)) - 1,
    Number(text.slice(6, 8)),
    Number(text.slice(8, 10)) + Number(forecastHour)
  ));
  const mm = String(valid.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(valid.getUTCDate()).padStart(2, "0");
  const hh = String(valid.getUTCHours()).padStart(2, "0");
  return `VT ${mm}/${dd} ${hh}Z`;
}

function renderModelTileShell(item, sector) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "convective-tile hrrr-tile";
  tile.dataset.productId = item.productId;
  tile.innerHTML = `
    <strong>${item.title}</strong>
    <span data-model-run>${item.modelLabel} ${sector}</span>
    <span data-model-valid>Loading synced frame...</span>
    <img alt="${item.title}">
  `;
  tile.addEventListener("click", () => {
    if (tile.dataset.loopUrl) window.open(tile.dataset.loopUrl, "_blank", "noreferrer");
  });
  return tile;
}

function renderModelTile(item, sector) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "convective-tile hrrr-tile";
  tile.innerHTML = `
    <strong>${item.title}</strong>
    <span>${item.modelLabel} ${sector} - ${item.runLabel}</span>
    <span>${item.validLabel} - F${item.forecastHour}</span>
    <img src="${cacheBust(item.imageUrl)}" alt="${item.title}">
  `;
  tile.addEventListener("click", () => {
    window.open(item.loopUrl, "_blank", "noreferrer");
  });
  return tile;
}

function renderConvectiveDiscussion(title, imageUrl, textUrl, options = {}) {
  if (!options.skipHistory) {
    viewHistory.push({ type: "product", id: selectedId });
    updateBackButton();
  }
  selectedSection.textContent = "Severe Weather";
  selectedTitle.textContent = `${title} Discussion`;
  openSource.href = textUrl;
  viewerStatus.textContent = "COD outlook graphic with latest Kamala COD SPC discussion";
  preview.replaceChildren();

  const detail = document.createElement("div");
  detail.className = "outlook-detail";
  const images = relatedConvectiveImages(title, imageUrl);
  detail.innerHTML = `
    <nav class="outlook-day-tabs" aria-label="Convective outlook days">
      ${outlookDayTargets().map((target) => `
        <button type="button" data-outlook-title="${target.title}" class="${outlookDayClass(title, target)}">${target.label}</button>
      `).join("")}
    </nav>
    <section class="outlook-graphic">
      ${images.map(([imageTitle, url]) => `
        <a class="outlook-image-card" href="${url}" target="_blank" rel="noreferrer">
          <strong>${imageTitle}</strong>
          <img src="${cacheBust(url)}" alt="${imageTitle}">
        </a>
      `).join("")}
    </section>
    <section class="outlook-text">
      <iframe src="${textUrl}" title="${title} Discussion"></iframe>
    </section>
  `;
  preview.append(detail);

  detail.querySelectorAll("[data-outlook-title]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = outlookDayTargets().find((item) => item.title === button.dataset.outlookTitle);
      if (target) renderConvectiveDiscussion(target.title, target.imageUrl, target.textUrl, { skipHistory: true });
    });
  });
}

function outlookDayTargets() {
  return [
    { label: "Day 1", title: "Day 1 Categorical", imageUrl: convectiveImages[0][1], textUrl: convectiveImages[0][2] },
    { label: "Day 2", title: "Day 2 Categorical", imageUrl: convectiveImages[4][1], textUrl: convectiveImages[4][2] },
    { label: "Day 3", title: "Day 3 Categorical", imageUrl: convectiveImages[8][1], textUrl: convectiveImages[8][2] },
    { label: "4-8", title: "Day 4 Severe Prob.", imageUrl: day48Images[0][1], textUrl: day48Images[0][2] }
  ];
}

function outlookDayClass(title, target) {
  const current = title.match(/^Day (\d+)/);
  const targetDay = target.title.match(/^Day (\d+)/);
  if (!current || !targetDay) return "";
  const currentDay = Number(current[1]);
  const targetNumber = Number(targetDay[1]);
  const active = currentDay >= 4 ? targetNumber === 4 : currentDay === targetNumber;
  return active ? "active" : "";
}

function relatedConvectiveImages(title, imageUrl) {
  const dayMatch = title.match(/^Day (\d+)/);
  if (!dayMatch) return [[title, imageUrl]];

  const day = Number(dayMatch[1]);
  const source = day >= 4 ? day48Images : convectiveImages;
  const related = source
    .filter(([imageTitle]) => {
      const match = imageTitle.match(/^Day (\d+)/);
      if (!match) return false;
      const imageDay = Number(match[1]);
      return day >= 4 ? imageDay >= 4 && imageDay <= 8 : imageDay === day;
    })
    .map(([imageTitle, url]) => [imageTitle, url]);

  const selectedIndex = related.findIndex(([imageTitle]) => imageTitle === title);
  if (selectedIndex > 0) {
    const [selected] = related.splice(selectedIndex, 1);
    related.unshift(selected);
  }

  return related.length > 0 ? related : [[title, imageUrl]];
}

document.querySelectorAll(".product").forEach((button) => {
  button.addEventListener("click", () => renderProduct(button.dataset.product));
});

backView.addEventListener("click", () => {
  const previous = viewHistory.pop();
  if (!previous) {
    updateBackButton();
    return;
  }

  if (previous.type === "product") {
    renderProduct(previous.id, { skipHistory: true });
  }

  if (previous.type === "model") {
    selectedId = previous.productId;
    const product = products[selectedId];
    const config = modelConfigs[product.model];
    const mode = product.modelMode || "severe";
    selectedSection.textContent = products[selectedId].section;
    selectedTitle.textContent = products[selectedId].title;
    openSource.href = products[selectedId].url;
    viewerStatus.textContent = `Latest COD ${config.label} ${mode === "winter" ? "winter-weather" : "severe-weather"} fields`;
    preview.replaceChildren(renderModelPanel(product.model, previous.sector, mode));
    setActive(selectedId);
  }

  if (previous.type === "md-gallery") {
    renderMesoscaleGallery({ skipHistory: true });
  }

  if (previous.type === "watch-gallery") {
    renderWatchGallery({ skipHistory: true });
  }

  updateBackButton();
});

refresh.addEventListener("click", () => renderProduct(selectedId, { skipHistory: true }));

renderProduct(selectedId, { skipHistory: true });
updateClock();
setInterval(updateClock, 1000);
