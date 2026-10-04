'use client';

import { motion, Variants } from 'framer-motion';
import Section from '../ui/Section';
import { experience } from '../../data/portfolio';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

export default function Experience() {
  return (
    <Section id="experience" title="Operational Logs" number="04" subtitle="業務記録 • Career Trajectory">
      <div className="max-w-4xl mx-auto w-full relative">
        {/* Sleek Vertical Line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute left-[7px] md:left-[39px] top-4 bottom-0 w-px bg-white/10"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-16"
        >
          {experience.map((exp, idx) => (
            <motion.div key={exp.id} variants={item} className="relative pl-12 md:pl-28 group">
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-[32px] top-1.5 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="w-[15px] h-[15px] rounded-full bg-black border-2 border-white/20 group-hover:border-white transition-colors duration-300 relative z-10"
                />
                <div className="absolute w-[45px] h-px bg-white/10 left-[15px] hidden md:block" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                  <p className="text-base text-zinc-400 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
              </div>
              
              <div className="os-card p-6 md:p-8 mt-4 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-white/20 group-hover:bg-white transition-colors duration-500" />
                <ul className="flex flex-col gap-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-4 text-zinc-300">
                      <span className="text-white/30 font-mono text-sm mt-0.5 select-none">{i + 1}.</span>
                      <span className="leading-relaxed text-sm md:text-base">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}


