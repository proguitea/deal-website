import { useState, useEffect } from 'react';

export type TimeMode = 'health' | 'deal' | 'late' | 'closed';

function getVietnamTime(): Date {
  const now = new Date();
  // UTC+7
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 7 * 3600000);
}

function computeMode(vn: Date): TimeMode {
  const h = vn.getHours();
  const m = vn.getMinutes();
  const mins = h * 60 + m;
  const day = vn.getDay(); // 0=Sun, 5=Fri, 6=Sat
  const isWeekend = day === 5 || day === 6;

  // 07:00–13:00 → Health DEAL
  if (mins >= 7 * 60 && mins < 13 * 60) return 'health';
  // 13:00–02:00 next day → DEAL open (spans midnight)
  if (mins >= 13 * 60 || mins < 2 * 60) return 'deal';
  // 02:00–05:00 Fri/Sat → late night
  if (mins >= 2 * 60 && mins < 5 * 60 && isWeekend) return 'late';
  // Everything else → closed
  return 'closed';
}

export function useTimeMode(): TimeMode {
  const [mode, setMode] = useState<TimeMode>(() => computeMode(getVietnamTime()));

  useEffect(() => {
    const interval = setInterval(() => {
      setMode(computeMode(getVietnamTime()));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return mode;
}
