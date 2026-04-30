// Build PNG renders of brand SVGs at common marketing sizes.
// Run: npm run brand:build
//
// At render time, finds every <text> element in each SVG and converts the
// glyphs to <path> data using opentype.js + the bundled Orbitron 900 / IBM
// Plex Mono 400 fonts. This guarantees PNG output matches the brand fonts
// exactly, regardless of which fonts are installed on the rendering machine.
//
// The on-disk SVGs stay text-based (designer-friendly: editable in Figma /
// Illustrator with Orbitron installed). Only the PNG render pipeline does
// the path conversion, in memory.
//
// Outputs into brand/png/ — drop into Canva, Instagram, presentations, etc.

import { readFile, mkdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import opentype from 'opentype.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const brandDir = join(root, 'brand');
const fontsDir = join(brandDir, '.fonts');
const outDir = join(brandDir, 'png');

const renders = [
  // D-mark (square 1:1) — no text, font conversion is a no-op
  { svg: 'd-mark-dark.svg',         sizes: [256, 512, 1024, 2048] },
  { svg: 'd-mark-light.svg',        sizes: [256, 512, 1024, 2048] },
  { svg: 'd-mark-transparent.svg',  sizes: [256, 512, 1024, 2048] },

  // Horizontal wordmark (4.5:1)
  { svg: 'wordmark-horizontal-dark.svg',  sizes: [720, 1440, 2880] },
  { svg: 'wordmark-horizontal-light.svg', sizes: [720, 1440, 2880] },

  // Stacked wordmark (~6:7) — for Instagram square / profile pics
  { svg: 'wordmark-stacked-dark.svg', sizes: [480, 1080, 2160] },

  // OG image (1.91:1) — link previews. Render only at native resolution.
  { svg: 'og-image-1200x630.svg', sizes: [1200] },
];

// Decide which font to use for a given font-family attribute string.
function resolveFont(fontFamily, fonts) {
  if (!fontFamily) return fonts.orbitron;
  const lower = fontFamily.toLowerCase();
  if (lower.includes('plex')) return fonts.plexMono;
  if (lower.includes('mono') && !lower.includes('orbitron')) return fonts.plexMono;
  return fonts.orbitron;
}

// Strip outer quotes from XML attribute values returned by the regex.
function attr(re, str) {
  const m = str.match(re);
  return m ? m[1] : null;
}

// Find every <text>...</text> element in the SVG and replace with a <g>
// containing per-character <path> nodes built from the embedded font.
function convertTextToPaths(svgString, fonts) {
  return svgString.replace(/<text\b([^>]*)>([\s\S]*?)<\/text>/g, (_match, attrs, inner) => {
    const x = parseFloat(attr(/\bx="([^"]+)"/, attrs) || '0');
    const y = parseFloat(attr(/\by="([^"]+)"/, attrs) || '0');
    const fontFamily = attr(/\bfont-family="([^"]+)"/, attrs);
    const fontSize = parseFloat(attr(/\bfont-size="([^"]+)"/, attrs) || '16');
    const letterSpacing = parseFloat(attr(/\bletter-spacing="([^"]+)"/, attrs) || '0');
    const fill = attr(/\bfill="([^"]+)"/, attrs) || '#000000';
    const opacity = attr(/\bopacity="([^"]+)"/, attrs);
    const textAnchor = attr(/\btext-anchor="([^"]+)"/, attrs);
    const text = inner.trim();

    const font = resolveFont(fontFamily, fonts);

    // Compute total advance with letter-spacing applied between glyphs.
    let totalWidth = 0;
    const glyphs = font.stringToGlyphs(text);
    glyphs.forEach((g, i) => {
      totalWidth += (g.advanceWidth / font.unitsPerEm) * fontSize;
      if (i < glyphs.length - 1) totalWidth += letterSpacing;
    });

    let xOffset = 0;
    if (textAnchor === 'middle') xOffset = -totalWidth / 2;
    else if (textAnchor === 'end') xOffset = -totalWidth;

    // Build per-glyph paths positioned with explicit transforms.
    let cursor = x + xOffset;
    const paths = glyphs.map((glyph) => {
      const path = glyph.getPath(cursor, y, fontSize);
      const d = path.toPathData(3);
      cursor += (glyph.advanceWidth / font.unitsPerEm) * fontSize + letterSpacing;
      return `<path d="${d}" fill="${fill}"${opacity ? ` opacity="${opacity}"` : ''}/>`;
    });

    return `<g>${paths.join('')}</g>`;
  });
}

async function loadFonts() {
  const orbitronBuf = await readFile(join(fontsDir, 'Orbitron-900.ttf'));
  const plexMonoBuf = await readFile(join(fontsDir, 'IBMPlexMono-400.ttf'));
  return {
    orbitron: opentype.parse(orbitronBuf.buffer.slice(orbitronBuf.byteOffset, orbitronBuf.byteOffset + orbitronBuf.byteLength)),
    plexMono: opentype.parse(plexMonoBuf.buffer.slice(plexMonoBuf.byteOffset, plexMonoBuf.byteOffset + plexMonoBuf.byteLength)),
  };
}

async function ensureOutDir() {
  await mkdir(outDir, { recursive: true });
}

async function renderOne(entry, fonts) {
  const svgPath = join(brandDir, entry.svg);
  const rawSvg = await readFile(svgPath, 'utf8');
  const pathSvg = convertTextToPaths(rawSvg, fonts);
  const buf = Buffer.from(pathSvg, 'utf8');
  const baseName = entry.svg.replace(/\.svg$/, '');

  for (const width of entry.sizes) {
    const out = join(outDir, `${baseName}-${width}.png`);
    await sharp(buf, { density: 288 })
      .resize({ width })
      .png({ compressionLevel: 9 })
      .toFile(out);
    const { size } = await stat(out);
    console.log(`  ${baseName}-${width}.png  ${(size / 1024).toFixed(1)} KB`);
  }
}

async function main() {
  await ensureOutDir();
  console.log(`Rendering brand PNGs → ${outDir}`);
  console.log(`Converting text → paths via opentype.js (Orbitron 900 + IBM Plex Mono 400)\n`);
  const fonts = await loadFonts();
  for (const entry of renders) {
    console.log(entry.svg);
    await renderOne(entry, fonts);
    console.log('');
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
