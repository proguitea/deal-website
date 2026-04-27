import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useScrollY } from '../../hooks/useScrollProgress';
import { Logo } from '../ui/Logo';
import type { Translations } from '../../i18n/en';
import type { Lang } from '../../hooks/useLanguage';
import type { Theme } from '../../hooks/useTheme';

interface Props {
  t: Translations;
  lang: Lang; // kept for potential active indicator
  onLangToggle: () => void;
  theme: Theme;
  onThemeToggle: () => void;
}

const navLinks = [
  { key: 'concept' as const, href: '#concept' },
  { key: 'menu' as const, href: '#menu' },
  { key: 'hours' as const, href: '#hours' },
  { key: 'vibe' as const, href: '#vibe' },
  { key: 'contact' as const, href: '#contact' },
];

export function Nav({ t, lang: _lang, onLangToggle, theme, onThemeToggle }: Props) {
  const scrollY = useScrollY();
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 40;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-px bg-brass origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 bg-anth-dark transition-all duration-200 ${
          scrolled ? 'border-b border-brass/40' : 'border-b border-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#" aria-label="DEAL Realty Hub Coffee — home">
          <Logo size="sm" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              className="font-mono text-offwhite/70 hover:text-brass transition-colors duration-200 relative group"
              style={{ fontSize: '12px', letterSpacing: '0.05em' }}
            >
              {t.nav[link.key]}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-brass transition-all duration-200 group-hover:w-full" />
            </a>
          ))}

          <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-4">
            <button
              onClick={onLangToggle}
              aria-label="Toggle language"
              className="font-mono text-offwhite/50 hover:text-brass transition-colors duration-200"
              style={{ fontSize: '11px', letterSpacing: '0.1em' }}
            >
              {t.nav.lang}
            </button>
            <button
              onClick={onThemeToggle}
              className="font-mono text-offwhite/50 hover:text-brass transition-colors duration-200"
              style={{ fontSize: '11px' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '◐' : '●'}
            </button>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-brass transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-brass transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-brass transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-anth-dark flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.key}
                href={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setOpen(false)}
                className="font-mono text-offwhite/80 hover:text-brass transition-colors duration-200"
                style={{ fontSize: '20px', letterSpacing: '0.1em' }}
              >
                {t.nav[link.key]}
              </motion.a>
            ))}
            <div className="flex items-center gap-6 mt-4 border-t border-white/10 pt-6">
              <button
                onClick={() => { onLangToggle(); setOpen(false); }}
                className="font-mono text-offwhite/50 hover:text-brass transition-colors"
                style={{ fontSize: '13px' }}
              >
                {t.nav.lang}
              </button>
              <button
                onClick={() => { onThemeToggle(); setOpen(false); }}
                className="font-mono text-offwhite/50 hover:text-brass transition-colors"
                style={{ fontSize: '13px' }}
              >
                {theme === 'dark' ? t.nav.theme.light : t.nav.theme.dark}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
