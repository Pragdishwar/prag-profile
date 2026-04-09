'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { stats, translations, type Lang } from '@/lib/data';

interface StatsPanelProps { lang: Lang; }

export default function StatsPanel({ lang }: StatsPanelProps) {
  const t = translations[lang];

  return (
    <div className="bento-card p-5">
      <div className="section-label mb-4">{t.stats}</div>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="rounded p-3 relative overflow-hidden"
            style={{ background: 'rgba(0,255,157,0.02)', border: '1px solid rgba(0,255,157,0.06)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08 * i + 0.5 }}
          >
            <div className="section-label mb-1" style={{ fontSize: '9px' }}>
              {lang === 'en' ? s.label : s.labelJP}
            </div>
            <CountAnimated value={s.value} suffix={s.suffix} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CountAnimated({ value, suffix }: { value: number | string; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const isNum = typeof value === 'number';

  useEffect(() => {
    if (!isNum) return;
    let start = 0;
    const end = value as number;
    const duration = 1200;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setDisplay(start);
    }, 16);
    return () => clearInterval(timer);
  }, [value, isNum]);

  return (
    <div className="font-display font-bold text-2xl text-glow-green">
      {isNum ? display : value}{suffix}
    </div>
  );
}
