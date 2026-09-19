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
    <Section id="about">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-12 items-center"
      >
        <motion.div variants={item} className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden glass-card p-2 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={personalDetails.profilePhoto} 
              alt={personalDetails.name} 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
          </div>
        </motion.div>

        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <motion.div variants={item}>
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-2">About Me</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </motion.div>

          <motion.p variants={item} className="text-zinc-400 text-lg leading-relaxed">
            {personalDetails.bio}
          </motion.p>
          
          <motion.p variants={item} className="text-zinc-400 text-lg leading-relaxed">
            When I'm not writing code, I'm usually exploring new technologies, contributing to open-source, or reading about the latest in software architecture. My approach is simple: build things that matter, and build them well.
          </motion.p>

          <motion.div variants={item} className="grid grid-cols-3 gap-4 mt-4">
            <div className="glass-card p-4 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-white mb-1">{personalDetails.stats.experience}+</h3>
              <p className="text-sm text-zinc-500 font-medium">Years Exp</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-white mb-1">{personalDetails.stats.projects}+</h3>
              <p className="text-sm text-zinc-500 font-medium">Projects</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-white mb-1">{personalDetails.stats.technologies}+</h3>
              <p className="text-sm text-zinc-500 font-medium">Technologies</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
