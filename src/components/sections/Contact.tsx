import { motion } from 'framer-motion';
import type { Translations } from '../../i18n/en';

interface Props {
  t: Translations;
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

export function Contact({ t }: Props) {
  return (
    <section id="contact" className="py-20 px-6 md:px-10 bg-cream">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35 }}
        >
          <h2
            className="font-display font-bold text-brass-dark mb-8"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', letterSpacing: '0.2em' }}
          >
            {t.contact.title}
          </h2>

          {/* Email */}
          <div className="mb-6">
            <p className="font-mono text-ink/50 mb-1" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
              EMAIL
            </p>
            <a
              href={`mailto:${t.contact.email}`}
              className="font-mono text-brass-dark hover:text-brass transition-colors duration-200"
              style={{ fontSize: '16px' }}
            >
              {t.contact.email}
            </a>
          </div>

          {/* Hiring */}
          <div className="mb-8">
            <p className="font-mono text-ink/50 mb-1" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
              {t.contact.hiringLabel.toUpperCase()}
            </p>
            <a
              href={`mailto:${t.contact.hiring}`}
              className="font-mono text-jade hover:text-jade/80 transition-colors duration-200"
              style={{ fontSize: '15px' }}
            >
              {t.contact.hiring}
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-4 mb-10">
            <a
              href="#"
              aria-label={t.contact.social.instagram}
              className="text-brass-dark hover:text-brass transition-colors duration-200"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label={t.contact.social.facebook}
              className="text-brass-dark hover:text-brass transition-colors duration-200"
            >
              <FacebookIcon />
            </a>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-brass/40 mb-8" />

          {/* Vietnamese recruitment text */}
          <p
            className="font-mono text-ink/60"
            style={{ fontSize: '12px', lineHeight: 1.8 }}
          >
            {t.contact.recruitmentVn}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
