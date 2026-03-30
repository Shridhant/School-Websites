import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const steps = [
  {
    title: "Initial Contact or Visit",
    body: "Contact us online or schedule an in-person visit to our Sovima campus. Our admissions office will guide you through the curriculum, facilities, and the unique Rincho Academy experience.",
    icon: "1",
  },
  {
    title: "Document Submission",
    body: "Bring and submit the necessary documents of the child, including birth certificates, previous academic records, and identification. A complete list will be provided during your visit.",
    icon: "2",
  },
  {
    title: "Awaiting Approval",
    body: "After submission, our academic board will review the profile. Please allow us a brief period to ensure that our school is the perfect fit for your child's educational journey.",
    icon: "3",
  },
  {
    title: "Notification of Acceptance",
    body: "Once the review is completed and approved, you will be formally informed. We will then proceed with the final enrollment paperwork to welcome your child into our community.",
    icon: "4",
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

export default function RinchoAdmission() {
  return (
    <main className="px-8 py-16 lg:px-10 lg:py-24 bg-white">
      <Reveal>
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#728097]">Admissions</p>
          <h1 className="font-serif text-[48px] leading-[0.98] tracking-[-0.05em] text-[#111827] sm:text-[56px] mb-6">
            Join the Rincho Academy
          </h1>
          <p className="text-[14px] leading-7 text-[#677589] max-w-xl mx-auto">
            Our admissions process is rigorous but straightforward, designed to ensure a mutual fit between your child and our academic standards. We look forward to welcoming you.
          </p>
        </div>
      </Reveal>

      <section className="bg-[#edf4fa] py-16 px-6 sm:px-12 rounded-lg border border-[#edf1f6] max-w-4xl mx-auto">
        <h2 className="font-serif text-[32px] leading-tight text-[#111827] text-center mb-12 tracking-[-0.03em]">
          Four Steps to Enrollment
        </h2>
        
        <div className="grid gap-12 sm:grid-cols-2 relative">
          {/* Subtle line connecting the steps visually on larger screens */}
          <div className="hidden sm:block absolute top-[28px] left-[15%] right-[15%] h-px bg-[#d8e1ea] z-0" />
          
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.1} className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-[#132741] text-[#132741] font-bold shadow-sm">
                  <span className="text-lg">{step.icon}</span>
                </div>
                <h3 className="font-serif text-[22px] leading-tight text-[#111827] mb-3">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-6 text-[#677589] max-w-[280px]">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal delay={0.3}>
        <div className="mt-20 text-center">
          <p className="text-[13px] text-[#677589] mb-4">Have questions before starting the process?</p>
          <button
            type="button"
            className="inline-flex items-center rounded-sm bg-[#11233d] px-8 py-3.5 text-[13px] font-semibold text-white transition hover:bg-[#1f375c]"
          >
            Contact Admissions Team
          </button>
        </div>
      </Reveal>
    </main>
  );
}
