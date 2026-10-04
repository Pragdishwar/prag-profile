'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects, Project } from '../../data/portfolio';

const ProjectCaseStudy = ({ project, index }: { project: Project, index: number }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-6 sm:p-12 md:p-24 shrink-0">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Visual Preview */}
        <div className="w-full lg:w-3/5 group relative">
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-zinc-950 p-2 md:p-4 shadow-2xl">
            <div className="w-full h-full rounded-lg overflow-hidden relative">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"} 
                alt={project.title} 
                className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              {/* Overlay for inactive state */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Metadata & Information */}
        <div className="w-full lg:w-2/5 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-6 w-full">
            <span className="text-zinc-600 font-mono text-xs tracking-[0.2em] uppercase">0{index + 1}</span>
            <div className="h-px bg-white/10 grow" />
          </div>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-none">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 rounded-md text-zinc-300">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-auto">
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-all text-xs md:text-sm uppercase tracking-wider shrink-0"
              >
                <span>Explore</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors text-xs md:text-sm uppercase tracking-wider shrink-0"
              >
                <span>Source</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal translation.
  // 100% means the full width of all projects.
  // We want to translate exactly (N-1) screen widths.
  // Since the wrapper has width: N * 100vw, translating by -((N-1)/N * 100)% achieves exactly this.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(100 * (projects.length - 1)) / projects.length}%`]);

  return (
    <section id="projects" ref={targetRef} className="relative bg-black">
      
      {/* Desktop Horizontal Scroll (Framer Motion) */}
      <div className="hidden md:block" style={{ height: `${projects.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Fixed Title Header overlay */}
          <div className="absolute top-12 left-6 md:left-12 xl:left-24 z-10 pointer-events-none mix-blend-difference">
            <span className="text-zinc-500 font-mono text-sm tracking-[0.3em] uppercase block mb-2">03 — 開発実績 • Project Archives</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              DEPLOYED ARCHITECTURE
            </h2>
          </div>

          {/* Scroll Progress Bar */}
          <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 xl:left-24 xl:right-24 h-px bg-white/10 z-10">
            <motion.div 
              className="h-full bg-white origin-left"
              style={{ scaleX: scrollYProgress }}
            />
          </div>

          <motion.div 
            style={{ x, width: `${projects.length * 100}vw` }} 
            className="flex h-full"
          >
            {projects.map((project, index) => (
              <ProjectCaseStudy key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Native Horizontal Scroll (CSS Snap) */}
      <div className="md:hidden relative w-full h-[100dvh] flex flex-col">
        {/* Fixed Header for mobile */}
        <div className="absolute top-24 left-6 right-6 z-10 pointer-events-none mix-blend-difference">
          <span className="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase block mb-1">03 — 開発実績 • Project Archives</span>
          <h2 className="text-2xl font-black text-white tracking-tighter leading-none">
            DEPLOYED ARCHITECTURE
          </h2>
        </div>
        
        {/* Scroll Container */}
        <div className="flex w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan-x hide-scrollbar">
          {projects.map((project, index) => (
            <div key={project.id} className="w-screen h-full shrink-0 snap-center snap-always flex items-center justify-center overflow-y-auto">
              {/* Added mt-32 to push content down below the header */}
              <div className="mt-20">
                <ProjectCaseStudy project={project} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
