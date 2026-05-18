import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BarChart3,
  ChevronDown,
  CircleDollarSign,
  Filter,
  LineChart,
  Search,
  SlidersHorizontal,
  TrendingUp,
} from 'lucide-react';
import {
  CartesianGrid,
  Legend,
  ReferenceLine,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import stocks from './data/sp500.json';
import aiWatchlist from './data/ai-watchlist.json';
import aiExtraMetrics from './data/ai-extra-metrics.json';
import './styles.css';

const number = new Intl.NumberFormat('en-US');
const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});
const compactCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 2,
});

function toNumber(value) {
  return Number.isFinite(value) ? value : null;
}

function formatCurrency(value) {
  return toNumber(value) === null ? 'N/A' : currency.format(value);
}

function formatMarketCap(value) {
  return toNumber(value) === null ? 'N/A' : compactCurrency.format(value);
}

function formatPercent(value) {
  return toNumber(value) === null ? 'N/A' : `${value.toFixed(2)}%`;
}

function formatRatio(value) {
  return toNumber(value) === null ? 'N/A' : value.toFixed(2);
}

function formatQuarterDate(value) {
  if (!value) return 'Quarter date unavailable';

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return 'Quarter date unavailable';

  const quarter = Math.floor(date.getUTCMonth() / 3) + 1;
  const month = date.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' });
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `Q${quarter} ${year} ended ${month} ${day}, ${year}`;
}

function logoTicker(ticker) {
  return String(ticker || '').replace('.', '-');
}

function clamp(value, min, max) {
  if (toNumber(value) === null) return 0;
  return Math.max(min, Math.min(value, max));
}

function average(values) {
  const clean = values.filter((value) => toNumber(value) !== null);
  if (!clean.length) return null;
  return clean.reduce((sum, value) => sum + value, 0) / clean.length;
}

function median(values) {
  const clean = values.filter((value) => toNumber(value) !== null).sort((a, b) => a - b);
  if (!clean.length) return null;
  const middle = Math.floor(clean.length / 2);
  return clean.length % 2 ? clean[middle] : (clean[middle - 1] + clean[middle]) / 2;
}

function makeTrend(start, end) {
  if (toNumber(start) === null || toNumber(end) === null) {
    return [10, 10, 10, 10, 10, 10, 10, 10, 10];
  }

  const steps = 8;
  return Array.from({ length: steps + 1 }, (_, index) => {
    const progress = index / steps;
    const curve = Math.sin(progress * Math.PI) * 0.04 * Math.abs(end || start || 1);
    return start + (end - start) * progress + curve;
  });
}

function makePriceTrend(stock) {
  if (!stock) return [10, 10, 10, 10, 10, 10, 10, 10, 10];

  const points = [
    stock['Price 3 Years Ago'],
    stock['Price 2 Years Ago'],
    stock['Price 1 Year Ago'],
    stock['Current Price'],
  ].filter((value) => toNumber(value) !== null);

  if (points.length < 2) return [10, 10, 10, 10, 10, 10, 10, 10, 10];

  const trend = [];
  for (let index = 0; index < points.length - 1; index += 1) {
    trend.push(...makeTrend(points[index], points[index + 1]).slice(0, -1));
  }
  trend.push(points.at(-1));
  return trend;
}

function uniqueOptions(rows, key) {
  return [...new Set(rows.map((row) => row[key]).filter(Boolean))].sort();
}

function scoreStock(stock) {
  const revenueGrowth = clamp(stock['Revenue Growth 2yr Avg %'], -50, 150);
  const epsGrowth = clamp(stock['EPS Growth 2yr Avg %'], -50, 150);
  const priceChange3y = clamp(stock['3 Year Price Change %'], -100, 250);
  const pe = Math.max(0, Math.min(stock['P/E Ratio'] ?? 35, 100));
  const peg = Math.max(0, Math.min(stock['PEG Ratio'] ?? 2.5, 5));

  return revenueGrowth * 0.42 + epsGrowth * 0.42 - priceChange3y * 0.35 - pe * 0.12 - peg * 3;
}

