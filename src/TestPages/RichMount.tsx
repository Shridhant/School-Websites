import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Marquee } from "../components/pilgrim/Marquee";
import { SpotlightCard } from "../components/pilgrim/SpotlightCard";
import { TiltCard } from "../components/pilgrim/TiltCard";

const LOGO = "/rich-mount-logo.jpg";
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
] as const;
const SECTION_IMAGES = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
] as const;

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

const TICKER = [
  "Rich Mount School",
  "Chekiye Village, Dimapur",
  "Knowledge is Power",
  "Established 1999",
  "English-medium",
  "Co-educational",
  "Classes 1 to 10",
] as const;

const PROFILE = [
  { label: "Founded", value: "1999" },
  { label: "Format", value: "Co-ed" },
  { label: "Medium", value: "English" },
  { label: "Board", value: "State / NBSE" },
] as const;

const LEARNING_ARCS = [
  {
    name: "Foundational Years",
    tag: "Play-led start",
    description:
      "Early learning shaped around routine, language growth, and classroom confidence, with public records indicating a pre-primary presence in the school profile.",
    surface: "linear-gradient(180deg, #0c3535 0%, #145050 100%)",
    marker: "Arc 01",
  },
  {
    name: "Primary School",
    tag: "Core formation",
    description:
      "Reading, numeracy, handwriting, and disciplined daily work presented as the core of the school’s early academic formation.",
    surface: "linear-gradient(135deg, #0c3535 0%, #145555 100%)",
    marker: "Arc 02",
  },
  {
    name: "Middle School",
    tag: "Academic lift",
    description:
      "A more defined subject structure, stronger communication, and greater responsibility as students move into the upper classes.",
    surface: "linear-gradient(135deg, #103f3f 0%, #145050 72%, rgba(178,58,72,0.32) 100%)",
    marker: "Arc 03",
  },
  {
    name: "Secondary Level",
    tag: "Class 10 outcome",
    description:
      "Public records consistently place Rich Mount School up to Class 10, making the secondary stage the school’s visible academic destination.",
    surface: "linear-gradient(135deg, #0d3838 0%, #145151 72%, rgba(212,168,79,0.28) 100%)",
    marker: "Arc 04",
  },
] as const;

const PILLARS = [
  {
    title: "Academic routine",
    body:
      "The page presents Rich Mount as a school shaped by classroom rhythm, day-to-day effort, and visible academic expectations.",
  },
  {
    title: "Character and conduct",
    body:
      "The school’s public-facing voice is framed around discipline, learning habits, and a steady culture of personal growth.",
  },
  {
    title: "Place and identity",
    body:
      "Chekiye Village, English-medium teaching, co-educational structure, and classes up to Class 10 give the page a grounded school identity.",
  },
] as const;

const TRUST_NOTES = [
  {
    title: "3rd Mile, Chekiye",
    copy: "Public listings consistently place the school around 3rd Mile, Chekiye Village, in the Chumukedima-Dimapur area.",
  },
  {
    title: "Private unaided school",
    copy: "Directory records describe the school as a private unaided, co-educational institution with an English-medium learning environment.",
  },
  {
    title: "Pre-primary signal",
    copy: "A January 4, 2020 Nagaland Post report notes a Little Millennium preschool inauguration at Rich Mount School.",
  },
] as const;

const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Visit or enquire",
    body: "Begin with a direct school enquiry so families can understand the campus location, class range, and day-school environment clearly.",
  },
  {
    step: "02",
    title: "Understand fit",
    body: "Position Rich Mount as an English-medium co-educational school serving learners from the early years through the secondary stage.",
  },
  {
    step: "03",
    title: "Continue offline",
    body: "Move families toward school contact, campus guidance, and direct admission support instead of overcomplicating the online flow.",
  },
] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

