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

export default function StatsSection() {
  const doubled = [...SERVICES, ...SERVICES];
  return (
    <section
      className="relative overflow-hidden border-y py-3.5"
      style={{ background: "var(--bg-subtle)", borderColor: "var(--border)" }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
        style={{ background: "linear-gradient(to right, var(--bg-subtle), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
        style={{ background: "linear-gradient(to left, var(--bg-subtle), transparent)" }}
      />
      <div className="marquee-track flex w-max items-center">
        {doubled.map((skill, i) => (
          <span key={`${skill}-${i}`} className="flex items-center gap-5 px-4">
            <span
              className="h-1 w-1 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {skill}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
