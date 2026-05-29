import { useState } from "react";
import { Radio, Atom, Infinity as InfinityIcon, ScanLine } from "lucide-react";

const mesas = [
  {
    id: "hado",
    name: "Mesa Hado Quantum",
    desc: "Emissão vibracional com cristais e bobinas",
    icon: Atom,
    status: "Conectada · ESP32",
  },
  {
    id: "radionica",
    name: "Máquina Radionica",
    desc: "Grid interativo + campo mórfico",
    icon: Radio,
    status: "Digital",
  },
  {
    id: "infinity",
    name: "Mesa Infinity",
    desc: "Geometria sagrada Fibonacci",
    icon: InfinityIcon,
    status: "Sincronizada",
  },
  {
    id: "bioscan",
    name: "Mesa BioScan",
    desc: "Leitura biométrica + chakras",
    icon: ScanLine,
    status: "Ativa",
  },
];

export function MesaSelector() {
  const [active, setActive] = useState("hado");
  return (
    <div className="grid grid-cols-2 gap-3">
      {mesas.map((m) => {
        const Icon = m.icon;
        const isActive = active === m.id;
        return (
          <button
            key={m.id}
            onClick={() => setActive(m.id)}
            className={`group relative text-left p-4 rounded-lg border transition-all ${
              isActive
                ? "border-primary/60 bg-primary/5 shadow-glow"
                : "border-border glass hover:border-primary/30"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-md ${
                  isActive ? "bg-gradient-primary text-primary-foreground" : "bg-secondary/40 text-primary"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display text-base leading-tight">{m.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.desc}</div>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {m.status}
                </div>
              </div>
            </div>
            {isActive && (
              <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
