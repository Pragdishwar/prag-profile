'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Variants, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Section from '../ui/Section';
import { projects, Project } from '../../data/portfolio';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } }
};

// Simple 3D Tilt component for cards
const TiltCard = ({ children, project, onClick }: { children: React.ReactNode, project: Project, onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-card cursor-pointer overflow-hidden flex flex-col h-full relative"
    >
      <div style={{ transform: "translateZ(30px)", display: "flex", flexDirection: "column", height: "100%" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');
  
  const selectedProject = projects.find(p => p.id === selectedId);

  const categories = ['All', 'Web', 'AI', 'IoT', 'Mobile'];
  
  const getCategory = (tech: string[]) => {
    const t = tech.join(' ').toLowerCase();
    if (t.includes('flutter') || t.includes('dart') || t.includes('mobile')) return 'Mobile';
    if (t.includes('yolo') || t.includes('tesseract') || t.includes('gemini') || t.includes('opencv') || t.includes('ai')) return 'AI';
    if (t.includes('esp32') || t.includes('iot')) return 'IoT';
    return 'Web';
  };

  const filteredProjects = projects.filter(p => filter === 'All' || getCategory(p.techStack) === filter);

  return (
    <Section id="projects">
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8" />
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-primary text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]' : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: 1000 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                layoutId={`card-container-${project.id}`}
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <TiltCard project={project} onClick={() => setSelectedId(project.id)}>
                  <motion.div layoutId={`card-image-container-${project.id}`} className="w-full h-48 relative overflow-hidden">
                    <motion.img 
                      layoutId={`card-image-${project.id}`}
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-900/80 to-transparent" />
                  </motion.div>

                  <div className="p-6 flex flex-col grow bg-black/20">
                    <motion.h3 
                      layoutId={`card-title-${project.id}`}
                      className="text-xl font-bold text-white mb-2"
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      layoutId={`card-desc-${project.id}`}
                      className="text-zinc-400 text-sm mb-6 grow line-clamp-3"
                    >
                      {project.description}
                    </motion.p>
                    
                    <motion.div layoutId={`card-tags-${project.id}`} className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-zinc-300">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-zinc-300">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </motion.div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`card-container-${selectedProject.id}`}
                className="bg-zinc-900 border border-white/10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div layoutId={`card-image-container-${selectedProject.id}`} className="w-full h-64 md:h-80 relative">
                  <motion.img 
                    layoutId={`card-image-${selectedProject.id}`}
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-900 to-transparent" />
                  
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                </motion.div>

                <div className="p-6 md:p-8 flex flex-col gap-6">
                  <div>
                    <motion.h3 
                      layoutId={`card-title-${selectedProject.id}`}
                      className="text-2xl md:text-3xl font-bold text-white mb-2"
                    >
                      {selectedProject.title}
                    </motion.h3>
                    <motion.div layoutId={`card-tags-${selectedProject.id}`} className="flex flex-wrap gap-2 mt-4">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 text-sm font-medium bg-primary/20 text-primary border border-primary/30 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  <div className="h-px w-full bg-white/10" />

                  <motion.p 
                    layoutId={`card-desc-${selectedProject.id}`}
                    className="text-zinc-300 leading-relaxed text-lg"
                  >
                    {selectedProject.longDescription || selectedProject.description}
                  </motion.p>
                  
                  <div className="flex gap-4 mt-4">
                    {selectedProject.liveLink && (
                      <a 
                        href={selectedProject.liveLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a 
                        href={selectedProject.githubLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
