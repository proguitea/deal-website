# Menu Data — DEAL Realty Hub Coffee

Menu data lives in `src/data/menuData.ts` (871 lines) and `src/data/extrasData.ts`.

## Structure

```ts
// menuData.ts exports:
export const healthMenu: MenuSection[]   // Morning health items (07:00–13:00)
export const foodMenu: MenuSection[]     // All-day food (panini, wraps, etc.)
export const drinksMenu: MenuSection[]   // Beverages

// Each MenuSection:
{ category: string, items: MenuItem[] }

// Each MenuItem:
{ name: string, nameVi?: string, price: number, macros?: Macros, desc?: string }

// Macros:
{ p: number, c: number, f: number }  // protein, carbs, fat in grams
```

## Health DEAL tab (morning)
Macro-tracked items: acai bowls, poke bowls, protein shakes, granola, eggs, salmon.
Badge format: `★ P {p} · C {c} · F {f} g`

## Food tab
Panini fusion (core identity), croissants, wraps, banh mi, pasta.
Still served hot at 2am.

## Drinks tab
Coffee (ca phe), juices, shakes.

## Extras
`extrasData.ts` — sweet add-ons and salty add-ons shown below main menu grid.

## Notes
- Prices are in USD (display as `$X`)
- The physical renders show a pizza menu board (Marinara, Margherita, Napoletana, Peperoni, Cipolla, Funghi, Con Verdure, Al Prosciutto, Capricciosa) — this is NOT yet in menuData.ts. If pizza is added to the menu, update menuData.ts and the Concept section copy.
- Vietnamese names in `nameVi` fields match the i18n pattern
