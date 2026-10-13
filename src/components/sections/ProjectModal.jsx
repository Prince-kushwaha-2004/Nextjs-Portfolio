"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allScreenshots = useMemo(() => {
    if (!project) return [];
    const images = [project.img, ...(project.screenshots || [])].filter(Boolean);
    return [...new Set(images)];
  }, [project]);

  useEffect(() => { setActiveImageIndex(0); }, [project]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleNextImage = () => {
    if (!allScreenshots.length) return;
    setActiveImageIndex((prev) => (prev + 1) % allScreenshots.length);
  };
  const handlePrevImage = () => {
    if (!allScreenshots.length) return;
    setActiveImageIndex((prev) => (prev === 0 ? allScreenshots.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(1, 0, 3, 0.75)", backdropFilter: "blur(12px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border shadow-2xl"
            style={{
              background: "rgba(10, 16, 32, 0.94)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(56, 189, 248, 0.25)",
              boxShadow: "0 16px 48px rgba(0, 0, 0, 0.8), 0 0 24px rgba(56, 189, 248, 0.15)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-start justify-between gap-4 border-b p-5"
              style={{ borderColor: "rgba(56, 189, 248, 0.16)" }}
            >
              <div>
                <h3 className="text-xl font-bold text-[#f8fafc]">
                  {project.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#94a3b8]">
                  {project.description}
                </p>
              </div>
              <button
                onClick={onClose}
                id="project-modal-close"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition hover:border-[#38bdf8] hover:text-[#38bdf8]"
                style={{
                  borderColor: "rgba(56, 189, 248, 0.20)",
                  background: "rgba(11, 18, 33, 0.70)",
                  color: "#94a3b8",
                }}
                aria-label="Close"
              >
                <X size={15} />
              </button>
            </div>

            <div className="p-5">
              {/* Image carousel */}
              {allScreenshots.length > 0 && (
                <div
                  className="relative overflow-hidden rounded-lg border"
                  style={{ borderColor: "rgba(56, 189, 248, 0.18)", background: "rgba(6, 11, 25, 0.8)" }}
                >
                  <div className="relative h-60 sm:h-72">
                    <Image
                      src={allScreenshots[activeImageIndex]}
                      alt={`${project.name} screenshot ${activeImageIndex + 1}`}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 900px"
                    />
                  </div>
                  {allScreenshots.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg border p-2 shadow-md transition hover:border-[#38bdf8] hover:text-[#38bdf8]"
                        style={{ background: "rgba(10, 16, 32, 0.85)", borderColor: "rgba(56, 189, 248, 0.25)", color: "#f8fafc" }}
                        aria-label="Previous"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg border p-2 shadow-md transition hover:border-[#38bdf8] hover:text-[#38bdf8]"
                        style={{ background: "rgba(10, 16, 32, 0.85)", borderColor: "rgba(56, 189, 248, 0.25)", color: "#f8fafc" }}
                        aria-label="Next"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}
                </div>
              )}

              {/* Dots */}
              {allScreenshots.length > 1 && (
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  {allScreenshots.map((_, index) => (
                    <button
                      key={`${project.name}-dot-${index}`}
                      onClick={() => setActiveImageIndex(index)}
                      className="rounded-full transition-all"
                      style={{
                        height: 6,
                        width: activeImageIndex === index ? 20 : 6,
                        background: activeImageIndex === index ? "#38bdf8" : "rgba(56, 189, 248, 0.25)",
                      }}
                      aria-label={`Screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Tech stack */}
              <div className="mt-6">
                <p
                  className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {(project.techStack || []).map((tech) => (
                    <div
                      key={`${project.name}-modal-tech-${tech}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border"
                      style={{ borderColor: "rgba(56, 189, 248, 0.20)", background: "rgba(11, 18, 33, 0.70)" }}
                      title={tech.split(".")[0]}
                    >
                      <Image
                        src={`/skills/${tech}`}
                        alt={tech.split(".")[0]}
                        width={20}
                        height={20}
                        className="h-5 w-5 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition hover:border-[#38bdf8] hover:text-[#38bdf8]"
                    style={{ borderColor: "rgba(56, 189, 248, 0.20)", background: "rgba(10, 16, 32, 0.65)", color: "#cbd5e1" }}
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-95 shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #0284c7, #4f46e5)",
                      boxShadow: "0 0 14px rgba(56, 189, 248, 0.35)",
                    }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Details */}
              {(project.details || []).length > 0 && (
                <div className="mt-6">
                  <p
                    className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Details
                  </p>
                  <ul className="space-y-2">
                    {project.details.map((point, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "#38bdf8", boxShadow: "0 0 6px rgba(56, 189, 248, 0.6)" }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
