import { Link } from "react-router-dom";
import {
  Footer,
  Navbar,
  PilgrimThemeStyles,
  PS_COLORS,
  PILGRIM_EVENTS,
  Reveal,
  ScrollProgress,
  SectionIntro,
} from "../components/pilgrim";

export default function PilgrimEvents() {
  return (
    <>
      <PilgrimThemeStyles />
      <div className="ps-root min-h-screen">
        <ScrollProgress />
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-6 pb-18 pt-32">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-72"
              style={{
                background: "radial-gradient(circle at top, rgba(201,164,92,0.18), transparent 72%)",
              }}
            />
            <div className="mx-auto max-w-7xl">
              <SectionIntro
                eyebrow="Pilgrim Events"
                title="School occasions, celebrations, and milestone moments."
                body="A dedicated events page for Pilgrim that lets families browse major school occasions and open each one as its own themed gallery."
                align="center"
              />

              <Reveal className="mt-10">
                <div className="mx-auto grid max-w-5xl gap-4 rounded-[30px] border px-5 py-5 md:grid-cols-4" style={{ background: "rgba(252,250,245,0.82)", borderColor: PS_COLORS.border }}>
                  {[
                    { value: "4", label: "Featured events" },
                    { value: "Gallery", label: "Photo-first detail view" },
                    { value: "2026-27", label: "Sample school calendar" },
                    { value: "Pilgrim", label: "Theme-aligned layout" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[22px] px-4 py-4" style={{ background: "rgba(255,255,255,0.55)" }}>
                      <div className="font-display text-[1.8rem] font-semibold" style={{ color: PS_COLORS.navy }}>{item.value}</div>
                      <div className="mt-2 text-[11px] uppercase tracking-[0.25em]" style={{ color: PS_COLORS.moss }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          <section className="px-6 pb-24">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
              {PILGRIM_EVENTS.map((event, index) => (
                <Reveal key={event.slug} delay={index * 0.06}>
                  <article
                    className="group overflow-hidden rounded-[32px] border"
                    style={{
                      background: "rgba(252,250,245,0.92)",
                      borderColor: PS_COLORS.border,
                      boxShadow: "0 18px 44px rgba(15,28,46,0.07)",
                    }}
                  >
                    <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
                      <div className="overflow-hidden">
                        <img
                          src={event.cover}
                          alt={event.title}
                          className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-between px-7 py-7 lg:px-8 lg:py-8">
                        <div>
                          <div className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: PS_COLORS.oxblood }}>
                            <span className="h-px w-8" style={{ background: PS_COLORS.gold }} />
                            Featured Event
                          </div>
                          <h2 className="font-display text-[2rem] leading-[1.02]" style={{ color: PS_COLORS.ink }}>
                            {event.title}
                          </h2>
                          <p className="mt-4 text-[15px] leading-7" style={{ color: PS_COLORS.moss }}>
                            {event.description}
                          </p>
                        </div>

                        <div className="mt-8 grid gap-4">
                          <div className="grid gap-3 rounded-[22px] border px-4 py-4 text-sm" style={{ borderColor: PS_COLORS.border, background: "rgba(255,255,255,0.46)" }}>
                            <div>
                              <div className="text-[10px] uppercase tracking-[0.28em]" style={{ color: PS_COLORS.slate }}>Date</div>
                              <div className="mt-1 font-medium" style={{ color: PS_COLORS.navy }}>{event.date}</div>
                            </div>
                            <div>
                              <div className="text-[10px] uppercase tracking-[0.28em]" style={{ color: PS_COLORS.slate }}>Time</div>
                              <div className="mt-1 font-medium" style={{ color: PS_COLORS.navy }}>{event.time}</div>
                            </div>
                            <div>
                              <div className="text-[10px] uppercase tracking-[0.28em]" style={{ color: PS_COLORS.slate }}>Venue</div>
                              <div className="mt-1 font-medium" style={{ color: PS_COLORS.navy }}>{event.location}</div>
                            </div>
                          </div>

                          <Link
                            to={`/pilgrim/events/${event.slug}`}
                            className="ps-button-primary inline-flex items-center justify-center text-sm font-semibold"
                          >
                            View Gallery
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
