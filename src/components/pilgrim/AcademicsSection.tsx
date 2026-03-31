import { Reveal } from "./Reveal";
import { PROGRAMS, SCHOOL_IMAGES, PS_COLORS } from "./constants";
import { SpotlightCard } from "./SpotlightCard";
import { TiltCard } from "./TiltCard";

export function AcademicsSection() {
  const images = [
    SCHOOL_IMAGES.prog1,
    SCHOOL_IMAGES.prog2,
    SCHOOL_IMAGES.prog3,
    SCHOOL_IMAGES.prog4,
    SCHOOL_IMAGES.prog5,
  ];
  const streamMeta = [
    { tag: "Early years", serial: "01", note: "Featured programme" },
    { tag: "Middle years", serial: "02", note: "NCERT track" },
    { tag: "Secondary", serial: "03", note: "NBSE high school" },
    { tag: "Senior years", serial: "04", note: "Arts higher secondary" },
    { tag: "School life", serial: "05", note: "Activities and vocation" },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--ps-cream)] px-6 py-28" id="academics">
      <div className="ps-ledger absolute inset-0 opacity-55" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <div className="max-w-[34rem]">
                <div
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.34em]"
                  style={{ color: PS_COLORS.oxblood }}
                >
                  <span className="h-px w-10" style={{ background: PS_COLORS.gold }} />
                  Academic Chapters
                </div>
                <h2
                  className="mt-5 font-display text-[clamp(2.2rem,3.9vw,3.8rem)] leading-[0.98]"
                  style={{ color: PS_COLORS.ink }}
                >
                  The actual Pilgrim offering, arranged with clearer academic hierarchy.
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7" style={{ color: PS_COLORS.moss }}>
                  This section now reflects the school’s published structure: Montessori, NCERT middle
                  years, NBSE secondary classes, Arts higher secondary, and co-curricular activity.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-[28px] border bg-white/55 p-6" style={{ borderColor: PS_COLORS.border }}>
                {[
                  "Montessori-based early learning for Nursery to UKG.",
                  "NCERT for Classes 1 to 8 and NBSE for Classes 9 to 12.",
                  "Arts higher secondary and co-curricular life presented as official school offerings.",
                ].map((point, index) => (
                  <div
                    key={point}
                    className="flex items-start gap-4 border-b pb-5 last:border-b-0 last:pb-0"
                    style={{ borderColor: PS_COLORS.line }}
                  >
                    <span
                      className="font-display text-2xl leading-none"
                      style={{ color: PS_COLORS.gold }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROGRAMS.map((prog, i) => (
              <TiltCard key={prog.name} className={i === 0 ? "h-full sm:col-span-2" : "h-full"}>
                <Reveal delay={i * 0.07} className="h-full">
                  <SpotlightCard
                    className={`group h-full rounded-[30px] border ${
                      i === 0 ? "h-[340px] sm:h-[360px]" : "h-[300px]"
                    }`}
                    spotlightColor={i % 2 === 0 ? "rgba(201,164,92,0.16)" : "rgba(122,46,46,0.12)"}
                  >
                    <article
                      className="relative h-full overflow-hidden rounded-[30px]"
                      style={{
                        borderColor: PS_COLORS.border,
                        background: i === 0 ? PS_COLORS.navy : "rgba(252,250,245,0.92)",
                      }}
                    >
                      <img
                        src={images[i]}
                        alt={prog.name}
                        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                          i === 0 ? "opacity-50" : "opacity-18"
                        }`}
                      />
                      <div
                        className={`absolute inset-0 ${
                          i === 0
                            ? "bg-gradient-to-t from-[rgba(15,28,46,0.88)] via-[rgba(15,28,46,0.56)] to-[rgba(15,28,46,0.18)]"
                            : "bg-[rgba(246,241,231,0.88)]"
                        }`}
                      />
                      <div className="relative flex h-full flex-col justify-between p-7">
                        <div className="flex items-start justify-between gap-4">
                          <div
                            className="rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.28em]"
                            style={{
                              borderColor:
                                i === 0 ? "rgba(255,255,255,0.18)" : "rgba(15,28,46,0.12)",
                              color: i === 0 ? "rgba(255,255,255,0.72)" : PS_COLORS.oxblood,
                            }}
                          >
                            {streamMeta[i].tag}
                          </div>
                          <span
                            className="font-display text-[2rem]"
                            style={{ color: i === 0 ? PS_COLORS.gold : "rgba(15,28,46,0.18)" }}
                          >
                            {streamMeta[i].serial}
                          </span>
                        </div>

                        <div className="max-w-xl">
                          <p
                            className="mb-3 text-[11px] uppercase tracking-[0.3em]"
                            style={{ color: i === 0 ? "rgba(246,241,231,0.66)" : PS_COLORS.slate }}
                          >
                            {streamMeta[i].note}
                          </p>
                          <h3
                            className={`font-display ${
                              i === 0 ? "text-[2.2rem] sm:text-[2.7rem]" : "text-[2rem]"
                            }`}
                            style={{ color: i === 0 ? PS_COLORS.cream : PS_COLORS.navy }}
                          >
                            {prog.name}
                          </h3>
                          <p
                            className="mt-4 text-sm leading-7"
                            style={{ color: i === 0 ? "rgba(246,241,231,0.78)" : PS_COLORS.moss }}
                          >
                            {prog.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </SpotlightCard>
                </Reveal>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
