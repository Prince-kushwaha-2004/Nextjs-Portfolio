"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Briefcase } from "lucide-react";
import { EXPERIENCE, fadeUp, stagger } from "@/data/constants";
import CodeDecoration from "@/components/ui/CodeDecoration";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden"
    >
      {/* Floating code decorations — left and right */}
      <CodeDecoration
        symbol="#"
        side="right"
        top="10%"
        size="text-5xl"
        color="cyan"
        duration={6.2}
        delay={0.5}
      />
      <CodeDecoration
        symbol="{ }"
        side="left"
        top="80%"
        size="text-5xl"
        color="indigo"
        duration={5.6}
        delay={1.1}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="section-container relative z-10"
      >
        <motion.div variants={fadeUp}>
          <p className="section-label">Experience</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Work history
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-10 pl-6">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 h-[calc(100%-16px)] w-0.5"
            style={{ background: "linear-gradient(to bottom, #38bdf8 0%, #6366f1 60%, rgba(168, 85, 247, 0.15) 100%)" }}
          />

          <div className="flex flex-col gap-0">
            {EXPERIENCE.map((item, idx) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                variants={fadeUp}
                className="relative pb-10 last:pb-0"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[30.5px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2"
                  style={{
                    background: "#010003",
                    borderColor: "#38bdf8",
                    boxShadow: "0 0 12px rgba(56, 189, 248, 0.7)",
                  }}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                </div>

                <div
                  className="card card-lift rounded-xl p-6"
                  style={{
                    background: "rgba(11, 18, 33, 0.65)",
                    borderColor: "rgba(56, 189, 248, 0.16)",
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className="text-base font-bold text-[#f8fafc]"
                        >
                          {item.role}
                        </h3>
                        <span
                          className="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                          style={{
                            background: "rgba(56, 189, 248, 0.12)",
                            borderColor: "rgba(56, 189, 248, 0.35)",
                            color: "#38bdf8",
                            fontFamily: "'JetBrains Mono', monospace",
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
                      <Calendar size={11} style={{ color: "#38bdf8" }} />
                      {item.duration}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-4 h-px" style={{ background: "rgba(56, 189, 248, 0.12)" }} />

                  {/* Points */}
                  <ul className="space-y-2.5">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "#38bdf8", boxShadow: "0 0 6px rgba(56, 189, 248, 0.6)" }}
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
                      className="mt-5 inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition hover:border-[#38bdf8] hover:text-[#38bdf8]"
                      style={{
                        borderColor: "rgba(56, 189, 248, 0.20)",
                        background: "rgba(10, 16, 32, 0.60)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <ExternalLink size={11} />
                      Visit Company
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
