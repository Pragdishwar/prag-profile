'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 w-full max-w-2xl bg-black/50 border border-white/10 rounded-xl p-8 backdrop-blur-md shadow-2xl font-mono text-sm"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-zinc-500 text-xs">SYSTEM_ERROR_404</span>
        </div>

        <div className="text-green-500 flex flex-col gap-4">
          <p>guest@pragd:~$ locate destination</p>
          <p className="text-red-400">Error: Directory or file not found in current sector.</p>
          <p>guest@pragd:~$ analyze cause</p>
          <p className="text-zinc-300">
            [ OK ] Security protocols active<br/>
            [ OK ] Core systems online<br/>
            <span className="text-red-400">[FAIL] Trajectory mapped to non-existent coordinate</span>
          </p>
          
          <div className="mt-8">
            <p className="text-zinc-400 mb-4">// Rerouting connection to safety...</p>
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-white/5 border border-white/10 text-white font-mono hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all rounded-md shadow-[0_0_15px_rgba(124,58,237,0.1)] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              sudo systemctl restart --home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
