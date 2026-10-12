"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, MapPin } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { XIcon } from "@/data/constants";

const GITHUB_USERNAME = "Prince-kushwaha-2004";

const ROLES = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "Backend Developer",
  "Open Source Contributor",
];

const SOCIAL = [
  { icon: Github, href: `https://github.com/${GITHUB_USERNAME}`, label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/prince121kk/", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/prince121kk", label: "X" },
  { icon: Mail, href: "mailto:princekk102004@gmail.com", label: "Email" },
];

/* ── Typing role animation ──────────────────────────────────────── */
function TypingRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const t = useRef(null);

  useEffect(() => {
    const full = ROLES[roleIdx] || "Full Stack Developer";
    if (!isDeleting) {
      if (displayed.length < full.length) {
        t.current = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
      } else {
        t.current = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        t.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setIsDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(t.current);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <span className="text-[#e6edf3] font-mono font-medium">
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: 2,
          height: "1.1em",
          background: "#58a6ff",
          marginLeft: 3,
          verticalAlign: "text-bottom",
          borderRadius: 1,
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

/* ── GitHub stats with fallback cache ────────────────────── */
function useGithubStats() {
  const [s, setS] = useState({ repos: "37", commits: "500+", followers: "9" });

  useEffect(() => {
    const CACHE_KEY = "gh_stats_v2";
    const CACHE_TTL = 15 * 60 * 1000;

    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, ts } = JSON.parse(cached);
        if (Date.now() - ts < CACHE_TTL) {
          setS(data);
          return;
        }
      }
    } catch { /* ignore */ }

    (async () => {
      try {
        const uR = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          headers: { Accept: "application/vnd.github+json" },
        });
        const u = await uR.json();
        const repos = u.public_repos ?? "37";
        const followers = u.followers ?? "9";

        let commits = "500+";
        try {
          const cR = await fetch(
            `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}&per_page=1`,
            { headers: { Accept: "application/vnd.github.cloak-preview+json" } }
          );
          const c = await cR.json();
          if (typeof c.total_count === "number" && c.total_count > 0) {
            commits = `${c.total_count}+`;
          }
        } catch { /* use default */ }

        const data = { repos: String(repos), followers: String(followers), commits: String(commits) };
        setS(data);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
        } catch { /* ignore */ }
      } catch {
        // Fallback default stats so it never shows blank or broken dashes
        setS({ repos: "37", commits: "500+", followers: "9" });
      }
    })();
  }, []);

  return s;
}

/* ── Dot grid background ────────────────────────────────────────── */
function DotGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(88,166,255,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      {/* Blue top-left glow */}
      <div
        className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/3 rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #58a6ff, transparent 70%)" }}
      />
      {/* Purple bottom-right glow */}
      <div
        className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full opacity-[0.10]"
        style={{ background: "radial-gradient(circle, #a371f7, transparent 70%)" }}
      />
    </div>
  );
}

