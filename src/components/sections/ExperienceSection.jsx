"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { EXPERIENCE, fadeUp, stagger } from "@/data/constants";
import SpotlightCard from "@/components/SpotlightCard";

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="section-container"
    >
      <motion.div variants={fadeUp}>
        <p className="section-label">Career Journey</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#f8fafc]">
          Work History &amp; Experience
        </h2>
        <p className="mt-2 text-sm text-[#94a3b8] max-w-xl">
          Track record of shipping production-grade applications, driving code quality, and building resilient distributed systems.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-10 pl-6">
        {/* Vertical line */}
        <div
          className="absolute left-0 top-2 h-[calc(100%-16px)] w-0.5"
          style={{ background: "linear-gradient(to bottom, #38bdf8, #818cf8, #a855f7, transparent)" }}
        />

        <div className="flex flex-col gap-0">
          {EXPERIENCE.map((item) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              variants={fadeUp}
              className="relative pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-[30.5px] top-4 flex h-4 w-4 items-center justify-center rounded-full border-2 shadow-sm"
                style={{
                  background: "#060813",
                  borderColor: "#38bdf8",
                  boxShadow: "0 0 14px rgba(56, 189, 248, 0.7)",
                }}
              />

              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.2)"
                spotlightSize={320}
                className="rounded-2xl border border-white/10 bg-[rgba(13,20,36,0.65)] p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-sky-400/40"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 12px 32px rgba(0,0,0,0.45)",
                }}
              >
                {/* Header */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#f8fafc]">
                        {item.role}
                      </h3>
                      <span
                        className="rounded-full border px-3 py-0.5 text-[11px] font-semibold"
                        style={{
                          background: "rgba(56, 189, 248, 0.12)",
                          borderColor: "rgba(56, 189, 248, 0.35)",
                          color: "#38bdf8",
                          fontFamily: "'JetBrains Mono', monospace",
                          boxShadow: "0 0 12px rgba(56, 189, 248, 0.15)",
                        }}
                      >
                        {item.company}
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-1.5 shrink-0 text-xs"
                    style={{ color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <Calendar size={13} className="text-[#38bdf8]" />
                    {item.duration}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-4 h-px" style={{ background: "rgba(255, 255, 255, 0.07)" }} />

                {/* Points */}
                <ul className="space-y-2.5">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "#38bdf8", boxShadow: "0 0 6px rgba(56, 189, 248, 0.8)" }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                {item.website && (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-medium transition hover:border-[#38bdf8]/50 hover:text-[#38bdf8]"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      background: "rgba(255, 255, 255, 0.04)",
                      color: "#cbd5e1",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <ExternalLink size={11} />
                    Visit Company
                  </a>
                )}
              </SpotlightCard>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
