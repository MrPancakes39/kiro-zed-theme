# Kiro Theme for Zed

Kiro's built-in dark and light color themes, ported to [Zed](https://zed.dev/).

## Included themes

- Kiro Dark
- Kiro Light

The port covers Zed's interface, editor, syntax highlighting, diagnostics, Git
states and diffs, collaboration cursors, and terminal ANSI colors.

## Install for development

1. Clone this repository.
2. In Zed, open the Extensions page.
3. Select **Install Dev Extension** and choose this repository's root folder.
4. Open the theme selector and choose **Kiro Dark** or **Kiro Light**.

## Source

The palettes are based on Kiro's built-in `Kiro Dark` and `Kiro Light` theme
definitions from its `theme-defaults` application extension. VS Code TextMate
scopes were mapped to Zed's Tree-sitter syntax captures, and VS Code workbench
colors were mapped to their closest Zed theme equivalents.

This is an independent community port and is not affiliated with or endorsed by
Kiro or Amazon Web Services.

## License

[MIT](LICENSE)
