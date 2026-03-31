import { Reveal } from "./Reveal";
import { WordPullUp } from "./WordPullUp";
import { ADMISSIONS_STEPS, PS_COLORS } from "./constants";

export function AdmissionsSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28"
      style={{ background: PS_COLORS.navy }}
      id="admissions"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(201,164,92,0.16), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: "rgba(201,164,92,0.82)" }}>
                Admissions Desk
              </p>
              <div className="mt-5 max-w-xl">
                <WordPullUp
                  text="Ready to enter a school with visible standards and stronger presence?"
                  className="justify-start"
                  wordClassName="font-display text-[clamp(2.2rem,4vw,3.8rem)] leading-[0.98] text-[var(--ps-cream)]"
                />
              </div>
              <p className="mt-6 max-w-xl text-sm leading-7" style={{ color: "rgba(246,241,231,0.76)" }}>
                Applications for 2026-27 are framed here with more ceremony: a formal panel, clear
                process notes, and stronger calls to action.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#" className="ps-button-primary inline-flex items-center justify-center font-medium">
                  Apply Now
                </a>
                <a
                  href="#newsletter"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border px-6 py-3 text-sm font-medium"
                  style={{ borderColor: "rgba(201,164,92,0.3)", color: PS_COLORS.cream }}
                >
                  Request Prospectus
                </a>
              </div>
            </div>

            <div
              className="rounded-[34px] border bg-[rgba(252,250,245,0.96)] p-8 sm:p-10"
              style={{ borderColor: "rgba(201,164,92,0.22)" }}
            >
              <div className="flex items-center justify-between gap-4 border-b pb-5" style={{ borderColor: PS_COLORS.line }}>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: PS_COLORS.oxblood }}>
                    Admission Process
                  </p>
                  <h3 className="mt-3 font-display text-[2rem]" style={{ color: PS_COLORS.navy }}>
                    Three clear steps
                  </h3>
                </div>
                <div
                  className="rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.28em]"
                  style={{ background: PS_COLORS.goldDim, color: PS_COLORS.navy }}
                >
                  Session 2026
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {ADMISSIONS_STEPS.map((step, index) => (
                  <div key={step} className="flex gap-4 border-b pb-5 last:border-b-0 last:pb-0" style={{ borderColor: PS_COLORS.line }}>
                    <span className="font-display text-[2rem] leading-none" style={{ color: PS_COLORS.gold }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
