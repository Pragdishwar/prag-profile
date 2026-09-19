'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { stats, translations, type Lang } from '@/lib/data';

function useCountUp(target: number, duration = 1400, startDelay = 0) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out-expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setValue(Math.round(eased * target));
        if (progress < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    }, startDelay);

    return () => { clearTimeout(timeout); cancelAnimationFrame(rafRef.current); };
  }, [target, duration, startDelay]);

  return value;
}

export default function StatsPanel({ lang }: { lang: Lang }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="card-base p-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid grid-cols-2 gap-4">
        {stats.map((s, i) => (
          <StatCell key={s.label} stat={s} lang={lang} active={inView} delay={i * 100} />
        ))}
      </div>
    </motion.div>
  );
}

function StatCell({ stat, lang, active, delay }: {
  stat: { label: string; labelJP: string; value: number | string; suffix: string };
  lang: Lang; active: boolean; delay: number;
}) {
  const isNum = typeof stat.value === 'number';
  const count = useCountUp(active && isNum ? (stat.value as number) : 0, 1200, delay);

  return (
    <motion.div
      className="rounded-md p-4 bg-secondary/50 border border-border"
      whileHover={{ scale: 1.02 }}
    >
      <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-2">{lang === 'en' ? stat.label : stat.labelJP}</p>
      <motion.div
        className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: active ? 1 : 0, y: active ? 0 : 6 }}
        transition={{ duration: 0.4, delay: delay / 1000 }}
      >
        {isNum ? count : stat.value}{stat.suffix}
      </motion.div>
    </motion.div>
  );
}
