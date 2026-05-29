import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { CoherenceGauge } from "@/components/CoherenceGauge";
import { HRVMonitor } from "@/components/HRVMonitor";
import { ChakraVisualizer } from "@/components/ChakraVisualizer";
import { MesaSelector } from "@/components/MesaSelector";
import { Disclaimer } from "@/components/Disclaimer";
import { Play, FileDown, Sparkles } from "lucide-react";

export const Route = createFileRoute("/terapeuta")({
  head: () => ({
    meta: [{ title: "Painel do Terapeuta — AXIS CORE™" }],
  }),
  component: TerapeutaPanel,
});

function TerapeutaPanel() {
  const [coherence, setCoherence] = useState(72);
  const [rmssd, setRmssd] = useState(48);
  const [recommended, setRecommended] = useState("528 Hz");

  useEffect(() => {
    const id = setInterval(() => {
      const newCoh = Math.max(40, Math.min(98, coherence + (Math.random() - 0.4) * 6));
      setCoherence(newCoh);
      setRmssd(Math.round(30 + newCoh * 0.4));
      setRecommended(newCoh > 75 ? "528 Hz" : newCoh > 60 ? "639 Hz" : "741 Hz");
    }, 2200);
    return () => clearInterval(id);
  }, [coherence]);

  const status = coherence > 70 ? "COERENTE" : "AJUSTE NECESSÁRIO";

  return (
    <DashboardLayout role="terapeuta">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Sessão Ativa</div>
          <h1 className="mt-1 font-display text-4xl text-glow">Mesa Hado Quantum</h1>
          <div className="mt-1 text-sm text-muted-foreground">
            Cliente: Ana Luiza · Iniciada há 03:42 · ID #SES-2026-0589
          </div>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm hover:bg-secondary/40 transition">
            <FileDown className="h-4 w-4" /> Relatório PDF
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow hover:opacity-90 transition">
            <Play className="h-4 w-4" /> Emitir Frequência
          </button>
        </div>
      </div>

      {/* Top grid */}
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-5 mb-5">
        {/* Biometria */}
        <div className="glass-strong rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Biometria · Telemetria
              </div>
              <div className="font-display text-2xl mt-1">Coerência Cardíaca</div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border ${
                coherence > 70
                  ? "text-primary border-primary/40 bg-primary/10"
                  : "text-accent border-accent/40 bg-accent/10"
              }`}
            >
              {status}
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-6 items-center">
            <CoherenceGauge value={coherence} />
            <div className="space-y-4">
              <Metric label="RMSSD" value={`${rmssd} ms`} />
              <Metric label="Frequência sugerida" value={recommended} accent />
              <Metric label="Campo Mórfico" value="Sincronizado" />
              <Metric label="Geometria" value="Fibonacci φ" />
            </div>
          </div>

          <div className="mt-6">
            <HRVMonitor />
          </div>
        </div>

        {/* Chakras */}
        <div className="glass-strong rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Leitor & Harmonizador
              </div>
              <div className="font-display text-2xl mt-1">Mapa de Chakras</div>
            </div>
            <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-accent/40 text-accent text-xs hover:bg-accent/10 transition">
              <Sparkles className="h-3 w-3" /> Harmonizar
            </button>
          </div>
          <ChakraVisualizer />
        </div>
      </div>

      {/* Mesas */}
      <div className="glass-strong rounded-xl p-6 mb-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Mesas Multidimensionais
            </div>
            <div className="font-display text-2xl mt-1">Selecionar Operação</div>
          </div>
        </div>
        <MesaSelector />
      </div>

      {/* AI Recommendations */}
      <div className="grid md:grid-cols-3 gap-5 mb-5">
        <AiCard
          title="Recomendação AxisMatrix"
          body="Coerência em alta. Sustentar emissão 528 Hz por 6 min para consolidar alinhamento cardíaco."
        />
        <AiCard
          title="Protocolo Sugerido"
          body="Sequência Solfeggio (396 → 528 → 963) com pausa de 90s entre emissões."
        />
        <AiCard
          title="Próxima Sessão"
          body="Recomendado intervalo de 48h. Atenção ao chakra da Garganta (65%)."
        />
      </div>

      <Disclaimer />
    </DashboardLayout>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className={`font-display text-xl ${accent ? "text-accent text-gold-glow" : ""}`}>
        {value}
      </div>
    </div>
  );
}

function AiCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="glass rounded-xl p-5 border-l-2 border-accent">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
        <Sparkles className="h-3 w-3" /> {title}
      </div>
      <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{body}</p>
    </div>
  );
}
