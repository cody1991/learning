#!/usr/bin/env bash
# Clone / update course repos under labs/
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

clone_one() {
  local slug="$1"
  local url="$2"
  if [[ -d "$slug/.git" ]]; then
    echo "OK exists: $slug"
    return
  fi
  echo "Cloning $slug ..."
  git clone --depth 1 "$url" "$slug"
}

case "${1:-all}" in
  microsoft-generative-ai-for-beginners|genai|all)
    clone_one microsoft-generative-ai-for-beginners \
      https://github.com/microsoft/generative-ai-for-beginners.git
    ;;&
  microsoft-ai-agents-for-beginners|agents)
    clone_one microsoft-ai-agents-for-beginners \
      https://github.com/microsoft/ai-agents-for-beginners.git
    ;;&
  microsoft-mcp-for-beginners|mcp)
    clone_one microsoft-mcp-for-beginners \
      https://github.com/microsoft/mcp-for-beginners.git
    ;;&
  data-engineering-zoomcamp|zoomcamp)
    clone_one data-engineering-zoomcamp \
      https://github.com/DataTalksClub/data-engineering-zoomcamp.git
    ;;&
  machine-learning-zoomcamp|ml-zoomcamp|mlzoomcamp)
    clone_one machine-learning-zoomcamp \
      https://github.com/DataTalksClub/machine-learning-zoomcamp.git
    ;;&
  all) ;;
  *)
    echo "Unknown course: $1"
    echo "Usage: $0 [all|genai|agents|mcp|zoomcamp|ml-zoomcamp|<slug>]"
    exit 1
    ;;
esac

echo "Done. Remember: put API keys in each course .env (gitignored)."
