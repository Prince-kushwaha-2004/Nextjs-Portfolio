"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SKILLS, SKILL_ROWS, fadeUp, stagger } from "@/data/constants";

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
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.5, y: 30 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.18,
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 12 },
                }}
                whileTap={{ scale: 0.92 }}
                className="skill-orb group relative flex cursor-pointer flex-col items-center"
                style={{
                  animationDelay: `${(rowIndex * row.length + skillIndex) * 0.4}s`,
                }}
              >
                {/* Outer glow ring on hover */}
                <div className="absolute -inset-1.5 rounded-full bg-[#4f7eff10] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Circular icon badge */}
                <div className="relative flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#2a3a65] bg-[#111b35] shadow-[0_4px_20px_rgba(5,12,40,0.6)] transition-all duration-300 group-hover:border-[#4f7eff55] group-hover:shadow-[0_0_30px_rgba(79,126,255,0.2)] md:h-[68px] md:w-[68px]">
                  <Image
                    src={`/skills/${skill.file}`}
                    alt={skill.name}
                    width={28}
                    height={28}
                    className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110 md:h-7 md:w-7"
                  />
                </div>

                {/* Tooltip label */}
                <span className="mt-1.5 text-[10px] font-medium tracking-wide text-[#6b83b8] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#c4d4fb] md:text-[11px]">
                  {skill.name}
                </span>
              </motion.div>
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
