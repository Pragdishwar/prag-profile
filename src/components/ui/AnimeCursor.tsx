'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimeCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('.glass-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    const allInteractive = document.querySelectorAll('a, button');
    allInteractive.forEach(el => (el as HTMLElement).style.cursor = 'none');
    return () => {
      document.body.style.cursor = 'auto';
      allInteractive.forEach(el => (el as HTMLElement).style.cursor = 'pointer');
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] flex items-center justify-center text-3xl drop-shadow-[0_0_15px_rgba(124,58,237,1)]"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        rotate: mousePosition.x,
        scale: isHovering ? 1.5 : 1
      }}
      transition={{ type: "spring", stiffness: 800, damping: 28, mass: 0.5 }}
    >
      {isHovering ? '⚔️' : '🗡️'}
    </motion.div>
  );
}
