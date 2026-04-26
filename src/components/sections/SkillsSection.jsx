"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useCallback, useState } from "react";
import { SKILLS, SKILL_ROWS, fadeUp, stagger } from "@/data/constants";

/* ── burst particle generation ── */
const PARTICLE_COUNT = 12;

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const angle = (i / PARTICLE_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const distance = 40 + Math.random() * 50;
    const size = 3 + Math.random() * 6;
    const duration = 0.4 + Math.random() * 0.3;
    return { angle, distance, size, duration, id: i };
  });
}

/* ── burst particles overlay ── */
function BurstParticles({ onComplete }) {
  const particles = useRef(generateParticles()).current;

  return (
    <div className="pointer-events-none absolute inset-0 z-50">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: Math.cos(p.angle) * p.distance,
            y: Math.sin(p.angle) * p.distance,
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: p.duration,
            ease: "easeOut",
          }}
          onAnimationComplete={p.id === 0 ? onComplete : undefined}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: p.size,
            height: p.size,
            marginLeft: -p.size / 2,
            marginTop: -p.size / 2,
            background: `radial-gradient(circle, rgba(79,126,255,0.9), rgba(79,126,255,0.3))`,
            boxShadow: `0 0 ${p.size * 2}px rgba(79,126,255,0.6)`,
          }}
        />
      ))}

      {/* Central flash ring */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0.8 }}
        animate={{ scale: 2.5, opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 60,
          height: 60,
          border: "2px solid rgba(79,126,255,0.5)",
          boxShadow: "0 0 20px rgba(79,126,255,0.3)",
        }}
      />
    </div>
  );
}

/* ── single bubble that flees the cursor ── */
function SkillOrb({ skill }) {
  const ref = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const rafId = useRef(null);

  const [popped, setPopped] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  /* raw values driven by proximity math */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  /* spring-damped for a rubbery "water bubble" feel */
  const x = useSpring(rawX, { stiffness: 150, damping: 18, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 150, damping: 18, mass: 0.6 });

  /* slight scale bump when displaced */
  const dist = useMotionValue(0);
  const scaleMapped = useTransform(dist, [0, 60], [1, 1.12]);
  const scale = useSpring(scaleMapped, { stiffness: 300, damping: 20 });

  const FLEE_RADIUS = 120;
  const FLEE_STRENGTH = 55;

  const tick = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = cx - mouseX.current;
    const dy = cy - mouseY.current;
    const d = Math.sqrt(dx * dx + dy * dy);

    if (d < FLEE_RADIUS && d > 0) {
      const force = (1 - d / FLEE_RADIUS) * FLEE_STRENGTH;
      const angle = Math.atan2(dy, dx);
      rawX.set(Math.cos(angle) * force);
      rawY.set(Math.sin(angle) * force);
      dist.set(force);
    } else {
      rawX.set(0);
      rawY.set(0);
      dist.set(0);
    }

    rafId.current = requestAnimationFrame(tick);
  }, [rawX, rawY, dist]);

  useEffect(() => {
    const onPointer = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointer);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [tick]);

  /* ── click → pop → reform ── */
  const handlePop = useCallback(() => {
    if (popped) return;
    setPopped(true);
    setShowParticles(true);
  }, [popped]);

  const handleParticlesDone = useCallback(() => {
    setShowParticles(false);
    // reform the bubble after a short pause
    setTimeout(() => setPopped(false), 350);
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.5, y: 30 },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { type: "spring", stiffness: 200, damping: 15 },
        },
      }}
      style={{ x, y, scale }}
      className="group relative flex cursor-pointer flex-col items-center"
      aria-label={skill.name}
      onClick={handlePop}
    >
      {/* Burst particles */}
      <AnimatePresence>
        {showParticles && (
          <BurstParticles onComplete={handleParticlesDone} />
        )}
      </AnimatePresence>

      {/* Outer glow ring on hover */}
      <div className="absolute -inset-1.5 rounded-full bg-[#4f7eff10] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Circular icon badge */}
      <motion.div
        animate={
          popped
            ? {
              scale: 0,
              opacity: 0,
              borderColor: "rgba(79,126,255,0)",
              transition: { duration: 0.2, ease: "easeIn" },
            }
            : {
              scale: 1,
              opacity: 1,
              borderColor: "rgba(42,58,101,1)",
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 14,
                delay: 0.05,
              },
            }
        }
        className="relative flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#2a3a65] bg-[#111b35] shadow-[0_4px_20px_rgba(5,12,40,0.6)] transition-shadow duration-300 group-hover:border-[#4f7eff55] group-hover:shadow-[0_0_30px_rgba(79,126,255,0.2)] md:h-[68px] md:w-[68px]"
      >
        <Image
          src={`/skills/${skill.file}`}
          alt={skill.name}
          width={28}
          height={28}
          className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110 md:h-7 md:w-7"
        />
      </motion.div>

      {/* Tooltip label — CSS hover only, hidden during blast */}
      <span
        className="mt-1.5 text-[10px] font-medium tracking-wide text-[#6b83b8] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#c4d4fb] md:text-[11px]"
        style={popped ? { visibility: "hidden" } : undefined}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

/* ── main section ── */
export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative mx-auto w-full max-w-6xl px-5 py-20 md:px-8 overflow-hidden"
    >
      {/* Subtle radial glow behind the icons */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a2d6d22] blur-[120px]" />
      </div>

      <p className="relative z-10 text-center text-xs uppercase tracking-[0.2em] text-[#7f9de0]">Skills</p>
      <h2 className="relative z-10 mt-3 text-center playto-serif text-5xl text-white">Everything I build with.</h2>
      <p className="relative z-10 mx-auto mt-4 max-w-2xl text-center text-sm text-[#95a7cd]">
        Modern tools and frameworks I use to design, build, and ship production-ready products.
      </p>

      {/* Scattered honeycomb rows */}
      <div className="relative z-10 mx-auto mt-12 flex max-w-3xl flex-col items-center gap-0">
        {SKILL_ROWS.map((row, rowIndex) => (
          <motion.div
            key={`skill-row-${rowIndex}`}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: rowIndex * 0.12,
                },
              },
            }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            {row.map((skill, skillIndex) => (
              <SkillOrb
                key={skill.name}
                skill={skill}
                rowIndex={rowIndex}
                skillIndex={skillIndex}
                rowLength={row.length}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Additional skill tags */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2"
      >
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[#2c3a63] bg-[#121a2f] px-3 py-1 text-xs text-[#b8c7ec] transition-colors hover:border-[#4f7eff55] hover:text-white"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </motion.section>
  );
}
