"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";

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
              background: scrolled ? "rgba(10, 15, 30, 0.78)" : "rgba(10, 15, 30, 0.45)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: scrolled
                ? "1px solid rgba(56, 189, 248, 0.25)"
                : "1px solid rgba(255, 255, 255, 0.09)",
              boxShadow: scrolled
                ? "0 12px 36px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)"
                : "0 6px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
              transition: "all 0.35s ease",
            }}
          >
            {/* Specular shine line at top */}
            <div
              className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5), rgba(168,85,247,0.4), transparent)",
              }}
            />

            {/* Logo */}
            <span
              className="font-mono text-sm font-bold select-none tracking-tight"
              style={{ color: "#38bdf8" }}
            >
              <span style={{ color: "rgba(255,255,255,0.3)" }}>~/</span>prince
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

            {/* Desktop nav links */}
            <nav className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200"
                  style={{ color: "#94a3b8" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#f8fafc";
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl px-3 py-1 text-xs font-semibold tracking-wide transition-all duration-200"
                style={{
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.28)",
                  color: "#38bdf8",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.22)";
                  e.currentTarget.style.boxShadow = "0 0 16px rgba(56, 189, 248, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Hire Me
              </a>

              {/* Mobile hamburger */}
              <button
                className="flex h-8 w-8 items-center justify-center rounded-xl md:hidden transition"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#cbd5e1",
                }}
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
              background: "rgba(10, 15, 30, 0.88)",
              borderColor: "rgba(56, 189, 248, 0.25)",
              backdropFilter: "blur(24px) saturate(180%)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex flex-col gap-1 p-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium transition"
                  style={{ color: "#cbd5e1" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#38bdf8";
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#cbd5e1";
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
