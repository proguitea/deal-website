import type { MenuItem } from '../../data/menuData';
import { MacroBadge } from './MacroBadge';
import { Tag, tagVariantFor } from './Tag';

function itemEmoji(id: string): string {
  if (/acai|poke|bowl|salad|caesar/.test(id)) return '🥗';
  if (/shake|smoothie/.test(id)) return '🥤';
  if (/coffee|espresso|latte|ca-phe/.test(id)) return '☕';
  if (/oat|granola|yogurt|parfait|chia|pudding/.test(id)) return '🫙';
  if (/egg/.test(id)) return '🥚';
  if (/brownie|muffin|cake|baked/.test(id)) return '🍰';
  if (/croissant/.test(id)) return '🥐';
  if (/panini|sandwich|toast/.test(id)) return '🥪';
  if (/wrap/.test(id)) return '🌯';
  if (/pasta|spaghetti/.test(id)) return '🍝';
  if (/pizza/.test(id)) return '🍕';
  if (/juice|ep/.test(id)) return '🍹';
  if (/salmon|tuna|fish/.test(id)) return '🐟';
  if (/chicken/.test(id)) return '🍗';
  return '🍽';
}

interface Props {
  item: MenuItem;
  mode?: 'dark' | 'light';
  alt?: boolean;
}

export function MenuRow({ item, mode = 'dark', alt = false }: Props) {
  const isDark = mode === 'dark';

  // Alternating rows: dark odd=#2B2D2F, even=#303234; light odd=#F7F4EF, even=#EDE9E2
  const rowBg = isDark
    ? alt ? '#303234' : '#2B2D2F'
    : alt ? '#EDE9E2' : '#F7F4EF';

  // Image slot: slightly darker than row bg
  const imgBg = isDark ? '#1A1C1E' : '#D6D2CA';

  const borderRowColor = isDark
    ? 'rgba(240,237,232,0.08)'
    : 'rgba(26,28,30,0.08)';

  const imgDashColor = isDark
    ? 'rgba(201,169,110,0.20)'
    : 'rgba(26,28,30,0.15)';

  const textColor = isDark ? '#F0EDE8' : '#1A1C1E';

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'var(--menu-img-slot, 72px) 1fr auto',
        minHeight: '72px',
        borderBottom: `0.5px solid ${borderRowColor}`,
        background: rowBg,
      }}
    >
      {/* Left cell — image slot */}
      <div
        style={{
          background: imgBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          minHeight: '72px',
        }}
        aria-hidden="true"
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <span style={{ fontSize: '22px', opacity: 0.55, lineHeight: 1 }}>
            {itemEmoji(item.id)}
          </span>
        )}
      </div>

      {/* Center cell — info */}
      <div style={{ padding: '10px 12px', minWidth: 0 }}>
        <div className="flex items-center gap-1 flex-wrap">
          <span
            className="font-mono font-semibold"
            style={{ fontSize: 'var(--menu-name-size, 13px)', color: textColor }}
          >
            {item.name}
          </span>
          {item.tag && <Tag label={item.tag} variant={tagVariantFor(item.tag)} />}
        </div>
        <div
          className="font-mono font-light truncate"
          style={{
            fontSize: 'var(--menu-sub-size, 10px)',
            color: textColor,
            opacity: 0.32,
          }}
        >
          {item.nameVn}
        </div>
        <div
          className="font-mono font-light truncate"
          style={{
            fontSize: 'var(--menu-sub-size, 10px)',
            color: textColor,
            opacity: 0.45,
          }}
        >
          {item.description}
        </div>
        {item.macro && (
          <MacroBadge p={item.macro.p} c={item.macro.c} f={item.macro.f} />
        )}
      </div>

      {/* Right cell — flag + price */}
      <div
        style={{
          padding: '10px 12px 10px 8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: '11px', opacity: 0.65, marginBottom: '4px' }}>
          {item.flag}
        </span>
        <span
          className="font-display font-bold"
          style={{ fontSize: '12px', color: '#C9A96E' }}
        >
          {item.price}
        </span>
      </div>
    </div>
  );
}
