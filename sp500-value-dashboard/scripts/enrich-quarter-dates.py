from __future__ import annotations

import json
import time
from datetime import datetime
from pathlib import Path

import pandas as pd
import yfinance as yf


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "src" / "data" / "sp500.json"
REQUEST_DELAY_SECONDS = 0.15


def to_yahoo_ticker(ticker: str) -> str:
    return ticker.replace(".", "-")


def iso_date(value) -> str | None:
    if value is None or pd.isna(value):
        return None
    if isinstance(value, pd.Timestamp):
        return value.date().isoformat()
    if isinstance(value, datetime):
        return value.date().isoformat()
    return str(value)[:10]


def fetch_quarter_dates(ticker: str) -> tuple[str | None, str | None]:
    stock = yf.Ticker(to_yahoo_ticker(ticker))
    statement = stock.quarterly_income_stmt

    if statement is None or statement.empty or len(statement.columns) == 0:
        statement = stock.quarterly_financials

    if statement is None or statement.empty or len(statement.columns) == 0:
        return None, None

    latest = statement.columns[0]
    previous_year = statement.columns[4] if len(statement.columns) > 4 else None
    return iso_date(latest), iso_date(previous_year)


def main() -> None:
    rows = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    total = len(rows)

    for index, row in enumerate(rows, start=1):
        ticker = row["Ticker"]
        if row.get("Latest Quarter End Date"):
            continue

        try:
            latest, previous_year = fetch_quarter_dates(ticker)
            row["Latest Quarter End Date"] = latest
            row["Same Quarter Previous Year End Date"] = previous_year
        except Exception as exc:
            row["Latest Quarter End Date"] = None
            row["Same Quarter Previous Year End Date"] = None
            print(f"{index}/{total} {ticker}: skipped ({exc})", flush=True)
        finally:
            if index % 25 == 0:
                DATA_PATH.write_text(json.dumps(rows, indent=2, allow_nan=False), encoding="utf-8")
                print(f"Checkpoint {index}/{total}", flush=True)
            time.sleep(REQUEST_DELAY_SECONDS)

    DATA_PATH.write_text(json.dumps(rows, indent=2, allow_nan=False), encoding="utf-8")
    print(f"Updated {DATA_PATH}", flush=True)


if __name__ == "__main__":
    main()
