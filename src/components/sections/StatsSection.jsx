"use client";

const SERVICES = [
  "Full-Stack Development",
  "Clean UI",
  "Responsive Design",
  "SEO Optimization",
  "API Development",
  "Performance Tuning",
  "Database Design",
  "Cloud Deployment",
  "Authentication & Security",
  "Real-Time Applications",
  "Mobile-First Design",
  "Code Architecture",
];

export default function StatsSection() {
  const doubled = [...SERVICES, ...SERVICES];

  return (
    <section className="relative border-y border-white/10 bg-[#080d1b]/70 overflow-hidden py-5">
      {/* Left / right fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#080d1b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#080d1b] to-transparent" />

      <div className="marquee-track flex w-max items-center gap-6">
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.15em] text-[#8fa2ca] transition-colors hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
