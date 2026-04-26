interface Props {
  p: number;
  c: number;
  f: number;
}

export function MacroBadge({ p, c, f }: Props) {
  return (
    <span
      className="font-mono font-semibold"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px 8px',
        fontSize: '9px',
        whiteSpace: 'nowrap',
        background: 'rgba(79,158,110,0.12)',
        border: '0.5px solid rgba(79,158,110,0.35)',
        color: '#4F9E6E',
        borderRadius: '2px',
        marginTop: '4px',
      }}
    >
      ★ P {p} · C {c} · F {f} g
    </span>
  );
}
