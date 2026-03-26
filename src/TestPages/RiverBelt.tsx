import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const logoUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6xhPcR1eKTMDh9-1Rv3DCTF8M3PfLgO5Ow&s";

const handmadeChartsUrl =
  "https://scontent.fdel27-4.fna.fbcdn.net/v/t39.30808-6/473222247_931980692370046_4411166791598062172_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=-HS19lgWJ0oQ7kNvwH6Oj0u&_nc_oc=Adr7SI_23Chpx3Ks0rMm1dCy6y-Iw70gYSGhIkbnOxuJpcewk9poXIn25EjbXOXoxao&_nc_zt=23&_nc_ht=scontent.fdel27-4.fna&_nc_gid=18hLem16EeHMdeq_bRj8rQ&_nc_ss=7a32e&oh=00_Afxf6-rbV9EPYg6vjA5eshU9KujLiJwg7aCIw_DHthvh0w&oe=69C95E87";

const schoolFlagUrl =
  "https://scontent.fdel27-4.fna.fbcdn.net/v/t39.30808-6/473291661_931980922370023_2324845101091590219_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=OTBmTFfxDlcQ7kNvwHXGxc5&_nc_oc=Adq6NEBZuc20ktm3cQC1NatsaZ84WkF_ioImMuAVywB9yO1pOIuKI3DWbA3eoHrkql4&_nc_zt=23&_nc_ht=scontent.fdel27-4.fna&_nc_gid=18hLem16EeHMdeq_bRj8rQ&_nc_ss=7a32e&oh=00_AfyZ0pcLJcotadKLhnDbNYNZQ_eeEB7nB3aRPjhEawJtCg&oe=69C96C8D";

const interhouseEventUrl =
  "https://content.jdmagicbox.com/v2/comp/dimapur/m4/9999p3862.3862.171002205610.i5m4/catalogue/river-belt-school-full-nagarjan-dimapur-schools-fDV8LQQ3jU.jpg";

const navigation = ["About", "Programs", "Campus Life", "Admissions", "Contact"];

const heroPills = ["Creative curriculum", "Admissions open 2026", "Safe campus"];

const stats = [
  { value: "98%", label: "Parents report stronger confidence and curiosity at home." },
  { value: "24+", label: "Studios, labs, and outdoor zones designed for active learning." },
  { value: "12:1", label: "Learner-to-mentor ratio for thoughtful classroom attention." },
];

const programs = [
  {
    title: "Life Skills Lab",
    description: "Project-based learning that builds confidence, empathy, and daily independence.",
    image: handmadeChartsUrl,
    accent: "from-[#ff8d4d] to-[#ffb272]",
  },
  {
    title: "Imagination Studio",
    description: "Storytelling, science, and maker challenges that turn curiosity into action.",
    image: schoolFlagUrl,
    accent: "from-[#1d8a57] to-[#50b375]",
  },
  {
    title: "Future Leaders",
    description: "Communication, teamwork, and leadership moments woven into every term.",
    image: interhouseEventUrl,
    accent: "from-[#4a9ce8] to-[#7bc1ff]",
  },
];

const pathways = [
  {
    title: "Letter Adventure",
    grade: "Pre-primary",
    color: "bg-[#7ed8ff]",
    image: handmadeChartsUrl,
  },
  {
    title: "Reading Circle",
    grade: "Junior grades",
    color: "bg-[#ff9d67]",
    image: schoolFlagUrl,
  },
  {
    title: "World Explorer",
    grade: "Middle years",
    color: "bg-[#67c98a]",
    image: interhouseEventUrl,
  },
  {
    title: "Art & Design",
    grade: "Creative hub",
    color: "bg-[#ffd34d]",
    image: handmadeChartsUrl,
  },
];

const featureCards = [
  {
    eyebrow: "Confidence-first",
    title: "A brighter future starts with brave little steps.",
    description: "We design joyful routines that help every child feel seen, capable, and ready to try.",
    cta: "Book a tour",
    tone: "bg-[#ffd54f]",
  },
  {
    eyebrow: "Dream big",
    title: "Mentors who turn curiosity into momentum.",
    description: "From reading corners to robotics tables, children are encouraged to build and present.",
    cta: "Explore learning",
    tone: "bg-[#ff7b4a]",
  },
];

