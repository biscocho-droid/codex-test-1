const APP_DATA = {
  "generatedAt": "2026-06-09T00:25:27.500126+00:00",
  "signalCount": 7,
  "exposureCount": 17,
  "windows": {
    "5": {
      "sampleSize": 17,
      "avgExcessReturn": -0.008158958507849031,
      "hitRate": 0.5882352941176471,
      "avgMaxDrawdown": -0.037397985322622965
    },
    "20": {
      "sampleSize": 17,
      "avgExcessReturn": 0.0034008618147075304,
      "hitRate": 0.47058823529411764,
      "avgMaxDrawdown": -0.08906701774125392
    },
    "60": {
      "sampleSize": 17,
      "avgExcessReturn": 0.09483445277127973,
      "hitRate": 0.7647058823529411,
      "avgMaxDrawdown": -0.1522488818398109
    },
    "120": {
      "sampleSize": 14,
      "avgExcessReturn": 0.1675895055242344,
      "hitRate": 0.8571428571428571,
      "avgMaxDrawdown": -0.1916458250428597
    },
    "252": {
      "sampleSize": 11,
      "avgExcessReturn": 0.5516705708332416,
      "hitRate": 0.8181818181818182,
      "avgMaxDrawdown": -0.21622755153658987
    },
    "504": {
      "sampleSize": 7,
      "avgExcessReturn": 1.0792957964299446,
      "hitRate": 0.8571428571428571,
      "avgMaxDrawdown": -0.25180461356005857
    },
    "756": {
      "sampleSize": 7,
      "avgExcessReturn": 1.3504585604025756,
      "hitRate": 0.5714285714285714,
      "avgMaxDrawdown": -0.43211873416314406
    }
  },
  "categories": [
    {
      "slug": "food",
      "label": "Food",
      "windows": {
        "5": {
          "excess": -0.036749337528627656,
          "hitRate": 0.3333333333333333,
          "samples": 6
        },
        "20": {
          "excess": -0.023640091413747788,
          "hitRate": 0.3333333333333333,
          "samples": 6
        },
        "60": {
          "excess": -0.07609047805044455,
          "hitRate": 0.5,
          "samples": 6
        },
        "120": {
          "excess": -0.015602630363423168,
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
          "excess": 0.017519699775518316,
          "hitRate": 1.0,
          "samples": 4
        },
        "20": {
          "excess": 0.02194639796656722,
          "hitRate": 0.5,
          "samples": 4
        },
        "60": {
          "excess": 0.15483252075055393,
          "hitRate": 1.0,
          "samples": 4
        },
        "120": {
          "excess": 0.22960419555838268,
          "hitRate": 1.0,
          "samples": 4
        },
        "252": {
          "excess": 0.6986427909592723,
          "hitRate": 1.0,
          "samples": 4
        },
        "504": {
          "excess": 1.0114848696493306,
          "hitRate": 1.0,
          "samples": 4
        },
        "756": {
          "excess": 0.7181902910461613,
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
          "excess": 0.0016735616337513034,
          "hitRate": 0.5714285714285714,
          "samples": 7
        },
        "20": {
          "excess": 0.01598137249517798,
          "hitRate": 0.5714285714285714,
          "samples": 7
        },
        "60": {
          "excess": 0.20705692605888668,
          "hitRate": 0.8571428571428571,
          "samples": 7
        },
        "120": {
          "excess": 0.21066345517086002,
          "hitRate": 0.8571428571428571,
          "samples": 7
        },
        "252": {
          "excess": 0.46768644504693846,
          "hitRate": 0.7142857142857143,
          "samples": 7
        },
        "504": {
          "excess": 1.169710365470763,
          "hitRate": 0.6666666666666666,
          "samples": 3
        },
        "756": {
          "excess": 2.1934829195444614,
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
          "excess": 0.013466474070969792,
          "hitRate": 0.6666666666666666
        },
        "20": {
          "excess": 0.02421773378574042,
          "hitRate": 0.6666666666666666
        },
        "60": {
          "excess": 0.13192289206121985,
          "hitRate": 0.8333333333333334
        },
        "120": {
          "excess": 0.23830301530006107,
          "hitRate": 0.8333333333333334
        },
        "252": {
          "excess": 0.4779999186790051,
          "hitRate": 0.6666666666666666
        },
        "504": {
          "excess": 1.169710365470763,
          "hitRate": 0.6666666666666666
        },
        "756": {
          "excess": 2.1934829195444614,
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
          "excess": 0.024135533996428316,
          "hitRate": 1.0
        },
        "20": {
          "excess": 0.0196772011976577,
          "hitRate": 0.5
        },
        "60": {
          "excess": 0.12495925734481983,
          "hitRate": 1.0
        },
        "120": {
          "excess": 0.24128905088526964,
          "hitRate": 1.0
        },
        "252": {
          "excess": 0.662575937463981,
          "hitRate": 1.0
        },
        "504": {
          "excess": 1.2866499374563507,
          "hitRate": 1.0
        },
        "756": {
          "excess": 0.7314338032591979,
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
          "excess": -0.036749337528627656,
          "hitRate": 0.3333333333333333
        },
        "20": {
          "excess": -0.023640091413747788,
          "hitRate": 0.3333333333333333
        },
        "60": {
          "excess": -0.07609047805044455,
          "hitRate": 0.5
        },
        "120": {
          "excess": -0.015602630363423168,
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
          "excess": -0.06908391298955963,
          "hitRate": 0.0
        },
        "20": {
          "excess": -0.03343679524819665,
          "hitRate": 0.0
        },
        "60": {
          "excess": 0.6578611300448878,
          "hitRate": 1.0
        },
        "120": {
          "excess": 0.04482609439565377,
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
          "excess": 0.010903865554608316,
          "hitRate": 1.0
        },
        "20": {
          "excess": 0.024215594735476742,
          "hitRate": 0.5
        },
        "60": {
          "excess": 0.18470578415628802,
          "hitRate": 1.0
        },
        "120": {
          "excess": 0.21791934023149573,
          "hitRate": 1.0
        },
        "252": {
          "excess": 0.7347096444545635,
          "hitRate": 1.0
        },
        "504": {
          "excess": 0.7363198018423103,
          "hitRate": 1.0
        },
        "756": {
          "excess": 0.7049467788331246,
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
      "score": 52.1
    },
    {
      "date": "2025-09-01",
      "trend": "protein soda",
      "category": "food",
      "score": 53.1
    },
    {
      "date": "2025-02-01",
      "trend": "chatgpt",
      "category": "internet",
      "score": 68.1
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
        "5": -0.08843700508102781,
        "20": -0.04223104109473608,
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
        "5": 0.009858511130082404,
        "20": 0.09564078855173097,
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
        "5": -0.03945439611923496,
        "20": -0.03473378346747502,
        "60": 0.007235098465318224,
        "120": 0.021006301436895303,
        "252": null,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2025-02-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "GOOGL",
      "role": "beneficiary",
      "rationale": "Search and model platform response to generative AI adoption.",
      "windows": {
        "5": -0.09484978842545355,
        "20": -0.10708070432342087,
        "60": -0.1290136384127316,
        "120": -0.14015451252589162,
        "252": 0.48642085629160303,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2025-02-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "MSFT",
      "role": "beneficiary",
      "rationale": "Platform distribution and enterprise AI monetization.",
      "windows": {
        "5": -0.01833753842168795,
        "20": -0.008853904688762682,
        "60": 0.044749644016849555,
        "120": 0.15256530030591042,
        "252": -0.1596895736718047,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2025-02-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "NVDA",
      "role": "beneficiary",
      "rationale": "AI compute demand and infrastructure bottleneck exposure.",
      "windows": {
        "5": 0.12345009089688896,
        "20": 0.03779973473667175,
        "60": 0.014669789074288286,
        "120": 0.4159000955381458,
        "252": 0.3184680984641688,
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
        "5": -0.06908391298955963,
        "20": -0.03343679524819665,
        "60": 0.6578611300448878,
        "120": 0.04482609439565377,
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
        "5": 0.02031641667411077,
        "20": 0.0465040262585561,
        "60": 0.19810715843369864,
        "120": 0.17699114992781761,
        "252": -0.02311979091858407,
        "504": 0.1755649361936229,
        "756": 1.2319211992065768
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
        "5": 0.007436363556310388,
        "20": 0.06347144700100826,
        "60": 0.15789187142638572,
        "120": 0.06349975316937262,
        "252": 0.16019313171289262,
        "504": -0.09188768383396462,
        "756": -0.3967716256102598
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
        "5": 0.04278330014565013,
        "20": 0.11346580373038995,
        "60": 0.5051325278288286,
        "120": 0.7610163053850116,
        "252": 2.0857267901957552,
        "504": 3.425453844052631,
        "756": 5.745299185037067
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
        "5": 0.006420767767522539,
        "20": -0.030713345855615914,
        "60": 0.15884427995079875,
        "120": 0.31024445472830187,
        "252": 0.8907655672968642,
        "504": 1.3545616912582243,
        "756": 1.926121852390893
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
        "5": 0.015386963341694093,
        "20": 0.0791445353265694,
        "60": 0.2105672883617773,
        "120": 0.1255942257346896,
        "252": 0.5786537216122629,
        "504": 0.1180779124263962,
        "756": -0.5162282947246437
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
        "5": 0.021435876675308663,
        "20": 0.052047800826675594,
        "60": 0.04330310655090175,
        "120": 0.00441096592619572,
        "252": 0.6184904400117857,
        "504": 1.5409409251554134,
        "756": 1.4682602534433833
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
        "5": 0.02683519131754797,
        "20": -0.012693398431360192,
        "60": 0.2066154081387379,
        "120": 0.47816713584434356,
        "252": 0.7066614349161764,
        "504": 1.032358949757288,
        "756": -0.005392646924987421
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
