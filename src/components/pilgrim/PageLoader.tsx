import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { PS_LOGO, PS_COLORS } from "./constants";

interface PageLoaderProps {
  onDone: () => void;
}

export function PageLoader({ onDone }: PageLoaderProps) {
  const [count, setCount] = useState(6);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ps-editorial-loaded")) {
      onDone();
      return;
    }
    let frame = 0;
    const total = 42;
    const id = setInterval(() => {
      frame++;
      setCount(Math.min(100, Math.round(6 + (frame / total) * 94)));
      if (frame >= total) {
        clearInterval(id);
        setTimeout(() => setLeaving(true), 260);
      }
    }, 30);
    return () => clearInterval(id);
  }, [onDone]);

  useEffect(() => {
    if (!leaving) return;
    const id = window.setTimeout(() => {
      sessionStorage.setItem("ps-editorial-loaded", "1");
      onDone();
    }, 900);

    return () => window.clearTimeout(id);
  }, [leaving, onDone]);

  return (
    <div className="fixed inset-0 z-[999] overflow-hidden">
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2"
        style={{ background: PS_COLORS.navy }}
        animate={leaving ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: PS_COLORS.navy }}
        animate={leaving ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center px-6"
        animate={leaving ? { opacity: 0, scale: 0.96 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="text-center">
          <div
            className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.36em]"
            style={{ color: "rgba(246,241,231,0.72)" }}
          >
            <span className="h-px w-10" style={{ background: PS_COLORS.gold }} />
            Editorial Institution
            <span className="h-px w-10" style={{ background: PS_COLORS.gold }} />
          </div>

          <motion.div
            className="mx-auto mb-8 h-24 w-24 overflow-hidden rounded-full border p-1"
            style={{ borderColor: "rgba(201,164,92,0.5)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
          >
            <img
              src={PS_LOGO}
              alt="Pilgrim School"
              className="h-full w-full rounded-full object-cover"
            />
          </motion.div>

          <div
            className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-none"
            style={{ color: PS_COLORS.parchment }}
          >
            Pilgrim School
          </div>
          <p
            className="mt-3 text-sm uppercase tracking-[0.28em]"
            style={{ color: "rgba(246,241,231,0.68)" }}
          >
            Dimapur
          </p>

          <div className="mx-auto mt-10 w-56">
            <div
              className="mb-3 flex justify-between text-[11px] uppercase tracking-[0.32em]"
              style={{ color: "rgba(246,241,231,0.62)" }}
            >
              <span>Loading</span>
              <span>{String(count).padStart(2, "0")}</span>
            </div>
            <div className="h-px w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full origin-left"
                style={{
                  background: `linear-gradient(90deg, ${PS_COLORS.gold}, rgba(246,241,231,0.88))`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: count / 100 }}
                transition={{ duration: 0.25 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
