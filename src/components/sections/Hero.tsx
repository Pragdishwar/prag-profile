'use client';

import { motion, Variants } from 'framer-motion';
import InteractiveGrid from '../ui/InteractiveGrid';
import MagneticButton from '../ui/MagneticButton';
import { personalDetails } from '../../data/portfolio';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 80, damping: 20 } 
  }
};

export default function Hero() {
  return (
    <div id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black selection:bg-white selection:text-black">
      <InteractiveGrid />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full"
        >
          {/* Top metadata pill */}
          <motion.div variants={item} className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Available for Impact</span>
              <span className="opacity-50 mx-1">|</span>
              <span className="text-white">新しい機会を求めて</span>
            </div>
          </motion.div>
          
          {/* Massive Typography Intro */}
          <motion.div variants={item} className="flex flex-col items-center">
            <h2 className="text-sm md:text-base font-mono text-zinc-500 tracking-[0.2em] uppercase mb-4">
              [ {personalDetails.name} ]
            </h2>
            <h1 className="text-[12vw] sm:text-[8vw] md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] text-white mix-blend-difference z-10">
              ENGINEERING<br/>
              <span className="text-zinc-600">IDEAS INTO</span><br/>
              REAL SYSTEMS.
            </h1>
          </motion.div>
          
          {/* Minimalist Sub-description */}
          <motion.div variants={item} className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 max-w-2xl text-left border-l-2 border-white/20 pl-4 md:pl-6 ml-4 md:ml-0 self-center md:self-auto mx-auto w-full md:w-auto">
            <p className="text-sm md:text-base text-zinc-400 font-mono leading-relaxed">
              <span className="text-white block mb-1">SYS.INFO:</span>
              Third-year CSE undergraduate based in Chennai. <br/>
              Specializing in Full-Stack, AI, and Embedded IoT.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 mt-16">
            <MagneticButton>
              <a
                href="#projects"
                className="group flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-all text-sm uppercase tracking-wider"
              >
                <span>Initialize Sequence</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite scrolling bottom ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/10 bg-black/50 backdrop-blur-md z-20 py-3">
        <motion.div 
          className="flex whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {['FRONTEND DEVELOPMENT', 'AI ENGINEERING', 'EMBEDDED SYSTEMS', 'FULL STACK ARCHITECTURE', 'INTELLIGENT IoT'].map((item, j) => (
                <div key={j} className="flex items-center">
                  <span className="text-zinc-500 font-mono text-xs tracking-[0.3em] px-8 md:px-12 uppercase">{item}</span>
                  <div className="w-1 h-1 bg-zinc-700 rounded-full" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


