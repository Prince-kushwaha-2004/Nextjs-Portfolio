"use client";

import { motion } from "framer-motion";

export default function Navbar({ animate }) {
  return (
    <motion.header
      className="sticky top-0 z-30 border-b border-white/10 bg-[#04070f]/70 backdrop-blur-xl"
      initial={animate ? { y: -80, opacity: 0 } : false}
      animate={animate ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <p className="text-xl playto-serif italic font-semibold">
          Prince Kushwaha
        </p>
        <div className="hidden items-center gap-8 text-sm text-[#a8b5d9] md:flex">
          <a href="#features" className="rounded-full px-3 py-1 transition-colors hover:bg-white/10 hover:text-white">Features</a>
          <a href="#skills" className="rounded-full px-3 py-1 transition-colors hover:bg-white/10 hover:text-white">Skills</a>
          <a href="#experience" className="rounded-full px-3 py-1 transition-colors hover:bg-white/10 hover:text-white">Experience</a>
          <a href="#projects" className="rounded-full px-3 py-1 transition-colors hover:bg-white/10 hover:text-white">Projects</a>
          <a href="#faq" className="rounded-full px-3 py-1 transition-colors hover:bg-white/10 hover:text-white">FAQ</a>
          <a href="#contact" className="rounded-full px-3 py-1 transition-colors hover:bg-white/10 hover:text-white">Contact</a>
        </div>
      </nav>
    </motion.header>
  );
}
