import { useState, type ReactNode } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";

const img1 = "/farewell/635011601_18112219954711423_4916731204348465775_n.webp";
const img2 = "/farewell/637702567_18112219924711423_4716776516326184759_n.webp";
const img3 = "/farewell/641137099_18112219966711423_5055730032556928064_n.webp";
const img4 = "/farewell/641145181_18112219906711423_4709206404959339634_n.webp";

const img6 = "/enviroment day/510462423_18087571696711423_740283401773004717_n.webp";

const programs = [
  {
    title: "College Prep Program",
    image: img1,
    description: "College-level confidence and recognition that encourage students to aim higher and celebrate achievement.",
  },
  {
    title: "STEM Learning",
    image: "https://scontent.fdel1-6.fna.fbcdn.net/v/t39.30808-6/541646457_801380482245391_3943225790384192610_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=RpRWzT0ZTB0Q7kNvwGk4D47&_nc_oc=Adr7O_MtgOakHliH8IZMslclrKb82871X3KGLEmxhg2wpDwJg5eTHAAGf9Ww45NPOvs&_nc_zt=23&_nc_ht=scontent.fdel1-6.fna&_nc_gid=ybmD8r4YIze9ek6jFkB_9Q&_nc_ss=7a3a8&oh=00_Afx_ElQ-tdQuaLlPp-UeVh8IK0rCfaLqc9HZ6S3Zbb4kHA&oe=69CFF758",
    description: "Fostering analytical thinking, problem-solving, and hands-on experiments for future innovators.",
  },
  {
    title: "Arts & Expression",
    image: "https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/518332031_765112909205482_480187747894984698_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=YS6_sANiNGMQ7kNvwF5m3Nm&_nc_oc=Adrl8rBehkxzuZO2YZ0jXExURSeXskdhHeVvOQvex5i03eDlLnYOoZYOHPG73GTfP80&_nc_zt=23&_nc_ht=scontent.fdel1-2.fna&_nc_gid=SrIUik-Gn0kjLMS_I1HMtA&_nc_ss=7a3a8&oh=00_Afzm_4DPq5-nQrV2mX-unWiu9uaNug3vObMeqo_6YpTAYg&oe=69CFDB9D",
    description: "Creative platforms for students to explore their artistic talents and express their unique perspectives.",
  },
  {
    title: "Languages Program",
    image: img6,
    description: "Building communication skills and cultural appreciation through immersive language studies.",
  },
  {
    title: "Humanities Program",
    image: "https://scontent.fdel1-6.fna.fbcdn.net/v/t39.30808-6/481770098_666740649042709_1183904950860168377_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kRLrSl5Y_roQ7kNvwHY25W6&_nc_oc=AdoUCetIjMns1IYJkC05jQmN1EGm7YwiUY3MMZT1fwDiRCbUxlIMS1Gtk-wRpMeDlf8&_nc_zt=23&_nc_ht=scontent.fdel1-6.fna&_nc_gid=tuh1pikzce1-SrTOfb8WhQ&_nc_ss=7a3a8&oh=00_AfxiO8SH1gT7BpU0vueuR8Tz0sgaDAmblDrKJrK6-b7MEg&oe=69CFD851",
    description: "Understanding human society, culture, and history to develop well-rounded, thoughtful citizens.",
  },
];

const highlights = [
  {
    title: "Academic Excellence",
    body: "A disciplined learning culture that prepares students for higher studies and thoughtful leadership.",
  },
  {
    title: "Experienced Faculty",
    body: "Guided by committed educators who blend structure, care, and consistent academic mentoring.",
  },
  {
    title: "Supportive Community",
    body: "A school environment that values belonging, confidence, character, and meaningful participation.",
  },
];

