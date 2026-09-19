'use client';

import { motion, Variants } from 'framer-motion';
import Section from '../ui/Section';
import { skills } from '../../data/portfolio';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

const IconPlaceholder = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
    <path d="m18 16 4-4-4-4"/>
    <path d="m6 8-4 4 4 4"/>
    <path d="m14.5 4-5 16"/>
  </svg>
);

export default function Skills() {
  return (
    <Section id="skills">
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary rounded-full ml-auto mr-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(Object.keys(skills) as Array<keyof typeof skills>).map((category, idx) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-card p-6 flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">{category}</h3>
              <div className="flex flex-col gap-3">
                {skills[category].map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="p-2 rounded-md bg-white/5">
                      <IconPlaceholder />
                    </div>
                    <span className="font-medium text-zinc-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
