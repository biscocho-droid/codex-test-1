# S&P 500 Value Finder Dashboard

Static React/Vite dashboard for finding S&P 500 value opportunities and curated AI beneficiaries.

## Run Locally

```bash
npm install
npm run dev -- --port 5173
```

Open:

```text
http://127.0.0.1:5173/
```

## Main Views

- `Value Opportunities`: ranks S&P 500 stocks by improving fundamentals, lagging price action, and valuation.
- `All Stocks`: shows all S&P 500 rows sorted by market cap, largest to smallest.
- `AI Opportunities`: curated AI-exposure universe with AI tier, category, confidence, thesis, and AI Opportunity Score.

## Data Files

- `src/data/sp500.json`
- `src/data/ai-watchlist.json`
- `src/data/ai-extra-metrics.json`

## Data Refresh Scripts

- `sp500_value_opportunities.py`: builds the Excel workbook and source S&P 500 metrics.
- `scripts/build-ai-extra-metrics.py`: fetches metrics for AI names outside the S&P 500 dataset.
- `scripts/enrich-quarter-dates.py`: adds latest quarter end dates to the dashboard data.
