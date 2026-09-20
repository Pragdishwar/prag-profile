'use client';

import { motion, Variants } from 'framer-motion';
import Section from '../ui/Section';
import { personalDetails } from '../../data/portfolio';

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

export default function About() {
  return (
    <Section id="about" title="About" number="01" subtitle="私について • Profile">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-12 items-center"
      >
        <motion.div variants={item} className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden glass-card p-2 transform rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={personalDetails.profilePhoto} 
              alt={personalDetails.name} 
              className="w-full h-full object-cover rounded-xl"
            />
            <motion.div 
              animate={{ boxShadow: ["0 0 10px rgba(124,58,237,0.2)", "0 0 30px rgba(124,58,237,0.8)", "0 0 10px rgba(124,58,237,0.2)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/30 pointer-events-none" 
            />
          </div>
        </motion.div>

        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <motion.p variants={item} className="text-zinc-400 text-lg leading-relaxed">
            {personalDetails.bio}
          </motion.p>
          
          <motion.p variants={item} className="text-zinc-400 text-lg leading-relaxed">
            When I'm not writing code, I'm usually exploring new technologies, contributing to open-source, or reading about the latest in software architecture. My approach is simple: build things that matter, and build them well.
          </motion.p>

          <motion.div variants={item} className="grid grid-cols-3 gap-4 mt-6">
            <div className="glass-card p-6 rounded-xl text-center hover:-translate-y-2 hover:scale-105 transition-all duration-300 border-t-2 border-t-primary/50">
              <h3 className="text-4xl font-bold text-white mb-2">{personalDetails.stats.experience}+</h3>
              <p className="text-sm text-zinc-500 font-medium tracking-wide uppercase">Years Exp</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center hover:-translate-y-2 hover:scale-105 transition-all duration-300 border-t-2 border-t-cyan-500/50">
              <h3 className="text-4xl font-bold text-white mb-2">{personalDetails.stats.projects}+</h3>
              <p className="text-sm text-zinc-500 font-medium tracking-wide uppercase">Projects</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center hover:-translate-y-2 hover:scale-105 transition-all duration-300 border-t-2 border-t-amber-500/50">
              <h3 className="text-4xl font-bold text-white mb-2">{personalDetails.stats.technologies}+</h3>
              <p className="text-sm text-zinc-500 font-medium tracking-wide uppercase">Tech Stack</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-10 glass-card p-6 rounded-xl border border-white/5 bg-white/5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white tracking-wide flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub Contributions
              </h3>
              <a href="https://github.com/Pragdishwar" target="_blank" className="text-xs text-primary hover:underline">@Pragdishwar</a>
            </div>
            {/* Using a lightweight SVG generator for GitHub chart */}
            <div className="w-full overflow-x-auto overflow-y-hidden rounded-md flex justify-start sm:justify-center invert-[.85] hue-rotate-180 brightness-[1.5]">
              <img src="https://ghchart.rshah.org/7c3aed/Pragdishwar" alt="Pragdishwar's Github chart" className="min-w-[700px] h-32 object-cover object-left" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
