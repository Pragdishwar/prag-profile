'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import ProfileExtras from '@/components/sections/ProfileExtras';
import Contact from '@/components/sections/Contact';
import SakuraFall from '@/components/ui/SakuraFall';
import { useState } from 'react';

export default function Home() {
  const [sakuraEnabled, setSakuraEnabled] = useState(false);

  return (
    <main className="flex flex-col min-h-screen">
      {sakuraEnabled && <SakuraFall />}
      
      {/* Floating Sakura Toggle */}
      <button 
        onClick={() => setSakuraEnabled(!sakuraEnabled)}
        className="fixed bottom-6 left-6 bg-white/5 border border-white/10 p-3 rounded-full text-zinc-400 z-50 backdrop-blur-md hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all flex items-center justify-center group outline-none"
        title="Toggle Sakura Fall"
      >
        <span className={`text-xl transition-transform ${sakuraEnabled ? 'scale-110' : 'scale-90 opacity-50 grayscale'}`}>🌸</span>
      </button>
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ProfileExtras />
      <Contact />
      
      {/* Footer */}
      <footer className="text-center py-16 text-zinc-500 text-sm border-t border-white/5 flex flex-col items-center justify-center gap-2">
        <p>© {new Date().getFullYear()} Pragdishwar A.</p>
        <p className="font-mono text-xs tracking-widest uppercase text-zinc-600 mt-2">With great power comes great responsibility.</p>
      </footer>
    </main>
  );
}
