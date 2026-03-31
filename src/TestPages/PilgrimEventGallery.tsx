import { Link, Navigate, useParams } from "react-router-dom";
import {
  Footer,
  Navbar,
  PilgrimThemeStyles,
  PILGRIM_EVENTS,
  PS_COLORS,
  Reveal,
  ScrollProgress,
} from "../components/pilgrim";

export default function PilgrimEventGallery() {
  const { slug } = useParams();
  const event = PILGRIM_EVENTS.find((item) => item.slug === slug);

  if (!event) {
    return <Navigate to="/pilgrim/events" replace />;
  }

  return (
    <>
      <PilgrimThemeStyles />
      <div className="ps-root min-h-screen">
        <ScrollProgress />
        <Navbar />
        <main>
          <section className="relative overflow-hidden px-6 pb-16 pt-32">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-72"
              style={{
                background: "radial-gradient(circle at top, rgba(122,46,46,0.18), transparent 72%)",
              }}
            />
            <div className="mx-auto max-w-7xl">
              <Reveal>
                <Link
                  to="/pilgrim/events"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: PS_COLORS.navy }}
                >
                  <span>←</span>
                  Back to Events
                </Link>
              </Reveal>

              <div className="mt-6 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <Reveal>
                  <div className="max-w-xl">
                    <div
                      className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em]"
                      style={{ color: PS_COLORS.oxblood }}
                    >
                      <span className="h-px w-8" style={{ background: PS_COLORS.gold }} />
                      Event Gallery
                    </div>
                    <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.96]" style={{ color: PS_COLORS.ink }}>
                      {event.title}
                    </h1>
                    <p className="mt-5 text-[15px] leading-8" style={{ color: PS_COLORS.moss }}>
                      {event.description}
                    </p>

                    <div className="mt-8 grid gap-4 rounded-[28px] border p-5 sm:grid-cols-3" style={{ borderColor: PS_COLORS.border, background: "rgba(252,250,245,0.82)" }}>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.28em]" style={{ color: PS_COLORS.slate }}>Date</div>
                        <div className="mt-2 text-sm font-medium" style={{ color: PS_COLORS.navy }}>{event.date}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.28em]" style={{ color: PS_COLORS.slate }}>Time</div>
                        <div className="mt-2 text-sm font-medium" style={{ color: PS_COLORS.navy }}>{event.time}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.28em]" style={{ color: PS_COLORS.slate }}>Venue</div>
                        <div className="mt-2 text-sm font-medium" style={{ color: PS_COLORS.navy }}>{event.location}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="overflow-hidden rounded-[34px] border" style={{ borderColor: PS_COLORS.border, boxShadow: "0 22px 58px rgba(15,28,46,0.08)" }}>
                    <img src={event.cover} alt={event.title} className="h-[420px] w-full object-cover" />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="px-6 pb-24">
            <div className="mx-auto max-w-7xl">
              <Reveal className="mb-10">
                <div className="max-w-2xl">
                  <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.98]" style={{ color: PS_COLORS.ink }}>
                    Gallery moments from the event.
                  </h2>
                  <p className="mt-4 text-[15px] leading-7" style={{ color: PS_COLORS.moss }}>
                    A dedicated gallery view lets this event breathe as its own story instead of getting lost inside the main school landing page.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {event.gallery.map((image, index) => (
                  <Reveal key={image} delay={index * 0.06}>
                    <div
                      className={`overflow-hidden rounded-[30px] border ${index === 0 ? "md:col-span-2 xl:col-span-2" : ""}`}
                      style={{ borderColor: PS_COLORS.border, background: "rgba(252,250,245,0.92)", boxShadow: "0 16px 40px rgba(15,28,46,0.06)" }}
                    >
                      <img
                        src={image}
                        alt={`${event.title} gallery image ${index + 1}`}
                        className={`w-full object-cover transition-transform duration-700 hover:scale-[1.02] ${index === 0 ? "h-[420px]" : "h-[320px]"}`}
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
