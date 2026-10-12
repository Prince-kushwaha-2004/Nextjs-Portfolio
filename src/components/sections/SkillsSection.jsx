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
import { SKILL_ROWS, fadeUp, stagger } from "@/data/constants";
import { Code2, Server, Database, Terminal, Cpu } from "lucide-react";

/* ── Burst particles ── */
const PARTICLE_COUNT = 10;
function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const angle = (i / PARTICLE_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const distance = 30 + Math.random() * 40;
    const size = 3 + Math.random() * 4;
    const duration = 0.35 + Math.random() * 0.3;
    return { angle, distance, size, duration, id: i };
  });
}

function BurstParticles({ onComplete }) {
  const particles = useRef(generateParticles()).current;
  return (
    <div className="pointer-events-none absolute inset-0 z-50">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: Math.cos(p.angle) * p.distance,
            y: Math.sin(p.angle) * p.distance,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: p.duration, ease: "easeOut" }}
          onAnimationComplete={p.id === 0 ? onComplete : undefined}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: p.size,
            height: p.size,
            marginLeft: -p.size / 2,
            marginTop: -p.size / 2,
            background: "rgba(88,166,255,0.9)",
            boxShadow: "0 0 8px rgba(88,166,255,0.8)",
          }}
        />
      ))}
    </div>
  );
}

