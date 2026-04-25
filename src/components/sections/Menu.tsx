import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryHeader } from '../ui/CategoryHeader';
import { MenuRow } from '../ui/MenuRow';
import menuData from '../../data/menuData';
import extrasData from '../../data/extrasData';
import type { Translations } from '../../i18n/en';

interface Props {
  t: Translations;
  theme: 'dark' | 'light';
}

type TabId = 'health' | 'food' | 'drinks';

function ExtrasGrid({ t, theme }: { t: Translations; theme: 'dark' | 'light' }) {
  const textColor = theme === 'dark' ? 'text-offwhite/70' : 'text-ink/70';
  const bg = theme === 'dark' ? 'bg-anth-dark' : 'bg-cream-dark';

  return (
    <div className={`mt-1 border-t border-white/10 ${bg}`}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Sweet */}
        <div className="border-r border-white/5">
          <div
            className="px-4 py-2 font-display font-bold text-brass border-l-[3px] border-brass bg-anth-dark"
            style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}
          >
            {t.menu.extras.sweet}
          </div>
          <div className="grid grid-cols-2 gap-px">
            {extrasData.sweet.map((item, i) => (
              <div
                key={item.id}
                className={`flex justify-between items-center px-3 py-2 ${i % 2 === 0 ? (theme === 'dark' ? 'bg-anthracite' : 'bg-cream') : (theme === 'dark' ? 'bg-anth-light' : 'bg-cream-dark')}`}
              >
                <span className={`font-mono ${textColor}`} style={{ fontSize: '11px' }}>
                  {item.name}
                </span>
                <span className={`font-display font-bold text-brass`} style={{ fontSize: '11px' }}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Salty */}
        <div>
          <div
            className="px-4 py-2 font-display font-bold text-jade border-l-[3px] border-jade bg-anth-dark"
            style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}
          >
            {t.menu.extras.salty}
          </div>
          <div className="grid grid-cols-2 gap-px">
            {extrasData.salty.map((item, i) => (
              <div
                key={item.id}
                className={`flex justify-between items-center px-3 py-2 ${i % 2 === 0 ? (theme === 'dark' ? 'bg-anthracite' : 'bg-cream') : (theme === 'dark' ? 'bg-anth-light' : 'bg-cream-dark')}`}
              >
                <span className={`font-mono ${textColor}`} style={{ fontSize: '11px' }}>
                  {item.name}
                </span>
                <span className={`font-display font-bold text-jade`} style={{ fontSize: '11px' }}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DrinksGrid({ section, theme }: { section: typeof menuData[2]; theme: 'dark' | 'light' }) {
  return (
    <div>
      {section.categories.map(cat => (
        <div key={cat.id}>
          <CategoryHeader label={cat.label} accent="brass" />
          <div className="grid grid-cols-1 md:grid-cols-2">
            {cat.items.map((item, idx) => (
              <MenuRow key={item.id} item={item} mode={theme} alt={idx % 2 !== 0} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Menu({ t, theme }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>('health');

  const tabs: { id: TabId; label: string }[] = [
    { id: 'health', label: t.menu.tabs.health },
    { id: 'food', label: t.menu.tabs.food },
    { id: 'drinks', label: t.menu.tabs.drinks },
  ];

  const section = menuData.find(s => s.id === activeTab)!;

  return (
    <section id="menu" className={`py-16 ${theme === 'dark' ? 'bg-anthracite' : 'bg-cream'}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35 }}
          className="font-display font-bold text-brass mb-8"
          style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', letterSpacing: '0.2em' }}
        >
          MENU
        </motion.h2>
      </div>

      {/* Tab bar */}
      <div className={`border-b ${theme === 'dark' ? 'border-white/10 bg-anth-dark' : 'border-ink/10 bg-cream-dark'}`}>
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="flex gap-0">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative font-mono px-5 py-3 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-brass'
                    : theme === 'dark'
                    ? 'text-offwhite/50 hover:text-offwhite/80'
                    : 'text-ink/50 hover:text-ink/80'
                }`}
                style={{ fontSize: '12px', letterSpacing: '0.05em' }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brass"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'drinks' ? (
              <DrinksGrid section={section} theme={theme} />
            ) : (
              section.categories.map(cat => (
                <div key={cat.id}>
                  <CategoryHeader
                    label={cat.label}
                    accent={activeTab === 'health' ? 'jade' : 'brass'}
                  />
                  {cat.items.map((item, idx) => (
                    <MenuRow key={item.id} item={item} mode={theme} alt={idx % 2 !== 0} />
                  ))}
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Extras */}
        <ExtrasGrid t={t} theme={theme} />
      </div>
    </section>
  );
}
