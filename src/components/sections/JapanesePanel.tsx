'use client';

import { motion } from 'framer-motion';
import { translations, type Lang } from '@/lib/data';

const JLPT = [
  { level: 'N5', label: '初歩', pct: 100, done: true },
  { level: 'N4', label: '初級', pct: 100, done: true },
  { level: 'N3', label: '中級', pct: 42,  done: false, active: true },
  { level: 'N2', label: '上級', pct: 0,   done: false },
  { level: 'N1', label: '最高', pct: 0,   done: false },
];

const VOCAB = [
  { jp: '効率', en: 'efficiency',   reading: 'kōritsu' },
  { jp: '統合', en: 'integration',  reading: 'tōgō' },
  { jp: '制御', en: 'control',      reading: 'seigyo' },
  { jp: '構造', en: 'structure',    reading: 'kōzō' },
  { jp: '論理', en: 'logic',        reading: 'ronri' },
  { jp: '実装', en: 'implementation',reading: 'jissō' },
];

export default function JapanesePanel({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <motion.div
      className="card-base p-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{t.jlpt}</p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
          <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">Active</span>
        </div>
      </div>

      {/* JLPT bars — vertical columns */}
      <div className="flex items-end gap-3 mb-8">
        {JLPT.map((l, i) => (
          <motion.div
            key={l.level}
            className="flex-1 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * i + 0.1, duration: 0.4 }}
          >
            {/* pct label */}
            {l.pct > 0 && (
              <span className={`text-[9px] font-semibold ${l.active ? 'text-sky-600 dark:text-sky-400' : l.done ? 'text-muted-foreground' : 'text-neutral-400 dark:text-neutral-600'}`}>
                {l.pct}%
              </span>
            )}

            {/* column */}
            <div
              className="w-full rounded-md overflow-hidden relative bg-secondary"
              style={{ height: '72px' }}
            >
              <motion.div
                className="absolute bottom-0 left-0 right-0 rounded-md"
                style={{
                  background: l.active
                    ? 'var(--primary)'
                    : l.done
                    ? 'var(--border)'
                    : 'transparent',
                }}
                initial={{ height: 0 }}
                whileInView={{ height: `${l.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.12 * i + 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* label */}
            <span
              className={`text-[10px] font-bold tracking-wider ${l.active ? 'text-sky-600 dark:text-sky-400' : l.done ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              {l.level}
            </span>
            <span className="text-[9px] text-muted-foreground">{l.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Vocab grid */}
      <div className="pt-6 border-t border-border">
        <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-4">Vocabulary Focus</p>
        <div className="grid grid-cols-2 gap-3">
          {VOCAB.map((v, i) => (
            <motion.div
              key={v.jp}
              className="rounded-md p-3 bg-secondary/50 border border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i + 0.2 }}
              whileHover={{ y: -2 }}
            >
              <div className="text-lg font-bold text-foreground leading-none mb-1">{v.jp}</div>
              <div className="text-[9px] font-medium text-muted-foreground mb-1">{v.reading}</div>
              <div className="text-[10px] text-foreground/80">{v.en}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
