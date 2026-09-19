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
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-24 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center relative ${className}`}
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
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
            <div className="h-1 w-16 bg-primary" />
          </motion.div>
        </div>
      )}
      {children}
    </motion.section>
  );
}