function PageLoader({ onDone }: { onDone: () => void }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("rich-mount-loaded");
    if (seen) {
      onDone();
      return;
    }

    const timeout = window.setTimeout(() => setReady(true), 1150);
    return () => window.clearTimeout(timeout);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!ready ? (
        <motion.div
          className="rm-root fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
          style={{ background: "var(--rm-emerald)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE_EXPO }}
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[rgba(212,168,79,0.12)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[rgba(178,58,72,0.1)]" />
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE_EXPO }}
          >
            <div className="rm-loader-seal flex h-34 w-34 items-center justify-center rounded-full">
              <img src={LOGO} alt="Rich Mount School" className="h-22 w-22 rounded-full object-cover" />
            </div>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.38em] text-[rgba(245,241,232,0.72)]">
                Rich Mount School
              </p>
              <p className="mt-3 font-display text-[2.6rem] leading-none text-[var(--rm-cream)]">
                Knowledge is Power
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="rm-root fixed inset-0 z-[999] grid grid-rows-2 overflow-hidden"
          style={{ background: "transparent" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onAnimationComplete={() => {
            sessionStorage.setItem("rich-mount-loaded", "1");
            onDone();
          }}
        >
          <motion.div
            style={{ background: "var(--rm-emerald)" }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            style={{ background: "var(--rm-emerald)" }}
            animate={{ y: "100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  centered = false,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  centered?: boolean;
  inverted?: boolean;
}) {
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <div
        className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.34em] ${
          centered ? "justify-center" : ""
        }`}
        style={{ color: inverted ? "var(--rm-gold)" : "var(--rm-red)" }}
      >
        <span className="h-px w-10 bg-[var(--rm-gold)]" />
        {eyebrow}
      </div>
      <h2
        className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3.35rem)] leading-[0.96]"
        style={{ color: inverted ? "var(--rm-cream)" : "var(--rm-ink)" }}
      >
        {title}
      </h2>
      <p
        className="mt-5 text-[15px] leading-8"
        style={{ color: inverted ? "rgba(245,241,232,0.72)" : "var(--rm-muted)" }}
      >
        {body}
      </p>
    </Reveal>
  );
}

export default function RichMount() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap");

        .rm-root {
          --rm-emerald: #0f4c4c;
          --rm-emerald-deep: #0b3535;
          --rm-cream: #f5f1e8;
          --rm-paper: #fcfaf4;
          --rm-ink: #143233;
          --rm-muted: #57686a;
          --rm-red: #b23a48;
          --rm-gold: #d4a84f;
          --rm-gold-soft: #f5e6be;
          --rm-mint-soft: #deefe9;
          --rm-rose-soft: #f7e2e6;
          --rm-sand-soft: #efe6d8;
          --rm-line: rgba(15, 76, 76, 0.12);
          --ps-gold: #d4a84f;
          font-family: "Manrope", sans-serif;
          color: var(--rm-ink);
          background:
            radial-gradient(circle at top right, rgba(212,168,79,0.12), transparent 28%),
            linear-gradient(180deg, #f8f4ea 0%, #f4efe3 100%);
        }

        .rm-root .font-display {
          font-family: "Fraunces", serif;
        }

        .rm-root .rm-grid {
          position: relative;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0)),
            #f8f4ea;
        }

        .rm-root .rm-grid::before,
        .rm-root .rm-grid::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .rm-root .rm-grid::before {
          background-image:
            radial-gradient(circle at center, rgba(15,76,76,0.06) 0 1px, transparent 1px 18px, rgba(15,76,76,0.055) 18px 19px, transparent 19px 100%),
            radial-gradient(circle at center, rgba(178,58,72,0.045) 0 1px, transparent 1px 28px, rgba(212,168,79,0.07) 28px 29px, transparent 29px 100%);
          background-size: 132px 132px, 132px 132px;
          background-position: 0 0, 22px 22px;
          opacity: 0.75;
        }

        .rm-root .rm-grid::after {
          background-image:
            repeating-linear-gradient(135deg, transparent 0 22px, rgba(212,168,79,0.06) 22px 23px, transparent 23px 44px),
            repeating-linear-gradient(45deg, transparent 0 74px, rgba(15,76,76,0.04) 74px 75px, transparent 75px 148px);
          opacity: 0.45;
        }

        .rm-root .rm-seal {
          position: relative;
          isolation: isolate;
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.86) 0 22%, transparent 22% 100%),
            radial-gradient(circle at center, rgba(245,241,232,0.8) 0 36%, transparent 36% 100%);
        }

        .rm-root .rm-seal::before,
        .rm-root .rm-seal::after {
          content: "";
          position: absolute;
          inset: 12px;
          border-radius: 999px;
          border: 1px solid rgba(212, 168, 79, 0.32);
        }

        .rm-root .rm-seal::after {
          inset: 34px;
          border-color: rgba(178, 58, 72, 0.22);
        }

        .rm-root .rm-loader-seal {
          border: 1px solid rgba(245, 241, 232, 0.22);
          background:
            radial-gradient(circle at center, rgba(245,241,232,0.14), transparent 72%),
            rgba(255,255,255,0.05);
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.18);
        }

        .rm-root .rm-ribbon {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(212, 168, 79, 0.25);
          background:
            linear-gradient(90deg, rgba(15,76,76,0.96), rgba(15,76,76,0.88)),
            rgba(15,76,76,0.92);
          color: rgba(245,241,232,0.84);
        }

        .rm-root .rm-ribbon::before,
        .rm-root .rm-ribbon::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 18px;
          height: 18px;
          background: var(--rm-gold);
          opacity: 0.16;
          transform: translateY(-50%) rotate(45deg);
        }

        .rm-root .rm-ribbon::before { left: 18px; }
        .rm-root .rm-ribbon::after { right: 18px; }

        .rm-root .rm-arch {
          border-radius: 28px 28px 120px 120px;
        }

        .rm-root .rm-star::before {
          content: "✦";
          color: var(--rm-gold);
          margin-right: 0.6rem;
        }

        .rm-root .rm-chip {
          border: 1px solid rgba(15, 76, 76, 0.14);
          background: rgba(255,255,255,0.66);
          backdrop-filter: blur(10px);
        }

        .rm-root .rm-button-primary {
          background: var(--rm-emerald);
          color: var(--rm-cream);
          box-shadow: 0 16px 30px rgba(15, 76, 76, 0.2);
        }

        .rm-root .rm-button-secondary {
          border: 1px solid rgba(15, 76, 76, 0.14);
          background: rgba(255,255,255,0.8);
          color: var(--rm-ink);
        }
      `}</style>

      <div className="rm-root min-h-screen">
        {loading && <PageLoader onDone={() => setLoading(false)} />}

        <div className="rm-grid relative overflow-hidden">
          <div className="absolute inset-0 opacity-70" />
          <div className="absolute left-[-8rem] top-36 h-64 w-64 rounded-full bg-[rgba(212,168,79,0.12)] blur-3xl" />
          <div className="absolute right-[-6rem] top-18 h-72 w-72 rounded-full bg-[rgba(178,58,72,0.1)] blur-3xl" />

          <header className="relative z-20 mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex w-full items-center justify-center gap-3 sm:w-auto sm:justify-start sm:gap-4">
            <a href="#top" className="flex items-center gap-3 sm:gap-4">
              <img src={LOGO} alt="Rich Mount School logo" className="h-12 w-12 rounded-full object-cover shadow-[0_10px_30px_rgba(15,76,76,0.12)] sm:h-14 sm:w-14" />
              <div>
                <p className="font-display text-[1.35rem] leading-none text-[var(--rm-emerald)] sm:text-[1.55rem]">
                  Rich Mount School
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[var(--rm-muted)] sm:text-[11px] sm:tracking-[0.28em]">
                  Knowledge is Power
                </p>
              </div>
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[rgba(15,76,76,0.12)] bg-white/78 px-4 py-3 text-sm font-semibold text-[var(--rm-ink)] sm:hidden"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
            </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-[var(--rm-muted)] lg:flex">
              <a href="#learning">Learning</a>
              <a href="#profile">Profile</a>
              <a href="#admissions">Admissions</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="hidden w-full items-center justify-center gap-3 sm:flex sm:w-auto sm:justify-end">
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[rgba(15,76,76,0.12)] bg-white/78 px-4 py-3 text-sm font-semibold text-[var(--rm-ink)] lg:hidden"
                onClick={() => setMenuOpen((current) => !current)}
              >
                {menuOpen ? "Close" : "Menu"}
              </button>
              <a href="#admissions" className="rm-button-primary inline-flex min-h-[44px] items-center justify-center rounded-full px-5 py-3 text-sm font-semibold sm:min-h-0">
                Enquire Now
              </a>
            </div>
            </div>
          </header>

          {menuOpen && (
            <div className="fixed inset-0 z-30 bg-[rgba(15,76,76,0.18)] backdrop-blur-sm lg:hidden">
              <div className="mx-4 mt-24 rounded-[28px] border border-[rgba(15,76,76,0.12)] bg-white/94 p-4 shadow-[0_24px_60px_rgba(15,76,76,0.14)]">
                <div className="mb-3 flex items-center justify-between gap-4 border-b border-[rgba(15,76,76,0.08)] pb-3">
                  <div>
                    <p className="font-display text-[1.35rem] leading-none text-[var(--rm-emerald)]">
                      Rich Mount School
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--rm-muted)]">
                      Knowledge is Power
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[rgba(15,76,76,0.12)] bg-white px-4 py-3 text-sm font-semibold text-[var(--rm-ink)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    Close
                  </button>
                </div>

                <nav className="grid gap-2 text-sm text-[var(--rm-ink)]">
                  {[
                    { href: "#learning", label: "Learning" },
                    { href: "#profile", label: "Profile" },
                    { href: "#admissions", label: "Admissions" },
                    { href: "#contact", label: "Contact" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="inline-flex min-h-[44px] items-center rounded-[18px] px-4 py-3 hover:bg-[rgba(15,76,76,0.06)]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <a
                  href="#admissions"
                  className="rm-button-primary mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          )}

          <section className="relative z-10 px-4 pb-18 pt-6 sm:px-6 sm:pb-24" id="top">
            <div className="mx-auto max-w-7xl">
              <Reveal className="mx-auto max-w-4xl text-center">
                <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(15,76,76,0.1)] bg-white/72 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-[var(--rm-red)] sm:text-[11px] sm:tracking-[0.34em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--rm-gold)]" />
                  Rich Mount School, Dimapur
                </div>
                <h1 className="mx-auto mt-8 max-w-[16ch] font-display text-[clamp(2.45rem,5vw,4.3rem)] leading-[0.92] text-[var(--rm-ink)]">
                  Learning with discipline, character, and purpose.
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-[12px] uppercase tracking-[0.18em] text-[var(--rm-red)] sm:text-[13px] sm:tracking-[0.3em]">
                  English-medium co-educational schooling in Chekiye Village, Dimapur
                </p>

                <div className="mx-auto mt-8 max-w-5xl">
                  <div className="grid gap-4 md:grid-cols-[0.9fr_1.2fr_0.9fr]">
                    <Reveal
                      delay={0.05}
                      className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--rm-line)] bg-white/72 p-2 shadow-[0_18px_40px_rgba(15,76,76,0.08)]"
                    >
                      <div className="overflow-hidden rounded-[22px]">
                        <img
                          src={HERO_IMAGES[0]}
                          alt="Classroom image placeholder"
                          className="h-[220px] w-full object-cover"
                        />
                      </div>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[var(--rm-red)]">
                        Classroom view
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--rm-muted)]">
                        A daily classroom setting that suggests attentiveness, teacher guidance, and steady academic work.
                      </p>
                      <div className="mt-5 grid gap-2">
                        {[
                          "Teacher-guided classroom rhythm",
                          "Focused learning environment",
                          "Everyday discipline and participation",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-[16px] border border-[rgba(15,76,76,0.08)] bg-[var(--rm-sand-soft)] px-4 py-3 text-sm text-[var(--rm-ink)]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </Reveal>

                    <Reveal
                      delay={0.1}
                      className="relative overflow-hidden rounded-[34px] border border-[rgba(212,168,79,0.28)] bg-white/78 p-3 shadow-[0_24px_50px_rgba(15,76,76,0.1)]"
                    >
                      <div className="overflow-hidden rounded-[28px]">
                        <img
                          src={HERO_IMAGES[1]}
                          alt="Student life image placeholder"
                          className="h-[280px] w-full object-cover sm:h-[320px]"
                        />
                      </div>
                      <div className="absolute left-4 top-4 rounded-full border border-white/45 bg-white/22 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md sm:left-8 sm:top-8 sm:px-4 sm:text-[11px] sm:tracking-[0.32em]">
                        Student life
                      </div>
                      <div className="absolute inset-x-4 bottom-4 rounded-[24px] bg-[rgba(15,76,76,0.72)] px-4 py-4 text-left backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:px-5">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[rgba(245,241,232,0.72)] sm:text-[11px] sm:tracking-[0.32em]">
                          School life panel
                        </p>
                        <p className="mt-2 font-display text-[1.5rem] leading-[0.96] text-[var(--rm-cream)] sm:text-[2rem] sm:leading-[0.94]">
                          Students growing through routine, discipline, and shared school life.
                        </p>
                      </div>
                    </Reveal>

                    <div className="grid gap-4">
                      <Reveal
                        delay={0.14}
                        className="overflow-hidden rounded-[28px] border border-[var(--rm-line)] bg-[var(--rm-sand-soft)] p-2 shadow-[0_18px_36px_rgba(15,76,76,0.06)]"
                      >
                        <div className="overflow-hidden rounded-[22px]">
                          <img
                            src={HERO_IMAGES[2]}
                            alt="Campus image placeholder"
                            className="h-[160px] w-full object-cover"
                          />
                        </div>
                        <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[var(--rm-red)]">
                          Campus view
                        </p>
                      </Reveal>

                      <Reveal
                        delay={0.18}
                        className="rounded-[28px] border border-[var(--rm-line)] bg-white/80 p-5 text-left shadow-[0_18px_36px_rgba(15,76,76,0.06)]"
                      >
                        <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--rm-red)]">
                          School note
                        </p>
                        <p className="mt-3 font-display text-[1.7rem] leading-[0.98] text-[var(--rm-ink)]">
                          School life, classroom focus, and campus environment.
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[var(--rm-muted)]">
                          Together these panels present Rich Mount as a school community shaped by learning,
                          conduct, and a visible day-to-day academic rhythm.
                        </p>
                      </Reveal>
                    </div>
                  </div>
                </div>

                <p className="mx-auto mt-7 max-w-3xl text-[1rem] leading-7 text-[var(--rm-muted)] sm:text-[1.05rem] sm:leading-8">
                  Rich Mount School is presented here as a grounded school community in Chekiye Village,
                  with English-medium learning, a co-educational structure, and a school profile that
                  extends through Class 10.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <a href="#learning" className="rm-button-primary rounded-full px-6 py-3.5 text-sm font-semibold">
                    Explore Learning
                  </a>
                  <a href="#profile" className="rm-button-secondary rounded-full px-6 py-3.5 text-sm font-semibold">
                    View School Profile
                  </a>
                </div>
              </Reveal>

              <div className="mt-14 grid gap-5 lg:grid-cols-[0.86fr_1.08fr_0.86fr]">
                <Reveal className="rounded-[30px] border border-[var(--rm-line)] bg-white/78 p-6 shadow-[0_24px_40px_rgba(15,76,76,0.08)]">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--rm-red)]">
                    School profile
                  </p>
                  <h2 className="mt-4 max-w-[11ch] font-display text-[1.75rem] leading-[0.98] text-[var(--rm-ink)] sm:text-[1.95rem]">
                    A co-educational English-medium school in Chekiye, Dimapur.
                  </h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {PROFILE.map((item) => (
                      <div key={item.label} className="rm-chip rounded-[20px] px-4 py-3">
                        <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--rm-muted)]">
                          {item.label}
                        </span>
                        <div className="mt-2 font-display text-[1.45rem] leading-none text-[var(--rm-emerald)]">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm leading-7 text-[var(--rm-muted)]">
                    Public school-directory entries consistently place Rich Mount School in the Chekiye /
                    3rd Mile / Chumukedima-Dimapur area, as an English-medium co-ed school serving up to
                    Class 10.
                  </p>
                  <div className="mt-6 rounded-[20px] border border-[rgba(15,76,76,0.08)] bg-[var(--rm-sand-soft)] px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--rm-red)]">
                      School note
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--rm-muted)]">
                      Public sources vary slightly in locality wording, but they consistently point to the
                      same school profile and area placement.
                    </p>
                  </div>
                </Reveal>

                <div className="grid gap-5">
                  <Reveal delay={0.08} className="rounded-[36px] border border-[rgba(212,168,79,0.3)] bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.54))] p-6 shadow-[0_28px_60px_rgba(15,76,76,0.12)]">
                    <div className="rm-seal rm-arch relative overflow-hidden rounded-[32px] border border-[rgba(15,76,76,0.08)] bg-[linear-gradient(180deg,rgba(15,76,76,0.08),rgba(178,58,72,0.03))] px-6 py-8">
                      <div className="relative z-10 flex min-h-[350px] flex-col">
                      <div className="flex flex-col items-center gap-2 text-center text-[10px] uppercase tracking-[0.22em] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-[11px] sm:text-left sm:tracking-[0.34em]">
                        <span className="text-[var(--rm-red)]">Seal chamber</span>
                        <span className="text-[var(--rm-muted)]">Rich Mount School</span>
                      </div>

                      <div className="flex flex-1 flex-col items-center justify-center px-2 text-center sm:px-3">
                        <div className="mx-auto flex h-30 w-30 items-center justify-center rounded-full border border-[rgba(15,76,76,0.14)] bg-white/88 p-3 shadow-[0_20px_40px_rgba(15,76,76,0.12)] sm:h-36 sm:w-36 sm:p-4">
                          <img src={LOGO} alt="Rich Mount School emblem" className="h-full w-full rounded-full object-cover" />
                        </div>
                        <div className="mt-4 rounded-full border border-[rgba(15,76,76,0.12)] bg-white/72 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[var(--rm-emerald)] sm:mt-5 sm:text-[11px] sm:tracking-[0.28em]">
                          Knowledge is Power
                        </div>
                        <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[var(--rm-red)] sm:mt-5 sm:text-[11px] sm:tracking-[0.34em]">
                          Chekiye Village, Dimapur
                        </p>
                        <h3 className="mx-auto mt-3 max-w-[9ch] font-display text-[clamp(1.45rem,6vw,2.15rem)] leading-[0.98] text-[var(--rm-emerald-deep)] sm:mt-4 sm:max-w-[10ch] sm:text-[clamp(1.7rem,2.25vw,2.15rem)] sm:leading-[0.96]">
                          Rich Mount School, Chekiye Village, Dimapur.
                        </h3>
                        <p className="mx-auto mt-4 max-w-[28ch] text-sm leading-6 text-[var(--rm-muted)] sm:max-w-[34ch] sm:leading-7">
                          The emblem, motto, and location line work together here to present a clearer
                          public-facing identity for the school.
                        </p>
                      </div>

                      <div className="mt-4 flex justify-center sm:mt-0">
                        <div className="rounded-full border border-[rgba(15,76,76,0.08)] bg-white/62 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[var(--rm-red)] sm:text-[11px] sm:tracking-[0.28em]">
                          Crest-led identity
                        </div>
                      </div>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.14} className="rounded-[30px] border border-[var(--rm-line)] bg-white/82 p-6 shadow-[0_18px_36px_rgba(15,76,76,0.08)]">
                    <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--rm-red)]">
                          School stance
                        </p>
                        <h3 className="mt-3 max-w-[12ch] font-display text-[1.7rem] leading-[0.98] text-[var(--rm-ink)]">
                          A school profile families can understand quickly.
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-[var(--rm-muted)]">
                          This supporting card summarises the basics: where the school is located, its
                          medium of instruction, and the academic stage it publicly serves.
                        </p>
                      </div>

                      <div className="grid gap-3">
                        {[
                          "Chekiye / Chumukedima-Dimapur placement",
                          "English-medium co-ed profile",
                          "Classes through Class 10 in public records",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-[20px] border border-[rgba(15,76,76,0.08)] bg-[var(--rm-sand-soft)] px-4 py-4 text-sm text-[var(--rm-ink)]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div className="grid gap-5">
                  <Reveal delay={0.12} className="rounded-[30px] border border-[rgba(178,58,72,0.12)] bg-[var(--rm-rose-soft)] p-6">
                    <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--rm-red)]">
                      Learning profile
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--rm-muted)]">
                      A concise profile built from the most consistent publicly available details.
                    </p>
                    <div className="mt-5 grid gap-3">
                      {[
                        "English-medium instruction",
                        "Co-educational format",
                        "Classes 1 to 10 in public records",
                        "Private unaided school profile",
                      ].map((line) => (
                        <div key={line} className="rm-star rounded-[18px] bg-white/62 px-4 py-3 text-sm text-[var(--rm-ink)]">
                          {line}
                        </div>
                      ))}
                    </div>
                  </Reveal>

                  <Reveal delay={0.18} className="rounded-[30px] border border-[rgba(15,76,76,0.12)] bg-[var(--rm-paper)] p-6">
                    <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--rm-red)]">
                      Inquiry lane
                    </p>
                    <h3 className="mt-4 max-w-[10ch] font-display text-[1.8rem] leading-[0.98] text-[var(--rm-ink)] sm:text-[1.95rem]">
                      A simpler way for families to begin with the school.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--rm-muted)]">
                      Since the school does not appear to have a strong official public website, this page
                      should serve as a clear first introduction rather than a complicated admissions portal.
                    </p>
                    <div className="mt-5 rounded-[20px] border border-[rgba(15,76,76,0.08)] bg-white/72 px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--rm-red)]">
                        Best next step
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--rm-muted)]">
                        Guide families toward a visit, enquiry, and direct school contact.
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex rounded-full bg-[var(--rm-gold)] px-5 py-3 text-sm font-semibold text-[var(--rm-emerald-deep)]"
                    >
                      Contact the School
                    </a>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        </div>

          <section className="px-4 sm:px-6">
          <div className="rm-ribbon mx-auto max-w-7xl rounded-[24px] px-4 py-4 sm:rounded-full sm:px-6">
            <Marquee items={TICKER} className="text-[rgba(245,241,232,0.84)]" speed={24} />
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 sm:py-24" id="learning">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Learning Arc"
              title="The learning journey presented as clear school stages."
              body="The learning section presents the school in stages, from early learning through secondary level, so families can understand the academic journey more clearly."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <TiltCard className="h-full">
                <Reveal className="h-full">
                  <SpotlightCard className="h-full rounded-[36px] border border-[var(--rm-line)]">
                    <article
                      className="flex h-full min-h-[520px] flex-col rounded-[36px] p-8"
                      style={{
                        background: LEARNING_ARCS[0].surface,
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-full border border-[rgba(245,241,232,0.14)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[rgba(245,241,232,0.82)]">
                          {LEARNING_ARCS[0].tag}
                        </div>
                        <div className="font-display text-[2rem] text-[rgba(245,241,232,0.16)]">
                          {LEARNING_ARCS[0].marker}
                        </div>
                      </div>

                      <div className="mt-10 rounded-[30px] border border-[rgba(245,241,232,0.1)] bg-[rgba(255,255,255,0.05)] p-7 backdrop-blur-sm">
                        <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--rm-gold)]">
                          Foundational stage
                        </p>
                        <h3 className="mt-4 font-display text-[clamp(2rem,3.1vw,3rem)] leading-[0.94] text-[var(--rm-cream)]">
                          {LEARNING_ARCS[0].name}
                        </h3>
                        <p className="mt-5 max-w-[34ch] text-[15px] leading-8 text-[rgba(245,241,232,0.76)]">
                          {LEARNING_ARCS[0].description}
                        </p>
                      </div>

                      <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {[
                          "Early routines",
                          "Language confidence",
                          "Foundational care",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-[20px] border border-[rgba(245,241,232,0.1)] bg-[rgba(255,255,255,0.06)] px-4 py-4 text-sm text-[var(--rm-cream)]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-10">
                        <div className="rounded-[26px] border border-[rgba(245,241,232,0.1)] bg-[rgba(255,255,255,0.05)] px-5 py-4 backdrop-blur-sm">
                          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--rm-gold)]">
                            Rich Mount academic rhythm
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[rgba(245,241,232,0.74)]">
                            The school journey is introduced from the foundational years first, then carried
                            upward through the later stages.
                          </p>
                        </div>
                      </div>
                    </article>
                  </SpotlightCard>
                </Reveal>
              </TiltCard>

              <div className="grid gap-6">
                {LEARNING_ARCS.slice(1).map((arc, index) => (
                  <TiltCard key={arc.name} className="h-full">
                    <Reveal delay={index * 0.08} className="h-full">
                      <SpotlightCard className="h-full rounded-[32px] border border-[var(--rm-line)]">
                        <article
                          className="flex h-full min-h-[158px] flex-col rounded-[32px] p-6"
                          style={{
                            background: arc.surface,
                          }}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="rounded-full border border-[rgba(245,241,232,0.14)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[rgba(245,241,232,0.82)]">
                              {arc.tag}
                            </div>
                            <div className="font-display text-[1.65rem] text-[rgba(245,241,232,0.16)]">
                              {arc.marker}
                            </div>
                          </div>

                          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                            <div>
                              <h3 className="font-display text-[1.7rem] leading-[0.98] text-[var(--rm-cream)]">
                                {arc.name}
                              </h3>
                              <p className="mt-3 max-w-[38ch] text-sm leading-7 text-[rgba(245,241,232,0.74)]">
                                {arc.description}
                              </p>
                            </div>
                            <div className="rounded-[18px] border border-[rgba(245,241,232,0.12)] bg-[rgba(255,255,255,0.05)] px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-[rgba(245,241,232,0.82)]">
                              Stage {index + 2}
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

        <section className="bg-[var(--rm-emerald-deep)] px-4 py-18 text-[var(--rm-cream)] sm:px-6 sm:py-20" id="profile">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Why This Works"
              title="A school identity shaped by place, discipline, and everyday learning."
              body="This section explains Rich Mount through its public profile, location, academic structure, and the values implied by its emblem and motto."
              inverted
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal className="rounded-[34px] border border-[rgba(212,168,79,0.18)] bg-[rgba(255,255,255,0.06)] p-6">
                <p className="text-[11px] uppercase tracking-[0.34em] text-[rgba(245,241,232,0.66)]">
                  School profile highlights
                </p>
                <div className="mt-5 overflow-hidden rounded-[24px] border border-[rgba(245,241,232,0.08)]">
                  <img
                    src={SECTION_IMAGES[0]}
                    alt="Dummy students in classroom"
                    className="h-32 w-full object-cover"
                  />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Established", value: "1999" },
                    { label: "Highest class", value: "10" },
                    { label: "Format", value: "Co-ed" },
                    { label: "Medium", value: "English" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[20px] border border-[rgba(245,241,232,0.1)] bg-[rgba(255,255,255,0.04)] p-4">
                      <div className="font-display text-[2rem] leading-none text-[var(--rm-gold)]">
                        {item.value}
                      </div>
                      <div className="mt-2 text-[11px] uppercase tracking-[0.28em] text-[rgba(245,241,232,0.66)]">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-[rgba(245,241,232,0.72)]">
                  Public directory pages vary slightly on pin code and locality naming, but they align on
                  the school’s Chekiye / Chumukedima-Dimapur placement, establishment year, and overall
                  class range.
                </p>
                <div className="mt-5 rounded-[22px] border border-[rgba(245,241,232,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--rm-gold)]">
                    School note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[rgba(245,241,232,0.72)]">
                    This block can later hold actual results, achievements, or a principal's message.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-6">
                {PILLARS.map((pillar, index) => (
                  <Reveal
                    key={pillar.title}
                    delay={index * 0.08}
                    className="rounded-[30px] border border-[rgba(245,241,232,0.1)] bg-[rgba(255,255,255,0.05)] p-5"
                  >
                    <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--rm-gold)]">
                      Chapter {String(index + 1).padStart(2, "0")}
                    </p>
                    <div className="mt-4 grid gap-4 md:grid-cols-[140px_1fr] md:items-start">
                      <div className="overflow-hidden rounded-[18px] border border-[rgba(245,241,232,0.08)]">
                        <img
                          src={SECTION_IMAGES[index + 1]}
                          alt={`Rich Mount placeholder image ${index + 1}`}
                          className="h-24 w-full object-cover md:h-28"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-[1.45rem] leading-[1] text-[var(--rm-cream)]">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[rgba(245,241,232,0.72)]">{pillar.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Trust Notes"
              title="Content details gathered from public school records and local reporting."
              body="Because a strong official website was not obvious in search results, this section relies on the most stable details repeated across public school records and local reporting."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal className="rounded-[36px] border border-[var(--rm-line)] bg-white/80 p-6 shadow-[0_24px_50px_rgba(15,76,76,0.08)]">
                <div className="mb-6 grid gap-4 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[24px] border border-[rgba(15,76,76,0.08)]">
                    <img
                      src={SECTION_IMAGES[4]}
                      alt="Dummy campus exterior"
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <div className="rounded-[24px] border border-[rgba(15,76,76,0.08)] bg-[var(--rm-sand-soft)] p-5">
                    <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--rm-red)]">
                      Campus image
                    </p>
                    <h3 className="mt-3 font-display text-[1.7rem] leading-[0.98] text-[var(--rm-ink)]">
                      Add real campus, assembly, or activity photography here later.
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--rm-muted)]">
                      This gives the section visual weight now while keeping the layout ready for original school photography.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
                  {TRUST_NOTES.map((note) => (
                    <div
                      key={note.title}
                      className="rounded-[28px] border border-[rgba(15,76,76,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(245,241,232,0.95))] p-5"
                    >
                      <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--rm-red)]">
                        Source-led note
                      </p>
                      <h3 className="mt-3 font-display text-[1.65rem] leading-[0.98] text-[var(--rm-ink)]">
                        {note.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--rm-muted)]">{note.copy}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="rounded-[36px] border border-[rgba(212,168,79,0.25)] bg-[linear-gradient(180deg,rgba(212,168,79,0.18),rgba(255,255,255,0.72))] p-7">
                <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--rm-red)]">
                  Design note
                </p>
                <div className="mt-4 overflow-hidden rounded-[24px] border border-[rgba(15,76,76,0.08)]">
                  <img
                    src={SECTION_IMAGES[5]}
                    alt="Dummy school life composition"
                    className="h-40 w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 max-w-[11ch] font-display text-[2.15rem] leading-[0.96] text-[var(--rm-emerald-deep)]">
                  The school emblem provides a strong public identity.
                </h3>
                <p className="mt-5 text-sm leading-7 text-[var(--rm-muted)]">
                  The circular badge, ribbon forms, motto line, and evergreen tone all help the page feel
                  specific to Rich Mount School even before original media is added.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {["Seal rings", "Ribbon strips", "Star points", "Warm paper cards"].map((item) => (
                    <div key={item} className="rounded-[22px] bg-white/68 px-4 py-4 text-sm text-[var(--rm-ink)]">
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--rm-paper)] px-4 py-20 sm:px-6 sm:py-24" id="admissions">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Admissions Path"
              title="Keep the call to action simple and direct."
              body="The admissions area should guide families toward an enquiry, a visit, and direct school contact rather than overcomplicating the first step."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal className="rounded-[34px] border border-[var(--rm-line)] bg-white p-6 shadow-[0_18px_40px_rgba(15,76,76,0.06)]">
                <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
                  <div className="overflow-hidden rounded-[24px] border border-[rgba(15,76,76,0.08)]">
                    <img
                      src={SECTION_IMAGES[2]}
                      alt="Admission image placeholder"
                      className="h-full min-h-[260px] w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center self-center">
                    <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--rm-red)]">
                      Admissions introduction
                    </p>
                    <h3 className="mt-3 max-w-[12ch] font-display text-[1.8rem] leading-[0.98] text-[var(--rm-ink)]">
                      Start with school contact, campus understanding, and parent confidence.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--rm-muted)]">
                      This block can later hold real admission-desk photos, prospectus previews, or parent interaction images.
                    </p>
                    <div className="mt-5 grid max-w-[24rem] gap-3 sm:grid-cols-2">
                      {[
                        "Campus enquiry card",
                        "Visit booking card",
                        "Prospectus snapshot",
                        "Contact details tile",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[18px] border border-[rgba(15,76,76,0.08)] bg-[var(--rm-sand-soft)] px-4 py-4 text-sm text-[var(--rm-ink)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
              {ADMISSION_STEPS.map((item, index) => (
                <Reveal key={item.step} delay={index * 0.08}>
                  <div className="rounded-[30px] border border-[var(--rm-line)] bg-white p-6 shadow-[0_18px_40px_rgba(15,76,76,0.06)]">
                  <p className="font-display text-[2.4rem] leading-none text-[var(--rm-gold)]">{item.step}</p>
                    <h3 className="mt-4 font-display text-[1.7rem] leading-[0.98] text-[var(--rm-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--rm-muted)]">{item.body}</p>
                  </div>
                </Reveal>
              ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[var(--rm-emerald)] px-4 py-18 text-[var(--rm-cream)] sm:px-6 sm:py-20" id="contact">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <img src={LOGO} alt="Rich Mount logo" className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16" />
                <div>
                  <p className="font-display text-[1.55rem] leading-none sm:text-[1.75rem]">Rich Mount School</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[rgba(245,241,232,0.68)] sm:text-[11px] sm:tracking-[0.3em]">
                    Chekiye Village, Dimapur
                  </p>
                </div>
              </div>
              <h2 className="mt-8 max-w-[12ch] font-display text-[clamp(1.8rem,3vw,2.9rem)] leading-[0.98]">
                Rich Mount School, presented with clarity and purpose.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[rgba(245,241,232,0.76)]">
                Use this page as the school’s public-facing introduction, then attach official
                admissions, fees, results, and contact details as they become available.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="rounded-[34px] border border-[rgba(245,241,232,0.12)] bg-[rgba(255,255,255,0.06)] p-7">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--rm-gold)]">
                Next additions
              </p>
              <div className="mt-5 overflow-hidden rounded-[24px] border border-[rgba(245,241,232,0.1)]">
                <img
                  src={SECTION_IMAGES[3]}
                  alt="Footer contact image placeholder"
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  "Contact card",
                  "Fee structure panel",
                  "Result highlights",
                  "Campus photography swap",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-[rgba(245,241,232,0.1)] px-4 py-4 text-sm text-[rgba(245,241,232,0.8)]">
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="#top"
                className="mt-8 inline-flex rounded-full bg-[var(--rm-gold)] px-5 py-3 text-sm font-semibold text-[var(--rm-emerald-deep)]"
              >
                Back to Top
              </a>
            </Reveal>
          </div>
        </footer>
      </div>
    </>
  );
}
