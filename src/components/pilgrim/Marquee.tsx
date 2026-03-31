import { motion, useReducedMotion } from "motion/react";

interface MarqueeProps {
  items: readonly string[];
  className?: string;
  speed?: number;
}

export function Marquee({
  items,
  className = "",
  speed = 26,
}: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const repeated = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap"
        animate={prefersReducedMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: prefersReducedMotion ? 0 : Infinity,
        }}
      >
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.34em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--ps-gold)]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
