'use client';

import { motion } from 'framer-motion';
import { skills, translations, type Lang } from '@/lib/data';

export default function SkillBridge({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <motion.div
      className="card-base p-6 lg:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid grid-cols-[1fr_80px_1fr] md:grid-cols-[1fr_160px_1fr] gap-4 md:gap-8 items-start">

        {/* ── Hardware Stack ─────────────────────────────── */}
        <SkillColumn
          title={t.hardware}
          skills={skills.hardware}
          direction="ltr"
          colorClass="bg-rose-500 dark:bg-rose-600"
        />

        {/* ── Bridge ────────────────────────────────────── */}
        <div className="flex flex-col items-center pt-8">
          <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">Integration</div>
          <div className="relative flex flex-col gap-8 items-center">
            {/* Connection line */}
            <div className="absolute top-0 bottom-0 w-px bg-border -z-10" />
            
            {skills.bridge.map((b, i) => (
              <BridgeNode key={i} protocol={b.protocol} delay={i * 0.2} />
            ))}
          </div>
        </div>

        {/* ── Software Stack ─────────────────────────────── */}
        <SkillColumn
          title={t.software}
          skills={skills.software}
          direction="rtl"
          colorClass="bg-sky-500 dark:bg-sky-600"
        />
      </div>
    </motion.div>
  );
}

/* ── Sub-components ─────────────────────────────────────── */

interface SkillColProps {
  title: string;
  skills: { name: string; level: number }[];
  direction: 'ltr' | 'rtl';
  colorClass: string;
}

function SkillColumn({ title, skills: list, direction, colorClass }: SkillColProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6" style={direction === 'rtl' ? { flexDirection: 'row-reverse' } : {}}>
        <div className={`w-8 h-8 rounded-md flex items-center justify-center text-white text-xs font-bold ${colorClass}`}>
          {direction === 'ltr' ? 'HW' : 'SW'}
        </div>
        <span className="text-sm font-semibold text-foreground uppercase tracking-wider">{title}</span>
      </div>
      
      <div className="space-y-5">
        {list.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: direction === 'ltr' ? -12 : 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * i + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-between mb-2" style={direction === 'rtl' ? { flexDirection: 'row-reverse' } : {}}>
              <span className="text-xs font-medium text-muted-foreground">{s.name}</span>
              <span className="text-xs font-semibold text-foreground">{s.level}%</span>
            </div>
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${colorClass}`}
                style={{ width: `${s.level}%` }}
                initial={{ transformOrigin: direction === 'ltr' ? 'left' : 'right', scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.08 * i + 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BridgeNode({ protocol, delay }: { protocol: string; delay: number }) {
  return (
    <motion.div
      className="px-3 py-1.5 rounded-full text-[10px] font-bold text-muted-foreground bg-secondary border border-border tracking-wider z-10"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {protocol}
    </motion.div>
  );
}