function enrichStock(stock) {
  const revenueGrowth = stock['Revenue Growth 2yr Avg %'];
  const epsGrowth = stock['EPS Growth 2yr Avg %'];
  const priceChange3y = stock['3 Year Price Change %'];
  const latestRevenue = stock['Revenue (latest quarter)'];
  const priorRevenue = stock['Revenue (same quarter previous year)'];
  const latestEps = stock['EPS (latest quarter)'];
  const priorEps = stock['EPS (same quarter previous year)'];
  const fundamentalsImproved = (revenueGrowth ?? -Infinity) > 0 && (epsGrowth ?? -Infinity) > 0;
  const priceLagging = (priceChange3y ?? Infinity) <= 20;
  const blendedGrowth = average([revenueGrowth, epsGrowth]) ?? 0;

  return {
    ...stock,
    valueScore: scoreStock(stock),
    fundamentalsImproved,
    priceLagging,
    opportunity: fundamentalsImproved && priceLagging,
    chartGrowth: clamp(blendedGrowth, -60, 180),
    chartPriceChange: clamp(priceChange3y, -100, 220),
    revenueDelta: latestRevenue !== null && priorRevenue ? latestRevenue - priorRevenue : null,
    epsDelta: latestEps !== null && priorEps ? latestEps - priorEps : null,
  };
}

const enrichedStocks = stocks.map(enrichStock);
const stockByTicker = new Map(enrichedStocks.map((stock) => [stock.Ticker, stock]));
const aiExtraByTicker = new Map(aiExtraMetrics.map((stock) => [stock.Ticker, enrichStock(stock)]));

function tierBaseScore(tier) {
  if (tier?.startsWith('Tier 1')) return 100;
  if (tier?.startsWith('Tier 2')) return 90;
  if (tier?.startsWith('Tier 3')) return 80;
  if (tier?.startsWith('Tier 4')) return 60;
  if (tier?.startsWith('Tier 5')) return 50;
  return 40;
}

function confidenceScore(confidence) {
  if (confidence === 'High') return 100;
  if (confidence === 'Medium') return 75;
  if (confidence === 'Low') return 45;
  return 50;
}

function priceLagScore(priceChange) {
  if (toNumber(priceChange) === null) return 30;
  if (priceChange <= -40) return 100;
  if (priceChange <= 0) return 90;
  if (priceChange <= 20) return 75;
  if (priceChange <= 60) return 45;
  if (priceChange <= 120) return 20;
  return 5;
}

function valuationScore(pe, peg) {
  const peScore = toNumber(pe) === null ? 45 : Math.max(0, 100 - Math.max(0, pe - 10) * 2.2);
  const pegScore = toNumber(peg) === null ? 45 : Math.max(0, 100 - Math.max(0, peg - 0.8) * 30);
  return (peScore + pegScore) / 2;
}

function aiOpportunityScore(stock) {
  const rev = clamp(stock['Revenue Growth 2yr Avg %'], -50, 150);
  const eps = clamp(stock['EPS Growth 2yr Avg %'], -50, 150);
  const revenueScore = Math.max(0, Math.min(100, 40 + rev * 0.45));
  const epsScore = Math.max(0, Math.min(100, 40 + eps * 0.35));
  const riskPenalty =
    (stock['AI Tier']?.startsWith('Tier 5') ? 10 : 0) + (stock['AI Confidence'] === 'Low' ? 8 : 0);

  return (
    tierBaseScore(stock['AI Tier']) * 0.2 +
    confidenceScore(stock['AI Confidence']) * 0.1 +
    revenueScore * 0.15 +
    epsScore * 0.1 +
    priceLagScore(stock['3 Year Price Change %']) * 0.3 +
    valuationScore(stock['P/E Ratio'], stock['PEG Ratio']) * 0.15 -
    riskPenalty
  );
}

