import { motion, useReducedMotion } from "motion/react";

interface WordPullUpProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export function WordPullUp({
  text,
  className = "",
  wordClassName = "",
}: WordPullUpProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`flex flex-wrap justify-center gap-x-[0.28em] ${className}`}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden">
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={prefersReducedMotion ? false : { y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              delay: prefersReducedMotion ? 0 : index * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
