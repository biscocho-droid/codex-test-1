const APP_DATA = {
  "generatedAt": "2026-06-09T20:30:10.781279+00:00",
  "signalCount": 7,
  "exposureCount": 17,
  "windows": {
    "5": {
      "sampleSize": 17,
      "avgExcessReturn": -0.005375013887284726,
      "hitRate": 0.6470588235294118,
      "avgMaxDrawdown": -0.04141614780187858
    },
    "20": {
      "sampleSize": 17,
      "avgExcessReturn": 0.008533958445692413,
      "hitRate": 0.5294117647058824,
      "avgMaxDrawdown": -0.07973404762957301
    },
    "60": {
      "sampleSize": 17,
      "avgExcessReturn": 0.11410946830950441,
      "hitRate": 0.7647058823529411,
      "avgMaxDrawdown": -0.1366398087817696
    },
    "120": {
      "sampleSize": 14,
      "avgExcessReturn": 0.1831839992850284,
      "hitRate": 0.9285714285714286,
      "avgMaxDrawdown": -0.172691979027599
    },
    "252": {
      "sampleSize": 11,
      "avgExcessReturn": 0.5633260908525031,
      "hitRate": 0.8181818181818182,
      "avgMaxDrawdown": -0.19936848419277273
    },
    "504": {
      "sampleSize": 7,
      "avgExcessReturn": 1.0792955721812754,
      "hitRate": 0.8571428571428571,
      "avgMaxDrawdown": -0.25180460453727954
    },
    "756": {
      "sampleSize": 7,
      "avgExcessReturn": 1.3504582505017386,
      "hitRate": 0.5714285714285714,
      "avgMaxDrawdown": -0.432118761640098
    }
  },
  "categories": [
    {
      "slug": "food",
      "label": "Food",
      "windows": {
        "5": {
          "excess": -0.03674928992901588,
          "hitRate": 0.3333333333333333,
          "samples": 6
        },
        "20": {
          "excess": -0.023640026535946768,
          "hitRate": 0.3333333333333333,
          "samples": 6
        },
        "60": {
          "excess": -0.07609047837128656,
          "hitRate": 0.5,
          "samples": 6
        },
        "120": {
          "excess": -0.015602589888434992,
          "hitRate": 0.6666666666666666,
          "samples": 3
        },
        "252": {
          "excess": null,
          "hitRate": null,
          "samples": 0
        },
        "504": {
          "excess": null,
          "hitRate": null,
          "samples": 0
        },
        "756": {
          "excess": null,
          "hitRate": null,
          "samples": 0
        }
      }
    },
    {
      "slug": "health",
      "label": "Health",
      "windows": {
        "5": {
          "excess": 0.017519631895863363,
          "hitRate": 1.0,
          "samples": 4
        },
        "20": {
          "excess": 0.021946333320517486,
          "hitRate": 0.5,
          "samples": 4
        },
        "60": {
          "excess": 0.15483235534383416,
          "hitRate": 1.0,
          "samples": 4
        },
        "120": {
          "excess": 0.2296041209387097,
          "hitRate": 1.0,
          "samples": 4
        },
        "252": {
          "excess": 0.6986425156668521,
          "hitRate": 1.0,
          "samples": 4
        },
        "504": {
          "excess": 1.0114847432657748,
          "hitRate": 1.0,
          "samples": 4
        },
        "756": {
          "excess": 0.7181900230477324,
          "hitRate": 0.5,
          "samples": 4
        }
      }
    },
    {
      "slug": "internet",
      "label": "Internet",
      "windows": {
        "5": {
          "excess": 0.008434567986685928,
          "hitRate": 0.7142857142857143,
          "samples": 7
        },
        "20": {
          "excess": 0.02844744564434024,
          "hitRate": 0.7142857142857143,
          "samples": 7
        },
        "60": {
          "excess": 0.25386777287342255,
          "hitRate": 0.8571428571428571,
          "samples": 7
        },
        "120": {
          "excess": 0.24185246798583765,
          "hitRate": 1.0,
          "samples": 7
        },
        "252": {
          "excess": 0.4860024195300178,
          "hitRate": 0.7142857142857143,
          "samples": 7
        },
        "504": {
          "excess": 1.169710010735276,
          "hitRate": 0.6666666666666666,
          "samples": 3
        },
        "756": {
          "excess": 2.193482553773747,
          "hitRate": 0.6666666666666666,
          "samples": 3
        }
      }
    }
  ],
  "trends": [
    {
      "slug": "chatgpt",
      "label": "Chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "thesis": "Consumer and enterprise AI attention can spill into infrastructure and software winners.",
      "why": "The best outcomes are showing up after the market has time to reprice infrastructure and platform beneficiaries, not in the first few weeks.",
      "windows": {
        "5": {
          "excess": 0.02135433612118211,
          "hitRate": 0.8333333333333334
        },
        "20": {
          "excess": 0.03876149644565733,
          "hitRate": 0.8333333333333334
        },
        "60": {
          "excess": 0.18653552537305643,
          "hitRate": 0.8333333333333334
        },
        "120": {
          "excess": 0.27469020757009593,
          "hitRate": 1.0
        },
        "252": {
          "excess": 0.4993685555759311,
          "hitRate": 0.6666666666666666
        },
        "504": {
          "excess": 1.169710010735276,
          "hitRate": 0.6666666666666666
        },
        "756": {
          "excess": 2.193482553773747,
          "hitRate": 0.6666666666666666
        }
      }
    },
    {
      "slug": "ozempic",
      "label": "Ozempic",
      "category": "health",
      "benchmark": "XLV",
      "thesis": "GLP-1 demand can identify direct therapeutic winners before adjacent effects are fully priced.",
      "why": "This family compounds well over longer holds, which makes it more useful as a medium- and long-horizon healthcare signal than a fast trade.",
      "windows": {
        "5": {
          "excess": 0.02413528092386763,
          "hitRate": 1.0
        },
        "20": {
          "excess": 0.019677000510764042,
          "hitRate": 0.5
        },
        "60": {
          "excess": 0.1249590308696803,
          "hitRate": 1.0
        },
        "120": {
          "excess": 0.24128893973393684,
          "hitRate": 1.0
        },
        "252": {
          "excess": 0.6625755317408109,
          "hitRate": 1.0
        },
        "504": {
          "excess": 1.2866496338467088,
          "hitRate": 1.0
        },
        "756": {
          "excess": 0.7314333769292373,
          "hitRate": 0.5
        }
      }
    },
    {
      "slug": "protein-soda",
      "label": "Protein Soda",
      "category": "food",
      "benchmark": "XLP",
      "thesis": "Functional-beverage attention can reveal emerging consumer taste shifts before broad sell-side coverage.",
      "why": "The theme is still too new and too noisy. It stays in the app as an emerging watchlist signal, not a promoted high-confidence family.",
      "windows": {
        "5": {
          "excess": -0.03674928992901588,
          "hitRate": 0.3333333333333333
        },
        "20": {
          "excess": -0.023640026535946768,
          "hitRate": 0.3333333333333333
        },
        "60": {
          "excess": -0.07609047837128656,
          "hitRate": 0.5
        },
        "120": {
          "excess": -0.015602589888434992,
          "hitRate": 0.6666666666666666
        },
        "252": {
          "excess": null,
          "hitRate": null
        },
        "504": {
          "excess": null,
          "hitRate": null
        },
        "756": {
          "excess": null,
          "hitRate": null
        }
      }
    },
    {
      "slug": "robotaxi",
      "label": "Robotaxi",
      "category": "internet",
      "benchmark": "QQQ",
      "thesis": "Autonomy attention can influence expectations around mobility and AI platform adoption.",
      "why": "The payoff is lumpy because the theme is narrative-driven, but when it hits the mapped winner can outrun the benchmark hard.",
      "windows": {
        "5": {
          "excess": -0.06908404082029118,
          "hitRate": 0.0
        },
        "20": {
          "excess": -0.033436859163562316,
          "hitRate": 0.0
        },
        "60": {
          "excess": 0.6578612578756193,
          "hitRate": 1.0
        },
        "120": {
          "excess": 0.044826030480288104,
          "hitRate": 1.0
        },
        "252": {
          "excess": 0.40580560325453807,
          "hitRate": 1.0
        },
        "504": {
          "excess": null,
          "hitRate": null
        },
        "756": {
          "excess": null,
          "hitRate": null
        }
      }
    },
    {
      "slug": "weight-loss-drugs",
      "label": "Weight Loss Drugs",
      "category": "health",
      "benchmark": "XLV",
      "thesis": "Broader anti-obesity attention can identify second-order healthcare and consumer effects.",
      "why": "This is one of the cleanest families in the model. Both the signal and the exposure mapping stay strong as the horizon extends.",
      "windows": {
        "5": {
          "excess": 0.010903982867859097,
          "hitRate": 1.0
        },
        "20": {
          "excess": 0.02421566613027093,
          "hitRate": 0.5
        },
        "60": {
          "excess": 0.18470567981798802,
          "hitRate": 1.0
        },
        "120": {
          "excess": 0.21791930214348254,
          "hitRate": 1.0
        },
        "252": {
          "excess": 0.7347094995928933,
          "hitRate": 1.0
        },
        "504": {
          "excess": 0.7363198526848408,
          "hitRate": 1.0
        },
        "756": {
          "excess": 0.7049466691662274,
          "hitRate": 0.5
        }
      }
    }
  ],
  "signals": [
    {
      "date": "2026-02-01",
      "trend": "protein soda",
      "category": "food",
      "score": 52.3
    },
    {
      "date": "2025-09-01",
      "trend": "protein soda",
      "category": "food",
      "score": 52.7
    },
    {
      "date": "2025-03-01",
      "trend": "chatgpt",
      "category": "internet",
      "score": 68.7
    },
    {
      "date": "2024-10-01",
      "trend": "robotaxi",
      "category": "internet",
      "score": 95.0
    },
    {
      "date": "2023-03-01",
      "trend": "chatgpt",
      "category": "internet",
      "score": 81.2
    },
    {
      "date": "2023-02-01",
      "trend": "weight loss drugs",
      "category": "health",
      "score": 57.1
    },
    {
      "date": "2022-10-01",
      "trend": "ozempic",
      "category": "health",
      "score": 63.5
    }
  ],
  "exposures": [
    {
      "date": "2026-02-01",
      "trend": "protein soda",
      "category": "food",
      "benchmark": "XLP",
      "ticker": "CELH",
      "role": "beneficiary",
      "rationale": "Health-oriented beverage brand read-through.",
      "windows": {
        "5": -0.10326386577273872,
        "20": -0.12037744799446115,
        "60": -0.3504262124646931,
        "120": null,
        "252": null,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2026-02-01",
      "trend": "protein soda",
      "category": "food",
      "benchmark": "XLP",
      "ticker": "MNST",
      "role": "beneficiary",
      "rationale": "Functional beverage adjacency and innovation leverage.",
      "windows": {
        "5": -0.03714066614781808,
        "20": -0.06436044137838448,
        "60": -0.03873648837091637,
        "120": null,
        "252": null,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2026-02-01",
      "trend": "protein soda",
      "category": "food",
      "benchmark": "XLP",
      "ticker": "PEP",
      "role": "beneficiary",
      "rationale": "Better-for-you beverage adjacency and distribution scale.",
      "windows": {
        "5": 0.03794139681897124,
        "20": 0.02422137690083903,
        "60": 0.022693914835803186,
        "120": null,
        "252": null,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2025-09-01",
      "trend": "protein soda",
      "category": "food",
      "benchmark": "XLP",
      "ticker": "CELH",
      "role": "beneficiary",
      "rationale": "Health-oriented beverage brand read-through.",
      "windows": {
        "5": -0.08843690852849406,
        "20": -0.04223094454220222,
        "60": -0.31665427005510915,
        "120": -0.303408752985422,
        "252": null,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2025-09-01",
      "trend": "protein soda",
      "category": "food",
      "benchmark": "XLP",
      "ticker": "MNST",
      "role": "beneficiary",
      "rationale": "Functional beverage adjacency and innovation leverage.",
      "windows": {
        "5": 0.00985860768261615,
        "20": 0.09564088510426483,
        "60": 0.21934508928692986,
        "120": 0.23559456045825722,
        "252": null,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2025-09-01",
      "trend": "protein soda",
      "category": "food",
      "benchmark": "XLP",
      "ticker": "PEP",
      "role": "beneficiary",
      "rationale": "Better-for-you beverage adjacency and distribution scale.",
      "windows": {
        "5": -0.039454303626631826,
        "20": -0.03473358730573661,
        "60": 0.007235096540266217,
        "120": 0.02100642286185983,
        "252": null,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2025-03-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "GOOGL",
      "role": "beneficiary",
      "rationale": "Search and model platform response to generative AI adoption.",
      "windows": {
        "5": 0.04324652233172732,
        "20": -0.017814009811797593,
        "60": -0.012313637583120096,
        "120": 0.08317530804189954,
        "252": 0.5871683549873024,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2025-03-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "MSFT",
      "role": "beneficiary",
      "rationale": "Platform distribution and enterprise AI monetization.",
      "windows": {
        "5": 0.027486703159152137,
        "20": 0.021466966057303027,
        "60": 0.13390106351059283,
        "120": 0.15645268614068986,
        "252": -0.1839837793418082,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2025-03-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "NVDA",
      "role": "beneficiary",
      "rationale": "AI compute demand and infrastructure bottleneck exposure.",
      "windows": {
        "5": -0.01314392546839216,
        "20": 0.005476091549949658,
        "60": 0.13649423303838848,
        "120": 0.40700682327972815,
        "252": 0.3702269368570479,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2024-10-01",
      "trend": "robotaxi",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "TSLA",
      "role": "beneficiary",
      "rationale": "Direct robotaxi narrative and autonomy optionality exposure.",
      "windows": {
        "5": -0.06908404082029118,
        "20": -0.033436859163562316,
        "60": 0.6578612578756193,
        "120": 0.044826030480288104,
        "252": 0.40580560325453807,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2023-03-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "GOOGL",
      "role": "beneficiary",
      "rationale": "Search and model platform response to generative AI adoption.",
      "windows": {
        "5": 0.020316353737016346,
        "20": 0.04650339425807015,
        "60": 0.19810700438660933,
        "120": 0.17699072553725026,
        "252": -0.023120093533818498,
        "504": 0.17556434964089362,
        "756": 1.231920441795216
      }
    },
    {
      "date": "2023-03-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "MSFT",
      "role": "beneficiary",
      "rationale": "Platform distribution and enterprise AI monetization.",
      "windows": {
        "5": 0.0074367673853001914,
        "20": 0.06347108403734447,
        "60": 0.1578918106123779,
        "120": 0.06349946911414817,
        "252": 0.1601931820640694,
        "504": -0.09188763808355915,
        "756": -0.39677174153280403
      }
    },
    {
      "date": "2023-03-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "NVDA",
      "role": "beneficiary",
      "rationale": "AI compute demand and infrastructure bottleneck exposure.",
      "windows": {
        "5": 0.042783595582288836,
        "20": 0.11346545258307428,
        "60": 0.5051326782734902,
        "120": 0.7610162333068595,
        "252": 2.0857267324227937,
        "504": 3.4254533206484936,
        "756": 5.745298961058829
      }
    },
    {
      "date": "2023-02-01",
      "trend": "weight loss drugs",
      "category": "health",
      "benchmark": "XLV",
      "ticker": "LLY",
      "role": "beneficiary",
      "rationale": "Large-cap anti-obesity leadership and prescribing leverage.",
      "windows": {
        "5": 0.006420884008248806,
        "20": -0.030713251365497518,
        "60": 0.15884403635554567,
        "120": 0.3102442120033946,
        "252": 0.8907654012097439,
        "504": 1.3545614973692877,
        "756": 1.9261214963143356
      }
    },
    {
      "date": "2023-02-01",
      "trend": "weight loss drugs",
      "category": "health",
      "benchmark": "XLV",
      "ticker": "NVO",
      "role": "beneficiary",
      "rationale": "Large-cap anti-obesity leadership and prescribing leverage.",
      "windows": {
        "5": 0.015387081727469387,
        "20": 0.07914458362603938,
        "60": 0.21056732328043037,
        "120": 0.1255943922835705,
        "252": 0.5786535979760428,
        "504": 0.11807820800039392,
        "756": -0.5162281579818808
      }
    },
    {
      "date": "2022-10-01",
      "trend": "ozempic",
      "category": "health",
      "benchmark": "XLV",
      "ticker": "LLY",
      "role": "beneficiary",
      "rationale": "Direct obesity and diabetes drug exposure.",
      "windows": {
        "5": 0.02143548365409864,
        "20": 0.052047302423673614,
        "60": 0.043302700737521516,
        "120": 0.004410688409139718,
        "252": 0.6184896200652925,
        "504": 1.5409402142187478,
        "756": 1.468259381879952
      }
    },
    {
      "date": "2022-10-01",
      "trend": "ozempic",
      "category": "health",
      "benchmark": "XLV",
      "ticker": "NVO",
      "role": "beneficiary",
      "rationale": "Direct obesity and diabetes drug exposure.",
      "windows": {
        "5": 0.02683507819363662,
        "20": -0.01269330140214553,
        "60": 0.20661536100183908,
        "120": 0.47816719105873395,
        "252": 0.7066614434163292,
        "504": 1.0323590534746698,
        "756": -0.005392628021477552
      }
    }
  ]
};

const state = {
  selectedWindow: "252",
  categoryFilter: "all",
  roleFilter: "all",
  activeTrend: "weight-loss-drugs",
};

const CATEGORY_META = {
  health: { label: "Health", accent: "#2fa36b" },
  internet: { label: "Internet", accent: "#3f7cff" },
  food: { label: "Food", accent: "#d54f6c" },
};

const WINDOW_LABELS = {
  "5": "5d",
  "20": "20d",
  "60": "60d",
  "120": "120d",
  "252": "1Y",
  "504": "2Y",
  "756": "3Y",
};

const DETAIL_WINDOWS = ["60", "120", "252", "504", "756"];

const els = {
  reportDate: document.getElementById("report-date"),
  signalCount: document.getElementById("signal-count"),
  exposureCount: document.getElementById("exposure-count"),
  bestWindow: document.getElementById("best-window"),
  bestWindowNote: document.getElementById("best-window-note"),
  bestCategory: document.getElementById("best-category"),
  bestCategoryNote: document.getElementById("best-category-note"),
  spotlightTrend: document.getElementById("spotlight-trend"),
  spotlightWindow: document.getElementById("spotlight-window"),
  spotlightExcess: document.getElementById("spotlight-excess"),
  spotlightHitRate: document.getElementById("spotlight-hit-rate"),
  signalFeed: document.getElementById("signal-feed"),
  trendDetail: document.getElementById("trend-detail"),
  narrativeCard: document.getElementById("narrative-card"),
  windowSummary: document.getElementById("window-summary"),
  categoryLegend: document.getElementById("category-legend"),
  categoryBoard: document.getElementById("category-board"),
  trendBoard: document.getElementById("trend-board"),
  signalTimeline: document.getElementById("signal-timeline"),
  exposureTableBody: document.getElementById("exposure-table-body"),
  categoryFilter: document.getElementById("category-filter"),
  roleFilter: document.getElementById("role-filter"),
  windowPills: [...document.querySelectorAll(".pill")],
};

function fmtPct(value) {
  if (value == null) return "n/a";
  return `${(value * 100).toFixed(1)}%`;
}

function fmtShortPct(value) {
  if (value == null) return "n/a";
  return `${(value * 100).toFixed(2)}%`;
}

function toneClass(value) {
  if (value == null) return "tone-neutral";
  return value >= 0 ? "tone-positive" : "tone-negative";
}

function prettyDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function windowLabel(window) {
  return WINDOW_LABELS[window] || `${window}d`;
}

function buildFilters() {
  const categories = [...new Set(APP_DATA.exposures.map((item) => item.category))].sort();
  els.categoryFilter.innerHTML = ['<option value="all">All</option>']
    .concat(categories.map((category) => `<option value="${category}">${capitalize(category)}</option>`))
    .join("");

  els.categoryFilter.addEventListener("change", (event) => {
    state.categoryFilter = event.target.value;
    renderExposureTable();
  });

  els.roleFilter.addEventListener("change", (event) => {
    state.roleFilter = event.target.value;
    renderExposureTable();
  });
}

function latestSignalForTrend(trendSlug) {
  return APP_DATA.signals.find((item) => slugify(item.trend) === trendSlug);
}

function exposuresForTrend(trendSlug) {
  return APP_DATA.exposures.filter((item) => slugify(item.trend) === trendSlug);
}

function activeTrendData() {
  return APP_DATA.trends.find((item) => item.slug === state.activeTrend) || APP_DATA.trends[0];
}

function setActiveTrend(trendSlug) {
  state.activeTrend = trendSlug;
  renderSignalFeed();
  renderTrendDetail();
  renderExposureTable();
}

function bindWindowPills() {
  els.windowPills.forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedWindow = button.dataset.window;
      els.windowPills.forEach((pill) => pill.classList.toggle("active", pill === button));
      renderAll();
    });
  });
}

function renderSignalFeed() {
  const feed = APP_DATA.signals
    .map((signal) => {
      const trend = APP_DATA.trends.find((item) => item.slug === slugify(signal.trend));
      const windowStats = trend?.windows[state.selectedWindow];
      const topStocks = exposuresForTrend(slugify(signal.trend))
        .filter((item) => item.role === "beneficiary")
        .sort((a, b) => (b.windows[state.selectedWindow] ?? -Infinity) - (a.windows[state.selectedWindow] ?? -Infinity))
        .slice(0, 3);
      return {
        ...signal,
        slug: slugify(signal.trend),
        selectedExcess: windowStats?.excess ?? null,
        selectedHitRate: windowStats?.hitRate ?? null,
        topStocks,
      };
    })
    .sort((a, b) => {
      const aTime = new Date(`${a.date}T00:00:00`).getTime();
      const bTime = new Date(`${b.date}T00:00:00`).getTime();
      if (bTime !== aTime) return bTime - aTime;
      return (b.selectedExcess ?? -Infinity) - (a.selectedExcess ?? -Infinity);
    });

  els.signalFeed.innerHTML = feed.map((item) => `
    <button type="button" class="signal-feed-card ${item.slug === state.activeTrend ? "signal-feed-card-active" : ""}" data-signal="${item.slug}" style="--signal-accent:${CATEGORY_META[item.category]?.accent || "#999"}">
      <div class="signal-feed-top">
        <span class="signal-feed-date">${prettyDate(item.date)}</span>
        <span class="signal-feed-score">Score ${item.score}</span>
      </div>
      <div class="signal-feed-main">
        <strong>${item.trend}</strong>
        <span>${capitalize(item.category)} · ${windowLabel(state.selectedWindow)} excess ${fmtPct(item.selectedExcess)}</span>
      </div>
      <div class="signal-stock-strip">
        ${item.topStocks.length ? item.topStocks.map((stock) => `
          <span class="stock-pill ${toneClass(stock.windows[state.selectedWindow])}">
            ${stock.ticker} <small>${fmtPct(stock.windows[state.selectedWindow])}</small>
          </span>
        `).join("") : `<span class="stock-pill tone-neutral">No mapped beneficiary</span>`}
      </div>
      <div class="signal-feed-bottom">
        <span>Hit rate ${fmtPct(item.selectedHitRate)}</span>
        <span class="${toneClass(item.selectedExcess)}">${fmtPct(item.selectedExcess)}</span>
      </div>
    </button>
  `).join("");

  [...els.signalFeed.querySelectorAll(".signal-feed-card")].forEach((button) => {
    button.addEventListener("click", () => setActiveTrend(button.dataset.signal));
  });
}

function renderTrendDetail() {
  const trend = activeTrendData();
  const signal = latestSignalForTrend(trend.slug);
  const exposures = exposuresForTrend(trend.slug)
    .sort((a, b) => (b.windows[state.selectedWindow] ?? -Infinity) - (a.windows[state.selectedWindow] ?? -Infinity))
  const beneficiaries = exposures.filter((item) => item.role === "beneficiary");
  const risks = exposures.filter((item) => item.role === "risk");
  const stats = trend.windows[state.selectedWindow];
  const phaseLabel = (stats?.excess ?? -Infinity) > 0.08 ? "High-conviction family" : (stats?.excess ?? -Infinity) > 0 ? "Constructive but selective" : "Needs more filtering";

  els.trendDetail.innerHTML = `
    <div class="detail-hero" style="--detail-accent:${CATEGORY_META[trend.category]?.accent || "#999"}">
      <div>
        <p class="detail-category">${capitalize(trend.category)} · ${trend.benchmark}</p>
        <h3>${trend.label}</h3>
        <p class="detail-thesis">${trend.thesis}</p>
      </div>
      <div class="detail-phase">${phaseLabel}</div>
    </div>
    <div class="detail-metric-grid">
      <article>
        <span>Latest trigger</span>
        <strong>${signal ? prettyDate(signal.date) : "n/a"}</strong>
      </article>
      <article>
        <span>Selected excess</span>
        <strong class="${toneClass(stats.excess)}">${fmtPct(stats.excess)}</strong>
      </article>
      <article>
        <span>Hit rate</span>
        <strong>${fmtPct(stats.hitRate)}</strong>
      </article>
      <article>
        <span>Signal score</span>
        <strong>${signal ? signal.score : "n/a"}</strong>
      </article>
    </div>
    <div class="detail-section">
      <p class="detail-section-label">Why it matters</p>
      <p>${trend.why}</p>
    </div>
    <div class="detail-section">
      <p class="detail-section-label">Likely beneficiary stocks</p>
      <div class="detail-exposure-list">
        ${beneficiaries.length ? beneficiaries.map(renderExposureCard).join("") : `<p class="empty-detail">No beneficiary stocks mapped yet.</p>`}
      </div>
    </div>
    ${risks.length ? `
      <div class="detail-section">
        <p class="detail-section-label">Possible losers or risk exposures</p>
        <div class="detail-exposure-list">
          ${risks.map(renderExposureCard).join("")}
        </div>
      </div>
    ` : ""}
    <div class="detail-section">
      <p class="detail-section-label">Window read</p>
      <div class="detail-window-strip">
        ${DETAIL_WINDOWS.filter((window) => trend.windows[window] && trend.windows[window].excess != null).map((window) => `
          <article class="detail-window-card ${window === state.selectedWindow ? "detail-window-card-active" : ""}">
            <span>${windowLabel(window)}</span>
            <strong class="${toneClass(trend.windows[window]?.excess)}">${fmtPct(trend.windows[window]?.excess)}</strong>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function renderExposureCard(item) {
  const selectedValue = item.windows[state.selectedWindow];
  const profile = DETAIL_WINDOWS.filter((window) => item.windows[window] != null)
    .map((window) => `<span>${windowLabel(window)} <strong class="${toneClass(item.windows[window])}">${fmtPct(item.windows[window])}</strong></span>`)
    .join("");
  return `
    <article class="detail-exposure-item">
      <div class="detail-exposure-top">
        <div>
          <strong class="ticker-title">${item.ticker}</strong>
          <p>${item.benchmark} benchmark</p>
        </div>
        <span class="role-pill role-${item.role}">${capitalize(item.role)}</span>
      </div>
      <p>${item.rationale}</p>
      <div class="exposure-scoreline">
        <span class="${toneClass(selectedValue)}">${windowLabel(state.selectedWindow)} excess ${fmtPct(selectedValue)}</span>
      </div>
      <div class="exposure-profile">${profile}</div>
    </article>
  `;
}

function renderHero() {
  const generated = new Date(APP_DATA.generatedAt);
  els.reportDate.textContent = `Latest backtest run: ${generated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
  els.signalCount.textContent = String(APP_DATA.signalCount);
  els.exposureCount.textContent = String(APP_DATA.exposureCount);

  const bestWindowEntry = Object.entries(APP_DATA.windows)
    .filter(([, value]) => value.avgExcessReturn != null)
    .sort((a, b) => b[1].avgExcessReturn - a[1].avgExcessReturn)[0];
  const bestCategoryEntry = [...APP_DATA.categories]
    .sort((a, b) => (b.windows[state.selectedWindow]?.excess ?? -Infinity) - (a.windows[state.selectedWindow]?.excess ?? -Infinity))[0];

  els.bestWindow.textContent = windowLabel(bestWindowEntry[0]);
  els.bestWindowNote.textContent = `${fmtPct(bestWindowEntry[1].avgExcessReturn)} avg excess return`;
  els.bestCategory.textContent = bestCategoryEntry.label;
  els.bestCategoryNote.textContent = `${windowLabel(state.selectedWindow)} excess ${fmtPct(bestCategoryEntry.windows[state.selectedWindow]?.excess)}`;

  const spotlight = [...APP_DATA.trends]
    .filter((item) => item.windows[state.selectedWindow]?.excess != null)
    .sort((a, b) => b.windows[state.selectedWindow].excess - a.windows[state.selectedWindow].excess)[0];
  els.spotlightTrend.textContent = spotlight.label;
  els.spotlightWindow.textContent = `${capitalize(spotlight.category)} · ${windowLabel(state.selectedWindow)} horizon`;
  els.spotlightExcess.textContent = fmtPct(spotlight.windows[state.selectedWindow].excess);
  els.spotlightExcess.className = toneClass(spotlight.windows[state.selectedWindow].excess);
  els.spotlightHitRate.textContent = fmtPct(spotlight.windows[state.selectedWindow].hitRate);
}

function renderWindowSummary() {
  els.windowSummary.innerHTML = Object.entries(APP_DATA.windows).map(([window, metrics]) => `
    <article class="window-card ${window === state.selectedWindow ? "window-card-active" : ""}">
      <div class="window-topline">
      <span class="window-label">${windowLabel(window)} horizon</span>
        <span class="window-samples">${metrics.sampleSize} tests</span>
      </div>
      <strong class="window-value ${toneClass(metrics.avgExcessReturn)}">${fmtPct(metrics.avgExcessReturn)}</strong>
      <p>Average excess return vs mapped benchmark</p>
      <div class="window-stats">
        <span>Hit rate ${fmtPct(metrics.hitRate)}</span>
        <span>Avg drawdown ${fmtPct(metrics.avgMaxDrawdown)}</span>
      </div>
    </article>
  `).join("");
}

function renderNarrative() {
  const selected = APP_DATA.windows[state.selectedWindow];
  const bestTrend = [...APP_DATA.trends]
    .filter((item) => item.windows[state.selectedWindow]?.excess != null)
    .sort((a, b) => (b.windows[state.selectedWindow].excess - a.windows[state.selectedWindow].excess))[0];

  const stance = selected.avgExcessReturn > 0.02
    ? "The model has a usable medium-term bias at this window."
    : selected.avgExcessReturn >= 0
      ? "The signal is barely positive here and needs tighter filtering."
      : "This horizon is too noisy to trust without stronger confirmation.";

  els.narrativeCard.innerHTML = `
    <p class="narrative-kicker">${windowLabel(state.selectedWindow)} operating view</p>
    <p class="narrative-body">${stance}</p>
    <div class="narrative-metrics">
      <div>
        <span>Top trend family</span>
        <strong>${bestTrend.label}</strong>
      </div>
      <div>
        <span>Avg excess</span>
        <strong class="${toneClass(bestTrend.windows[state.selectedWindow].excess)}">${fmtPct(bestTrend.windows[state.selectedWindow].excess)}</strong>
      </div>
      <div>
        <span>Hit rate</span>
        <strong>${fmtPct(selected.hitRate)}</strong>
      </div>
    </div>
  `;
}

function renderCategoryBoard() {
  const ranked = [...APP_DATA.categories].sort(
    (a, b) => (b.windows[state.selectedWindow]?.excess ?? -Infinity) - (a.windows[state.selectedWindow]?.excess ?? -Infinity),
  );

  els.categoryLegend.innerHTML = ranked.map((item) => `
    <span class="legend-chip" style="--legend-accent:${CATEGORY_META[item.slug]?.accent || "#999"}">
      <span class="legend-swatch"></span>${item.label}
    </span>
  `).join("");

  els.categoryBoard.innerHTML = ranked.map((item, index) => {
    const windowStats = item.windows[state.selectedWindow];
    const width = Math.max(8, Math.min(100, ((windowStats.excess ?? 0) + 0.15) * 250));
    return `
      <article class="rank-card" style="--card-accent:${CATEGORY_META[item.slug]?.accent || "#999"}">
        <div class="rank-head">
          <span class="rank-number">0${index + 1}</span>
          <div>
            <h3>${item.label}</h3>
            <p>${windowStats.samples} samples · hit rate ${fmtPct(windowStats.hitRate)}</p>
          </div>
          <strong class="${toneClass(windowStats.excess)}">${fmtPct(windowStats.excess)}</strong>
        </div>
        <div class="rank-bar-track">
          <div class="rank-bar ${toneClass(windowStats.excess)}" style="width:${width}%"></div>
        </div>
      </article>
    `;
  }).join("");
}

function renderTrendBoard() {
  const ranked = [...APP_DATA.trends].sort(
    (a, b) => (b.windows[state.selectedWindow]?.excess ?? -Infinity) - (a.windows[state.selectedWindow]?.excess ?? -Infinity),
  );

  els.trendBoard.innerHTML = ranked.map((item) => {
    const stats = item.windows[state.selectedWindow];
    return `
      <button type="button" class="trend-chip ${toneClass(stats.excess)}" data-trend="${item.slug}" style="--trend-accent:${CATEGORY_META[item.category]?.accent || "#999"}">
        <span class="trend-chip-label">${item.label}</span>
        <strong>${fmtPct(stats.excess)}</strong>
      </button>
    `;
  }).join("");

  [...els.trendBoard.querySelectorAll(".trend-chip")].forEach((button) => {
    button.addEventListener("click", () => {
      state.categoryFilter = "all";
      els.categoryFilter.value = "all";
      setActiveTrend(button.dataset.trend);
    });
  });
}

function renderTimeline() {
  els.signalTimeline.innerHTML = APP_DATA.signals.map((item) => `
    <button type="button" class="timeline-item ${slugify(item.trend) === state.activeTrend ? "timeline-item-active" : ""}" data-timeline="${slugify(item.trend)}">
      <div class="timeline-dot"></div>
      <div class="timeline-copy">
        <p class="timeline-date">${prettyDate(item.date)}</p>
        <h3>${item.trend}</h3>
        <p>${capitalize(item.category)} · score ${item.score}</p>
      </div>
    </button>
  `).join("");

  [...els.signalTimeline.querySelectorAll(".timeline-item")].forEach((button) => {
    button.addEventListener("click", () => setActiveTrend(button.dataset.timeline));
  });
}

function renderExposureTable(rows = null) {
  const sourceRows = rows ?? APP_DATA.exposures.filter((item) => {
    const categoryMatch = state.categoryFilter === "all" || item.category === state.categoryFilter;
    const roleMatch = state.roleFilter === "all" || item.role === state.roleFilter;
    return categoryMatch && roleMatch;
  });
  const selectedRows = rows ?? (state.activeTrend
    ? sourceRows.filter((item) => slugify(item.trend) === state.activeTrend)
    : sourceRows);

  const sorted = [...selectedRows].sort(
    (a, b) => (b.windows[state.selectedWindow] ?? -Infinity) - (a.windows[state.selectedWindow] ?? -Infinity),
  );

  els.exposureTableBody.innerHTML = sorted.map((item) => {
    const selectedValue = item.windows[state.selectedWindow];
    const hitProfile = DETAIL_WINDOWS.filter((window) => item.windows[window] != null)
      .map((window) => `${windowLabel(window)} ${fmtShortPct(item.windows[window])}`)
      .join(" · ");
    return `
      <tr>
        <td>${prettyDate(item.date)}</td>
        <td>${item.trend}</td>
        <td><span class="table-category" style="--table-accent:${CATEGORY_META[item.category]?.accent || "#999"}">${capitalize(item.category)}</span></td>
        <td>${item.benchmark}</td>
        <td>${item.ticker}</td>
        <td><span class="role-pill role-${item.role}">${capitalize(item.role)}</span></td>
        <td class="${toneClass(selectedValue)}">${fmtPct(selectedValue)}</td>
        <td class="muted-cell">${hitProfile}</td>
        <td class="rationale-cell">${item.rationale}</td>
      </tr>
    `;
  }).join("");
}

function filterByTrend(trendSlug) {
  setActiveTrend(trendSlug);
}

function slugify(value) {
  return String(value).toLowerCase().replaceAll(" ", "-");
}

function capitalize(value) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

function renderAll() {
  renderHero();
  renderSignalFeed();
  renderTrendDetail();
  renderWindowSummary();
  renderNarrative();
  renderCategoryBoard();
  renderTrendBoard();
  renderTimeline();
  renderExposureTable();
}

buildFilters();
bindWindowPills();
renderAll();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
