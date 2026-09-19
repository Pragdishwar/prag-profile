'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  title?: string;
  number?: string;
}

export default function Section({ id, children, className = '', delay = 0, title, number }: SectionProps) {
  // Generate random positions for blobs based on id
  const isEven = id.length % 2 === 0;

  return (
    <motion.section
      id={id}
      className={`min-h-screen py-24 px-6 lg:px-12 w-full max-w-7xl mx-auto flex flex-col justify-center relative ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        delay: delay
      }}
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
          className={`absolute ${isEven ? 'top-[10%] left-[10%]' : 'bottom-[10%] right-[10%]'} w-72 h-72 rounded-full bg-primary/30 blur-[100px]`} 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 1.2, 0.8, 1]
          }} 
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className={`absolute ${isEven ? 'bottom-[20%] right-[5%]' : 'top-[20%] left-[5%]'} w-96 h-96 rounded-full bg-blue-500/30 blur-[120px]`} 
        />
        <motion.div 
          animate={{ 
            x: [0, 20, -30, 0],
            y: [0, -20, 40, 0],
            scale: [1, 0.9, 1.1, 1]
          }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute ${isEven ? 'top-[40%] right-[40%]' : 'bottom-[40%] left-[40%]'} w-64 h-64 rounded-full bg-purple-600/30 blur-[90px]`} 
        />
      </div>

      {title && (
        <div className="relative mb-16 md:mb-24 flex items-end">
          {number && (
            <span className="absolute -left-4 -top-8 md:-top-12 text-6xl md:text-[8rem] font-bold text-white/[0.03] select-none -z-10 leading-none">
              {number}
            </span>
          )}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gradient text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
          </motion.div>
        </div>
      )}
      {children}
    </motion.section>
  );
}
