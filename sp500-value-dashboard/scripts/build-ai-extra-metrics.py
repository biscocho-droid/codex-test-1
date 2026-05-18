from __future__ import annotations

import json
import sys
import time
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PROJECT_ROOT = ROOT
sys.path.insert(0, str(PROJECT_ROOT))

from sp500_value_opportunities import OUTPUT_COLUMNS, get_company_metrics  # noqa: E402


WATCHLIST_PATH = ROOT / "src" / "data" / "ai-watchlist.json"
SP500_PATH = ROOT / "src" / "data" / "sp500.json"
OUT_PATH = ROOT / "src" / "data" / "ai-extra-metrics.json"
REQUEST_DELAY_SECONDS = 0.6


def clean_row(row: dict) -> dict:
    return {key: row.get(key) for key in OUTPUT_COLUMNS}


def main() -> None:
    watchlist = json.loads(WATCHLIST_PATH.read_text(encoding="utf-8"))
    sp500 = json.loads(SP500_PATH.read_text(encoding="utf-8"))
    sp500_tickers = {row["Ticker"] for row in sp500}
    existing = {}

    if OUT_PATH.exists():
        existing = {
            row["Ticker"]: row
            for row in json.loads(OUT_PATH.read_text(encoding="utf-8"))
            if row.get("Ticker")
        }

    missing = [row for row in watchlist if row["Ticker"] not in sp500_tickers]
    total = len(missing)

    for index, row in enumerate(missing, start=1):
        ticker = row["Ticker"]
        if ticker in existing:
            continue

        try:
            metrics = clean_row(get_company_metrics(ticker, row["Company"]))
            existing[ticker] = metrics
            print(f"{index}/{total} fetched {ticker}", flush=True)
        except Exception as exc:
            existing[ticker] = {
                "Ticker": ticker,
                "Company Name": row["Company"],
                **{column: None for column in OUTPUT_COLUMNS if column not in {"Ticker", "Company Name"}},
            }
            print(f"{index}/{total} skipped {ticker}: {exc}", flush=True)
        finally:
            OUT_PATH.write_text(
                json.dumps(list(existing.values()), indent=2, allow_nan=False),
                encoding="utf-8",
            )
            time.sleep(REQUEST_DELAY_SECONDS)

    print(f"Updated {OUT_PATH} with {len(existing)} rows", flush=True)


if __name__ == "__main__":
    main()