const events = [
  {
    title: "Senior Recognition Showcase",
    meta: "May 2026 | Sovima Campus Hall",
    image: img2,
  },
  {
    title: "Community Learning Week",
    meta: "June 2026 | Rincho Activity Wing",
    image: img3,
  },
  {
    title: "Admissions & Career Day",
    meta: "July 2026 | Main Learning Block",
    image: img4,
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}


function RinchoAcademy() {
  const reduceMotion = useReducedMotion();
  const [activeProgram, setActiveProgram] = useState(0);

  return (
    <main id="top">
          <section className="px-8 pb-12 pt-8 lg:px-10 lg:pb-16 lg:pt-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-start">
              <Reveal>
                <div className="max-w-[520px]">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#728097]">Established 2009</p>
                  <h1 className="font-serif text-[52px] leading-[0.95] tracking-[-0.05em] text-[#111827] sm:text-[64px]">
                    Discover Your Child&apos;s Education Potential
                  </h1>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-5 pt-1 text-white">
                  <p className="max-w-[280px] text-[13px] leading-7 text-[#677589]">
                    RINCHO ACADEMY SCHOOL SOVIMA was established in 2009 and is a private unaided school located in
                    Medziphema block of Dimapur district, Nagaland.
                  </p>
                  <a
                    href="#programs"
                    className="inline-flex items-center rounded-[2px] bg-[#11233d] px-6 py-3 text-[12px] font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Explore More
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-8" delay={0.14}>
              <motion.img
                src="https://morungexpress.com/uploads/2024/02/26992939_1708184002_IMG20240130105823.webp"
                alt="Students at Rincho Academy School Sovima"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                transition={{ duration: 0.4 }}
              />
            </Reveal>
          </section>

          <section id="about" className="px-8 py-12 lg:px-10 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <Reveal>
                <div className="grid gap-5 sm:grid-cols-[0.82fr_1fr]">
                  <motion.div className="bg-[#132741] px-8 py-9 text-white" whileHover={reduceMotion ? undefined : { y: -4 }}>
                    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/55">About</p>
                    <h2 className="font-serif text-[38px] leading-[1.02] tracking-[-0.04em]">
                      Unleash student possibilities with us
                    </h2>
                  </motion.div>

                  <div className="grid gap-5">
                    <img src="https://morungexpress.com/uploads/2024/02/21496052_1708184021_IMG20240131105216.jpg" alt="Students together at school" className="h-[210px] w-full object-cover" />
                    <img src="https://scontent.fdel1-5.fna.fbcdn.net/v/t39.30808-6/482075210_666086319108142_6836433277508297973_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_Pm8n-s7zS4Q7kNvwGDPuMk&_nc_oc=AdpVf6t8kdgFY1vHjMVsNWEVHgw1jCG9USVBaS0V2NKAhUwK1P4q6gziMjHAP2yroXw&_nc_zt=23&_nc_ht=scontent.fdel1-5.fna&_nc_gid=jMSsBSjl-FkjYovCl86Mew&_nc_ss=7a3a8&oh=00_Afw4PFlMeYXBPkJ2KSppMt2i4GRF5JBbGPkpdyt6HFFCqA&oe=69CFF3B7" alt="Students receiving certificates" className="h-[240px] w-full object-cover" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="flex h-full flex-col justify-between gap-10">
               
                  <div className="max-w-[420px]">
                    <p className="text-[13px] leading-7 text-[#677589]">
                      Unlocking every student&apos;s potential through a stimulating and supportive environment is at the
                      heart of our school. We encourage discipline, curiosity, confidence, and growth in every learner.
                    </p>
                    <a href="#contact" className="mt-6 inline-flex border-b border-[#111827] pb-1 text-[12px] font-semibold text-[#111827]">
                      Learn More
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="programs" className="border-t border-[#edf1f6] px-8 py-12 lg:px-10 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <Reveal>
                <div>
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#728097]">Programs</p>
                  <h2 className="max-w-[10ch] font-serif text-[48px] leading-[0.98] tracking-[-0.05em] text-[#111827]">
                    Student programs you can register here
                  </h2>

                  <ul className="mt-8 space-y-3 text-[17px] leading-7 text-[#a2acb9]">
                    {programs.map((program, index) => {
                      const isActive = index === activeProgram;
                      return (
                        <li 
                          key={program.title} 
                          className={`cursor-pointer transition-colors duration-300 hover:text-[#111827] ${isActive ? "text-[#111827] font-medium" : ""}`}
                          onClick={() => setActiveProgram(index)}
                        >
                          <span className={`mr-3 inline-block transition-transform duration-300 ${isActive ? "translate-x-1 font-bold text-[#111827]" : "text-transparent"}`}>-</span>
                          {program.title}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-10">
                   
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="space-y-5">
                  <div className="relative h-[320px] w-full overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={programs[activeProgram].title}
                        src={programs[activeProgram].image} 
                        alt={programs[activeProgram].title} 
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 h-full w-full object-cover" 
                      />
                    </AnimatePresence>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={programs[activeProgram].description}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="ml-auto max-w-[280px] bg-[#132741] px-6 py-5 text-white"
                    >
                      <p className="text-[13px] leading-6 text-white/82">
                        {programs[activeProgram].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="community" className="border-t border-[#edf1f6] px-8 py-12 lg:px-10 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <Reveal>
                <div className="relative overflow-hidden">
                  <img src={img2} alt="Students learning together" className="h-[360px] w-full object-cover sm:h-[430px]" />
                  <button
                    type="button"
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#132741] shadow-lg"
                    aria-label="Play campus video"
                  >
                    <span className="ml-1 text-xl">{">"}</span>
                  </button>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="space-y-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#728097]">Community</p>
                  <h2 className="max-w-[10ch] font-serif text-[48px] leading-[0.98] tracking-[-0.05em] text-[#111827]">
                    A supportive environment where students grow together
                  </h2>
                  <p className="max-w-[40ch] text-[13px] leading-7 text-[#677589]">
                    From classroom collaboration to recognition moments and public participation, the school encourages
                    students to learn confidently and represent themselves with pride.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="border-t border-[#edf1f6] bg-[#edf4fa] px-8 py-12 lg:px-10 lg:py-16">
            <Reveal>
              <div className="grid gap-8 md:grid-cols-3">
                {highlights.map((item, index) => (
                  <div key={item.title} className={index < highlights.length - 1 ? "md:border-r md:border-[#d8e1ea] md:pr-6" : ""}>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#aebbc8] text-[#20334e]">
                      <span className="text-sm">{index + 1}</span>
                    </div>
                    <h3 className="font-serif text-[22px] leading-tight text-[#111827]">{item.title}</h3>
                    <p className="mt-3 text-[13px] leading-6 text-[#677589]">{item.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="events" className="border-t border-[#edf1f6] px-8 py-12 lg:px-10 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr]">
              <Reveal>
                <div>
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#728097]">Events</p>
                  <h2 className="max-w-[8ch] font-serif text-[48px] leading-[0.98] tracking-[-0.05em] text-[#111827]">
                    Join our next upcoming events
                  </h2>

                
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="space-y-5">
                  {events.map((event) => (
                    <motion.article
                      key={event.title}
                      className="grid gap-4 border-b border-[#edf1f6] pb-5 sm:grid-cols-[116px_1fr_auto]"
                      whileHover={reduceMotion ? undefined : { x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img src={event.image} alt={event.title} className="h-[86px] w-full object-cover sm:w-[116px]" />
                      <div>
                        <h3 className="font-serif text-[24px] leading-tight text-[#111827]">{event.title}</h3>
                        <p className="mt-3 text-[12px] leading-6 text-[#677589]">{event.meta}</p>
                      </div>
                      <a href="#contact" className="self-start border-b border-[#111827] pb-1 text-[12px] font-semibold text-[#111827]">
                        Learn More
                      </a>
                    </motion.article>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        </main>
  );
}

export default RinchoAcademy;
