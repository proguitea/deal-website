# D.E.A.L Brand Assets

Logo files for marketing, social media, presentations, and designer hand-off.

## Quick pick

| Need | Use this |
|---|---|
| Designer hand-off / re-edit | Any `.svg` file (vector, infinite scale) |
| Social media post (Instagram square, profile pic) | `png/wordmark-stacked-dark-1080.png` |
| Header / banner / website | `png/wordmark-horizontal-dark-1440.png` |
| Light background (printed flyer, business card) | `png/wordmark-horizontal-light-1440.png` |
| Browser tab / favicon | `../public/favicon.svg` |
| App icon / large mark | `png/d-mark-dark-1024.png` |
| Sticker, T-shirt, custom background | `png/d-mark-transparent-2048.png` (alpha channel) |
| Link preview (Slack, WhatsApp, FB, LinkedIn) | `png/og-image-1200x630-1200.png` |
| Twitter/X header, FB cover, presentation slide | `png/hero-landscape-1920x1080-1920.png` |
| Instagram feed post (full hero composition) | `png/hero-square-1080x1080-1080.png` (or `-2160` for retina) |
| Instagram Story, TikTok cover, phone wallpaper | `png/hero-story-1080x1920-1080.png` |
| Anniversary post / corner watermark / sticker | `png/year-stamp-mmxxvi-800.png` |
| Email signature banner / business card line | `png/est-line-1600x120-1600.png` |

## Brand colors

| Role | Hex | Use |
|---|---|---|
| Brass — primary | `#C9A96E` | D letterform, wordmark on dark |
| Brass-dark | `#A8854A` | D letterform on light/cream backgrounds (better contrast) |
| Jade | `#4F9E6E` | Center accent band, "REALTY HUB COFFEE" subtitle |
| Red | `#D44332` | Two thin strokes flanking jade band (urgency / spice / late) |
| Anth-dark | `#1E2022` | Primary dark surface |
| Cream | `#F7F4EF` | Primary light surface |

## Files

### Vector (SVG)

- `d-mark-dark.svg` — square D-mark on anth-dark
- `d-mark-light.svg` — square D-mark on cream
- `d-mark-transparent.svg` — square D-mark, no background
- `wordmark-horizontal-dark.svg` — full horizontal logo on dark
- `wordmark-horizontal-light.svg` — full horizontal logo on light
- `wordmark-stacked-dark.svg` — D-mark above text (square layout for IG profile, etc.)
- `og-image-1200x630.svg` — link preview card
- `hero-landscape-1920x1080.svg` — full hero composition, 16:9 landscape
- `hero-square-1080x1080.svg` — hero composition cropped to square (1:1)
- `hero-story-1080x1920.svg` — hero composition for Instagram Story / TikTok cover (9:16)
- `year-stamp-mmxxvi.svg` — square Roman-numeral establishment stamp (800×800, framed)
- `est-line-1600x120.svg` — horizontal "Est. MMXXVI · Tây Hồ · Hà Nội" banner

### Raster (PNG)

In `png/`. Generated from the SVGs at standard sizes.

- D-mark variants: 256, 512, 1024, 2048 px
- Horizontal wordmark: 720, 1440, 2880 px
- Stacked wordmark: 480, 1080, 2160 px
- OG image: 1200 px (native size)
- Hero landscape: 1920 px (native, 16:9)
- Hero square: 1080 + 2160 px (1:1 — IG retina)
- Hero story: 1080 px (native, 9:16)
- Year stamp: 400, 800, 1600 px (square)
- Est-line: 1600 px (native, ~13:1 banner)

## Re-generating PNGs

If you edit any SVG in this folder, re-run:

```bash
npm run brand:build
```

This re-renders everything in `png/` from the SVGs. Requires `sharp` (already in devDependencies).

## Typography

The wordmark uses these Google Fonts (loaded by the live site):

- **Orbitron 900** — D.E.A.L wordmark
- **IBM Plex Mono 400** — REALTY HUB COFFEE subtitle

The SVGs reference these by name; if the fonts aren't installed, browsers and design tools will fall back to a monospace font (text will still be readable but won't match exactly). Designers re-creating the mark in Figma/Illustrator should install both fonts.
