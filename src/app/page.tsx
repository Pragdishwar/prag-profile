'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import ProfileExtras from '@/components/sections/ProfileExtras';
import Contact from '@/components/sections/Contact';
import SakuraFall from '@/components/ui/SakuraFall';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <SakuraFall />
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
