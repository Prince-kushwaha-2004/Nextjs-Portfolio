'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Clock, Sparkles, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

const OFFICES = [
  {
    id: 'india',
    city: 'Bengaluru',
    country: 'India',
    role: 'Primary Hub (Home Base)',
    timezone: 'Asia/Kolkata',
    offset: 'UTC +5:30',
    coords: { x: 58, y: 46 }, // Percentage across the planet arc
    status: 'Core Hours (Sync & Realtime)',
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.8)',
    desc: 'Full-time engineering, architecture design, and immediate pair programming.',
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    role: 'EMEA Collaboration',
    timezone: 'Europe/London',
    offset: 'UTC +1',
    coords: { x: 38, y: 36 },
    status: 'Overlapping EMEA Morning',
    color: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.8)',
    desc: 'Seamless 4-6 hour live overlap daily for sprint planning and PR reviews.',
  },
  {
    id: 'sf',
    city: 'San Francisco',
    country: 'United States',
    role: 'PST / Americas',
    timezone: 'America/Los_Angeles',
    offset: 'UTC -7',
    coords: { x: 18, y: 40 },
    status: 'Async Standups & Evening Sync',
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.8)',
    desc: 'Daily handover workflow: overnight PR reviews and async ticket turnaround.',
  },
  {
    id: 'tokyo',
    city: 'Tokyo',
    country: 'Japan',
    role: 'APAC Timezone',
    timezone: 'Asia/Tokyo',
    offset: 'UTC +9',
    coords: { x: 78, y: 42 },
    status: 'High Overlap Zone',
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.8)',
    desc: 'Convenient timezone alignment for Asian and Australian partners.',
  },
];

function getTimeForZone(timeZone) {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(new Date());
  } catch {
    return '12:00 PM';
  }
}

