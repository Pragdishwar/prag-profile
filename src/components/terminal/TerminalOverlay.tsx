'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, profile, projects, stats, cliCommands, type Lang } from '@/lib/data';

interface TerminalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

type OutputLine = {
  id: number;
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
};

let idCounter = 0;

function processCommand(cmd: string, lang: Lang, onLangChange: (l: Lang) => void): OutputLine[] {
  const c = cmd.trim().toLowerCase();
  const id = () => ++idCounter;

  if (c === 'help') {
    return [
      { id: id(), type: 'output', content: '┌─ AVAILABLE COMMANDS ────────────────────────────────' },
      ...Object.entries(cliCommands).map(([k, v]) => ({
        id: id(), type: 'output' as const,
        content: `│  ${k.padEnd(16)} — ${lang === 'en' ? v.desc : v.descJP}`,
      })),
      { id: id(), type: 'output', content: '└─────────────────────────────────────────────────────' },
    ];
  }
  if (c === 'whoami') {
    return [
      { id: id(), type: 'success', content: `Operator   : ${profile.name}` },
      { id: id(), type: 'output', content: `Handle     : @${profile.handle}` },
      { id: id(), type: 'output', content: `Role       : ${profile.role}` },
      { id: id(), type: 'output', content: `System Ver : ${profile.systemVersion}` },
      { id: id(), type: 'output', content: `JP Level   : ${profile.japaneseLevel}` },
      { id: id(), type: 'output', content: `Uptime     : ${profile.uptime}` },
      { id: id(), type: 'output', content: `Status     : ${profile.status}` },
    ];
  }
  if (c === 'projects') {
    return projects.flatMap(p => [
      { id: id(), type: 'success' as const, content: `▸ ${p.name}` },
      { id: id(), type: 'output' as const, content: `  Type   : ${p.type}` },
      { id: id(), type: 'output' as const, content: `  Status : ${p.status}` },
      { id: id(), type: 'output' as const, content: `  Stack  : ${p.stack.join(', ')}` },
    ]);
  }
  if (c === 'skills' || c === 'skills hw' || c === 'skills sw') {
    const showHW = c !== 'skills sw';
    const showSW = c !== 'skills hw';
    const lines: OutputLine[] = [];
    if (showHW) {
      lines.push({ id: id(), type: 'success', content: '⬡ HARDWARE STACK' });
      skills.hardware.forEach(s => lines.push({
        id: id(), type: 'output',
        content: `  ${s.name.padEnd(22)} [${'█'.repeat(Math.floor(s.level / 10))}${'░'.repeat(10 - Math.floor(s.level / 10))}] ${s.level}%`,
      }));
    }
    if (showSW) {
      lines.push({ id: id(), type: 'success', content: '◈ SOFTWARE STACK' });
      skills.software.forEach(s => lines.push({
        id: id(), type: 'output',
        content: `  ${s.name.padEnd(22)} [${'█'.repeat(Math.floor(s.level / 10))}${'░'.repeat(10 - Math.floor(s.level / 10))}] ${s.level}%`,
      }));
    }
    return lines;
  }
  if (c === 'stats') {
    return stats.map(s => ({
      id: id(), type: 'output' as const,
      content: `${(lang === 'en' ? s.label : s.labelJP).padEnd(20)}: ${s.value}${s.suffix}`,
    }));
  }
  if (c === 'lang jp') {
    onLangChange('jp');
    return [{ id: id(), type: 'success', content: 'システム言語を日本語に変更しました。UI updated → 日本語' }];
  }
  if (c === 'lang en') {
    onLangChange('en');
    return [{ id: id(), type: 'success', content: 'Language set to English. UI updated → EN' }];
  }
  if (c === 'matrix') {
    return [
      { id: id(), type: 'success', content: 'Initiating matrix protocol...' },
      { id: id(), type: 'output', content: '起動中... ███████████ DECRYPTING REALITY' },
      { id: id(), type: 'output', content: 'Wake up, Neo. The Matrix has you.' },
      { id: id(), type: 'output', content: 'フォローしてください 白いウサギを... 🐇' },
    ];
  }
  if (c === 'clear') return [];
  if (c === '') return [];
  return [{ id: id(), type: 'error', content: `Command not found: '${cmd}'. Type 'help' for a list.` }];
}

export default function TerminalOverlay({ isOpen, onClose, lang, onLangChange }: TerminalOverlayProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    { id: 0, type: 'success', content: 'PRAG-PROFILE CLI v2.4.1 — Type \'help\' for a list of commands.' },
    { id: -1, type: 'output', content: 'システム準備完了。接続確立。' },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const submitCommand = useCallback(() => {
    const cmd = input.trim();
    const echo: OutputLine = { id: ++idCounter, type: 'input', content: `> ${cmd}` };

    if (cmd.toLowerCase() === 'clear') {
      setHistory([echo]);
      setInput('');
      return;
    }

    const results = processCommand(cmd, lang, onLangChange);
    setHistory(prev => [...prev, echo, ...results]);
    if (cmd) {
      setCmdHistory(prev => [cmd, ...prev.slice(0, 49)]);
    }
    setHistIdx(-1);
    setInput('');
  }, [input, lang, onLangChange]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') { submitCommand(); return; }
    if (e.key === 'ArrowUp') {
      setHistIdx(prev => {
        const next = Math.min(prev + 1, cmdHistory.length - 1);
        setInput(cmdHistory[next] || '');
        return next;
      });
      e.preventDefault();
    }
    if (e.key === 'ArrowDown') {
      setHistIdx(prev => {
        const next = Math.max(prev - 1, -1);
        setInput(next === -1 ? '' : cmdHistory[next] || '');
        return next;
      });
      e.preventDefault();
    }
  };

  const lineColors: Record<string, string> = {
    input: '#00ff9d',
    output: '#64748b',
    error: '#ff3366',
    success: '#38bdf8',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(3, 7, 18, 0.92)', backdropFilter: 'blur(16px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="w-full max-w-3xl rounded-lg overflow-hidden"
            style={{
              background: '#080d1a',
              border: '1px solid rgba(0,255,157,0.25)',
              boxShadow: '0 0 0 1px rgba(0,255,157,0.05), 0 0 60px rgba(0,255,157,0.08)',
              maxHeight: '70vh',
            }}
            initial={{ y: 32, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 32, scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid rgba(0,255,157,0.1)' }}>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ff3366', opacity: 0.8 }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#f59e0b', opacity: 0.8 }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#00ff9d', opacity: 0.8 }} />
                </div>
                <span className="font-mono text-xs text-glow-green" style={{ letterSpacing: '0.15em' }}>
                  PRAG-CLI — ターミナルモード
                </span>
              </div>
              <button onClick={onClose} className="font-mono text-xs hover:text-glow-red transition-all"
                style={{ color: '#374151' }}>
                ESC
              </button>
            </div>

            {/* Output area */}
            <div className="overflow-y-auto p-4 space-y-1" style={{ height: '400px', fontFamily: 'IBM Plex Mono, monospace' }}>
              {history.map(line => (
                <div key={line.id} className="text-xs leading-relaxed" style={{ color: lineColors[line.type] }}>
                  {line.content}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input line */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderTop: '1px solid rgba(0,255,157,0.1)' }}>
              <span className="font-mono text-xs text-glow-green">{'>'}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent font-mono text-xs outline-none"
                style={{ color: '#00ff9d', caretColor: '#00ff9d' }}
                placeholder="enter command..."
                spellCheck={false}
                autoComplete="off"
              />
              <span className="cursor-blink font-mono text-xs text-glow-green">█</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
