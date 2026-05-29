import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Disclaimer } from "@/components/Disclaimer";
import { Users, Sparkles, Activity, FileText, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — AXIS CORE™" }] }),
  component: AdminPanel,
});

function AdminPanel() {
  return (
    <DashboardLayout role="admin">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">Visão Geral</div>
        <h1 className="mt-1 font-display text-4xl text-glow">Painel Administrativo</h1>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {[
          { i: Users, l: "Usuários ativos", v: "1.284", d: "+12% mês" },
          { i: Activity, l: "Sessões hoje", v: "342", d: "Tempo médio 28min" },
          { i: Sparkles, l: "Mesas online", v: "18 / 22", d: "4 em manutenção" },
          { i: FileText, l: "Relatórios gerados", v: "8.671", d: "Últimos 30d" },
        ].map(({ i: Icon, l, v, d }) => (
          <div key={l} className="glass-strong rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div className="font-display text-3xl mt-2 text-glow">{v}</div>
            <div className="text-xs text-muted-foreground mt-1">{d}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5 mb-5">
        <div className="glass-strong rounded-xl p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Atividade Global · 7 dias
              </div>
              <div className="font-display text-2xl mt-1">Coerência média da rede</div>
            </div>
            <div className="text-xs text-primary flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +4.2%
            </div>
          </div>
          <FauxChart />
        </div>

        <div className="glass-strong rounded-xl p-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Hardware conectado
          </div>
          <div className="font-display text-2xl mt-1 mb-5">Mesas físicas (ESP32)</div>
          <div className="space-y-3">
            {[
              { n: "Mesa Hado Quantum · SP-01", s: "online" },
              { n: "Mesa Hado Quantum · RJ-02", s: "online" },
              { n: "Mesa Infinity · MG-01", s: "online" },
              { n: "Mesa BioScan · SP-03", s: "manutenção" },
            ].map((m) => (
              <div key={m.n} className="flex items-center justify-between glass rounded-md px-3 py-2">
                <div className="text-sm">{m.n}</div>
                <div
                  className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded ${
                    m.s === "online"
                      ? "text-primary bg-primary/10 border border-primary/30"
                      : "text-accent bg-accent/10 border border-accent/30"
                  }`}
                >
                  {m.s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-strong rounded-xl p-6 mb-5">
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
          Últimas sessões
        </div>
        <div className="font-display text-2xl mb-4">Auditoria em tempo real</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border">
                <th className="py-2 pr-4">Sessão</th>
                <th className="py-2 pr-4">Terapeuta</th>
                <th className="py-2 pr-4">Cliente</th>
                <th className="py-2 pr-4">Mesa</th>
                <th className="py-2 pr-4">Coerência</th>
                <th className="py-2 pr-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-foreground/90">
              {[
                ["#0589", "Márcia Britto", "Ana L.", "Hado Quantum", "84%", "Ativa"],
                ["#0588", "C. Almeida", "Pedro M.", "Radionica", "76%", "Concluída"],
                ["#0587", "R. Santos", "Júlia R.", "BioScan", "71%", "Concluída"],
                ["#0586", "Márcia Britto", "Lucas P.", "Infinity", "92%", "Concluída"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/40">
                  {row.map((c, j) => (
                    <td key={j} className="py-3 pr-4 font-mono text-xs">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Disclaimer />
    </DashboardLayout>
  );
}

function FauxChart() {
  const points = [55, 62, 58, 70, 68, 74, 78, 72, 80, 82, 79, 86];
  const max = 100;
  const w = 600;
  const h = 180;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-44" preserveAspectRatio="none">
      <defs>
        <linearGradient id="area-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.16 200 / 0.45)" />
          <stop offset="100%" stopColor="oklch(0.82 0.16 200 / 0)" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#area-fill)" />
      <path
        d={path}
        fill="none"
        stroke="oklch(0.82 0.16 200)"
        strokeWidth="2"
        style={{ filter: "drop-shadow(0 0 6px oklch(0.82 0.16 200))" }}
      />
      {points.map((p, i) => (
        <circle key={i} cx={i * step} cy={h - (p / max) * h} r="3" fill="oklch(0.85 0.13 90)" />
      ))}
    </svg>
  );
}
