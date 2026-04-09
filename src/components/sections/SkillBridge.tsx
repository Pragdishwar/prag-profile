'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import type { Lang } from '@/lib/data';
import { translations } from '@/lib/data';

interface SkillBridgeProps { lang: Lang; }

export default function SkillBridge({ lang }: SkillBridgeProps) {
  const t = translations[lang];

  return (
    <div className="bento-card p-5" style={{ minHeight: '320px' }}>
      <div className="section-label mb-4">{t.bridge}</div>

      <div className="flex gap-4 h-full">
        {/* Hardware Stack */}
        <div className="flex-1">
          <div className="section-label mb-2 text-xs" style={{ color: '#ff6b8a', letterSpacing: '0.15em' }}>
            ⬡ {t.hardware}
          </div>
          <div className="space-y-2">
            {skills.hardware.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i + 0.4 }}
              >
                <div className="flex justify-between mb-0.5">
                  <span className="font-mono" style={{ fontSize: '10px', color: '#64748b' }}>{s.name}</span>
                  <span className="font-mono" style={{ fontSize: '10px', color: '#ff6b8a' }}>{s.level}%</span>
                </div>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,51,102,0.08)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #ff3366, #ff6b8a)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${s.level}%` }}
                    transition={{ duration: 1, delay: 0.1 * i + 0.6, ease: [0.2, 0, 0, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bridge SVG */}
        <div className="flex flex-col items-center justify-center w-28 shrink-0">
          <svg width="112" height="220" viewBox="0 0 112 220" fill="none">
            {/* Bridge lines */}
            {skills.bridge.map((b, i) => {
              const y = 40 + i * 70;
              return (
                <g key={i}>
                  <line x1="0" y1={y} x2="112" y2={y}
                    stroke="rgba(0,255,157,0.15)" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Animated data pulse */}
                  <motion.line
                    x1="0" y1={y} x2="112" y2={y}
                    stroke="#00ff9d" strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      delay: 1 + i * 0.5,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: 'linear',
                    }}
                  />

                  {/* Node dots */}
                  <motion.circle cx="4" cy={y} r="3" fill="#ff3366"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  />
                  <motion.circle cx="108" cy={y} r="3" fill="#0ea5e9"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, delay: i * 0.3 + 0.3, repeat: Infinity }}
                  />

                  {/* Protocol label */}
                  <text x="56" y={y - 6} textAnchor="middle"
                    fill="rgba(0,255,157,0.5)" fontSize="7" fontFamily="IBM Plex Mono">
                    {b.protocol}
                  </text>
                </g>
              );
            })}

            {/* Vertical spine */}
            <line x1="56" y1="0" x2="56" y2="220" stroke="rgba(0,255,157,0.05)" strokeWidth="1" />
          </svg>

          <div className="font-mono text-center mt-2" style={{ fontSize: '8px', color: '#374151', letterSpacing: '0.1em' }}>
            BRIDGE<br />PROTOCOL
          </div>
        </div>

        {/* Software Stack */}
        <div className="flex-1">
          <div className="section-label mb-2 text-xs" style={{ color: '#38bdf8', letterSpacing: '0.15em' }}>
            ◈ {t.software}
          </div>
          <div className="space-y-2">
            {skills.software.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i + 0.4 }}
              >
                <div className="flex justify-between mb-0.5">
                  <span className="font-mono" style={{ fontSize: '10px', color: '#64748b' }}>{s.name}</span>
                  <span className="font-mono" style={{ fontSize: '10px', color: '#38bdf8' }}>{s.level}%</span>
                </div>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(14,165,233,0.08)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${s.level}%` }}
                    transition={{ duration: 1, delay: 0.1 * i + 0.6, ease: [0.2, 0, 0, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
