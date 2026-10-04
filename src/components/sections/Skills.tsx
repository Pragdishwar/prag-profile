'use client';

import { motion, Variants } from 'framer-motion';
import Section from '../ui/Section';
import { skills } from '../../data/portfolio';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function Skills() {
  return (
    <Section id="skills" title="Neural Capabilities" number="02" subtitle="技術仕様 • Tech Specs">
      <div className="os-card p-8 md:p-12 w-full">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-10 border-b border-white/10 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs font-mono uppercase tracking-widest text-zinc-500">~/system/capabilities</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-12">
          {(Object.keys(skills) as Array<keyof typeof skills>).map((category) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-white mb-6 pb-2 border-b border-white/10">
                {category}
              </h3>
              <ul className="flex flex-col gap-4">
                {skills[category].map((skill) => (
                  <motion.li
                    key={skill.name}
                    variants={item}
                    className="group flex items-center gap-3 cursor-default"
                  >
                    <span className="text-zinc-600 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                    <span className="text-zinc-400 group-hover:text-white transition-colors duration-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
