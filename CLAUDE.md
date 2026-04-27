# DEAL Realty Hub Coffee — Project Guide

Read this file at the start of every session. It gives you full context without needing to audit the codebase.

---

## What this is

A React/Vite marketing website for **DEAL · Realty Hub Coffee**, a premium café at 28/52 Tô Ngọc Vân, Tây Hồ, Hà Nội (Est. 2026). The café doubles as a physical hub for the **Demonopol** real-estate ecosystem — "a café is just the beginning."

- Live on Vercel
- Email: realty.hub@demonopol.com
- Hours: Mon–Thu & Sun 07:00–02:00 · Fri–Sat 07:00–05:00
- Parent platform: demonopol.com

---

## Stack

| Layer | Tool |
|-------|------|
| Framework | React 19 + Vite 8 |
| Language | TypeScript 6 (strict) |
| Styling | Tailwind CSS 3 (dark mode via `class`) |
| Animation | Framer Motion 12 |
| i18n | Custom hook — EN / VI toggle |
| Deploy | Vercel |

Run locally: `npm run dev` → http://localhost:5173

---

## File map

```
src/
├── App.tsx                     # Root — assembles 7 sections
├── components/
│   ├── layout/
│   │   ├── Nav.tsx             # Fixed navbar, scroll progress bar, mobile hamburger
│   │   └── Footer.tsx          # 3-col footer + Demonopol link
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero, Vietnam clock, time-mode badge
│   │   ├── Concept.tsx         # Health DEAL vs DEAL Late cards
│   │   ├── Menu.tsx            # Grid menu from menuData.ts
│   │   ├── Hours.tsx           # Hours table
│   │   ├── Vibe.tsx            # Gallery + word cloud (see docs/IMAGES.md)
│   │   ├── RealtyHub.tsx       # Demonopol integration — not in nav (discovery-first)
│   │   └── Contact.tsx         # Address, socials, hiring
│   └── ui/
│       ├── Button.tsx
│       ├── CategoryHeader.tsx
│       ├── MacroBadge.tsx
│       ├── MenuRow.tsx
│       ├── Tag.tsx
│       └── TimeModeBadge.tsx
├── data/
│   ├── menuData.ts             # 871 lines — full menu (Health, Food, Drinks)
│   └── extrasData.ts           # Sweet + salty add-ons
├── hooks/
│   ├── useLanguage.ts          # EN/VI persisted toggle
│   ├── useTheme.ts             # Dark/Light class toggle
│   ├── useTimeMode.ts          # Returns 'health'|'deal'|'late'|'closed' from Vietnam time
│   └── useScrollProgress.ts    # Scroll Y for nav progress bar
├── i18n/
│   ├── en.ts                   # All English strings
│   └── vi.ts                   # All Vietnamese strings
└── styles/
    └── globals.css             # Tailwind base + custom CSS variables

public/                         # Static assets — see docs/IMAGES.md for full catalog
tailwind.config.js              # Color tokens, fonts, custom screens (xs: 480px)
index.html                      # JSON-LD LocalBusiness schema, OG tags, PWA manifest
```

---

## Brand & design system

See [`docs/BRANDING.md`](docs/BRANDING.md) for full details. Quick reference:

**Colors (Tailwind tokens)**
- `brass` #C9A96E — primary accent, logo, interactive
- `jade` #4F9E6E — Health DEAL / morning mode
- `anthracite` #2B2D2F — main dark background
- `offwhite` #F0EDE8 — text on dark
- `red` #C0392B — late-night mode

**Fonts**
- Display: **Orbitron** (logo, headlines)
- Mono: **IBM Plex Mono** (body, labels)

**Slogan (3 lines on counter in brass)**
1. A good deal starts with a good meal.
2. Fuel the morning.
3. Own the night.

---

## Time-based UX

The site adapts to Vietnam time (UTC+7). `useTimeMode()` returns:

| Mode | Hours | Color |
|------|-------|-------|
| `health` | 07:00–13:00 | jade |
| `deal` | 13:00–02:00 | brass |
| `late` | 02:00–05:00 (Fri–Sat only) | red, pulsing |
| `closed` | outside hours | muted |

---

## Key design decisions (don't change without reason)

- **RealtyHub not in nav** — discovery-first, not a main menu item
- **Gallery featured slot** = `exterior-facade.jpg` — the exterior render is the brand hero
- **Hero background** = `interior-main.jpg` at 18% opacity — subtle texture, not a photo-forward hero
- **Dark mode default** — light mode available but dark is primary
- **No closing time** — the space being open late is a core brand differentiator
- **Word cloud** mirrors the fascia signage on the actual physical facade

---

## Image assets

See [`docs/IMAGES.md`](docs/IMAGES.md) for full catalog with descriptions and recommended uses.

---

## i18n

All user-visible text lives in `src/i18n/en.ts` and `src/i18n/vi.ts`. Components receive a `t` prop from `useLanguage()`. Never hardcode strings in components.
