# DEAL · Realty Hub Coffee — Website

Premium café in Tay Ho, Hanoi, Vietnam. Vite + React 18 + TypeScript + TailwindCSS v3.

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Design Token Reference

All tokens live in `tailwind.config.js` and mirror `src/styles/globals.css` CSS variables:

| Token        | Hex       | Usage                              |
|--------------|-----------|------------------------------------|
| `anthracite` | `#2B2D2F` | Main dark background               |
| `anth-dark`  | `#1E2022` | Nav, headers, category bars        |
| `anth-light` | `#383A3C` | Alt rows, hover states             |
| `jade`       | `#4F9E6E` | Health DEAL accent, macro badges   |
| `brass`      | `#C9A96E` | Primary brand accent, prices, logo |
| `brass-dark` | `#A8854A` | Brass on light backgrounds         |
| `offwhite`   | `#F0EDE8` | Body text on dark backgrounds      |
| `cream`      | `#F7F4EF` | Light mode surface background      |
| `ink`        | `#1A1C1E` | Text on light backgrounds          |

**Fonts** (Google Fonts, loaded in `index.html`):
- `font-display` → Orbitron — headings, logo, prices, category labels
- `font-mono` → IBM Plex Mono — body, descriptions, all UI text

## How to Update Menu Data

Edit [`src/data/menuData.ts`](src/data/menuData.ts). Each item follows:

```ts
interface MenuItem {
  id: string          // unique kebab-case identifier
  name: string        // English name
  nameVn: string      // Vietnamese name
  description: string // one-line description
  price: string       // e.g. "135.000"
  flag: string        // emoji flag e.g. "🇻🇳"
  tag?: 'HERO' | 'HIGH PRO' | 'BAKED' | 'SIMPLE' | '25g PRO'
  macro?: { p: number; c: number; f: number }  // Health DEAL items only
  image?: string      // path to image asset (optional)
}
```

Menu is `MenuSection[]` — each section has `id: 'health' | 'food' | 'drinks'` containing `MenuCategory[]`.

**Adding a category:** append a new `MenuCategory` object to the relevant section's `categories` array.

## Adding Real Photos

1. Place files in `public/images/` (e.g. `public/images/interior-1.webp`)
2. In `menuData.ts` add `image: '/images/your-photo.webp'` to the item
3. In [`src/components/ui/MenuRow.tsx`](src/components/ui/MenuRow.tsx), replace the placeholder `div` with:
   ```tsx
   <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" style={{borderRadius:'2px'}} loading="lazy" />
   ```
4. For vibe section, update the `IMAGE_SLOTS` array in [`src/components/sections/Vibe.tsx`](src/components/sections/Vibe.tsx) and replace the placeholder `div` blocks with `<img>` tags.

## Adding / Editing Translations

All strings live in two files that share the same `Translations` type:
- [`src/i18n/en.ts`](src/i18n/en.ts) — English (default)
- [`src/i18n/vi.ts`](src/i18n/vi.ts) — Vietnamese

TypeScript enforces both files stay in sync. To add a new key:
1. Add it to `en.ts`
2. Add the same key with the Vietnamese value to `vi.ts`
3. Reference it in components via the `t` prop passed from `App.tsx`

## Time-Aware Logic

`useTimeMode()` in [`src/hooks/useTimeMode.ts`](src/hooks/useTimeMode.ts) returns one of:

| Mode      | Time (Vietnam UTC+7)        | Badge color |
|-----------|-----------------------------|-------------|
| `health`  | 07:00 – 13:00               | Jade        |
| `deal`    | 13:00 – 02:00 (next day)    | Brass       |
| `late`    | 02:00 – 05:00 (Fri/Sat only)| Red         |
| `closed`  | All other times             | Dim gray    |

Updates every 60 seconds. Used in `<Hero>` and `<Hours>` sections.

## File Structure

```
src/
  components/
    layout/      Nav.tsx, Footer.tsx
    ui/          Button, Badge, Tag, MenuRow, CategoryHeader, MacroBadge, TimeModeBadge
    sections/    Hero, Concept, Menu, Hours, Vibe, Contact
  hooks/         useTimeMode, useScrollProgress, useLanguage, useTheme
  data/          menuData.ts, extrasData.ts
  i18n/          en.ts, vi.ts
  styles/        globals.css
  App.tsx
  main.tsx
```

## Design Rules (Never Deviate)

- Logo always written **DEAL** — never D.E.A.L.
- Never `#000000` as background — use `anthracite #2B2D2F`
- Never `#ffffff` as text on dark — use `offwhite #F0EDE8`
- No gradients, no drop shadows, no blur effects
- Border radius max `4px`, prefer `2px`
- Animations max `400ms`, no bounce/spring easing
- Prices always Orbitron font, brass color
- No Demonopol or crypto branding anywhere on the site
