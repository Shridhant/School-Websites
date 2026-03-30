import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { eventsData } from "./RinchoData";

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default function RinchoEvents() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="px-8 py-16 lg:px-10 lg:py-24 bg-[#fafcff]">
      <Reveal>
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#728097]">Campus Life</p>
          <h1 className="font-serif text-[48px] leading-[0.98] tracking-[-0.05em] text-[#111827] sm:text-[56px]">
            School Events & Celebrations
          </h1>
          <p className="mt-6 text-[14px] leading-7 text-[#677589]">
            The vibrant traditions that make up the school calendar at Rincho Academy. Explore the unique days we celebrate each year to build character, community, and joy.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
        {eventsData.map((event, i) => (
          <Reveal key={event.slug} delay={i * 0.1}>
            <Link to={`/rincho-academy/events/${event.slug}`} className="group block h-full">
              <article className="flex flex-col h-full bg-white rounded-md shadow-sm border border-[#edf1f6] overflow-hidden transition-shadow duration-300 hover:shadow-md">
                <div className="relative h-[220px] w-full overflow-hidden">
                  <motion.img 
                    src={event.coverImage} 
                    alt={event.title} 
                    className="absolute inset-0 h-full w-full object-cover"
                    whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute top-4 left-4 inline-block rounded-sm bg-[#11233d]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {event.date}
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="font-serif text-[24px] leading-tight text-[#111827] mb-3 group-hover:text-[#132741] transition-colors">
                    {event.title}
                  </h2>
                  <p className="text-[13px] leading-6 text-[#677589] line-clamp-3 mb-6">
                    {event.description}
                  </p>
                  
                  <div className="mt-auto border-b max-w-fit border-[#111827] pb-0.5 text-[12px] font-semibold text-[#111827] group-hover:border-[#132741]">
                    View Event Details
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
