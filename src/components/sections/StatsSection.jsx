"use client";

import ShinyText from "@/components/ShinyText";

const SERVICES = [
  "Full-Stack Development",
  "Clean API Design",
  "Responsive UI",
  "Next.js 15 & React",
  "Performance Tuning",
  "Database Architecture",
  "Cloud & Containerization",
  "Auth & Security",
  "Real-Time WebSockets",
  "Glassmorphism UI",
];

export default function StatsSection() {
  const doubled = [...SERVICES, ...SERVICES];
  return (
    <section
      className="relative overflow-hidden border-y py-3.5 backdrop-blur-xl"
      style={{
        background: "rgba(10, 15, 30, 0.5)",
        borderColor: "rgba(255, 255, 255, 0.08)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.06), inset 0 -1px 0 rgba(255, 255, 255, 0.06)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{ background: "linear-gradient(to right, #060813, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{ background: "linear-gradient(to left, #060813, transparent)" }}
      />
      <div className="marquee-track flex w-max items-center">
        {doubled.map((skill, i) => (
          <span key={`${skill}-${i}`} className="flex items-center gap-5 px-5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: i % 2 === 0 ? "#38bdf8" : "#818cf8",
                boxShadow: i % 2 === 0 ? "0 0 8px #38bdf8" : "0 0 8px #818cf8",
              }}
            />
            <ShinyText
              text={skill}
              speed={2.2}
              color="#cbd5e1"
              shineColor="#ffffff"
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] font-mono"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
