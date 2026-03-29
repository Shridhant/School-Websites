import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import drugAwarenessImage from "../assets/christina/drug-awareness.jpg";

const campusImage =
  "https://files.yappe.in/place/full/christina-memorial-hr-sec-school-7731447.webp";

const awardeeImage = "https://morungexpress.com/sites/default/files/field/image/AWARDEE.jpg";

const navItems = ["About", "Academics", "Student Life", "Achievements", "Admissions", ];

const heroBadges = ["Higher Secondary School", "Community-led learning", "Student participation"];

const schoolFacts = [
  { label: "Learning Focus", value: "Discipline, clarity, and steady student growth" },
  { label: "School Culture", value: "Events, awareness drives, and active student participation" },
  { label: "Tone", value: "Calm, academic, and community-centered" },

  { label: "Academic Approach", value: "Balanced curriculum combining conceptual learning with practical understanding" },
  { label: "Student Development", value: "Focus on leadership, confidence building, and communication skills" },
  { label: "Co-Curriculars", value: "Cultural programs, competitions, sports, and creative activities" },

];

const academicPillars = [
  {
    title: "Strong academic grounding",
    copy: "A structured teaching rhythm that helps students stay focused, prepared, and steadily improving.",
  },
  {
    title: "Character and responsibility",
    copy: "School life reinforces discipline, conduct, and a stronger sense of responsibility in public spaces.",
  },
  {
    title: "Recognition and confidence",
    copy: "Students are encouraged to take part in school-wide programs and be recognised for their work.",
  },
];

const studentLifeCards = [
  {
    title: "Awareness programs",
    copy: "School events extend beyond classrooms and help students engage with important social themes.",
    image: drugAwarenessImage,
  },
  {
    title: "Collective school identity",
    copy: "Large student gatherings and shared school occasions build a strong sense of belonging.",
    image: drugAwarenessImage,
  },
  {
    title: "Achievement moments",
    copy: "Recognition scenes create aspiration and make achievement visible to the wider school community.",
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
    body: "The visual identity of the school should communicate calmness, organisation, and trust.",
  },
  {
    title: "Community confidence",
    body: "A cleaner digital presence helps families understand the school as dependable, active, and student-focused.",
  },
];

