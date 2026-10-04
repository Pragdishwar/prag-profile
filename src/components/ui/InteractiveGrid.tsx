'use client';

import { useEffect, useRef } from 'react';

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const mouse = { x: -1000, y: -1000 };

    const updateSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const gridSize = 45;
    const connectionDistance = 100;
    
    const points: {x: number, y: number, basePathX: number, basePathY: number, offset: number}[] = [];
    
    const initPoints = () => {
      points.length = 0;
      for (let x = 0; x <= width + gridSize; x += gridSize) {
        for (let y = 0; y <= height + gridSize; y += gridSize) {
          points.push({
            x,
            y,
            basePathX: x,
            basePathY: y,
            offset: Math.random() * 1000
          });
        }
      }
    };
    
    initPoints();
    window.addEventListener('resize', initPoints);

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      
      points.forEach(point => {
        // Subtle drift
        const dx = Math.sin((time + point.offset) * 0.0005) * 1.5;
        const dy = Math.cos((time + point.offset) * 0.0005) * 1.5;
        
        point.x = point.basePathX + dx;
        point.y = point.basePathY + dy;

        // Interaction with mouse
        const distToMouse = Math.hypot(point.x - mouse.x, point.y - mouse.y);
        const radius = distToMouse < 200 ? 1.5 : 0.8;
        const opacity = distToMouse < 200 ? 0.8 : 0.15;

        if (distToMouse < 200) {
          const angle = Math.atan2(point.y - mouse.y, point.x - mouse.x);
          const pushDistance = (200 - distToMouse) * 0.05;
          point.x += Math.cos(angle) * pushDistance;
          point.y += Math.sin(angle) * pushDistance;
        }

        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      // Draw connections
      ctx.lineWidth = 1;
      
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          // Optimization: early exit based on max possible distance (gridSize * 1.5 is an approximation since they drift)
          if (Math.abs(dx) > connectionDistance || Math.abs(dy) > connectionDistance) continue;

          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < connectionDistance) {
            const opacity = 1 - (dist / connectionDistance);
            
            // Check if near mouse to boost connection opacity
            const midX = (points[i].x + points[j].x) / 2;
            const midY = (points[i].y + points[j].y) / 2;
            const distToMouse = Math.hypot(midX - mouse.x, midY - mouse.y);
            
            const finalOpacity = distToMouse < 200 ? opacity * 0.4 : opacity * 0.03;
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${finalOpacity})`;
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('resize', initPoints);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-50 transition-opacity duration-1000"
    />
  );
}
