import { useRef, useState, useEffect, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

// ─── Assets ──────────────────────────────────────────────────────────────────

const LOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6xhPcR1eKTMDh9-1Rv3DCTF8M3PfLgO5Ow&s";

const IMG = {
  hero:    "/sportsdayriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.22.06%20(2).jpeg",
  heroMini:"/enviroementriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.26.08%20(1).jpeg",
  prog1:   "/sportsdayriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.22.03.jpeg",
  prog2:   "/sportsdayriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.22.04%20(1).jpeg",
  prog3:   "/sportsdayriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.22.05.jpeg",
  path1:   "/enviroementriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.26.07.jpeg",
  path2:   "/enviroementriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.26.07%20(1).jpeg",
  path3:   "/enviroementriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.26.07%20(2).jpeg",
  path4:   "/enviroementriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.26.08.jpeg",
  philos:  "/sportsdayriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.22.06%20(1).jpeg",
  cam1:    "/enviroementriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.26.08%20(1).jpeg",
  cam2:    "/sportsdayriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.22.04.jpeg",
  cam3:    "/sportsdayriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.22.05%20(1).jpeg",
  cam4:    "/sportsdayriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.22.06.jpeg",
  cam5:    "/sportsdayriverbelt/WhatsApp%20Image%202026-03-28%20at%2018.22.06%20(2).jpeg",
};

// ─── Content ─────────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  "98% Parent Satisfaction",
  "24+ Learning Zones",
  "12:1 Mentor Ratio",
  "Award-Winning Curriculum",
  "Safe Campus Promise",
  "Admissions Open 2026",
  "Rooted in Excellence",
];

const PROGRAMS = [
  {
    title: "Life Skills Lab",
    tag: "Practical Learning",
    description:
      "Project-based routines that build confidence, empathy, and everyday independence in every child.",
    img: IMG.prog1,
    large: true,
  },
  {
    title: "Imagination Studio",
    tag: "Creative Thinking",
    description:
      "Storytelling, science, and maker challenges that turn curiosity into real-world action.",
    img: IMG.prog2,
    large: false,
  },
  {
    title: "Future Leaders",
    tag: "Leadership & Growth",
    description:
      "Communication, teamwork, and leadership moments woven into every term of the year.",
    img: IMG.prog3,
    large: false,
  },
];

const PATHWAYS = [
  { title: "Letter Adventure",    grade: "Ages 3 – 5",  icon: "✦", color: "#c9860a", bg: "#fff8eb", border: "#f5e0a0" },
  { title: "Reading Circle",      grade: "Ages 6 – 8",  icon: "◎", color: "#1a7a5e", bg: "#e8f7f2", border: "#a8dece" },
  { title: "World Explorer",      grade: "Ages 9 – 11", icon: "⊕", color: "#2d4fb8", bg: "#eef0fb", border: "#b4beed" },
  { title: "Art & Design Studio", grade: "Ages 12+",    icon: "◈", color: "#b84030", bg: "#fef0ec", border: "#f0b8ad" },
];

const TESTIMONIALS = [
  {
    quote: "River Belt gave our daughter more than education — it gave her the courage to try new things and love doing them.",
    name: "Priya Sharma",
    role: "Parent of Grade 4 student",
    initials: "PS",
    color: "#c9860a",
  },
  {
    quote: "The mentor ratio is real. Our son's teacher knows him deeply — not just his grades, but his curiosity and his fears.",
    name: "James & Rachel Fernandez",
    role: "Parents of Grade 6 student",
    initials: "JF",
    color: "#1a7a5e",
  },
  {
    quote: "I've never seen a campus where children genuinely look forward to Monday mornings. River Belt created that magic.",
    name: "Dr. Anjali Nair",
    role: "Parent of two River Belt children",
    initials: "AN",
    color: "#2d4fb8",
  },
];

const FOOTER_LINKS: Record<string, string[]> = {
  Explore: ["About River Belt", "Our Programs", "Pathways", "Philosophy"],
  School:  ["Campus Tour", "Admissions", "Events", "Notices"],
  Support: ["Contact Us", "Parent Portal", "Careers", "Privacy Policy"],
};

