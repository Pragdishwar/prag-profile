'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SakuraFall() {
  const [petals, setPetals] = useState<{ id: number; left: number; delay: number; duration: number; size: number; rotation: number }[]>([]);

  useEffect(() => {
    // Generate petals only on client to avoid hydration mismatch
    const newPetals = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 10 + 15, // 15-25 seconds to fall (gentle slow fall)
      size: Math.random() * 10 + 8, // 8-18px size
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ top: '-5%', left: ${petal.left}%, opacity: 0, rotate: petal.rotation }}
          animate={{ 
            top: '110%', 
            left: [${petal.left}%, ${petal.left + (Math.random() * 15 - 7.5)}%, ${petal.left - (Math.random() * 15 - 7.5)}%, ${petal.left}%],
            opacity: [0, 1, 1, 0],
            rotate: petal.rotation + (Math.random() > 0.5 ? 360 : -360)
          }}
          transition={{ 
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute"
          style={{ width: petal.size, height: petal.size }}
        >
          {/* Petal shape using Tailwind border radius magic */}
          <div className="w-full h-full bg-pink-300/60 backdrop-blur-sm rounded-tl-full rounded-br-full rounded-tr-[2px] rounded-bl-[2px] shadow-[0_0_10px_rgba(244,114,182,0.4)]" />
        </motion.div>
      ))}
    </div>
  );
}
