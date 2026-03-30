import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
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

export default function RinchoEventDetails() {
  const { slug } = useParams();
  const eventInfo = eventsData.find((e) => e.slug === slug);

  if (!eventInfo) {
    return (
      <main className="px-8 py-32 lg:px-10 bg-white text-center min-h-[60vh]">
        <h1 className="font-serif text-[40px] text-[#111827]">Event Not Found</h1>
        <p className="mt-4 text-[#677589]">We couldn't find the event you were looking for.</p>
        <Link to="/rincho-academy/events" className="mt-6 inline-block border-b border-[#111827] text-[14px] font-semibold text-[#111827]">
          Back to Events
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full lg:h-[550px]">
        <img
          src={eventInfo.coverImage}
          alt={eventInfo.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726]/80 via-[#0e1726]/30 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 px-8 pb-16 lg:px-10 lg:pb-20 max-w-4xl mx-auto w-full">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block rounded-sm bg-white/20 backdrop-blur-md px-4 py-1.5 text-[12px] font-semibold tracking-widest uppercase text-white border border-white/20">
                {eventInfo.date}
              </span>
              <span className="inline-block rounded-sm bg-white/10 backdrop-blur-md px-4 py-1.5 text-[12px] font-medium text-white/90 border border-white/10">
                {eventInfo.timing}
              </span>
            </div>
            <h1 className="font-serif text-[48px] leading-[1] tracking-[-0.03em] text-white sm:text-[64px] lg:text-[72px]">
              {eventInfo.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-8 py-16 lg:px-10 lg:py-24 max-w-4xl mx-auto">
        <Reveal>
          <Link to="/rincho-academy/events" className="inline-flex items-center gap-2 mb-10 text-[13px] font-medium text-[#728097] hover:text-[#111827] transition-colors">
            &larr; Back to all events
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-14">
            <h2 className="font-serif text-[32px] leading-tight text-[#111827] mb-6 tracking-[-0.02em]">
              Why We Celebrate It
            </h2>
            <p className="text-[16px] leading-8 text-[#556274] whitespace-pre-line">
              {eventInfo.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="border-t border-[#edf1f6] pt-14">
            <h3 className="font-serif text-[28px] leading-tight text-[#111827] mb-8 tracking-[-0.02em]">
              Event Gallery
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {eventInfo.images.map((img, idx) => (
                <div key={idx} className="relative h-[240px] w-full overflow-hidden rounded-md bg-[#edf1f6]">
                  <img src={img} alt={`Event memory ${idx + 1}`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
