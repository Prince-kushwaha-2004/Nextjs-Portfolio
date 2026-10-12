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
      <main className="relative min-h-screen overflow-x-hidden" style={{ background: 'var(--bg-page)', color: 'var(--text-primary)' }}>
        {/* Ambient colorful glassmorphic light orbs (fixed) */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="absolute -top-[10%] -left-[10%] h-[550px] w-[550px] rounded-full opacity-20 blur-[130px]"
            style={{ background: "radial-gradient(circle, #38bdf8 0%, #0284c7 70%, transparent 100%)" }}
          />
          <div
            className="absolute top-[25%] -right-[10%] h-[600px] w-[600px] rounded-full opacity-20 blur-[140px]"
            style={{ background: "radial-gradient(circle, #818cf8 0%, #6366f1 70%, transparent 100%)" }}
          />
          <div
            className="absolute top-[55%] -left-[5%] h-[520px] w-[520px] rounded-full opacity-15 blur-[140px]"
            style={{ background: "radial-gradient(circle, #34d399 0%, #059669 70%, transparent 100%)" }}
          />
          <div
            className="absolute top-[80%] right-[5%] h-[580px] w-[580px] rounded-full opacity-18 blur-[150px]"
            style={{ background: "radial-gradient(circle, #a855f7 0%, #7c3aed 70%, transparent 100%)" }}
          />
        </div>

        <div className="relative z-10">
          <Navbar animate={!loading} />

          {/* ─── First screen ──────────────────────────────────────── */}
          <motion.div variants={contentItem}>
            <HeroSection />
          </motion.div>
        <motion.div variants={contentItem}>
          <StatsSection />
        </motion.div>
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
        </div>
      </main>
    </>
  );
}
