'use client';

import { useState, useRef, useEffect } from 'react';

export default function LuminousType({
  text = '',
  children,
  className = '',
  spotlightColor = 'rgba(56, 189, 248, 0.95)',
  glowColor = 'rgba(129, 140, 248, 0.4)',
  spotlightSize = 280,
  idleDrift = true,
}) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);
  const driftRef = useRef({ angle: 0, animId: null });

  const content = text || children;

  useEffect(() => {
    if (!idleDrift || isHovered) return;

    let animId;
    const animate = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        driftRef.current.angle += 0.015;
        const x = rect.width / 2 + Math.cos(driftRef.current.angle) * (rect.width * 0.38);
        const y = rect.height / 2 + Math.sin(driftRef.current.angle * 1.5) * (rect.height * 0.35);
        setCoords({ x, y });
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [idleDrift, isHovered]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none inline-block ${className}`}
      style={{ overflow: 'visible' }}
    >
      {/* Base Dimmed Text */}
      <div className="opacity-25 transition-opacity duration-300 text-slate-400">
        {content}
      </div>

      {/* Luminous Spotlight Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-200"
        style={{
          color: '#ffffff',
          textShadow: `0 0 20px ${spotlightColor}, 0 0 40px ${glowColor}`,
          maskImage: `radial-gradient(${spotlightSize}px circle at ${coords.x}px ${coords.y}px, black 0%, black 35%, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(${spotlightSize}px circle at ${coords.x}px ${coords.y}px, black 0%, black 35%, transparent 75%)`,
        }}
      >
        {content}
      </div>

      {/* Subtle Glow Reflection Center */}
      <div
        className="pointer-events-none absolute rounded-full blur-2xl opacity-20 transition-all duration-300"
        style={{
          width: spotlightSize * 0.7,
          height: spotlightSize * 0.7,
          left: coords.x - (spotlightSize * 0.35),
          top: coords.y - (spotlightSize * 0.35),
          background: `radial-gradient(circle, ${spotlightColor} 0%, ${glowColor} 50%, transparent 80%)`,
        }}
      />
    </div>
  );
}
