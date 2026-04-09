'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import HeroPanel from '@/components/sections/HeroPanel';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import SkillBridge from '@/components/sections/SkillBridge';
import StatsPanel from '@/components/sections/StatsPanel';
import JapanesePanel from '@/components/sections/JapanesePanel';
import ActivityFeed from '@/components/sections/ActivityFeed';
import TerminalOverlay from '@/components/terminal/TerminalOverlay';
import type { Lang } from '@/lib/data';
import { translations } from '@/lib/data';

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const [terminalOpen, setTerminalOpen] = useState(false);

  const toggleLang = useCallback(() => setLang(l => l === 'en' ? 'jp' : 'en'), []);
  const openTerminal = useCallback(() => setTerminalOpen(true), []);
  const closeTerminal = useCallback(() => setTerminalOpen(false), []);

  // Global [ T ] keybind
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 't' && !terminalOpen && document.activeElement?.tagName !== 'INPUT') {
        setTerminalOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [terminalOpen]);

  const t = translations[lang];

  return (
    <>
      <TerminalOverlay
        isOpen={terminalOpen}
        onClose={closeTerminal}
        lang={lang}
        onLangChange={setLang}
      />

      <main className="relative z-10 min-h-screen px-4 py-6 md:px-8 max-w-screen-xl mx-auto">

        {/* ── TOP SYSTEM BAR ──────────────────────────────── */}
        <motion.div
          className="flex items-center justify-between mb-6 px-4 py-2 rounded-lg"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(0,255,157,0.06)',
            backdropFilter: 'blur(8px)',
          }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="font-display text-xs tracking-[0.3em] text-glow-green">PRAG.SYS</div>
            <div className="h-3 w-px" style={{ background: 'rgba(0,255,157,0.1)' }} />
            <div className="font-mono" style={{ fontSize: '10px', color: '#2d3b52', letterSpacing: '0.1em' }}>
              ENGINEERING PROFILE INTERFACE
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono" style={{ fontSize: '9px', color: '#1e293b' }}>
              {t.terminalHint}
            </span>
            <button
              onClick={openTerminal}
              className="font-mono text-xs px-3 py-1 rounded transition-all"
              style={{
                background: 'rgba(0,255,157,0.06)',
                border: '1px solid rgba(0,255,157,0.15)',
                color: 'var(--accent-green)',
                fontSize: '9px',
                letterSpacing: '0.12em',
              }}
            >
              {'>_'} CLI
            </button>
          </div>
        </motion.div>

        {/* ── SECTION HEADER ──────────────────────────────── */}
        {/* Hero spans full width */}
        <div className="mb-4">
          <HeroPanel lang={lang} onLangToggle={toggleLang} onTerminalOpen={openTerminal} />
        </div>

        {/* ── BENTO GRID ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Projects — spans 2 cols */}
          <div className="lg:col-span-2">
            <SectionLabel>{t.projects}</SectionLabel>
            <ProjectsGrid lang={lang} />
          </div>

          {/* Stats + Activity — right column */}
          <div className="flex flex-col gap-4">
            <div>
              <SectionLabel>{t.stats}</SectionLabel>
              <StatsPanel lang={lang} />
            </div>
            <ActivityFeed lang={lang} />
          </div>

          {/* Skill Bridge — full width */}
          <div className="lg:col-span-3">
            <SectionLabel>{t.bridge}</SectionLabel>
            <SkillBridge lang={lang} />
          </div>

          {/* Japanese Panel — 1 col */}
          <div>
            <SectionLabel>{t.japanese}</SectionLabel>
            <JapanesePanel lang={lang} />
          </div>

          {/* System Metadata — 2 cols */}
          <div className="lg:col-span-2">
            <SectionLabel>SYSTEM ARCHITECTURE // システム構成</SectionLabel>
            <SystemArchCard lang={lang} />
          </div>

        </div>

        {/* ── FOOTER ──────────────────────────────────────── */}
        <motion.footer
          className="mt-8 pt-4 flex items-center justify-between"
          style={{ borderTop: '1px solid rgba(0,255,157,0.05)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="font-mono" style={{ fontSize: '9px', color: '#1e293b', letterSpacing: '0.1em' }}>
            © 2026 PRAGDISHWAR · PRAG.SYS v2.4.1 · {lang === 'en' ? 'ALL SYSTEMS NOMINAL' : '全システム正常'}
          </span>
          <span className="font-mono text-glow-green" style={{ fontSize: '9px', letterSpacing: '0.2em' }}>
            BUILT WITH PRECISION
          </span>
        </motion.footer>
      </main>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className="h-px flex-1" style={{ background: 'rgba(0,255,157,0.06)' }} />
      <span className="font-mono" style={{ fontSize: '9px', color: '#2d3b52', letterSpacing: '0.2em' }}>
        {children}
      </span>
      <div className="h-px flex-1" style={{ background: 'rgba(0,255,157,0.06)' }} />
    </div>
  );
}

