'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

import { playBlip, playWhoosh } from '../lib/audio';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(navItems[0].name);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = navItems.map(item => document.querySelector(item.href));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement | null;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left shadow-[0_0_10px_rgba(124,58,237,0.8)]"
          style={{ scaleX }}
        />
      )}
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        <a href="#hero" className="text-xl font-bold tracking-tighter text-gradient" onClick={() => { setActiveTab('Home'); playWhoosh(); }} onMouseEnter={playBlip}>
          PA.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === item.name ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                  onMouseEnter={playBlip}
                  onClick={() => { setActiveTab(item.name); playWhoosh(); }}
                >
                  {activeTab === item.name && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full -z-10 shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <MagneticButton>
            <a 
              href="/resume.pdf" 
              download
              onMouseEnter={playBlip}
              onClick={playWhoosh}
              className="px-5 py-2 text-sm font-bold bg-white text-black rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center gap-2"
            >
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Nav (future scope / basic fallback) */}
        <div className="md:hidden">
          <button className="text-zinc-400 hover:text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </nav>
    </header>
  );
}




