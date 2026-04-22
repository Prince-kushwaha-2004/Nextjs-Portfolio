"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";

/* ─── Section components ──────────────────────────────────────────── */
import Loader from "@/components/sections/Loader";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import ProjectModal from "@/components/sections/ProjectModal";

/* ─── Stagger wrapper for main content entrance ──────────────────── */
const contentContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const contentItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* ─── Premium loader overlay (sits on top) ────────────────── */}
      {loading && <Loader onComplete={handleLoadingComplete} />}

      {/* ─── Main site (always rendered, hidden behind loader) ──── */}
      <main className="playto-bg text-[#e7edff]">
        <Navbar animate={!loading} />

        {/* ─── First screen: hero fills viewport, marquee at bottom ── */}
        <div className="flex min-h-[calc(100vh-64px)] flex-col">
          <motion.div variants={contentItem} className="flex-1 flex flex-col">
            <HeroSection />
          </motion.div>
          <motion.div variants={contentItem}>
            <StatsSection />
          </motion.div>
        </div>
        <motion.div variants={contentItem}>
          <FeaturesSection />
        </motion.div>
        <motion.div variants={contentItem}>
          <SkillsSection />
        </motion.div>
        <motion.div variants={contentItem}>
          <ExperienceSection />
        </motion.div>
        <motion.div variants={contentItem}>
          <ProjectsSection onSelectProject={setSelectedProject} />
        </motion.div>
        <motion.div variants={contentItem}>
          <FaqSection />
        </motion.div>
        <motion.div variants={contentItem}>
          <FooterSection />
        </motion.div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </main>
    </>
  );
}
