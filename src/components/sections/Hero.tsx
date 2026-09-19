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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center items-center text-center">
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
            Hi, I'm <span className="text-gradient">{personalDetails.name}</span>
          </motion.h1>
          
          <motion.h2 variants={item} className="text-2xl md:text-3xl text-zinc-300 font-medium tracking-tight">
            {personalDetails.role.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.03, duration: 0.2 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.p variants={item} className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            {personalDetails.bio} Based in {personalDetails.location}.
          </motion.p>
          
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

        {/* Infinite Marquee */}
        <div className="absolute bottom-24 left-0 w-full overflow-hidden border-y-2 border-[#ccff00] py-4 bg-zinc-950/50 backdrop-blur-md z-20">
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
    </div>
  );
}
