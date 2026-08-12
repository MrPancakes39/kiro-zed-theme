# Kiro Default Themes for Zed

Faithful ports of Kiro's built-in dark and light color themes for
[Zed](https://zed.dev/). They bring Kiro's understated palette and comfortable
contrast to Zed while preserving the character of the original themes.

## Screenshots

### Welcome screen

![Kiro theme applied to Zed's welcome screen](assets/theme_welcome.png)

### Editor

![Kiro theme applied to Zed's code editor](assets/theme_code.png)

## Theme Comparison

The screenshots below apply both themes to the same HTML example, making their
contrast and color treatment easy to compare directly.

|                       [Marketplace Kiro theme](https://github.com/Takk8IS/kiro-theme-for-zed)                       |            [Kiro Default Themes (this project)](https://github.com/MrPancakes39/kiro-zed-theme)            |
| :-----------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
| [![HTML displayed with the marketplace Kiro theme](assets/comparison/html_old.png)](assets/comparison/html_old.png) | [![HTML displayed with Kiro Default Dark](assets/comparison/html_new.png)](assets/comparison/html_new.png) |

The marketplace theme uses a softer, more muted treatment across the editor
interface. This Kiro Dark increases the separation between text and
surfaces, uses a darker elevated interface color, and gives the purple accent a
more visible role. Its syntax colors are also more deliberately separated so
HTML, embedded CSS, and JavaScript tokens remain distinct in the mixed-language
example.

The theme picker is visible in both screenshots to identify the active theme:
`Kiro Dark` is the marketplace theme, while `Kiro Default Dark` is this
project's theme.

### Repositories

- [Takk8IS/kiro-theme-for-zed](https://github.com/Takk8IS/kiro-theme-for-zed)
- [MrPancakes39/kiro-zed-theme](https://github.com/MrPancakes39/kiro-zed-theme)

## Included themes

- Kiro Dark
- Kiro Light

The port covers Zed's interface, editor, syntax highlighting, diagnostics, Git
states and diffs, collaboration cursors, and terminal ANSI colors.

Both themes are intended to feel complete throughout the editor, whether you
are writing code, reviewing a diff, working in the terminal, or navigating
Zed's panels and menus.

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
