import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'solid' | 'ghost';
  accent?: 'brass' | 'jade';
  as?: 'button' | 'a';
  href?: string;
}

export function Button({ variant = 'outlined', accent = 'brass', children, className = '', as: Tag = 'button', href, ...rest }: Props) {
  const base = 'inline-flex items-center justify-center font-mono font-semibold transition-colors duration-200 px-5 py-2.5';
  const styles = {
    outlined: accent === 'brass'
      ? 'border border-brass text-brass hover:bg-brass hover:text-anth-dark'
      : 'border border-jade text-jade hover:bg-jade hover:text-anth-dark',
    solid: accent === 'brass'
      ? 'bg-brass text-anth-dark hover:bg-brass-dark'
      : 'bg-jade text-anth-dark hover:bg-jade/80',
    ghost: 'text-brass/70 hover:text-brass',
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (Tag === 'a') {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} style={{ borderRadius: '2px', fontSize: '13px' }} {...rest}>
      {children}
    </button>
  );
}
