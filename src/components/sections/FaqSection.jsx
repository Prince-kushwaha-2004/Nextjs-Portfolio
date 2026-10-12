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
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
          Common questions
        </h2>
      </motion.div>

      <div className="space-y-2">
        {FAQs.map((item, index) => {
          const isOpen = openFaq === index;
          return (
            <motion.article
              key={item.q}
              variants={fadeUp}
              className="card overflow-hidden rounded-xl"
              style={{
                borderColor: isOpen ? "var(--accent)" : "var(--border)",
              }}
            >
              <button
                id={`faq-btn-${index}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenFaq((prev) => (prev === index ? -1 : index))}
                aria-expanded={isOpen}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: isOpen ? "var(--accent)" : "var(--text-primary)" }}
                >
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                  style={{ color: isOpen ? "var(--accent)" : "var(--text-muted)" }}
                >
                  <ChevronDown size={16} />
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
                    <div className="h-px mx-5" style={{ background: "var(--border-muted)" }} />
                    <p className="px-5 pb-4 pt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
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
