"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQs, fadeUp, stagger } from "@/data/constants";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <motion.section
      id="faq"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="mx-auto w-full max-w-4xl px-5 py-20 md:px-8"
    >
      <p className="text-center text-xs uppercase tracking-[0.2em] text-[#7f9de0]">FAQ</p>
      <h2 className="mt-3 text-center playto-serif text-5xl text-white">Got questions?</h2>
      <p className="mt-3 text-center text-[#90a3ca]">I have got answers.</p>
      <div className="mt-10 space-y-4">
        {FAQs.map((item, index) => {
          const isOpen = openFaq === index;
          return (
            <motion.article
              key={item.q}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-[#111827]/70 overflow-hidden"
            >
              <button
                className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-semibold text-white"
                onClick={() => setOpenFaq((prev) => (prev === index ? -1 : index))}
              >
                {item.q}
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="text-[#87a8ff] text-xl leading-none select-none"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.25, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.15 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-6 text-[#9aabcf]">{item.a}</p>
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