/* ── Hero section ───────────────────────────────────────────────── */
export default function HeroSection() {
  const stats = useGithubStats();

  const statItems = [
    { label: "Repos", value: stats.repos },
    { label: "Commits", value: stats.commits },
    { label: "Followers", value: stats.followers },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden"
    >
      <DotGrid />

      {/* Floating code decorations — right side */}
      <div className="pointer-events-none absolute right-[6%] top-[22%] hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-5xl font-bold select-none"
            style={{ color: "rgba(88,166,255,0.12)" }}
          >
            {"{ }"}
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute right-[12%] top-[46%] hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="rounded-xl border px-5 py-3.5 font-mono text-xs leading-6 select-none shadow-2xl"
            style={{
              borderColor: "#30363d",
              background: "rgba(22,27,34,0.75)",
              backdropFilter: "blur(12px)",
              color: "#8d96a0",
            }}
          >
            <span style={{ color: "#ff7b72" }}>const </span>
            <span style={{ color: "#79c0ff" }}>dev</span>
            <span style={{ color: "#e6edf3" }}> = () ={">"} {"{"}</span>
            <br />
            <span>&nbsp;&nbsp;</span>
            <span style={{ color: "#ff7b72" }}>return </span>
            <span style={{ color: "#a5d6ff" }}>&quot;🚀 value&quot;</span>;
            <br />
            <span style={{ color: "#e6edf3" }}>{"}"}</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute right-[5%] bottom-[24%] hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="font-mono text-3xl font-bold select-none"
            style={{ color: "rgba(163,113,247,0.15)" }}
          >
            {"</>"}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Main content aligned with section-container across whole site ── */}
      <div className="section-container relative z-10 w-full flex flex-col items-start justify-center pt-28 pb-16">
        <div className="w-full max-w-3xl">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md"
          style={{
            borderColor: "rgba(63,185,80,0.4)",
            background: "rgba(63,185,80,0.08)",
          }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "#3fb950" }} />
          <span className="font-mono text-xs font-semibold" style={{ color: "#3fb950" }}>
            Open to Work · Remote OK
          </span>
        </motion.div>

        {/* Name - Clear, high-contrast, perfectly visible */}
        <div className="mb-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <h1 className="tracking-tight font-extrabold select-none">
              <span
                className=" text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#e6edf3]"
                style={{ lineHeight: 1.1 }}
              >
                Prince
              </span>
              <span
                className=" text-4xl mx-4 sm:text-4xl md:text-5xl lg:text-7xl   tracking-tight text-[#e6edf3]"
                style={{ lineHeight: 1.05 }}
              >
                Kushwaha
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          className="mb-6 h-[2px] w-24 origin-left rounded-full"
          style={{ background: "linear-gradient(to right, #58a6ff, #a371f7, transparent)" }}
        />

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mb-5 flex items-center gap-2"
        >
          <span className="font-mono text-sm" style={{ color: "#484f58" }}>~/&nbsp;</span>
          <span className="font-mono text-base md:text-lg" style={{ color: "#8d96a0" }}>
            I&apos;m a <TypingRole />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="mb-2 max-w-lg text-[15px] leading-7"
          style={{ color: "#8d96a0" }}
        >
          I build fast, scalable web applications —
          {" "}<span style={{ color: "#c9d1d9" }}>clean UI, solid backend, production-ready.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8 flex items-center gap-1.5 font-mono text-xs"
          style={{ color: "#484f58" }}
        >
          <MapPin size={11} /> India
        </motion.div>

        {/* Live stats */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mb-8 flex flex-wrap gap-8"
        >
          {statItems.map((s) => (
            <div key={s.label}>
              <p
                className="text-2xl font-bold tabular-nums text-[#e6edf3] font-mono"
              >
                {s.value}
              </p>
              <p className="text-[11px] font-mono uppercase tracking-widest mt-0.5 text-[#6e7681]">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl px-7 py-3 text-[14px] font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #1f6feb, #388bfd)",
              boxShadow: "0 4px 24px rgba(88,166,255,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            View Projects <ArrowRight size={15} />
          </a>
          <Link
            href="/Prince Kushwaha.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border px-7 py-3 text-[14px] font-semibold"
            style={{
              borderColor: "#30363d",
              background: "rgba(22,27,34,0.8)",
              color: "#e6edf3",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <FileText size={14} /> Resume
          </Link>
          <a href="#contact" style={{ color: "#58a6ff", fontSize: 14 }}>
            Let&apos;s talk →
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-wrap items-center gap-2.5"
        >
          <span className="mr-2 text-xs uppercase tracking-widest text-[#484f58] font-mono">
            Find me
          </span>
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border"
              style={{
                borderColor: "#30363d",
                background: "rgba(22,27,34,0.8)",
                color: "#8d96a0",
                transition: "transform 0.2s, border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "#58a6ff";
                e.currentTarget.style.color = "#58a6ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#30363d";
                e.currentTarget.style.color = "#8d96a0";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
}
