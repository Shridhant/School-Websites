import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import drugAwarenessImage from "../assets/christina/drug-awareness.jpg";

const campusImage =
  "https://files.yappe.in/place/full/christina-memorial-hr-sec-school-7731447.webp";
const awardeeImage =
  "https://morungexpress.com/sites/default/files/field/image/AWARDEE.jpg";

const navItems = ["About", "Academics", "Student Life", "Achievements", "Admissions"];

const heroBadges = [
  "Higher Secondary School",
  "Community-led learning",
  "Student participation",
];

const stats = [
  { value: "3", label: "Core strengths shaping school life" },
  { value: "4", label: "Simple steps in the admission path" },
  { value: "1", label: "Clear school identity for families" },
];

const schoolFacts = [
  {
    label: "Learning Focus",
    value: "Discipline, clarity, and steady student growth through structured academics.",
  },
  {
    label: "School Culture",
    value: "Events, awareness drives, recognition moments, and active student participation.",
  },
  {
    label: "Tone",
    value: "Calm, organised, and community-centered with a dependable academic atmosphere.",
  },
];

const academicPillars = [
  {
    title: "Academic steadiness",
    copy: "A structured teaching rhythm helps students stay prepared, focused, and consistently improving.",
    image: campusImage,
  },
  {
    title: "Character formation",
    copy: "School life reinforces discipline, responsibility, public conduct, and confidence in daily routines.",
    image: drugAwarenessImage,
  },
  {
    title: "Recognition and confidence",
    copy: "Students are encouraged to step forward, participate visibly, and be recognised for their efforts.",
    image: awardeeImage,
  },
];

const studentLifeCards = [
  {
    title: "Awareness programs",
    copy: "Events beyond the classroom help students engage with real social themes in a meaningful way.",
    image: drugAwarenessImage,
  },
  {
    title: "Community gatherings",
    copy: "Shared occasions build belonging and help students feel part of a larger school identity.",
    image: campusImage,
  },
  {
    title: "Achievement moments",
    copy: "Recognition scenes create aspiration and make student effort visible to families and peers.",
    image: awardeeImage,
  },
];

const achievementHighlights = [
  {
    title: "Student visibility",
    body: "Recognition, public presentation, and event participation help students feel seen and encouraged.",
  },
  {
    title: "Orderly school image",
    body: "A refined school website should communicate calmness, organisation, and trust at first glance.",
  },
  {
    title: "Community confidence",
    body: "A clearer digital presence helps families understand the school as dependable, active, and student-focused.",
  },
];

const admissionsSteps = [
  "Explore the school overview and understand its academic direction",
  "Visit campus and get a feel for the school environment",
  "Speak with the school administration for class-specific guidance",
  "Complete admission follow-up with the office team",
];

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  );
}

