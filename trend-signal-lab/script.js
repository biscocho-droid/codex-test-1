const APP_DATA = {
  "generatedAt": "2026-05-27T10:16:29.017255+00:00",
  "signalCount": 7,
  "exposureCount": 17,
  "windows": {
    "5": {
      "sampleSize": 17,
      "avgExcessReturn": -0.013140782900874386,
      "hitRate": 0.35294117647058826,
      "avgMaxDrawdown": -0.04215398714858731
    },
    "20": {
      "sampleSize": 17,
      "avgExcessReturn": 0.00958001268015014,
      "hitRate": 0.5882352941176471,
      "avgMaxDrawdown": -0.0849249393726715
    },
    "60": {
      "sampleSize": 17,
      "avgExcessReturn": 0.08797555369670398,
      "hitRate": 0.7647058823529411,
      "avgMaxDrawdown": -0.14260219992482331
    },
    "120": {
      "sampleSize": 14,
      "avgExcessReturn": 0.1762434089317937,
      "hitRate": 0.8571428571428571,
      "avgMaxDrawdown": -0.17472775511307387
    },
    "252": {
      "sampleSize": 11,
      "avgExcessReturn": 0.5937590256318139,
      "hitRate": 0.9090909090909091,
      "avgMaxDrawdown": -0.20133136382901864
    },
    "504": {
      "sampleSize": 7,
      "avgExcessReturn": 1.0106905962818369,
      "hitRate": 0.8571428571428571,
      "avgMaxDrawdown": -0.2827812589744068
    },
    "756": {
      "sampleSize": 7,
      "avgExcessReturn": 1.1028639634529784,
      "hitRate": 0.5714285714285714,
      "avgMaxDrawdown": -0.44614890841679244
    }
  },
  "categories": [
    {
      "slug": "food",
      "label": "Food",
      "windows": {
        "5": {
          "excess": -0.03674933967475619,
          "hitRate": 0.3333333333333333,
          "samples": 6
        },
        "20": {
          "excess": -0.02364003549966831,
          "hitRate": 0.3333333333333333,
          "samples": 6
        },
        "60": {
          "excess": -0.0760904843500979,
          "hitRate": 0.5,
          "samples": 6
        },
        "120": {
          "excess": -0.01560262195042117,
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
          "excess": 0.0006034835986719889,
          "hitRate": 0.25,
          "samples": 4
        },
        "20": {
          "excess": 0.060134942428569066,
          "hitRate": 0.75,
          "samples": 4
        },
        "60": {
          "excess": 0.16994968729726034,
          "hitRate": 1.0,
          "samples": 4
        },
        "120": {
          "excess": 0.3313294963759601,
          "hitRate": 1.0,
          "samples": 4
        },
        "252": {
          "excess": 0.8691796255485292,
          "hitRate": 1.0,
          "samples": 4
        },
        "504": {
          "excess": 1.2309057792036495,
          "hitRate": 1.0,
          "samples": 4
        },
        "756": {
          "excess": 0.6375970782749443,
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
          "excess": -0.000758743665859342,
          "hitRate": 0.42857142857142855,
          "samples": 7
        },
        "20": {
          "excess": 0.009165808406612281,
          "hitRate": 0.7142857142857143,
          "samples": 7
        },
        "60": {
          "excess": 0.1817612242507877,
          "hitRate": 0.8571428571428571,
          "samples": 7
        },
        "120": {
          "excess": 0.16984251505607642,
          "hitRate": 0.8571428571428571,
          "samples": 7
        },
        "252": {
          "excess": 0.4363758256794052,
          "hitRate": 0.8571428571428571,
          "samples": 7
        },
        "504": {
          "excess": 0.7170703523860865,
          "hitRate": 0.6666666666666666,
          "samples": 3
        },
        "756": {
          "excess": 1.7232198103570242,
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
          "excess": 0.010628816690179399,
          "hitRate": 0.5
        },
        "20": {
          "excess": 0.016266253419758292,
          "hitRate": 0.8333333333333334
        },
        "60": {
          "excess": 0.1024112516929853,
          "hitRate": 0.8333333333333334
        },
        "120": {
          "excess": 0.19067859592084876,
          "hitRate": 0.8333333333333334
        },
        "252": {
          "excess": 0.44147087617322206,
          "hitRate": 0.8333333333333334
        },
        "504": {
          "excess": 0.7170703523860865,
          "hitRate": 0.6666666666666666
        },
        "756": {
          "excess": 1.7232198103570242,
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
          "excess": 0.003896280489846138,
          "hitRate": 0.5
        },
        "20": {
          "excess": 0.04070404265346056,
          "hitRate": 0.5
        },
        "60": {
          "excess": 0.09544821156110173,
          "hitRate": 1.0
        },
        "120": {
          "excess": 0.17905444127201442,
          "hitRate": 1.0
        },
        "252": {
          "excess": 0.7743189576194383,
          "hitRate": 1.0
        },
        "504": {
          "excess": 1.5265003175648821,
          "hitRate": 1.0
        },
        "756": {
          "excess": 0.6436654281531503,
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
          "excess": -0.03674933967475619,
          "hitRate": 0.3333333333333333
        },
        "20": {
          "excess": -0.02364003549966831,
          "hitRate": 0.3333333333333333
        },
        "60": {
          "excess": -0.0760904843500979,
          "hitRate": 0.5
        },
        "120": {
          "excess": -0.01560262195042117,
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
          "excess": -0.06908410580209179,
          "hitRate": 0.0
        },
        "20": {
          "excess": -0.033436861672263785,
          "hitRate": 0.0
        },
        "60": {
          "excess": 0.657861059597602,
          "hitRate": 1.0
        },
        "120": {
          "excess": 0.04482602986744233,
          "hitRate": 1.0
        },
        "252": {
          "excess": 0.4058055227165043,
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
          "excess": -0.00268931329250216,
          "hitRate": 0.0
        },
        "20": {
          "excess": 0.07956584220367757,
          "hitRate": 1.0
        },
        "60": {
          "excess": 0.24445116303341896,
          "hitRate": 1.0
        },
        "120": {
          "excess": 0.4836045514799058,
          "hitRate": 1.0
        },
        "252": {
          "excess": 0.9640402934776201,
          "hitRate": 1.0
        },
        "504": {
          "excess": 0.9353112408424172,
          "hitRate": 1.0
        },
        "756": {
          "excess": 0.6315287283967381,
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
      "score": 51.6
    },
    {
      "date": "2025-09-01",
      "trend": "protein soda",
      "category": "food",
      "score": 54.5
    },
    {
      "date": "2025-03-01",
      "trend": "chatgpt",
      "category": "internet",
      "score": 67.0
    },
    {
      "date": "2024-10-01",
      "trend": "robotaxi",
      "category": "internet",
      "score": 95.0
    },
    {
      "date": "2023-04-01",
      "trend": "chatgpt",
      "category": "internet",
      "score": 81.8
    },
    {
      "date": "2023-03-01",
      "trend": "weight loss drugs",
      "category": "health",
      "score": 61.9
    },
    {
      "date": "2022-09-01",
      "trend": "ozempic",
      "category": "health",
      "score": 63.3
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
        "5": 0.03794141900533243,
        "20": 0.024221300032529758,
        "60": 0.022693901496346314,
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
        "5": 0.009858511130082404,
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
        "5": -0.039454431182367355,
        "20": -0.034733564219756596,
        "60": 0.00723507400685508,
        "120": 0.0210063266759013,
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
        "5": 0.04324640083484532,
        "20": -0.01781420681503587,
        "60": -0.0123136505629875,
        "120": 0.08317508338393664,
        "252": 0.5871680865446649,
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
        "5": 0.027486508005990062,
        "20": 0.02146647288339576,
        "60": 0.1339010436492718,
        "120": 0.15645251896272727,
        "252": -0.1839840153250738,
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
        "5": -0.013143980153922596,
        "20": 0.005475904387340136,
        "60": 0.13649429653225487,
        "120": 0.4070068235224735,
        "252": 0.3702268234203976,
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
        "5": -0.06908410580209179,
        "20": -0.033436861672263785,
        "60": 0.657861059597602,
        "120": 0.04482602986744233,
        "252": 0.4058055227165043,
        "504": null,
        "756": null
      }
    },
    {
      "date": "2023-04-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "GOOGL",
      "role": "beneficiary",
      "rationale": "Search and model platform response to generative AI adoption.",
      "windows": {
        "5": 0.022979872501549092,
        "20": 0.01160403817663136,
        "60": 0.0033094629225409733,
        "120": 0.12990045348794133,
        "252": 0.07352443520523821,
        "504": 0.07251544682376765,
        "756": 1.1373047678875638
      }
    },
    {
      "date": "2023-04-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "MSFT",
      "role": "beneficiary",
      "rationale": "Platform distribution and enterprise AI monetization.",
      "windows": {
        "5": -0.0018252796363400492,
        "20": 0.06569926389356362,
        "60": 0.031104417596095058,
        "120": -0.01613611581414398,
        "252": 0.09791580155713397,
        "504": -0.0746816732401856,
        "756": -0.6101443421958213
      }
    },
    {
      "date": "2023-04-01",
      "trend": "chatgpt",
      "category": "internet",
      "benchmark": "QQQ",
      "ticker": "NVDA",
      "role": "beneficiary",
      "rationale": "AI compute demand and infrastructure bottleneck exposure.",
      "windows": {
        "5": -0.014970621411045437,
        "20": 0.011166047992654748,
        "60": 0.3219719400207366,
        "120": 0.38367281198215775,
        "252": 1.7039741256369716,
        "504": 2.1533772835746774,
        "756": 4.64249900537933
      }
    },
    {
      "date": "2023-03-01",
      "trend": "weight loss drugs",
      "category": "health",
      "benchmark": "XLV",
      "ticker": "LLY",
      "role": "beneficiary",
      "rationale": "Large-cap anti-obesity leadership and prescribing leverage.",
      "windows": {
        "5": -0.0003835433626828699,
        "20": 0.06169113309276031,
        "60": 0.35319774223341116,
        "120": 0.713088305471915,
        "252": 1.3384248652898225,
        "504": 1.7857737930115645,
        "756": 1.9588430924538967
      }
    },
    {
      "date": "2023-03-01",
      "trend": "weight loss drugs",
      "category": "health",
      "benchmark": "XLV",
      "ticker": "NVO",
      "role": "beneficiary",
      "rationale": "Large-cap anti-obesity leadership and prescribing leverage.",
      "windows": {
        "5": -0.00499508322232145,
        "20": 0.09744055131459484,
        "60": 0.13570458383342676,
        "120": 0.2541207974878965,
        "252": 0.5896557216654177,
        "504": 0.08484868867327,
        "756": -0.6957856356604203
      }
    },
    {
      "date": "2022-09-01",
      "trend": "ozempic",
      "category": "health",
      "benchmark": "XLV",
      "ticker": "LLY",
      "role": "beneficiary",
      "rationale": "Direct obesity and diabetes drug exposure.",
      "windows": {
        "5": -0.0013756666970772269,
        "20": 0.0871421813657941,
        "60": 0.10882895669637072,
        "120": 0.025110146420081136,
        "252": 0.7658710669299031,
        "504": 1.746600049759322,
        "756": 1.3419649402333915
      }
    },
    {
      "date": "2022-09-01",
      "trend": "ozempic",
      "category": "health",
      "benchmark": "XLV",
      "ticker": "NVO",
      "role": "beneficiary",
      "rationale": "Direct obesity and diabetes drug exposure.",
      "windows": {
        "5": 0.009168227676769503,
        "20": -0.005734096058872984,
        "60": 0.08206746642583274,
        "120": 0.3329987361239477,
        "252": 0.7827668483089734,
        "504": 1.3064005853704423,
        "756": -0.054634083927090904
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
