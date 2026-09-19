'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  delay?: number;
  title?: string;
  number?: string;
  subtitle?: string;
}

export default function Section({ children, id, className = '', delay = 0, title, number, subtitle }: SectionProps) {
  // Generate random positions for blobs based on id
  const isEven = id.length % 2 === 0;
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen py-24 px-6 lg:px-12 w-full max-w-7xl mx-auto flex flex-col justify-center relative opacity-0 ${className}`}
    >
      {/* Colorful Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
        <motion.div 
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1]
          }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className={`absolute ${isEven ? 'top-[10%] left-[10%]' : 'bottom-[10%] right-[10%]'} w-72 h-72 rounded-full bg-pink-500/20 blur-[100px]`} 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 1.2, 0.8, 1]
          }} 
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className={`absolute ${isEven ? 'bottom-[20%] right-[5%]' : 'top-[20%] left-[5%]'} w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px]`} 
        />
        <motion.div 
          animate={{ 
            x: [0, 20, -30, 0],
            y: [0, -20, 40, 0],
            scale: [1, 0.9, 1.1, 1]
          }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute ${isEven ? 'top-[40%] right-[40%]' : 'bottom-[40%] left-[40%]'} w-64 h-64 rounded-full bg-amber-500/20 blur-[90px]`} 
        />
      </div>

      {title && (
        <div className="relative mb-16 md:mb-24 flex items-end">
          {number && (
            <>
              <div className="absolute -top-10 -left-4 md:-left-10 text-[10rem] md:text-[15rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter z-0 leading-none">
                {number}
              </div>
              {subtitle && (
                <div 
                  className="absolute top-0 right-4 md:right-10 text-[6rem] md:text-[10rem] font-black text-white/[0.015] select-none pointer-events-none z-0 opacity-50"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
                >
                  {subtitle.split(' ')[0]}
                </div>
              )}
            </>
          )}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {subtitle && (
              <span className="text-primary/80 font-mono text-sm tracking-[0.3em] uppercase mb-1 block">
                {subtitle}
              </span>
            )}
            <h2 className="text-gradient text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
          </motion.div>
        </div>
      )}
      {children}
    </section>
  );
}
