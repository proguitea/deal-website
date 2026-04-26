/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        anthracite: '#2B2D2F',
        'anth-dark': '#1E2022',
        'anth-mid': '#303234',
        'anth-light': '#383A3C',
        green: '#1A3C2E',
        jade: '#4F9E6E',
        brass: '#C9A96E',
        'brass-dark': '#A8854A',
        red: '#C0392B',
        offwhite: '#F0EDE8',
        cream: '#F7F4EF',
        'cream-dark': '#EDE9E2',
        ink: '#1A1C1E',
        'ink-mid': '#4A4C4E',
      },
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        logo: '0.3em',
        wide: '0.4em',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};
