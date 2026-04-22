import { Github, Linkedin, Mail } from "lucide-react";

/* ─── X (Twitter) icon ────────────────────────────────────────────── */
export function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2h3.308l-7.226 8.26L22.83 22h-6.654l-5.214-6.817L4.996 22H1.686l7.73-8.835L1.255 2h6.823l4.713 6.231L18.244 2Zm-1.16 18h1.833L7.08 3.894H5.114L17.084 20Z" />
    </svg>
  );
}

/* ─── FAQs ────────────────────────────────────────────────────────── */
export const FAQs = [
  {
    q: "What stack do you usually work with?",
    a: "I mainly ship products with Next.js, React, Tailwind, Node.js, and Django based on project needs.",
  },
  {
    q: "Do you build full-stack products?",
    a: "Yes. I handle frontend, backend APIs, auth, and deployment so products are production-ready end to end.",
  },
  {
    q: "Can you optimize existing websites?",
    a: "Yes. I focus on Core Web Vitals, bundle optimization, image strategy, caching, and cleaner architecture.",
  },
  {
    q: "Are you available for freelance work?",
    a: "Yes, I am available for freelance projects and long-term collaboration.",
  },
];

/* ─── Skills ──────────────────────────────────────────────────────── */
export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Angular",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Redux",
  "Node.js",
  "Express.js",
  "Django",
  "MongoDB",
  "Firebase",
  "Nginx",
  "Docker",
  "WebRTC",
  "C",
  "C++",
  "Python",
  "Git",
  "GitHub",
];

export const SKILL_IMAGES = [
  { name: "React", file: "react.webp" },
  { name: "Next.js", file: "next.webp" },
  { name: "JavaScript", file: "js.webp" },
  { name: "Tailwind CSS", file: "tailwind.webp" },
  { name: "Node.js", file: "nodejs.webp" },
  { name: "Express.js", file: "express.webp" },
  { name: "MongoDB", file: "mongodb.webp" },
  { name: "Django", file: "django.webp" },
  { name: "Docker", file: "docker.webp" },
  { name: "Git", file: "git.webp" },
  { name: "GitHub", file: "github.webp" },
  { name: "WebRTC", file: "webrtc.svg" },
];

/* Scattered honeycomb rows matching the reference image */
export const SKILL_ROWS = [
  [
    { name: "HTML", file: "html.webp" },
    { name: "CSS", file: "css.webp" },
    { name: "JavaScript", file: "js.webp" },
  ],
  [
    { name: "Tailwind CSS", file: "tailwind.webp" },
    { name: "Bootstrap", file: "bootstrap.webp" },
    { name: "Node.js", file: "nodejs.webp" },
    { name: "React", file: "react.webp" },
  ],
  [
    { name: "Express.js", file: "express.webp" },
    { name: "MongoDB", file: "mongodb.webp" },
    { name: "GitHub", file: "github.webp" },
    { name: "Git", file: "git.webp" },
    { name: "Next.js", file: "next.webp" },
  ],
  [
    { name: "Docker", file: "docker.webp" },
    { name: "C", file: "c.webp" },
    { name: "C++", file: "cpp.webp" },
    { name: "Python", file: "python.webp" },
  ],
  [
    { name: "Firebase", file: "firebase.webp" },
    { name: "Nginx", file: "nginx.webp" },
    { name: "Angular", file: "angular.webp" },
  ],
];

/* ─── Experience ──────────────────────────────────────────────────── */
export const EXPERIENCE = [
  {
    company: "EduVerse",
    role: "SDE Intern",
    duration: "September 2024 - Present",
    website: "https://erp.kiet.co.in/login",
    points: [
      "Worked on multiple modules using TanStack Start and DRF, implementing dynamic tables, forms, and responsive layouts to enhance user experience.",
      "Implemented infinite scroll pagination for dropdowns and tables, reducing unnecessary data load by 40% and improving page responsiveness.",
      "Optimized media handling by integrating AWS S3 for secure and scalable image storage, reducing load times by 30%.",
    ],
  },
  {
    company: "TechImpressive Technologies",
    role: "SDE Intern",
    duration: "November 2024 - January 2025",
    website: "https://www.techimpressive.com/",
    points: [
      "Developed and deployed a full-stack platform with Next.js, Prisma, and PostgreSQL focused on job postings and training workflows.",
      "Designed modular APIs and schema-driven data models to support role-based job management, training enrollments, and admin operations.",
      "Improved production readiness with optimized database queries, cleaner deployment setup, and responsive UI flows across devices.",
    ],
  },
  {
    company: "TEAM ERP",
    role: "Full Stack Developer Intern",
    duration: "June 2024 - October 2025",
    website: "https://tech.kiet.edu/team-erp/",
    points: [
      "Contributed to the development of TEAM ERP, an in-house college management system designed, developed, and maintained by students for over 8,000 users, working on 8+ core modules.",
      "Improved user experience and data flow by collaborating with a 10+ member development team.",
      "Participated in full software development lifecycle including SRS documentation, development, testing, and deployment phases.",
    ],
  },
];

/* ─── Social Links ────────────────────────────────────────────────── */
export const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/Prince-kushwaha-2004", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/prince121kk/", icon: Linkedin },
  { name: "X", href: "https://x.com/prince121kk", icon: XIcon },
  { name: "Email", href: "mailto:princekk102004@gmail.com", icon: Mail },
];

/* ─── Animation variants ─────────────────────────────────────────── */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ─── Helpers ─────────────────────────────────────────────────────── */
export const formatTechName = (tech) => {
  const base = tech.split(".")[0].replace(/[-_]/g, " ");
  return base.charAt(0).toUpperCase() + base.slice(1);
};
