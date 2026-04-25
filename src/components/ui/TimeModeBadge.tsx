import { useTimeMode } from '../../hooks/useTimeMode';
import type { Translations } from '../../i18n/en';

interface Props {
  t: Translations;
}

const modeConfig = {
  health: { label: (t: Translations) => t.status.health, color: 'bg-jade/15 border-jade text-jade', dot: 'bg-jade' },
  deal: { label: (t: Translations) => t.status.deal, color: 'bg-brass/15 border-brass text-brass', dot: 'bg-brass' },
  late: { label: (t: Translations) => t.status.late, color: 'bg-red/15 border-red text-red', dot: 'bg-red' },
  closed: {
    label: (t: Translations) => t.status.closed,
    color: 'bg-white/5 border-white/20 text-offwhite/40',
    dot: 'bg-white/30',
  },
};

export function TimeModeBadge({ t }: Props) {
  const mode = useTimeMode();
  const config = modeConfig[mode];

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 border font-mono font-semibold ${config.color}`}
      style={{ fontSize: '12px', letterSpacing: '0.05em', borderRadius: '2px' }}
    >
      <span
        className={`inline-block w-1.5 h-1.5 rounded-full ${config.dot} ${
          mode !== 'closed' ? 'animate-pulse' : ''
        }`}
      />
      {config.label(t)}
    </div>
  );
}