function enrichAiStock(entry) {
  const base = stockByTicker.get(entry.Ticker) ?? aiExtraByTicker.get(entry.Ticker) ?? {};
  const merged = enrichStock({
    Ticker: entry.Ticker,
    'Company Name': base['Company Name'] ?? entry.Company,
    'Current Price': base['Current Price'] ?? null,
    'Market Cap': base['Market Cap'] ?? null,
    'Revenue (latest quarter)': base['Revenue (latest quarter)'] ?? null,
    'Revenue (same quarter previous year)': base['Revenue (same quarter previous year)'] ?? null,
    'Revenue YoY Growth %': base['Revenue YoY Growth %'] ?? null,
    'EPS (latest quarter)': base['EPS (latest quarter)'] ?? null,
    'EPS (same quarter previous year)': base['EPS (same quarter previous year)'] ?? null,
    'EPS YoY Growth %': base['EPS YoY Growth %'] ?? null,
    'Revenue Growth 2yr Avg %': base['Revenue Growth 2yr Avg %'] ?? null,
    'EPS Growth 2yr Avg %': base['EPS Growth 2yr Avg %'] ?? null,
    'P/E Ratio': base['P/E Ratio'] ?? null,
    'PEG Ratio': base['PEG Ratio'] ?? null,
    'Price 1 Year Ago': base['Price 1 Year Ago'] ?? null,
    '1 Year Price Change %': base['1 Year Price Change %'] ?? null,
    'Price 2 Years Ago': base['Price 2 Years Ago'] ?? null,
    '2 Year Price Change %': base['2 Year Price Change %'] ?? null,
    'Price 3 Years Ago': base['Price 3 Years Ago'] ?? null,
    '3 Year Price Change %': base['3 Year Price Change %'] ?? null,
    'Latest Quarter End Date': base['Latest Quarter End Date'] ?? null,
    'Same Quarter Previous Year End Date': base['Same Quarter Previous Year End Date'] ?? null,
  });

  const aiStock = {
    ...merged,
    ...entry,
    'Company Name': base['Company Name'] ?? entry.Company,
    inSp500: stockByTicker.has(entry.Ticker),
  };

  return {
    ...aiStock,
    aiScore: aiOpportunityScore(aiStock),
  };
}

const aiStocks = aiWatchlist.map(enrichAiStock).sort((a, b) => b.aiScore - a.aiScore);

