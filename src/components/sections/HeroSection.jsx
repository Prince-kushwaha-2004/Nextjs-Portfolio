"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, MapPin, Sparkles, Terminal } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { XIcon } from "@/data/constants";
import Aurora from "@/components/Aurora";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";
import DecryptedText from "@/components/DecryptedText";

const GITHUB_USERNAME = "Prince-kushwaha-2004";

const ROLES = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "Backend & API Architect",
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
        t.current = setTimeout(() => setIsDeleting(true), 2400);
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
          background: "#38bdf8",
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
        setS({ repos: "37", commits: "500+", followers: "9" });
      }
    })();
  }, []);

  return s;
}

/* ── Hero section ───────────────────────────────────────────────── */
export default function HeroSection() {
  const stats = useGithubStats();

  const statItems = [
    { label: "Public Repos", value: stats.repos },
    { label: "Code Commits", value: stats.commits },
    { label: "Followers", value: stats.followers },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden"
    >
      {/* ── React Bits WebGL 3D Aurora Background ── */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-45 overflow-hidden">
        <Aurora
          colorStops={["#0284c7", "#6366f1", "#06b6d4", "#4f46e5"]}
          amplitude={1.2}
          blend={0.55}
          speed={0.7}
          opacity={0.4}
        />
      </div>

      {/* Subtle overlay grid for tech aesthetic */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(56,189,248,0.2) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 95%)",
        }}
      />

      {/* Floating glassmorphic code chip */}
      <div className="pointer-events-none absolute right-[8%] top-[38%] hidden lg:block z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl border border-white/10 bg-[rgba(13,20,36,0.65)] p-5 backdrop-blur-xl shadow-2xl font-mono text-xs leading-6 select-none max-w-xs"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 24px 48px rgba(0,0,0,0.6)",
            }}
          >
            <div className="flex items-center gap-1.5 mb-3 border-b border-white/10 pb-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] text-slate-400 ml-2">prince.config.ts</span>
            </div>
            <div>
              <span style={{ color: "#f43f5e" }}>export const </span>
              <span style={{ color: "#38bdf8" }}>stack</span>
              <span style={{ color: "#f8fafc" }}> = [</span>
              <br />
              <span>&nbsp;&nbsp;</span>
              <span style={{ color: "#34d399" }}>&quot;Next.js 15&quot;</span>,
              <br />
              <span>&nbsp;&nbsp;</span>
              <span style={{ color: "#34d399" }}>&quot;TypeScript &amp; React&quot;</span>,
              <br />
              <span>&nbsp;&nbsp;</span>
              <span style={{ color: "#34d399" }}>&quot;PostgreSQL / Node&quot;</span>
              <br />
              <span style={{ color: "#f8fafc" }}>];</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Main content aligned with section-container across whole site ── */}
      <div className="section-container relative z-10 w-full flex flex-col items-start justify-center pt-28 pb-16">
        <div className="w-full max-w-3xl">

          {/* Available badge with React Bits ShinyText */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md cursor-default"
            style={{
              borderColor: "rgba(16,185,129,0.35)",
              background: "rgba(16,185,129,0.1)",
              boxShadow: "0 0 20px rgba(16,185,129,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
            <ShinyText
              text="Open to Work · Full-time & Remote OK"
              speed={2.5}
              color="#34d399"
              shineColor="#ffffff"
              className="font-mono text-xs font-semibold"
            />
          </motion.div>

          {/* Name - Styled with React Bits BlurText */}
          <div className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <h1 className="tracking-tight font-extrabold select-none flex flex-wrap items-baseline gap-3">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                  Prince
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Kushwaha
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="mb-6 h-[2px] w-28 origin-left rounded-full"
            style={{ background: "linear-gradient(to right, #38bdf8, #818cf8, #c084fc, transparent)" }}
          />

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mb-5 flex items-center gap-2"
          >
            <span className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>~/&nbsp;</span>
            <span className="font-mono text-base md:text-lg" style={{ color: "#cbd5e1" }}>
              I&apos;m a <TypingRole />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mb-3 max-w-xl text-[15px] sm:text-base leading-relaxed text-slate-300"
          >
            I architect and engineer modern, high-performance web applications —
            {" "}<span className="text-white font-medium">fluid animations, bulletproof backends, production-ready systems.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mb-8 flex items-center gap-1.5 font-mono text-xs text-slate-400"
          >
            <MapPin size={12} className="text-sky-400" /> Bengaluru, India · Available Worldwide
          </motion.div>

          {/* Live GitHub Stats with React Bits DecryptedText */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mb-9 flex flex-wrap gap-8"
          >
            {statItems.map((s) => (
              <div key={s.label} className="group">
                <div className="text-2xl sm:text-3xl font-bold tabular-nums text-white font-mono tracking-tight flex items-center gap-1">
                  <DecryptedText
                    text={s.value}
                    speed={35}
                    maxIterations={8}
                    animateOn="hover"
                    encryptedClassName="text-sky-400 font-mono"
                  />
                </div>
                <p className="text-[11px] font-mono uppercase tracking-widest mt-1 text-slate-400 group-hover:text-sky-400 transition-colors">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mb-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl px-7 py-3 text-[14px] font-semibold text-white shadow-xl transition-all duration-200 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #6366f1 100%)",
                boxShadow: "0 8px 30px rgba(56,189,248,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Explore Projects <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/Prince Kushwaha.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border px-7 py-3 text-[14px] font-semibold backdrop-blur-md transition-all duration-200"
              style={{
                borderColor: "rgba(255,255,255,0.12)",
                background: "rgba(13,20,36,0.65)",
                color: "#f8fafc",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.4)";
                e.currentTarget.style.color = "#38bdf8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "#f8fafc";
              }}
            >
              <FileText size={14} /> Resume
            </Link>
            <a
              href="#contact"
              className="text-sm font-semibold transition hover:opacity-80 flex items-center gap-1 text-sky-400"
            >
              Let&apos;s talk →
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <span className="mr-2 text-xs uppercase tracking-widest text-[#94a3b8] font-mono">
              Find me
            </span>
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-200"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(13,20,36,0.65)",
                  color: "#94a3b8",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "rgba(56,189,248,0.4)";
                  e.currentTarget.style.color = "#38bdf8";
                  e.currentTarget.style.boxShadow = "0 0 16px rgba(56,189,248,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.08)";
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
