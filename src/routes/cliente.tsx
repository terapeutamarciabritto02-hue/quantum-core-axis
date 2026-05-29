import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { ChakraVisualizer } from "@/components/ChakraVisualizer";
import { Disclaimer } from "@/components/Disclaimer";
import { Calendar, Download, Sparkles } from "lucide-react";

export const Route = createFileRoute("/cliente")({
  head: () => ({ meta: [{ title: "Painel do Cliente — AXIS CORE™" }] }),
  component: ClientePanel,
});

function ClientePanel() {
  return (
    <DashboardLayout role="cliente">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">Bem-vinda, Ana</div>
        <h1 className="mt-1 font-display text-4xl text-glow">Sua jornada multidimensional</h1>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-5 mb-5">
        <div className="glass-strong rounded-xl p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-aura animate-pulse-ring" />
          <div className="relative">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Frequência do dia
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-display text-7xl text-gold-glow bg-gradient-gold bg-clip-text text-transparent">
                528
              </span>
              <span className="text-2xl text-muted-foreground">Hz</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Frequência do amor · Reparo celular · Coerência cardíaca
            </div>
            <button className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow">
              <Sparkles className="h-4 w-4" /> Escutar agora
            </button>
          </div>
        </div>

        <div className="glass-strong rounded-xl p-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Próxima sessão
          </div>
          <div className="font-display text-2xl mt-1 mb-4">Quarta · 14h30</div>
          <div className="space-y-2 text-sm text-foreground/90">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Terapeuta</span>
              <span>Márcia Britto</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Mesa</span>
              <span>Hado Quantum</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duração</span>
              <span>45 min</span>
            </div>
          </div>
          <button className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-accent/40 text-accent text-sm hover:bg-accent/10 transition">
            <Calendar className="h-4 w-4" /> Reagendar
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-5 mb-5">
        <div className="glass-strong rounded-xl p-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Evolução · Últimas 4 sessões
          </div>
          <div className="font-display text-2xl mt-1 mb-5">Coerência cardíaca</div>
          <Bars />
        </div>
        <div className="glass-strong rounded-xl p-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
            Alinhamento atual
          </div>
          <div className="font-display text-2xl mb-5">Mapa de Chakras</div>
          <ChakraVisualizer />
        </div>
      </div>

      <div className="glass-strong rounded-xl p-6 mb-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Histórico
            </div>
            <div className="font-display text-2xl mt-1">Relatórios PDF</div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { d: "12 / Mai", t: "Sessão Hado Quantum #0589" },
            { d: "08 / Mai", t: "Sessão BioScan #0571" },
            { d: "02 / Mai", t: "Avaliação inicial #0540" },
          ].map((r) => (
            <button
              key={r.t}
              className="glass rounded-md p-4 text-left hover:border-primary/40 transition group"
            >
              <div className="text-[10px] uppercase tracking-widest text-accent">{r.d}</div>
              <div className="mt-1 text-sm">{r.t}</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary group-hover:gap-2 transition-all">
                <Download className="h-3 w-3" /> Baixar PDF
              </div>
            </button>
          ))}
        </div>
      </div>

      <Disclaimer />
    </DashboardLayout>
  );
}

function Bars() {
  const data = [
    { l: "S1", v: 62 },
    { l: "S2", v: 71 },
    { l: "S3", v: 78 },
    { l: "S4", v: 84 },
  ];
  return (
    <div className="flex items-end gap-4 h-44">
      {data.map((d) => (
        <div key={d.l} className="flex-1 flex flex-col items-center gap-2">
          <div className="text-xs font-mono text-primary">{d.v}%</div>
          <div className="w-full rounded-t bg-gradient-primary shadow-glow" style={{ height: `${d.v}%` }} />
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{d.l}</div>
        </div>
      ))}
    </div>
  );
}