function ChristinaMemorial() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#f3f7fc] text-[#16304c]">
      <div className="mx-auto min-h-screen max-w-[1480px]">
        <header className="sticky top-0 z-50 border-b border-[#d8e5f2] bg-[#f3f7fc]/88 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-6 py-5 lg:px-10">
            <a href="#top" className="font-display text-[28px] tracking-[-0.05em] text-[#16304c]">
              Christina Memorial
            </a>

            <nav className="hidden items-center gap-8 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#69819b] lg:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="transition hover:text-[#16304c]"
                >
                  {item}
                </a>
              ))}
            </nav>

            <a
              href="#admissions"
              className="inline-flex items-center rounded-full bg-[#163b63] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5"
            >
              Admission
            </a>
          </div>
        </header>

        <main id="top">
          <section className="relative overflow-hidden px-6 pb-14 pt-10 lg:px-10 lg:pb-20 lg:pt-14">
            <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-[#9cc5ee]/30 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[#f0d9b4]/35 blur-3xl" />

            <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <Reveal className="space-y-8">
                <div className="space-y-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#6884a3]">
                    Christina Memorial School
                  </p>
                  <h1 className="max-w-[11ch] font-display text-[54px] leading-[0.94] tracking-[-0.06em] text-[#10263d] sm:text-[74px]">
                    A calm school website shaped by clarity, dignity, and student growth.
                  </h1>
                  <p className="max-w-[50ch] text-[15px] leading-8 text-[#5d748e]">
                    This concept reframes Christina Memorial School as organised, academic, and community-minded, with
                    a stronger digital identity built around school culture, achievement, and parent confidence.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {heroBadges.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#d6e2ef] bg-white/80 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#25476a]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#about"
                    className="inline-flex items-center rounded-full bg-[#163b63] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Explore School
                  </a>
                  <a
                    href="#student-life"
                    className="inline-flex items-center rounded-full border border-[#c9d9ea] bg-white px-7 py-3.5 text-sm font-semibold text-[#163b63] transition hover:-translate-y-0.5"
                  >
                    Student Life
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-5 lg:grid-cols-[1.14fr_0.86fr]">
                  <div className="overflow-hidden rounded-[38px] bg-white p-3 shadow-[0_22px_54px_rgba(28,55,91,0.08)]">
                    <img
                      src={campusImage}
                      alt="Christina Memorial School campus"
                      className="h-[470px] w-full rounded-[30px] object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="overflow-hidden rounded-[32px] bg-white p-3 shadow-[0_18px_44px_rgba(28,55,91,0.08)]">
                      <img
                        src={awardeeImage}
                        alt="Students from Christina Memorial School"
                        className="h-[255px] w-full rounded-[24px] object-cover"
                      />
                    </div>

                    <div className="rounded-[32px] bg-[#163b63] px-6 py-6 text-white shadow-[0_18px_40px_rgba(20,58,99,0.18)]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
                        School Identity
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/84">
                        A cleaner layout, stronger hierarchy, and better pacing help the school feel dependable,
                        active, and visually composed.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal className="mx-auto mt-12 max-w-[1180px]" delay={0.16}>
              <div className="grid gap-4 rounded-[36px] bg-[#163b63] p-4 text-white shadow-[0_24px_54px_rgba(20,58,99,0.18)] md:grid-cols-3 md:p-5">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-[26px] bg-white/8 px-6 py-7 backdrop-blur-sm">
                    <p className="font-display text-5xl leading-none tracking-[-0.05em]">{item.value}</p>
                    <p className="mt-4 max-w-[24ch] text-sm leading-7 text-white/78">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="about" className="border-t border-[#d8e5f2] px-6 py-14 lg:px-10 lg:py-20">
            <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <Reveal>
                <div className="rounded-[36px] bg-white px-8 py-8 shadow-[0_18px_44px_rgba(28,55,91,0.06)] lg:px-10 lg:py-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#6b87a5]">About</p>
                  <h2 className="mt-4 max-w-[11ch] font-display text-[46px] leading-[0.98] tracking-[-0.05em] text-[#11283f]">
                    A school atmosphere that feels organised, visible, and student-centered.
                  </h2>
                  <p className="mt-5 max-w-[42ch] text-[14px] leading-8 text-[#607892]">
                    The strongest school pages do more than list information. They help families understand tone,
                    learning culture, values, and the kind of environment children experience every day.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-5 sm:grid-cols-3">
                  {schoolFacts.map((item) => (
                    <div key={item.label} className="rounded-[26px] border border-[#dbe7f2] bg-[#fbfdff] px-5 py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6b87a5]">
                        {item.label}
                      </p>
                      <p className="mt-4 text-[14px] leading-7 text-[#234262]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          <section id="academics" className="border-t border-[#d8e5f2] px-6 py-14 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-[1180px]">
              <Reveal className="max-w-[700px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#6b87a5]">Academics</p>
                <h2 className="mt-4 max-w-[11ch] font-display text-[48px] leading-[0.98] tracking-[-0.05em] text-[#11283f]">
                  Clear structure, calmer rhythm, and stronger academic trust.
                </h2>
                <p className="mt-5 max-w-[48ch] text-[14px] leading-8 text-[#607892]">
                  Christina Memorial School works best when its digital presence feels dependable and composed, just like
                  the school environment it wants to communicate to families.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {academicPillars.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.08}>
                    <motion.article
                      className="overflow-hidden rounded-[32px] bg-white shadow-[0_16px_36px_rgba(28,55,91,0.06)]"
                      whileHover={reduceMotion ? undefined : { y: -4 }}
                    >
                      <img src={item.image} alt={item.title} className="h-[240px] w-full object-cover" />
                      <div className="px-6 py-6">
                        <h3 className="font-display text-[30px] leading-[1.02] tracking-[-0.04em] text-[#11283f]">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-[14px] leading-7 text-[#607892]">{item.copy}</p>
                      </div>
                    </motion.article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="student-life" className="border-t border-[#d8e5f2] bg-white px-6 py-14 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-[1180px]">
              <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#6b87a5]">Student Life</p>
                  <h2 className="mt-4 max-w-[10ch] font-display text-[48px] leading-[0.98] tracking-[-0.05em] text-[#11283f]">
                    School life should feel active, respectful, and visible.
                  </h2>
                </div>
                <p className="max-w-[40ch] text-[14px] leading-8 text-[#607892]">
                  The page should show students not just as learners, but as participants in a wider school culture.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {studentLifeCards.map((card, index) => (
                  <Reveal key={card.title} delay={index * 0.08}>
                    <motion.article
                      className="overflow-hidden rounded-[34px] border border-[#dbe7f2] bg-[#f8fbff] shadow-[0_16px_36px_rgba(28,55,91,0.05)]"
                      whileHover={reduceMotion ? undefined : { y: -4 }}
                    >
                      <img src={card.image} alt={card.title} className="h-[270px] w-full object-cover" />
                      <div className="px-6 py-6">
                        <h3 className="font-display text-[30px] leading-[1.02] tracking-[-0.04em] text-[#11283f]">
                          {card.title}
                        </h3>
                        <p className="mt-4 text-[14px] leading-7 text-[#607892]">{card.copy}</p>
                      </div>
                    </motion.article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="achievements" className="border-t border-[#d8e5f2] px-6 py-14 lg:px-10 lg:py-20">
            <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
              <Reveal>
                <div className="rounded-[36px] bg-[#163b63] px-8 py-8 text-white shadow-[0_18px_44px_rgba(20,58,99,0.14)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">Achievements</p>
                  <h2 className="mt-4 font-display text-[42px] leading-[1.02] tracking-[-0.05em]">
                    Recognition gives students confidence and gives the school a stronger voice.
                  </h2>
                  <p className="mt-4 text-[14px] leading-8 text-white/84">
                    A better school page should show achievement with dignity and help families understand the real
                    student-facing impact.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-6 sm:grid-cols-[1fr_0.86fr]">
                  <img
                    src={awardeeImage}
                    alt="Student recognition at Christina Memorial School"
                    className="h-[380px] w-full rounded-[32px] object-cover"
                  />
                  <div className="grid gap-5">
                    {achievementHighlights.map((item) => (
                      <div key={item.title} className="rounded-[24px] border border-[#dbe7f2] bg-white px-5 py-5">
                        <h3 className="font-display text-[24px] leading-tight text-[#11283f]">{item.title}</h3>
                        <p className="mt-3 text-[13px] leading-6 text-[#607892]">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="admissions" className="border-t border-[#d8e5f2] px-6 py-14 lg:px-10 lg:py-20">
            <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <Reveal>
                <div className="space-y-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#6b87a5]">Admissions</p>
                  <h2 className="max-w-[9ch] font-display text-[48px] leading-[0.98] tracking-[-0.05em] text-[#11283f]">
                    A clearer path for families who want to learn more.
                  </h2>
                  <p className="max-w-[40ch] text-[14px] leading-8 text-[#607892]">
                    This section completes the page by giving families a simple direction for how they can move forward.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-[36px] bg-white p-8 shadow-[0_18px_44px_rgba(28,55,91,0.06)] lg:p-10">
                  <div className="grid gap-5">
                    {admissionsSteps.map((step, index) => (
                      <div
                        key={step}
                        className="grid gap-4 border-b border-[#e4edf6] pb-5 last:border-b-0 sm:grid-cols-[52px_1fr]"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef5fc] text-sm font-semibold text-[#163b63]">
                          {index + 1}
                        </div>
                        <p className="pt-2 text-[14px] leading-7 text-[#234262]">{step}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center rounded-full bg-[#163b63] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    >
                      Contact School
                    </a>
                    <a
                      href="#top"
                      className="inline-flex items-center rounded-full border border-[#cad8e6] bg-[#f7fbff] px-7 py-3.5 text-sm font-semibold text-[#163b63] transition hover:-translate-y-0.5"
                    >
                      Back to Top
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <footer id="contact" className="border-t border-white/10 bg-[#163b63] px-6 py-12 text-white lg:px-10 lg:py-16">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[620px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
                Christina Memorial School
              </p>
              <h2 className="mt-4 font-display text-[40px] leading-[1.02] tracking-[-0.04em]">
                A warmer blue school identity with calmer structure, stronger hierarchy, and more confident storytelling.
              </h2>
            </div>

            <div className="space-y-2 text-sm text-white/72">
              <p>School overview, academics, student life, achievements, and admissions in one page</p>
              <p>Designed as a distinct Christina Memorial concept inside your route-based school project</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ChristinaMemorial;
