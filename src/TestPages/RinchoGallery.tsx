import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const img1 = "/farewell/635011601_18112219954711423_4916731204348465775_n.webp";
const img2 = "/farewell/637702567_18112219924711423_4716776516326184759_n.webp";
const img3 = "/farewell/641137099_18112219966711423_5055730032556928064_n.webp";
const img4 = "/farewell/641145181_18112219906711423_4709206404959339634_n.webp";

const galleryImages = [
  { id: 1, src: img1, alt: "Students in classroom", span: "col-span-1 row-span-1" },
  { id: 2, src: img3, alt: "School event", span: "col-span-2 row-span-2" },
  { id: 3, src: img2, alt: "Sports day event", span: "col-span-1 row-span-1" },
  { id: 4, src: img4, alt: "Award winning moment", span: "col-span-1 row-span-1" },
  { id: 5, src: img1, alt: "Cultural event", span: "col-span-1 row-span-2" },
  { id: 6, src: img2, alt: "Science exhibition", span: "col-span-1 row-span-1" },
];

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

export default function RinchoGallery() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="px-8 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#728097]">Our Gallery</p>
          <h1 className="font-serif text-[48px] leading-[0.98] tracking-[-0.05em] text-[#111827] sm:text-[56px]">
            Moments that Define Our Community
          </h1>
          <p className="mt-6 text-[14px] leading-7 text-[#677589]">
            Explore the vibrant life at Rincho Academy School Sovima. From academic achievements to cultural festivities, 
            every picture carries the legacy and memories of our students.
          </p>
        </div>
      </Reveal>

      <div className="grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {galleryImages.map((img, i) => (
          <Reveal key={img.id} delay={i * 0.1} className={`relative overflow-hidden group ${img.span}`}>
            <motion.div 
              className="h-full w-full"
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-[#132741]/0 transition-colors duration-300 group-hover:bg-[#132741]/30" />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
