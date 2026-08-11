# Zed extension with multiple themes

Research date: 2026-08-11. Sources are limited to Zed's official documentation, schema, and source repository.

## Short answer

A theme-only Zed extension can be a small Git repository containing:

```text
kiro-theme/
├── extension.toml
├── LICENSE                 # required for marketplace publication
└── themes/
    ├── kiro.json           # may contain several named themes
    └── kiro-muted.json     # additional family/file, if useful
```

Zed's documentation says an extension is a Git repository with an `extension.toml`, and that its `themes/` directory contains one or more theme files ([extension structure](https://zed.dev/docs/extensions/developing-extensions#directory-structure-of-a-zed-extension), [theme extension docs](https://zed.dev/docs/extensions/themes)). Theme-only extensions do not need `Cargo.toml`, `src/lib.rs`, or custom Rust: Zed says custom Rust is needed only for procedural capabilities such as language servers, context servers, and debuggers ([Rust and WebAssembly](https://zed.dev/docs/extensions/developing-extensions#rust-and-webassembly)).

## 1. Manifest

Use the current schema version and fill in the extension metadata:

```toml
id = "kiro-theme"
name = "Kiro Theme"
version = "0.0.1"
schema_version = 1
authors = ["Your Name <you@example.com>"]
description = "Kiro color themes for Zed"
repository = "https://github.com/your-name/kiro-zed-theme"
```

These are the fields shown by Zed's official manifest example ([source](https://zed.dev/docs/extensions/developing-extensions#directory-structure-of-a-zed-extension)). Do not add a hand-maintained list of theme files: Zed's extension builder scans the top-level `themes/` directory and adds every `.json` file to the packaged manifest ([builder source](https://github.com/zed-industries/zed/blob/c6b01d8a203a6dc8c06a89e05ee4dec69de55cf0/crates/extension/src/extension_builder.rs#L678-L700)).

For publication, the ID must be unique and cannot later be changed. Zed's current review rules say theme IDs should end in `-theme`, and extension IDs/names must not contain `zed`, `Zed`, or `extension` ([publishing prerequisites](https://zed.dev/docs/extensions/developing-extensions#extension-publishing-prerequisites)). Thus `kiro-theme` is the appropriate ID even if the repository is named `kiro-zed-theme`.

## 2. Put multiple themes in one or more JSON files

Every file must conform to Zed's current [`v0.2.0` theme schema](https://zed.dev/schema/themes/v0.2.0.json). A file represents one **theme family** and requires `name`, `author`, and a `themes` array. Every array item requires its own `name`, an `appearance` of `light` or `dark`, and a `style` object ([schema definitions](https://zed.dev/schema/themes/v0.2.0.json)).

For related variants, one file is sufficient:

```json
{
  "$schema": "https://zed.dev/schema/themes/v0.2.0.json",
  "name": "Kiro",
  "author": "Your Name",
  "themes": [
    {
      "name": "Kiro Dark",
      "appearance": "dark",
      "style": {
        "background": "#1b1d23",
        "text": "#d8dee9",
        "editor.background": "#1b1d23",
        "editor.foreground": "#d8dee9",
        "syntax": {
          "comment": { "color": "#7f8799", "font_style": "italic" },
          "keyword": { "color": "#c792ea" },
          "string": { "color": "#c3e88d" }
        }
      }
    },
    {
      "name": "Kiro Light",
      "appearance": "light",
      "style": {
        "background": "#f7f8fa",
        "text": "#24262d",
        "editor.background": "#f7f8fa",
        "editor.foreground": "#24262d",
        "syntax": {
          "comment": { "color": "#6c7380", "font_style": "italic" },
          "keyword": { "color": "#7b3fb3" },
          "string": { "color": "#397b1f" }
        }
      }
    }
  ]
}
```

The array is the mechanism for bundling several selectable themes in one family/file. Zed's own `One` family is a primary-source example: one JSON file contains both `One Dark` and `One Light` ([file start](https://github.com/zed-industries/zed/blob/c6b01d8a203a6dc8c06a89e05ee4dec69de55cf0/assets/themes/one/one.json#L1-L9), [light variant](https://github.com/zed-industries/zed/blob/c6b01d8a203a6dc8c06a89e05ee4dec69de55cf0/assets/themes/one/one.json#L426-L427)). It is also valid to split unrelated families or variants across several `.json` files under `themes/`; Zed discovers all of them. Give every selectable theme a distinct `name`, since that name is what appears in the theme selector and settings.

The schema enumerates UI, editor, syntax, player, status, and terminal properties. Although it only requires the `style` object itself, a useful port should define enough colors for the complete UI and syntax surface; Zed's [Theme Builder](https://zed.dev/theme-builder) can export a starting JSON file, and the official `One` file is a comprehensive reference.

## 3. Test locally

1. Open Zed's Extensions page.
2. Choose **Install Dev Extension** (or run `zed: install dev extension`).
3. Select the repository root containing `extension.toml`.
4. Open `theme selector: toggle` (`cmd-k cmd-t` on macOS, `ctrl-k ctrl-t` elsewhere) and verify every variant by name.
5. If loading fails, inspect `Zed.log` with `zed: open log`; Zed also documents launching `zed --foreground` for more verbose output.

These are Zed's documented local-development and troubleshooting steps ([developing locally](https://zed.dev/docs/extensions/developing-extensions#developing-an-extension-locally)); theme selection is documented separately ([selecting a theme](https://zed.dev/docs/themes#selecting-a-theme)). Test both appearances, editor states, panels, diagnostics, Git diff colors, syntax captures, and terminal ANSI colors before publication.

## 4. Publish to the extension store

Publication adds a few requirements beyond local development:

- Keep the theme as a distinct extension rather than mixing it with language support or other features ([prerequisites](https://zed.dev/docs/extensions/developing-extensions#extension-publishing-prerequisites)).
- Add a root license accepted by Zed. The current accepted set is Apache-2.0, BSD-2-Clause, BSD-3-Clause, CC-BY-4.0, GPL-3.0, LGPL-3.0, MIT, Unlicense, or zlib ([license requirements](https://zed.dev/docs/extensions/developing-extensions#extension-license-requirements)).
- Thoroughly install and test the dev extension first.
- Fork `zed-industries/extensions`, add the public extension repository as an HTTPS Git submodule at `extensions/kiro-theme`, and add an entry to the registry's `extensions.toml` whose version matches `extension.toml`:

  ```toml
  [kiro-theme]
  submodule = "extensions/kiro-theme"
  version = "0.0.1"
  ```

- Run `pnpm sort-extensions`, then open the registry pull request. The checked-out submodule commit must be reachable from a branch, not detached.

Zed documents the exact commands and constraints in its [publishing procedure](https://zed.dev/docs/extensions/developing-extensions#publishing-your-extension). After that pull request is merged, Zed packages and publishes the extension to its registry.

## Practical checklist for this repository

- [ ] Create `extension.toml` using `id = "kiro-theme"` and `schema_version = 1`.
- [ ] Add an accepted `LICENSE` before marketplace submission.
- [ ] Add one or more `themes/*.json` files using the `v0.2.0` schema.
- [ ] Put all related Kiro variants in each file's `themes` array, or use additional files for separate families.
- [ ] Ensure each selectable theme name is unique and its `appearance` is correct.
- [ ] Validate the whole UI, syntax, diagnostics, Git states, and terminal in a dev installation.
- [ ] Publish through a submodule and matching registry entry in `zed-industries/extensions`.
