"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Briefcase } from "lucide-react";
import { EXPERIENCE, fadeUp, stagger } from "@/data/constants";

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
          style={{ background: "linear-gradient(to bottom, var(--accent), rgba(168, 85, 247, 0.2))" }}
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
                  background: "var(--bg-page)",
                  borderColor: "var(--accent)",
                  boxShadow: "0 0 10px rgba(192, 132, 252, 0.6)",
                }}
              >
                {/* <Briefcase size={11} style={{ color: "var(--accent)" }} /> */}
              </div>

              <div className="card card-lift rounded-xl p-6">
                {/* Header */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className="text-base font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.role}
                      </h3>
                      <span
                        className="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                        style={{
                          background: "rgba(168, 85, 247, 0.12)",
                          borderColor: "rgba(192, 132, 252, 0.35)",
                          color: "var(--accent)",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {item.company}
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-1.5 shrink-0 text-xs"
                    style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <Calendar size={11} />
                    {item.duration}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-4 h-px" style={{ background: "var(--border-muted)" }} />

                {/* Points */}
                <ul className="space-y-2.5">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "var(--accent)" }}
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
                    className="mt-5 inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition hover:opacity-80"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--bg-subtle)",
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
    </motion.section>
  );
}
