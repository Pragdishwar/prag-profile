'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Lang } from '@/lib/data';

export default function ProjectsGrid({ lang }: { lang: Lang }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          className="card-base p-6 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          whileHover={{ y: -4 }}
          style={{ minHeight: '300px' }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">{lang === 'en' ? p.type : p.typeJP}</p>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={lang + p.id}
                  className="font-semibold text-lg text-foreground tracking-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {lang === 'en' ? p.name : p.nameJP}
                </motion.h3>
              </AnimatePresence>
            </div>
            <StatusPill status={lang === 'en' ? p.status : p.statusJP} color={p.statusColor as 'green' | 'amber'} />
          </div>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={lang + 'desc' + p.id}
              className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {lang === 'en' ? p.description : p.descriptionJP}
            </motion.p>
          </AnimatePresence>

          {/* Project-specific data */}
          {p.id === 'earn2equity' && p.safetyLayers && (
            <div className="mb-6">
              <p className="text-xs font-medium text-foreground tracking-widest uppercase mb-3">Key Architecture Highlights</p>
              <div className="space-y-2">
                {p.safetyLayers.map(l => (
                  <div key={l.label} className="flex justify-between items-center pt-2 pb-2 pl-3 pr-3 rounded-md bg-secondary/50 border border-border">
                    <span className="text-xs font-medium text-muted-foreground">
                      {l.label}
                    </span>
                    <span className="text-xs font-semibold text-foreground">
                      {l.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {p.id === 'esp32-irrigation' && p.sensorData && (
            <div className="mb-6">
              <p className="text-xs font-medium text-foreground tracking-widest uppercase mb-3">System Capabilities</p>
              <div className="grid grid-cols-2 gap-3">
                {p.sensorData.map(s => (
                  <SensorTile key={s.key} label={s.label} unit={s.unit} sensorKey={s.key} />
                ))}
              </div>
            </div>
          )}

          {/* Stack chips */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
            {p.stack.map(tech => {
              return (
                <span
                  key={tech}
                  className="pl-2 pr-2.5 pt-1 pb-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SensorTile({ label, unit, sensorKey }: { label: string; unit: string; sensorKey: string }) {
  const base: Record<string, number> = { moisture: 68.4, temp: 28.7, humidity: 74.1, flow: 1.23 };
  const v = base[sensorKey] ?? 0;

  return (
    <div className="rounded-md p-3 bg-secondary/50 border border-border">
      <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
      <div className="flex items-baseline gap-1.5">
        <span className="font-semibold text-lg text-foreground">
          {v}
        </span>
        <span className="text-[10px] text-muted-foreground">{unit}</span>
      </div>
    </div>
  );
}

function StatusPill({ status, color }: { status: string; color: 'green' | 'amber' }) {
  const c = color === 'green'
    ? { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-600 dark:text-emerald-400', indicator: 'bg-emerald-500' }
    : { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-600 dark:text-amber-400', indicator: 'bg-amber-500' };
  
  return (
    <div className={`flex items-center gap-2 pl-2 pr-2.5 pt-1 pb-1 rounded-full ${c.bg} border ${c.border}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${c.indicator} ${color === 'amber' ? 'animate-pulse' : ''}`} />
      <span className={`text-[10px] font-semibold uppercase tracking-wider ${c.text}`}>{status}</span>
    </div>
  );
}
