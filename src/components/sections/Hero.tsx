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
    <Section id="hero" className="items-center text-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.5, 1],
          }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[100px]" 
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl flex flex-col items-center gap-6 relative z-10"
      >
        <motion.div variants={item} className="inline-block">
          <span className="pl-3 pr-3 pt-1 pb-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md">
            Available for new opportunities
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
        
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a
            href="#projects"
            className="pl-6 pr-6 pt-3 pb-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="pl-6 pr-6 pt-3 pb-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