const admissionsSteps = [
  "Explore the school overview and academic direction",
  "Visit campus and understand the school environment",
  "Speak with the administration team for class-specific guidance",
  "Complete admission follow-up with the school office",
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
    <div className="min-h-screen bg-[#f5f7fb] text-[#152033]">
      <div className="mx-auto min-h-screen max-w-[1440px]">
        <header className="sticky top-0 z-50 border-b border-[#e3e8f1] bg-[#f5f7fb]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-6 py-5 lg:px-10">
            <a href="#top" className="font-serif text-[28px] tracking-[-0.05em] text-[#111827]">
              Christina Memorial
            </a>

            <nav className="hidden items-center gap-8 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6a788d] lg:flex">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="transition hover:text-[#111827]">
                  {item}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-[#111827] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111827] transition hover:bg-[#111827] hover:text-white!"
            >
              Enquire
            </a>
          </div>
        </header>

        <main id="top">
          <section className="px-6 pb-14 pt-8 lg:px-10 lg:pb-18 lg:pt-10">
            <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <Reveal className="space-y-8">
                <div className="space-y-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#728198]">Christina Memorial School</p>
                  <h1 className="max-w-[10ch] font-serif text-[54px] leading-[0.94] tracking-[-0.06em] text-[#101827] sm:text-[76px]">
                    A cleaner school story built around learning, dignity, and student presence.
                  </h1>
                </div>

                <p className="max-w-[48ch] text-[15px] leading-8 text-[#67748a]">
                  Christina Memorial School can present itself as calm, academic, and community-minded, with a stronger
                  digital identity that reflects student achievement, school events, and a dependable learning environment.
                </p>

                <div className="flex flex-wrap gap-3">
                  {heroBadges.map((item) => (
                    <span key={item} className="rounded-full border border-[#d7deea] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#213147]">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#about"
                    className="inline-flex items-center rounded-full bg-[#152847] px-7 py-3.5 text-sm font-semibold text-white! transition hover:-translate-y-0.5 hover:text-white!"
                  >
                    Explore School
                  </a>
                  <a
                    href="#admissions"
                    className="inline-flex items-center rounded-full border border-[#ced6e4] bg-white px-7 py-3.5 text-sm font-semibold text-[#152847] transition hover:-translate-y-0.5"
                  >
                    Admission Journey
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-5 sm:grid-cols-[1.12fr_0.88fr]">
                  <div className="overflow-hidden rounded-[38px] bg-white shadow-[0_18px_44px_rgba(31,47,74,0.08)]">
                    <img src={campusImage} alt="Christina Memorial School campus" className="h-[460px] w-full object-cover" />
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_18px_44px_rgba(31,47,74,0.08)]">
                      <img src={awardeeImage} alt="Students from Christina Memorial School" className="h-[250px] w-full object-cover" />
                    </div>
                    <div className="rounded-[32px] bg-[#152847] px-6 py-6 text-white">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">School Identity</p>
                      <p className="mt-3 text-sm leading-7 text-white/84">
                        A more refined page design helps the school feel trustworthy, active, and visually organised.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="about" className="border-t border-[#e3e8f1] px-6 py-14 lg:px-10 lg:py-18">
            <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <Reveal>
                <div className="rounded-[36px] bg-white p-8 shadow-[0_18px_44px_rgba(31,47,74,0.06)] lg:p-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#728198]">About</p>
                  <h2 className="mt-4 max-w-[11ch] font-serif text-[48px] leading-[0.98] tracking-[-0.05em] text-[#111827]">
                    A school atmosphere that feels organised, visible, and student-centered.
                  </h2>
                  <p className="mt-5 max-w-[42ch] text-[14px] leading-8 text-[#67748a]">
                    The strongest school websites do more than list information. They give families a clear sense of school
                    tone, student life, values, and the kind of environment children grow up in every day.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-5 sm:grid-cols-3">
                  {schoolFacts.map((item) => (
                    <div key={item.label} className="rounded-[26px] border border-[#d9e1ec] bg-white px-5 py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#728198]">{item.label}</p>
                      <p className="mt-4 text-[14px] leading-7 text-[#223147]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          <section id="academics" className="border-t border-[#e3e8f1] px-6 py-14 lg:px-10 lg:py-18">
            <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
              <Reveal>
                <div className="space-y-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#728198]">Academics</p>
                  <h2 className="max-w-[10ch] font-serif text-[48px] leading-[0.98] tracking-[-0.05em] text-[#111827]">
                    Clean structure, clearer communication, and stronger academic trust.
                  </h2>
                  <p className="max-w-[42ch] text-[14px] leading-8 text-[#67748a]">
                    A good school page should make the learning environment feel dependable. Instead of crowding the page,
                    it should use calm sections, carefully framed photos, and confident content.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-5">
                  {academicPillars.map((item) => (
                    <motion.article
                      key={item.title}
                      className="rounded-[30px] bg-white px-6 py-6 shadow-[0_16px_36px_rgba(31,47,74,0.05)]"
                      whileHover={reduceMotion ? undefined : { y: -4 }}
                    >
                      <h3 className="font-serif text-[30px] leading-[1.02] tracking-[-0.04em] text-[#111827]">{item.title}</h3>
                      <p className="mt-4 text-[14px] leading-7 text-[#67748a]">{item.copy}</p>
                    </motion.article>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          <section id="student-life" className="border-t border-[#e3e8f1] bg-white px-6 py-14 lg:px-10 lg:py-18">
            <div className="mx-auto max-w-[1180px]">
              <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#728198]">Student Life</p>
                  <h2 className="mt-4 max-w-[10ch] font-serif text-[48px] leading-[0.98] tracking-[-0.05em] text-[#111827]">
                    School life should feel active, respectful, and visible.
                  </h2>
                </div>
                <p className="max-w-[38ch] text-[14px] leading-8 text-[#67748a]">
                  These sections give the school more breathing room and help the page feel intentionally designed rather than crowded.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {studentLifeCards.map((card, index) => (
                  <Reveal key={card.title} delay={index * 0.08}>
                    <motion.article
                      className="overflow-hidden rounded-[34px] bg-[#f8fafc] shadow-[0_16px_36px_rgba(31,47,74,0.05)]"
                      whileHover={reduceMotion ? undefined : { y: -4 }}
                    >
                      <img src={card.image} alt={card.title} className="h-[260px] w-full object-cover" />
                      <div className="px-6 py-6">
                        <h3 className="font-serif text-[30px] leading-[1.02] tracking-[-0.04em] text-[#111827]">{card.title}</h3>
                        <p className="mt-4 text-[14px] leading-7 text-[#67748a]">{card.copy}</p>
                      </div>
                    </motion.article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="achievements" className="border-t border-[#e3e8f1] px-6 py-14 lg:px-10 lg:py-18">
            <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <Reveal>
                <div className="rounded-[36px] bg-[#152847] px-8 py-8 text-white shadow-[0_18px_44px_rgba(21,40,71,0.16)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">Achievements</p>
                  <h2 className="mt-4 font-serif text-[42px] leading-[1.02] tracking-[-0.05em]">
                    Recognition gives students confidence and gives the school a stronger voice.
                  </h2>
                  <p className="mt-4 text-[14px] leading-8 text-white/84">
                    A school page should show achievement with dignity and let visitors understand the real student-facing impact.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-6 sm:grid-cols-[1fr_0.86fr]">
                  <img src={awardeeImage} alt="Student recognition at Christina Memorial School" className="h-[360px] w-full rounded-[32px] object-cover" />
                  <div className="grid gap-5">
                    {achievementHighlights.map((item) => (
                      <div key={item.title} className="rounded-[24px] border border-[#d9e1ec] bg-white px-5 py-5">
                        <h3 className="font-serif text-[24px] leading-tight text-[#111827]">{item.title}</h3>
                        <p className="mt-3 text-[13px] leading-6 text-[#67748a]">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="admissions" className="border-t border-[#e3e8f1] px-6 py-14 lg:px-10 lg:py-18">
            <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal>
                <div className="space-y-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#728198]">Admissions</p>
                  <h2 className="max-w-[9ch] font-serif text-[48px] leading-[0.98] tracking-[-0.05em] text-[#111827]">
                    A clearer path for families who want to learn more.
                  </h2>
                  <p className="max-w-[40ch] text-[14px] leading-8 text-[#67748a]">
                    This section helps the page feel more complete by giving families a simple direction for how they can move forward.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-[36px] bg-white p-8 shadow-[0_18px_44px_rgba(31,47,74,0.06)] lg:p-10">
                  <div className="grid gap-5">
                    {admissionsSteps.map((step, index) => (
                      <div key={step} className="grid gap-4 border-b border-[#e7ecf3] pb-5 sm:grid-cols-[48px_1fr]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cfd6e4] text-sm font-semibold text-[#152847]">
                          {index + 1}
                        </div>
                        <p className="pt-2 text-[14px] leading-7 text-[#223147]">{step}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center rounded-full bg-[#152847] px-7 py-3.5 text-sm font-semibold text-white! transition hover:bg-white! hover:-translate-y-0.5 hover:text-[#152847]!"
                    >
                      Contact School
                    </a>
                    <a
                      href="#top"
                      className="inline-flex items-center rounded-full border border-[#ced6e4] bg-[#f8fafc] px-7 py-3.5 text-sm font-semibold text-[#152847] transition hover:-translate-y-0.5"
                    >
                      Back to Top
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <footer id="contact" className="border-t border-white/10 bg-[#152847] px-6 py-12 text-white lg:px-10 lg:py-16">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[620px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">Christina Memorial School</p>
              <h2 className="mt-4 font-serif text-[40px] leading-[1.02] tracking-[-0.04em]">
                A stronger digital presence with calmer structure, better content, and more intentional school storytelling.
              </h2>
            </div>

            <div className="space-y-2 text-sm text-white/72">
              <p>Clean UI for school overview, achievements, and admissions direction</p>
              <p>Built as a dedicated route inside your school website project</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ChristinaMemorial;
