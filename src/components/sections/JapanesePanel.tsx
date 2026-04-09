'use client';

import { motion } from 'framer-motion';
import type { Lang } from '@/lib/data';
import { translations } from '@/lib/data';

interface JapanesePanelProps { lang: Lang; }

const jlptLevels = [
  { level: 'N5', label: '基礎', status: 'complete', pct: 100 },
  { level: 'N4', label: '初級', status: 'complete', pct: 100 },
  { level: 'N3', label: '中級', status: 'active', pct: 42 },
  { level: 'N2', label: '上級', status: 'locked', pct: 0 },
  { level: 'N1', label: '上級', status: 'locked', pct: 0 },
];

const vocab = [
  { jp: '効率', en: 'efficiency', reading: 'kōritsu' },
  { jp: '統合', en: 'integration', reading: 'tōgō' },
  { jp: '制御', en: 'control', reading: 'seigyo' },
  { jp: '構造', en: 'structure', reading: 'kōzō' },
];

export default function JapanesePanel({ lang }: JapanesePanelProps) {
  const t = translations[lang];

  return (
    <div className="bento-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="section-label">{t.jlpt}</div>
        <div className="flex items-center gap-2">
          <div className="pulse-dot blue" style={{ width: '5px', height: '5px' }} />
          <span className="font-mono" style={{ fontSize: '9px', color: '#0ea5e9' }}>ACTIVE TRACK</span>
        </div>
      </div>

      {/* JLPT Progress Track */}
      <div className="flex items-end gap-2 mb-5">
        {jlptLevels.map((l, i) => (
          <motion.div
            key={l.level}
            className="flex-1 flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <div className="font-jp text-xs" style={{ color: l.status === 'locked' ? '#1e293b' : '#0ea5e9' }}>
              {l.label}
            </div>
            <div className="w-full rounded-sm overflow-hidden" style={{ height: '48px', background: 'rgba(14,165,233,0.04)', border: '1px solid rgba(14,165,233,0.08)' }}>
              <motion.div
                className="w-full rounded-sm"
                style={{
                  height: `${l.pct}%`,
                  marginTop: 'auto',
                  background: l.status === 'active'
                    ? 'linear-gradient(180deg, #0ea5e9, rgba(14,165,233,0.3))'
                    : l.status === 'complete'
                    ? 'linear-gradient(180deg, #0284c7, #0ea5e9)'
                    : 'transparent',
                  position: 'absolute',
                  bottom: 0,
                }}
                initial={{ height: 0 }}
                animate={{ height: l.pct > 0 ? `${l.pct}%` : 0 }}
                transition={{ duration: 1, delay: 0.15 * i + 0.5 }}
              />
              <div className="flex flex-col-reverse h-full relative">
                <motion.div
                  className="w-full rounded-sm"
                  style={{
                    background: l.status === 'active'
                      ? 'linear-gradient(0deg, rgba(14,165,233,0.5) 0%, rgba(14,165,233,0.15) 100%)'
                      : l.status === 'complete'
                      ? 'linear-gradient(0deg, #0284c7 0%, #0ea5e9 100%)'
                      : 'transparent',
                  }}
                  initial={{ scaleY: 0, originY: 1 }}
                  animate={{ scaleY: l.pct / 100 }}
                  transition={{ duration: 1.2, delay: 0.12 * i + 0.5, ease: [0.2, 0, 0, 1] }}
                />
              </div>
            </div>
            <span className="font-display font-bold" style={{ fontSize: '10px', color: l.status === 'locked' ? '#1e293b' : l.status === 'active' ? '#0ea5e9' : '#38bdf8' }}>
              {l.level}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Vocabulary Tiles */}
      <div className="section-label mb-2">SYSTEM VOCABULARY // 技術用語</div>
      <div className="grid grid-cols-2 gap-2">
        {vocab.map((v, i) => (
          <motion.div
            key={v.jp}
            className="rounded p-2"
            style={{ background: 'rgba(14,165,233,0.03)', border: '1px solid rgba(14,165,233,0.08)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * i + 0.6 }}
          >
            <div className="font-jp text-lg font-bold text-glow-blue">{v.jp}</div>
            <div className="font-mono" style={{ fontSize: '9px', color: '#475569' }}>{v.reading}</div>
            <div className="font-sans text-xs" style={{ color: '#334155' }}>{v.en}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
