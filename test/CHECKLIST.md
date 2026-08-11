# Visual test checklist

Copy this file for each release or test run and name the copy after the theme
version, for example `CHECKLIST-v0.2.0.md`. Keep completed copies in this
directory as versioned test records.

## Test run

| Field            | Value |
| ---------------- | ----- |
| Theme version    |       |
| Git commit       |       |
| Kiro version     |       |
| Zed version      |       |
| Operating system |       |
| Tester           |       |
| Date             |       |

## Setup

| Check                                                                        | Complete | Notes |
| ---------------------------------------------------------------------------- | :------: | ----- |
| Open the `test` directory in Kiro and Zed                                    |   [ ]    |       |
| Use the same font family, size, zoom, and tab width                          |   [ ]    |       |
| Disable selection, search matches, active-line highlighting, and inlay hints |   [ ]    |       |
| Place both editors side by side on the same fixture                          |   [ ]    |       |

## Fixture comparison

Mark a theme complete only after comparing all syntax described in the fixture
table in `README.md`. Record discrepancies in the mismatch table below.

| Fixture         | Kiro Dark | Kiro Light | Notes |
| --------------- | :-------: | :--------: | ----- |
| `tsx.tsx`       |    [ ]    |    [ ]     |       |
| `typescript.ts` |    [ ]    |    [ ]     |       |
| `html.html`     |    [ ]    |    [ ]     |       |
| `css.css`       |    [ ]    |    [ ]     |       |
| `json.json`     |    [ ]    |    [ ]     |       |
| `markdown.md`   |    [ ]    |    [ ]     |       |
| `python.py`     |    [ ]    |    [ ]     |       |
| `rust.rs`       |    [ ]    |    [ ]     |       |
| `shell.sh`      |    [ ]    |    [ ]     |       |
| `yaml.yaml`     |    [ ]    |    [ ]     |       |
| `toml.toml`     |    [ ]    |    [ ]     |       |
| `sql.sql`       |    [ ]    |    [ ]     |       |
| `changes.diff`  |    [ ]    |    [ ]     |       |

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
