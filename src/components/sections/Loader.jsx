"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("counting"); // counting → reveal → exit
  const rafRef = useRef(null);
  const startRef = useRef(null);

  /* ─── Counter: 0 → 100 over ~2.2s with easing ────────────────── */
  useEffect(() => {
    const duration = 3200;
    const tick = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase("reveal");
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ─── After reveal animation, trigger exit ────────────────────── */
  useEffect(() => {
    if (phase === "reveal") {
      const timer = setTimeout(() => setPhase("exit"), 900);
      return () => clearTimeout(timer);
    }
    if (phase === "exit") {
      const timer = setTimeout(() => onComplete(), 1200);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          exit={{ x: "100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          animate={phase === "exit" ? { x: "100%" } : { x: "0%" }}
        >
          {/* ── Slide panel coming from left ──────────────────── */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundColor: "#04060e",
              backgroundImage:
                "radial-gradient(circle at 18% 15%, rgba(46, 81, 209, 0.151), transparent 38%), radial-gradient(circle at 82% 45%, rgba(38, 98, 255, 0.18), transparent 41%), radial-gradient(circle at 55% 88%, rgba(12, 36, 107, 0.35), transparent 35%)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 2.4, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* ── Name reveal at center (appears at 50%) ─────── */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={
              count >= 50
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="playto-serif text-5xl text-center font-bold text-white sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              animate={
                count >= 30
                  ? { opacity: 1, letterSpacing: "0.05em" }
                  : {}
              }
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Prince Kushwaha
            </motion.h1>
            <motion.div
              className="mt-3 h-[1px] bg-gradient-to-r from-transparent via-[#4f7eff] to-transparent"
              initial={{ width: 0 }}
              animate={count >= 30 ? { width: "100%" } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            />
            <motion.p
              className="mt-3 text-sm uppercase tracking-[0.3em] text-[#6b83b8]"
              initial={{ opacity: 0 }}
              animate={count >= 30 ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Full-Stack Developer
            </motion.p>
          </motion.div>

          {/* ── Counter at bottom-right ───────────────────────── */}
          <motion.div
            className="absolute bottom-10 right-10 z-10 sm:bottom-14 sm:right-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <span className="font-mono text-7xl font-bold tabular-nums text-white/10 sm:text-8xl md:text-9xl">
              {String(count).padStart(3, "0")}
            </span>
          </motion.div>

          {/* ── Progress bar at bottom ────────────────────────── */}
          <div className="absolute bottom-0 left-0 z-10 h-[2px] w-full bg-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#4f7eff] to-[#7ea4ff]"
              initial={{ width: "0%" }}
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
