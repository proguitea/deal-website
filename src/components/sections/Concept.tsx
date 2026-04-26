import { motion } from 'framer-motion';
import type { Translations } from '../../i18n/en';

interface Props {
  t: Translations;
}

function SunriseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="20" r="6" stroke="#4F9E6E" strokeWidth="1.5" />
      <line x1="16" y1="4" x2="16" y2="8" stroke="#4F9E6E" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="4" y1="16" x2="8" y2="16" stroke="#4F9E6E" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="24" y1="16" x2="28" y2="16" stroke="#4F9E6E" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="7.5" y1="7.5" x2="10.3" y2="10.3" stroke="#4F9E6E" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="21.7" y1="10.3" x2="24.5" y2="7.5" stroke="#4F9E6E" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="4" y1="28" x2="28" y2="28" stroke="#4F9E6E" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 8C16.686 8 14 10.686 14 14C14 17.314 16.686 20 20 20C20.96 20 21.86 19.77 22.66 19.37C21.46 22.1 18.72 24 15.54 24C11.22 24 7.72 20.5 7.72 16.18C7.72 11.86 11.22 8.36 15.54 8.36C17.1 8.36 18.56 8.82 19.78 9.62C19.85 9.08 20 8.54 20 8Z"
        stroke="#C9A96E"
        strokeWidth="1.5"
        strokeLinejoin="miter"
      />
      <line x1="24" y1="6" x2="24" y2="10" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="26" y1="8" x2="22" y2="8" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.0, 0.0, 0.2, 1] as const } },
};

export function Concept({ t }: Props) {
  return (
    <section id="concept" className="bg-anth-dark py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.3 }}
          className="mb-10 text-center"
        >
          <p
            className="font-mono italic text-offwhite/50"
            style={{ fontSize: '13px' }}
          >
            {t.concept.divider}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0">
          {/* Health DEAL card */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-8 border border-jade/15 bg-green/10 cursor-default md:min-h-[220px]"
            style={{ borderRadius: '2px' }}
          >
            <div className="mb-4">
              <SunriseIcon />
            </div>
            <h2
              className="font-display font-bold text-jade mb-1"
              style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', letterSpacing: '0.1em' }}
            >
              {t.concept.health.title}
            </h2>
            <p className="font-mono text-jade/60 mb-4" style={{ fontSize: '12px' }}>
              {t.concept.health.hours}
            </p>
            <p
              className="font-mono text-offwhite/70 mb-4"
              style={{ fontSize: '13px', lineHeight: 1.7, whiteSpace: 'pre-line' }}
            >
              {t.concept.health.copy}
            </p>
            <span
              className="font-mono font-semibold"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '2px 8px',
                fontSize: '9px',
                background: 'rgba(79,158,110,0.12)',
                border: '0.5px solid rgba(79,158,110,0.35)',
                color: '#4F9E6E',
                borderRadius: '2px',
              }}
            >
              {t.concept.health.badge}
            </span>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden md:block self-stretch bg-brass/20 mx-6" />

          {/* DEAL Late card */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            transition={{ delay: 0.1 }}
            className="p-8 border border-brass/15 bg-brass/5 cursor-default md:min-h-[220px]"
            style={{ borderRadius: '2px' }}
          >
            <div className="mb-4">
              <MoonIcon />
            </div>
            <h2
              className="font-display font-bold text-brass mb-1"
              style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', letterSpacing: '0.1em' }}
            >
              {t.concept.late.title}
            </h2>
            <p className="font-mono text-brass/60 mb-4" style={{ fontSize: '12px' }}>
              {t.concept.late.hours}
            </p>
            <p
              className="font-mono text-offwhite/70 mb-6"
              style={{ fontSize: '13px', lineHeight: 1.7, whiteSpace: 'pre-line' }}
            >
              {t.concept.late.copy}
            </p>
            <span
              className="inline-flex items-center px-3 py-1.5 font-mono font-semibold text-brass border border-brass/30 bg-brass/10"
              style={{ fontSize: '11px', borderRadius: '2px' }}
            >
              {t.concept.late.tag}
            </span>
          </motion.div>
        </div>

        {/* Micro-hint — discovery line, not a nav target */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono italic text-brass text-center mt-10"
          style={{ fontSize: '11px', opacity: 0.5, letterSpacing: '2px' }}
        >
          A café is just the beginning.
        </motion.p>
      </div>
    </section>
  );
}
