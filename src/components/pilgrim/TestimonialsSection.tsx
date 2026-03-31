import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { TESTIMONIALS, PS_COLORS } from "./constants";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[var(--ps-sand)] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: PS_COLORS.oxblood }}>
              School Notes
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.8rem)] leading-[0.98]" style={{ color: PS_COLORS.navy }}>
              Official Pilgrim details, arranged like archival notes.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <Reveal delay={0.08}>
            <div className="space-y-3">
              {TESTIMONIALS.map((testimonial, index) => (
                <button
                  key={testimonial.author}
                  onClick={() => setActive(index)}
                  className="w-full rounded-[24px] border p-5 text-left transition-all"
                  style={{
                    background: index === active ? "rgba(252,250,245,0.96)" : "rgba(246,241,231,0.55)",
                    borderColor: index === active ? PS_COLORS.gold : PS_COLORS.border,
                    boxShadow: index === active ? "0 16px 36px rgba(15,28,46,0.08)" : "none",
                  }}
                >
                  <p className="text-[11px] uppercase tracking-[0.32em]" style={{ color: PS_COLORS.oxblood }}>
                    Note {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-3 text-lg font-semibold" style={{ color: PS_COLORS.navy }}>
                    {testimonial.author}
                  </div>
                  <div className="mt-1 text-sm" style={{ color: PS_COLORS.moss }}>
                    {testimonial.role}
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="ps-paper-card rounded-[34px] p-8 sm:p-12"
                style={{ borderTop: `4px solid ${PS_COLORS.gold}` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: PS_COLORS.oxblood }}>
                    Official note
                  </p>
                  <div
                    className="rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.28em]"
                    style={{ background: PS_COLORS.goldDim, color: PS_COLORS.navy }}
                  >
                    {TESTIMONIALS[active].initials}
                  </div>
                </div>

                <blockquote
                  className="mt-8 font-display text-[clamp(1.8rem,3.2vw,2.8rem)] leading-[1.16]"
                  style={{ color: PS_COLORS.ink }}
                >
                  “{TESTIMONIALS[active].quote}”
                </blockquote>

                <div className="mt-10 flex items-center gap-4 border-t pt-6" style={{ borderColor: PS_COLORS.line }}>
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold"
                    style={{ background: PS_COLORS.navy, color: PS_COLORS.cream }}
                  >
                    {TESTIMONIALS[active].initials}
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: PS_COLORS.ink }}>
                      {TESTIMONIALS[active].author}
                    </div>
                    <div className="text-sm" style={{ color: PS_COLORS.moss }}>
                      {TESTIMONIALS[active].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
