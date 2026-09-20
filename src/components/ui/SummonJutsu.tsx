'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SPRITES = ['🍜', '🦊', '🍥', '🏴‍☠️', '🍖', '⚔️', '👺', '🔥'];

export default function SummonJutsu() {
  const [sprites, setSprites] = useState<{ id: number; left: number; emoji: string; delay: number; duration: number; size: number; rotation: number }[]>([]);

  useEffect(() => {
    // Generate only on client
    const newSprites = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      emoji: SPRITES[Math.floor(Math.random() * SPRITES.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5, // 5-10 seconds to fall (faster than sakura)
      size: Math.random() * 20 + 20, // 20-40px
      rotation: Math.random() * 360,
    }));
    setSprites(newSprites);
  }, []);

  if (sprites.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden">
      {sprites.map((sprite) => (
        <motion.div
          key={sprite.id}
          initial={{ top: '-10%', left: `${sprite.left}%`, opacity: 0, rotate: sprite.rotation }}
          animate={{ 
            top: '110%', 
            left: [`${sprite.left}%`, `${sprite.left + (Math.random() * 10 - 5)}%`, `${sprite.left}%`],
            opacity: [0, 1, 1, 0],
            rotate: sprite.rotation + 720
          }}
          transition={{ 
            duration: sprite.duration,
            delay: sprite.delay,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute"
          style={{ fontSize: sprite.size }}
        >
          {sprite.emoji}
        </motion.div>
      ))}
    </div>
  );
}
