'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { profile, translations, type Lang } from '@/lib/data';

interface HeroPanelProps {
  lang: Lang;
  onLangToggle: () => void;
  onTerminalOpen?: () => void; // Keeping prop for backwards compatibility but not using it
}

export default function HeroPanel({ lang, onLangToggle }: HeroPanelProps) {
  return (
    <div className="card-base">
      {/* Top rule */}
      <div className="flex items-center gap-3 px-6 lg:px-8 py-4 border-b border-border bg-secondary/30">
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-xs font-semibold text-foreground uppercase tracking-widest">Profile Identity</span>
        <div className="ml-auto flex items-center gap-4 text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
          <span className="hidden sm:inline-block">v{profile.systemVersion}</span>
          <span>{profile.buildDate}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 lg:px-8 py-8 lg:py-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">
        {/* Left — identity */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Lead Architect</p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
            Pragdishwar
          </h1>

          <p className="text-sm font-medium text-muted-foreground tracking-widest mb-8">
            プラグディシュワル
          </p>

          <AnimatePresence mode="wait">
            <motion.p
              key={lang + 'role'}
              className="text-base text-foreground font-medium leading-relaxed max-w-2xl mb-4"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {lang === 'en' ? profile.role : profile.roleJP}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={lang + 'bio'}
              className="text-sm text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {lang === 'en' ? profile.bio : profile.bioJP}
            </motion.p>
          </AnimatePresence>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <CtaButton onClick={onLangToggle} variant="primary" label={lang === 'en' ? '日本語 Switch' : 'English Switch'} />
            <CtaButton onClick={() => window.location.href = 'mailto:contact@pragdishwar.com'} variant="secondary" label="Contact" />
          </div>
        </div>

        {/* Right — system status readout */}
        <div className="flex flex-col gap-1.5 w-full md:min-w-[240px]">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 pl-1">Overview</p>
          <StatusRow label="Status" value={lang === 'en' ? 'Available' : 'オンライン'} highlight />
          <StatusRow label="Focus" value="Full-stack / Systems" />
          <StatusRow label="Location" value={lang === 'en' ? profile.location : profile.locationJP} />
          <StatusRow label="Japanese" value={profile.japaneseLevel} />
        </div>
      </div>
    </div>
  );
}

/* Sub-components ─────────────────────────────────────────── */

function CtaButton({ onClick, variant, label }: { onClick: () => void; variant: 'primary' | 'secondary'; label: string }) {
  const styles = variant === 'primary'
    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border';
    
  return (
    <motion.button
      onClick={onClick}
      className={`text-xs font-semibold px-5 py-2.5 rounded-md transition-colors ${styles}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.button>
  );
}

function StatusRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5 px-3 rounded-md bg-secondary/40 border border-border">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <span className={`text-xs font-semibold ${highlight ? 'text-emerald-600 dark:text-emerald-400' : 'text-foreground'}`}>
        {value}
      </span>
    </div>
  );
}
