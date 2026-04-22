"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { fadeUp, stagger, formatTechName } from "@/data/constants";

export default function ProjectsSection({ onSelectProject }) {
  return (
    <motion.section
      id="projects"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8"
    >
      <p className="text-center text-xs uppercase tracking-[0.2em] text-[#7f9de0]">Projects</p>
      <h2 className="mt-3 text-center playto-serif text-5xl text-white">All featured work.</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((item) => (
          <motion.article
            key={item.name}
            variants={fadeUp}
            className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-[0_15px_40px_rgba(5,10,25,0.45)]"
          >
            <div className="relative h-52 w-full overflow-hidden border-b border-white/10">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[#9eadd0]">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.techStack.map((tech) => (
                  <span
                    key={`${item.name}-${tech}`}
                    className="rounded-full border border-[#2c3a63] bg-[#121a2f] px-3 py-1 text-xs text-[#b8c7ec]"
                  >
                    {formatTechName(tech)}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <button
                  onClick={() => onSelectProject(item)}
                  className="rounded-full border border-white/20 px-4 py-2 text-[#d9e4ff] hover:bg-white/10"
                >
                  View Details
                </button>
                {item.githubLink && (
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[#d9e4ff] hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {item.liveLink && (
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#316dff] px-4 py-2 font-medium text-white hover:bg-[#3a78ff]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
