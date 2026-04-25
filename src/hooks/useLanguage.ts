import { useState, useCallback } from 'react';
import en from '../i18n/en';
import vi from '../i18n/vi';
import type { Translations } from '../i18n/en';

export type Lang = 'en' | 'vi';

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('deal-lang') as Lang) || 'en';
  });

  const toggle = useCallback(() => {
    setLang(prev => {
      const next = prev === 'en' ? 'vi' : 'en';
      localStorage.setItem('deal-lang', next);
      return next;
    });
  }, []);

  const t: Translations = lang === 'vi' ? vi : en;

  return { lang, toggle, t };
}
