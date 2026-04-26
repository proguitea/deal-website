import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Concept } from './components/sections/Concept';
import { Menu } from './components/sections/Menu';
import { Hours } from './components/sections/Hours';
import { Vibe } from './components/sections/Vibe';
import { RealtyHub } from './components/sections/RealtyHub';
import { Contact } from './components/sections/Contact';

function App() {
  const { lang, toggle: toggleLang, t } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Nav
        t={t}
        lang={lang}
        onLangToggle={toggleLang}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <main>
        <Hero t={t} />
        <Concept t={t} />
        <Menu t={t} theme={theme} />
        <Hours t={t} theme={theme} />
        <Vibe t={t} />
        <RealtyHub />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
