"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, GitFork, Users, GitCommit, Zap, Shield, TrendingUp } from "lucide-react";
import { fadeUp, stagger } from "@/data/constants";

const GITHUB_USERNAME = "Prince-kushwaha-2004";

const HIGHLIGHTS = [
  {
    icon: Zap,
    title: "Performance First",
    desc: "Optimized from bundle size to DB queries — Core Web Vitals, caching, and CDN-ready.",
    color: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.12)",
    border: "rgba(56, 189, 248, 0.25)",
    glow: "rgba(56, 189, 248, 0.25)",
  },
  {
    icon: Shield,
    title: "Production Ready",
    desc: "Auth, rate limiting, error handling, and deployment baked in from day one.",
    color: "#10b981",
    bg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.25)",
    glow: "rgba(16, 185, 129, 0.25)",
  },
  {
    icon: TrendingUp,
    title: "Scalable by Design",
    desc: "Clean, modular code that grows with your product and is easy for teams to maintain.",
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.25)",
    glow: "rgba(245, 158, 11, 0.25)",
  },
];

function GithubStats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const headers = { Accept: "application/vnd.github+json" };
        const commitHeaders = { Accept: "application/vnd.github.cloak-preview+json" };

        const [uRes, commitsRes, prsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
          fetch(
            `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}&per_page=1`,
            { headers: commitHeaders }
          ),
          fetch(
            `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr&per_page=1`,
            { headers }
          ),
        ]);

        const user = await uRes.json();
        const commitsData = await commitsRes.json();
        const prsData = await prsRes.json();

        setData({
          repos: user.public_repos ?? "37",
          followers: user.followers ?? "9",
          commits: commitsData.total_count ?? "500+",
          prs: prsData.total_count ?? "12",
        });
      } catch {
        setData({ repos: "37", followers: "9", commits: "500+", prs: "12" });
      }
    }
    load();
  }, []);

  const stats = [
    { icon: GitFork, label: "Public Repos", value: data?.repos ?? "37", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)" },
    { icon: GitCommit, label: "Total Commits", value: data?.commits ?? "500+", color: "#10b981", bg: "rgba(16, 185, 129, 0.12)" },
    { icon: Users, label: "Pull Requests", value: data?.prs ?? "12", color: "#818cf8", bg: "rgba(99, 102, 241, 0.12)" },
    { icon: Star, label: "Followers", value: data?.followers ?? "9", color: "#fbbf24", bg: "rgba(245, 158, 11, 0.12)" },
  ];

  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map(({ icon: Icon, label, value, color, bg }) => (
        <div
          key={label}
          className="card card-lift rounded-xl p-4 text-center transition-all duration-300 hover:border-current"
          style={{ borderColor: "rgba(56, 189, 248, 0.16)", background: "rgba(11, 18, 33, 0.65)" }}
        >
          <div
            className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg border"
            style={{ background: bg, color: color, borderColor: `${color}33` }}
          >
            <Icon size={16} />
          </div>
          <p
            className="text-xl font-bold tabular-nums"
            style={{ color: "#f8fafc", fontFamily: "'JetBrains Mono', monospace" }}
          >
            {value}
          </p>
          <p className="mt-0.5 text-[11px]" style={{ color: "#94a3b8" }}>
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

const CALENDAR_THEME = {
  dark: ["#0b1320", "#064e3b", "#047857", "#10b981", "#34d399"],
};

export default function FeaturesSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const calendarTheme = CALENDAR_THEME;

  return (
    <motion.section
      id="about"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="section-container"
    >
      {/* Section header */}
      <motion.div variants={fadeUp}>
        <p className="section-label">About</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#f8fafc]">
          Why work with me?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          I write clean, maintainable code and care deeply about both the product and the user experience.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {HIGHLIGHTS.map((h) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={h.title}
              variants={fadeUp}
              className="card card-lift rounded-xl p-5 transition-all duration-300"
              style={{
                borderColor: h.border,
                background: "rgba(11, 18, 33, 0.65)",
              }}
              whileHover={{
                boxShadow: `0 12px 36px -8px ${h.glow}, inset 0 1px 1px rgba(255, 255, 255, 0.15)`,
                borderColor: h.color,
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg border"
                style={{ background: h.bg, color: h.color, borderColor: `${h.color}40` }}
              >
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#f8fafc]">
                {h.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#94a3b8]">
                {h.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* GitHub contribution graph */}
      <motion.div
        variants={fadeUp}
        className="mt-12"
      >
        <div className="flex items-center justify-between mb-5">
          <p className="section-label">GitHub Activity</p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium transition hover:text-[#38bdf8] flex items-center gap-1.5 text-[#38bdf8]"
          >
            @{GITHUB_USERNAME} →
          </a>
        </div>

        <div
          className="card github-calendar-card rounded-xl p-5"
          style={{
            overflowX: "auto",
            background: "rgba(10, 16, 32, 0.70)",
            borderColor: "rgba(56, 189, 248, 0.18)",
          }}
        >
          {mounted ? (
            <GitHubCalendar
              username={GITHUB_USERNAME}
              theme={calendarTheme}
              colorScheme="dark"
              blockSize={14}
              blockMargin={4}
              fontSize={12}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
              style={{ width: "100%" }}
            />
          ) : (
            <div className="h-32 w-full shimmer rounded-lg" />
          )}
        </div>

        <GithubStats />
      </motion.div>
    </motion.section>
  );
}
