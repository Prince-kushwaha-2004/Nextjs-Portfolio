"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import HorizonBloom from "@/components/HorizonBloom";

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("counting");
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const duration = 2000;
    const tick = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(100);
        setPhase("reveal");
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (phase === "reveal") {
      const t = setTimeout(() => setPhase("exit"), 250);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <motion.div
      key="loader-panel"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        background: "#010003",
        boxShadow:
          phase === "exit"
            ? "-16px 0 48px rgba(0,0,0,0.85), -4px 0 24px rgba(56,189,248,0.25)"
            : "none",
      }}
      initial={{ x: "0%" }}
      animate={phase === "exit" ? { x: "100%" } : { x: "0%" }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (phase === "exit") {
          onComplete();
        }
      }}
    >
      {/* ── 1. Static Glowing Horizon Bloom Background (matching Hero Section) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-85">
        <HorizonBloom idPrefix="loader" positionClass="translate-y-48 sm:translate-y-32" />
      </div>

      {/* ── 2. Subtle Grid overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />



      {/* ── 4. Center Branding content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-4 px-4"
        initial={{ opacity: 0, y: 16 }}
        animate={count >= 20 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Terminal badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md"
          style={{
            background: "rgba(56, 189, 248, 0.10)",
            borderColor: "rgba(56, 189, 248, 0.35)",
            color: "#38bdf8",
            fontFamily: "'JetBrains Mono', monospace",
            boxShadow: "0 0 16px rgba(56, 189, 248, 0.2)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse"
            style={{ boxShadow: "0 0 8px #10b981" }}
          />
          <span>~/portfolio</span>
        </div>

        <motion.h1
          className="text-center text-4xl font-bold tracking-tight text-[#f8fafc] sm:text-6xl"
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={count >= 20 ? { opacity: 1, letterSpacing: "0.02em" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "var(--font-heading), 'Space Grotesk', sans-serif" }}
        >
          Prince
          <span style={{ color: "#38bdf8" }}> Kushwaha</span>
        </motion.h1>

        <motion.div
          className="h-px"
          style={{
            background: "linear-gradient(90deg, transparent, #38bdf8, #818cf8, transparent)",
            boxShadow: "0 0 12px rgba(56, 189, 248, 0.6)",
          }}
          initial={{ width: 0 }}
          animate={count >= 20 ? { width: 260 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-[#94a3b8]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          initial={{ opacity: 0 }}
          animate={count >= 25 ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          Full-Stack Developer
        </motion.p>
      </motion.div>

      {/* ── 5. Cyber Counter at bottom-right ── */}
      <motion.div
        className="absolute  right-6 bottom-4 sm:bottom-8 sm:right-20 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <span
          className="text-5xl font-bold tabular-nums sm:text-8xl"
          style={{
            color: "rgba(225, 235, 240, 0.43)",
            fontFamily: " sans-serif",
            textShadow: "0 0 30px rgba(56, 189, 248, 0.18)",
          }}
        >
          {String(count).padStart(3, "0")}
        </span>
      </motion.div>

      {/* ── 6. Progress bar at bottom ── */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-full z-20"
        style={{ background: "rgba(255, 255, 255, 0.05)" }}
      >
        <motion.div
          className="h-full"
          style={{
            background:
              "linear-gradient(90deg, #0284c7, #38bdf8, #818cf8, #34d399)",
            boxShadow:
              "0 0 16px rgba(56, 189, 248, 0.8), 0 0 30px rgba(99, 102, 241, 0.5)",
          }}
          initial={{ width: "0%" }}
          animate={{ width: `${count}%` }}
          transition={{ duration: 0.04, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
