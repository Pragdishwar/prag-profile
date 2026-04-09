'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import type { Lang } from '@/lib/data';

interface ProjectsGridProps { lang: Lang; }

export default function ProjectsGrid({ lang }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          className={`bento-card p-5 ${project.statusColor === 'green' ? '' : 'red'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
          style={{ minHeight: '280px' }}
        >
          {/* Card header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="section-label mb-1">
                {lang === 'en' ? project.type : project.typeJP}
              </div>
              <h3 className="font-display font-bold text-sm tracking-wider" style={{ color: '#c8d4e8' }}>
                {lang === 'en' ? project.name : project.nameJP}
              </h3>
            </div>
            <StatusBadge status={lang === 'en' ? project.status : project.statusJP} color={project.statusColor as 'green' | 'amber'} />
          </div>

          {/* Description */}
          <p className="font-sans text-xs leading-relaxed mb-4" style={{ color: '#475569' }}>
            {lang === 'en' ? project.description : project.descriptionJP}
          </p>

          {/* Project-specific data */}
          {project.id === 'earn2equity' && (
            <SafetyLayers layers={project.safetyLayers ?? []} />
          )}

          {project.id === 'esp32-irrigation' && (
            <SensorReadouts sensors={project.sensorData ?? []} />
          )}

          {/* Stack tags */}
          <div className="flex flex-wrap gap-1 mt-4">
            {project.stack.map(tech => (
              <span
                key={tech}
                className={`skill-chip ${project.stackType === 'sw' ? 'sw' : project.stackType === 'mixed' ?
                  (['C++', 'Arduino', 'ESP32-CAM', 'MQTT'].includes(tech) ? 'hw' : 'sw') : 'hw'}`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-4">
            <a href={project.github} className="font-mono text-xs hover:text-glow-green transition-all" style={{ color: '#374151' }}>
              ⌥ Source
            </a>
            <a href={project.live} className="font-mono text-xs hover:text-glow-blue transition-all" style={{ color: '#374151' }}>
              ◈ Live
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function StatusBadge({ status, color }: { status: string; color: 'green' | 'amber' }) {
  const c = color === 'green'
    ? { bg: 'rgba(0,255,157,0.08)', border: 'rgba(0,255,157,0.25)', text: '#00ff9d' }
    : { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)', text: '#f59e0b' };
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
      <div className={`pulse-dot ${color === 'amber' ? 'amber' : ''}`} style={{ width: '5px', height: '5px' }} />
      <span className="font-mono font-medium" style={{ color: c.text, fontSize: '9px', letterSpacing: '0.1em' }}>
        {status}
      </span>
    </div>
  );
}

function SafetyLayers({ layers }: { layers: Array<{ label: string; value: string; color: string }> }) {
  return (
    <div className="space-y-1.5">
      <div className="section-label mb-2">SAFETY LAYER STATUS</div>
      {layers.map(l => {
        const colors: Record<string, string> = { green: '#00ff9d', blue: '#0ea5e9', amber: '#f59e0b' };
        return (
          <div key={l.label} className="flex items-center justify-between">
            <span className="font-mono text-xs" style={{ color: '#374151', fontSize: '10px' }}>{l.label}</span>
            <span className="font-mono text-xs font-medium" style={{ color: colors[l.color] || '#00ff9d', fontSize: '10px' }}>
              {l.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function SensorReadouts({ sensors }: { sensors: Array<{ label: string; unit: string; key: string }> }) {
  // Simulated live values
  const simValues: Record<string, string> = {
    moisture: '68.4', temp: '28.7', humidity: '74.1', flow: '1.23',
  };
  return (
    <div className="grid grid-cols-2 gap-2">
      {sensors.map(s => (
        <div key={s.key} className="rounded p-2" style={{ background: 'rgba(0,255,157,0.03)', border: '1px solid rgba(0,255,157,0.08)' }}>
          <div className="section-label mb-1" style={{ fontSize: '9px' }}>{s.label}</div>
          <div className="font-display text-sm text-glow-green">
            {simValues[s.key]}<span className="text-muted font-mono" style={{ fontSize: '9px', marginLeft: '2px' }}>{s.unit}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