const footerColumns = [
  {
    title: "Explore",
    items: ["Early Years", "Primary School", "Clubs & Events", "School Calendar"],
  },
  {
    title: "School",
    items: ["About Us", "Faculty", "Admissions", "Campus Life"],
  },
  {
    title: "Support",
    items: ["FAQs", "Transport", "Contact", "Parent Portal"],
  },
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function RiverBelt() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto min-h-screen overflow-hidden bg-paper">
        <header className="sticky top-0 z-50 border-b border-line/50 bg-paper/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-6 py-5 lg:px-10">
            <a href="#top" className="group flex items-center gap-3 text-headline transition-transform hover:-translate-y-0.5">
              <img src={logoUrl} alt="River Belt School logo" className="h-[46px] w-[46px] rounded-full object-cover shadow-sm ring-1 ring-black/5" />
              <span className="font-display text-[28px] font-semibold tracking-[-0.04em]">
                RiverBelt<span className="text-accent transition-colors group-hover:text-[#ff844d]">.</span>
              </span>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-muted lg:flex">
              {navigation.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="transition-colors hover:text-headline">
                  {item}
                </a>
              ))}
            </nav>

            <a
              href="#admissions"
              className="group/ebtn relative inline-flex items-center overflow-hidden rounded-full bg-headline px-7 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 z-0 h-full w-full translate-y-full rounded-full bg-white transition-transform duration-300 ease-in-out group-hover/ebtn:translate-y-0" />
              <span className="text-white relative z-10 transition-colors duration-300 group-hover/ebtn:text-headline">Apply Now</span>
            </a>
          </div>
        </header>

        <main id="top">
          <section className="relative overflow-hidden px-6 pb-12 pt-10 lg:px-10 lg:pb-16 lg:pt-14">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(255,175,96,0.18),transparent_65%)]" />
            <div className="pointer-events-none absolute -left-10 top-20 h-28 w-28 rounded-full bg-[#ffcf66]/60 blur-2xl" />
            <div className="pointer-events-none absolute right-10 top-24 h-32 w-32 rounded-full bg-[#7ad7f0]/40 blur-3xl" />

            <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <Reveal className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-bold text-accent backdrop-blur-md ring-1 ring-accent/10">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                  </span>
                  Admissions for 2026 are now open
                </div>

                <div className="space-y-6">
                  <h1 className="max-w-[12ch] font-display text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-headline sm:text-6xl lg:text-[76px]">
                    Where bright children grow brave, kind, and future ready.
                  </h1>
                  <p className="max-w-[58ch] text-base leading-relaxed text-headline/75 sm:text-lg">
                    River Belt School pairs playful discovery with deep academic care, creating a campus where children
                    learn with confidence, build character, and fall in love with progress.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {heroPills.map((item) => (
                    <span key={item} className="rounded-full border border-line bg-white/60 px-4 py-2 text-sm font-semibold text-headline backdrop-blur-md">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#programs"
                    className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#ff844d,#ffb24f)] px-8 py-4 text-sm font-bold text-white shadow-[0_12px_24px_rgba(255,132,77,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,132,77,0.4)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
                    <span className="relative z-10">Discover Programs</span>
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center rounded-full border-2 border-line-strong bg-white/50 px-8 py-4 text-sm font-bold text-headline backdrop-blur-md transition-all hover:-translate-y-1 hover:border-headline hover:bg-white hover:shadow-lg"
                  >
                    Visit the Campus
                  </a>
                </div>
              </Reveal>

              <Reveal className="relative" delay={0.12}>
                <div className="relative mx-auto grid max-w-[540px] gap-5 sm:grid-cols-2">
                  <motion.article
                    className="group relative overflow-hidden rounded-[36px] bg-[#8ad95f] p-4 pt-12 shadow-[0_24px_48px_rgba(74,110,36,0.2)] ring-1 ring-black/5"
                    animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                    transition={reduceMotion ? undefined : { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    whileHover={reduceMotion ? undefined : { y: -8, scale: 1.02 }}
                  >
                    <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#35632a]">
                      Joyful Start
                    </div>
                    <img
                      src={schoolFlagUrl}
                      alt="River Belt School children standing together with the school flag"
                      className="h-[360px] w-full rounded-[28px] object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </motion.article>

                  <div className="flex flex-col gap-5 pt-6 sm:pt-14">
                    <motion.article
                      className="overflow-hidden rounded-[32px] bg-[#ffd44e] p-4 shadow-[0_20px_40px_rgba(191,142,22,0.18)] ring-1 ring-black/5"
                      animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
                      transition={reduceMotion ? undefined : { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.6 }}
                      whileHover={reduceMotion ? undefined : { y: -5, scale: 1.02 }}
                    >
                      <img
                        src={handmadeChartsUrl}
                        alt="River Belt School students holding handmade charts"
                        className="h-[250px] w-full rounded-[24px] object-cover object-top"
                      />
                    </motion.article>

                    <motion.div
                      className="rounded-[32px] bg-white p-6 shadow-[0_18px_36px_rgba(64,39,28,0.08)] ring-1 ring-black/5"
                      whileHover={reduceMotion ? undefined : { y: -5 }}
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Why parents choose us</p>
                      <p className="mt-3 text-base leading-7 text-muted">
                        Warm mentors, safe spaces, expressive arts, and a learning rhythm that balances structure with delight.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal className="mx-auto mt-12 max-w-[1120px]" delay={0.18}>
              <div className="grid overflow-hidden rounded-[40px] bg-headline text-white shadow-2xl ring-1 ring-black/5 md:grid-cols-3">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.value}
                    className={`group relative flex flex-col justify-between overflow-hidden px-8 py-10 transition-colors hover:bg-white/5 lg:px-12 ${index < stats.length - 1 ? "border-b border-white/10 md:border-b-0 md:border-r" : ""}`}
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                    <p className="font-display text-5xl font-semibold tracking-[-0.04em]">{item.value}</p>
                    <p className="mt-4 max-w-[28ch] text-base leading-relaxed text-white/75">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="programs" className="px-6 py-12 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-[1120px]">
              <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-[640px]">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Learn with lift</p>
                  <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-headline sm:text-5xl">
                    Smart and spirited kids, ready to rise high.
                  </h2>
                </div>
                <p className="max-w-[380px] text-base leading-7 text-muted">
                  Every program mixes strong academics with expression, movement, collaboration, and reflective thinking.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {programs.map((program, index) => (
                  <Reveal key={program.title} delay={0.08 * index}>
                    <motion.article 
                      className={`group/program relative overflow-hidden rounded-[40px] bg-gradient-to-br ${program.accent} p-4 text-white shadow-[0_16px_32px_rgba(0,0,0,0.08)] ring-1 ring-white/20 transition-shadow hover:shadow-[0_24px_48px_rgba(0,0,0,0.15)]`}
                      whileHover={reduceMotion ? undefined : { y: -6, scale: 0.995 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="relative overflow-hidden rounded-[32px]">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="h-[360px] w-full object-cover transition-transform duration-700 ease-out group-hover/program:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover/program:opacity-90" />
                        <div className="absolute inset-x-0 bottom-0 p-8">
                          <h3 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em]">{program.title}</h3>
                          <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-white/85 opacity-90 transition-opacity duration-300 group-hover/program:opacity-100">{program.description}</p>
                        </div>
                      </div>
                    </motion.article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="px-6 py-12 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-[1120px] text-center">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">One impactful lesson at a time</p>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-headline sm:text-5xl">
                  Shaping the future of kids through joyful mastery.
                </h2>
              </Reveal>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {pathways.map((item, index) => (
                  <Reveal key={item.title} delay={0.08 * index}>
                    <motion.article
                      className="group/pathway relative overflow-hidden rounded-[40px] bg-white p-7 shadow-[0_12px_24px_rgba(0,0,0,0.04)] ring-1 ring-black/5 transition-shadow hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)]"
                      whileHover={reduceMotion ? undefined : { y: -6, scale: 0.995 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover/pathway:opacity-100" />
                      <div className={`relative mx-auto flex h-[220px] w-[220px] items-end justify-center overflow-hidden rounded-[38%] ${item.color} shadow-inner transition-transform duration-700 ease-out group-hover/pathway:scale-[1.03]`}>
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                        <div className="pointer-events-none absolute inset-0 rounded-[38%] shadow-[inset_0_4px_12px_rgba(255,255,255,0.4),inset_0_-8px_20px_rgba(0,0,0,0.15)]" />
                      </div>
                      <div className="relative z-10 mt-8 text-center">
                        <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-headline">{item.title}</h3>
                        <p className="mt-3 text-[13px] font-bold uppercase tracking-[0.2em] text-muted">{item.grade}</p>
                      </div>
                    </motion.article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-12 lg:px-10 lg:py-16">
            <div className="mx-auto grid max-w-[1120px] gap-6 lg:h-[560px] lg:grid-cols-[1.45fr_1fr]">
              <motion.article
                className="group relative flex flex-col justify-between overflow-hidden rounded-[40px] bg-[#ffd447] shadow-[0_24px_48px_rgba(255,212,71,0.25)] ring-1 ring-black/5 lg:row-span-2"
                whileHover={reduceMotion ? undefined : { y: -4, scale: 0.995 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={interhouseEventUrl}
                    alt="School students event"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ffd447] via-[#ffd447]/95 to-[#ffd447]/10" />
                </div>

                <div className="relative z-10 flex h-full max-w-[420px] flex-col justify-center px-8 py-10 lg:px-12">
                  <div className="mb-auto">
                    <span className="inline-flex rounded-full bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#a68200] backdrop-blur-md">
                      Confidence that lasts
                    </span>
                  </div>
                  <h2 className="mt-10 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-headline lg:text-5xl">
                    Empowering children to think bigger, kinder, and sharper.
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-headline/80">
                    We help each child find their voice through active classrooms, gentle guidance, and meaningful routines.
                  </p>
                  <div className="mt-10">
                    <a
                      href="#admissions"
                      className="group/btn relative inline-flex items-center overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-bold text-headline shadow-[0_8px_16px_rgba(64,39,28,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(64,39,28,0.12)]"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">Start your visit</span>
                      <div className="absolute inset-0 z-0 h-full w-full translate-y-full rounded-full bg-headline transition-transform duration-300 ease-in-out group-hover/btn:translate-y-0" />
                    </a>
                  </div>
                </div>
              </motion.article>

              <div className="grid h-full gap-6 lg:grid-rows-2">
                {featureCards.map((card) => (
                  <motion.article
                    key={card.title}
                    className={`group/card relative flex flex-col justify-between overflow-hidden rounded-[40px] ${card.tone} px-8 py-8 shadow-[0_12px_24px_rgba(0,0,0,0.04)] ring-1 ring-black/5 transition-shadow hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)]`}
                    whileHover={reduceMotion ? undefined : { y: -4, scale: 0.995 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100" />

                    <div className="relative z-10">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-headline/50">
                        {card.eyebrow}
                      </p>
                      <h3 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-headline">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-headline/75">
                        {card.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-8 md:mt-auto">
                      <a
                        href="#contact"
                        className="inline-flex w-fit items-center gap-2 rounded-full bg-white/50 px-6 py-3.5 text-sm font-bold text-headline backdrop-blur-md transition-all hover:bg-white hover:shadow-lg"
                      >
                        {card.cta}
                        <svg className="h-4 w-4 transition-transform group-hover/card:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="admissions" className="px-6 py-12 lg:px-10 lg:py-16">
            <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <Reveal>
                <span className="inline-flex rounded-full border border-line px-4 py-2 text-sm font-medium text-muted">
                  Admission journey in progress
                </span>
                <h2 className="mt-6 max-w-[11ch] font-display text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-headline sm:text-6xl">
                  Empower your child to think smarter and live brighter.
                </h2>
                <p className="mt-5 max-w-[54ch] text-base leading-8 text-muted">
                  Schedule a campus walk-through, meet our learning mentors, and see how our creative-first environment
                  supports academic excellence without losing warmth.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#ff844d,#ffb24f)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(255,132,77,0.28)] transition hover:-translate-y-0.5"
                  >
                    Get Educated
                  </a>
                  <a
                    href="#programs"
                    className="inline-flex items-center rounded-full border border-line-strong px-6 py-3.5 text-sm font-semibold text-headline transition hover:bg-white"
                  >
                    Compare Programs
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="relative">
                  <div className="absolute -left-6 top-12 h-32 w-32 rounded-full bg-[#ffcc57]/50 blur-3xl" />
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#84cff1]/40 blur-3xl" />
                  <motion.div
                    className="group/admimg relative overflow-hidden rounded-[40px] bg-[#4ba4ef] shadow-[0_24px_48px_rgba(35,102,161,0.25)] ring-1 ring-white/20"
                    whileHover={reduceMotion ? undefined : { y: -6, scale: 0.995 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img
                      src={schoolFlagUrl}
                      alt="River Belt School students posing with their school flag"
                      className="h-[560px] w-full object-cover object-top transition-transform duration-700 ease-out group-hover/admimg:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/admimg:opacity-100" />
                  </motion.div>

                  <motion.div
                    className="relative mx-auto -mt-20 grid max-w-[560px] gap-6 rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-[0_24px_48px_rgba(0,0,0,0.12)] backdrop-blur-xl ring-1 ring-black/5 md:grid-cols-2"
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="rounded-[24px] bg-white/50 p-6 shadow-sm ring-1 ring-black/5">
                      <p className="font-display text-4xl font-semibold tracking-[-0.04em] text-headline">45M+</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">Moments of reading, creating, and collaborating shared by our learners.</p>
                    </div>
                    <div className="rounded-[24px] bg-white/50 p-6 shadow-sm ring-1 ring-black/5">
                      <p className="font-display text-4xl font-semibold tracking-[-0.04em] text-headline">164+</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">Projects, showcases, and joyful presentations celebrated each year.</p>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="px-6 pb-14 pt-8 lg:px-10 lg:pb-20">
            <div className="mx-auto grid max-w-[1120px] gap-6 lg:grid-cols-[1fr_1.2fr]">
              <Reveal>
                <motion.article
                  className="group/img relative overflow-hidden rounded-[40px] bg-[#22794e] text-white shadow-[0_24px_48px_rgba(26,95,61,0.25)] ring-1 ring-black/5"
                  whileHover={reduceMotion ? undefined : { y: -6, scale: 0.995 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={handmadeChartsUrl}
                    alt="River Belt School children presenting handmade classroom charts"
                    className="h-full min-h-[360px] w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.article>
              </Reveal>

              <Reveal delay={0.12}>
                <motion.article
                  className="group/event relative flex h-full flex-col justify-between overflow-hidden rounded-[40px] bg-[#ffd43f] px-10 py-10 shadow-[0_24px_48px_rgba(153,113,16,0.25)] ring-1 ring-black/5 transition-shadow hover:shadow-[0_32px_64px_rgba(153,113,16,0.3)]"
                  whileHover={reduceMotion ? undefined : { y: -6, scale: 0.995 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover/event:opacity-100" />
                  
                  <div className="relative z-10">
                    <span className="inline-flex rounded-full bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#997110] backdrop-blur-md">
                      Upcoming Event
                    </span>
                    <h2 className="mt-8 max-w-[12ch] font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-headline lg:text-[42px]">
                      Building children one caring lesson at a time.
                    </h2>
                    <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-headline/80">
                      Join our open house for live classroom walkthroughs, student showcases, and conversations with our school leaders.
                    </p>
                  </div>

                  <div className="relative z-10 mt-10 rounded-[28px] bg-white/50 p-6 backdrop-blur-md ring-1 ring-white/60">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-headline/70">07 April 2026</p>
                        <p className="mt-2 text-sm font-medium leading-6 text-headline/90">River Belt School, main campus atrium</p>
                      </div>
                      <a
                        href="#contact"
                        className="group/ebtn relative inline-flex items-center overflow-hidden rounded-full bg-headline px-7 py-4 text-sm font-bold  shadow-lg transition-transform hover:-translate-y-1"
                      >
                        <div className=" text-white absolute inset-0 z-0 h-full w-full translate-y-full rounded-full bg-white transition-transform duration-300 ease-in-out group-hover/ebtn:translate-y-0" />
                        <span className=" text-white relative z-10 transition-colors duration-300 group-hover/ebtn:text-headline">Reserve your spot</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            </div>
          </section>
        </main>

        <footer id="contact" className="relative mt-20 overflow-hidden bg-headline px-6 py-16 text-white lg:px-10 lg:py-24">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />
          <div className="relative mx-auto max-w-[1120px]">
            <div className="flex flex-col gap-12 border-b border-white/10 pb-12 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-[360px]">
                <a href="#top" className="flex items-center gap-3">
                  <img src={logoUrl} alt="River Belt School logo" className="h-12 w-12 rounded-full object-cover" />
                  <span className="font-display text-4xl font-semibold tracking-[-0.05em]">
                    RiverBelt<span className="text-accent">.</span>
                  </span>
                </a>
                <p className="mt-4 text-sm leading-7 text-white/[72%]">
                  A warm modern school designed for curious minds, thoughtful habits, and future-facing learning.
                </p>
              </div>

              <div className="grid gap-10 sm:grid-cols-3">
                {footerColumns.map((column) => (
                  <div key={column.title}>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[55%]">{column.title}</h3>
                    <ul className="mt-4 space-y-3 text-sm text-white/[78%]">
                      {column.items.map((item) => (
                        <li key={item}>
                          <a href="#top" className="transition hover:text-white">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 text-sm text-white/[58%] sm:flex-row sm:items-center sm:justify-between">
              <p>Privacy Policy</p>
              <p>Designed for River Belt School</p>
              <p>Copyright 2026 River Belt School. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default RiverBelt;
