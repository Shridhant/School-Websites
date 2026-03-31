interface BotanicalAccentProps {
  color?: string;
  opacity?: number;
  className?: string;
}

export function BotanicalAccent({ color = "#B5860B", opacity = 0.4, className = "" }: BotanicalAccentProps) {
  return (
    <svg
      viewBox="0 0 160 200"
      className={className}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main curved stem */}
      <path
        d="M80 10 Q85 50, 88 90 Q90 130, 85 170"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Left leaves - varying sizes */}
      <ellipse cx="50" cy="40" rx="18" ry="28" fill={color} opacity="0.6" transform="rotate(-35 50 40)" />
      <ellipse cx="40" cy="90" rx="16" ry="26" fill={color} opacity="0.5" transform="rotate(-45 40 90)" />
      <ellipse cx="35" cy="140" rx="14" ry="24" fill={color} opacity="0.55" transform="rotate(-30 35 140)" />

      {/* Right leaves - varying sizes */}
      <ellipse cx="110" cy="55" rx="17" ry="27" fill={color} opacity="0.6" transform="rotate(40 110 55)" />
      <ellipse cx="120" cy="110" rx="15" ry="25" fill={color} opacity="0.5" transform="rotate(50 120 110)" />
      <ellipse cx="125" cy="160" rx="13" ry="23" fill={color} opacity="0.55" transform="rotate(35 125 160)" />

      {/* Leaf veins - delicate lines */}
      <line x1="50" y1="40" x2="60" y2="35" stroke={color} strokeWidth="0.8" opacity="0.4" />
      <line x1="110" y1="55" x2="100" y2="50" stroke={color} strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}
