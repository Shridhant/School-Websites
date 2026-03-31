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
              A Christian private educational day-cum-residential school in Dimapur, affiliated to
              NBSE and offering Montessori, NCERT middle years, secondary classes, and Arts higher
              secondary education.
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
            <div className="grid gap-4 lg:grid-cols-[0.98fr_0.8fr]">
              <div
                className="relative h-full overflow-hidden rounded-[32px] border p-3"
                style={{
                  borderColor: "rgba(201,164,92,0.28)",
                  background: "rgba(252,250,245,0.62)",
                }}
              >
                <div className="ps-ledger absolute inset-0 opacity-40" />
                <div className="relative h-[280px] overflow-hidden rounded-[24px] sm:h-[320px] lg:h-full lg:min-h-[456px]">
                  <img
                    src={collageImages[0]}
                    alt="Pilgrim campus overview"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,28,46,0.76)] via-[rgba(15,28,46,0.16)] to-[rgba(15,28,46,0.06)]" />
                  <div
                    className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.28em] text-white/85"
                    style={{ borderColor: "rgba(255,255,255,0.24)", backdropFilter: "blur(6px)" }}
                  >
                    Editorial campus view
                  </div>
                  <div
                    className="absolute left-5 top-18 max-w-[16rem] rounded-[28px] border px-5 py-5 shadow-[0_24px_40px_rgba(15,28,46,0.16)] sm:left-6 sm:top-20 sm:px-6 sm:py-6"
                    style={{
                      borderColor: "rgba(201,164,92,0.18)",
                      background: "rgba(246,241,231,0.96)",
                    }}
                  >
                    <p
                      className="text-[11px] uppercase tracking-[0.34em]"
                      style={{ color: PS_COLORS.oxblood }}
                    >
                      Institutional note
                    </p>
                    <h3
                      className="mt-3 font-display text-[clamp(1.85rem,2.7vw,2.8rem)] leading-[0.92]"
                      style={{ color: PS_COLORS.navy }}
                    >
                      Since 1987
                    </h3>
                    <p className="mt-4 text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                      Pilgrim presents itself as a place of studied habits, measured ambition, and
                      visible standards.
                    </p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/66">
                      Institutional character
                    </p>
                    <p className="mt-2 max-w-[9ch] font-display text-[clamp(1.75rem,2.6vw,2.6rem)] leading-[0.98] text-white">
                      NBSE affiliation, visible standards.
                    </p>
                    <div className="mt-6 flex items-end justify-between gap-4">
                      <div className="text-[11px] uppercase tracking-[0.28em] text-white/72">
                        Tradition • scholarship • preparation
                      </div>
                      <div
                        className="inline-flex min-w-[140px] items-center justify-center whitespace-nowrap rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/82"
                        style={{ borderColor: "rgba(255,255,255,0.18)" }}
                      >
                        Chapter I
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="ps-paper-card flex h-full flex-col rounded-[28px] p-2.5">
                  <div className="overflow-hidden rounded-[20px]">
                    <img
                      src={collageImages[1]}
                      alt="Students at Pilgrim"
                      className="h-[200px] w-full object-cover sm:h-[240px] lg:h-[172px]"
                    />
                  </div>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.3em]" style={{ color: PS_COLORS.oxblood }}>
                    Daily school life
                  </p>
                  <p className="mt-2 text-sm leading-6" style={{ color: PS_COLORS.moss }}>
                    Placeholder imagery for your later campus and classroom photography.
                  </p>
                </div>

                <div className="ps-paper-card rounded-[28px] p-5 sm:p-6">
                  <div className="overflow-hidden rounded-[20px]">
                    <img
                      src={collageImages[2]}
                      alt="Library and study environment"
                      className="h-28 w-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.34em]" style={{ color: PS_COLORS.oxblood }}>
                    At a glance
                  </p>
                  <div className="mt-5 space-y-4">
                    {HERO_FACTS.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-center justify-between gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                        style={{ borderColor: PS_COLORS.line }}
                      >
                        <span className="font-display text-[2.1rem] leading-none" style={{ color: PS_COLORS.navy }}>
                          {fact.value}
                        </span>
                        <span
                          className="max-w-[11ch] text-right text-[11px] uppercase tracking-[0.28em]"
                          style={{ color: PS_COLORS.slate }}
                        >
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
