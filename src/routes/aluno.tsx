import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Disclaimer } from "@/components/Disclaimer";
import { PlayCircle, FileText, Award, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/aluno")({
  head: () => ({ meta: [{ title: "Painel do Aluno — AXIS CORE™" }] }),
  component: AlunoPanel,
});

function AlunoPanel() {
  const courses = [
    { t: "Fundamentos do AXIS CORE™", p: 78, m: "12 / 16 módulos" },
    { t: "Mesa Hado Quantum · Operação", p: 45, m: "9 / 20 módulos" },
    { t: "Radionica Aplicada", p: 100, m: "Concluído", done: true },
  ];

  return (
    <DashboardLayout role="aluno">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">Academia AXIS</div>
        <h1 className="mt-1 font-display text-4xl text-glow">Sua formação multidimensional</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          { i: PlayCircle, l: "Cursos em andamento", v: "2" },
          { i: Award, l: "Certificações", v: "1" },
          { i: FileText, l: "Apostilas disponíveis", v: "14" },
        ].map(({ i: Icon, l, v }) => (
          <div key={l} className="glass-strong rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              <Icon className="h-4 w-4 text-accent" />
            </div>
            <div className="font-display text-3xl mt-2 text-glow">{v}</div>
          </div>
        ))}
      </div>

      <div className="glass-strong rounded-xl p-6 mb-5">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Cursos</div>
        <div className="font-display text-2xl mb-5">Continue aprendendo</div>
        <div className="space-y-3">
          {courses.map((c) => (
            <div key={c.t} className="glass rounded-lg p-4 flex items-center gap-4">
              <div className={`p-3 rounded-md ${c.done ? "bg-gradient-gold" : "bg-gradient-primary"}`}>
                {c.done ? (
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                ) : (
                  <PlayCircle className="h-5 w-5 text-primary-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display text-lg">{c.t}</div>
                <div className="text-xs text-muted-foreground mb-2">{c.m}</div>
                <div className="h-1.5 rounded-full bg-secondary/40 overflow-hidden">
                  <div
                    className={`h-full ${c.done ? "bg-gradient-gold" : "bg-gradient-primary"} shadow-glow`}
                    style={{ width: `${c.p}%` }}
                  />
                </div>
              </div>
              <div className="font-mono text-sm text-primary w-12 text-right">{c.p}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <div className="glass-strong rounded-xl p-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Apostilas</div>
          <div className="font-display text-2xl mb-4">Biblioteca</div>
          <div className="space-y-2">
            {["Geometria Sagrada · Vol. 1", "Frequências Solfeggio", "Protocolos de Harmonização", "Campo Mórfico Aplicado"].map(
              (a) => (
                <div key={a} className="glass rounded-md px-3 py-2 flex items-center justify-between">
                  <div className="text-sm">{a}</div>
                  <FileText className="h-4 w-4 text-accent" />
                </div>
              ),
            )}
          </div>
        </div>

        <div className="glass-strong rounded-xl p-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Próxima certificação
          </div>
          <div className="font-display text-2xl mb-4">Operador Hado Quantum</div>
          <div className="text-sm text-muted-foreground mb-6">
            Conclua 100% do curso e a avaliação prática para receber a certificação oficial AXIS
            CORE™ assinada por Márcia Britto.
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-gold text-accent-foreground text-sm font-medium shadow-gold">
            <Award className="h-4 w-4" /> Ver requisitos
          </button>
        </div>
      </div>

      <Disclaimer />
    </DashboardLayout>
  );
}
