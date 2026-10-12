"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, GitFork, Users, GitCommit, Zap, Shield, TrendingUp, Github } from "lucide-react";
import { fadeUp, stagger } from "@/data/constants";
import SpotlightCard from "@/components/SpotlightCard";

const GITHUB_USERNAME = "Prince-kushwaha-2004";

const HIGHLIGHTS = [
  {
    icon: Zap,
    title: "Performance First",
    desc: "Optimized from bundle size to DB queries — Core Web Vitals, caching, and CDN-ready.",
    color: "#38bdf8",
  },
  {
    icon: Shield,
    title: "Production Ready",
    desc: "Auth, rate limiting, error handling, and deployment baked in from day one.",
    color: "#c084fc",
  },
  {
    icon: TrendingUp,
    title: "Scalable by Design",
    desc: "Clean, modular code that grows with your product and is easy for teams to maintain.",
    color: "#34d399",
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
          prs: prsData.total_count ?? "15+",
        });
      } catch {
        setData({ repos: "37", followers: "9", commits: "500+", prs: "15+" });
      }
    }
    load();
  }, []);

  const stats = [
    { icon: GitFork, label: "Public Repos", value: data?.repos ?? "37", color: "#38bdf8" },
    { icon: GitCommit, label: "Total Commits", value: data?.commits ?? "500+", color: "#818cf8" },
    { icon: Users, label: "Pull Requests", value: data?.prs ?? "15+", color: "#c084fc" },
    { icon: Star, label: "Followers", value: data?.followers ?? "9", color: "#34d399" },
  ];

  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map(({ icon: Icon, label, value, color }) => (
        <SpotlightCard
          key={label}
          spotlightColor={`${color}30`}
          spotlightSize={180}
          className="rounded-2xl border border-white/10 bg-[rgba(13,20,36,0.65)] p-4 text-center backdrop-blur-xl shadow-xl hover:border-white/20 transition-all"
        >
          <div
            className="mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl"
            style={{
              background: `${color}18`,
              color: color,
              border: `1px solid ${color}30`,
              boxShadow: `0 0 16px ${color}1a`,
            }}
          >
            <Icon size={16} />
          </div>
          <p
            className="text-xl font-bold tabular-nums"
            style={{ color: "#f8fafc", fontFamily: "'JetBrains Mono', monospace" }}
          >
            {value}
          </p>
          <p className="mt-0.5 text-[11px] font-medium" style={{ color: "#94a3b8" }}>
            {label}
          </p>
        </SpotlightCard>
      ))}
    </div>
  );
}

const CALENDAR_THEME = {
  dark: ["rgba(255, 255, 255, 0.05)", "#064e3b", "#059669", "#10b981", "#34d399"],
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
        <p className="section-label">Engineering Philosophy</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#f8fafc]">
          Why work with me?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#94a3b8]">
          I write clean, maintainable code and care deeply about both product performance and developer experience.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {HIGHLIGHTS.map((h) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={h.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <SpotlightCard
                spotlightColor={`${h.color}30`}
                spotlightSize={260}
                className="rounded-2xl border border-white/10 bg-[rgba(13,20,36,0.65)] p-6 backdrop-blur-xl shadow-2xl transition-all hover:border-white/20 h-full"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 12px 30px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: `${h.color}18`,
                    border: `1px solid ${h.color}35`,
                    color: h.color,
                    boxShadow: `0 0 16px ${h.color}20`,
                  }}
                >
                  <Icon size={19} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#f8fafc]">
                  {h.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#94a3b8]">
                  {h.desc}
                </p>
              </SpotlightCard>
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
          <div className="flex items-center gap-2">
            <Github size={16} className="text-sky-400" />
            <p className="section-label m-0">GitHub Activity &amp; Commit History</p>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold transition hover:text-sky-300 font-mono"
            style={{ color: "#38bdf8" }}
          >
            @{GITHUB_USERNAME} →
          </a>
        </div>

        <div
          className="card github-calendar-wrapper rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 bg-[rgba(13,20,36,0.65)] backdrop-blur-2xl"
          style={{ overflowX: "auto" }}
        >
          {mounted ? (
            <GitHubCalendar
              username={GITHUB_USERNAME}
              theme={calendarTheme}
              colorScheme="dark"
              blockSize={13}
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
