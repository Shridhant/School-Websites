import { PS_COLORS } from "./constants";

export function PilgrimThemeStyles() {
  return (
    <style>{`
      .ps-root {
        --ps-navy: ${PS_COLORS.navy};
        --ps-ink: ${PS_COLORS.ink};
        --ps-gold: ${PS_COLORS.gold};
        --ps-parchment: ${PS_COLORS.parchment};
        --ps-cream: ${PS_COLORS.cream};
        --ps-sand: ${PS_COLORS.sand};
        --ps-oxblood: ${PS_COLORS.oxblood};
        --ps-moss: ${PS_COLORS.moss};
        --ps-slate: ${PS_COLORS.slate};
        --ps-border: ${PS_COLORS.border};
        --ps-line: ${PS_COLORS.line};
        font-family: "Plus Jakarta Sans", "Manrope", system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        background: var(--ps-parchment);
        color: var(--ps-ink);
        scroll-behavior: smooth;
      }
      .ps-root .font-display {
        font-family: "DM Serif Display", "Fraunces", Georgia, serif;
        letter-spacing: -0.03em;
      }
      .ps-root .ps-ledger {
        background-image:
          linear-gradient(to right, rgba(15, 28, 46, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(15, 28, 46, 0.05) 1px, transparent 1px);
        background-size: 56px 56px;
      }
      .ps-root .ps-crosshatch {
        background-image:
          repeating-linear-gradient(0deg, rgba(15, 28, 46, 0.035), rgba(15, 28, 46, 0.035) 1px, transparent 1px, transparent 18px),
          repeating-linear-gradient(90deg, rgba(15, 28, 46, 0.025), rgba(15, 28, 46, 0.025) 1px, transparent 1px, transparent 18px);
      }
      .ps-root .ps-paper-card {
        background: rgba(252, 250, 245, 0.9);
        border: 1px solid var(--ps-border);
        box-shadow: 0 20px 60px rgba(15, 28, 46, 0.06);
      }
      .ps-root .ps-ink-panel {
        background: linear-gradient(180deg, rgba(15, 28, 46, 0.95), rgba(10, 18, 30, 0.98));
        border: 1px solid rgba(201, 164, 92, 0.18);
        box-shadow: 0 30px 80px rgba(5, 10, 18, 0.38);
      }
      .ps-root .ps-outline-frame {
        position: relative;
      }
      .ps-root .ps-outline-frame::after {
        content: "";
        position: absolute;
        inset: 12px;
        border: 1px solid rgba(201, 164, 92, 0.26);
        pointer-events: none;
      }
      .ps-root .ps-button-primary,
      .ps-root .ps-button-secondary {
        min-height: 44px;
        border-radius: 999px;
        padding: 0.9rem 1.5rem;
        transition: transform 220ms ease, background-color 220ms ease, box-shadow 220ms ease, color 220ms ease, border-color 220ms ease;
      }
      .ps-root .ps-button-primary {
        background: var(--ps-oxblood);
        color: var(--ps-cream);
        box-shadow: 0 16px 32px rgba(122, 46, 46, 0.18);
      }
      .ps-root .ps-button-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 20px 40px rgba(122, 46, 46, 0.22);
      }
      .ps-root .ps-button-secondary {
        border: 1px solid rgba(15, 28, 46, 0.16);
        background: rgba(255, 255, 255, 0.28);
        color: var(--ps-navy);
      }
      .ps-root .ps-button-secondary:hover {
        transform: translateY(-2px);
        background: rgba(15, 28, 46, 0.04);
      }
      .ps-root .ps-link-underline {
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size 220ms ease;
      }
      .ps-root .ps-link-underline:hover {
        background-size: 100% 1px;
      }
      .ps-root .ps-crest-line {
        position: relative;
      }
      .ps-root .ps-crest-line::before,
      .ps-root .ps-crest-line::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 52px;
        height: 1px;
        background: rgba(201, 164, 92, 0.65);
      }
      .ps-root .ps-crest-line::before {
        right: calc(100% + 12px);
      }
      .ps-root .ps-crest-line::after {
        left: calc(100% + 12px);
      }
      .ps-root .ps-floating-note {
        animation: ps-float 6s ease-in-out infinite;
      }
      .ps-root .ps-marquee-shell {
        border-top: 1px solid rgba(201, 164, 92, 0.2);
        border-bottom: 1px solid rgba(201, 164, 92, 0.2);
        background: linear-gradient(90deg, rgba(15, 28, 46, 0.98), rgba(25, 40, 61, 0.96), rgba(15, 28, 46, 0.98));
        color: rgba(246, 241, 231, 0.82);
      }
      .ps-root input::placeholder {
        color: rgba(83, 98, 90, 0.75);
      }
      .ps-root *::selection {
        background: rgba(201, 164, 92, 0.24);
        color: var(--ps-navy);
      }
      @keyframes ps-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      @media (prefers-reduced-motion: reduce) {
        .ps-root {
          scroll-behavior: auto;
        }
        .ps-root *,
        .ps-root *::before,
        .ps-root *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  );
}
