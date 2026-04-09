'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile, translations, type Lang } from '@/lib/data';

interface HeroPanelProps {
  lang: Lang;
  onLangToggle: () => void;
  onTerminalOpen: () => void;
}

const bootLines = [
  'BIOS v3.1 — Initializing subsystems...',
  'Loading kernel modules... OK',
  'Mounting engineering data... [████████████] 100%',
  'Starting profile interface daemon...',
  'System ready. Welcome, operator.',
];

export default function HeroPanel({ lang, onLangToggle, onTerminalOpen }: HeroPanelProps) {
  const t = translations[lang];
  const [bootStep, setBootStep] = useState(0);
  const [bootDone, setBootDone] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setBootStep(prev => {
        if (prev < bootLines.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setBootDone(true), 400);
        return prev;
      });
    }, 320);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('ja-JP', { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bento-card p-0 overflow-hidden relative" style={{ borderColor: 'rgba(0, 255, 157, 0.2)' }}>
      {/* Top status bar */}
      <div className="status-bar flex items-center justify-between px-4 py-2 text-xs">
        <div className="flex items-center gap-3">
          <div className="pulse-dot" />
          <span className="font-mono text-glow-green" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
            {t.systemLabel}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-muted font-mono" style={{ fontSize: '10px' }}>
            BUILD {profile.buildDate}
          </span>
          <span className="text-muted font-mono" style={{ fontSize: '10px' }}>
            {profile.systemVersion}
          </span>
          <span className="font-mono" style={{ fontSize: '10px', color: '#374151' }}>{time}</span>
        </div>
      </div>

      {/* Boot sequence */}
      <AnimatePresence>
        {!bootDone && (
          <motion.div
            className="absolute inset-0 z-10 flex flex-col justify-center px-8 py-6"
            style={{ background: '#030712', top: '37px' }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <div className="space-y-1">
              {bootLines.slice(0, bootStep + 1).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-xs"
                  style={{ color: i === bootStep ? '#00ff9d' : '#374151' }}
                >
                  <span style={{ color: '#2d3b52' }}>{'>'}</span> {line}
                </motion.p>
              ))}
              <span className="cursor-blink inline-block w-2 h-3 bg-[#00ff9d] ml-3" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="px-8 pt-8 pb-6">
        {/* Corner accents */}
        <div className="absolute top-10 left-4 w-3 h-3 border-t border-l" style={{ borderColor: 'var(--accent-green)' }} />
        <div className="absolute top-10 right-4 w-3 h-3 border-t border-r" style={{ borderColor: 'var(--accent-green)' }} />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l" style={{ borderColor: 'var(--accent-blue)' }} />
        <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r" style={{ borderColor: 'var(--accent-blue)' }} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: bootDone ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Identity */}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="section-label mb-3">IDENTITY // OPERATOR</div>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-widest text-glow-green mb-1 glitch">
                PRAGDISHWAR
              </h1>
              <p className="font-jp text-sm mb-4" style={{ color: '#475569' }}>
                プラグディシュワル
              </p>
              <p className="font-mono text-xs mb-1" style={{ color: '#94a3b8', lineHeight: 1.8 }}>
                {lang === 'en' ? profile.role : profile.roleJP}
              </p>
              <p className="font-mono text-xs" style={{ color: '#374151' }}>
                {lang === 'en' ? profile.location : profile.locationJP}
              </p>
            </div>

            {/* System status indicators */}
            <div className="flex flex-col gap-2 items-end">
              <StatusRow label="SYSTEM" value={lang === 'en' ? profile.status : profile.statusJP} color="green" />
              <StatusRow label="UPTIME" value={profile.uptime} color="blue" />
              <StatusRow label="JP TRACK" value={profile.japaneseLevel} color="amber" />
            </div>
          </div>

          {/* Bio */}
          <p className="font-sans text-sm mt-6 mb-6 max-w-2xl leading-relaxed" style={{ color: '#64748b' }}>
            {lang === 'en' ? profile.bio : profile.bioJP}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={onTerminalOpen}
              className="flex items-center gap-2 px-4 py-2 font-mono text-xs font-medium uppercase tracking-widest border transition-all duration-200"
              style={{
                background: 'rgba(0, 255, 157, 0.08)',
                borderColor: 'rgba(0, 255, 157, 0.3)',
                color: 'var(--accent-green)',
                borderRadius: '4px',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = 'var(--glow-green)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              <span>{'>'}_</span>
              <span>{t.terminal}</span>
              <kbd style={{ color: '#374151', fontSize: '9px', marginLeft: '4px' }}>[ T ]</kbd>
            </button>

            <button
              onClick={onLangToggle}
              className="flex items-center gap-2 px-4 py-2 font-mono text-xs font-medium uppercase tracking-widest border transition-all duration-200"
              style={{
                background: 'rgba(14, 165, 233, 0.08)',
                borderColor: 'rgba(14, 165, 233, 0.3)',
                color: 'var(--accent-blue)',
                borderRadius: '4px',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = 'var(--glow-blue)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              <span className="font-jp">{lang === 'en' ? '日本語' : 'ENGLISH'}</span>
              <span style={{ color: '#374151' }}>{t.langToggle}</span>
            </button>

            <a
              href="https://github.com/pragd"
              className="flex items-center gap-2 px-4 py-2 font-mono text-xs font-medium uppercase tracking-widest border transition-all duration-200"
              style={{
                background: 'transparent',
                borderColor: 'var(--border-dim)',
                color: '#475569',
                borderRadius: '4px',
              }}
            >
              ⌥ GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StatusRow({ label, value, color }: { label: string; value: string; color: 'green' | 'blue' | 'amber' }) {
  const colors = {
    green: { bg: 'rgba(0,255,157,0.06)', border: 'rgba(0,255,157,0.15)', text: '#00ff9d' },
    blue:  { bg: 'rgba(14,165,233,0.06)', border: 'rgba(14,165,233,0.15)', text: '#0ea5e9' },
    amber: { bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.15)', text: '#f59e0b' },
  }[color];

  return (
    <div className="flex items-center gap-2 px-2 py-1 rounded" style={{ background: colors.bg, border: `1px solid ${colors.border}` }}>
      <div className={`pulse-dot ${color}`} style={{ width: '6px', height: '6px' }} />
      <span className="font-mono text-xs" style={{ color: '#374151', fontSize: '9px', letterSpacing: '0.12em' }}>{label}</span>
      <span className="font-mono font-medium" style={{ color: colors.text, fontSize: '9px', letterSpacing: '0.08em' }}>{value}</span>
    </div>
  );
}
