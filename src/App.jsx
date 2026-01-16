import StockLookup from './components/StockLookup';

export default function App() {
  return (
    <div className="min-h-screen bg-night-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-80" />
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-40 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-12">
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Stock Pulse</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">Modern stock dashboard</h1>
            <p className="max-w-2xl text-slate-300">
              A clean, glassmorphism-inspired workspace for tracking quotes and building your personal watchlist.
              This initial iteration focuses on the core layout and a live quote fetch.
            </p>
          </header>

          <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <StockLookup />
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold">What’s next</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Real-time index ticker strip for S&P 500, Nasdaq, and Dow.</li>
                <li>• Interactive 1-day and 1-month charts with Chart.js.</li>
                <li>• Watchlist + portfolio simulator with localStorage persistence.</li>
                <li>• Stock news sidebar with keyword-driven headlines.</li>
              </ul>
              <p className="mt-6 text-xs text-slate-400">
                Ready when you are—confirm which API provider you want to use for the expanded dataset.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
