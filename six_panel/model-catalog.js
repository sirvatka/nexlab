// Model availability published by COD. Refresh this snapshot when COD changes its catalog.
const COD_MODEL_CATALOG = {
  "updated": "2026-11-23",
  "source": "https://weather.cod.edu/forecast/",
  "models": {
    "HRRR": {
      "label": "HRRR",
      "sectors": [
        "NE",
        "MA",
        "SE",
        "NGP",
        "GL",
        "NIL",
        "MW",
        "CGP",
        "SGP",
        "NW",
        "GBSN",
        "SW",
        "DEN",
        "OKC",
        "FLT1",
        "FLT2",
        "FLT3"
      ],
      "runs": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ],
      "productsByLevel": {
        "FLT2": {
          "700": [
            "vvel"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "vis",
            "gust",
            "avort",
            "aptmp"
          ],
          "prec": [
            "precacc",
            "precacc6",
            "precacc12",
            "cloud",
            "radar"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "cape3km",
            "stp",
            "scp",
            "uphly",
            "uphlysw",
            "uphlysw6",
            "hailswsfc",
            "hailswclm",
            "hailswsig01",
            "3kmhel",
            "1kmhel",
            "vil",
            "ltng",
            "etop"
          ],
          "winter": [
            "frzra",
            "ptype",
            "dgzdepth",
            "snow",
            "snow6",
            "snow12",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kratio"
          ]
        },
        "FLT3": {
          "sfc": [
            "temp",
            "dewp",
            "thetae",
            "vis",
            "gust",
            "pblh",
            "avort",
            "aptmp"
          ],
          "prec": [
            "radar",
            "precacc1",
            "pwat"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "cape3km",
            "stp",
            "scp",
            "uphlysw",
            "hailswsfc",
            "hailswclm",
            "hailswsig01",
            "3kmhel",
            "1kmhel",
            "vil",
            "ltng",
            "etop"
          ],
          "winter": [
            "ptype"
          ]
        },
        "NIL": {
          "700": [
            "vvel"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "vis",
            "gust",
            "avort",
            "aptmp"
          ],
          "prec": [
            "precacc",
            "precacc1",
            "precacc6",
            "precacc12",
            "cloud",
            "radar"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "cape3km",
            "stp",
            "scp",
            "uphly",
            "uphlysw",
            "uphlysw6",
            "hailswsfc",
            "hailswclm",
            "hailswsig01",
            "3kmhel",
            "1kmhel",
            "vil",
            "ltng",
            "etop"
          ],
          "winter": [
            "frzra",
            "ptype",
            "dgzdepth",
            "snow",
            "snow1",
            "snow6",
            "snow12",
            "sndepth",
            "kuchsnow",
            "kuchsnow1",
            "kuchsnow6",
            "kuchsnow12",
            "kratio"
          ]
        },
        "general": {
          "700": [
            "vvel"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "vis",
            "gust",
            "avort",
            "aptmp"
          ],
          "prec": [
            "precacc",
            "precacc6",
            "precacc12",
            "cloud",
            "radar"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "cape3km",
            "stp",
            "scp",
            "uphly",
            "uphlysw",
            "uphlysw6",
            "hailswsfc",
            "hailswclm",
            "hailswsig01",
            "3kmhel",
            "1kmhel",
            "vil",
            "ltng",
            "etop"
          ],
          "winter": [
            "frzra",
            "ptype",
            "dgzdepth",
            "snow",
            "snow6",
            "snow12",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kratio"
          ]
        }
      }
    },
    "RAP": {
      "label": "RAP",
      "sectors": [
        "US",
        "NE",
        "MA",
        "SE",
        "NGP",
        "GL",
        "NIL",
        "MW",
        "CGP",
        "SGP",
        "NW",
        "GBSN",
        "SW",
        "FLT1",
        "FLT2"
      ],
      "runs": [
        0,
        3,
        6,
        9,
        12,
        15,
        18,
        21
      ],
      "productsByLevel": {
        "FLT2": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "avort",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "wetblb",
            "rhum",
            "thetae",
            "30mbdewp",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc1",
            "precacc6",
            "precacc12",
            "pwat",
            "radar"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "cape3km",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "hodomap"
          ],
          "winter": [
            "snow",
            "snow1",
            "snow6",
            "snow12",
            "sndepth",
            "kuchsnow",
            "kuchsnow1",
            "kuchsnow6",
            "kuchsnow12",
            "kratio",
            "dgzdepth",
            "frzra",
            "ptype",
            "cthk"
          ]
        },
        "FLT1": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "avort",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "wetblb",
            "rhum",
            "thetae",
            "30mbdewp",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "pwat",
            "radar"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "cape3km",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "hodomap"
          ],
          "winter": [
            "snow",
            "snow6",
            "snow12",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kratio",
            "dgzdepth",
            "frzra",
            "ptype",
            "cthk"
          ]
        },
        "NIL": {
          "500": [
            "avort",
            "vvel"
          ],
          "700": [
            "avort",
            "vvel"
          ],
          "850": [
            "spd",
            "temp",
            "tadv",
            "vvel"
          ],
          "925": [
            "spd",
            "temp"
          ],
          "sfc": [
            "temp",
            "dewp",
            "wetblb",
            "rhum",
            "thetae",
            "30mbdewp",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc1",
            "precacc6",
            "precacc12",
            "pwat",
            "radar"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "cape3km",
            "lsi",
            "mconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81"
          ],
          "winter": [
            "snow",
            "snow1",
            "snow6",
            "snow12",
            "sndepth",
            "kuchsnow",
            "kuchsnow1",
            "kuchsnow6",
            "kuchsnow12",
            "kratio",
            "dgzdepth",
            "frzra",
            "ptype",
            "cthk"
          ]
        },
        "general": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "avort",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "wetblb",
            "rhum",
            "thetae",
            "30mbdewp",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "pwat",
            "radar"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "cape3km",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81"
          ],
          "winter": [
            "snow",
            "snow6",
            "snow12",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kratio",
            "dgzdepth",
            "frzra",
            "ptype",
            "cthk"
          ]
        }
      }
    },
    "NAM": {
      "label": "WOOF-NAM",
      "sectors": [
        "US",
        "NE",
        "MA",
        "SE",
        "NGP",
        "GL",
        "NIL",
        "MW",
        "CGP",
        "SGP",
        "WCAN",
        "NW",
        "GBSN",
        "SW",
        "FLT1",
        "FLT2"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "general": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio"
          ]
        },
        "US": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "shear"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio"
          ]
        },
        "FLT1": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "hodomap"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio"
          ]
        },
        "FLT2": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "hodomap"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio"
          ]
        },
        "NIL": {
          "500": [
            "avort",
            "vvel"
          ],
          "700": [
            "avort",
            "vvel"
          ],
          "850": [
            "spd",
            "temp",
            "tadv",
            "vvel"
          ],
          "925": [
            "spd",
            "temp"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio"
          ]
        }
      }
    },
    "RRFS": {
      "label": "RRFS",
      "sectors": [
        "NA",
        "US",
        "NE",
        "MA",
        "SE",
        "NGP",
        "GL",
        "NIL",
        "MW",
        "CGP",
        "SGP",
        "AK",
        "WCAN",
        "NW",
        "GBSN",
        "SW",
        "DPG",
        "FLT1",
        "FLT2"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "FLT1": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "cape3km",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "hodomap",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "FLT2": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "cape3km",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "hodomap",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "AK": {
          "250": [
            "spd"
          ],
          "300": [
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum",
            "fronto"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum",
            "fronto"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "30mbdewp",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "mconv",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81"
          ],
          "winter": [
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "ptype"
          ]
        },
        "NIL": {
          "500": [
            "avort",
            "vvel"
          ],
          "700": [
            "avort",
            "vvel"
          ],
          "850": [
            "spd",
            "temp",
            "tadv",
            "vvel"
          ],
          "925": [
            "spd",
            "temp"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "stp",
            "scp",
            "cape3km",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "US": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "shear",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "cape3km",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "NA": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "cape3km",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio"
          ]
        },
        "general": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "CGP": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc",
            "cape3km"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "GBSN": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc",
            "cape3km"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "GL": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc",
            "cape3km"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "MA": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc",
            "cape3km"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "MW": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc",
            "cape3km"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "NE": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc",
            "cape3km"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "NGP": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc",
            "cape3km"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "NW": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc",
            "cape3km"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "SE": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc",
            "cape3km"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "SGP": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc",
            "cape3km"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        },
        "SW": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "fronto",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "mconv",
            "massconv",
            "stp",
            "scp",
            "3kmhel",
            "1kmhel",
            "3kmehi",
            "1kmehi",
            "lapse57",
            "lapse81",
            "dcape",
            "efhl",
            "uphly",
            "vil",
            "ltng",
            "etop",
            "hailswsfc",
            "cape3km"
          ],
          "winter": [
            "ptype",
            "frzra",
            "cthk",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "dgzdepth"
          ]
        }
      }
    },
    "RDPS": {
      "label": "GEM-RDPS",
      "sectors": [
        "US",
        "CA",
        "NE",
        "MA",
        "NGP",
        "GL",
        "NIL",
        "MW",
        "CGP",
        "NW",
        "WCAN",
        "FLT1",
        "FLT2"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "NIL": {
          "500": [
            "avort",
            "vvel"
          ],
          "700": [
            "avort",
            "vvel"
          ],
          "850": [
            "spd",
            "temp",
            "tadv",
            "vvel"
          ],
          "925": [
            "spd",
            "temp"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae",
            "wetblb",
            "avort"
          ],
          "con": [
            "sbcape"
          ],
          "prec": [
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "cthk"
          ]
        },
        "general": {
          "250": [
            "spd"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "avort",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae",
            "wetblb",
            "avort"
          ],
          "con": [
            "sbcape"
          ],
          "prec": [
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "cthk"
          ]
        }
      }
    },
    "GDPS": {
      "label": "GEM-GDPS",
      "sectors": [
        "NA",
        "US",
        "NIL",
        "FLT1",
        "FLT2"
      ],
      "runs": [
        0,
        12
      ],
      "productsByLevel": {
        "NIL": {
          "500": [
            "avort",
            "vvel"
          ],
          "700": [
            "avort",
            "vvel"
          ],
          "850": [
            "spd",
            "temp",
            "tadv",
            "vvel"
          ],
          "925": [
            "spd",
            "temp"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae",
            "wetblb",
            "avort"
          ],
          "con": [
            "sbcape"
          ],
          "prec": [
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud",
            "prec"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "cthk"
          ]
        },
        "general": {
          "250": [
            "spd"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "avort",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae",
            "wetblb",
            "avort"
          ],
          "con": [
            "sbcape"
          ],
          "prec": [
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud",
            "prec"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "cthk"
          ]
        }
      }
    },
    "ECMWF": {
      "label": "ECMWF",
      "sectors": [
        "WLD",
        "US",
        "NA",
        "AO",
        "PO",
        "MW",
        "NGP",
        "CGP",
        "SGP",
        "NIL",
        "NE",
        "MA",
        "SE",
        "NW",
        "SW",
        "GBSN",
        "AK",
        "WCAN",
        "GL",
        "FLT1",
        "FLT2"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "US": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "shear",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "general": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "CGP": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "FLT1": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "FLT2": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "GBSN": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "GL": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "MA": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "MW": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "NA": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "NE": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "NGP": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "NIL": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "NW": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "SE": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "SGP": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        },
        "SW": {
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "temp",
            "avort",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "temp",
            "dewp",
            "thetae",
            "tadv",
            "rhum"
          ],
          "925": [
            "spd",
            "temp",
            "thetae",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "thetae"
          ],
          "con": [
            "mucape",
            "cape3km",
            "1kmhel"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat"
          ],
          "winter": [
            "kuchsnow",
            "kratio",
            "cthk"
          ]
        }
      }
    },
    "GFS": {
      "label": "GFS",
      "sectors": [
        "WLD",
        "NA",
        "AO",
        "PO",
        "US",
        "NE",
        "MA",
        "SE",
        "NGP",
        "GL",
        "NIL",
        "MW",
        "CGP",
        "SGP",
        "AK",
        "WCAN",
        "NW",
        "GBSN",
        "SW",
        "FLT1",
        "FLT2"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "WLD": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "spdsa",
            "uwndsa",
            "hgtsa"
          ],
          "500": [
            "spd",
            "spdsa",
            "uwndsa",
            "hgtsa",
            "avort",
            "tempsa"
          ],
          "700": [
            "rhum"
          ],
          "850": [
            "spdsa",
            "hgtsa",
            "temp",
            "tempanom",
            "tempsa"
          ],
          "sfc": [
            "temp",
            "tempanom",
            "tempsa",
            "mslpsa",
            "rhum",
            "aptmp"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat",
            "pwatsa"
          ],
          "winter": [
            "kuchsnow",
            "kratio"
          ]
        },
        "NA": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "spdsa",
            "uwndsa",
            "hgtsa",
            "rhum"
          ],
          "500": [
            "spd",
            "spdsa",
            "uwndsa",
            "hgtsa",
            "avort",
            "temp",
            "tempsa",
            "rhum"
          ],
          "700": [
            "spd",
            "temp",
            "rhum"
          ],
          "850": [
            "spd",
            "spdsa",
            "hgtsa",
            "temp",
            "tempanom",
            "tempsa",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "tempanom",
            "tempsa",
            "mslpsa",
            "rhum",
            "thetae",
            "aptmp"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat",
            "pwatsa"
          ],
          "con": [
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "kuchsnow",
            "kratio"
          ]
        },
        "AO": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "spdsa",
            "uwndsa",
            "hgtsa"
          ],
          "500": [
            "spd",
            "spdsa",
            "uwndsa",
            "hgtsa",
            "avort",
            "temp",
            "tempsa"
          ],
          "700": [
            "rhum"
          ],
          "850": [
            "spdsa",
            "hgtsa",
            "temp",
            "tempanom",
            "tempsa"
          ],
          "sfc": [
            "temp",
            "tempanom",
            "tempsa",
            "mslpsa",
            "rhum",
            "aptmp"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat",
            "pwatsa"
          ],
          "con": [
            "mucape"
          ]
        },
        "PO": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "spdsa",
            "uwndsa",
            "hgtsa"
          ],
          "500": [
            "spd",
            "spdsa",
            "uwndsa",
            "hgtsa",
            "avort",
            "temp",
            "tempsa"
          ],
          "700": [
            "rhum"
          ],
          "850": [
            "spdsa",
            "hgtsa",
            "temp",
            "tempanom",
            "tempsa"
          ],
          "sfc": [
            "temp",
            "tempanom",
            "tempsa",
            "mslpsa",
            "rhum",
            "aptmp"
          ],
          "prec": [
            "prec",
            "precacc",
            "pwat",
            "pwatsa"
          ],
          "con": [
            "mucape"
          ]
        },
        "NIL": {
          "500": [
            "avort",
            "vvel"
          ],
          "700": [
            "avort",
            "vvel"
          ],
          "850": [
            "spd",
            "temp",
            "tadv",
            "vvel"
          ],
          "925": [
            "spd",
            "temp"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "cape3km",
            "1kmhel",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "US": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "spdsa",
            "uwndsa",
            "hgtsa",
            "rhum"
          ],
          "500": [
            "spd",
            "spdsa",
            "uwndsa",
            "hgtsa",
            "avort",
            "temp",
            "tempsa",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "spdsa",
            "hgtsa",
            "thetae",
            "temp",
            "tempanom",
            "tempsa",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "tempanom",
            "tempsa",
            "mslpsa",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "pwatsa",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "shear",
            "cape3km",
            "1kmhel",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "general": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "CGP": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "FLT1": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "FLT2": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "GBSN": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "GL": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "MA": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "MW": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "NE": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "NGP": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "NW": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "SE": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "SGP": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        },
        "SW": {
          "2pvu": [
            "pres"
          ],
          "250": [
            "spd",
            "rhum"
          ],
          "500": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "700": [
            "spd",
            "avort",
            "temp",
            "vvel",
            "rhum"
          ],
          "850": [
            "spd",
            "thetae",
            "temp",
            "tadv",
            "dewp",
            "vvel",
            "rhum"
          ],
          "925": [
            "spd",
            "thetae",
            "temp",
            "rhum"
          ],
          "sfc": [
            "temp",
            "dewp",
            "rhum",
            "thetae",
            "wetblb",
            "30mbdewp",
            "vis",
            "avort",
            "aptmp"
          ],
          "prec": [
            "prec",
            "radar",
            "cprec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "cloud"
          ],
          "con": [
            "sbcape",
            "mlcape",
            "mucape",
            "lsi",
            "scp",
            "3kmhel",
            "3kmehi",
            "lapse57",
            "lapse81",
            "cape3km",
            "1kmhel"
          ],
          "winter": [
            "ptype",
            "snow",
            "snow6",
            "snow12",
            "snow24",
            "sndepth",
            "kuchsnow",
            "kuchsnow6",
            "kuchsnow12",
            "kuchsnow24",
            "kratio",
            "frzra",
            "cthk"
          ]
        }
      }
    },
    "GEFS": {
      "label": "GEFS",
      "sectors": [
        "NA",
        "US",
        "PO",
        "NE",
        "MA",
        "SE",
        "NGP",
        "GL",
        "MW",
        "CGP",
        "SGP"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "general": {
          "500": [
            "meanwind",
            "hghtens",
            "windens"
          ],
          "850": [
            "meantemp",
            "tempens"
          ],
          "sfc": [
            "meanaptmp"
          ],
          "prec": [
            "meanprec",
            "meanprecacc",
            "paccens"
          ],
          "con": [
            "cape1000",
            "capeens",
            "prob3kmehi",
            "meanscp",
            "maxscp",
            "probscp",
            "scpens"
          ],
          "winter": [
            "ptypens",
            "meansnacc",
            "snens"
          ]
        }
      }
    },
    "CFS": {
      "label": "CFSv2",
      "sectors": [
        "NA",
        "US"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "general": {
          "500": [
            "spd"
          ],
          "850": [
            "temp"
          ],
          "con": [
            "sbcape",
            "scp"
          ]
        }
      }
    },
    "AIFS": {
      "label": "AIFS",
      "sectors": [
        "NA",
        "US",
        "MA",
        "MW"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "general": {
          "250": [
            "hgtsa",
            "rhum",
            "spd",
            "spdsa",
            "uwndsa"
          ],
          "500": [
            "hgtsa",
            "rhum",
            "spd",
            "spdsa",
            "temp",
            "tempsa",
            "uwndsa",
            "vvel"
          ],
          "700": [
            "rhum",
            "spd",
            "temp",
            "vvel"
          ],
          "850": [
            "dewp",
            "hgtsa",
            "rhum",
            "spd",
            "spdsa",
            "tadv",
            "temp",
            "tempanom",
            "tempsa",
            "thetae",
            "vvel"
          ],
          "925": [
            "rhum",
            "spd",
            "temp",
            "thetae"
          ],
          "sfc": [
            "mslpsa",
            "temp",
            "tempanom",
            "tempsa"
          ],
          "prec": [
            "prec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24"
          ],
          "winter": [
            "kratio",
            "kuchsnow",
            "snow"
          ]
        }
      }
    },
    "AIFSENS": {
      "label": "AIFS-ENS",
      "sectors": [
        "NA",
        "US",
        "NE",
        "MA",
        "SE",
        "NGP",
        "GL",
        "MW",
        "CGP",
        "SGP"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "general": {
          "500": [
            "hghtens",
            "meanwind",
            "windens"
          ],
          "850": [
            "meantemp",
            "tempens"
          ],
          "prec": [
            "meanprec",
            "meanprecacc",
            "paccens"
          ]
        }
      }
    },
    "AIGFS": {
      "label": "AIGFS",
      "sectors": [
        "NA",
        "US",
        "MA",
        "MW"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "general": {
          "250": [
            "hgtsa",
            "rhum",
            "spd",
            "spdsa",
            "uwndsa"
          ],
          "500": [
            "hgtsa",
            "rhum",
            "spd",
            "spdsa",
            "temp",
            "tempsa",
            "uwndsa",
            "vvel"
          ],
          "700": [
            "rhum",
            "spd",
            "temp",
            "vvel"
          ],
          "850": [
            "dewp",
            "hgtsa",
            "rhum",
            "spd",
            "spdsa",
            "tadv",
            "temp",
            "tempanom",
            "tempsa",
            "thetae",
            "vvel"
          ],
          "925": [
            "rhum",
            "spd",
            "temp",
            "thetae"
          ],
          "sfc": [
            "mslpsa",
            "temp",
            "tempanom",
            "tempsa"
          ],
          "prec": [
            "prec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24"
          ]
        }
      }
    },
    "AIGEFS": {
      "label": "AIGEFS",
      "sectors": [
        "NA",
        "US",
        "NE",
        "MA",
        "SE",
        "NGP",
        "GL",
        "MW",
        "CGP",
        "SGP"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "general": {
          "500": [
            "hghtens",
            "meanwind",
            "windens"
          ],
          "850": [
            "meantemp",
            "tempens"
          ],
          "prec": [
            "meanprec",
            "meanprecacc",
            "paccens"
          ]
        }
      }
    },
    "REFS": {
      "label": "REFS",
      "sectors": [
        "NE",
        "MA",
        "SE",
        "NGP",
        "GL",
        "MW",
        "CGP",
        "SGP",
        "NW",
        "GBSN",
        "SW",
        "NIL",
        "DEN",
        "OKC",
        "FLT1",
        "FLT2",
        "FLT3"
      ],
      "runs": [
        0,
        6,
        12,
        18
      ],
      "productsByLevel": {
        "general": {
          "500": [
            "rhum",
            "spd",
            "temp"
          ],
          "700": [
            "fronto",
            "rhum",
            "spd",
            "temp",
            "vvel"
          ],
          "850": [
            "dewp",
            "fronto",
            "rhum",
            "spd",
            "tadv",
            "temp",
            "thetae"
          ],
          "925": [
            "rhum",
            "spd",
            "temp",
            "thetae"
          ],
          "sfc": [
            "avort",
            "temp",
            "thetae"
          ],
          "con": [
            "3kmehi",
            "lapse57",
            "sbcape"
          ],
          "prec": [
            "cloud",
            "prec",
            "precacc",
            "precacc6",
            "precacc12",
            "precacc24",
            "pwat",
            "radar"
          ],
          "winter": [
            "frzra",
            "ptype"
          ]
        }
      }
    }
  },
  "sectors": {
    "US": "Continental U.S.",
    "NA": "North America",
    "CGP": "Central Great Plains",
    "SGP": "Southern Great Plains",
    "SE": "Southeast",
    "SW": "Southwest",
    "GBSN": "Great Basin",
    "CA": "Canada",
    "CAN": "Northwest US / SW Canada",
    "WCAN": "Western Canada",
    "NE": "Northeast",
    "MA": "Mid-Atlantic",
    "NW": "Northwest",
    "NGP": "Northern Great Plains",
    "MW": "Midwest",
    "WLD": "World",
    "AO": "Atlantic",
    "PO": "Pacific",
    "AK": "Alaska",
    "CHI": "Chicago, IL",
    "OKC": "Oklahoma City, OK",
    "DEN": "Denver, CO",
    "DPG": "Dugway (KDPG)",
    "GL": "Great Lakes",
    "NIL": "Northern Illinois",
    "TRACER": "TRACER",
    "FLT1": "Floater 1",
    "FLT2": "Floater 2",
    "FLT3": "Floater 3"
  },
  "levels": {
    "2pvu": "Dynamic Tropopause",
    "250": "250mb",
    "300": "300mb",
    "500": "500mb",
    "700": "700mb",
    "850": "850mb",
    "925": "925mb",
    "sfc": "Surface",
    "con": "Convective",
    "prec": "Precipitation",
    "winter": "Winter"
  },
  "products": {
    "dcape": "Downdraft CAPE",
    "efhl": "Eff. Inflow Helicity",
    "shear": "Bulk Shear (H5-SFC BWD)",
    "uphly": "Updraft Helicity",
    "uphlysw": "UD Helicity Swaths",
    "uphlysw6": "6hr UD Helicity Swaths",
    "cape500": "Prob. of CAPE > 500 J/kg",
    "cape1000": "Prob. of CAPE > 1000 J/kg",
    "cape2000": "Prob. of CAPE > 2000 J/kg",
    "cape3000": "Prob. of CAPE > 3000 J/kg",
    "cape3km": "0-3km CAPE",
    "dgzdepth": "DGZ Depth",
    "snow": "Total Snow Accum. (10:1)",
    "snow1": "1h Snow Accum. (10:1)",
    "snow6": "6h Snow Accum. (10:1)",
    "snow12": "12h Snow Accum. (10:1)",
    "snow24": "24h Snow Accum. (10:1)",
    "kuchsnow": "Total Snow Accum. (Kuchera)",
    "kuchsnow1": "1h Snow Accum. (Kuchera)",
    "kuchsnow6": "6h Snow Accum. (Kuchera)",
    "kuchsnow12": "12h Snow Accum. (Kuchera)",
    "kuchsnow24": "24h Snow Accum. (Kuchera)",
    "kratio": "Kuchera Snow Ratio",
    "snowprob1": "Prob. of Snow > 1 Inch",
    "snowprob4": "Prob. of Snow > 4 Inches",
    "snowprob8": "Prob. of Snow > 8 Inches",
    "snowprob12": "Prob. of Snow > 12 Inches",
    "snowmn12": "12 hr Mean Snowfall",
    "pvort": "Potential Vorticity",
    "radar": "Simulated Reflectivity",
    "cloud": "Average Cloud Cover",
    "vis": "SFC Visibility",
    "3kmehi": "3km EHI",
    "1kmehi": "1km EHI",
    "1kmhel": "0-1km SRH",
    "3kmhel": "0-3km SRH",
    "prec": "SLP and Precipitation",
    "precacc": "Total Precip. Accumulation",
    "precacc1": "1hr Precip. Accumulation",
    "precacc6": "6hr Precip. Accumulation",
    "precacc12": "12hr Precip. Accumulation",
    "precacc24": "24hr Precip. Accumulation",
    "stp": "Significant Tornado Parameter",
    "scp": "Supercell Composite",
    "temp": "Temperature",
    "aptmp": "Apparent Temperature",
    "meanaptmp": "Mean Apparent Temperature",
    "dewp": "Dewpoint Temp.",
    "pwat": "Precipitable Water",
    "avort": "Vorticity",
    "vvel": "Vertical Velocity",
    "thetae": "Theta-E",
    "rhum": "Relative Humidity",
    "spd": "Wind Speed",
    "wetblb": "Wet Bulb Temp.",
    "sbcape": "Surface Based CAPE/CINH",
    "mlcape": "Mean Layer CAPE/CINH",
    "mucape": "Most Unstable CAPE/Shear",
    "cinh": "Convective Inhabition",
    "lift": "Lifted Index",
    "lapse57": "Mid-Level Lapse Rate",
    "lapse81": "Low-Level Lapse Rate",
    "30mbdewp": "Mixed Dewpoint (SFC-30mb AGL)",
    "ptype": "Precipitation Type",
    "frzra": "Freezing Rain Accumulation",
    "cprec": "Convective Precip.",
    "cthk": "Critical Thickness",
    "mconv": "Moisture Flux Convergence",
    "massconv": "Mass Convergence",
    "hgtsa": "Std. Hgt. Anomalies",
    "tempsa": "Std. Temp Anomalies",
    "tempanom": "Temp Anomalies",
    "uwndsa": "Std. U-Wind Anomalies",
    "spdsa": "Std. Wind Speed Anomalies",
    "pwatsa": "Std. PWAT Anomalies",
    "mslpsa": "Std. MSLP Anomalies",
    "tadv": "Temperature Advection",
    "sdev": "Standard Deviation",
    "prob25": "Prob. of Precip. > 0.25\"",
    "prob05": "Prob. of Precip. > 0.5\"",
    "dwpd": "Dewpoint Depression",
    "fronto": "Frontogenesis",
    "ens": "Ensemble Plot",
    "gust": "Wind Gust",
    "irsat": "Sim. IR Satellite",
    "hghtens": "Spaghetti Plot",
    "ceil": "Ceiling Height",
    "pres": "Pressure @ 2PVU",
    "meantemp": "Mean Temperature",
    "meansnacc": "Mean Snow Accumulation",
    "maxsnacc": "Max Snow Accumulation",
    "minsnacc": "Min Snow Accumulation",
    "minprec": "Min Precip. Accumulation",
    "maxprec": "Max Precip. Accumulation",
    "meanprec": "Mean SLP and Precipitation",
    "meanprecacc": "Mean Precip. Accumulation",
    "meanscp": "Mean Supercell Composite",
    "maxscp": "Max Supercell Composite",
    "prob3kmehi": "Probability of 3km EHI",
    "probscp": "Probability of SCP",
    "windens": "Ensemble Wind",
    "tempens": "Ensemble Temperature",
    "capeens": "Ensemble SBCAPE",
    "scpens": "Ensemble SCP",
    "paccens": "Ensemble Prec. Acc.",
    "ptypens": "Ensemble Prec. Type",
    "snens": "Ensemble Snow Acc.",
    "lsi": "Lid Strength Index",
    "vil": "Vertically Integrated Liquid",
    "ltng": "Lightning Density",
    "etop": "Simulated Echo Tops",
    "meanwind": "Mean Wind",
    "hodomap": "Hodograph Map",
    "sndepth": "Total Snow Depth",
    "pblh": "PBL Height",
    "hailswsfc": "Hail Swath (SFC)",
    "hailswclm": "Hail Swath (CLM)",
    "hailswsig01": "Hail Swath (SIG01)"
  }
};
