'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import ProfileExtras from '@/components/sections/ProfileExtras';
import Contact from '@/components/sections/Contact';
import SakuraFall from '@/components/ui/SakuraFall';
import AnimeCursor from '@/components/ui/AnimeCursor';
import SummonJutsu from '@/components/ui/SummonJutsu';
import MatrixRain from '@/components/ui/MatrixRain';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const animeQuotes = [
  '"A ninja who breaks the rules is scum, but a ninja who abandons his friends is worse than scum." - Kakashi Hatake',
  '"I will be the Pirate King!" - Monkey D. Luffy',
  '"It\'s meaningless to just live, and it\'s meaningless to just fight. I want to win." - Ichigo Kurosaki'
];

export default function Home() {
  const [sakuraEnabled, setSakuraEnabled] = useState(false);
  const [summonEnabled, setSummonEnabled] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(false);
  const [matrixEnabled, setMatrixEnabled] = useState(false);
  const [otakuMode, setOtakuMode] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % animeQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Bankai Easter Egg Listener
  useEffect(() => {
    const secretCode = "bankai";
    let input = "";

    const handleKeyDown = (e: KeyboardEvent) => {
      input += e.key.toLowerCase();
      if (input.length > secretCode.length) {
        input = input.substring(input.length - secretCode.length);
      }
      if (input === secretCode) {
        setOtakuMode(prev => !prev);
        // Play Bankai Sound
        const audio = new Audio('https://www.myinstants.com/media/sounds/bleach-bankai_2.mp3');
        audio.play().catch(() => {});
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Listen for terminal events
  useEffect(() => {
    const handleSakura = () => setSakuraEnabled(prev => !prev);
    const handleSummon = () => setSummonEnabled(prev => !prev);
    const handleCursor = () => setCursorEnabled(prev => !prev);
    const handleMatrix = () => setMatrixEnabled(prev => !prev);
    const handleBankai = () => {
      setOtakuMode(prev => !prev);
      const audio = new Audio('https://www.myinstants.com/media/sounds/bleach-bankai_2.mp3');
      audio.play().catch(() => {});
    };

    window.addEventListener('toggle-sakura', handleSakura);
    window.addEventListener('toggle-summon', handleSummon);
    window.addEventListener('toggle-cursor', handleCursor);
    window.addEventListener('toggle-matrix', handleMatrix);
    window.addEventListener('toggle-bankai', handleBankai);

    return () => {
      window.removeEventListener('toggle-sakura', handleSakura);
      window.removeEventListener('toggle-summon', handleSummon);
      window.removeEventListener('toggle-cursor', handleCursor);
      window.removeEventListener('toggle-matrix', handleMatrix);
      window.removeEventListener('toggle-bankai', handleBankai);
    };
  }, []);

  return (
    <>
      {cursorEnabled && <AnimeCursor />}
      {sakuraEnabled && <SakuraFall />}
      {summonEnabled && <SummonJutsu />}
      {matrixEnabled && <MatrixRain />}

      <main className={`flex flex-col min-h-screen ${otakuMode ? 'hue-rotate-90 saturate-200 transition-all duration-1000' : 'transition-all duration-1000'}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ProfileExtras />
        <Contact />
        
        {/* Footer */}
        <footer className="text-center py-16 text-zinc-500 text-sm border-t border-white/5 flex flex-col items-center justify-center gap-2 overflow-hidden w-full">
          <p>© {new Date().getFullYear()} Pragdishwar A.</p>
          <div className="font-mono text-xs tracking-widest uppercase text-zinc-600 mt-2 text-center w-full max-w-4xl px-4 min-h-[3rem] relative mx-auto flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full px-4"
              >
                {animeQuotes[quoteIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </footer>
      </main>
    </>
  );
}
