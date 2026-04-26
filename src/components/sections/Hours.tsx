import { motion } from 'framer-motion';
import { useTimeMode } from '../../hooks/useTimeMode';
import type { Translations } from '../../i18n/en';

interface Props {
  t: Translations;
  theme: 'dark' | 'light';
}

export function Hours({ t, theme }: Props) {
  const mode = useTimeMode();
  const isOpen = mode !== 'closed';

  const bg = theme === 'dark' ? 'bg-anth-dark' : 'bg-cream-dark';
  const textPrimary = theme === 'dark' ? 'text-offwhite' : 'text-ink';
  const textMuted = theme === 'dark' ? 'text-offwhite/50' : 'text-ink/50';
  const rowEven = theme === 'dark' ? 'bg-anthracite' : 'bg-cream';
  const rowOdd = theme === 'dark' ? 'bg-anth-light' : 'bg-cream';
  const border = theme === 'dark' ? 'border-white/10' : 'border-ink/10';

  const rows = [
    { label: t.hours.table.monThu, value: t.hours.table.monThuVal },
    { label: t.hours.table.friSat, value: t.hours.table.friSatVal },
    { label: t.hours.table.sun, value: t.hours.table.sunVal },
  ];

  return (
    <section id="hours" className={`py-20 px-6 md:px-10 ${bg}`}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35 }}
          className="font-display font-bold text-brass mb-10"
          style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', letterSpacing: '0.2em' }}
        >
          {t.hours.title.toUpperCase()}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Hours table */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35 }}
          >
            {/* Blurb */}
            <p
              className="font-mono italic mb-6"
              style={{ fontSize: '12px', color: theme === 'dark' ? 'rgba(240,237,232,0.55)' : 'rgba(26,28,30,0.55)' }}
            >
              We close when Tay Ho goes to sleep.<br />
              That's rarely before 2am.
            </p>

            {/* Live indicator */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  isOpen ? 'bg-jade animate-pulse' : 'bg-white/20'
                }`}
              />
              <span
                className={`font-mono font-semibold ${isOpen ? 'text-jade' : textMuted}`}
                style={{ fontSize: '12px' }}
              >
                {isOpen ? t.hours.openNow : t.hours.closed}
              </span>
            </div>

            <div className={`border ${border}`} style={{ borderRadius: '2px' }}>
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex justify-between items-center px-5 py-4 border-b last:border-b-0 ${border} ${
                    i % 2 === 0 ? rowEven : rowOdd
                  }`}
                >
                  <span
                    className={`font-mono ${row.dim ? textMuted : textPrimary}`}
                    style={{ fontSize: '13px' }}
                  >
                    {row.label}
                  </span>
                  <span
                    className={`font-mono font-semibold ${row.dim ? textMuted : 'text-brass'}`}
                    style={{ fontSize: '13px' }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Map + contact */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            {/* Map placeholder (lazy iframe) */}
            <div
              className={`w-full mb-4 border ${border} flex items-center justify-center bg-anth-dark`}
              style={{ height: 220, borderRadius: '2px' }}
            >
              <iframe
                title={t.hours.mapAlt}
                loading="lazy"
                src="https://maps.google.com/maps?q=21.0695736,105.8240532&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.8) invert(0.85) hue-rotate(180deg)', borderRadius: '2px' }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className={`font-mono ${textMuted}`} style={{ fontSize: '12px' }}>
                📍 {t.hours.address}
              </p>
              <a
                href={`mailto:${t.hours.email}`}
                className="font-mono text-brass/70 hover:text-brass transition-colors duration-200"
                style={{ fontSize: '12px' }}
              >
                {t.hours.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
