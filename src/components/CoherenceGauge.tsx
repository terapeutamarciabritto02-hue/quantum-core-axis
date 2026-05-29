import { useEffect, useState } from "react";

export function CoherenceGauge({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const id = requestAnimationFrame(() => setDisplay(value));
    return () => cancelAnimationFrame(id);
  }, [value]);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (display / 100) * circumference;

  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="grad-coherence" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.85 0.13 90)" />
            <stop offset="100%" stopColor="oklch(0.82 0.16 200)" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="oklch(0.3 0.04 220 / 0.5)"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="url(#grad-coherence)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease-out", filter: "drop-shadow(0 0 8px oklch(0.82 0.16 200 / 0.6))" }}
        />
      </svg>
      <div className="text-center">
        <div className="font-display text-5xl text-glow">{Math.round(display)}<span className="text-2xl text-muted-foreground">%</span></div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">Coerência</div>
      </div>
    </div>
  );
}
