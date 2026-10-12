"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import { fadeUp, stagger, formatTechName } from "@/data/constants";
import SpotlightCard from "@/components/SpotlightCard";
import ShinyText from "@/components/ShinyText";

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
      <motion.div variants={fadeUp} className="mb-10">
        <p className="section-label">Featured Work</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#f8fafc] tracking-tight">
          Crafted with Precision
        </h2>
        <p className="mt-2 text-sm text-[#94a3b8] max-w-xl">
          High-performance production apps, responsive frontend architectures, and full-stack solutions.
        </p>
      </motion.div>

      <div className="grid gap-7 md:grid-cols-2 md:auto-rows-fr">
        {projects.map((item) => (
          <motion.div
            key={item.name}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col h-full"
          >
            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.25)"
              spotlightSize={300}
              className="group flex flex-1 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[rgba(13,20,36,0.65)] p-0 backdrop-blur-2xl transition-all duration-300 hover:border-sky-400/50 shadow-2xl"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 16px 40px rgba(0,0,0,0.5)",
              }}
            >
              {/* Image Preview */}
              <div
                className="relative h-56 w-full shrink-0 overflow-hidden border-b border-white/10 bg-slate-950 cursor-pointer"
                onClick={() => onSelectProject && onSelectProject(item)}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-transparent to-transparent opacity-75 group-hover:opacity-40 transition-opacity" />
                
                {/* View Details Badge on hover */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/60 px-2.5 py-1 text-xs font-mono text-white backdrop-blur-md">
                    <Sparkles size={11} className="text-sky-400" /> Click for details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    onClick={() => onSelectProject && onSelectProject(item)}
                    className="text-lg font-bold text-[#f8fafc] group-hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </h3>
                  <div className="flex shrink-0 gap-2">
                    {item.githubLink && (
                      <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:scale-105 hover:border-sky-400/50 hover:text-sky-400 backdrop-blur-md"
                        title="GitHub Repo"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {item.liveLink && (
                      <a
                        href={item.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-xl transition-all hover:scale-110 shadow-lg"
                        style={{
                          background: "linear-gradient(135deg, #0284c7, #38bdf8)",
                          color: "#fff",
                          boxShadow: "0 2px 14px rgba(56,189,248,0.4)",
                        }}
                        title="Live Deployment"
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#94a3b8] line-clamp-3">
                  {item.description}
                </p>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span key={`${item.name}-${tech}`} className="tag text-[11px]">
                      {formatTechName(tech)}
                    </span>
                  ))}
                </div>

                {/* Footer action */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject && onSelectProject(item)}
                    className="text-xs font-mono font-medium text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Case study &amp; architecture →
                  </button>
                  <span className="text-[11px] font-mono text-slate-500">
                    Production Ready
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
