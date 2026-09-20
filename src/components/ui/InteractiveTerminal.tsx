'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalProps {
  onCommand: (cmd: string) => void;
}

export default function InteractiveTerminal({ onCommand }: TerminalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output'; text: string }[]>([
    { type: 'output', text: 'Prag OS v1.0.0. Type "help" for a list of commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle with Ctrl+` or Cmd+`
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'input' as const, text: `> ${input}` }];
    
    setInput('');

    let response = '';
    switch (cmd) {
      case 'help':
        response = 'Available commands: \n- sakura : Toggle Sakura Fall \n- summon : Summoning Jutsu \n- cursor : Toggle Anime Cursor \n- bankai : ??? \n- clear : Clear terminal';
        break;
      case 'clear':
        setHistory([{ type: 'output', text: 'Terminal cleared.' }]);
        return;
      case 'sakura':
        response = 'Toggled Sakura Fall.';
        onCommand('sakura');
        break;
      case 'summon':
        response = 'Kuchiyose no Jutsu!';
        onCommand('summon');
        break;
      case 'cursor':
        response = 'Toggled custom cursor.';
        onCommand('cursor');
        break;
      case 'bankai':
        response = 'BAN...KAI!';
        onCommand('bankai');
        break;
      default:
        response = `Command not found: ${cmd}. Type "help" for available commands.`;
    }

    setHistory([...newHistory, { type: 'output', text: response }]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 bg-zinc-900 border border-white/10 p-4 rounded-full text-zinc-400 z-50 hover:text-primary hover:border-primary/50 transition-all group flex items-center justify-center shadow-lg"
        title="Open Terminal (Ctrl + `)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 left-6 w-80 md:w-96 h-80 bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-xl flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)] z-50 overflow-hidden font-mono text-sm"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
              <span className="text-zinc-400 text-xs tracking-wider">TERMINAL (Ctrl+`)</span>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-red-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            
            {/* Terminal Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
              {history.map((msg, idx) => (
                <div key={idx} className={`${msg.type === 'input' ? 'text-primary' : 'text-zinc-300'} whitespace-pre-wrap`}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-white/10 flex items-center gap-2 bg-black/40">
              <span className="text-primary">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-zinc-100 placeholder:text-zinc-600"
                placeholder="Type a command..."
                spellCheck="false"
                autoComplete="off"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
