"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { XIcon, fadeUp, stagger } from "@/data/constants";

export default function HeroSection() {
  return (
    <section className="relative flex flex-1 w-full flex-col items-center justify-center overflow-hidden px-5 pb-10 pt-20 text-center md:px-8">
      <div className="pointer-events-none absolute inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={3.2}
          speed={0.6}
          particleDensity={5}
          className="h-full w-full"
          particleColor="#6f86bb"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#03050d]/70" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_35%,rgba(83,132,255,0.14),transparent_45%),radial-gradient(circle_at_15%_75%,rgba(45,81,180,0.1),transparent_38%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[30%] z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#356dff1a] blur-3xl" />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center"
      >
        <motion.span
          variants={fadeUp}
          className="animate-float rounded-full border border-[#2754ff4a] bg-[#2142c321] px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#8fb2ff]"
        >
          Full-Stack Developer
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="mt-7 max-w-4xl playto-serif text-5xl leading-[1.03] text-white sm:text-6xl md:text-7xl"
        >
          Build products
          <span className="text-[#7ea4ff] italic"> that scale.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base text-[#9eabcc] md:text-lg">
          I design and ship fast, high-performance web applications for startups and teams.
          Clean UI, strong backend, and production-focused delivery.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-[#b4c5ef]">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 transition hover:border-[#6f96ff] hover:bg-white/10 hover:text-white"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 transition hover:border-[#6f96ff] hover:bg-white/10 hover:text-white"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 transition hover:border-[#6f96ff] hover:bg-white/10 hover:text-white"
          >
            <XIcon className="h-[14px] w-[14px]" />
            X
          </a>
          <a
            href="mailto:princekk102004@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 transition hover:border-[#6f96ff] hover:bg-white/10 hover:text-white"
          >
            <Mail size={14} />
            Email
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-[#316dff] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(49,109,255,0.45)] transition hover:scale-[1.03] hover:bg-[#3a78ff]"
          >
            Experience
          </a>
          <Link
            href="/Prince Kushwaha.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/90 transition hover:scale-[1.03] hover:bg-white/10"
          >
            <FileText size={16} />
            Resume
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
