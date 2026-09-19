'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Section({ id, children, className = '', delay = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-20 px-6 lg:pl-24 max-w-7xl mx-auto flex flex-col justify-center ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        delay: delay
      }}
    >
      {children}
    </motion.section>
  );
}
