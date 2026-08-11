# Visual test checklist

Copy this file for each release or test run and name the copy after the theme
version, for example `CHECKLIST-v0.2.0.md`. Keep completed copies in this
directory as versioned test records.

## Test run

| Field            | Value        |
| ---------------- | ------------ |
| Theme version    | 0.1.0        |
| Git commit       | 34e765e      |
| Kiro version     | 1.0.288      |
| Zed version      | 1.14.2       |
| Operating system | pop-os 24.04 |
| Tester           | Sal Hasan    |
| Date             | 2026-08-11   |

## Setup

| Check                                                                                              | Complete | Notes                                                |
| -------------------------------------------------------------------------------------------------- | :------: | ---------------------------------------------------- |
| Open the `test` directory in Kiro and Zed                                                          |   [x]    | Sidebar placement and editor chrome are layout only. |
| Use the same font family, size, zoom, and tab width                                                |   [x]    |                                                      |
| Disable selection, search matches, active-line highlighting, inlay hints, and bracket colorization |   [~]    | Bracket colors in screenshots are editor state.      |
| Place both editors side by side on the same fixture                                                |   [x]    |                                                      |

## Fixture comparison

Mark a theme complete only after comparing all syntax described in the fixture
table in `README.md`. Record discrepancies in the mismatch table below.

| Fixture         | Kiro Dark | Kiro Light | Notes                                                                                                                                          |
| --------------- | :-------: | :--------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `changes.diff`  |    [x]    |    [x]     | Recheck Light after the global syntax-token changes.                                                                                           |
| `css.css`       |    [x]    |    [x]     | Accepted divergence:<br/>Zed keeps CSS values syntax-specific (pink/red) instead of<br/>Kiro's broad blue property-value scope; recheck Light. |
| `html.html`     |    [x]    |    [x]     | Accepted divergences in Light: doctype and HTML entity colors. Embedded CSS follows the accepted CSS divergence above. Recheck Light.          |
| `json.json`     |    [x]    |    [x]     | Dark divergences accepted. Light now uses blue booleans/null and vivid-red escapes; pending visual recheck.                                    |
| `markdown.md`   |    [ ]    |    [ ]     |                                                                                                                                                |
| `python.py`     |    [ ]    |    [ ]     |                                                                                                                                                |
| `rust.rs`       |    [ ]    |    [ ]     |                                                                                                                                                |
| `shell.sh`      |    [ ]    |    [ ]     |                                                                                                                                                |
| `sql.sql`       |    [ ]    |    [ ]     |                                                                                                                                                |
| `toml.toml`     |    [ ]    |    [ ]     |                                                                                                                                                |
| `tsx.tsx`       |    [ ]    |    [ ]     |                                                                                                                                                |
| `typescript.ts` |    [ ]    |    [ ]     |                                                                                                                                                |
| `yaml.yaml`     |    [ ]    |    [ ]     |                                                                                                                                                |

## UI-state comparison

| State                                       | Kiro Dark | Kiro Light | Notes                                                                       |
| ------------------------------------------- | :-------: | :--------: | --------------------------------------------------------------------------- |
| Diagnostics                                 |    [ ]    |    [ ]     |                                                                             |
| Matching brackets                           |    [ ]    |    [ ]     | Zed rainbow brackets and Kiro bracket-pair coloring use different palettes. |
| Git additions, modifications, and deletions |    [ ]    |    [ ]     |                                                                             |

## Mismatches

| Theme      | File and line                 | Token                   | Kiro color         | Zed color | Resolution                                              |
| ---------- | ----------------------------- | ----------------------- | ------------------ | --------- | ------------------------------------------------------- |
| Kiro Light | `html.html:1`                 | `!doctype html`         | Blue/orange        | Purple    | Accepted divergence                                     |
| Kiro Light | `html.html:6`, `html.html:15` | `&amp;`, `&nbsp;`       | Default foreground | Red       | Accepted divergence                                     |
| Kiro Dark  | `json.json:2-10`              | Object keys             | Lavender           | Cyan      | Accepted divergence: grammar scope mapping              |
| Kiro Dark  | `json.json:3-5`               | `true`, `false`, `null` | Blue               | Red       | Accepted divergence: grammar scope mapping              |
| Kiro Dark  | `json.json:2`, `json.json:10` | `\u2192`, `\n`          | Green              | Red       | Accepted divergence: Zed highlights escapes separately  |
| Kiro Light | `json.json:2-10`              | Object keys             | Lavender           | Teal      | Accepted divergence: Zed has clearer key/value contrast |
| Kiro Light | `json.json:3-5`               | `true`, `false`, `null` | Blue               | Blue      | Resolved: Zed now uses Kiro blue (`#2b36ab`)            |
| Kiro Light | `json.json:2`, `json.json:10` | `\u2192`, `\n`          | Green              | Vivid red | Intentional divergence: Zed uses `#c80e5c` for escapes  |

## Sign-off

| Check                                                               | Complete | Notes |
| ------------------------------------------------------------------- | :------: | ----- |
| Every mismatch is recorded above                                    |   [ ]    |       |
| New language-specific mismatches have minimized regression fixtures |   [ ]    |       |
| Kiro Dark matches                                                   |   [ ]    |       |
| Kiro Light matches                                                  |   [ ]    |       |
