import pilgrimLogo from "../../assets/pilgrim/logo.jpg";

export const PS_COLORS = {
  navy: "#0F1C2E",
  ink: "#1B1711",
  parchment: "#F6F1E7",
  cream: "#FCFAF5",
  sand: "#E8DECB",
  gold: "#C9A45C",
  oxblood: "#7A2E2E",
  moss: "#53625A",
  slate: "#7D8793",
  line: "rgba(15,28,46,0.08)",
  border: "rgba(15,28,46,0.14)",
  goldDim: "rgba(201,164,92,0.16)",
  oxbloodDim: "rgba(122,46,46,0.16)",
  navyDim: "rgba(15,28,46,0.74)",
} as const;

export const PS_LOGO = pilgrimLogo;

export const SCHOOL_IMAGES = {
  hero: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  heroMini: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
  prog1: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
  prog2: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  prog3: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
  prog4: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&q=80",
  prog5: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80",
  campus1: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80",
  campus2: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  campus3: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800&q=80",
  campus4: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  campus5: "https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?w=800&q=80",
  philosophy: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
} as const;

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

export const NAV_LINKS = [
  { label: "Academics", id: "academics" },
  { label: "Results", id: "results" },
  { label: "Campus", id: "campus" },
  { label: "Philosophy", id: "mission" },
  { label: "Admissions", id: "admissions" },
] as const;

export const INSTITUTIONAL_RIBBON = [
  "Admissions Open 2026-27",
  "CBSE Curriculum",
  "45+ IIT/NEET Selections",
  "Board Discipline",
  "Leadership and Character",
  "Library and Laboratory Culture",
] as const;

export const HERO_FACTS = [
  { value: "98%", label: "board pass rate" },
  { value: "35+", label: "qualified faculty" },
  { value: "15:1", label: "student-teacher ratio" },
];

export const PROGRAMS = [
  {
    name: "Science (PCM)",
    description:
      "Physics, Chemistry, Mathematics with advanced practical labs and competitive exam rigor for engineering ambitions.",
  },
  {
    name: "Science (PCB)",
    description:
      "Physics, Chemistry, Biology supported by disciplined wet-lab practice and deep medical entrance preparation.",
  },
  {
    name: "Commerce",
    description:
      "Accounting, Economics, and Business Studies shaped for CA, CS, management study, and applied commercial literacy.",
  },
  {
    name: "Arts",
    description:
      "History, Geography, Political Science, and Literature for civil service, journalism, humanities, and legal pathways.",
  },
  {
    name: "NCC Air Wing",
    description:
      "Certified military training that builds leadership, bearing, discipline, and public-minded confidence.",
  },
] as const;

export const PATHWAYS = [
  {
    name: "CBSE Curriculum",
    icon: "I",
    detail: "Structured classroom rigor, term planning, board-focused discipline.",
    note: "Academic core",
  },
  {
    name: "Competitive Prep",
    icon: "II",
    detail: "Focused coaching for JEE, NEET, and high-performance exam habits.",
    note: "Advanced track",
  },
  {
    name: "Skill Development",
    icon: "III",
    detail: "Communication, digital fluency, research habits, and project ownership.",
    note: "Applied learning",
  },
  {
    name: "Holistic Formation",
    icon: "IV",
    detail: "Sports, arts, leadership, and value formation woven into school life.",
    note: "Character and culture",
  },
] as const;

export const CAMPUS_AREAS = [
  {
    name: "Science Labs",
    caption: "Practical science spaces designed for repetition, rigor, and confidence.",
    rowSpan: true,
  },
  {
    name: "Computer Lab",
    caption: "Digital classrooms with focused instruction and supervised practice.",
    rowSpan: false,
  },
  {
    name: "Library",
    caption: "A quiet reading culture supported by reference, literature, and habit-building.",
    rowSpan: false,
  },
  {
    name: "Sports Complex",
    caption: "Athletic training as discipline, endurance, teamwork, and school pride.",
    rowSpan: false,
  },
  {
    name: "Auditorium",
    caption: "Assemblies, cultural programs, and public speaking under one institutional roof.",
    rowSpan: false,
  },
] as const;

export const MISSION_VALUES = [
  {
    title: "Academic seriousness",
    description: "Expectations are explicit, standards are visible, and preparation is habitual.",
  },
  {
    title: "Moral foundation",
    description: "The school frames excellence as character, service, and disciplined judgment.",
  },
  {
    title: "Institutional belonging",
    description: "Students grow within a culture of house spirit, routine, ceremony, and pride.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "From struggling with Maths to scoring 95% in Board Exams. The personalized mentoring here is incredible.",
    author: "Arjun S.",
    role: "Class XII Topper, Science Stream",
    color: "#B5860B",
    initials: "AS",
  },
  {
    quote: "Pilgrim's NEET coaching + rigorous labs made me confident. Got into AIIMS Delhi. Thank you.",
    author: "Shreya D.",
    role: "Class XII, Medical Aspirant",
    color: "#1A3A2A",
    initials: "SD",
  },
  {
    quote: "Not just academics—sports, debates, cultural programs. This school develops the complete person.",
    author: "Karan M.",
    role: "Class XI, Commerce + NCC",
    color: "#2D5F7A",
    initials: "KM",
  },
] as const;

export const ACHIEVEMENTS = [
  { value: 98, suffix: "%", label: "Board Pass Rate", subtext: "Three-year average across Class X and XII" },
  { value: 45, suffix: "+", label: "IIT / NEET Selections", subtext: "Across the last five graduating cohorts" },
  { value: 500, suffix: "+", label: "Students Enrolled", subtext: "A focused secondary-school community" },
  { value: 35, suffix: "+", label: "Qualified Faculty", subtext: "Experienced teachers across all streams" },
] as const;

export const ADMISSIONS_STEPS = [
  "Counselling conversation with family and student",
  "Academic review, stream guidance, and campus orientation",
  "Application submission and admission confirmation",
] as const;
