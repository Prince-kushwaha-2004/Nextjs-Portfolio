"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allScreenshots = useMemo(() => {
    if (!project) return [];
    const images = [project.img, ...(project.screenshots || [])].filter(Boolean);
    return [...new Set(images)];
  }, [project]);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  const handleNextImage = () => {
    if (!allScreenshots.length) return;
    setActiveImageIndex((prev) => (prev + 1) % allScreenshots.length);
  };

  const handlePrevImage = () => {
    if (!allScreenshots.length) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? allScreenshots.length - 1 : prev - 1
    );
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0b1223] p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="playto-serif text-4xl text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-6 text-[#a5b4d8]">
              {project.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/80 hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="mt-6">
          {allScreenshots.length > 0 && (
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <div className="relative h-64 bg-[#060b18] sm:h-80">
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-[#0b1223cc] p-2 text-sm text-white hover:bg-[#15203c]"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-[#0b1223cc] p-2 text-sm text-white hover:bg-[#15203c]"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          )}
          {allScreenshots.length > 1 && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {allScreenshots.map((_, index) => (
                <button
                  key={`${project.name}-dot-${index}`}
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    activeImageIndex === index ? "bg-[#7ea4ff]" : "bg-white/30"
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {(project.techStack || []).map((tech) => (
            <div
              key={`${project.name}-modal-tech-${tech}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#121a2f]"
              title={tech.split(".")[0]}
            >
              <Image
                src={`/skills/${tech}`}
                alt={tech.split(".")[0]}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[#d9e4ff] hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#316dff] px-4 py-2 font-medium text-white hover:bg-[#3a78ff]"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>

        <h4 className="mt-8 text-lg font-semibold text-white">Project Details</h4>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#a5b4d8]">
          {(project.details || []).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
