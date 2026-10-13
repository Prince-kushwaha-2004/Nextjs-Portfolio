"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ animate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating wrapper — top padding so it hovers above page */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
        <motion.header
          className="w-full max-w-5xl"
          initial={animate ? { y: -80, opacity: 0 } : false}
          animate={animate ? { y: 0, opacity: 1 } : false}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div
            className="relative flex h-12 items-center justify-between rounded-2xl px-4 md:px-6"
            style={{
              background: scrolled ? "rgba(10, 4, 22, 0.78)" : "transparent",
              backdropFilter: scrolled ? "blur(20px)" : "none",
              WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
              border: scrolled
                ? "1px solid rgba(168, 85, 247, 0.22)"
                : "1px solid transparent",
              boxShadow: scrolled
                ? "0 8px 32px rgba(0,0,0,0.5), 0 0 16px rgba(168,85,247,0.12), inset 0 1px 0 rgba(255,255,255,0.08)"
                : "none",
              transition: "all 0.35s ease",
            }}
          >
            {/* Shine line at top — visible only when scrolled */}
            {scrolled && (
              <div
                className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, rgba(192,132,252,0.5), transparent)" }}
              />
            )}

            {/* Logo */}
            <span
              className="font-mono text-sm font-semibold select-none"
              style={{ color: "#c084fc" }}
            >
              <span style={{ color: "#7e6d9b" }}>~/</span>prince
              <span className="cursor" />
            </span>

            {/* Desktop nav links */}
            <nav className="hidden items-center gap-0.5 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-3 py-1.5 text-[13px] font-medium transition-all duration-150"
                  style={{ color: "#c4b5fd" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.background = "rgba(168,85,247,0.14)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#c4b5fd";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Controls / Mobile hamburger */}
            <div className="flex gap-2">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-xl md:hidden"
                style={{ background: "rgba(168,85,247,0.12)", color: "#c084fc", border: "1px solid rgba(168,85,247,0.2)" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={15} /> : <Menu size={15} />}
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-4 top-[72px] z-40 overflow-hidden rounded-2xl border md:hidden"
            style={{
              background: "rgba(10, 4, 22, 0.95)",
              borderColor: "rgba(168,85,247,0.25)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(168,85,247,0.15)",
            }}
          >
            <div className="flex flex-col gap-1 p-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium transition"
                  style={{ color: "#c4b5fd" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.background = "rgba(168,85,247,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#c4b5fd";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
