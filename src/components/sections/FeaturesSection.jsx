"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { fadeUp, stagger, formatTechName } from "@/data/constants";

export default function FeaturesSection() {
  return (
    <motion.section
      id="features"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8"
    >
      <p className="text-center text-xs uppercase tracking-[0.2em] text-[#7f9de0]">Why Work With Me</p>
      <h2 className="mt-3 text-center playto-serif text-5xl text-white">Built for the way you work.</h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-[#8ea0c7]">
        Everything needed to launch, optimize, and grow your product.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((item) => (
          <motion.article
            key={item.name}
            variants={fadeUp}
            className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-[0_15px_40px_rgba(5,10,25,0.45)]"
          >
            <div className="relative h-44 w-full overflow-hidden border-b border-white/10">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[#9eadd0]">
                {item.description.slice(0, 145)}...
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#2c3a63] bg-[#121a2f] px-3 py-1 text-xs text-[#b8c7ec]"
                  >
                    {formatTechName(tech)}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
