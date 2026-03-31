import { motion } from "motion/react";
import { BotanicalAccent } from "./BotanicalAccent";
import { HERO_FACTS, EASE_EXPO, SCHOOL_IMAGES, PS_COLORS } from "./constants";

export function HeroSection() {
  const collageImages = [SCHOOL_IMAGES.hero, SCHOOL_IMAGES.heroMini, SCHOOL_IMAGES.campus1];

  return (
    <section
      className="relative overflow-hidden px-6 pb-16 pt-34 sm:pt-38"
      style={{ background: PS_COLORS.parchment }}
      id="top"
    >
      <div className="ps-ledger absolute inset-0 opacity-70" />
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background: `linear-gradient(180deg, ${PS_COLORS.goldDim}, transparent)`,
        }}
      />
      <BotanicalAccent
        className="absolute -left-8 top-28 hidden h-72 w-56 lg:block"
        color={PS_COLORS.gold}
        opacity={0.18}
      />
      <BotanicalAccent
        className="absolute -right-8 bottom-20 hidden h-72 w-56 rotate-180 lg:block"
        color={PS_COLORS.oxblood}
        opacity={0.12}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          <div className="max-w-[32rem]">
            <motion.div
              className="ps-crest-line inline-flex items-center text-[11px] uppercase tracking-[0.36em]"
              style={{ color: PS_COLORS.oxblood }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_EXPO }}
            >
              Admissions Open 2026-27
            </motion.div>

            <motion.p
              className="mt-7 text-sm uppercase tracking-[0.32em]"
              style={{ color: PS_COLORS.moss }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.08 }}
            >
              Pilgrim School, Dimapur
            </motion.p>

            <motion.h1
              className="mt-6 max-w-[11ch] font-display text-[clamp(2.5rem,5vw,4.7rem)] leading-[0.94]"
              style={{ color: PS_COLORS.ink }}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE_EXPO, delay: 0.14 }}
            >
              Serious learning,
              <span className="block" style={{ color: PS_COLORS.oxblood }}>
                strong formation.
              </span>
            </motion.h1>

            <motion.p
              className="mt-7 max-w-[31rem] text-base leading-8 sm:text-lg"
              style={{ color: PS_COLORS.moss }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.24 }}
            >
              Board performance, competitive exam preparation, and a culture of character-building
              presented with the confidence of an established institution rather than a generic school
              brochure.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE_EXPO, delay: 0.32 }}
            >
              <a href="#admissions" className="ps-button-primary inline-flex items-center justify-center font-medium">
                Begin Admission
              </a>
              <a href="#academics" className="ps-button-secondary inline-flex items-center justify-center font-medium">
                Explore Programs
              </a>
            </motion.div>

            <motion.div
              className="mt-10 grid gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE_EXPO, delay: 0.4 }}
            >
              {HERO_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="ps-paper-card rounded-[22px] px-4 py-4"
                >
                  <div className="font-display text-[2rem] leading-none" style={{ color: PS_COLORS.navy }}>
                    {fact.value}
                  </div>
                  <div
                    className="mt-2 text-[11px] uppercase tracking-[0.28em]"
                    style={{ color: PS_COLORS.slate }}
                  >
                    {fact.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: EASE_EXPO, delay: 0.18 }}
          >
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px] xl:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-4">
                <div
                  className="relative overflow-hidden rounded-[36px] border p-3"
                  style={{
                    borderColor: "rgba(201,164,92,0.28)",
                    background: "rgba(252,250,245,0.62)",
                  }}
                >
                  <div className="ps-ledger absolute inset-0 opacity-40" />

                  <div className="relative h-[380px] overflow-hidden rounded-[28px] sm:h-[560px]">
                    <img
                      src={collageImages[0]}
                      alt="Pilgrim campus overview"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,28,46,0.74)] via-[rgba(15,28,46,0.18)] to-[rgba(15,28,46,0.06)]" />

                    <div
                      className="absolute left-5 top-5 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/85"
                      style={{ borderColor: "rgba(255,255,255,0.24)", backdropFilter: "blur(6px)" }}
                    >
                      Editorial campus view
                    </div>

                    <div
                      className="absolute left-5 top-18 w-[220px] rounded-[26px] border px-5 py-5 backdrop-blur-md sm:w-[250px]"
                      style={{
                        background: "rgba(252,250,245,0.88)",
                        borderColor: "rgba(15,28,46,0.1)",
                        boxShadow: "0 20px 40px rgba(15,28,46,0.16)",
                      }}
                    >
                      <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: PS_COLORS.oxblood }}>
                        Institutional note
                      </p>
                      <h3 className="mt-3 font-display text-[clamp(1.75rem,2.5vw,2.5rem)] leading-none" style={{ color: PS_COLORS.navy }}>
                        Since 1987
                      </h3>
                      <p className="mt-3 text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                        Pilgrim presents itself as a place of studied habits, measured ambition, and visible standards.
                      </p>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                      <div className="max-w-lg">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-white/66">
                          Institutional character
                        </p>
                        <p className="mt-2 font-display text-[clamp(1.8rem,2.7vw,2.8rem)] leading-[0.98] text-white">
                          Rigorous academics, visible standards
                        </p>
                      </div>
                      <div
                        className="hidden rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.28em] md:block"
                        style={{ borderColor: "rgba(255,255,255,0.24)", color: "rgba(255,255,255,0.82)" }}
                      >
                        Chapter I
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-4 flex justify-center lg:justify-start">
                    <div
                      className="inline-flex rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.32em]"
                      style={{
                        background: "rgba(246,241,231,0.96)",
                        borderColor: "rgba(15,28,46,0.12)",
                        color: PS_COLORS.navy,
                      }}
                    >
                      Tradition • scholarship • preparation
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="ps-paper-card rounded-[28px] p-3">
                  <div className="overflow-hidden rounded-[22px]">
                    <img
                      src={collageImages[1]}
                      alt="Students at Pilgrim"
                      className="h-52 w-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.3em]" style={{ color: PS_COLORS.oxblood }}>
                    Daily school life
                  </p>
                  <p className="mt-2 text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                    Placeholder imagery for your later campus and classroom photography.
                  </p>
                </div>

                <div className="ps-paper-card rounded-[28px] p-5 sm:p-6">
                  <div className="mb-4 overflow-hidden rounded-[20px]">
                    <img
                      src={collageImages[2]}
                      alt="School environment"
                      className="h-24 w-full object-cover"
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: PS_COLORS.oxblood }}>
                    At a glance
                  </p>
                  <div className="mt-5 space-y-4">
                    {HERO_FACTS.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-center justify-between gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                        style={{ borderColor: PS_COLORS.line }}
                      >
                        <span className="font-display text-[2rem]" style={{ color: PS_COLORS.navy }}>
                          {fact.value}
                        </span>
                        <span className="text-right text-[11px] uppercase tracking-[0.28em]" style={{ color: PS_COLORS.slate }}>
                          {fact.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
