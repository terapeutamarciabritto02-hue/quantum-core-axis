export function AxisLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="axis-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.95 0.13 95)" />
          <stop offset="60%" stopColor="oklch(0.82 0.16 200)" />
          <stop offset="100%" stopColor="oklch(0.32 0.07 220)" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="28" stroke="oklch(0.82 0.16 200 / 0.35)" strokeWidth="1" />
      <circle cx="32" cy="32" r="20" stroke="oklch(0.85 0.13 90 / 0.45)" strokeWidth="1" />
      <circle cx="32" cy="32" r="12" stroke="oklch(0.82 0.16 200 / 0.6)" strokeWidth="1" />
      <circle cx="32" cy="32" r="5" fill="url(#axis-core)" />
      <path d="M32 4 L32 60 M4 32 L60 32" stroke="oklch(0.82 0.16 200 / 0.4)" strokeWidth="0.5" />
      <path d="M12 12 L52 52 M52 12 L12 52" stroke="oklch(0.85 0.13 90 / 0.25)" strokeWidth="0.5" />
    </svg>
  );
}
