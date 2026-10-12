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
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl border shadow-2xl"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            {/* Header */}
            <div
              className="flex items-start justify-between gap-4 border-b p-5"
              style={{ borderColor: "var(--border)" }}
            >
              <div>
                <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {project.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {project.description}
                </p>
              </div>
              <button
                onClick={onClose}
                id="project-modal-close"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition hover:opacity-80"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-subtle)",
                  color: "var(--text-muted)",
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
                  style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
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
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg border p-2 shadow-md transition hover:opacity-80"
                        style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                        aria-label="Previous"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg border p-2 shadow-md transition hover:opacity-80"
                        style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--text-primary)" }}
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
                        background: activeImageIndex === index ? "var(--accent)" : "var(--border)",
                      }}
                      aria-label={`Screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Tech stack */}
              <div className="mt-6">
                <p
                  className="mb-3 text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {(project.techStack || []).map((tech) => (
                    <div
                      key={`${project.name}-modal-tech-${tech}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border"
                      style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
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
                    className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition hover:opacity-80"
                    style={{ borderColor: "var(--border)", background: "var(--bg-subtle)", color: "var(--text-primary)" }}
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
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ background: "var(--accent)" }}
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
                    className="mb-3 text-[11px] font-semibold uppercase tracking-widest"
                    style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Details
                  </p>
                  <ul className="space-y-2">
                    {project.details.map((point, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--accent)" }}
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
