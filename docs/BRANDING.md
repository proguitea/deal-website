# Branding — DEAL Realty Hub Coffee

## Identity

| Element | Value |
|---------|-------|
| Full name | DEAL · Realty Hub Coffee |
| Eyebrow | Est. MMXXVI · Tây Hồ · Hà Nội |
| Subtitle | REALTY HUB COFFEE (small-caps, jade color, under the DEAL logo) |
| Parent | Demonopol ecosystem (demonopol.com) |

## Slogan

Embossed in brass on the physical counter. Three lines:

```
A good deal starts with a good meal.
Fuel the morning.
Own the night.
```

In `src/i18n/en.ts` as `hero.slogan.line1 / line2 / line3`.

## Color palette

Defined in `tailwind.config.js` and `src/styles/globals.css`.

| Token | Hex | Role |
|-------|-----|------|
| `brass` | #C9A96E | Brand primary — DEAL gold, accents, borders, interactive |
| `jade` | #4F9E6E | Health / morning — poke, acai, protein offerings |
| `red` | #C0392B | Late night — pulsing badge after 2am |
| `anthracite` | #2B2D2F | Main dark background |
| `anth-dark` | #1E2022 | Navbar, sections that need deeper black |
| `anth-light` | #383A3C | Menu row alternates |
| `green` | #1A3C2E | Health DEAL concept card background |
| `cream` | #F7F4EF | Light mode background |
| `cream-dark` | #EDE9E2 | Light mode alternates |
| `offwhite` | #F0EDE8 | Primary text (dark mode) |
| `ink` | #1A1C1E | Primary text (light mode) |

## Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display | Orbitron | 400, 700, 900 | Logo, section headlines, word cloud |
| Mono | IBM Plex Mono | 300, 400, 600 | Body text, labels, UI elements |

Both imported from Google Fonts in `index.html` with `display=swap`.

Tailwind tokens: `font-display`, `font-mono`

Responsive sizing via `clamp()` throughout — e.g. hero title is `clamp(4rem, 11vw, 9rem)`.

## Physical interior design language

From the architectural renders (Apr 2026):

- **Counter**: Smooth concrete / micro-cement, curved front, gold "DEAL" letters + slogan
- **Tables**: Resin river tables — warm wood slab with black epoxy river inlay
- **Seating**: Brown leather bar stools (high + counter height), round grey concrete stools, leather lounge chairs
- **Walls**: Dark charcoal micro-cement, exposed brick accent (brand wall), large Hanoi skyline murals
- **Ceiling**: Geometric square LED light boxes flush in dark ceiling
- **Greenery**: Hanging vines from ceiling rails, large-leaf tropical plants, green wall columns
- **Lighting**: Warm amber under-counter glow, pendant rails, recessed spots
- **Windows**: Floor-to-ceiling glass at entrance/lounge zone

## Word cloud (Vibe section + facade signage)

The word cloud in `Vibe.tsx` matches the physical fascia signage on the exterior of the café:

`DEAL · OPEN · LATE · HANOI · FUEL · CA PHE · HEALTHY · SHAKES · POKE BOWL · PANINI · ACAI · PROTEIN · GRANOLA · BANH MI · WRAP · CROISSANT · SALMON · CAKES · EGG · TAY HO · JUICE · COFFEE · SNACK`

Brass = brand/location words, Jade = health items, Offwhite = food items.
