import { Reveal } from "./Reveal";
import { NumberTicker } from "./NumberTicker";
import { ACHIEVEMENTS, PS_COLORS } from "./constants";

export function AchievementsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28" style={{ background: PS_COLORS.navy }} id="results">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(201,164,92,0.16), transparent 32%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: "rgba(246,241,231,0.7)" }}>
                School Profile
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.3rem,4vw,3.9rem)] leading-[0.98]" style={{ color: PS_COLORS.cream }}>
                Official school details shown as a clearer institutional profile.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7" style={{ color: "rgba(246,241,231,0.72)" }}>
                This section no longer implies exam claims that are not on the official website. It now
                highlights Pilgrim’s published structure, founding, board affiliation, and school model.
              </p>
            </div>

            <div
              className="rounded-[30px] border px-6 py-7 sm:px-8"
              style={{ borderColor: "rgba(201,164,92,0.2)", background: "rgba(246,241,231,0.06)" }}
            >
              <div className="grid gap-5 text-sm sm:grid-cols-3">
                {[
                  "Christian private educational identity",
                  "Day-cum-residential school format",
                  "NBSE structure across the school journey",
                ].map((note) => (
                  <div
                    key={note}
                    className="border-l pl-4"
                    style={{ borderColor: "rgba(201,164,92,0.25)", color: "rgba(246,241,231,0.76)" }}
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {ACHIEVEMENTS.map((achievement, i) => (
              <Reveal key={achievement.label} delay={i * 0.08}>
                <article
                  className="rounded-[30px] border p-8"
                  style={{
                    background: i % 2 === 0 ? "rgba(252,250,245,0.96)" : "rgba(246,241,231,0.9)",
                    borderColor: "rgba(201,164,92,0.18)",
                  }}
                >
                  <p className="text-[11px] uppercase tracking-[0.32em]" style={{ color: PS_COLORS.oxblood }}>
                    Record {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-6 font-display text-[clamp(2.4rem,4.6vw,3.7rem)] leading-none" style={{ color: PS_COLORS.navy }}>
                    <NumberTicker value={achievement.value} suffix={achievement.suffix} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold" style={{ color: PS_COLORS.ink }}>
                    {achievement.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                    {achievement.subtext}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <aside className="ps-ink-panel rounded-[32px] p-8 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: "rgba(201,164,92,0.8)" }}>
                Profile Note
              </p>
              <h3 className="mt-5 font-display text-[2.2rem] leading-[1.02]" style={{ color: PS_COLORS.cream }}>
                A more accurate Pilgrim section, based on the official school site.
              </h3>
              <p className="mt-5 text-sm leading-7" style={{ color: "rgba(246,241,231,0.72)" }}>
                Instead of repeating unsupported outcome claims, this panel now frames published school
                information with contrast, sequencing, and stronger institutional emphasis.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Founded in 1987 by Mr. & Mrs. M Kikon.",
                  "Affiliated to NBSE with Montessori through higher secondary Arts.",
                  "Presented as a profile rather than an invented result sheet.",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-t pt-4 text-sm leading-7"
                    style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(246,241,231,0.72)" }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
