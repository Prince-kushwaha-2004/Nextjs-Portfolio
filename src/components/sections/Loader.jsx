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
        /* Outer div: covers screen immediately with solid dark bg — no animation delay */
        <div
          key="loader-shell"
          className="fixed inset-0 z-[100] overflow-hidden"
          style={{ background: "#0d1117" }}
        >
          {/* Sliding panel animates in from left, exits to right */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ x: "-100%" }}
            animate={phase === "exit" ? { x: "100%" } : { x: "0%" }}
            transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
            style={{ background: "#0d1117" }}
          >
          {/* Grid pattern background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(#58a6ff 1px, transparent 1px), linear-gradient(90deg, #58a6ff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(88,166,255,0.08) 0%, transparent 65%)",
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
              className="rounded-full border px-4 py-1.5 text-xs font-semibold"
              style={{
                background: "rgba(88,166,255,0.08)",
                borderColor: "rgba(88,166,255,0.3)",
                color: "#58a6ff",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              ~/portfolio
            </div>

            <motion.h1
              className="text-center text-5xl font-bold tracking-tight text-white sm:text-6xl"
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              animate={count >= 25 ? { opacity: 1, letterSpacing: "0.02em" } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Prince
              <span style={{ color: "#58a6ff" }}> Kushwaha</span>
            </motion.h1>

            <motion.div
              className="h-px"
              style={{ background: "linear-gradient(90deg, transparent, #58a6ff, transparent)" }}
              initial={{ width: 0 }}
              animate={count >= 25 ? { width: 260 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            />

            <motion.p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: "#8d96a0", fontFamily: "'JetBrains Mono', monospace" }}
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
              style={{ color: "rgba(88,166,255,0.08)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {String(count).padStart(3, "0")}
            </span>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full" style={{ background: "rgba(255,255,255,0.05)" }}>
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(90deg, #58a6ff, #a371f7)" }}
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
