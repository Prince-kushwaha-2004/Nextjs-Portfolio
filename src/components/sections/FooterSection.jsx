"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, fadeUp } from "@/data/constants";
import toast from "react-hot-toast";

export default function FooterSection() {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);

    try {
      const payload = {
        ...formData,
        access_key: "e87d74b1-e8ec-4dfb-a003-850b929cb834",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Unable to send message right now.");
      }
    } catch (error) {
      toast.error("Something went wrong while sending.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.footer
      id="contact"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-4 w-full border-t border-white/10 bg-gradient-to-b from-[#0b1020] via-[#080d18] to-[#060a14] py-4"
    >
      <div className="w-full px-4 py-10 md:rounded-2xl md:px-8 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7f9de0]">Contact Me</p>
            <h2 className="mt-3 playto-serif text-5xl text-white">Let us build something meaningful.</h2>
            <p className="mt-5 text-sm leading-7 text-[#9fb1d8] md:text-base">
              Whether you are launching a new product, upgrading an existing platform, or need a reliable developer for your team, I can help you build fast, scalable, and user-focused web experiences.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#9fb1d8] md:text-base">
              Share your idea, timeline, and requirements. I will review everything carefully and get back with the right approach.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[#c5d4f8]">
              <p>Email: princekk102004@gmail.com</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-[#d9e4ff] transition hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-[#0a1222]/70 p-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="rounded-xl border border-white/20 bg-[#0b1223] px-4 py-3 text-white outline-none placeholder:text-[#7385ad] focus:border-[#4f7eff]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="rounded-xl border border-white/20 bg-[#0b1223] px-4 py-3 text-white outline-none placeholder:text-[#7385ad] focus:border-[#4f7eff]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell me about your project"
              className="rounded-xl border border-white/20 bg-[#0b1223] px-4 py-3 text-white outline-none placeholder:text-[#7385ad] focus:border-[#4f7eff]"
            />
            <button
              type="submit"
              disabled={sending}
              className="rounded-full bg-[#316dff] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#3a78ff] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-[#8698be] md:flex-row">
        <p>Copyright © 2026 Prince Kushwaha</p>
        <p className="text-xs uppercase tracking-[0.18em] text-[#7f9de0]">Built with Next.js</p>
      </div>
    </motion.footer>
  );
}
