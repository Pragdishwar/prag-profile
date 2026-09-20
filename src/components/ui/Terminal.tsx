'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cliCommands, profile, skills } from '../../lib/data';
import { projects } from '../../data/portfolio';
import { playBlip, playWhoosh } from '../../lib/audio';

interface CommandHistory {
  cmd: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [showSpiderman, setShowSpiderman] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showSpiderman) {
      const timer = setTimeout(() => setShowSpiderman(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showSpiderman]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle with Ctrl+~ or just T if not typing
      if ((e.ctrlKey && e.key === '`') || (!isOpen && e.key.toLowerCase() === 't' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        playWhoosh();
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        playWhoosh();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;
    
    let output: React.ReactNode = '';
    
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'help') {
      output = (
        <div className="grid grid-cols-1 gap-1">
          {Object.entries(cliCommands).map(([key, val]) => (
            <div key={key} className="flex">
              <span className="text-primary w-24">{key}</span>
              <span className="text-zinc-400">- {val.desc}</span>
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'whoami') {
      output = (
        <div className="space-y-1">
          <p><span className="text-zinc-500">Name:</span> {profile.name}</p>
          <p><span className="text-zinc-500">Role:</span> {profile.role}</p>
          <p><span className="text-zinc-500">Location:</span> {profile.location}</p>
          <p><span className="text-zinc-500">Status:</span> <span className="text-green-400">{profile.status}</span></p>
        </div>
      );
    } else if (cmd === 'skills') {
      output = (
        <div className="space-y-2">
          <p className="text-primary font-bold">SOFTWARE STACK</p>
          <div className="grid grid-cols-2 gap-x-4">
            {skills.software.map(s => <div key={s.name}>{s.icon} {s.name} ({s.level}%)</div>)}
          </div>
          <p className="text-primary font-bold mt-2">HARDWARE STACK</p>
          <div className="grid grid-cols-2 gap-x-4">
            {skills.hardware.map(s => <div key={s.name}>{s.icon} {s.name} ({s.level}%)</div>)}
          </div>
        </div>
      );
    } else if (cmd === 'skills sw') {
      output = (
        <div className="grid grid-cols-2 gap-x-4">
          {skills.software.map(s => <div key={s.name}>{s.icon} {s.name} ({s.level}%)</div>)}
        </div>
      );
    } else if (cmd === 'skills hw') {
      output = (
        <div className="grid grid-cols-2 gap-x-4">
          {skills.hardware.map(s => <div key={s.name}>{s.icon} {s.name} ({s.level}%)</div>)}
        </div>
      );
    } else if (cmd === 'projects') {
      output = (
        <div className="space-y-2">
          <p className="text-primary font-bold">PROJECTS</p>
          <ul className="list-disc pl-4">
            {projects.map(p => (
              <li key={p.id}>
                {p.title} - {p.techStack.slice(0, 3).join(' · ')}
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (cmd === 'stats') {
      output = (
        <div className="space-y-1">
          <p><span className="text-zinc-500">Projects:</span> {projects.length}+</p>
          <p><span className="text-zinc-500">System Uptime:</span> 99.7%</p>
          <p><span className="text-zinc-500">Commits:</span> 847</p>
          <p><span className="text-zinc-500">JP Level:</span> N4</p>
        </div>
      );
    } else if (cmd === 'lang jp') {
      output = <span className="text-green-400">システム言語を日本語に切り替えました。 (Simulated)</span>;
    } else if (cmd === 'lang en') {
      output = <span className="text-green-400">System language switched to English. (Simulated)</span>;
    } else if (cmd === 'spiderman') {
      output = <span className="text-red-500 font-mono">With great power comes great responsibility...</span>;
      setShowSpiderman(true);
      setIsOpen(false);
    } else if (cmd === 'matrix') {
      output = <span className="text-green-500 font-mono">Wake up, Neo... The Matrix has you.</span>;
    } else if (cmd === 'sakura') {
      output = <span className="text-pink-400 font-mono">Sakura Fall toggled!</span>;
      window.dispatchEvent(new CustomEvent('toggle-sakura'));
    } else if (cmd === 'summon') {
      output = <span className="text-orange-400 font-mono">Kuchiyose no Jutsu!</span>;
      window.dispatchEvent(new CustomEvent('toggle-summon'));
    } else if (cmd === 'cursor') {
      output = <span className="text-purple-400 font-mono">Custom cursor toggled!</span>;
      window.dispatchEvent(new CustomEvent('toggle-cursor'));
    } else if (cmd === 'bankai') {
      output = <span className="text-red-600 font-bold font-mono">BAN... KAI!</span>;
      window.dispatchEvent(new CustomEvent('toggle-bankai'));
    } else {
      output = <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>;
    }

    setHistory([...history, { cmd, output }]);
    setInput('');
  };

  return (
    <>
      {/* Floating Hint */}
      {!isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-zinc-400 z-50 backdrop-blur-md hidden md:flex items-center gap-2 cursor-pointer hover:bg-primary/20 hover:border-primary/50 hover:text-white hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all"
          onClick={() => setIsOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
          Press [ T ] for Terminal
        </motion.div>
      )}

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 bottom-4 md:inset-auto md:bottom-6 md:right-6 md:w-[500px] h-[400px] bg-zinc-950/90 border border-white/10 rounded-xl z-[100] backdrop-blur-xl shadow-2xl flex flex-col font-mono text-sm overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
                <span className="text-zinc-300 text-xs font-semibold tracking-wider">SYSTEM_TERMINAL</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-4 overflow-y-auto overflow-x-hidden text-zinc-300 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <div className="mb-4 text-zinc-500">
                <p>Pragdishwar OS [Version 2.4.1-pro]</p>
                <p>(c) 2026 Pragdishwar. All rights reserved.</p>
                <p className="mt-2">Type 'help' to see available commands.</p>
              </div>

              {history.map((item, i) => (
                <div key={i} className="mb-3">
                  <div className="flex gap-2 text-zinc-400">
                    <span className="text-primary">guest@pragd:~$</span>
                    <span>{item.cmd}</span>
                  </div>
                  <div className="mt-1 text-zinc-300">{item.output}</div>
                </div>
              ))}
              
              <div ref={endOfMessagesRef} />

              <form onSubmit={handleCommand} className="flex gap-2 mt-2">
                <span className="text-primary">guest@pragd:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key !== 'Enter' && e.key !== 'Escape') {
                      playBlip();
                    }
                  }}
                  className="flex-1 bg-transparent outline-none text-zinc-100 placeholder:text-zinc-700"
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Spiderman Easter Egg */}
      {showSpiderman && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden flex items-center justify-center bg-red-900/20 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0], rotate: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute"
          >
            <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
              <path d="M12 2L12 22M2 12L22 12M5 5L19 19M5 19L19 5M12 2A10 10 0 0 0 2 12M12 2A10 10 0 0 1 22 12M12 22A10 10 0 0 1 2 12M12 22A10 10 0 0 0 22 12" />
              <path d="M12 6A6 6 0 0 0 6 12M12 6A6 6 0 0 1 18 12M12 18A6 6 0 0 1 6 12M12 18A6 6 0 0 0 18 12" />
            </svg>
          </motion.div>
          
          {/* Spiderman dropping */}
          <motion.div
            initial={{ y: -500 }}
            animate={{ y: [ -500, 50, 20, 50, -500 ] }}
            transition={{ duration: 4, times: [0, 0.2, 0.4, 0.8, 1] }}
            className="absolute top-0 right-1/4 flex flex-col items-center drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]"
          >
            <div className="w-1 h-32 bg-white/80 shadow-[0_0_10px_white]" />
            <div className="text-[6rem]">🕷️</div>
          </motion.div>
        </div>
      )}
    </>
  );
}
