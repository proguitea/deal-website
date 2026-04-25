import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import './styles/globals.css';
import App from './App.tsx';

const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion={prefersReducedMotion ? 'always' : 'never'}>
      <App />
    </MotionConfig>
  </StrictMode>
);
