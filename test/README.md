# Kiro/Zed visual syntax tests

Open this directory as a workspace in both Kiro and Zed, place the editors side
by side, and open the same fixture at the same font size. The files are small on
purpose so a color difference is easy to locate and report.

Run the comparison once with **Kiro Dark** and once with **Kiro Light**.

## Comparison checklist

- Use the same font family, font size, zoom level, and tab width in both editors.
- Turn off selection, search matches, the active-line highlight, and inlay hints
  before taking screenshots; those overlays can change the apparent token color.
- Compare opening and closing JSX component names separately from lowercase HTML
  tags. `tsx.tsx` includes function, constant, and member-expression components.
- Check comments, keywords, operators, punctuation, strings, escapes, numbers,
  booleans, constants, variables, parameters, properties, functions, methods,
  constructors, types, and attributes across the fixtures.
- Repeat with the cursor on diagnostics, matching brackets, and Git changes when
  checking UI-state colors; those colors are not syntax captures.
- Record the file, line, token text, Kiro color, and Zed color for every mismatch.

## Fixtures

| File | Main coverage |
| --- | --- |
| `tsx.tsx` | JSX components, HTML/SVG tags, attributes, fragments, embedded expressions |
| `typescript.ts` | TypeScript declarations, types, functions, properties, literals, operators |
| `html.html` | Doctype, tags, attributes, entities, embedded CSS and JavaScript |
| `css.css` | Selectors, properties, custom properties, units, functions, strings, colors |
| `json.json` | Keys, strings, escapes, numbers, booleans, and null |
| `markdown.md` | Headings, emphasis, links, lists, quotes, inline and fenced code |
| `python.py` | Decorators, classes, methods, parameters, builtins, f-strings, constants |
| `rust.rs` | Attributes, macros, lifetimes, traits, enums, types, methods, constants |
| `shell.sh` | Shebang, commands, options, variables, substitutions, strings, functions |
| `yaml.yaml` | Keys, anchors, aliases, tags, block strings, numbers, booleans, null |
| `toml.toml` | Tables, dotted keys, dates, arrays, numbers, booleans, strings |
| `sql.sql` | Keywords, schemas, tables, columns, functions, parameters, strings, numbers |
| `changes.diff` | Diff headers, added lines, deleted lines, and hunk markers |

This corpus is intentionally broad, but no finite fixture can cover every capture
from every Zed language grammar. Add a minimized example here whenever a new
language-specific mismatch is found; that turns the visual report into a lasting
regression fixture.
