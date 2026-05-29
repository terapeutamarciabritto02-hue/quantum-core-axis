const chakras = [
  { name: "Coroa", color: "var(--chakra-crown)", freq: "963 Hz", value: 78 },
  { name: "Terceiro Olho", color: "var(--chakra-third-eye)", freq: "852 Hz", value: 82 },
  { name: "Garganta", color: "var(--chakra-throat)", freq: "741 Hz", value: 65 },
  { name: "Coração", color: "var(--chakra-heart)", freq: "639 Hz", value: 91 },
  { name: "Plexo Solar", color: "var(--chakra-solar)", freq: "528 Hz", value: 74 },
  { name: "Sacro", color: "var(--chakra-sacral)", freq: "417 Hz", value: 68 },
  { name: "Raiz", color: "var(--chakra-root)", freq: "396 Hz", value: 85 },
];

export function ChakraVisualizer() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6 items-center">
      {/* Body silhouette with chakra orbs */}
      <div className="relative w-32 h-96 flex flex-col items-center justify-between py-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        </div>
        {chakras.map((c, i) => (
          <div key={c.name} className="relative">
            <div
              className="h-8 w-8 rounded-full animate-pulse-ring"
              style={{
                backgroundColor: c.color,
                boxShadow: `0 0 24px ${c.color}, 0 0 8px ${c.color}`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* List */}
      <div className="space-y-2">
        {chakras.map((c) => (
          <div key={c.name} className="glass rounded-md px-3 py-2 flex items-center gap-3">
            <div
              className="h-3 w-3 rounded-full shrink-0"
              style={{ backgroundColor: c.color, boxShadow: `0 0 10px ${c.color}` }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-[10px] text-muted-foreground font-mono">{c.freq}</div>
              </div>
              <div className="mt-1 h-1 rounded-full bg-secondary/40 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${c.value}%`,
                    backgroundColor: c.color,
                    boxShadow: `0 0 8px ${c.color}`,
                  }}
                />
              </div>
            </div>
            <div className="text-xs font-mono text-foreground/80 w-10 text-right">{c.value}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
