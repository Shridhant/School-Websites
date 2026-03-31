import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { CAMPUS_AREAS, SCHOOL_IMAGES, PS_COLORS } from "./constants";

export function CampusLifeSection() {
  const images = [
    SCHOOL_IMAGES.campus1,
    SCHOOL_IMAGES.campus2,
    SCHOOL_IMAGES.campus3,
    SCHOOL_IMAGES.campus4,
    SCHOOL_IMAGES.campus5,
  ];
  const cardLabels = [
    "Featured facility",
    "Digital access",
    "Reading culture",
    "House spirit",
    "Public life",
  ];

  return (
    <section className="bg-[var(--ps-cream)] px-6 py-28" id="campus">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.08fr_0.72fr] lg:items-end">
          <Reveal>
            <div className="max-w-4xl">
              <div
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.34em]"
                style={{ color: PS_COLORS.oxblood }}
              >
                <span className="h-px w-10" style={{ background: PS_COLORS.gold }} />
                Campus Chronicle
              </div>
              <h2
                className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,4vw,3.9rem)] leading-[0.98]"
                style={{ color: PS_COLORS.ink }}
              >
                Facilities arranged like a finished editorial spread.
              </h2>
              <p className="mt-5 max-w-3xl text-[15px] leading-8" style={{ color: PS_COLORS.moss }}>
                The section now mixes a lead campus image, concise supporting plates, and a narrative
                panel so the composition feels deliberate instead of unfinished.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div
              className="max-w-md border-l pl-5 text-sm leading-8"
              style={{ borderColor: PS_COLORS.gold, color: PS_COLORS.moss }}
            >
              Spaces are arranged like magazine panels: a dominant lead image, supporting campus plates,
              and a narrative block that explains why these environments matter to student life.
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
          <Reveal>
            <motion.article
              className="relative overflow-hidden rounded-[34px] border p-3"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              style={{
                borderColor: "rgba(201,164,92,0.24)",
                background: "rgba(252,250,245,0.68)",
              }}
            >
              <div className="ps-ledger absolute inset-0 opacity-40" />
              <div className="relative h-[360px] overflow-hidden rounded-[28px] sm:h-[520px]">
                <img
                  src={images[0]}
                  alt={CAMPUS_AREAS[0].name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,28,46,0.84)] via-[rgba(15,28,46,0.18)] to-transparent" />
                <div className="absolute left-6 top-6">
                  <div
                    className="rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/84"
                    style={{ borderColor: "rgba(255,255,255,0.22)", backdropFilter: "blur(6px)" }}
                  >
                    {cardLabels[0]}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="mt-2 font-display text-[clamp(1.9rem,2.8vw,3rem)] leading-[0.98] text-white">
                    {CAMPUS_AREAS[0].name}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">
                    {CAMPUS_AREAS[0].caption}
                  </p>
                </div>
              </div>
            </motion.article>
          </Reveal>

          <Reveal delay={0.06}>
            <div
              className="ps-paper-card rounded-[30px] p-7"
              style={{ background: "rgba(252,250,245,0.96)" }}
            >
              <p className="text-[11px] uppercase tracking-[0.32em]" style={{ color: PS_COLORS.oxblood }}>
                Campus Narrative
              </p>
              <h3
                className="mt-5 max-w-lg font-display text-[clamp(2rem,3.4vw,3.4rem)] leading-[0.98]"
                style={{ color: PS_COLORS.navy }}
              >
                Environments that support routine, ambition, and community life.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                This section now balances atmosphere with explanation. Instead of simply showing
                facilities, it frames why each space matters in the everyday experience of the student.
              </p>
              <div
                className="mt-6 border-t pt-4 text-[11px] uppercase tracking-[0.28em]"
                style={{ borderColor: PS_COLORS.line, color: PS_COLORS.slate }}
              >
                Routine • aspiration • belonging
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-1">
            {[1, 2].map((index) => (
              <Reveal key={CAMPUS_AREAS[index].name} delay={index * 0.06}>
                <motion.article
                  className="ps-paper-card overflow-hidden rounded-[28px] p-3"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="overflow-hidden rounded-[22px]">
                    <img
                      src={images[index]}
                      alt={CAMPUS_AREAS[index].name}
                      className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.3em]" style={{ color: PS_COLORS.oxblood }}>
                    {cardLabels[index]}
                  </p>
                  <h3 className="mt-2 font-display text-[2rem] leading-none" style={{ color: PS_COLORS.navy }}>
                    {CAMPUS_AREAS[index].name}
                  </h3>
                  <p className="mt-3 text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                    {CAMPUS_AREAS[index].caption}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {[3, 4].map((index) => (
              <Reveal key={CAMPUS_AREAS[index].name} delay={index * 0.06}>
                <motion.article
                  className="ps-paper-card overflow-hidden rounded-[28px] p-3"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="overflow-hidden rounded-[22px]">
                    <img
                      src={images[index]}
                      alt={CAMPUS_AREAS[index].name}
                      className="h-48 w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.3em]" style={{ color: PS_COLORS.oxblood }}>
                    {cardLabels[index]}
                  </p>
                  <h3 className="mt-2 font-display text-[2rem] leading-none" style={{ color: PS_COLORS.navy }}>
                    {CAMPUS_AREAS[index].name}
                  </h3>
                  <p className="mt-3 text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                    {CAMPUS_AREAS[index].caption}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
