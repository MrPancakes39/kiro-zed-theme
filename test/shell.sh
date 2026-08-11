#!/usr/bin/env bash

set -euo pipefail

readonly THEME_NAME="Kiro Dark"
declare -a COLORS=("#b080ff" "#8dc8fb" "#80ffb5")

print_theme() {
  local index="${1:-0}"
  local selected="${COLORS[$index]}"

  if [[ -n "$selected" && "$THEME_NAME" == Kiro* ]]; then
    printf 'theme=%q color=%s\n' "$THEME_NAME" "$selected"
  else
    echo "No color selected" >&2
    return 1
  fi
}

for index in "${!COLORS[@]}"; do
  print_theme "$index"
done
