# Design: أكلات جدودنا / Jododana

Derived from the shipped build (`assets/styles.css`). The world is the restaurant's own facade in Buraydah: mud-plaster walls, a maroon sign band with white lettering, and a frieze of maroon and mud triangles split by white lines.

## Color

| Token | Value | Role |
|---|---|---|
| `--plaster` | `#c4a27a` | Page ground (mud plaster), with fixed grain overlay |
| `--plaster-hi` | `#d2b48e` | Dish and menu item surfaces |
| `--plaster-lo` | `#ad8a62` | Booking call-out band, image wells |
| `--mud` | `#8a6a4a` | Frieze lower triangles |
| `--maroon` | `#6c2721` | Sign colour: nav, plaques, bands, primary buttons |
| `--maroon-hi` | `#823229` | Button hover |
| `--maroon-lo` | `#4a1915` | Footer, sign letter depth |
| `--sign` | `#f7f1e8` | Lettering and text on maroon |
| `--on-maroon-soft` | `#e8cfc4` | Secondary text on maroon |
| `--ink` / `--ink-soft` | `#2a1a12` / `#4b3324` | Text on plaster |
| `--sky` | `#15100d` | Behind the night facade photo |

Strategy: committed. Maroon owns whole regions (nav, hero plaque, house band, page heads, footer). There is no second accent colour.

## Type

- Display: Reem Kufi 500–700, self-hosted (`assets/fonts/`). Chosen as the closest open face to the geometric Kufi letters on the sign. Headings run `clamp()` from about 2rem to 5rem.
- Text: Readex Pro 300–600, self-hosted, Arabic and Latin.
- Numbers use tabular lining figures (`.num`). Arabic mode prints prices in Arabic-Indic digits.

## Shape and depth

- Square corners everywhere (radius 0), like plaster blocks and the sign panel.
- Shadows are neutral umber with an offset, never coloured halos.
- The only ornament is the frieze (`.frieze`, 26px tall SVG repeat), used at the edges of maroon regions. The menu category heads use a thin maroon zigzag rule taken from the same frieze.

## Components

- `.nav`: sticky maroon sign band, wordmark, three links, language toggle. On mobile the links drop to a second row.
- `.plaque`: maroon panel with the frieze at its base, set over the facade photo on desktop. On mobile it overlaps the photo from below.
- `.btn` variants: maroon (default), `--sign` (white on maroon ground), `--line-sign` (outline on maroon), `--ghost` (outline on plaster). Minimum height 52px, label on one line.
- `.dish` (rail card), `.item` / `.item--wide` (menu), `.plain-list` (drinks), `.branch`, `.facts`.
- Form: labels above inputs, hint and error below inputs, radio cards (`.choice`), guest stepper, success panel (`.done`).

## Motion

- Signature: the sign lights up. Headings marked `.sign-word.ignite` flicker from unlit to lit once on load, like channel letters at dusk.
- Sections fade up once on entry (`.reveal`). Content is visible without JS.
- All motion stops under `prefers-reduced-motion`.

## Language

- Arabic RTL is the default. English LTR is a toggle stored in `localStorage`. All strings and menu data are in `assets/app.js` (`T`, `MENU`).
