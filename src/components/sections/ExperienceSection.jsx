"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { EXPERIENCE, fadeUp } from "@/data/constants";

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8"
    >
      <p className="text-center text-xs uppercase tracking-[0.2em] text-[#7f9de0]">Experience</p>
      <h2 className="mt-3 text-center playto-serif text-5xl text-white">Built in real teams.</h2>
      <div className="relative mx-auto mt-12 max-w-5xl pl-10">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-[#6f90e6] via-[#4f6fd0] to-transparent" />
        {EXPERIENCE.map((item) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            variants={fadeUp}
            className="relative mb-8"
          >
            <span className="absolute -left-[34px] top-7 h-3 w-3 rounded-full bg-[#6e93ff] ring-4 ring-[#27408f66]" />
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {item.company} | {item.role}
                </h3>
                <p className="text-sm text-[#9bb0dd]">{item.duration}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#9eadd0]">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#2c3a63] bg-[#121a2f] px-4 py-1.5 text-xs font-medium text-[#8fb2ff] transition-all hover:border-[#4f7eff55] hover:bg-[#1a2545] hover:text-white"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Visit Company
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
