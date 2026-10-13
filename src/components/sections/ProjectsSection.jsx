"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { fadeUp, stagger, formatTechName } from "@/data/constants";

export default function ProjectsSection({ onSelectProject }) {
  return (
    <motion.section
      id="projects"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="section-container"
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
        {projects.map((item, index) => (
          <motion.article
            key={item.name}
            variants={fadeUp}
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
                className="object-cover transition-transform duration-700 group-hover:scale-105"
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
      </div>
    </motion.section>
  );
}
