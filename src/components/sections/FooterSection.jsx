"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, fadeUp } from "@/data/constants";
import { Send, MapPin, Mail, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

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
    background: "rgba(15, 8, 30, 0.65)",
    backdropFilter: "blur(12px)",
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
      className="w-full border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="mb-10">
          <p className="section-label">Contact</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
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
                className="flex items-center gap-3 text-sm transition hover:opacity-80"
                style={{ color: "var(--text-secondary)" }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                >
                  <Mail size={15} />
                </div>
                princekk102004@gmail.com
              </a>
              <div
                className="flex items-center gap-3 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--accent-subtle)", color: "var(--accent)" }}
                >
                  <MapPin size={15} />
                </div>
                India · Open to Remote
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
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
                      className="inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-sm font-medium transition hover:opacity-80"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--bg-card)",
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
            <div className="mt-8 code-block text-xs">
              <span style={{ color: "#8d96a0" }}>// reach out anytime</span>
              <br />
              <span style={{ color: "#79c0ff" }}>const </span>
              <span style={{ color: "#e6edf3" }}>contact </span>
              <span style={{ color: "#ff7b72" }}>= </span>
              <span style={{ color: "#a5d6ff" }}>{`{`}</span>
              <br />
              <span style={{ color: "#a5d6ff" }}>{"  email: "}</span>
              <span style={{ color: "#a8daff" }}>&quot;princekk102004@gmail.com&quot;</span>
              <span>,</span>
              <br />
              <span style={{ color: "#a5d6ff" }}>{"  status: "}</span>
              <span style={{ color: "#a8daff" }}>&quot;open_to_work&quot;</span>
              <br />
              <span style={{ color: "#a5d6ff" }}>{`}`}</span>
              <span>;</span>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="card rounded-2xl p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
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
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow = "0 0 14px rgba(192, 132, 252, 0.25)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
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
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow = "0 0 14px rgba(192, 132, 252, 0.25)";
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
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
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
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.boxShadow = "0 0 14px rgba(192, 132, 252, 0.25)";
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
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #7e22ce, #a855f7, #c084fc)",
                boxShadow: "0 4px 20px rgba(168, 85, 247, 0.35)",
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
        className="border-t px-5 py-5 md:px-8"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 text-xs sm:flex-row"
          style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
          <span>© {new Date().getFullYear()} Prince Kushwaha</span>
          <span style={{ color: "var(--accent)" }}>Built with Next.js + Tailwind</span>
        </div>
      </div>
    </motion.footer>
  );
}
