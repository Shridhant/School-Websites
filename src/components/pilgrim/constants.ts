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
  hero: "/pggradceremony/587307220_17925687606187628_7403752521015145037_n.jpg",
  heroMini: "/pgculturalday/655023862_18111547924612481_9136221587399721767_n.jpg",
  prog1: "/pgchildrensday/653657753_18109081147840958_8389047524236699607_n.jpg",
  prog2: "/pgchildrensday/655579980_18103162994502174_3521705137682928064_n.jpg",
  prog3: "/pgchildrensday/656029940_18093585214869384_5646380790682162218_n.jpg",
  prog4: "/pgfarewell/491430461_17900600646187628_5453489313585537986_n.jpg",
  prog5: "/pgfarewell/495706951_17900600679187628_2150246812667494050_n.jpg",
  campus1: "/pggradceremony/588223433_17925687642187628_501592366680903606_n.jpg",
  campus2: "/pgculturalday/656210453_18072313403231186_8628573922637313913_n.jpg",
  campus3: "/pgfarewell/496104120_17900600790187628_1745460346768704882_n.jpg",
  campus4: "/pggradceremony/589739268_17925687597187628_4606330193982032556_n.jpg",
  campus5: "/pgchildrensday/655579980_18103162994502174_3521705137682928064_n.jpg",
  philosophy: "/pggradceremony/587307220_17925687606187628_7403752521015145037_n.jpg",
} as const;

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

export const NAV_LINKS = [
  { label: "Academics", href: "/pilgrim#academics" },
  { label: "Results", href: "/pilgrim#results" },
  { label: "Campus", href: "/pilgrim#campus" },
  { label: "Philosophy", href: "/pilgrim#mission" },
  { label: "Events", href: "/pilgrim/events" },
  { label: "Admissions", href: "/pilgrim#admissions" },
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

export const PILGRIM_EVENTS = [
  {
    slug: "childrens-day-celebration",
    title: "Children's Day Celebration",
    date: "November 14, 2026",
    time: "10:00 AM to 1:30 PM",
    location: "Pilgrim School Courtyard",
    description:
      "A lively school-day celebration centred on student joy, playful performances, and shared campus moments across junior and senior groups.",
    cover: "/pgchildrensday/653657753_18109081147840958_8389047524236699607_n.jpg",
    gallery: [
      "/pgchildrensday/653657753_18109081147840958_8389047524236699607_n.jpg",
      "/pgchildrensday/655579980_18103162994502174_3521705137682928064_n.jpg",
      "/pgchildrensday/656029940_18093585214869384_5646380790682162218_n.jpg",
    ],
  },
  {
    slug: "cultural-day-showcase",
    title: "Cultural Day Showcase",
    date: "August 22, 2026",
    time: "11:00 AM to 3:00 PM",
    location: "Pilgrim Assembly Hall",
    description:
      "A curated cultural program featuring stage presentations, traditional expression, and student confidence in front of the wider school community.",
    cover: "/pgculturalday/655023862_18111547924612481_9136221587399721767_n.jpg",
    gallery: [
      "/pgculturalday/655023862_18111547924612481_9136221587399721767_n.jpg",
      "/pgculturalday/656210453_18072313403231186_8628573922637313913_n.jpg",
    ],
  },
  {
    slug: "farewell-gathering",
    title: "Farewell Gathering",
    date: "February 18, 2027",
    time: "2:00 PM to 5:00 PM",
    location: "Pilgrim Senior Block Hall",
    description:
      "A graceful farewell occasion marking transition, reflection, and gratitude for senior students moving into their next chapter.",
    cover: "/pgfarewell/491430461_17900600646187628_5453489313585537986_n.jpg",
    gallery: [
      "/pgfarewell/491430461_17900600646187628_5453489313585537986_n.jpg",
      "/pgfarewell/495706951_17900600679187628_2150246812667494050_n.jpg",
      "/pgfarewell/496104120_17900600790187628_1745460346768704882_n.jpg",
    ],
  },
  {
    slug: "graduation-ceremony",
    title: "Graduation Ceremony",
    date: "March 28, 2027",
    time: "9:30 AM to 12:30 PM",
    location: "Pilgrim Main Auditorium",
    description:
      "A formal graduation gathering celebrating student milestones, achievement, and the school values that shaped the graduating class.",
    cover: "/pggradceremony/587307220_17925687606187628_7403752521015145037_n.jpg",
    gallery: [
      "/pggradceremony/587307220_17925687606187628_7403752521015145037_n.jpg",
      "/pggradceremony/588223433_17925687642187628_501592366680903606_n.jpg",
      "/pggradceremony/589739268_17925687597187628_4606330193982032556_n.jpg",
    ],
  },
] as const;
