import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TimeModeBadge } from '../ui/TimeModeBadge';
import { Button } from '../ui/Button';
import { useTimeMode } from '../../hooks/useTimeMode';
import type { TimeMode } from '../../hooks/useTimeMode';
import type { Translations } from '../../i18n/en';

interface Props {
  t: Translations;
}

function getVietnamTime() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 7 * 3600000);
}

const modeLabel: Record<TimeMode, { text: string; color: string; pulse: boolean }> = {
  health: { text: 'HEALTH DEAL', color: '#4F9E6E', pulse: false },
  deal:   { text: 'DEAL',        color: '#C9A96E', pulse: false },
  late:   { text: 'LATE NIGHT',  color: '#C0392B', pulse: true  },
  closed: { text: 'OPENS 07:00', color: 'rgba(240,237,232,0.30)', pulse: false },
};

function VietnamClock({ mode }: { mode: TimeMode }) {
  const [time, setTime] = useState(() => getVietnamTime());

  useEffect(() => {
    const id = setInterval(() => setTime(getVietnamTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = String(time.getHours()).padStart(2, '0');
  const mm = String(time.getMinutes()).padStart(2, '0');
  const ss = String(time.getSeconds()).padStart(2, '0');

  const label = modeLabel[mode];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="flex flex-col items-end select-none pointer-events-none"
    >
      <div
        className="font-display font-black text-brass leading-none"
        style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', opacity: 0.07, letterSpacing: '0.05em', lineHeight: 1 }}
        aria-hidden="true"
      >
        {hh}:{mm}
      </div>
      <div className="flex items-baseline gap-3 mt-2">
        <span className="font-mono text-brass/30" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>
          :{ss}
        </span>
        <span className="font-mono text-brass/20" style={{ fontSize: '9px', letterSpacing: '0.3em' }}>
          UTC+7
        </span>
      </div>
      <div className="flex gap-1 mt-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-brass/20" style={{ width: 1, height: i % 3 === 0 ? 12 : 6 }} />
        ))}
      </div>

      {/* Mode label */}
      <motion.div
        key={mode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mt-3"
      >
        {label.pulse ? (
          <motion.span
            className="font-display"
            style={{ fontSize: '9px', letterSpacing: '4px', fontWeight: 500, color: label.color }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            {label.text}
          </motion.span>
        ) : (
          <span
            className="font-display"
            style={{ fontSize: '9px', letterSpacing: '4px', fontWeight: 500, color: label.color }}
          >
            {label.text}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}

const LETTERS = ['D', 'E', 'A', 'L'];

export function Hero({ t }: Props) {
  const mode = useTimeMode();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-anthracite"
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,169,110,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Pulsing ambient glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: '8%', top: '50%',
          width: 600, height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.10) 0%, transparent 65%)',
          transform: 'translateY(-50%)',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Main layout */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between px-8 md:px-16 lg:px-24 pt-20 md:pt-0 gap-12 md:gap-0">
        <div className="flex flex-col">

          {/* Eyebrow — brand anchor */}
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.0, duration: 0.4 }}
            className="font-mono text-brass/25 mb-5 uppercase"
            style={{ fontSize: '9px', letterSpacing: '0.35em' }}
          >
            Est. MMXXVI &nbsp;·&nbsp; Tây Hồ &nbsp;·&nbsp; Hà Nội
          </motion.p>

          {/* DEAL — letter by letter */}
          <div
            className="font-display font-black text-brass flex"
            style={{ fontSize: 'clamp(4rem, 11vw, 9rem)', letterSpacing: '0.25em', lineHeight: 1 }}
          >
            {LETTERS.map((letter, i) => (
              <motion.span
                key={letter}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.09, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  textShadow: '0 0 80px rgba(201,169,110,0.3), 0 0 160px rgba(201,169,110,0.1)',
                  display: 'inline-block',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Draw-in rule */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ delay: 0.52, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-brass/40 mb-2"
            style={{ maxWidth: 'clamp(200px, 40vw, 500px)' }}
          />

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.35 }}
            className="font-mono text-jade mb-8"
            style={{ fontSize: 'clamp(0.45rem, 1.1vw, 0.65rem)', letterSpacing: '0.4em', fontVariant: 'small-caps' }}
          >
            REALTY HUB COFFEE
          </motion.div>

          {/* Slogan */}
          <div className="flex flex-col gap-1.5 mb-5">
            {[t.hero.slogan.line1, t.hero.slogan.line2, t.hero.slogan.line3].map((line, lineIdx) => (
              <motion.p
                key={lineIdx}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75 + lineIdx * 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-offwhite flex items-center gap-1"
                style={{
                  fontSize: lineIdx === 0 ? 'clamp(0.75rem, 1.6vw, 1rem)' : 'clamp(0.9rem, 2vw, 1.3rem)',
                  opacity: lineIdx === 0 ? 0.65 : 1,
                  fontWeight: lineIdx === 0 ? 300 : 400,
                }}
              >
                {line}
                {lineIdx === 2 && (
                  <motion.span
                    className="inline-block w-0.5 bg-brass"
                    style={{ height: '1.1em', marginBottom: '-0.05em' }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.p>
            ))}
          </div>

          {/* Hero subtext */}
          <motion.p
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.35 }}
            className="font-mono text-offwhite/50 mb-8"
            style={{
              fontSize: 'clamp(0.7rem, 1.4vw, 0.85rem)',
              letterSpacing: '0.02em',
              whiteSpace: 'pre-line',
            }}
          >
            {t.hero.subtext}
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.35 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button variant="outlined" accent="brass" as="a" href="#menu">
              {t.hero.cta}
            </Button>
            <TimeModeBadge t={t} />
          </motion.div>
        </div>

        {/* RIGHT — decorative clock (desktop only) */}
        <div className="hidden md:flex flex-col items-end justify-center">
          <VietnamClock mode={mode} />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-px h-8 bg-brass/20" />
          <div className="font-mono text-brass/30 uppercase" style={{ fontSize: '8px', letterSpacing: '0.3em' }}>
            scroll
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
