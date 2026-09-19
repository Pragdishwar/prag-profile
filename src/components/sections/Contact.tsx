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
    <Section id="contact" className="min-h-[80vh]" title="Get In Touch" number="06">
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
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors shadow-[0_0_0_rgba(124,58,237,0)] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="font-medium">{personalDetails.email}</span>
              </motion.a>
              
              <motion.a whileHover={{ x: 10 }} href={personalDetails.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors shadow-[0_0_0_rgba(124,58,237,0)] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
                <span className="font-medium">GitHub</span>
              </motion.a>

              <motion.a whileHover={{ x: 10 }} href={personalDetails.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors shadow-[0_0_0_rgba(124,58,237,0)] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]">
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
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="name" className={`text-sm font-medium transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-zinc-400'}`}>Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 w-full"
                    placeholder="John Doe"
                  />
                  {focusedField === 'name' && (
                    <motion.div layoutId="form-focus" className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-primary rounded-b-lg" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                  )}
                </div>
                
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="email" className={`text-sm font-medium transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-zinc-400'}`}>Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 w-full"
                    placeholder="john@example.com"
                  />
                  {focusedField === 'email' && (
                    <motion.div layoutId="form-focus" className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-primary rounded-b-lg" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 relative">
                <label htmlFor="message" className={`text-sm font-medium transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-zinc-400'}`}>Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 w-full resize-none"
                  placeholder="Tell me about your project..."
                />
                {focusedField === 'message' && (
                  <motion.div layoutId="form-focus" className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-primary rounded-b-lg" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                )}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full py-4 rounded-lg bg-primary text-white font-bold tracking-wide hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.2)] mt-2"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
