'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from '../ui/Section';
import { projects, Project } from '../../data/portfolio';

const ProjectCaseStudy = ({ project, index }: { project: Project, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center py-16 md:py-24 border-b border-white/5 last:border-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}
    >
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
        <div className="flex items-center gap-4 mb-6">
          <span className="text-zinc-600 font-mono text-xs tracking-[0.2em] uppercase">0{index + 1}</span>
          <div className="h-px bg-white/10 grow" />
        </div>
        
        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
          {project.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map(tech => (
            <span key={tech} className="px-3 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 rounded-md text-zinc-300">
              {tech}
            </span>
          ))}
        </div>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-lg">
          {project.description}
        </p>

        <div className="flex gap-4 mt-auto">
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-all text-sm uppercase tracking-wider"
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
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
            >
              <span>Source</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <Section id="projects" title="Systems & Architecture" number="03" subtitle="開発実績 • Featured Work">
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCaseStudy key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
