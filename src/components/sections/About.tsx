'use client';

import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import Section from '../ui/Section';
import { personalDetails, interests } from '../../data/portfolio';

export default function About() {
  return (
    <Section id="about" title="Operative Profile" number="01" subtitle="基本データ • Base Identity">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Main Identity Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 os-card p-8 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Active Profile</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              A computer science undergrad specializing in <span className="text-zinc-400">AI</span>, <span className="text-zinc-400">Full-Stack Development</span>, and <span className="text-zinc-400">Intelligent Embedded Systems</span>.
            </h3>
            <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
              Passionate about applied AI research, computer vision, and solving real-world engineering problems through innovative software and hardware solutions.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-6 border-t border-white/10 pt-6">
            <div>
              <p className="text-xs font-mono uppercase text-zinc-500 mb-1">Base of Ops</p>
              <p className="text-white font-medium">{personalDetails.location}</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <p className="text-xs font-mono uppercase text-zinc-500 mb-1">Education</p>
              <p className="text-white font-medium">B.E. Computer Science, CIT</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="os-card p-8 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-1 border-b border-white/10 pb-6">
            <span className="text-5xl font-black text-white">{personalDetails.stats.experience}+</span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Years Dev Exp</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-white/10 pb-6">
            <span className="text-5xl font-black text-white">{personalDetails.stats.projects}+</span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Shipped Projects</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-5xl font-black text-white">{personalDetails.stats.technologies}+</span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Technologies</span>
          </div>
        </motion.div>

        {/* GitHub Graph Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3 os-card p-8 overflow-hidden relative"
        >
          <div className="flex justify-between items-center mb-6 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Commit History</span>
            <a href="https://github.com/Pragdishwar" target="_blank" className="text-xs font-mono uppercase text-white hover:underline flex items-center gap-2">
              GitHub <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
          {/* Realtime GitHub Calendar */}
          <div className="w-full overflow-x-auto overflow-y-hidden rounded-md flex justify-start sm:justify-center relative z-10 filter grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="min-w-fit">
              <GitHubCalendar 
                username="Pragdishwar" 
                colorScheme="dark"
                theme={{
                  dark: ['#18181b', '#3b0764', '#6b21a8', '#9333ea', '#c084fc']
                }}
                fontSize={12}
                blockSize={10}
                blockMargin={4}
              />
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
        </motion.div>

        {/* Interests/Culture Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="os-card p-6 flex flex-col justify-center items-center text-center">
            <span className="text-3xl mb-2">🎌</span>
            <h4 className="text-white font-medium mb-1">Japanese Culture</h4>
            <p className="text-xs text-zinc-400">JLPT N4 & Isshoni Nihongo President</p>
          </div>
          <div className="os-card p-6 flex flex-col justify-center items-center text-center">
            <span className="text-3xl mb-2">🤖</span>
            <h4 className="text-white font-medium mb-1">Applied ML</h4>
            <p className="text-xs text-zinc-400">Computer Vision & Edge AI models</p>
          </div>
          <div className="os-card p-6 flex flex-col justify-center items-center text-center">
            <span className="text-3xl mb-2">⚔️</span>
            <h4 className="text-white font-medium mb-1">Anime Enthusiast</h4>
            <p className="text-xs text-zinc-400">Bleach, One Piece, Naruto</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