function App() {
  const [query, setQuery] = useState('');
  const [view, setView] = useState('opportunities');
  const [minGrowth, setMinGrowth] = useState(0);
  const [maxPriceChange, setMaxPriceChange] = useState(20);
  const [maxPe, setMaxPe] = useState(40);
  const [aiTierFilter, setAiTierFilter] = useState('All');
  const [aiCategoryFilter, setAiCategoryFilter] = useState('All');
  const [aiConfidenceFilter, setAiConfidenceFilter] = useState('All');
  const [aiUniverseFilter, setAiUniverseFilter] = useState('All');
  const [chartFocusTicker, setChartFocusTicker] = useState(null);
  const chartRef = useRef(null);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });
  const [selectedTicker, setSelectedTicker] = useState(() => {
    const best = [...enrichedStocks].sort((a, b) => b.valueScore - a.valueScore)[0];
    return best?.Ticker ?? enrichedStocks[0]?.Ticker;
  });

  const filteredStocks = useMemo(() => {
    const search = query.trim().toLowerCase();
    const masterList =
      view === 'ai'
        ? aiStocks
        : view === 'all'
        ? [...enrichedStocks].sort((a, b) => (b['Market Cap'] ?? 0) - (a['Market Cap'] ?? 0))
        : enrichedStocks
            .filter((stock) => {
              const growth =
                ((stock['Revenue Growth 2yr Avg %'] ?? 0) + (stock['EPS Growth 2yr Avg %'] ?? 0)) / 2;
              const priceChange = stock['3 Year Price Change %'] ?? 999;
              const pe = stock['P/E Ratio'] ?? 999;

              return stock.opportunity && growth >= minGrowth && priceChange <= maxPriceChange && pe <= maxPe;
            })
            .sort((a, b) => b.valueScore - a.valueScore);

    return masterList.filter((stock) => {
      const aiFilterMatch =
        view !== 'ai' ||
        ((aiTierFilter === 'All' || stock['AI Tier'] === aiTierFilter) &&
          (aiCategoryFilter === 'All' || stock['AI Category'] === aiCategoryFilter) &&
          (aiConfidenceFilter === 'All' || stock['AI Confidence'] === aiConfidenceFilter) &&
          (aiUniverseFilter === 'All' ||
            (aiUniverseFilter === 'S&P 500' ? stock.inSp500 : !stock.inSp500)));
      const searchMatch =
        !search ||
        stock.Ticker.toLowerCase().includes(search) ||
        stock['Company Name'].toLowerCase().includes(search);

      return aiFilterMatch && searchMatch;
    });
  }, [query, view, minGrowth, maxPriceChange, maxPe, aiTierFilter, aiCategoryFilter, aiConfidenceFilter, aiUniverseFilter]);

  const rankByTicker = useMemo(() => {
    const opportunityMaster = enrichedStocks
      .filter((stock) => {
        const growth =
          ((stock['Revenue Growth 2yr Avg %'] ?? 0) + (stock['EPS Growth 2yr Avg %'] ?? 0)) / 2;
        const priceChange = stock['3 Year Price Change %'] ?? 999;
        const pe = stock['P/E Ratio'] ?? 999;

        return stock.opportunity && growth >= minGrowth && priceChange <= maxPriceChange && pe <= maxPe;
      })
      .sort((a, b) => b.valueScore - a.valueScore);
    const allMaster = [...enrichedStocks].sort((a, b) => (b['Market Cap'] ?? 0) - (a['Market Cap'] ?? 0));
    const activeMaster = view === 'ai' ? aiStocks : view === 'all' ? allMaster : opportunityMaster;

    return new Map(activeMaster.map((stock, index) => [stock.Ticker, index + 1]));
  }, [view, minGrowth, maxPriceChange, maxPe]);

  const selected = useMemo(() => {
    const source = view === 'ai' ? aiStocks : enrichedStocks;
    return (
      source.find((stock) => stock.Ticker === selectedTicker) ??
      filteredStocks[0] ??
      source[0]
    );
  }, [filteredStocks, selectedTicker, view]);

  const allSorted = useMemo(() => {
    return [...enrichedStocks].sort((a, b) => (b['Market Cap'] ?? 0) - (a['Market Cap'] ?? 0));
  }, []);
  const aiTierOptions = useMemo(() => uniqueOptions(aiStocks, 'AI Tier'), []);
  const aiCategoryOptions = useMemo(() => uniqueOptions(aiStocks, 'AI Category'), []);
  const aiConfidenceOptions = useMemo(() => uniqueOptions(aiStocks, 'AI Confidence'), []);

  useEffect(() => {
    if (!chartRef.current) return undefined;

    const updateSize = () => {
      const rect = chartRef.current.getBoundingClientRect();
      setChartSize({
        width: Math.max(320, Math.floor(rect.width)),
        height: Math.max(220, Math.floor(rect.height)),
      });
    };
    const observer = new ResizeObserver(updateSize);
    observer.observe(chartRef.current);
    updateSize();

    return () => observer.disconnect();
  }, []);

  const chartData = useMemo(() => {
    const chartSource = view === 'ai' ? aiStocks : enrichedStocks;

    return chartSource
      .filter((stock) => stock['Market Cap'] && stock.chartGrowth !== null && stock.chartPriceChange !== null)
      .map((stock) => ({
        ticker: stock.Ticker,
        name: stock['Company Name'],
        growth: Number(stock.chartGrowth.toFixed(2)),
        priceChange: Number(stock.chartPriceChange.toFixed(2)),
        score: Number(stock.valueScore.toFixed(2)),
        opportunity: stock.opportunity,
        focused: stock.Ticker === chartFocusTicker,
        marketCap: stock['Market Cap'],
      }));
  }, [view, chartFocusTicker]);
  const focusedChartPoint = chartData.find((item) => item.focused);

  const selectedRevenueTrend = makeTrend(
    selected?.['Revenue (same quarter previous year)'],
    selected?.['Revenue (latest quarter)'],
  );
  const selectedEpsTrend = makeTrend(selected?.['EPS (same quarter previous year)'], selected?.['EPS (latest quarter)']);
  const selectedPriceTrend = makePriceTrend(selected);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">
            <LineChart size={20} />
          </div>
          <div>
            <h1>Value Finder</h1>
            <span>S&amp;P 500 fundamentals vs lagging price action</span>
          </div>
        </div>
        <div className="search-box">
          <Search size={16} />
          <input
            aria-label="Search ticker or company"
            placeholder="Search ticker or company"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="top-actions">
          <button className={view === 'opportunities' ? 'active' : ''} onClick={() => setView('opportunities')}>
            Value Opportunities
          </button>
          <button className={view === 'all' ? 'active' : ''} onClick={() => setView('all')}>
            All Stocks
          </button>
          <button className={view === 'ai' ? 'active' : ''} onClick={() => setView('ai')}>
            AI Opportunities
          </button>
        </div>
      </header>

      <aside className="filter-rail">
        <div className="rail-heading">
          <Filter size={17} />
          <span>Filters</span>
        </div>
        <FilterControl
          label="Minimum blended growth"
          value={minGrowth}
          suffix="%"
          min={-20}
          max={80}
          step={5}
          onChange={setMinGrowth}
        />
        <FilterControl
          label="Maximum 3Y price change"
          value={maxPriceChange}
          suffix="%"
          min={-80}
          max={160}
          step={5}
          onChange={setMaxPriceChange}
        />
        <FilterControl label="Maximum P/E" value={maxPe} min={0} max={100} step={5} onChange={setMaxPe} />
        <div className="rail-note">
          <SlidersHorizontal size={16} />
          Finds companies where revenue and EPS improved while the stock price did not keep up.
        </div>
      </aside>

      <section className="content">
        <section className="kpi-grid" aria-label="Dashboard summary">
          <MetricCard
            icon={<TrendingUp size={18} />}
            label="Revenue Growth"
            value={formatPercent(selected?.['Revenue YoY Growth %'])}
            tone={metricTone(selected?.['Revenue YoY Growth %'])}
            detail={`${selected?.Ticker ?? ''} ${formatQuarterDate(selected?.['Latest Quarter End Date'])}`}
            trend={selectedRevenueTrend}
          />
          <MetricCard
            icon={<BarChart3 size={18} />}
            label="EPS Growth"
            value={formatPercent(selected?.['EPS YoY Growth %'])}
            tone={metricTone(selected?.['EPS YoY Growth %'])}
            detail={`${selected?.Ticker ?? ''} ${formatQuarterDate(selected?.['Latest Quarter End Date'])}`}
            trend={selectedEpsTrend}
          />
          <MetricCard
            icon={<LineChart size={18} />}
            label="3Y Price Change"
            value={formatPercent(selected?.['3 Year Price Change %'])}
            tone={metricTone(selected?.['3 Year Price Change %'])}
            detail={`${formatCurrency(selected?.['Price 3 Years Ago'])} to ${formatCurrency(selected?.['Current Price'])}`}
            trend={selectedPriceTrend}
          />
          <MetricCard
            icon={<CircleDollarSign size={18} />}
            label="Market Cap"
            value={formatMarketCap(selected?.['Market Cap'])}
            detail={`P/E ${formatRatio(selected?.['P/E Ratio'])} · PEG ${formatRatio(selected?.['PEG Ratio'])}`}
            trend={[12, 12.5, 12.1, 13, 13.4, 14.2, 15, 15.4, 16]}
          />
        </section>

        <section className="workspace">
          <div className="chart-panel">
            <PanelHeader
              title="Growth Versus 3Y Price Change"
              subtitle="Top-left-to-right laggards are the main hunting ground"
              action={
                chartFocusTicker ? (
                  <button className="clear-focus-button" onClick={() => setChartFocusTicker(null)}>
                    Clear focus
                  </button>
                ) : null
              }
            />
            <div className="chart-wrap" ref={chartRef}>
              {chartSize.width > 0 && chartSize.height > 0 ? (
                <ScatterChart
                  width={chartSize.width}
                  height={chartSize.height}
                  margin={{ top: 18, right: 22, bottom: 18, left: 4 }}
                >
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />
                  <XAxis
                    type="number"
                    dataKey="priceChange"
                    name="3Y Price Change"
                    unit="%"
                    domain={[-100, 220]}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    type="number"
                    dataKey="growth"
                    name="Blended Growth"
                    unit="%"
                    domain={[-60, 180]}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <ReferenceLine x={20} stroke="#f59e0b" strokeDasharray="5 5" />
                  <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="5 5" />
                  <Scatter
                    name="All Stocks"
                    data={chartData.filter((item) => !item.opportunity && !item.focused)}
                    fill="#94a3b8"
                    fillOpacity={chartFocusTicker ? 0.18 : 0.48}
                    shape={<ScatterDot />}
                  />
                  <Scatter
                    name="Value Opportunities"
                    data={chartData.filter((item) => item.opportunity && !item.focused)}
                    fill="#16a34a"
                    fillOpacity={chartFocusTicker ? 0.28 : 0.84}
                    shape={<ScatterDot />}
                  />
                  {focusedChartPoint ? (
                    <Scatter
                      name={focusedChartPoint.ticker}
                      data={[focusedChartPoint]}
                      fill="#2563eb"
                      fillOpacity={1}
                      shape={<FocusedScatterDot />}
                    />
                  ) : null}
                </ScatterChart>
              ) : null}
            </div>
          </div>

          <StockDetail stock={selected} />
        </section>

        <section className="table-area">
          <div className="table-panel">
            <PanelHeader
              title={
                view === 'ai'
                  ? 'AI Opportunities'
                  : view === 'all'
                    ? 'All Stocks'
                    : 'Ranked Value Opportunities'
              }
              subtitle={
                view === 'ai'
                  ? `${filteredStocks.length} visible from ${aiStocks.length} curated AI exposure names`
                  : `${filteredStocks.length} visible from ${enrichedStocks.length} S&P 500 rows`
              }
            />
            {view === 'ai' ? (
              <AiTableFilters
                tier={aiTierFilter}
                category={aiCategoryFilter}
                confidence={aiConfidenceFilter}
                universe={aiUniverseFilter}
                tiers={aiTierOptions}
                categories={aiCategoryOptions}
                confidences={aiConfidenceOptions}
                onTier={setAiTierFilter}
                onCategory={setAiCategoryFilter}
                onConfidence={setAiConfidenceFilter}
                onUniverse={setAiUniverseFilter}
              />
            ) : null}
            <StockTable
              stocks={filteredStocks}
              rankByTicker={rankByTicker}
              mode={view}
              selectedTicker={selected?.Ticker}
              focusedTicker={chartFocusTicker}
              onSelect={(ticker) => {
                setSelectedTicker(ticker);
                setChartFocusTicker((currentTicker) => (currentTicker === ticker ? null : ticker));
              }}
              onFocus={(ticker) => {
                setSelectedTicker(ticker);
                setChartFocusTicker((currentTicker) => (currentTicker === ticker ? null : ticker));
              }}
            />
          </div>
          <div className="market-cap-panel">
            <PanelHeader title="Largest Market Caps" subtitle="Sorted largest to smallest" />
            <div className="cap-list">
              {allSorted.slice(0, 9).map((stock, index) => (
                <button key={stock.Ticker} className="cap-row" onClick={() => setSelectedTicker(stock.Ticker)}>
                  <span>{index + 1}</span>
                  <strong>{stock.Ticker}</strong>
                  <em>{formatMarketCap(stock['Market Cap'])}</em>
                </button>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function FilterControl({ label, value, suffix = '', min, max, step, onChange }) {
  return (
    <label className="filter-control">
      <span>
        {label}
        <strong>
          {value}
          {suffix}
        </strong>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function metricTone(value) {
  if (toNumber(value) === null || value === 0) return 'neutral';
  return value < 0 ? 'negative' : 'positive';
}

function MetricCard({ icon, label, value, detail, trend, tone = 'positive' }) {
  return (
    <article className={`metric-card ${tone}`}>
      <div className="metric-main">
        <div className="metric-icon">{icon}</div>
        <div>
          <span>{label}</span>
          <strong>{value}</strong>
          <p>{detail}</p>
        </div>
      </div>
      <Sparkline values={trend} tone={tone} />
    </article>
  );
}

function Sparkline({ values, tone = 'positive' }) {
  const width = 112;
  const height = 48;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / Math.max(1, max - min)) * (height - 8) - 4;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <svg className={`sparkline ${tone}`} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <polyline points={points} />
      <circle cx={width} cy={points.split(' ').at(-1).split(',')[1]} r="3" />
    </svg>
  );
}

function PanelHeader({ title, subtitle, action }) {
  return (
    <div className="panel-header">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {action ?? <ChevronDown size={16} />}
    </div>
  );
}

function AiTableFilters({
  tier,
  category,
  confidence,
  universe,
  tiers,
  categories,
  confidences,
  onTier,
  onCategory,
  onConfidence,
  onUniverse,
}) {
  return (
    <div className="ai-filter-row">
      <TableSelect label="Tier" value={tier} options={tiers} onChange={onTier} />
      <TableSelect label="Category" value={category} options={categories} onChange={onCategory} />
      <TableSelect label="Confidence" value={confidence} options={confidences} onChange={onConfidence} />
      <TableSelect
        label="Universe"
        value={universe}
        options={['S&P 500', 'Non-S&P']}
        onChange={onUniverse}
      />
    </div>
  );
}

function TableSelect({ label, value, options, onChange }) {
  return (
    <label className="table-select">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="All">All</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ChartTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;

  return (
    <div className="chart-tooltip">
      <strong>{data.ticker}</strong>
      <span>{data.name}</span>
      <p>Growth: {formatPercent(data.growth)}</p>
      <p>3Y Price: {formatPercent(data.priceChange)}</p>
      <p>Market Cap: {formatMarketCap(data.marketCap)}</p>
    </div>
  );
}

function ScatterDot(props) {
  const { cx, cy, fill, fillOpacity, payload } = props;
  const radius = payload?.opportunity ? 5 : 3.5;

  if (!Number.isFinite(cx) || !Number.isFinite(cy)) return null;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={radius}
      fill={fill}
      fillOpacity={fillOpacity ?? 0.75}
      stroke="#ffffff"
      strokeWidth="1"
    />
  );
}

function FocusedScatterDot(props) {
  const { cx, cy, payload } = props;
  const labelX = Math.min(cx + 12, 720);
  const labelY = Math.max(cy - 10, 16);

  if (!Number.isFinite(cx) || !Number.isFinite(cy)) return null;

  return (
    <g>
      <circle cx={cx} cy={cy} r="12" fill="#2563eb" fillOpacity="0.16" />
      <circle cx={cx} cy={cy} r="7" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
      <text x={labelX} y={labelY} fill="#1d4ed8" fontSize="12" fontWeight="800" pointerEvents="none">
        {payload?.ticker}
      </text>
    </g>
  );
}

function StockDetail({ stock }) {
  if (!stock) return null;

  return (
    <aside className="detail-panel">
      <PanelHeader title="Selected Stock" subtitle="Fundamentals compared with price lag" />
      <div className="detail-title">
        <CompanyLogo ticker={stock.Ticker} name={stock['Company Name']} size="large" />
        <div>
          <strong>{stock.Ticker}</strong>
          <span>{stock['Company Name']}</span>
        </div>
      </div>
      <div className={stock.opportunity ? 'opportunity-badge positive' : 'opportunity-badge neutral'}>
        {stock['AI Tier'] ? 'AI Exposure Signal' : stock.opportunity ? 'Value Play Signal' : 'Needs Review'}
      </div>
      {stock['AI Tier'] ? (
        <div className="ai-thesis-card">
          <span>{stock['AI Tier']}</span>
          <strong>{stock['AI Category']}</strong>
          <p>{stock['AI Thesis']}</p>
          <em>{stock['AI Confidence']} confidence · {stock['AI Exposure']} exposure</em>
        </div>
      ) : null}
      <div className="detail-grid">
        <DataPoint label="Current Price" value={formatCurrency(stock['Current Price'])} />
        <DataPoint label="Market Cap" value={formatMarketCap(stock['Market Cap'])} />
        <DataPoint label="P/E Ratio" value={formatRatio(stock['P/E Ratio'])} />
        <DataPoint label="PEG Ratio" value={formatRatio(stock['PEG Ratio'])} />
        <DataPoint
          label="Revenue Growth"
          value={formatPercent(stock['Revenue Growth 2yr Avg %'])}
          tone={metricTone(stock['Revenue Growth 2yr Avg %'])}
        />
        <DataPoint
          label="EPS Growth"
          value={formatPercent(stock['EPS Growth 2yr Avg %'])}
          tone={metricTone(stock['EPS Growth 2yr Avg %'])}
        />
        <DataPoint
          label="3Y Price Change"
          value={formatPercent(stock['3 Year Price Change %'])}
          tone={metricTone(stock['3 Year Price Change %'])}
        />
        <DataPoint
          label={stock['AI Tier'] ? 'AI Score' : 'Value Score'}
          value={(stock['AI Tier'] ? stock.aiScore : stock.valueScore).toFixed(2)}
        />
      </div>
      <div className="comparison-block">
        <h3>Reported Quarter Comparison</h3>
        <div>
          <span>Revenue</span>
          <strong>{formatMarketCap(stock['Revenue (same quarter previous year)'])}</strong>
          <em>{formatMarketCap(stock['Revenue (latest quarter)'])}</em>
        </div>
        <div>
          <span>EPS</span>
          <strong>{formatCurrency(stock['EPS (same quarter previous year)'])}</strong>
          <em>{formatCurrency(stock['EPS (latest quarter)'])}</em>
        </div>
      </div>
    </aside>
  );
}

function DataPoint({ label, value, tone = 'neutral' }) {
  return (
    <div className={`data-point ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function CompanyLogo({ ticker, name, size = 'small' }) {
  const [failed, setFailed] = useState(false);
  const label = String(ticker || name || '?').slice(0, 2).toUpperCase();
  const className = `company-logo ${size}`;

  if (failed) {
    return <span className={className}>{label}</span>;
  }

  return (
    <span className={className}>
      <img
        src={`https://financialmodelingprep.com/image-stock/${logoTicker(ticker)}.png`}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

function StockTable({ stocks, rankByTicker, selectedTicker, focusedTicker, onSelect, onFocus, mode }) {
  const isAi = mode === 'ai';

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Ticker</th>
            <th>Company</th>
            {isAi ? <th>Tier</th> : null}
            {isAi ? <th>AI Category</th> : null}
            {isAi ? <th>Confidence</th> : null}
            <th>Market Cap</th>
            <th>Revenue Growth</th>
            <th>EPS Growth</th>
            <th>3Y Price</th>
            <th>P/E</th>
            <th>PEG</th>
            <th>{isAi ? 'AI Score' : 'Score'}</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr
              key={stock.Ticker}
              className={`${stock.Ticker === selectedTicker ? 'selected-row' : ''} ${stock.Ticker === focusedTicker ? 'focused-row' : ''}`}
              onClick={() => onSelect(stock.Ticker)}
              onDoubleClick={() => onFocus(stock.Ticker)}
              title="Click to highlight this ticker in the chart"
            >
              <td>
                <span className={`rank-badge ${rankByTicker.get(stock.Ticker) <= 7 ? 'top-rank' : rankByTicker.get(stock.Ticker) <= 10 ? 'watch-rank' : ''}`}>
                  {rankByTicker.get(stock.Ticker) ?? index + 1}
                </span>
              </td>
              <td>
                <span className="ticker-cell">
                  <CompanyLogo ticker={stock.Ticker} name={stock['Company Name']} />
                  <strong>{stock.Ticker}</strong>
                </span>
              </td>
              <td>{stock['Company Name']}</td>
              {isAi ? (
                <td>
                  <span className="tier-pill">{stock['AI Tier']?.replace(' - ', '\n')}</span>
                </td>
              ) : null}
              {isAi ? <td>{stock['AI Category']}</td> : null}
              {isAi ? (
                <td>
                  <span className={`confidence-pill ${String(stock['AI Confidence']).toLowerCase()}`}>
                    {stock['AI Confidence']}
                  </span>
                </td>
              ) : null}
              <td>{formatMarketCap(stock['Market Cap'])}</td>
              <td className={stock['Revenue Growth 2yr Avg %'] > 0 ? 'positive-text' : 'negative-text'}>
                {formatPercent(stock['Revenue Growth 2yr Avg %'])}
              </td>
              <td className={stock['EPS Growth 2yr Avg %'] > 0 ? 'positive-text' : 'negative-text'}>
                {formatPercent(stock['EPS Growth 2yr Avg %'])}
              </td>
              <td className={metricTone(stock['3 Year Price Change %']) === 'negative' ? 'negative-text' : 'positive-text'}>
                {formatPercent(stock['3 Year Price Change %'])}
              </td>
              <td>{formatRatio(stock['P/E Ratio'])}</td>
              <td>{formatRatio(stock['PEG Ratio'])}</td>
              <td>
                <strong>{isAi ? stock.aiScore.toFixed(1) : stock.valueScore.toFixed(1)}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
