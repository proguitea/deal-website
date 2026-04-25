interface Props {
  p: number;
  c: number;
  f: number;
}

export function MacroBadge({ p, c, f }: Props) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 font-mono font-semibold text-jade border border-jade/30 bg-jade/10"
      style={{ fontSize: '10px', borderRadius: '2px' }}
    >
      ★ P {p} · C {c} · F {f} g
    </span>
  );
}
