interface Props {
  label: string;
  accent?: 'brass' | 'jade';
}

export function CategoryHeader({ label, accent = 'brass' }: Props) {
  return (
    <div
      className={`bg-anth-dark px-4 py-2 font-display font-bold uppercase ${
        accent === 'jade'
          ? 'border-l-[3px] border-jade text-jade'
          : 'border-l-[3px] border-brass text-brass'
      }`}
      style={{ fontSize: '0.7rem', letterSpacing: '0.3em' }}
    >
      {label}
    </div>
  );
}
