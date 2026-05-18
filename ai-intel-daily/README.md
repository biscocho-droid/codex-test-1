# AI Intel Daily

Static GitHub Pages-ready PWA for a free-source AI briefing.

## Local workflow

```bash
python3 scripts/generate_ai_intel_feed.py --include-failures
python3 -m http.server 8080 --directory codex-test-1-pages
```

Open `http://localhost:8080/ai-intel-daily/`.

## Source policy

The generator uses public RSS/Atom/news feeds only. It does not require paid feeds, API keys, or a backend server.

## Daily schedule

The GitHub Actions workflow is configured for 4 AM America/Chicago by scheduling both 09:00 UTC and 10:00 UTC, then checking the Chicago local hour before generating the feed.
