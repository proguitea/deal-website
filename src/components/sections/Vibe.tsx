import { motion } from 'framer-motion';
import type { Translations } from '../../i18n/en';

interface Props {
  t: Translations;
}

const WORD_CLOUD = [
  { word: 'DEAL', size: 3.2, opacity: 0.85, color: 'text-brass' },
  { word: 'PANINI', size: 1.3, opacity: 0.45, color: 'text-offwhite' },
  { word: 'CA PHE', size: 1.9, opacity: 0.6, color: 'text-brass' },
  { word: 'FUEL', size: 2.1, opacity: 0.75, color: 'text-offwhite' },
  { word: 'ACAI', size: 1.2, opacity: 0.38, color: 'text-jade' },
  { word: 'PROTEIN', size: 1.4, opacity: 0.5, color: 'text-offwhite' },
  { word: 'MATCHA', size: 1.5, opacity: 0.42, color: 'text-jade' },
  { word: 'BOWL', size: 1.65, opacity: 0.55, color: 'text-offwhite' },
  { word: 'OPEN', size: 2.4, opacity: 0.8, color: 'text-brass' },
  { word: 'LATE', size: 2.8, opacity: 0.85, color: 'text-brass' },
  { word: 'TAY HO', size: 1.7, opacity: 0.6, color: 'text-offwhite' },
  { word: 'HANOI', size: 1.9, opacity: 0.7, color: 'text-brass' },
  { word: 'NUOC EP', size: 1.1, opacity: 0.35, color: 'text-jade' },
  { word: 'BANH', size: 1.05, opacity: 0.3, color: 'text-offwhite' },
  { word: 'PHO MAI', size: 1.2, opacity: 0.38, color: 'text-offwhite' },
  { word: 'NANG LUONG', size: 1.15, opacity: 0.4, color: 'text-jade' },
  { word: 'WRAP', size: 1.1, opacity: 0.32, color: 'text-offwhite' },
  { word: 'EGG', size: 1.0, opacity: 0.28, color: 'text-offwhite' },
  { word: 'BAGEL', size: 1.25, opacity: 0.4, color: 'text-offwhite' },
  { word: 'JUICE', size: 1.2, opacity: 0.38, color: 'text-jade' },
];

// Asymmetric gallery: 5 slots, desktop 2fr 1fr 1fr × 240px 240px
const GALLERY = [
  { label: 'Art Wall · Tay Ho', featured: true },
  { label: 'Counter' },
  { label: 'Night Mode' },
  { label: 'Interior' },
  { label: 'Health DEAL' },
];

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.1 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 10 },
  visible: (o: number) => ({
    opacity: o,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Vibe({ t: _t }: Props) {
  return (
    <section id="vibe" className="bg-anthracite">

      {/* ── MANIFESTO BLOCK ───────────────────────────── */}
      <div className="border-b border-brass/15">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-[3px] h-6 bg-brass" />
            <span
              className="font-display font-bold text-brass uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.35em' }}
            >
              Built different.
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <p
                className="font-display font-bold text-offwhite leading-tight mb-8"
                style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)', letterSpacing: '0.03em' }}
              >
                Quiet in the morning.<br />Loud after midnight.
              </p>
              <p className="font-mono text-offwhite/45 mb-6" style={{ fontSize: '13px', lineHeight: 1.9 }}>
                Anthracite walls. Brass details. Warm light after dark.<br />
                Wabi-Sabi meets industrial precision.<br />
                A space worth coming back to.
              </p>
              <p className="font-mono text-offwhite/25" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>
                28/52 Tô Ngọc Vân · Tây Hồ · Hà Nội
              </p>
            </motion.blockquote>

            {/* Right — hours */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="flex flex-col justify-end gap-8"
            >
              <div className="flex flex-col gap-5">
                {[
                  { label: 'Mon – Thu', value: '07:00 — 02:00' },
                  { label: 'Fri – Sat',  value: '07:00 — 05:00' },
                  { label: 'Sunday',     value: '07:00 — 02:00' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-baseline border-b border-white/6 pb-4">
                    <span className="font-mono text-offwhite/35" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>
                      {label}
                    </span>
                    <span
                      className={`font-mono ${value === 'Closed' ? 'text-offwhite/20' : 'text-offwhite/70'}`}
                      style={{ fontSize: '12px' }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-offwhite/20" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
                Tây Hồ's only kitchen open until 5am on weekends.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── GALLERY GRID ─────────────────────────────── */}
      <div className="border-b border-brass/15">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="vibe-gallery"
          >
            {GALLERY.map((slot, i) => (
              <motion.div
                key={slot.label}
                variants={gridItem}
                className={`relative group vibe-gallery-slot${slot.featured ? ' vibe-gallery-featured' : ''}`}
              >
                <div
                  className="relative w-full h-full group-hover:border-brass/60 transition-colors duration-200"
                  style={{
                    background: '#1E2022',
                    border: '1px dashed rgba(201,169,110,0.20)',
                    borderRadius: '1px',
                  }}
                >
                  {/* Placeholder label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-display text-brass/35"
                      style={{ fontSize: '7px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
                      aria-hidden="true"
                    >
                      {slot.label}
                    </span>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-4 h-px bg-brass/40" />
                  <div className="absolute top-0 left-0 h-4 w-px bg-brass/40" />

                  {/* Index */}
                  <div className="absolute bottom-2 right-3">
                    <span className="font-mono text-brass/20" style={{ fontSize: '8px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── ART WALL / WORD CLOUD ────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-10"
        >
          <span
            className="font-mono text-offwhite/20 uppercase"
            style={{ fontSize: '9px', letterSpacing: '0.35em' }}
          >
            Art Wall · Tay Ho
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </motion.div>

        <motion.div
          variants={wordContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="word-cloud-wrap flex flex-wrap gap-x-5 gap-y-1 items-baseline"
        >
          {WORD_CLOUD.map(({ word, size, opacity, color }) => (
            <motion.span
              key={word}
              custom={opacity}
              variants={wordItem}
              className={`font-display font-black ${color} wc-word`}
              style={{
                '--wc-size': `${size}rem`,
                fontSize: `${size}rem`,
                letterSpacing: '0.04em',
                lineHeight: 1.15,
              } as React.CSSProperties}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
