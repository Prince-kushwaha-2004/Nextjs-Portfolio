"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQs, fadeUp, stagger } from "@/data/constants";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <motion.section
      id="faq"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="section-container"
    >
      <motion.div variants={fadeUp} className="mb-8">
        <p className="section-label">FAQ</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-[#f8fafc]">
          Common questions
        </h2>
      </motion.div>

      <div className="space-y-3">
        {FAQs.map((item, index) => {
          const isOpen = openFaq === index;
          return (
            <motion.article
              key={item.q}
              variants={fadeUp}
              className="card overflow-hidden rounded-2xl transition-all duration-300"
              style={{
                borderColor: isOpen ? "rgba(56, 189, 248, 0.45)" : "rgba(255, 255, 255, 0.08)",
                boxShadow: isOpen
                  ? "0 8px 30px rgba(56, 189, 248, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  : "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 8px 24px rgba(0, 0, 0, 0.4)",
              }}
            >
              <button
                id={`faq-btn-${index}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left transition hover:opacity-90"
                onClick={() => setOpenFaq((prev) => (prev === index ? -1 : index))}
                aria-expanded={isOpen}
              >
                <span
                  className="text-sm font-semibold transition-colors duration-200"
                  style={{ color: isOpen ? "#38bdf8" : "#f8fafc" }}
                >
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                  style={{ color: isOpen ? "#38bdf8" : "#94a3b8" }}
                >
                  <ChevronDown size={17} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.28 }, opacity: { duration: 0.2, delay: 0.06 } } }}
                    exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.22 }, opacity: { duration: 0.12 } } }}
                    className="overflow-hidden"
                  >
                    <div className="h-px mx-6" style={{ background: "rgba(255, 255, 255, 0.08)" }} />
                    <p className="px-6 pb-5 pt-3.5 text-sm leading-relaxed text-[#cbd5e1]">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
