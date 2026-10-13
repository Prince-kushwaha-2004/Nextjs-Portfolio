"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, fadeUp } from "@/data/constants";
import { Send, MapPin, Mail, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import HorizonBloom from "@/components/HorizonBloom";

export default function FooterSection() {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, access_key: "e87d74b1-e8ec-4dfb-a003-850b929cb834" }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send. Try again.");
      }
    } catch {
      toast.error("Network error.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200";
  const inputStyle = {
    background: "rgba(10, 16, 32, 0.70)",
    backdropFilter: "blur(14px)",
    borderColor: "var(--border)",
    color: "var(--text-primary)",
  };

  return (
    <motion.footer
      id="contact"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="relative w-full  overflow-hidden"
    >
      {/* ── Static Glowing Horizon Bloom Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HorizonBloom idPrefix="footer" positionClass="translate-y-24 sm:translate-y-32" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-10">
          <p className="section-label">Contact</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#f8fafc]">
            Let&apos;s build something.
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Got a project in mind? I&apos;d love to hear about it. Fill the form or reach out directly.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Left */}
          <div>
            {/* Contact info */}
            <div className="space-y-4">
              <a
                href="mailto:princekk102004@gmail.com"
                className="flex items-center gap-3 text-sm transition hover:opacity-90 group"
                style={{ color: "var(--text-secondary)" }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 group-hover:scale-105"
                  style={{
                    background: "rgba(56, 189, 248, 0.12)",
                    borderColor: "rgba(56, 189, 248, 0.30)",
                    color: "#38bdf8",
                  }}
                >
                  <Mail size={15} />
                </div>
                <span className="group-hover:text-white transition-colors">princekk102004@gmail.com</span>
              </a>
              <div
                className="flex items-center gap-3 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
                  style={{
                    background: "rgba(16, 185, 129, 0.12)",
                    borderColor: "rgba(16, 185, 129, 0.30)",
                    color: "#10b981",
                  }}
                >
                  <MapPin size={15} />
                </div>
                India · Open to Remote
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#94a3b8]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Find me on
              </p>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:border-[#38bdf8]/50 hover:text-white hover:shadow-[0_0_16px_rgba(56,189,248,0.25)]"
                      style={{
                        borderColor: "var(--border)",
                        background: "rgba(11, 18, 33, 0.65)",
                        backdropFilter: "blur(12px)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Code snippet decoration */}
            <div
              className="mt-8 rounded-xl border p-4 text-xs font-mono leading-relaxed"
              style={{
                borderColor: "rgba(56, 189, 248, 0.18)",
                background: "rgba(10, 16, 32, 0.70)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              }}
            >
              <span style={{ color: "#64748b" }}>// reach out anytime</span>
              <br />
              <span style={{ color: "#38bdf8" }}>const </span>
              <span style={{ color: "#f8fafc" }}>contact </span>
              <span style={{ color: "#38bdf8" }}>= </span>
              <span style={{ color: "#f8fafc" }}>{`{`}</span>
              <br />
              <span style={{ color: "#a5b4fc" }}>{"  email: "}</span>
              <span style={{ color: "#34d399" }}>&quot;princekk102004@gmail.com&quot;</span>
              <span style={{ color: "#94a3b8" }}>,</span>
              <br />
              <span style={{ color: "#a5b4fc" }}>{"  status: "}</span>
              <span style={{ color: "#34d399" }}>&quot;open_to_work&quot;</span>
              <br />
              <span style={{ color: "#f8fafc" }}>{`}`}</span>
              <span style={{ color: "#94a3b8" }}>;</span>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="card rounded-2xl p-6"
            style={{
              background: "rgba(11, 18, 33, 0.70)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(56, 189, 248, 0.20)",
              boxShadow: "0 16px 48px rgba(0, 0, 0, 0.5), 0 0 24px rgba(56, 189, 248, 0.10)",
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClass}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#38bdf8";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(56, 189, 248, 0.25)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#38bdf8";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(56, 189, 248, 0.25)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={inputClass}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#38bdf8";
                  e.currentTarget.style.boxShadow = "0 0 16px rgba(56, 189, 248, 0.25)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              id="contact-submit-btn"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-95 hover:shadow-[0_6px_28px_rgba(56,189,248,0.45)] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #0284c7, #4f46e5, #7c3aed)",
                boxShadow: "0 4px 20px rgba(14, 165, 233, 0.35)",
              }}
            >
              <Send size={14} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10 px-5 py-5 md:px-8"
      >
        <div
          className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 text-xs sm:flex-row"
          style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span>© {new Date().getFullYear()} Prince Kushwaha</span>
          <span style={{ color: "#38bdf8" }}>Built with Next.js + Tailwind</span>
        </div>
      </div>
    </motion.footer>
  );
}
