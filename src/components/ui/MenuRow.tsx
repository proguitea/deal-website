import type { MenuItem } from '../../data/menuData';
import { MacroBadge } from './MacroBadge';
import { Tag, tagVariantFor } from './Tag';

interface Props {
  item: MenuItem;
  mode?: 'dark' | 'light';
  alt?: boolean;
}

export function MenuRow({ item, mode = 'dark', alt = false }: Props) {
  const rowBg =
    mode === 'dark'
      ? alt
        ? 'bg-anth-light'
        : 'bg-anthracite'
      : alt
      ? 'bg-cream-dark'
      : 'bg-cream';

  const nameColor = mode === 'dark' ? 'text-offwhite' : 'text-ink';
  const descColor = mode === 'dark' ? 'text-offwhite/55' : 'text-ink/55';
  const vnColor = mode === 'dark' ? 'text-offwhite/40' : 'text-ink/40';

  return (
    <div className={`group flex items-center gap-3 px-4 py-3 border-b border-white/5 border-l-2 border-l-transparent hover:border-l-brass/60 transition-all duration-150 ${rowBg}`}>
      {/* Image slot */}
      <div
        className="flex-shrink-0 flex items-center justify-center border border-dashed border-white/20 text-white/20 font-mono"
        style={{ width: 64, height: 64, fontSize: '9px', borderRadius: '2px' }}
      >
        IMG
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`font-mono font-semibold ${nameColor}`} style={{ fontSize: '14px' }}>
            {item.name}
          </span>
          {item.tag && <Tag label={item.tag} variant={tagVariantFor(item.tag)} />}
        </div>
        <div className={`font-mono font-light truncate ${vnColor}`} style={{ fontSize: '11px' }}>
          {item.nameVn}
        </div>
        <div className={`font-mono font-light truncate ${descColor}`} style={{ fontSize: '11px' }}>
          {item.description}
        </div>
        {item.macro && (
          <div className="mt-1">
            <MacroBadge p={item.macro.p} c={item.macro.c} f={item.macro.f} />
          </div>
        )}
      </div>

      {/* Flag + Price */}
      <div className="flex-shrink-0 flex flex-col items-end gap-1">
        <span style={{ fontSize: '12px', opacity: 0.7 }}>{item.flag}</span>
        <span className="font-display font-bold text-brass" style={{ fontSize: '12px' }}>
          {item.price}
        </span>
      </div>
    </div>
  );
}
