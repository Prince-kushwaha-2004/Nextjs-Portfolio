"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, ChevronDown } from "lucide-react";
import { projects } from "@/data/projects";
import { fadeUp, stagger, formatTechName } from "@/data/constants";
import CodeDecoration from "@/components/ui/CodeDecoration";

export default function ProjectsSection({ onSelectProject }) {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden"
    >
      {/* Floating code decorations — left and right */}
      <CodeDecoration
        symbol="//"
        side="left"
        top="60%"
        size="text-3xl"
        color="cyan"
        duration={5.5}
        delay={0.2}
      />
      <CodeDecoration
        symbol="</>"
        side="right"
        top="20%"
        size="text-4xl"
        color="indigo"
        duration={6.5}
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
          <p className="section-label">Projects</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
            Things I&apos;ve built
          </h2>
          <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
            From idea to production — shipped with care.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 md:auto-rows-fr">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((item) => (
              <motion.article
                key={item.name}
                variants={fadeUp}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="card card-lift group flex flex-col overflow-hidden rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(11, 18, 33, 0.65)",
                  borderColor: "rgba(56, 189, 248, 0.16)",
                }}
              >
                {/* Image — equal height for all */}
                <div
                  className="relative h-52 w-full shrink-0 overflow-hidden"
                  style={{ background: "rgba(15, 23, 42, 0.8)" }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 origin-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-[#f8fafc]">
                      {item.name}
                    </h3>
                    <div className="flex shrink-0 gap-2">
                      {item.githubLink && (
                        <a
                          href={item.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-7 w-7 items-center justify-center rounded-lg border transition-all duration-200 hover:border-[#38bdf8] hover:text-[#38bdf8] hover:scale-105"
                          style={{
                            borderColor: "rgba(56, 189, 248, 0.20)",
                            background: "rgba(10, 16, 32, 0.65)",
                            color: "var(--text-muted)",
                          }}
                          title="GitHub"
                        >
                          <Github size={13} />
                        </a>
                      )}
                      {item.liveLink && (
                        <a
                          href={item.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-7 w-7 items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
                          style={{
                            background: "linear-gradient(135deg, #0284c7, #4f46e5)",
                            color: "#fff",
                            boxShadow: "0 0 12px rgba(56, 189, 248, 0.35)",
                          }}
                          title="Live Demo"
                        >
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <span key={`${item.name}-${tech}`} className="tag">
                        {formatTechName(tech)}
                      </span>
                    ))}
                  </div>

                  {/* Details button */}
                  <button
                    onClick={() => onSelectProject(item)}
                    className="mt-4 text-xs font-medium transition hover:text-[#7dd3fc] text-[#38bdf8] w-fit"
                  >
                    View details →
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects button */}
        {projects.length > 4 && (
          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-300"
              style={{
                borderColor: "rgba(56, 189, 248, 0.30)",
                background: "rgba(10, 16, 32, 0.75)",
                color: "#f8fafc",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.60)";
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.12)";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(56, 189, 248, 0.25)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.30)";
                e.currentTarget.style.background = "rgba(10, 16, 32, 0.75)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>{showAll ? "Show fewer projects" : `View all projects `}</span>
              <ChevronDown
                size={15}
                className={`text-[#38bdf8] transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover:translate-y-0.5"
                  }`}
              />
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
