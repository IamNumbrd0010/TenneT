import React, { useEffect, useState } from 'react';

/**
 * Interactive Ambient Glow that responds softly to cursor position
 */
export default function InteractiveBackdrop() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const x = Math.round((e.clientX / window.innerWidth) * 100);
        const y = Math.round((e.clientY / window.innerHeight) * 100);
        setMousePos({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Interactive cursor-following blue radial glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, #2563eb 0%, #06b6d4 50%, transparent 70%)',
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Static ambient atmospheric blue gradient */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/3 left-10 w-[450px] h-[450px] bg-cyan-600/5 rounded-full blur-[140px]" />
    </div>
  );
}
