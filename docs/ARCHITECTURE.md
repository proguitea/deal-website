# Architecture — DEAL Realty Hub Coffee

## Page sections (in order)

1. **Hero** (`Hero.tsx`) — Full-screen landing. Animated DEAL lettering, Vietnam clock (live UTC+7), time-mode badge, CTA to #menu. Background: `interior-main.jpg` at 18% opacity.
2. **Concept** (`Concept.tsx`) — Two cards: Health DEAL (jade, 07:00–13:00) vs DEAL Late (brass, 13:00–close). Tagline: "A café is just the beginning."
3. **Menu** (`Menu.tsx`) — Tabbed grid. Data from `menuData.ts` (Health DEAL tab, Food tab, Drinks tab). `extrasData.ts` for sweet/salty add-ons.
4. **Hours** (`Hours.tsx`) — Hours table + location.
5. **Vibe** (`Vibe.tsx`) — Manifesto block + asymmetric photo gallery (5 slots) + word cloud.
6. **RealtyHub** (`RealtyHub.tsx`) — Demonopol integration. "The deal behind the deal." 60/40 layout: text + QR code. Links to demonopol.com. **Not in main nav** (discovery-first).
7. **Contact** (`Contact.tsx`) — Address, emails, socials, Vietnamese recruitment text.

## State / hooks

| Hook | What it does |
|------|-------------|
| `useTimeMode()` | Returns `'health' \| 'deal' \| 'late' \| 'closed'` based on Vietnam time. Used in Hero and TimeModeBadge. |
| `useLanguage()` | Returns `{ t, lang, toggle }` — `t` is the full translation object, persisted to localStorage. |
| `useTheme()` | Dark/light toggle via `class` on `<html>`. Persisted to localStorage. |
| `useScrollProgress()` | Returns scroll Y as 0–1. Used for navbar progress bar. |

## i18n pattern

```tsx
// In App.tsx
const { t } = useLanguage();
// Pass t down to sections
<Hero t={t} />
```

All text in `src/i18n/en.ts` and `src/i18n/vi.ts`. Same shape — TypeScript ensures both stay in sync via `typeof en` export.

## Gallery layout (Vibe section)

CSS class `vibe-gallery` in `globals.css`:
- Desktop: `grid-template-columns: 2fr 1fr 1fr` with `grid-template-rows: 240px 240px`
- The `vibe-gallery-featured` slot spans 2 rows
- Mobile: single column

## Nav links

```
Concept | Menu | Hours | Vibe | Contact
```

RealtyHub is intentionally absent from nav.

## Animations

All via Framer Motion:
- Hero letters: staggered `y: 50 → 0` per letter
- Section reveals: `whileInView` with `once: true` + negative margin threshold
- Word cloud: staggered fade-in per word
- Clock: `animate={{ opacity: [1, 0.4, 1] }}` for late-night pulse

## SEO / PWA

- `index.html` has JSON-LD `LocalBusiness` schema
- OpenGraph + Twitter Card meta tags
- `public/manifest.json` for PWA
- `public/sitemap.xml` and `public/robots.txt`

## Build commands

```bash
npm run dev      # Vite dev server on :5173
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # ESLint
```
