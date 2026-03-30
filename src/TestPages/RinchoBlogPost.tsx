import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./RinchoData";

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

export default function RinchoBlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="px-8 py-32 lg:px-10 bg-[#fafcff] text-center min-h-[60vh]">
        <h1 className="font-serif text-[40px] text-[#111827]">Article Not Found</h1>
        <p className="mt-4 text-[#677589]">The blog post you're looking for doesn't exist.</p>
        <Link to="/rincho-academy/blog" className="mt-6 inline-block border-b border-[#111827] text-[14px] font-semibold text-[#111827]">
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#fafcff] pb-24">
      {/* Article Header */}
      <header className="px-8 pt-16 pb-12 lg:px-10 lg:pt-24 max-w-3xl mx-auto">
        <Reveal>
          <Link to="/rincho-academy/blog" className="inline-flex items-center gap-2 mb-8 text-[13px] font-medium text-[#728097] hover:text-[#111827] transition-colors">
            &larr; Overview
          </Link>
          <div className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-wider text-[#728097] mb-6">
            <span className="text-[#132741]">{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-[#cbd3dd]" />
            <span>{post.date}</span>
          </div>
          <h1 className="font-serif text-[40px] leading-[1.05] tracking-[-0.03em] text-[#111827] sm:text-[48px] lg:text-[56px] mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 border-t border-[#edf1f6] pt-6">
            <div className="h-10 w-10 rounded-full bg-[#11233d] flex items-center justify-center text-white font-serif text-lg">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#111827]">Written by {post.author}</p>
              <p className="text-[12px] text-[#677589]">Staff Editor</p>
            </div>
          </div>
        </Reveal>
      </header>

      {/* Hero Image */}
      <Reveal delay={0.1}>
        <div className="w-full h-[350px] sm:h-[450px] lg:h-[550px] overflow-hidden -mt-4 bg-[#edf1f6] mb-12">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </Reveal>

      {/* Article Body */}
      <article className="px-8 lg:px-10 max-w-3xl mx-auto prose prose-slate">
        <Reveal delay={0.2}>
          <div 
            className="text-[16px] leading-8 text-[#556274] prose-h3:font-serif prose-h3:text-[28px] prose-h3:text-[#111827] prose-h3:mt-8 prose-h3:mb-4 prose-ul:my-6 prose-ul:space-y-2 prose-li:text-[15px]" 
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n\n/g, '<br/><br/>').replace(/### (.*)/g, '<h3>$1</h3>').replace(/- \*\*(.*?)\*\*(.*)/g, '<li><strong>$1</strong>$2</li>') }} 
          />
        </Reveal>
      </article>

      {/* Article Footer */}
      <Reveal delay={0.3}>
        <div className="px-8 lg:px-10 max-w-3xl mx-auto mt-20 pt-10 border-t border-[#edf1f6] text-center">
          <p className="text-[18px] font-serif text-[#111827] mb-6">Want to read more?</p>
          <Link to="/rincho-academy/blog" className="inline-flex items-center rounded-sm bg-[#11233d] px-8 py-3 text-[13px] font-semibold text-white! transition hover:bg-[#1f375c]">
            Explore All Articles
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
