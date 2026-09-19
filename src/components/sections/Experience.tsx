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
    <Section id="experience">
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full ml-auto mr-auto" />
        </motion.div>

        <div className="relative max-w-3xl ml-auto mr-auto w-full">
          {/* Animated Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-4 md:left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-8 md:gap-12 pl-12 md:pl-20 pt-4 pb-4"
          >
            {experience.map((exp, idx) => (
              <motion.div key={exp.id} variants={item} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform duration-300 z-10" />
                
                <div className="glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="pl-3 pr-3 pt-1 pb-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-zinc-300 w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <ul className="flex flex-col gap-3 mt-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-zinc-400">
                        <span className="text-primary mt-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
