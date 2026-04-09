'use client';

import { motion } from 'framer-motion';
import type { Lang } from '@/lib/data';

const activityItems = [
  { time: '2h ago', label: 'ESP32-CAM — Sensor calibration deployed', type: 'hw' },
  { time: '1d ago', label: 'Earn2Equity — Risk tier gate logic merged', type: 'sw' },
  { time: '2d ago', label: 'MQTT bridge latency optimized to <8ms', type: 'hw' },
  { time: '3d ago', label: 'Supabase RLS policies updated', type: 'sw' },
  { time: '5d ago', label: 'JP vocab session — 47 new words logged', type: 'jp' },
  { time: '6d ago', label: 'PCB schematic v2 rev finalized', type: 'hw' },
];

const typeColors: Record<string, { color: string; dot: string }> = {
  hw:  { color: '#ff6b8a', dot: 'red' },
  sw:  { color: '#38bdf8', dot: 'blue' },
  jp:  { color: '#a78bfa', dot: 'purple' },
};

interface ActivityFeedProps { lang: Lang; }

export default function ActivityFeed({ lang }: ActivityFeedProps) {
  return (
    <div className="bento-card p-5">
      <div className="section-label mb-4">RECENT ACTIVITY</div>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-px" style={{ background: 'rgba(0,255,157,0.06)' }} />

        <div className="space-y-3 pl-6">
          {activityItems.map((item, i) => {
            const tc = typeColors[item.type];
            return (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i + 0.3 }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-5 top-1.5 w-2 h-2 rounded-full border"
                  style={{
                    background: 'var(--bg-base)',
                    borderColor: tc.color,
                    boxShadow: `0 0 6px ${tc.color}55`,
                  }}
                />
                <div className="flex items-start justify-between gap-2">
                  <p className="font-sans text-xs leading-relaxed" style={{ color: '#475569' }}>{item.label}</p>
                  <span className="font-mono shrink-0" style={{ fontSize: '9px', color: '#2d3b52' }}>{item.time}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
