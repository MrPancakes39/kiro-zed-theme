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

| Check                                                                        | Complete | Notes |
| ---------------------------------------------------------------------------- | :------: | ----- |
| Open the `test` directory in Kiro and Zed                                    |   [x]    |       |
| Use the same font family, size, zoom, and tab width                          |   [x]    |       |
| Disable selection, search matches, active-line highlighting, and inlay hints |   [~]    |       |
| Place both editors side by side on the same fixture                          |   [x]    |       |

## Fixture comparison

Mark a theme complete only after comparing all syntax described in the fixture
table in `README.md`. Record discrepancies in the mismatch table below.

| Fixture         | Kiro Dark | Kiro Light | Notes                                                                                                                                                          |
| --------------- | :-------: | :--------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `changes.diff`  |    [x]    |    [x]     |                                                                                                                                                                |
| `css.css`       |    [x]    |    [x]     | Accepted divergence:<br/>Zed keeps CSS values syntax-specific (pink/red) instead of<br/>Kiro's broad blue property-value scope; the extra contrast is clearer. |
| `html.html`     |    [ ]    |    [ ]     |                                                                                                                                                                |
| `json.json`     |    [ ]    |    [ ]     |                                                                                                                                                                |
| `markdown.md`   |    [ ]    |    [ ]     |                                                                                                                                                                |
| `python.py`     |    [ ]    |    [ ]     |                                                                                                                                                                |
| `rust.rs`       |    [ ]    |    [ ]     |                                                                                                                                                                |
| `shell.sh`      |    [ ]    |    [ ]     |                                                                                                                                                                |
| `sql.sql`       |    [ ]    |    [ ]     |                                                                                                                                                                |
| `toml.toml`     |    [ ]    |    [ ]     |                                                                                                                                                                |
| `tsx.tsx`       |    [ ]    |    [ ]     |                                                                                                                                                                |
| `typescript.ts` |    [ ]    |    [ ]     |                                                                                                                                                                |
| `yaml.yaml`     |    [ ]    |    [ ]     |                                                                                                                                                                |

## UI-state comparison

| State                                       | Kiro Dark | Kiro Light | Notes |
| ------------------------------------------- | :-------: | :--------: | ----- |
| Diagnostics                                 |    [ ]    |    [ ]     |       |
| Matching brackets                           |    [ ]    |    [ ]     |       |
| Git additions, modifications, and deletions |    [ ]    |    [ ]     |       |

## Mismatches

| Theme | File and line | Token | Kiro color | Zed color | Resolution |
| ----- | ------------- | ----- | ---------- | --------- | ---------- |
|       |               |       |            |           |            |

## Sign-off

| Check                                                               | Complete | Notes |
| ------------------------------------------------------------------- | :------: | ----- |
| Every mismatch is recorded above                                    |   [ ]    |       |
| New language-specific mismatches have minimized regression fixtures |   [ ]    |       |
| Kiro Dark matches                                                   |   [ ]    |       |
| Kiro Light matches                                                  |   [ ]    |       |
