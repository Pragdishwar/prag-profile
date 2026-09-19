'use client';

import { motion, Variants } from 'framer-motion';
import Section from '../ui/Section';
import { personalDetails } from '../../data/portfolio';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 15 } 
  }
};

export default function Hero() {
  return (
    <div id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background spanning full width of the screen */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] left-[-10%] md:left-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] min-w-[400px] min-h-[400px] rounded-full bg-pink-500/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.5, 1],
          }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] right-[-10%] md:right-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] min-w-[300px] min-h-[300px] rounded-full bg-cyan-500/20 blur-[120px]" 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-48 flex flex-col justify-center items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl flex flex-col items-center gap-6"
        >
          <motion.div 
            variants={item} 
            className="inline-block"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md">
              Available for new opportunities <span className="opacity-50 mx-1">•</span> <span className="text-primary font-bold">新しい機会を求めて</span>
            </span>
          </motion.div>
          
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">Pragdishwar A</span>
          </motion.h1>
          
          <motion.h2 variants={item} className="text-2xl md:text-3xl text-zinc-300 font-medium tracking-tight">
            Full-Stack Developer & IoT Engineer.
          </motion.h2>
          
          <motion.p variants={item} className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Second-year CSE undergraduate based in Chennai, bridging software and hardware to build intelligent systems.
          </motion.p>

          <motion.div variants={item} className="flex flex-col md:flex-row gap-4 mt-4 w-full justify-center text-left md:text-center">
            <div className="flex flex-col items-center md:items-center text-center gap-3 p-5 glass-card rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors flex-1 shadow-lg shadow-black/20">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Web Platforms</h3>
                <p className="text-xs text-zinc-400">React, TypeScript, modern cloud architecture.</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-center text-center gap-3 p-5 glass-card rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors flex-1 shadow-lg shadow-black/20">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Embedded IoT</h3>
                <p className="text-xs text-zinc-400">ESP32, Python, sensor integration.</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-center text-center gap-3 p-5 glass-card rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors flex-1 shadow-lg shadow-black/20">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-1">Applied AI</h3>
                <p className="text-xs text-zinc-400">FastAPI, computer vision, data pipelines.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

      </div>

      {/* Infinite Marquee */}
      <div className="absolute bottom-24 left-0 w-full overflow-hidden border-y-2 border-primary py-4 bg-zinc-950/50 backdrop-blur-md z-20">
        <motion.div 
          className="flex whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {['FRONTEND DEVELOPMENT', 'AI ENGINEERING', 'EMBEDDED SYSTEMS', 'FULL STACK ARCHITECTURE', 'INTELLIGENT IoT'].map((item, j) => (
                <div key={j} className="flex items-center">
                  <span className="text-white font-black text-xl md:text-2xl tracking-widest px-8 md:px-12 uppercase">{item}</span>
                  <div className="w-3 h-3 bg-pink-500 rounded-sm shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 z-20"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ height: ["0px", "20px", "0px"], opacity: [0, 1, 0], y: [0, 10, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-zinc-500"
        />
      </motion.div>
    </div>
  );
}
