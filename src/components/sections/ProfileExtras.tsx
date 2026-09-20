'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Section from '../ui/Section';
import { education, certifications, languages, interests } from '../../data/portfolio';
import { GitHubCalendar } from 'react-github-calendar';

function AnimeCard({ interest }: { interest: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const playSound = () => {
    if (interest.audio) {
      const audio = new Audio(interest.audio);
      audio.volume = 0.4;
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  return (
    <motion.div 
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={playSound}
      className="glass-card rounded-xl border border-white/10 hover:border-primary/50 transition-colors duration-300 overflow-hidden group flex flex-col bg-white/5 relative"
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-40 w-full overflow-hidden relative pointer-events-none">
        <img src={interest.image} alt={interest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded-md text-xs font-bold text-primary uppercase border border-white/10">
          {interest.type}
        </div>
      </div>
      <div style={{ transform: "translateZ(20px)" }} className="p-5 flex flex-col gap-2 flex-grow pointer-events-none">
        <h3 className="text-xl font-bold text-white">{interest.name}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{interest.description}</p>
      </div>
      {/* Holographic Glare Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.1) 25%, transparent 30%)', backgroundSize: '200% 200%', animation: 'shimmer 2s infinite linear' }} />
    </motion.div>
  );
}

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
    <Section id="profile-extras" className="pt-10 pb-20" title="Background" number="05" subtitle="背景・資格 • Background">
      <div className="flex flex-col gap-16 max-w-5xl mx-auto w-full">
        
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
              <h3 className="text-white text-2xl font-bold tracking-tight mb-2">Education</h3>
            </div>
            <div className="flex flex-col gap-4">
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-primary font-medium">{edu.institution}</h4>
                  <div className="flex justify-between items-center mt-4 text-sm text-zinc-400">
                    <span>{edu.location}</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full border border-white/5">{edu.duration}</span>
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
              <h3 className="text-white text-2xl font-bold tracking-tight mb-2">Languages</h3>
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
          <div className="flex flex-col items-start md:items-end w-full">
            <h3 className="text-white text-2xl font-bold tracking-tight mb-2">Licenses & Certifications</h3>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
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
                  className="text-center z-10 w-full px-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(124,58,237,0.3)]">
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

        {/* Interests & Anime */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-6 w-full mt-12"
        >
          <div className="flex flex-col items-start w-full">
            <h3 className="text-white text-2xl font-bold tracking-tight mb-2">Interests & Anime</h3>
            <p className="text-zinc-400 text-sm">Things that keep me inspired</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: 1000 }}>
            {interests.map((interest, idx) => (
              <AnimeCard key={idx} interest={interest} />
            ))}
          </div>
        </motion.div>

        {/* GitHub Contributions Graph */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-6 w-full mt-12"
        >
          <div className="flex flex-col items-start w-full">
            <h3 className="text-white text-2xl font-bold tracking-tight mb-2">Code Contributions</h3>
            <p className="text-zinc-400 text-sm">Live GitHub contribution graph</p>
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 w-full overflow-x-auto flex justify-center shadow-2xl relative group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="min-w-fit">
              <GitHubCalendar 
                username="Pragdishwar" 
                colorScheme="dark"
                theme={{
                  dark: ['#18181b', '#3b0764', '#6b21a8', '#9333ea', '#c084fc'] // Purple neon theme mapping
                }}
                fontSize={14}
                blockSize={12}
                blockMargin={4}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
