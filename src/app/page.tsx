'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="text-center py-8 text-zinc-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Pragdishwar A. All rights reserved.</p>
        <p className="mt-1">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </main>
  );
}
