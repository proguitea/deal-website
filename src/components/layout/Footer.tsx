import { Logo } from '../ui/Logo';
import type { Translations } from '../../i18n/en';

interface Props {
  t: Translations;
}

export function Footer({ t }: Props) {
  return (
    <footer className="bg-anth-dark border-t-2 border-brass">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + location */}
        <div className="flex flex-col gap-3">
          <Logo size="lg" />
          <p className="font-mono text-offwhite/50" style={{ fontSize: '11px' }}>
            {t.footer.location}
          </p>
        </div>

        {/* Slogan */}
        <div className="flex items-center justify-center">
          <p
            className="font-mono italic text-brass/40 text-center"
            style={{ fontSize: '12px' }}
          >
            {t.footer.slogan}
          </p>
        </div>

        {/* Hours + email */}
        <div className="flex flex-col gap-2 md:items-end">
          <p className="font-mono text-offwhite/50" style={{ fontSize: '11px' }}>
            {t.footer.hoursShort}
          </p>
          <a
            href="mailto:realty.hub@demonopol.com"
            className="font-mono text-brass/60 hover:text-brass transition-colors duration-200"
            style={{ fontSize: '11px' }}
          >
            realty.hub@demonopol.com
          </a>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/5 px-6 md:px-10 py-3 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <p className="font-mono text-offwhite/25" style={{ fontSize: '10px' }}>
            {t.footer.copy}
          </p>
          <a
            href="http://demonopol.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-brass/30 hover:text-brass/50 transition-colors duration-200"
            style={{ fontSize: '10px', textDecoration: 'none' }}
          >
            Part of the Demonopol ecosystem
          </a>
        </div>
        {/* Subtle Demonopol property line — desktop only, near-invisible */}
        <p
          className="hidden md:block font-mono select-none whitespace-nowrap"
          style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(240,237,232,0.10)' }}
        >
          a demonopol property
        </p>
      </div>
    </footer>
  );
}
