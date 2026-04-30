interface Props {
  label: string;
  variant?: 'hero' | 'pro' | 'baked' | 'spicy' | 'default';
}

const variantStyles: Record<string, string> = {
  hero: 'border-brass text-brass bg-brass/10',
  pro: 'border-jade text-jade bg-jade/10',
  baked: 'border-brass-dark text-brass-dark bg-brass/5',
  spicy: 'border-red text-red bg-red/10',
  default: 'border-offwhite/30 text-offwhite/60 bg-white/5',
};

export function Tag({ label, variant = 'default' }: Props) {
  const styles = variantStyles[variant] ?? variantStyles.default;
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 font-mono font-semibold border ${styles}`}
      style={{ fontSize: '9px', borderRadius: '2px', letterSpacing: '0.06em' }}
    >
      {label}
    </span>
  );
}

export function tagVariantFor(tag?: string): 'hero' | 'pro' | 'baked' | 'spicy' | 'default' {
  if (tag === 'HERO') return 'hero';
  if (tag === '25g PRO' || tag === 'HIGH PRO') return 'pro';
  if (tag === 'BAKED') return 'baked';
  if (tag === 'SPICY') return 'spicy';
  return 'default';
}
