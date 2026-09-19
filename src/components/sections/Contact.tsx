'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Section from '../ui/Section';
import { personalDetails } from '../../data/portfolio';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission visually since backend isn't hooked up yet
    alert("Message ready to be sent! (Hook up backend to complete)");
  };

  return (
    <Section id="contact" className="min-h-[80vh]" title="Get In Touch" number="06" subtitle="お問い合わせ • Reach Out">
      <div className="flex flex-col gap-12 max-w-5xl mx-auto w-full">

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex flex-col gap-8"
          >
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
              <p className="text-zinc-400 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll get back to you as soon as possible!
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-4">
              <motion.a whileHover={{ x: 10 }} href={`mailto:${personalDetails.email}`} className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-colors shadow-[0_0_0_rgba(249,115,22,0)] group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="font-medium">{personalDetails.email}</span>
              </motion.a>

              <motion.a whileHover={{ x: 10 }} href={`tel:${personalDetails.phone}`} className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-pink-500/20 group-hover:border-pink-500/50 transition-colors shadow-[0_0_0_rgba(236,72,153,0)] group-hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <span className="font-medium">{personalDetails.phone}</span>
              </motion.a>
              
              <motion.a whileHover={{ x: 10 }} href={personalDetails.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-colors shadow-[0_0_0_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
                <span className="font-medium">GitHub</span>
              </motion.a>

              <motion.a whileHover={{ x: 10 }} href={personalDetails.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-colors shadow-[0_0_0_rgba(6,182,212,0)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <span className="font-medium">LinkedIn</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="bg-[#111] border border-zinc-700/50 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors w-full"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="bg-[#111] border border-zinc-700/50 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors w-full"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  className="bg-[#111] border border-zinc-700/50 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors w-full"
                  placeholder="Project Opportunity / Collaboration"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono tracking-widest text-zinc-400 uppercase">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  className="bg-[#111] border border-zinc-700/50 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors w-full resize-none"
                  placeholder="Hi Pragdishwar, I saw your portfolio and would love to discuss..."
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit" 
                className="w-full py-4 rounded-md bg-[#ccff00] text-black font-bold tracking-wider uppercase flex items-center justify-center gap-2 mt-2 hover:bg-[#b3ff00] transition-colors"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
