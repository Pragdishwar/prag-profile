'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    // Ensure ScrollTrigger is registered
    gsap.registerPlugin(ScrollTrigger);

    const element = ref.current;

    const animation = gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === element) {
          t.kill();
        }
      });
    };
  }, []);

  return ref;
}
