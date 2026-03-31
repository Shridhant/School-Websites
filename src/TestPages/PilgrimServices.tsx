import {
  Footer,
  Navbar,
  PilgrimThemeStyles,
  PS_COLORS,
  Reveal,
  ScrollProgress,
  SectionIntro,
} from "../components/pilgrim";

const services = [
  {
    title: "Bus Facility",
    image: "https://www.pilgrimschool.in/wp-content/uploads/2023/05/bus1.jpg",
    body:
      "Reliable school transport is one of the most practical services families look for first. A dedicated bus facility improves daily access, reduces parent travel pressure, and reinforces punctual attendance.",
    points: [
      "Safer and more organised daily commuting support",
      "Useful for families living farther from campus",
      "Strengthens parent confidence in everyday school logistics",
    ],
  },
  {
    title: "Hostel Accommodation",
    image: "https://www.pilgrimschool.in/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-09-at-12.50.55-PM-1.jpeg",
    body:
      "Hostel accommodation supports the school's day-cum-residential identity and gives students a structured environment designed around routine, supervision, and focused study.",
    points: [
      "Supports residential learning and routine building",
      "Helps students from outside the immediate locality",
      "Adds depth to the school's institutional offering",
    ],
  },
  {
    title: "NCC Air Wing",
    image: "https://www.pilgrimschool.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-23-at-8.55.18-AM-1.jpeg",
    altImage: "https://www.pilgrimschool.in/wp-content/uploads/2023/05/NCC11-1536x1152.jpeg",
    body:
      "NCC gives students structured exposure to discipline, teamwork, responsibility, and confidence-building through a nationally recognised format.",
    points: [
      "Encourages leadership and self-discipline",
      "Builds confidence through organised participation",
      "Adds a distinctive co-curricular strength to the school",
    ],
  },
  {
    title: "Scouts & Guides",
    image: "https://www.pilgrimschool.in/wp-content/uploads/2023/05/BS1.jpeg",
    body:
      "Scouts and Guides activities help shape responsibility, cooperation, service, and character while giving students opportunities to act beyond the classroom.",
    points: [
      "Builds community service values and practical responsibility",
      "Encourages teamwork and self-reliance",
      "Strengthens whole-person development beyond academics",
    ],
  },
];

export default function PilgrimServices() {
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
                eyebrow="School Services"
                title="Practical services that strengthen Pilgrim’s day-to-day school experience."
                body="A dedicated services page helps parents quickly understand the facilities and institutional support systems that make Pilgrim more complete as a school community."
                align="center"
              />
            </div>
          </section>

          <section className="px-6 pb-24">
            <div className="mx-auto grid max-w-7xl gap-6">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.06}>
                  <article
                    className="overflow-hidden rounded-[34px] border"
                    style={{
                      background: "rgba(252,250,245,0.92)",
                      borderColor: PS_COLORS.border,
                      boxShadow: "0 18px 44px rgba(15,28,46,0.07)",
                    }}
                  >
                    <div className="grid gap-0 lg:grid-cols-[0.96fr_1.04fr]">
                      <div className={`grid ${service.altImage ? "sm:grid-cols-2" : ""} gap-0`}>
                        <img src={service.image} alt={service.title} className="h-[320px] w-full object-cover lg:h-full" />
                        {service.altImage ? (
                          <img src={service.altImage} alt={`${service.title} additional view`} className="h-[320px] w-full object-cover lg:h-full" />
                        ) : null}
                      </div>

                      <div className="px-7 py-7 lg:px-9 lg:py-9">
                        <div
                          className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em]"
                          style={{ color: PS_COLORS.oxblood }}
                        >
                          <span className="h-px w-8" style={{ background: PS_COLORS.gold }} />
                          Service Highlight
                        </div>
                        <h2 className="font-display text-[2.2rem] leading-[1.02]" style={{ color: PS_COLORS.ink }}>
                          {service.title}
                        </h2>
                        <p className="mt-5 max-w-[42ch] text-[15px] leading-8" style={{ color: PS_COLORS.moss }}>
                          {service.body}
                        </p>

                        <div className="mt-7 grid gap-3">
                          {service.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3 rounded-[22px] border px-4 py-4 text-sm"
                              style={{ borderColor: PS_COLORS.border, background: "rgba(255,255,255,0.48)" }}
                            >
                              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full" style={{ background: PS_COLORS.gold }} />
                              <span style={{ color: PS_COLORS.navy }}>{point}</span>
                            </div>
                          ))}
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
