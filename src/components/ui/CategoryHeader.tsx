interface Props {
  label: string;
  accent?: 'brass' | 'jade';
  theme?: 'dark' | 'light';
}

export function CategoryHeader({ label, accent = 'brass', theme = 'dark' }: Props) {
  const bg = theme === 'dark' ? '#1E2022' : '#2B2D2F';
  const color = accent === 'jade' ? '#4F9E6E' : '#C9A96E';
  const borderColor = accent === 'jade' ? '#4F9E6E' : '#C9A96E';

  return (
    <div
      className="font-display font-bold uppercase"
      style={{
        background: bg,
        borderLeft: `3px solid ${borderColor}`,
        padding: '8px 16px 8px 14px',
        fontSize: '7.5px',
        letterSpacing: '0.35em',
        minHeight: '32px',
        display: 'flex',
        alignItems: 'center',
        color,
      }}
    >
      {label}
    </div>
  );
}
