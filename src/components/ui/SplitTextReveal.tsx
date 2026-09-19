'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function SplitTextReveal({ text, className = '' }: { text: string, className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const chars = ref.current.querySelectorAll('.split-char');
    
    const anim = gsap.fromTo(chars, 
      { opacity: 0, y: 50, rotateX: -90 },
      {
        opacity: 1, 
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.02,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <h2 ref={ref} className={"text-gradient text-4xl md:text-5xl font-bold tracking-tight mb-4 " + className} style={{ perspective: "1000px" }}>
      {text.split('').map((char, i) => (
        <span key={i} className="split-char inline-block origin-bottom" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
          {char}
        </span>
      ))}
    </h2>
  );
}
