interface HexPatternProps {
  className?: string;
  dark?: boolean;
  opacity?: number;
}

export function HexPattern({ className = "", dark = false, opacity = 1 }: HexPatternProps) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L51.96 15 L51.96 45 L30 60 L8.04 45 L8.04 15 Z' fill='none' stroke='${dark ? "rgba(255,255,255,0.08)" : "rgba(26,58,42,0.06)"}' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
        backgroundPosition: "0 0",
        opacity,
      }}
    />
  );
}
