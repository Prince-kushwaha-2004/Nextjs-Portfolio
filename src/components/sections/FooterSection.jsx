"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, fadeUp } from "@/data/constants";
import { Send, MapPin, Mail, Sparkles, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
import FollowTheSun from "@/components/FollowTheSun";
import LuminousType from "@/components/LuminousType";

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
        toast.success("Message sent! I'll get back to you shortly.");
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

  const inputClass = "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-[#94a3b8]/50";
  const inputStyle = {
    background: "rgba(10, 15, 30, 0.65)",
    borderColor: "rgba(255, 255, 255, 0.1)",
    color: "#f8fafc",
    backdropFilter: "blur(12px)",
  };

  return (
    <motion.footer
      id="contact"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="relative w-full border-t backdrop-blur-xl"
      style={{ borderColor: "rgba(255, 255, 255, 0.08)", background: "rgba(6, 8, 19, 0.75)" }}
    >
      <div className="section-container relative z-10 pt-16 pb-12">
        {/* Header with React Bits Pro Luminous Type */}
        <div className="mb-10 text-center md:text-left">
          <p className="section-label">Connect &amp; Collaborate</p>
          <div className="mt-4">
            <LuminousType
              className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight"
              spotlightColor="rgba(56, 189, 248, 0.95)"
              glowColor="rgba(129, 140, 248, 0.4)"
              spotlightSize={320}
            >
              Let&apos;s build something exceptional.
            </LuminousType>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#94a3b8]">
            Whether you need a high-performance web platform, a modern Next.js frontend, or robust backend architecture — let&apos;s connect.
          </p>
        </div>

        {/* ── React Bits Pro Block: Features 17 Follow-The-Sun ── */}
        <div className="mb-14">
          <FollowTheSun />
        </div>

        {/* Contact info + form */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
          {/* Left: Contact Info & Socials */}
          <div className="rounded-3xl border border-white/10 bg-[rgba(13,20,36,0.65)] p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-sky-400" /> Direct Channels
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:princekk102004@gmail.com"
                className="group flex items-center gap-3 text-sm transition hover:text-[#38bdf8]"
                style={{ color: "#cbd5e1" }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#38bdf8]/30 transition-transform group-hover:scale-110"
                  style={{ background: "rgba(56, 189, 248, 0.12)", color: "#38bdf8", boxShadow: "0 0 16px rgba(56,189,248,0.2)" }}
                >
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                  <div className="font-semibold text-white group-hover:text-sky-400">princekk102004@gmail.com</div>
                </div>
              </a>
              <div
                className="flex items-center gap-3 text-sm"
                style={{ color: "#cbd5e1" }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#38bdf8]/30"
                  style={{ background: "rgba(56, 189, 248, 0.12)", color: "#38bdf8", boxShadow: "0 0 16px rgba(56,189,248,0.2)" }}
                >
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location &amp; Availability</div>
                  <div className="font-semibold text-white">Bengaluru, India · Worldwide Remote OK</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#94a3b8]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Find me on
              </p>
              <div className="flex flex-wrap gap-2.5">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium backdrop-blur-md transition-all duration-200"
                      style={{
                        borderColor: "rgba(255, 255, 255, 0.1)",
                        background: "rgba(13, 20, 36, 0.65)",
                        color: "#cbd5e1",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.5)";
                        e.currentTarget.style.color = "#38bdf8";
                        e.currentTarget.style.boxShadow = "0 0 16px rgba(56, 189, 248, 0.2)";
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                        e.currentTarget.style.color = "#cbd5e1";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Developer snippet decoration */}
            <div
              className="mt-6 rounded-2xl border p-4 font-mono text-xs shadow-xl backdrop-blur-md leading-6"
              style={{
                borderColor: "rgba(255, 255, 255, 0.1)",
                background: "rgba(10, 15, 30, 0.7)",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <span style={{ color: "#94a3b8" }}>// reach out anytime</span>
              <br />
              <span style={{ color: "#f43f5e" }}>const </span>
              <span style={{ color: "#38bdf8" }}>developer </span>
              <span style={{ color: "#f8fafc" }}>= </span>
              <span style={{ color: "#c084fc" }}>{`{`}</span>
              <br />
              <span style={{ color: "#cbd5e1" }}>{"  status: "}</span>
              <span style={{ color: "#34d399" }}>&quot;available_for_hire&quot;</span>
              <span>,</span>
              <br />
              <span style={{ color: "#cbd5e1" }}>{"  response: "}</span>
              <span style={{ color: "#34d399" }}>&quot;&lt; 2 hours&quot;</span>
              <br />
              <span style={{ color: "#c084fc" }}>{`}`}</span>
              <span>;</span>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-[rgba(13,20,36,0.65)] p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/30">
                <MessageSquare size={16} />
              </div>
              <h4 className="text-lg font-bold text-white">Send a Message</h4>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Alex Smith"
                  className={inputClass}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#38bdf8";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(56, 189, 248, 0.25)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="alex@company.com"
                  className={inputClass}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#38bdf8";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(56, 189, 248, 0.25)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hi Prince, I'd like to discuss an opportunity or project..."
                className={inputClass}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#38bdf8";
                  e.currentTarget.style.boxShadow = "0 0 16px rgba(56, 189, 248, 0.25)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              id="contact-submit-btn"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #6366f1 100%)",
                boxShadow: "0 8px 25px rgba(56, 189, 248, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
              }}
            >
              <Send size={15} />
              {sending ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-5 py-5 md:px-8"
        style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 text-xs sm:flex-row"
          style={{ color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>
          <span>© {new Date().getFullYear()} Prince Kushwaha · Full Stack Engineer</span>
          <span className="flex items-center gap-1.5" style={{ color: "#38bdf8" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Designed with React Bits &amp; Modern Glassmorphism
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
