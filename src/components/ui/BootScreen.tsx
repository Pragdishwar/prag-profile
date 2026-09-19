'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BootScreen() {
  const [show, setShow] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  
  const bootLines = [
    'INIT SYSTEM...',
    'LOADING MODULES...',
    'CONNECTING TO NETWORK...',
    'MOUNTING COMPONENTS...',
    'SYSTEM READY.'
  ];

  useEffect(() => {
    // Only run once per session using sessionStorage
    const hasBooted = sessionStorage.getItem('hasBooted');
    if (hasBooted) {
      setShow(false);
      return;
    }
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < bootLines.length - 1) {
        currentIndex++;
        setTextIndex(currentIndex);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShow(false);
          sessionStorage.setItem('hasBooted', 'true');
        }, 500); // fade out after 'SYSTEM READY'
      }
    }, 300); // fast typing effect
    
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-zinc-950 flex flex-col items-center justify-center font-mono text-sm"
        >
          <div className="w-full max-w-md p-6">
            <div className="flex flex-col gap-2">
              {bootLines.slice(0, textIndex + 1).map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={i === bootLines.length - 1 ? 'text-green-500' : 'text-zinc-400'}
                >
                  <span className="text-primary mr-2">&gt;</span>
                  {line}
                </motion.div>
              ))}
              {textIndex < bootLines.length - 1 && (
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-primary mt-2"
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
