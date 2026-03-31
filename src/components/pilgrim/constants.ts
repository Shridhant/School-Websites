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
  "Affiliated to NBSE",
  "Christian Private Day-cum-Residential School",
  "Montessori to Higher Secondary",
  "Classes 11 & 12 (Arts)",
  "NCC Air Wing • Scouts & Guides",
  "Kuda B Village, Dimapur",
] as const;

export const HERO_FACTS = [
  { value: "1987", label: "humble beginning" },
  { value: "NBSE", label: "board affiliation" },
  { value: "Hostel", label: "residential service" },
];

export const PROGRAMS = [
  {
    name: "Montessori House",
    description:
      "Nursery to UKG with a customized Montessori-based curriculum complemented with Montessori apparatus.",
  },
  {
    name: "Classes 1 to 8",
    description:
      "NCERT curriculum paired with colorful, skill-based programs for the foundational and middle years.",
  },
  {
    name: "Classes 9 & 10",
    description:
      "NBSE high school years supported by term assessments, discipline, and focused school preparation.",
  },
  {
    name: "Class 11 & 12 (Arts)",
    description:
      "NBSE higher secondary Arts stream with admission based on HSLC performance and school criteria.",
  },
  {
    name: "Vocational & Co-curricular",
    description:
      "NCC Air Wing, Taekwondo, Dance, Fine Arts, Vocal, Eco Club, excursions, games, sports, and workshops.",
  },
] as const;

export const PATHWAYS = [
  {
    name: "Montessori Foundation",
    icon: "I",
    detail: "Customized Montessori curriculum with apparatus for Nursery to UKG.",
    note: "Early years",
  },
  {
    name: "NCERT Middle Years",
    icon: "II",
    detail: "Classes 1 to 8 with NCERT structure and skill-based learning.",
    note: "Primary to middle",
  },
  {
    name: "NBSE High School",
    icon: "III",
    detail: "Classes 9 and 10 under the Nagaland Board of School Education.",
    note: "Secondary",
  },
  {
    name: "Arts Higher Secondary",
    icon: "IV",
    detail: "Class 11 and 12 Arts stream with NBSE-recognised higher secondary criteria.",
    note: "Senior years",
  },
] as const;

export const CAMPUS_AREAS = [
  {
    name: "Hostel Accommodation",
    caption: "Residential provision that supports the school’s day-cum-residential identity.",
    rowSpan: true,
  },
  {
    name: "Bus Facility",
    caption: "Transport support highlighted as one of the school’s practical services.",
    rowSpan: false,
  },
  {
    name: "NCC Air Wing",
    caption: "Leadership, discipline, and structured co-curricular training through NCC.",
    rowSpan: false,
  },
  {
    name: "Scouts & Guides",
    caption: "Character-building and group responsibility through service-oriented activity.",
    rowSpan: false,
  },
  {
    name: "Grooming & Personality Development",
    caption: "A published vocational and development offering focused on student confidence and bearing.",
    rowSpan: false,
  },
] as const;

export const MISSION_VALUES = [
  {
    title: "Body, mind, and spirit",
    description: "The school frames growth as whole-person formation rather than academics alone.",
  },
  {
    title: "Christian foundation",
    description: "Its motto and school identity place faith, wisdom, and moral grounding at the center.",
  },
  {
    title: "Healthy citizenship",
    description: "The stated aim is to build children into healthy citizens who can excel in life.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Pilgrim describes its purpose as building children who can grow in body, mind, and spirit.",
    author: "School Motto",
    role: "Official school statement",
    color: "#B5860B",
    initials: "SM",
  },
  {
    quote: "The official profile presents Pilgrim as a Christian private educational day-cum-residential school affiliated to NBSE.",
    author: "About Pilgrim",
    role: "Official school information",
    color: "#1A3A2A",
    initials: "AP",
  },
  {
    quote: "Its website highlights Montessori, NCERT middle years, NBSE classes, hostel, bus facility, NCC, and vocational activities.",
    author: "Courses & Services",
    role: "Official school information",
    color: "#2D5F7A",
    initials: "CS",
  },
] as const;

export const ACHIEVEMENTS = [
  { value: 1987, suffix: "", label: "Founded", subtext: "Started by Mr. & Mrs. M Kikon" },
  { value: 8, suffix: "", label: "Classes 1 to 8", subtext: "NCERT curriculum with skill-based programs" },
  { value: 2, suffix: "", label: "NBSE Stages", subtext: "High school and higher secondary Arts" },
  { value: 3, suffix: "", label: "Formation Areas", subtext: "Body, mind, and spirit in the school motto" },
] as const;

export const ADMISSIONS_STEPS = [
  "Meet the Principal or admission committee with the child and parents where required.",
  "Submit the relevant documents such as birth certificate, TC or PCR, and class records.",
  "For Class 11 Arts, apply with HSLC records and NBSE-recognised eligibility documents.",
] as const;