function SystemArchCard({ lang }: { lang: Lang }) {
  const nodes = [
    { label: 'ESP32-CAM', sub: lang === 'en' ? 'Sensor Layer' : 'センサー層', color: '#ff3366', x: 8, icon: '⬡' },
    { label: 'MQTT Broker', sub: lang === 'en' ? 'Transport' : 'トランスポート', color: '#f59e0b', x: 28, icon: '⇄' },
    { label: 'Supabase', sub: lang === 'en' ? 'Data + Auth' : 'データ + 認証', color: '#00ff9d', x: 50, icon: '◈' },
    { label: 'Next.js', sub: lang === 'en' ? 'UI Framework' : 'UIフレームワーク', color: '#0ea5e9', x: 72, icon: '◈' },
    { label: 'Vercel', sub: lang === 'en' ? 'Edge Deploy' : 'エッジデプロイ', color: '#a78bfa', x: 90, icon: '▸' },
  ];

  return (
    <div className="bento-card p-5">
      <div className="relative" style={{ height: '140px' }}>
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {nodes.slice(0, -1).map((n, i) => {
            const next = nodes[i + 1];
            return (
              <g key={i}>
                <line
                  x1={`${n.x + 5}%`} y1="35%" x2={`${next.x}%`} y2="35%"
                  stroke="rgba(0,255,157,0.06)" strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <motion.line
                  x1={`${n.x + 5}%`} y1="35%" x2={`${next.x}%`} y2="35%"
                  stroke="#00ff9d" strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, delay: 1 + i * 0.4, repeat: Infinity, repeatDelay: 2 }}
                />
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0 flex items-center">
          {nodes.map((n, i) => (
            <motion.div
              key={n.label}
              className="absolute flex flex-col items-center"
              style={{ left: `${n.x}%`, transform: 'translateX(-50%)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5 }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-lg mb-2"
                style={{
                  background: `${n.color}10`,
                  border: `1px solid ${n.color}30`,
                  color: n.color,
                  boxShadow: `0 0 12px ${n.color}20`,
                }}
              >
                {n.icon}
              </div>
              <div className="font-mono font-medium" style={{ fontSize: '9px', color: n.color, letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                {n.label}
              </div>
              <div className="font-sans" style={{ fontSize: '8px', color: '#2d3b52', whiteSpace: 'nowrap' }}>
                {n.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Protocol labels */}
      <div className="flex items-center justify-center gap-6 mt-2">
        {[
          { label: 'C++ Firmware', color: '#ff3366' },
          { label: 'MQTT/WiFi', color: '#f59e0b' },
          { label: 'REST + Realtime', color: '#00ff9d' },
          { label: 'SSR + Edge', color: '#0ea5e9' },
        ].map(p => (
          <div key={p.label} className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
            <span className="font-mono" style={{ fontSize: '8px', color: '#2d3b52' }}>{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
