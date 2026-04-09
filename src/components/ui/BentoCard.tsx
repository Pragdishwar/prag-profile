'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'red';
  animate?: boolean;
  delay?: number;
}

export default function BentoCard({
  children, className = '', variant = 'default', animate = true, delay = 0
}: BentoCardProps) {
  const card = (
    <div className={`bento-card ${variant !== 'default' ? variant : ''} ${className}`}>
      {children}
    </div>
  );

  if (!animate) return card;

  return (
    <motion.div
      className={`bento-card ${variant !== 'default' ? variant : ''} ${className}`}
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