export default function FollowTheSun() {
  const [activeOffice, setActiveOffice] = useState(OFFICES[0]);
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const now = {};
      OFFICES.forEach((o) => {
        now[o.id] = getTimeForZone(o.timezone);
      });
      setTimes(now);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[rgba(10,15,30,0.55)] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
      {/* Background glow flares */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full opacity-25 blur-[120px] transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${activeOffice.glow} 0%, rgba(99,102,241,0.2) 60%, transparent 80%)`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-mono font-medium text-sky-300 mb-3">
            <Globe size={13} className="animate-spin" style={{ animationDuration: '14s' }} />
            <span>Features 17 · Global Availability</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Follow the Sun · Zero-Latency Collaboration
          </h3>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Dawn breaks over the globe under each office. Wherever your team is located, I integrate seamlessly into your workflow with live overlap or async delivery.
          </p>
        </div>

        {/* Current Target Live Clock Badge */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-md">
          <Clock size={16} className="text-sky-400" />
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Dawn in {activeOffice.city}
            </div>
            <div className="font-mono text-sm font-bold text-white tabular-nums">
              {times[activeOffice.id] || 'Loading...'} <span className="text-xs text-sky-400 font-normal">({activeOffice.offset})</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3D Planet Curvature & Dawn Horizon Visual ── */}
      <div className="relative my-8 h-44 sm:h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-950 via-[#060c1d] to-[#030712] shadow-inner">
        {/* Starfield particles */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute top-4 left-10 h-1 w-1 rounded-full bg-white animate-ping" />
          <div className="absolute top-12 left-1/4 h-1 w-1 rounded-full bg-sky-200" />
          <div className="absolute top-6 right-1/3 h-1 w-1 rounded-full bg-indigo-200" />
          <div className="absolute top-16 right-20 h-1 w-1 rounded-full bg-white" />
          <div className="absolute top-8 right-12 h-1.5 w-1.5 rounded-full bg-amber-200" />
        </div>

        {/* Curved Planet Earth Horizon */}
        <div
          className="absolute -bottom-[280px] left-1/2 -translate-x-1/2 w-[140%] sm:w-[120%] h-[400px] rounded-[50%] border-t-2 transition-all duration-700 shadow-2xl"
          style={{
            borderColor: activeOffice.color,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(15,23,42,0.98) 0%, rgba(2,6,23,1) 80%)',
            boxShadow: `0 -12px 60px -5px ${activeOffice.glow}, inset 0 20px 40px rgba(255,255,255,0.05)`,
          }}
        >
          {/* Dawn atmosphere glowing ionosphere rim */}
          <div
            className="absolute -top-12 left-0 right-0 h-16 opacity-75 blur-xl transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse 60% 100% at ${activeOffice.coords.x}% 100%, ${activeOffice.color} 0%, rgba(99,102,241,0.5) 45%, transparent 75%)`,
            }}
          />
        </div>

        {/* Dynamic Sun Flare that sweeps to the active office */}
        <motion.div
          className="pointer-events-none absolute bottom-12 h-28 w-28 -translate-x-1/2 rounded-full blur-2xl"
          animate={{
            left: `${activeOffice.coords.x}%`,
          }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
          style={{
            background: `radial-gradient(circle, #ffffff 0%, #fef08a 30%, ${activeOffice.color} 70%, transparent 100%)`,
            opacity: 0.85,
          }}
        />

        {/* Sun Star Core */}
        <motion.div
          className="pointer-events-none absolute bottom-[68px] h-6 w-6 -translate-x-1/2 rounded-full bg-white shadow-[0_0_24px_#fff]"
          animate={{
            left: `${activeOffice.coords.x}%`,
          }}
          transition={{ type: 'spring', stiffness: 90, damping: 20 }}
        />

        {/* Office Pins on the globe arc */}
        <div className="absolute inset-0">
          {OFFICES.map((office) => {
            const isSelected = activeOffice.id === office.id;
            return (
              <button
                key={office.id}
                onClick={() => setActiveOffice(office)}
                className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-110"
                style={{
                  left: `${office.coords.x}%`,
                  top: `${office.coords.y}%`,
                }}
              >
                {/* Pulsing beacon ring */}
                <div className="relative flex items-center justify-center">
                  {isSelected && (
                    <span
                      className="absolute h-9 w-9 rounded-full animate-ping opacity-75"
                      style={{ background: office.color }}
                    />
                  )}
                  <div
                    className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-125"
                    style={{ background: office.color }}
                  >
                    <MapPin size={14} className="text-white drop-shadow" />
                  </div>
                </div>

                {/* City name badge hovering above pin */}
                <div
                  className={`mt-2 rounded-lg px-2.5 py-0.5 text-[11px] font-mono font-medium backdrop-blur-md transition-all ${
                    isSelected
                      ? 'border border-white/30 bg-white/20 text-white shadow-lg scale-105'
                      : 'border border-white/10 bg-black/50 text-slate-300 opacity-70 group-hover:opacity-100'
                  }`}
                >
                  {office.city}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dawn Horizon caption bottom-left */}
        <div className="absolute bottom-3 left-4 flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <Sparkles size={12} className="text-amber-300" />
          <span>Dawn Line: {activeOffice.city} · {activeOffice.status}</span>
        </div>
      </div>

      {/* ── Interactive Office Selection Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {OFFICES.map((office) => {
          const isSelected = activeOffice.id === office.id;
          return (
            <div
              key={office.id}
              onClick={() => setActiveOffice(office)}
              className={`group cursor-pointer rounded-2xl border p-4 transition-all duration-300 ${
                isSelected
                  ? 'border-sky-400/50 bg-sky-950/30 shadow-[0_8px_30px_rgba(56,189,248,0.15)] scale-[1.02]'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: office.color, boxShadow: `0 0 8px ${office.color}` }}
                  />
                  {office.city}
                </span>
                <span className="font-mono text-xs text-sky-400 tabular-nums">
                  {times[office.id] || '--:--'}
                </span>
              </div>

              <div className="text-[11px] font-mono text-slate-400 mb-2">
                {office.country} · {office.offset}
              </div>

              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {office.desc}
              </p>

              <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 text-[10px] font-mono">
                <span className="text-slate-400">{office.role}</span>
                <span className="text-sky-300 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                  Focus <ArrowUpRight size={10} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
