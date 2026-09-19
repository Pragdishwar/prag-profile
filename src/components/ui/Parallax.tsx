'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Parallax({ children, speed = 1, className = '' }: { children: React.ReactNode, speed?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const anim = gsap.to(ref.current, {
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    return () => { anim.kill(); };
  }, []);

  return (
    <div ref={ref} data-speed={speed * 0.1} className={className}>
      {children}
    </div>
  );
}

