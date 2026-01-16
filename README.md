# Stock Dashboard

A modern single-page stock market dashboard prototype built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **Chart.js** (to be used in upcoming iterations).

This first iteration focuses on the foundational layout, styling, and a working stock quote fetch so we can iterate safely on the remaining features.

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure API access (optional)

This project uses Alpha Vantage for stock quotes. Create a `.env` file in the project root:

```bash
VITE_ALPHA_VANTAGE_KEY=your_key_here
```

If no key is provided, the app falls back to the public `demo` key which only returns sample data.

### 3) Start the dev server

```bash
npm run dev
```

Open the URL provided by Vite (usually `http://localhost:5173`).

## Current Features

- Dark-mode, glassmorphism-inspired layout with subtle gradients.
- Stock quote lookup using the Alpha Vantage Global Quote endpoint.
- Animated price card with Framer Motion.

## Next Iteration (pending approval)

- Real-time ticker for S&P 500, Nasdaq, and Dow.
- Chart.js line charts for 1-day and 1-month price history.
- Watchlist with `localStorage` persistence.
- Paper portfolio simulator (starting with $10,000 virtual cash).
- Stock news feed sidebar.

## Project Structure

```
src/
  components/      # Reusable UI components
  styles/          # Tailwind and global styles
  App.jsx          # App shell and layout
  main.jsx         # Entry point
```

---

If you want me to move forward with the next batch of features, let me know which data API(s) you prefer for indices, historical charts, and news.
