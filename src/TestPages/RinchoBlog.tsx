import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const kidsUrl = "https://morungexpress.com/uploads/2024/02/26992939_1708184002_IMG20240130105823.webp";
const certificateUrl = "https://static.wixstatic.com/media/eb559e_bfb9653e6dc94792b53f51915a852e0d~mv2.jpeg/v1/fill/w_1000,h_559,al_c,q_85,usm_0.66_1.00_0.01/eb559e_bfb9653e6dc94792b53f51915a852e0d~mv2.jpeg";

const blogPosts = [
  {
    title: "10 Benefits of Extracurricular Activities",
    excerpt: "Discover why participation in sports, arts, and clubs leads to a more well-rounded student experience and academic success.",
    date: "March 15, 2026",
    category: "Student Life",
    author: "Jane Doe",
    image: kidsUrl,
  },
  {
    title: "Parent's Guide: Preparing for Upcoming Exams",
    excerpt: "A comprehensive checklist and actionable tips for parents to support their children through stressful examination periods.",
    date: "February 28, 2026",
    category: "Academics",
    author: "Admin Team",
    image: certificateUrl,
  },
  {
    title: "Highlights from the Annual Science Fair",
    excerpt: "A look back at the brilliant projects presented by our young inventors this year, demonstrating incredible problem-solving skills.",
    date: "February 10, 2026",
    category: "Events",
    author: "Science Dept",
    image: kidsUrl,
  },
  {
    title: "The Importance of Community Service in Education",
    excerpt: "How engaging with the local community helps students develop empathy, leadership, and a sense of civic responsibility.",
    date: "January 22, 2026",
    category: "Community",
    author: "John Smith",
    image: certificateUrl,
  },
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

export default function RinchoBlog() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="px-8 py-16 lg:px-10 lg:py-24 bg-[#fafcff]">
      <Reveal>
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#728097]">School Blog</p>
          <h1 className="font-serif text-[48px] leading-[0.98] tracking-[-0.05em] text-[#111827] sm:text-[56px]">
            Insights & Stories
          </h1>
          <p className="mt-6 text-[14px] leading-7 text-[#677589]">
            Stay updated with the latest news, educational insights, and success stories from the vibrant community of Rincho Academy School.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {blogPosts.map((post, i) => (
          <Reveal key={post.title} delay={i * 0.1} className="group cursor-pointer">
            <article className="flex flex-col sm:flex-row gap-6 bg-white p-5 rounded-md shadow-sm border border-[#edf1f6] transition-shadow duration-300 hover:shadow-md">
              <div className="h-[200px] w-full shrink-0 overflow-hidden sm:h-[180px] sm:w-[220px]">
                <motion.img 
                  src={post.image} 
                  alt={post.title} 
                  className="h-full w-full object-cover"
                  whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-wider text-[#728097] mb-3">
                  <span className="text-[#132741]">{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#cbd3dd]" />
                  <span>{post.date}</span>
                </div>
                <h2 className="font-serif text-[24px] leading-tight text-[#111827] mb-3 group-hover:text-[#132741] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[13px] leading-6 text-[#677589] line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="mt-auto border-b max-w-fit border-[#111827] pb-0.5 text-[12px] font-semibold text-[#111827] group-hover:border-[#132741]">
                  Read Article
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