/* ── Single circular skill bubble ── */
function SkillOrb({ skill }) {
  const ref = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const rafId = useRef(null);
  const [popped, setPopped] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 160, damping: 18, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 160, damping: 18, mass: 0.5 });
  const dist = useMotionValue(0);
  const scaleMapped = useTransform(dist, [0, 60], [1, 1.12]);
  const scale = useSpring(scaleMapped, { stiffness: 300, damping: 20 });

  const FLEE_RADIUS = 90;
  const FLEE_STRENGTH = 35;

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

  const handlePop = useCallback(() => {
    if (popped) return;
    setPopped(true);
    setShowParticles(true);
  }, [popped]);

  const handleParticlesDone = useCallback(() => {
    setShowParticles(false);
    setTimeout(() => setPopped(false), 300);
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.5, y: 15 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 220, damping: 16 } },
      }}
      style={{ x, y, scale }}
      className="group relative flex cursor-pointer flex-col items-center select-none"
      onClick={handlePop}
    >
      <AnimatePresence>
        {showParticles && <BurstParticles onComplete={handleParticlesDone} />}
      </AnimatePresence>

      <motion.div
        animate={
          popped
            ? { scale: 0, opacity: 0, transition: { duration: 0.18 } }
            : { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 14, delay: 0.05 } }
        }
        className="relative flex h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] lg:h-[64px] lg:w-[64px] items-center justify-center rounded-full border border-[#30363d] bg-[#161b22]/90 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#58a6ff] group-hover:shadow-[0_0_20px_rgba(88,166,255,0.35)] group-hover:-translate-y-1"
      >
        <Image
          src={`/skills/${skill.file}`}
          alt={skill.name}
          width={32}
          height={32}
          className="h-6 w-6 sm:h-7 sm:w-7 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </motion.div>

      {/* Hover tooltip tag */}
      <span
        className="pointer-events-none absolute -bottom-6 z-30 whitespace-nowrap rounded-md border border-[#30363d] bg-[#0d1117]/95 px-2 py-0.5 text-[10px] font-medium text-[#c9d1d9] opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-1"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="section-container relative overflow-hidden py-16"
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center md:text-left mb-12">
        <p className="section-label">Tech Stack</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-[#e6edf3]">
          Skills &amp; Technologies
        </h2>
        <p className="mt-2 text-sm text-[#8d96a0] max-w-xl">
          A comprehensive ecosystem of modern frameworks, robust backends, scalable databases, and DevOps tools.
        </p>
      </motion.div>

      {/* Main layout: Floating skill cards around the centerpiece */}
      <div className="relative mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* ── Left Floating Cards (Frontend & DevOps) ── */}
        <div className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
          {/* Card 1: Frontend */}
          <motion.div
            variants={fadeUp}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl border border-[#30363d] bg-[#161b22]/75 p-5 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-[#58a6ff]/50 hover:shadow-[0_4px_24px_rgba(88,166,255,0.15)]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#58a6ff]/10 text-[#58a6ff]">
                <Code2 size={16} />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#58a6ff]">
                  Frontend &amp; UI
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8d96a0] leading-relaxed mb-3">
              Fast, reactive, and responsive user interfaces with component modularity.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["React", "Next.js", "Tailwind", "JavaScript", "Angular"].map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-[#30363d] bg-[#0d1117] px-2 py-0.5 text-[11px] font-mono text-[#c9d1d9]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: DevOps & Systems */}
          <motion.div
            variants={fadeUp}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="rounded-2xl border border-[#30363d] bg-[#161b22]/75 p-5 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-[#e3b341]/50 hover:shadow-[0_4px_24px_rgba(227,179,65,0.15)]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e3b341]/10 text-[#e3b341]">
                <Terminal size={16} />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e3b341]">
                  DevOps &amp; Tools
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8d96a0] leading-relaxed mb-3">
              Production containerization, reverse proxy configs, and CI/CD pipelines.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Docker", "Nginx", "Git", "GitHub", "AWS S3"].map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-[#30363d] bg-[#0d1117] px-2 py-0.5 text-[11px] font-mono text-[#c9d1d9]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Middle: Centerpiece Skill Honeycomb Component ── */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 py-6 relative">

          {/* Subtle glowing ambient backdrop */}
          <div
            className="pointer-events-none absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full opacity-25 blur-3xl"
            style={{
              background: "radial-gradient(circle, #58a6ff 0%, #a371f7 30%, transparent 50%)",
            }}
          />

          <motion.div
            variants={fadeUp}
            className="relative z-10 flex flex-col items-center gap-3 sm:gap-4.5"
          >
            {SKILL_ROWS.map((row, rowIndex) => (
              <motion.div
                key={`row-${rowIndex}`}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.06, delayChildren: rowIndex * 0.07 },
                  },
                }}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4.5"
              >
                {row.map((skill) => (
                  <SkillOrb key={skill.name} skill={skill} />
                ))}
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* ── Right Floating Cards (Backend & Database) ── */}
        <div className="lg:col-span-3 flex flex-col gap-6 order-3">
          {/* Card 3: Backend & APIs */}
          <motion.div
            variants={fadeUp}
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="rounded-2xl border border-[#30363d] bg-[#161b22]/75 p-5 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-[#3fb950]/50 hover:shadow-[0_4px_24px_rgba(63,185,80,0.15)]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3fb950]/10 text-[#3fb950]">
                <Server size={16} />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3fb950]">
                  Backend &amp; APIs
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8d96a0] leading-relaxed mb-3">
              Scalable REST microservices, authentication security, and business logic.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Node.js", "Express.js", "Django", "DRF", "REST APIs"].map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-[#30363d] bg-[#0d1117] px-2 py-0.5 text-[11px] font-mono text-[#c9d1d9]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Databases & Languages */}
          <motion.div
            variants={fadeUp}
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="rounded-2xl border border-[#30363d] bg-[#161b22]/75 p-5 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-[#bc8cff]/50 hover:shadow-[0_4px_24px_rgba(188,140,255,0.15)]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#bc8cff]/10 text-[#bc8cff]">
                <Database size={16} />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#bc8cff]">
                  Data &amp; Core Tech
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8d96a0] leading-relaxed mb-3">
              High-performance query design, NoSQL schema, and algorithmic logic.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["PostgreSQL", "MongoDB", "Firebase", "Python", "C/C++"].map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-[#30363d] bg-[#0d1117] px-2 py-0.5 text-[11px] font-mono text-[#c9d1d9]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}
