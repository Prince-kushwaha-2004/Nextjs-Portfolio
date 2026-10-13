"use client";

import { motion } from "framer-motion";

const THEME_COLORS = {
  cyan: {
    text: "rgba(56, 189, 248, 0.16)",
    glow: "rgba(56, 189, 248, 0.18)",
  },
  indigo: {
    text: "rgba(129, 140, 248, 0.16)",
    glow: "rgba(129, 140, 248, 0.18)",
  },
  emerald: {
    text: "rgba(16, 185, 129, 0.16)",
    glow: "rgba(16, 185, 129, 0.18)",
  },
  amber: {
    text: "rgba(245, 158, 11, 0.16)",
    glow: "rgba(245, 158, 11, 0.18)",
  },
};

export default function CodeDecoration({
  symbol = "{ }",
  side = "left", // "left" | "right"
  top,
  bottom,
  size = "text-5xl",
  color = "cyan",
  duration = 5.5,
  delay = 0,
  floatDistance = 12,
  className = "",
}) {
  const palette = THEME_COLORS[color] || THEME_COLORS.cyan;

  const positionClass =
    side === "left"
      ? "left-[2%] xl:left-[3%] 2xl:left-[4.5%]"
      : "right-[2%] xl:right-[3%] 2xl:right-[4.5%]";

  const styleObj = {
    color: palette.text,
    textShadow: `0 0 24px ${palette.glow}`,
  };

  if (top !== undefined) styleObj.top = top;
  if (bottom !== undefined) styleObj.bottom = bottom;

  return (
    <div
      className={`pointer-events-none select-none absolute z-0 hidden xl:block ${positionClass} ${className}`}
      style={styleObj}
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay * 0.4 }}
      >
        <motion.div
          animate={{ y: [0, -floatDistance, 0] }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          className={`font-mono font-bold tracking-tight ${size}`}
        >
          {symbol}
        </motion.div>
      </motion.div>
    </div>
  );
}
