'use client';

// Deterministic starfield data — zero hydration mismatch and zero CPU runtime overhead
const STARS = [
  { x: 4, y: 12, r: 0.8, o: 0.35 },
  { x: 9, y: 38, r: 1.1, o: 0.5 },
  { x: 13, y: 22, r: 0.6, o: 0.25 },
  { x: 17, y: 8, r: 1.0, o: 0.55 },
  { x: 22, y: 44, r: 0.7, o: 0.3 },
  { x: 27, y: 19, r: 1.1, o: 0.5 },
  { x: 31, y: 33, r: 0.8, o: 0.4 },
  { x: 36, y: 14, r: 0.5, o: 0.25 },
  { x: 41, y: 28, r: 1.2, o: 0.6 },
  { x: 45, y: 9, r: 0.7, o: 0.35 },
  { x: 49, y: 39, r: 0.9, o: 0.45 },
  { x: 54, y: 17, r: 1.2, o: 0.6 },
  { x: 58, y: 42, r: 0.6, o: 0.3 },
  { x: 63, y: 11, r: 1.0, o: 0.5 },
  { x: 67, y: 31, r: 0.8, o: 0.4 },
  { x: 72, y: 22, r: 1.3, o: 0.65 },
  { x: 76, y: 45, r: 0.5, o: 0.2 },
  { x: 80, y: 15, r: 1.1, o: 0.55 },
  { x: 85, y: 36, r: 0.7, o: 0.35 },
  { x: 89, y: 24, r: 1.0, o: 0.45 },
  { x: 93, y: 10, r: 0.8, o: 0.4 },
  { x: 96, y: 33, r: 0.6, o: 0.3 },
  { x: 12, y: 52, r: 0.9, o: 0.4 },
  { x: 28, y: 58, r: 0.7, o: 0.3 },
  { x: 42, y: 54, r: 1.0, o: 0.5 },
  { x: 61, y: 56, r: 0.8, o: 0.35 },
  { x: 75, y: 52, r: 0.6, o: 0.25 },
  { x: 88, y: 58, r: 1.1, o: 0.5 },
];

/**
 * HorizonBloom
 * Completely static, zero-interaction, zero-RAF glowing planetary horizon.
 * Uses hardware-accelerated CSS and SVG to guarantee 0% CPU consumption and no system hangs.
 */
export default function HorizonBloom({
  className = '',
  idPrefix = 'hb',
  positionClass = 'translate-y-20 sm:translate-y-40',
}) {
  return (
    <div
      className={`pointer-events-none relative w-full h-full overflow-hidden select-none bg-[#010003] ${className}`}
      aria-hidden="true"
    >
      {/* ── 1. Static Starfield ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {STARS.map((star, i) => (
          <circle
            key={i}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.r}
            fill="#ffffff"
            opacity={star.o}
          />
        ))}
      </svg>

      {/* ── 2. Entire Horizon Structure ── */}
      <div className={`absolute inset-0 pointer-events-none ${positionClass}`}>
        {/* Deep Atmosphere Celestial Glow (Behind Horizon) */}
        <div
          className="absolute left-1/2 bottom-[10%] -translate-x-1/2 pointer-events-none rounded-full"
          style={{
            width: 'min(125vw, 1300px)',
            height: '560px',
            background:
              'radial-gradient(ellipse 65% 55% at 50% 75%, rgba(56, 189, 248, 0.40) 0%, rgba(99, 102, 241, 0.32) 26%, rgba(147, 51, 234, 0.18) 52%, rgba(15, 23, 42, 0.05) 75%, transparent 85%)',
            filter: 'blur(32px)',
          }}
        />

        {/* Horizontal Sunrise Lens Flare Slit */}
        <div
          className="absolute left-1/2 bottom-[27.2%] -translate-x-1/2 translate-y-1/2 pointer-events-none rounded-full"
          style={{
            width: 'min(85vw, 820px)',
            height: '76px',
            background:
              'radial-gradient(ellipse 75% 35% at 50% 50%, rgba(255, 255, 255, 0.98) 0%, rgba(224, 242, 254, 0.92) 16%, rgba(56, 189, 248, 0.58) 42%, rgba(99, 102, 241, 0.30) 68%, rgba(147, 51, 234, 0.12) 88%, transparent 100%)',
            filter: 'blur(4px)',
          }}
        />

        {/* Center Dawn Point Flare */}
        <div
          className="absolute left-1/2 bottom-[27.2%] -translate-x-1/2 translate-y-1/2 pointer-events-none rounded-full"
          style={{
            width: '160px',
            height: '18px',
            background:
              'radial-gradient(ellipse 85% 55% at 50% 50%, #ffffff 0%, rgba(255, 255, 255, 0.95) 28%, rgba(186, 230, 253, 0.65) 60%, rgba(99, 102, 241, 0.25) 85%, transparent 100%)',
          }}
        />

        {/* Curved Planetary Horizon & Dark Silhouette */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[42%] min-h-[260px] max-h-[460px] pointer-events-none"
          viewBox="0 0 1600 500"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Atmospheric Cyan-Indigo Rim Gradient */}
            <linearGradient id={`${idPrefix}-rimAtmosphere`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="20%" stopColor="#6366f1" stopOpacity="0.25" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="48%" stopColor="#e0f2fe" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="52%" stopColor="#e0f2fe" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#6366f1" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>

            {/* White Razor-Core Rim Gradient */}
            <linearGradient id={`${idPrefix}-rimCore`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="38%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="48%" stopColor="#ffffff" stopOpacity="0.92" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="52%" stopColor="#ffffff" stopOpacity="0.92" />
              <stop offset="62%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <filter id={`${idPrefix}-rimGlowBlur`} x="-20%" y="-30%" width="140%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Planet Silhouette */}
          <path
            d="M -50 700 L -50 210 Q 800 88 1650 210 L 1650 700 Z"
            fill="#010003"
          />

          {/* Glowing Horizon Rim Atmospheric Line */}
          <path
            d="M -50 210 Q 800 88 1650 210"
            fill="none"
            stroke={`url(#${idPrefix}-rimAtmosphere)`}
            strokeWidth="6"
            filter={`url(#${idPrefix}-rimGlowBlur)`}
          />

          {/* Laser Razor Core Crest Line */}
          <path
            d="M -50 210 Q 800 88 1650 210"
            fill="none"
            stroke={`url(#${idPrefix}-rimCore)`}
            strokeWidth="1.8"
          />
        </svg>
      </div>
    </div>
  );
}
