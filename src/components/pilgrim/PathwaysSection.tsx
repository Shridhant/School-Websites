import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { PATHWAYS, PS_COLORS } from "./constants";
import { SectionIntro } from "./SectionIntro";

export function PathwaysSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28" style={{ background: PS_COLORS.parchment }} id="pathways">
      <div className="ps-crosshatch absolute inset-0 opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Formation Pathways"
          title="Four published academic stages shape the Pilgrim journey."
          body="The cards now reflect the school’s actual curriculum path instead of a generic excellence framework."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PATHWAYS.map((pathway, i) => (
            <Reveal key={pathway.name} delay={i * 0.08}>
              <motion.div
                className={`rounded-[30px] border p-7 transition-transform duration-300 group ${
                  i % 2 === 1 ? "md:translate-y-8" : ""
                }`}
                style={{
                  background: i % 2 === 0 ? "rgba(252,250,245,0.88)" : "rgba(232,222,203,0.58)",
                  borderColor: PS_COLORS.border,
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 18px 40px rgba(15,28,46,0.08)",
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[11px] uppercase tracking-[0.32em]" style={{ color: PS_COLORS.oxblood }}>
                    {pathway.note}
                  </span>
                  <span className="font-display text-5xl leading-none" style={{ color: "rgba(15,28,46,0.12)" }}>
                    {pathway.icon}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-[2rem]" style={{ color: PS_COLORS.navy }}>
                  {pathway.name}
                </h3>
                <p className="mt-4 text-sm leading-7" style={{ color: PS_COLORS.moss }}>
                  {pathway.detail}
                </p>
                <div
                  className="mt-8 border-t pt-4 text-[11px] uppercase tracking-[0.3em]"
                  style={{ borderColor: PS_COLORS.line, color: PS_COLORS.slate }}
                >
                  {pathway.icon}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
