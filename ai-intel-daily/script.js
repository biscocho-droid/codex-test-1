const state = {
  data: null,
  theme: "all",
  sourceGroup: "all",
  query: "",
};

const els = {
  generatedAt: document.getElementById("generated-at"),
  itemCount: document.getElementById("item-count"),
  sourceCount: document.getElementById("source-count"),
  topTheme: document.getElementById("top-theme"),
  search: document.getElementById("search-input"),
  themeFilter: document.getElementById("theme-filter"),
  sourceFilter: document.getElementById("source-filter"),
  feedList: document.getElementById("feed-list"),
  themeRadar: document.getElementById("theme-radar"),
  watchlist: document.getElementById("watchlist"),
  sourcePolicy: document.getElementById("source-policy"),
  refresh: document.getElementById("refresh-button"),
};

const prettyTheme = (value) => value.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function loadFeed(force = false) {
  const cacheBust = force ? `?t=${Date.now()}` : "";
  const response = await fetch(`data/ai-feed.json${cacheBust}`, { cache: force ? "reload" : "default" });
  if (!response.ok) throw new Error(`Feed request failed: ${response.status}`);
  state.data = await response.json();
  buildControls();
  render();
}

function buildControls() {
  const themes = [...new Set(state.data.items.flatMap((item) => item.tags || []))].sort();
  const groups = [...new Set(state.data.items.map((item) => item.sourceGroup))].sort();
  els.themeFilter.innerHTML = `<option value="all">All themes</option>${themes
    .map((theme) => `<option value="${escapeHtml(theme)}">${prettyTheme(theme)}</option>`)
    .join("")}`;
  els.sourceFilter.innerHTML = `<option value="all">All sources</option>${groups
    .map((group) => `<option value="${escapeHtml(group)}">${escapeHtml(group)}</option>`)
    .join("")}`;
  els.themeFilter.value = state.theme;
  els.sourceFilter.value = state.sourceGroup;
}

function filteredItems() {
  const query = state.query.trim().toLowerCase();
  return state.data.items.filter((item) => {
    const matchesTheme = state.theme === "all" || (item.tags || []).includes(state.theme);
    const matchesGroup = state.sourceGroup === "all" || item.sourceGroup === state.sourceGroup;
    const searchable = `${item.title} ${item.summary} ${item.source} ${(item.tags || []).join(" ")} ${(item.watchlist || []).join(" ")}`.toLowerCase();
    const matchesQuery = !query || searchable.includes(query);
    return matchesTheme && matchesGroup && matchesQuery;
  });
}

function render() {
  const data = state.data;
  const items = filteredItems();
  els.generatedAt.textContent = formatDate(data.generatedAt);
  els.itemCount.textContent = data.itemCount;
  els.sourceCount.textContent = data.sourceCount;
  els.topTheme.textContent = data.topThemes?.[0] ? prettyTheme(data.topThemes[0].tag) : "--";
  els.sourcePolicy.textContent = data.sourcePolicy;
  renderThemes(data.topThemes || []);
  renderWatchlist(items);
  renderFeed(items);
}

function renderThemes(themes) {
  const max = Math.max(1, ...themes.map((theme) => theme.count));
  els.themeRadar.innerHTML = themes
    .map(
      (theme) => `
        <div class="radar-row">
          <div class="radar-head">
            <strong>${prettyTheme(theme.tag)}</strong>
            <span>${theme.count}</span>
          </div>
          <div class="bar"><span style="width: ${(theme.count / max) * 100}%"></span></div>
          <div class="watch-row">${(theme.tickers || []).map((ticker) => `<span class="ticker">${ticker}</span>`).join("")}</div>
        </div>
      `,
    )
    .join("");
}

function renderWatchlist(items) {
  const counts = new Map();
  for (const item of items) {
    for (const ticker of item.watchlist || []) {
      counts.set(ticker, (counts.get(ticker) || 0) + 1);
    }
  }
  const leaders = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12);
  els.watchlist.innerHTML = leaders.length
    ? leaders
        .map(
          ([ticker, count]) => `
            <div class="watch-row-item">
              <div class="watch-head"><strong>${ticker}</strong><span>${count} signals</span></div>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-state">No matching watchlist names.</div>`;
}

function renderFeed(items) {
  els.feedList.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <article class="feed-card">
              <header>
                <h3><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h3>
                <span class="score">${item.signalScore}</span>
              </header>
              <div class="meta-row">
                <span>${escapeHtml(item.source)}</span>
                <span>${escapeHtml(item.sourceGroup)}</span>
                <span>${formatDate(item.publishedAt)}</span>
              </div>
              <p class="summary">${escapeHtml(item.summary)}</p>
              <div class="tag-row">${(item.tags || []).map((tag) => `<span class="tag">${prettyTheme(tag)}</span>`).join("")}</div>
              <p class="angle">${escapeHtml(item.angle)}</p>
              <div class="watch-row">${(item.watchlist || []).map((ticker) => `<span class="ticker">${ticker}</span>`).join("")}</div>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-state">No items match the current filters.</div>`;
}

els.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

els.themeFilter.addEventListener("change", (event) => {
  state.theme = event.target.value;
  render();
});

els.sourceFilter.addEventListener("change", (event) => {
  state.sourceGroup = event.target.value;
  render();
});

els.refresh.addEventListener("click", () => {
  loadFeed(true).catch(showError);
});

function showError(error) {
  els.generatedAt.textContent = "Feed unavailable";
  els.feedList.innerHTML = `<div class="empty-state">${escapeHtml(error.message)}. Run the feed generator locally to create data/ai-feed.json.</div>`;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

loadFeed().catch(showError);
