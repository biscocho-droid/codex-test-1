import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DEFAULT_SYMBOL = 'AAPL';

const formatNumber = (value) => {
  const number = Number(value);
  if (Number.isNaN(number)) {
    return '--';
  }
  return number.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export default function StockLookup() {
  const [symbol, setSymbol] = useState(DEFAULT_SYMBOL);
  const [query, setQuery] = useState(DEFAULT_SYMBOL);
  const [quote, setQuote] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const apiKey = import.meta.env.VITE_ALPHA_VANTAGE_KEY || 'demo';

  const fetchQuote = async (nextSymbol) => {
    if (!nextSymbol) return;
    setStatus('loading');
    setError('');
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${nextSymbol}&apikey=${apiKey}`
      );
      const data = await response.json();
      const payload = data['Global Quote'];

      if (!payload || Object.keys(payload).length === 0) {
        throw new Error('No data returned. Check the ticker symbol or API key.');
      }

      setQuote({
        symbol: payload['01. symbol'],
        price: payload['05. price'],
        change: payload['09. change'],
        changePercent: payload['10. change percent'],
        open: payload['02. open'],
        high: payload['03. high'],
        low: payload['04. low'],
        volume: payload['06. volume'],
        latestTradingDay: payload['07. latest trading day']
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchQuote(symbol);
  }, [symbol]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = query.trim().toUpperCase();
    if (!trimmed) return;
    setSymbol(trimmed);
  };

  const isPositive = Number(quote?.change) >= 0;

  return (
    <div className="gradient-border">
      <div className="glass-card p-6 space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-slate-300">Stock lookup</p>
          <h2 className="text-2xl font-semibold">Search a ticker</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            placeholder="Try AAPL or TSLA"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button
            type="submit"
            className="rounded-xl bg-cyan-500/80 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Fetch quote
          </button>
        </form>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          {status === 'loading' && <p className="text-slate-300">Loading market data…</p>}
          {status === 'error' && <p className="text-rose-300">{error}</p>}
          {quote && status === 'success' && (
            <motion.div
              key={quote.price}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-300">{quote.symbol}</p>
                  <p className="text-3xl font-semibold">${formatNumber(quote.price)}</p>
                </div>
                <div
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    isPositive ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                  }`}
                >
                  {isPositive ? '+' : ''}{formatNumber(quote.change)} ({quote.changePercent})
                </div>
              </div>
              <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                <p>Open: <span className="text-white">${formatNumber(quote.open)}</span></p>
                <p>High: <span className="text-white">${formatNumber(quote.high)}</span></p>
                <p>Low: <span className="text-white">${formatNumber(quote.low)}</span></p>
                <p>Volume: <span className="text-white">{formatNumber(quote.volume)}</span></p>
              </div>
              <p className="text-xs text-slate-400">Latest trading day: {quote.latestTradingDay}</p>
            </motion.div>
          )}
        </div>

        <p className="text-xs text-slate-400">
          Using Alpha Vantage global quote endpoint. Configure <span className="text-slate-200">VITE_ALPHA_VANTAGE_KEY</span> in
          a <span className="text-slate-200">.env</span> file for real data.
        </p>
      </div>
    </div>
  );
}
