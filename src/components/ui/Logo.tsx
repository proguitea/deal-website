interface Props {
  size?: 'sm' | 'lg';
}

export function Logo({ size = 'sm' }: Props) {
  const iconPx = size === 'sm' ? 30 : 38;
  const titleSize = size === 'sm' ? '1.05rem' : '1.35rem';
  const subtitleSize = size === 'sm' ? '0.44rem' : '0.54rem';

  return (
    <div className="flex items-center gap-3 leading-none">
      {/* D Mark */}
      <svg
        viewBox="0 0 100 100"
        width={iconPx}
        height={iconPx}
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <rect width="100" height="100" rx="14" fill="#1E2022"/>
        {/* D outer + counter cutout (even-odd) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 14 L18 86 L48 86 Q82 86 82 50 Q82 14 48 14 Z M32 26 L48 26 Q70 26 70 50 Q70 74 48 74 L32 74 Z"
          fill="#C9A96E"
        />
        {/* Jade accent — dual-identity divider */}
        <rect x="32" y="46" width="38" height="8" rx="1" fill="#4F9E6E"/>
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col gap-0.5">
        <span
          className="font-display font-black text-brass block"
          style={{ fontSize: titleSize, letterSpacing: '0.3em', lineHeight: 1 }}
        >
          DEAL
        </span>
        <span
          className="font-mono text-jade block"
          style={{ fontSize: subtitleSize, letterSpacing: '0.38em', lineHeight: 1 }}
        >
          REALTY HUB COFFEE
        </span>
      </div>
    </div>
  );
}
