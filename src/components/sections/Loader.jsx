"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("counting");
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const duration = 2800;
    const tick = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase("reveal");
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  useEffect(() => {
    if (phase === "reveal") {
      const t = setTimeout(() => setPhase("exit"), 700);
      return () => clearTimeout(t);
    }
    if (phase === "exit") {
      const t = setTimeout(() => onComplete(), 900);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <div
          key="loader-shell"
          className="fixed inset-0 z-[100] overflow-hidden"
          style={{ background: "#010003" }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ x: "-100%" }}
            animate={phase === "exit" ? { x: "100%" } : { x: "0%" }}
            transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
            style={{ background: "#010003" }}
          >
            {/* Grid pattern background in celestial cyan */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Ambient Cosmic Glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at 50% 50%, rgba(56,189,248,0.15) 0%, rgba(99,102,241,0.08) 35%, transparent 65%)",
              }}
            />

            {/* Center content */}
            <motion.div
              className="relative z-10 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={count >= 35 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Terminal badge */}
              <div
                className="rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md"
                style={{
                  background: "rgba(56, 189, 248, 0.12)",
                  borderColor: "rgba(56, 189, 248, 0.35)",
                  color: "#38bdf8",
                  fontFamily: "'JetBrains Mono', monospace",
                  boxShadow: "0 0 14px rgba(56, 189, 248, 0.2)",
                }}
              >
                ~/portfolio
              </div>

              <motion.h1
                className="text-center text-5xl font-bold tracking-tight text-[#f8fafc] sm:text-6xl"
                initial={{ opacity: 0, letterSpacing: "0.3em" }}
                animate={count >= 25 ? { opacity: 1, letterSpacing: "0.02em" } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "var(--font-heading), 'Space Grotesk', sans-serif" }}
              >
                Prince
                <span style={{ color: "#38bdf8" }}> Kushwaha</span>
              </motion.h1>

              <motion.div
                className="h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, #38bdf8, transparent)",
                  boxShadow: "0 0 10px rgba(56, 189, 248, 0.6)",
                }}
                initial={{ width: 0 }}
                animate={count >= 25 ? { width: 260 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
              />

              <motion.p
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: "#cbd5e1", fontFamily: "'JetBrains Mono', monospace" }}
                initial={{ opacity: 0 }}
                animate={count >= 30 ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                Full-Stack Developer
              </motion.p>
            </motion.div>

            {/* Counter */}
            <motion.div
              className="absolute bottom-10 right-10 sm:bottom-14 sm:right-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span
                className="text-7xl font-bold tabular-nums sm:text-9xl"
                style={{ color: "rgba(56, 189, 248, 0.12)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {String(count).padStart(3, "0")}
              </span>
            </motion.div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full" style={{ background: "rgba(255,255,255,0.05)" }}>
              <motion.div
                className="h-full"
                style={{ background: "linear-gradient(90deg, #7e22ce, #a855f7, #c084fc)" }}
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.04, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
