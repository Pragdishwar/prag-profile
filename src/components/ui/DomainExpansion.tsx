'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { playWhoosh } from '../../lib/audio';

export default function DomainExpansion({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Start with a whoosh sound
    playWhoosh();
    setTimeout(() => playWhoosh(), 800);
    setTimeout(() => playWhoosh(), 1500);

    const timer = setTimeout(() => {
      onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden">
      {/* Shockwave background */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: [0, 5, 10], opacity: [1, 1, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute w-[100vw] h-[100vw] rounded-full bg-white/20 backdrop-invert"
      />
      
      {/* Dark Sphere */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1, 50] }}
        transition={{ duration: 3, times: [0, 0.4, 0.6, 1], ease: "anticipate" }}
        className="absolute w-[20vw] h-[20vw] rounded-full bg-purple-900 border-[20px] border-black shadow-[0_0_100px_rgba(147,51,234,1)] mix-blend-difference"
      />

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: [0, 1, 1, 0], y: 0, scale: 1 }}
        transition={{ duration: 3, times: [0, 0.2, 0.8, 1] }}
        className="relative z-10 flex flex-col items-center gap-2 drop-shadow-[0_0_20px_black]"
      >
        <h1 className="text-7xl font-black tracking-[0.2em] text-white uppercase">Domain</h1>
        <h1 className="text-7xl font-black tracking-[0.2em] text-purple-400 uppercase">Expansion</h1>
        <p className="text-white font-mono mt-4 tracking-widest opacity-80">Infinite Void</p>
      </motion.div>
    </div>
  );
}
