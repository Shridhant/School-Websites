import { Reveal } from "./Reveal";
import { PS_COLORS } from "./constants";
import { WordPullUp } from "./WordPullUp";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <Reveal>
      <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
        <div
          className={`mb-5 text-[11px] uppercase tracking-[0.34em] ${
            centered ? "justify-center" : ""
          } inline-flex items-center gap-3`}
          style={{ color: PS_COLORS.oxblood }}
        >
          <span className="h-px w-10" style={{ background: PS_COLORS.gold }} />
          {eyebrow}
        </div>
        <WordPullUp
          text={title}
          className={centered ? "justify-center" : "justify-start"}
          wordClassName="font-display text-[clamp(2.1rem,4vw,3.7rem)] leading-[0.98] text-[var(--ps-ink)]"
        />
        {body ? (
          <p
            className={`mt-5 text-[15px] leading-7 ${
              centered ? "mx-auto max-w-2xl" : "max-w-xl"
            }`}
            style={{ color: PS_COLORS.moss }}
          >
            {body}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
