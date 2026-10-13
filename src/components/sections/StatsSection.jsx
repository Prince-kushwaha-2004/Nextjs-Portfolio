"use client";

const SERVICES = [
  "Full-Stack Development",
  "Clean API Design",
  "Responsive UI",
  "SEO Optimization",
  "Performance Tuning",
  "Database Architecture",
  "Cloud Deployment",
  "Auth & Security",
  "Real-Time Apps",
  "Code Architecture",
];

const DOT_COLORS = ["#38bdf8", "#10b981", "#f59e0b", "#6366f1", "#a855f7"];

export default function StatsSection() {
  const doubled = [...SERVICES, ...SERVICES];
  return (
    <section
      className="relative overflow-hidden border-y py-3.5"
      style={{ background: "rgba(10, 16, 32, 0.65)", borderColor: "var(--border)" }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
        style={{ background: "linear-gradient(to right, #010003, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
        style={{ background: "linear-gradient(to left, #010003, transparent)" }}
      />
      <div className="marquee-track flex w-max items-center">
        {doubled.map((skill, i) => {
          const dotColor = DOT_COLORS[i % DOT_COLORS.length];
          return (
            <span key={`${skill}-${i}`} className="flex items-center gap-5 px-4">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: dotColor,
                  boxShadow: `0 0 8px ${dotColor}`,
                }}
              />
              <span
                className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-white"
                style={{ color: "var(--text-secondary)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {skill}
              </span>
            </span>
          );
        })}
      </div>
    </section>
  );
}
