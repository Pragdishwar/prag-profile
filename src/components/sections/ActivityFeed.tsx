'use client';

import { motion } from 'framer-motion';
import type { Lang } from '@/lib/data';

const ITEMS = [
  { time: '2h',  label: 'ESP32-CAM Sensor calibration deployed',         type: 'hw' },
  { time: '1d',  label: 'Earn2Equity Risk tier gate logic merged',        type: 'sw' },
  { time: '2d',  label: 'MQTT bridge latency optimized to <8ms',            type: 'hw' },
  { time: '3d',  label: 'Supabase RLS policies updated & tested',           type: 'sw' },
  { time: '5d',  label: 'Japanese vocab session — 47 new words logged',           type: 'jp' },
  { time: '6d',  label: 'PCB schematic v2 rev finalized',                   type: 'hw' },
];

const TYPE_COLOR: Record<string, string> = {
  hw: 'bg-rose-500',
  sw: 'bg-sky-500',
  jp: 'bg-purple-500',
};

export default function ActivityFeed({ lang }: { lang: Lang }) {
  return (
    <motion.div
      className="card-base p-6 grow flex flex-col"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">Recent Activity</p>

      <div className="relative flex-1">
        {/* Spine */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-6 pl-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i + 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Dot */}
              <div
                className={`absolute -left-[28px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-background shadow-sm ${TYPE_COLOR[item.type]}`}
              />

              <div className="flex items-start justify-between gap-4">
                <p className="text-sm text-foreground">
                  {item.label}
                </p>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider shrink-0 mt-0.5">{item.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
