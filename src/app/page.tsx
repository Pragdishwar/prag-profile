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
  const [cursorEnabled, setCursorEnabled] = useState(true);
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

  return (
    <>
      {cursorEnabled && <AnimeCursor />}
      {sakuraEnabled && <SakuraFall />}
      {summonEnabled && <SummonJutsu />}
      
      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50">
        <button 
          onClick={() => setCursorEnabled(!cursorEnabled)}
          className="bg-white/5 border border-white/10 p-3 rounded-full text-zinc-400 backdrop-blur-md hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all flex items-center justify-center group outline-none"
          title="Toggle Custom Cursor"
        >
          <span className={`text-xl transition-transform ${cursorEnabled ? 'scale-110' : 'scale-90 opacity-50 grayscale'}`}>🗡️</span>
        </button>

        <button 
          onClick={() => setSakuraEnabled(!sakuraEnabled)}
          className="bg-white/5 border border-white/10 p-3 rounded-full text-zinc-400 backdrop-blur-md hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all flex items-center justify-center group outline-none"
          title="Toggle Sakura Fall"
        >
          <span className={`text-xl transition-transform ${sakuraEnabled ? 'scale-110' : 'scale-90 opacity-50 grayscale'}`}>🌸</span>
        </button>

        <button 
          onClick={() => setSummonEnabled(!summonEnabled)}
          className="bg-white/5 border border-white/10 p-3 rounded-full text-zinc-400 backdrop-blur-md hover:bg-orange-500/20 hover:border-orange-500/50 hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all flex items-center justify-center group outline-none"
          title="Summoning Jutsu"
        >
          <span className={`text-xl transition-transform ${summonEnabled ? 'scale-110' : 'scale-90 opacity-50 grayscale'}`}>📜</span>
        </button>
      </div>

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
