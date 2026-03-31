import { useState } from "react";
import { Reveal } from "./Reveal";
import { PS_COLORS } from "./constants";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[var(--ps-parchment)] px-6 py-20" id="newsletter">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="ps-paper-card rounded-[34px] px-6 py-8 sm:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.6fr_1fr] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: PS_COLORS.oxblood }}>
                  Community Bulletin
                </p>
                <h2 className="mt-4 font-display text-[2.2rem] leading-[1.02]" style={{ color: PS_COLORS.navy }}>
                  Receive school news and admissions updates.
                </h2>
              </div>

              <div>
                <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-h-[50px] flex-1 rounded-full border bg-white/70 px-6 focus:outline-none"
                    style={{ borderColor: PS_COLORS.border, color: PS_COLORS.navy }}
                  />
                  <button className="ps-button-primary font-medium">Subscribe</button>
                </form>

                <p className="mt-4 text-xs" style={{ color: PS_COLORS.moss, opacity: 0.8 }}>
                  Notices, events, and prospectus updates delivered with restraint.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