// ─── Easing ───────────────────────────────────────────────────────────────────

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

// ─── Decorative Components ────────────────────────────────────────────────────

function DotPattern({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const dot = dark
    ? "rgba(255,255,255,0.07)"
    : "rgba(12,19,50,0.055)";
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${dot} 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }}
    />
  );
}

function LeafAccent({
  className = "",
  color = "rgba(200,134,10,0.14)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      aria-hidden
      className={`absolute pointer-events-none ${className}`}
      width="160"
      height="200"
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 10 C130 38,148 88,134 138 C120 188,66 210,38 178 C10 146,8 96,28 56 C48 16,80 10,80 10 Z"
        fill={color}
      />
      <line x1="80" y1="10" x2="80" y2="200" stroke={color} strokeWidth="1.2" strokeDasharray="4 7" />
    </svg>
  );
}

function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(12,19,50,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(12,19,50,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

// ─── Animation Wrapper ────────────────────────────────────────────────────────

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: EASE_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Page Loader ──────────────────────────────────────────────────────────────

function PageLoader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("rb-v3-loaded");
    if (seen) { onDone(); return; }
    let frame = 0;
    const total = 46;
    const id = setInterval(() => {
      frame++;
      setCount(Math.round((frame / total) * 100));
      if (frame >= total) {
        clearInterval(id);
        setTimeout(() => setLeaving(true), 200);
      }
    }, 40);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden rb-root"
      style={{ background: "var(--rb-navy)" }}
      animate={leaving ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (leaving) {
          sessionStorage.setItem("rb-v3-loaded", "1");
          onDone();
        }
      }}
    >
      <DotPattern dark />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500, height: 500,
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(232,160,24,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE_EXPO }}
      >
        <div
          style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase",
            color: "var(--rb-amber)", opacity: 0.65, fontFamily: "var(--rb-font-sans)", marginBottom: 20 }}
        >
          River Belt School
        </div>
        <div
          className="rb-display tabular-nums font-semibold leading-none"
          style={{ fontSize: 96, color: "var(--rb-amber)" }}
        >
          {String(count).padStart(2, "0")}
        </div>
        <div style={{ marginTop: 28, width: 192, height: 1, background: "rgba(255,255,255,0.1)", margin: "28px auto 0" }}>
          <div style={{ height: "100%", width: `${count}%`, background: "var(--rb-amber)", transition: "width 40ms linear" }} />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5">
      <motion.div
        className="w-full max-w-4xl rounded-full px-4 py-2.5 flex items-center justify-between gap-4"
        animate={{
          background: scrolled ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0.7)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(12,19,50,0.1), 0 0 0 1px rgba(12,19,50,0.07)"
            : "0 0 0 1px rgba(12,19,50,0.07)",
        }}
        style={{ backdropFilter: "blur(20px)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2.5 shrink-0">
          <img src={LOGO} alt="River Belt" className="h-7 w-7 rounded-full object-cover" />
          <span className="rb-display text-sm font-semibold" style={{ color: "var(--rb-text)" }}>
            River Belt
          </span>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {["About", "Programs", "Campus", "Admissions"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium transition-colors duration-200"
              style={{ color: "var(--rb-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rb-text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--rb-muted)")}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#admissions"
            className="hidden md:flex items-center px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200"
            style={{ background: "var(--rb-navy)", color: "#fff" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--rb-navy-hover)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--rb-navy)";
              e.currentTarget.style.transform = "";
            }}
          >
            Apply Now
          </a>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-colors"
            style={{ background: "rgba(12,19,50,0.06)", color: "var(--rb-text)" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: EASE_EXPO }}
            className="absolute top-[72px] left-4 right-4 rounded-3xl p-6"
            style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(24px)",
              boxShadow: "0 8px 48px rgba(12,19,50,0.12)", border: "1px solid rgba(12,19,50,0.07)" }}
          >
            {["About", "Programs", "Campus", "Admissions"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="flex items-center py-3 text-base font-medium border-b"
                style={{ color: "var(--rb-text)", borderColor: "rgba(12,19,50,0.07)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#admissions"
              className="mt-4 flex justify-center py-3 rounded-full font-semibold text-sm"
              style={{ background: "var(--rb-navy)", color: "#fff" }}
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden px-6"
      style={{ background: "var(--rb-bg)" }}
    >
      <GridPattern />

      {/* Amber radial glow */}
      <div className="absolute rounded-full pointer-events-none" style={{
        width: 600, height: 600, top: "-160px", right: "-160px",
        background: "radial-gradient(circle, rgba(232,160,24,0.1) 0%, transparent 68%)",
      }} />
      {/* Teal glow */}
      <div className="absolute rounded-full pointer-events-none" style={{
        width: 400, height: 400, bottom: "-100px", left: "-100px",
        background: "radial-gradient(circle, rgba(26,144,112,0.08) 0%, transparent 68%)",
      }} />

      <LeafAccent className="top-[18%] right-[6%] opacity-60" color="rgba(201,134,10,0.14)" />
      <LeafAccent className="bottom-[12%] left-[4%] opacity-40 rotate-[55deg]" color="rgba(26,144,112,0.1)" />

      <div className="relative z-10 w-full max-w-290 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-[13px] font-medium"
            style={{ background: "rgba(201,134,10,0.1)", border: "1px solid rgba(201,134,10,0.22)",
              color: "var(--rb-amber)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--rb-amber)" }} />
            Admissions Open for 2026–27
          </motion.div>

          <motion.h1
            className="rb-display font-semibold leading-[1.04] mb-6"
            style={{ fontSize: "clamp(2.8rem,5.8vw,5rem)", color: "var(--rb-text)" }}
            initial={prefersReduced ? false : { opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE_EXPO, delay: 0.2 }}
          >
            Where every child{" "}
            <em style={{ color: "var(--rb-amber)", fontStyle: "italic" }}>discovers</em>{" "}
            their inner greatness.
          </motion.h1>

          <motion.p
            className="text-[17px] leading-[1.75] mb-10 max-w-[440px]"
            style={{ color: "var(--rb-muted)" }}
            initial={prefersReduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.35 }}
          >
            River Belt School nurtures bright, curious minds through inspired teaching,
            creative exploration, and a safe, joyful campus where every learner thrives.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 mb-12"
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.45 }}
          >
            <a
              href="#programs"
              className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
              style={{ background: "var(--rb-navy)", color: "#fff" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--rb-navy-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--rb-navy)"; e.currentTarget.style.transform = ""; }}
            >
              Explore Programs
            </a>
            <a
              href="#admissions"
              className="px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-200"
              style={{ background: "transparent", border: "1.5px solid rgba(12,19,50,0.18)", color: "var(--rb-text)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(12,19,50,0.05)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = ""; }}
            >
              Schedule a Visit
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2.5"
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {["Creative Curriculum", "Safe Campus", "Award-Winning"].map((pill) => (
              <span
                key={pill}
                className="text-xs font-medium px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(12,19,50,0.05)", border: "1px solid rgba(12,19,50,0.1)",
                  color: "var(--rb-muted)" }}
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — Image Composition */}
        <motion.div
          className="relative hidden lg:block"
          initial={prefersReduced ? false : { opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: EASE_EXPO, delay: 0.3 }}
        >
          {/* Orbital dashed ring */}
          <div className="absolute pointer-events-none" style={{
            inset: -24, borderRadius: 44,
            border: "2px dashed rgba(201,134,10,0.2)",
          }} />
          <div className="absolute pointer-events-none" style={{
            inset: -48, borderRadius: 60,
            border: "1px solid rgba(201,134,10,0.08)",
          }} />

          {/* Amber glow behind */}
          <div className="absolute -inset-8 -z-10 rounded-[52px]" style={{
            background: "radial-gradient(ellipse, rgba(201,134,10,0.1) 0%, transparent 72%)",
          }} />

          {/* Main image */}
          <div className="relative rounded-[36px] overflow-hidden shadow-2xl" style={{ height: 500 }}>
            <img src={IMG.hero} alt="River Belt students" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(135deg, rgba(201,134,10,0.1) 0%, transparent 50%)",
            }} />
            <div className="absolute top-0 left-6 bottom-0 w-0.5 rounded-full opacity-50" style={{
              background: "linear-gradient(to bottom, var(--rb-amber), transparent)",
            }} />
          </div>

          {/* Floating stat card */}
          <motion.div
            className="absolute -left-10 bottom-16 rounded-2xl px-6 py-5 shadow-xl"
            style={{ background: "#fff", border: "1px solid rgba(12,19,50,0.08)", minWidth: 176,
              boxShadow: "0 12px 48px rgba(12,19,50,0.1)" }}
            animate={prefersReduced ? {} : { y: [0, -9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rb-display text-[42px] font-semibold leading-none" style={{ color: "var(--rb-amber)" }}>98%</div>
            <div className="text-xs mt-1.5 leading-snug" style={{ color: "var(--rb-muted)" }}>Parent confidence rate</div>
          </motion.div>

          {/* Small floating image */}
          <motion.div
            className="absolute -right-8 top-8 rounded-2xl overflow-hidden shadow-xl"
            style={{ width: 152, height: 136, border: "2.5px solid #fff" }}
            animate={prefersReduced ? {} : { y: [0, 9, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            <img src={IMG.heroMini} alt="Campus life" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--rb-muted)" }}
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        Scroll
        <div style={{ width: 1, height: 32, background: `linear-gradient(to bottom, var(--rb-amber), transparent)` }} />
      </motion.div>
    </section>
  );
}

// ─── Stats Ticker ─────────────────────────────────────────────────────────────

function StatsTicker() {
  return (
    <div className="overflow-hidden py-[14px]" style={{ background: "var(--rb-navy)" }}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-8 text-[13px] font-bold tracking-wide"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            {item}
            <span style={{ color: "var(--rb-amber)", opacity: 0.7 }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Programs ─────────────────────────────────────────────────────────────────

function ProgramsSection() {
  return (
    <section id="programs" className="py-28 px-6" style={{ background: "var(--rb-surface)" }}>
      <div className="max-w-290 mx-auto">
        <Reveal>
          <span className="text-[11px] tracking-[0.3em] uppercase font-semibold" style={{ color: "var(--rb-amber)" }}>
            Our Programs
          </span>
          <h2
            className="rb-display font-semibold mt-3 mb-4 leading-[1.08]"
            style={{ fontSize: "clamp(2.4rem,4.8vw,3.8rem)", color: "var(--rb-text)" }}
          >
            Smart and spirited kids,{" "}
            <em style={{ color: "var(--rb-amber)", fontStyle: "italic" }}>ready to rise high.</em>
          </h2>
          <p className="text-lg max-w-lg" style={{ color: "var(--rb-muted)", lineHeight: 1.72 }}>
            Three signature programs designed to meet children where they are and take them somewhere extraordinary.
          </p>
        </Reveal>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5" style={{ gridTemplateRows: "auto" }}>
          <Reveal delay={0.05} className="lg:col-span-2 lg:row-span-2">
            <ProgramCard prog={PROGRAMS[0]} tall />
          </Reveal>
          <Reveal delay={0.15}>
            <ProgramCard prog={PROGRAMS[1]} />
          </Reveal>
          <Reveal delay={0.22}>
            <ProgramCard prog={PROGRAMS[2]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ prog, tall = false }: { prog: (typeof PROGRAMS)[number]; tall?: boolean }) {
  return (
    <motion.div
      className="relative rounded-[28px] overflow-hidden group cursor-pointer w-full"
      style={{
        height: tall ? "clamp(380px,56vw,540px)" : "clamp(220px,26vw,260px)",
        border: "1px solid rgba(12,19,50,0.07)",
        boxShadow: "0 2px 24px rgba(12,19,50,0.06)",
      }}
      whileHover={{ scale: 1.025, boxShadow: "0 8px 48px rgba(12,19,50,0.12)" }}
      transition={{ duration: 0.42, ease: EASE_EXPO }}
    >
      <img
        src={prog.img}
        alt={prog.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(8,12,30,0.92) 0%, rgba(8,12,30,0.42) 50%, transparent 100%)" }}
      />
      <div className="absolute inset-0 p-7 flex flex-col justify-end">
        <span
          className="self-start text-[11px] font-semibold px-3 py-1 rounded-full mb-3"
          style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.85)" }}
        >
          {prog.tag}
        </span>
        <h3
          className="rb-display font-semibold leading-[1.15] mb-2"
          style={{ fontSize: tall ? "clamp(1.6rem,2.6vw,2.2rem)" : "1.3rem", color: "#fff" }}
        >
          {prog.title}
        </h3>
        <p
          className="text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {prog.description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: "var(--rb-amber)" }}>
          Learn more <span>→</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Pathways ─────────────────────────────────────────────────────────────────

function PathwaysSection() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden" style={{ background: "var(--rb-surface-2)" }}>
      <GridPattern className="opacity-60" />
      <LeafAccent className="top-8 right-16 opacity-50" color="rgba(26,144,112,0.12)" />

      <div className="relative z-10 max-w-290 mx-auto">
        <Reveal>
          <span className="text-[11px] tracking-[0.3em] uppercase font-semibold" style={{ color: "var(--rb-teal)" }}>
            Learning Pathways
          </span>
          <h2
            className="rb-display font-semibold mt-3 mb-4 leading-[1.08]"
            style={{ fontSize: "clamp(2.4rem,4.8vw,3.8rem)", color: "var(--rb-text)" }}
          >
            Shaping futures through{" "}
            <em style={{ color: "var(--rb-teal)", fontStyle: "italic" }}>joyful mastery.</em>
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "var(--rb-muted)", lineHeight: 1.72 }}>
            Four thoughtfully crafted pathways that meet children at their stage and carry them forward with purpose, creativity, and joy.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {PATHWAYS.map((path, i) => (
            <Reveal key={path.title} delay={i * 0.09}>
              <motion.div
                className="relative rounded-[28px] overflow-hidden group cursor-pointer p-7 flex flex-col"
                style={{ minHeight: 320, background: path.bg, border: `1.5px solid ${path.border}` }}
                whileHover={{ scale: 1.03, boxShadow: `0 12px 48px ${path.color}22` }}
                transition={{ duration: 0.36, ease: EASE_EXPO }}
              >
                {/* Background image */}
                <img
                  src={IMG[`path${i + 1}` as keyof typeof IMG] || ""}
                  alt={path.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-[0.12] group-hover:opacity-[0.22] group-hover:scale-105 transition-all duration-500"
                />

                <div className="relative z-10 flex flex-col h-full" style={{ minHeight: 266 }}>
                  <span className="text-3xl" style={{ color: path.color }}>{path.icon}</span>

                  <div className="mt-auto pt-12">
                    <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: path.color, opacity: 0.75 }}>
                      {path.grade}
                    </div>
                    <h3 className="rb-display text-[1.4rem] font-semibold mb-3" style={{ color: "var(--rb-text)" }}>
                      {path.title}
                    </h3>
                    <div
                      className="h-0.5 mb-4 rounded-full transition-all duration-300 group-hover:w-14"
                      style={{ width: 28, background: path.color, opacity: 0.55 }}
                    />
                    <p
                      className="text-[13px] leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      style={{ color: "var(--rb-muted)" }}
                    >
                      A dedicated track designed to spark curiosity, build skills, and celebrate growth at every stage.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Philosophy ───────────────────────────────────────────────────────────────

function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [32, -32]);

  return (
    <section ref={sectionRef} className="py-28 px-6 relative overflow-hidden" style={{ background: "var(--rb-surface)" }}>
      <LeafAccent className="top-12 right-24 opacity-40" color="rgba(26,144,112,0.1)" />
      <LeafAccent className="bottom-12 left-12 opacity-30 rotate-120" color="rgba(201,134,10,0.1)" />

      <div className="max-w-290 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <span className="text-[11px] tracking-[0.3em] uppercase font-semibold" style={{ color: "var(--rb-teal)" }}>
            Our Philosophy
          </span>
          <div className="rb-display mt-3 italic leading-none" style={{ fontSize: 72, color: "var(--rb-amber)" }}>"</div>
          <blockquote
            className="rb-display font-semibold leading-[1.22] mt-2 mb-8 italic"
            style={{ fontSize: "clamp(1.7rem,3.2vw,2.8rem)", color: "var(--rb-text)" }}
          >
            We don't just teach children facts — we teach them to fall in love with asking questions.
          </blockquote>
          <div className="flex items-center gap-5">
            <div className="h-px flex-1" style={{ background: "rgba(12,19,50,0.12)" }} />
            <div>
              <div className="text-sm font-semibold" style={{ color: "var(--rb-text)" }}>Dr. R. Menon</div>
              <div className="text-xs" style={{ color: "var(--rb-muted)" }}>Principal, River Belt School</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t" style={{ borderColor: "rgba(12,19,50,0.08)" }}>
            {[
              { value: "45M+", label: "Learning moments" },
              { value: "164+", label: "Projects completed" },
              { value: "15+",  label: "Years of excellence" },
            ].map((s) => (
              <div key={s.value}>
                <div className="rb-display text-[2rem] font-semibold" style={{ color: "var(--rb-amber)" }}>{s.value}</div>
                <div className="text-xs mt-1" style={{ color: "var(--rb-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <motion.div
            className="relative rounded-4xl overflow-hidden shadow-2xl"
            style={{ height: 540 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: EASE_EXPO }}
          >
            <motion.img
              src={IMG.philos}
              alt="River Belt philosophy"
              className="w-full h-full object-cover"
              style={prefersReduced ? {} : { y: imgY }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(8,12,30,0.5))" }} />
            <div
              className="absolute top-0 left-7 bottom-0 w-0.5 rounded-full opacity-50"
              style={{ background: "linear-gradient(to bottom, var(--rb-amber), transparent)" }}
            />
            <div className="absolute bottom-6 left-7 right-7 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ background: "var(--rb-teal)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                Inspired by curiosity since 1989
              </span>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Campus Life ──────────────────────────────────────────────────────────────

const CAMPUS_CARDS = [
  { src: IMG.cam1, label: "Outdoor Zones", sub: "Learning without walls",  color: "var(--rb-amber)", rowSpan: true,  height: 500 },
  { src: IMG.cam2, label: "Art Studio",    sub: "Creative expression",     color: "var(--rb-teal)",  rowSpan: false, height: 238 },
  { src: IMG.cam3, label: "Science Lab",   sub: "Curious minds at work",   color: "var(--rb-amber)", rowSpan: false, height: 238 },
  { src: IMG.cam4, label: "Sports",        sub: "Body & mind",             color: "var(--rb-amber)", rowSpan: false, height: 238 },
  { src: IMG.cam5, label: "Events",        sub: "Memories made here",      color: "var(--rb-teal)",  rowSpan: false, height: 238 },
];

function CampusLifeSection() {
  return (
    <section id="campus" className="py-28 px-6" style={{ background: "var(--rb-surface-2)" }}>
      <div className="max-w-290 mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase font-semibold" style={{ color: "var(--rb-amber)" }}>
            Campus Life
          </span>
          <h2
            className="rb-display font-semibold mt-3 leading-[1.08]"
            style={{ fontSize: "clamp(2.4rem,4.8vw,3.8rem)", color: "var(--rb-text)" }}
          >
            A campus where every{" "}
            <em style={{ color: "var(--rb-amber)", fontStyle: "italic" }}>corner sparks joy.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {CAMPUS_CARDS.map((card, i) => (
            <Reveal key={card.label} delay={i * 0.07} className={card.rowSpan ? "row-span-2" : ""}>
              <motion.div
                className="relative rounded-[28px] overflow-hidden group cursor-pointer w-full"
                style={{ height: card.height, boxShadow: "0 2px 16px rgba(12,19,50,0.07)" }}
                whileHover={{ scale: 1.025, boxShadow: "0 8px 40px rgba(12,19,50,0.12)" }}
                transition={{ duration: 0.38, ease: EASE_EXPO }}
              >
                <img
                  src={card.src}
                  alt={card.label}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-107"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,12,30,0.78) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[11px] font-semibold tracking-widest uppercase mb-1" style={{ color: card.color }}>{card.label}</div>
                  <div className="rb-display text-[1.05rem] font-semibold text-white">{card.sub}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 px-6" style={{ background: "var(--rb-surface)" }}>
      <div className="max-w-290 mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase font-semibold" style={{ color: "var(--rb-amber)" }}>
            Parent Voices
          </span>
          <h2
            className="rb-display font-semibold mt-3 leading-[1.08]"
            style={{ fontSize: "clamp(2.4rem,4.8vw,3.8rem)", color: "var(--rb-text)" }}
          >
            Families who{" "}
            <em style={{ color: "var(--rb-amber)", fontStyle: "italic" }}>trust River Belt.</em>
          </h2>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: EASE_EXPO }}
              className="relative rounded-4xl overflow-hidden px-10 py-12 md:px-16 md:py-14"
              style={{ background: "var(--rb-surface-2)", border: "1.5px solid rgba(12,19,50,0.08)",
                boxShadow: "0 4px 40px rgba(12,19,50,0.06)" }}
            >
              {/* Top colour bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-4xl" style={{ background: TESTIMONIALS[active].color }} />

              <div className="rb-display mb-5 italic" style={{ fontSize: 56, color: "var(--rb-amber)", lineHeight: 0.75 }}>"</div>
              <p className="text-xl leading-[1.8] mb-10" style={{ color: "var(--rb-text)" }}>
                {TESTIMONIALS[active].quote}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: `${TESTIMONIALS[active].color}18`, color: TESTIMONIALS[active].color,
                    border: `2px solid ${TESTIMONIALS[active].color}40` }}
                >
                  {TESTIMONIALS[active].initials}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "var(--rb-text)" }}>{TESTIMONIALS[active].name}</div>
                  <div className="text-xs" style={{ color: "var(--rb-muted)" }}>{TESTIMONIALS[active].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{ width: i === active ? 28 : 8, height: 8,
                  background: i === active ? "var(--rb-navy)" : "rgba(12,19,50,0.15)" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Admissions CTA ───────────────────────────────────────────────────────────

function AdmissionsSection() {
  return (
    <section id="admissions" className="py-28 px-6 relative overflow-hidden" style={{ background: "var(--rb-navy)" }}>
      <DotPattern dark />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 110%, rgba(232,160,24,0.12) 0%, transparent 62%)",
      }} />

      <div className="relative z-10 max-w-290 mx-auto">
        <Reveal>
          <div className="text-center">
            <div className="w-16 h-1 rounded-full mx-auto mb-8" style={{
              background: "linear-gradient(90deg, var(--rb-amber), var(--rb-teal))",
            }} />
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold" style={{ color: "var(--rb-amber)" }}>
              Admissions 2026
            </span>
            <h2
              className="rb-display font-semibold mt-4 mb-6 leading-[1.05]"
              style={{ fontSize: "clamp(2.5rem,5.2vw,4.4rem)", color: "#fff" }}
            >
              Begin your child's{" "}
              <em style={{ color: "var(--rb-amber)", fontStyle: "italic" }}>extraordinary journey.</em>
            </h2>
            <p className="text-lg max-w-xl mx-auto mb-12" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.72 }}>
              Limited seats available for the 2026–27 academic year. Book a campus visit and discover
              firsthand why River Belt is where bright futures begin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-10 py-4 rounded-full font-semibold text-sm transition-all duration-200"
                style={{ background: "var(--rb-amber)", color: "#0f1e42" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#f5c44e"; e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--rb-amber)"; e.currentTarget.style.transform = ""; }}
              >
                Apply Now
              </a>
              <a
                href="#"
                className="px-10 py-4 rounded-full font-medium text-sm transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.16)", color: "#fff" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}
              >
                Compare Programs
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-14 pt-12 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              {[
                { val: "98%", label: "Parent satisfaction" },
                { val: "24+", label: "Learning zones" },
                { val: "12:1", label: "Mentor ratio" },
              ].map((s) => (
                <div key={s.val}>
                  <div className="rb-display font-semibold" style={{ fontSize: "2.2rem", color: "var(--rb-amber)" }}>{s.val}</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-10 px-6 relative overflow-hidden" style={{ background: "#f0f2f8" }}>
      <div className="max-w-290 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b" style={{ borderColor: "rgba(12,19,50,0.1)" }}>
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={LOGO} alt="River Belt" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="rb-display text-lg font-semibold" style={{ color: "var(--rb-text)" }}>River Belt School</div>
                <div className="text-[10px] tracking-widest uppercase" style={{ color: "var(--rb-muted)" }}>Nurturing Excellence</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--rb-muted)" }}>
              Nurturing bright, curious minds through inspired teaching, creative exploration, and a safe, joyful campus since 1989.
            </p>
            <div className="flex gap-2.5 mt-8">
              {["F", "Ig", "Yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-200"
                  style={{ background: "rgba(12,19,50,0.06)", border: "1px solid rgba(12,19,50,0.1)", color: "var(--rb-muted)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--rb-navy)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--rb-navy)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(12,19,50,0.06)"; e.currentTarget.style.color = "var(--rb-muted)"; e.currentTarget.style.borderColor = "rgba(12,19,50,0.1)"; }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-5" style={{ color: "var(--rb-navy)" }}>
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] transition-colors duration-200"
                      style={{ color: "var(--rb-muted)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rb-text)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--rb-muted)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--rb-muted)" }}>
          <span>© 2026 River Belt School. All rights reserved.</span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((l) => (
              <a key={l} href="#" className="transition-colors duration-200"
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rb-text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--rb-muted)")}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function RiverBelt() {
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => { if (document.head.contains(link)) document.head.removeChild(link); };
  }, []);

  return (
    <>
      <style>{`
        .rb-root {
          --rb-bg: #f7f8fc;
          --rb-surface: #ffffff;
          --rb-surface-2: #f0f3f9;
          --rb-navy: #0f1e42;
          --rb-navy-hover: #1a2e5a;
          --rb-border: rgba(12, 19, 50, 0.08);
          --rb-border-strong: rgba(12, 19, 50, 0.14);
          --rb-text: #0c1322;
          --rb-muted: #5c6880;
          --rb-amber: #c9860a;
          --rb-amber-dim: rgba(201, 134, 10, 0.1);
          --rb-teal: #1a7a5e;
          --rb-teal-dim: rgba(26, 122, 94, 0.1);
          --rb-font-sans: "Plus Jakarta Sans", "Manrope", system-ui, sans-serif;
          font-family: var(--rb-font-sans);
          -webkit-font-smoothing: antialiased;
          background: var(--rb-bg);
          color: var(--rb-text);
        }
        .rb-root .rb-display {
          font-family: "DM Serif Display", "Fraunces", Georgia, serif;
        }
        .rb-root *::selection {
          background: rgba(201, 134, 10, 0.18);
          color: #0c1322;
        }
      `}</style>

      <AnimatePresence>
        {!pageReady && (
          <div className="rb-root">
            <PageLoader onDone={() => setPageReady(true)} />
          </div>
        )}
      </AnimatePresence>

      <motion.div
        className="rb-root"
        animate={{ opacity: pageReady ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <StatsTicker />
          <ProgramsSection />
          <PathwaysSection />
          <PhilosophySection />
          <CampusLifeSection />
          <TestimonialsSection />
          <AdmissionsSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
