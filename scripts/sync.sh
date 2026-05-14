#!/usr/bin/env bash
set -euo pipefail

message="${1:-Sync project changes}"
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$repo_root"

git pull --rebase

if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "$message"
  git push
else
  echo "No local changes to sync."
fi
