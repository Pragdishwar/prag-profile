'use client';

import { motion, Variants } from 'framer-motion';
import Section from '../ui/Section';
import { skills } from '../../data/portfolio';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function Skills() {
  return (
    <Section id="skills" title="Neural Capabilities" number="02" subtitle="技術仕様 • Tech Specs">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {(Object.entries(skills)).map(([category, categorySkills], idx) => (
            <motion.div
              key={category}
              variants={item}
              className="group relative flex flex-col p-8 bg-black/40 border border-white/5 hover:border-white/20 transition-colors duration-500 overflow-hidden"
            >
              {/* Decorative Corner Borders */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 group-hover:border-white/60 transition-colors" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 group-hover:border-white/60 transition-colors" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 group-hover:border-white/60 transition-colors" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 group-hover:border-white/60 transition-colors" />

              {/* Background Glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h3 className="text-sm font-mono tracking-widest uppercase text-white font-bold flex items-center gap-3">
                  <span className="text-zinc-500 font-normal">0{idx + 1}</span>
                  {category}
                </h3>
                {/* Simulated status light */}
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-green-400 group-hover:shadow-[0_0_8px_rgba(74,222,128,0.8)] transition-all duration-300" />
              </div>

              <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 text-xs font-mono bg-white/5 text-zinc-400 border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              
              {/* Background Grid Pattern (Cyberpunk vibe) */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '16px 16px' 
                }} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
