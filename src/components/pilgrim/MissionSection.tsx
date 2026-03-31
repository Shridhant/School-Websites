import { motion } from "motion/react";
import { BotanicalAccent } from "./BotanicalAccent";
import { Reveal } from "./Reveal";
import { MISSION_VALUES, SCHOOL_IMAGES, PS_COLORS } from "./constants";

export function MissionSection() {
  const supportingImages = [SCHOOL_IMAGES.heroMini, SCHOOL_IMAGES.campus3];

  return (
    <section className="relative overflow-hidden bg-[var(--ps-parchment)] px-6 py-28" id="mission">
      <div className="ps-ledger absolute inset-0 opacity-50" />
      <BotanicalAccent
        className="absolute left-0 top-24 hidden h-80 w-64 lg:block"
        color={PS_COLORS.gold}
        opacity={0.16}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-[0.96fr_1.04fr]">
          <Reveal>
            <div className="ps-paper-card rounded-[34px] p-8 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: PS_COLORS.oxblood }}>
                School Philosophy
              </p>
              <h2
                className="mt-6 max-w-[12ch] font-display text-[clamp(2.2rem,4.1vw,3.8rem)] leading-[0.98]"
                style={{ color: PS_COLORS.ink }}
              >
                The Fear of the Lord is the Beginning of Wisdom
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                The section is reframed as an institutional statement: less like a generic mission card,
                more like a formal chapter that explains the school’s posture toward learning and conduct.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {supportingImages.map((image, index) => (
                  <div key={image} className="overflow-hidden rounded-[24px] border bg-white/40 p-3" style={{ borderColor: PS_COLORS.border }}>
                    <div className="overflow-hidden rounded-[18px]">
                      <img
                        src={image}
                        alt={index === 0 ? "Students in campus life" : "School environment detail"}
                        className="h-40 w-full object-cover"
                      />
                    </div>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.3em]" style={{ color: PS_COLORS.oxblood }}>
                      {index === 0 ? "Community life" : "Institutional setting"}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-5">
                {MISSION_VALUES.map((value) => (
                  <div key={value.title} className="border-t pt-5" style={{ borderColor: PS_COLORS.line }}>
                    <h3 className="text-lg font-semibold" style={{ color: PS_COLORS.navy }}>
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-4">
              <motion.div
                className="relative overflow-hidden rounded-[34px] border p-3"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                style={{
                  borderColor: "rgba(201,164,92,0.3)",
                  background: "rgba(252,250,245,0.66)",
                }}
              >
                <div className="relative h-[420px] overflow-hidden rounded-[28px] lg:h-[520px]">
                  <img
                    src={SCHOOL_IMAGES.philosophy}
                    alt="Mission"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,28,46,0.8)] via-[rgba(15,28,46,0.12)] to-transparent" />
                  <div
                    className="absolute left-6 top-6 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.28em]"
                    style={{ borderColor: "rgba(255,255,255,0.24)", color: "rgba(255,255,255,0.76)" }}
                  >
                    Foundational motto
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/64">
                      Editorial treatment
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.8rem,2.8vw,2.9rem)] leading-[0.98] text-white">
                      A visual chapter for the school’s core belief.
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/78">
                      The image is no longer decorative filler. It now anchors the philosophy chapter
                      with a formal frame and a more considered overlay.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {supportingImages.map((image, index) => (
                  <motion.div
                    key={`mission-support-${index}`}
                    className="ps-paper-card rounded-[28px] p-3"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="overflow-hidden rounded-[20px]">
                      <img
                        src={image}
                        alt={index === 0 ? "Students" : "Campus interior"}
                        className="h-44 w-full object-cover"
                      />
                    </div>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.3em]" style={{ color: PS_COLORS.oxblood }}>
                      {index === 0 ? "Student formation" : "Learning atmosphere"}
                    </p>
                    <p className="mt-2 text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                      {index === 0
                        ? "Dummy imagery for assemblies, mentoring, and student life."
                        : "A second placeholder visual keeps the philosophy section materially rich."}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
