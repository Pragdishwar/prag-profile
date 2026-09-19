'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import { education, certifications, languages } from '../../data/portfolio';

export default function ProfileExtras() {
  const [certIndex, setCertIndex] = useState(0);

  const nextCert = () => setCertIndex((prev) => (prev + 1) % certifications.length);
  const prevCert = () => setCertIndex((prev) => (prev - 1 + certifications.length) % certifications.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextCert();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="profile-extras" className="pt-10 pb-20">
      <div className="flex flex-col gap-16 max-w-5xl ml-auto mr-auto w-full">
        
        {/* Education & Languages Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-white text-3xl font-bold tracking-tight mb-2">Education</h2>
              <div className="h-1 w-16 bg-primary rounded-full" />
            </div>
            <div className="flex flex-col gap-4">
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-primary font-medium">{edu.institution}</h4>
                  <div className="flex justify-between items-center mt-4 text-sm text-zinc-400">
                    <span>{edu.location}</span>
                    <span className="pl-3 pr-3 pt-1 pb-1 bg-white/5 rounded-full border border-white/5">{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-white text-3xl font-bold tracking-tight mb-2">Languages</h2>
              <div className="h-1 w-16 bg-primary rounded-full" />
            </div>
            <div className="glass-card p-8 rounded-xl border border-white/10 flex flex-col gap-8 h-full justify-center">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-white font-medium text-lg flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                      {lang.name}
                    </span>
                    <span className="text-primary text-sm font-bold tracking-wider uppercase">{lang.proficiency}</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: lang.proficiency === 'Native' ? '100%' : lang.proficiency.includes('Professional') ? '85%' : '60%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 * idx }}
                      className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Certifications Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-8 w-full mt-8"
        >
          <div className="text-center flex flex-col items-center">
            <h2 className="text-white text-3xl font-bold tracking-tight mb-2">Licenses & Certifications</h2>
            <div className="h-1 w-24 bg-primary rounded-full mb-6" />
          </div>

          <div className="relative w-full max-w-4xl ml-auto mr-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden relative h-[220px] rounded-2xl glass-card border border-white/10 flex items-center justify-center p-8 shadow-2xl">
              
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={certIndex}
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -50 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="text-center z-10 w-full pl-12 pr-12"
                >
                  <div className="w-16 h-16 ml-auto mr-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15v5s3-1.5 5-5c0-3.5-5-5-5-5s-5 1.5-5 5c0 3.5 3 5 5 5z"/><path d="M12 15V8"/><circle cx="12" cy="5" r="3"/></svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{certifications[certIndex]}</h3>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <button onClick={prevCert} className="absolute left-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors z-20 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              
              <button onClick={nextCert} className="absolute right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors z-20 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {certifications.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCertIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === certIndex ? 'w-8 bg-primary shadow-[0_0_10px_rgba(124,58,237,0.5)]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
