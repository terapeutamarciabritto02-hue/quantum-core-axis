import { createFileRoute, Link } from "@tanstack/react-router";
import { AxisLogo } from "@/components/AxisLogo";
import { Disclaimer } from "@/components/Disclaimer";
import heroImg from "@/assets/hero-quantum.jpg";
import {
  Activity,
  Atom,
  Radio,
  ScanLine,
  Sparkles,
  Brain,
  FileText,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AXIS CORE™ Quantum Multidimensional — Márcia Britto" },
      {
        name: "description",
        content:
          "Plataforma profissional de mesas multidimensionais, telemetria HRV em tempo real, harmonização de chakras e IA contextual. Criada por Márcia Britto.",
      },
      { property: "og:title", content: "AXIS CORE™ Quantum Multidimensional" },
      {
        property: "og:description",
        content: "Tecnologia Multidimensional Aplicada à Consciência.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 glass-strong border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AxisLogo className="h-8 w-8" />
            <div>
              <div className="font-display text-base leading-none text-glow">AXIS CORE™</div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                Quantum Multidimensional
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#mesas" className="hover:text-foreground transition-colors">Mesas</a>
            <a href="#modulos" className="hover:text-foreground transition-colors">Módulos</a>
            <a href="#paineis" className="hover:text-foreground transition-colors">Painéis</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/cliente"
              className="hidden md:inline-flex text-sm text-muted-foreground hover:text-foreground"
            >
              Entrar
            </Link>
            <Link
              to="/terapeuta"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow hover:opacity-90 transition-opacity"
            >
              Acessar Painel <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Campo quântico multidimensional com chakras alinhados"
            className="w-full h-full object-cover opacity-50"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Evolução do AXIS CORE™
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] text-glow">
              Tecnologia Multidimensional <br />
              <span className="bg-gradient-gold bg-clip-text text-transparent text-gold-glow">
                Aplicada à Consciência
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Plataforma profissional que integra Mesas Hado Quantum, Máquina Radionica, Mesas
              Multidimensionais, telemetria HRV em tempo real, leitores de chakras e IA contextual
              — em uma única experiência híbrida (física + digital).
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/terapeuta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition"
              >
                Iniciar Sessão <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/admin"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-accent/40 text-accent hover:bg-accent/10 transition"
              >
                Painel Administrativo
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "< 50ms", l: "Latência" },
                { v: "Multi-tenant", l: "Arquitetura" },
                { v: "ESP32 + MQTT", l: "Mesas físicas" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl text-glow">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modulos" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Módulos Principais</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Um ecossistema completo</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: Atom, t: "Mesas Multidimensionais", d: "Hado Quantum, Radionica, Infinity e BioScan integradas." },
            { i: Activity, t: "Telemetria & Biometria", d: "HRV, coerência cardíaca e variáveis vibracionais em tempo real." },
            { i: ScanLine, t: "Leitores de Chakras", d: "Scan vibracional + harmonização com frequências Solfeggio." },
            { i: Brain, t: "AxisMatrixEngine", d: "IA central para análise, recomendação e automação." },
            { i: Radio, t: "Integração Física", d: "ESP32 + MQTT conectando mesas físicas ao backend." },
            { i: FileText, t: "Relatórios PDF", d: "Evolução, alinhamento e protocolos gerados automaticamente." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="glass rounded-xl p-6 hover:border-primary/40 transition-all group">
              <div className="inline-flex p-3 rounded-lg bg-gradient-primary shadow-glow group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mesas */}
      <section id="mesas" className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-accent">Mesas Operacionais</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Híbrido <span className="text-glow">físico + digital</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                Ative mesas presencialmente ou remotamente. Cada sessão é sincronizada com o
                Campo Mórfico e a Geometria Sagrada Fibonacci, gerando emissão precisa e
                rastreável.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {["Mesa Hado Quantum (cristais + bobinas)", "Máquina Radionica (grid interativo)", "Mesa Infinity (Fibonacci)", "Mesa BioScan (chakras + biometria)"].map(
                  (m) => (
                    <li key={m} className="flex items-center gap-3">
                      <Sparkles className="h-4 w-4 text-accent" />
                      <span>{m}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full bg-aura animate-pulse-ring" />
              <div className="absolute inset-8 rounded-full border border-primary/30 animate-spin-slow" />
              <div className="absolute inset-16 rounded-full border border-accent/30 animate-spin-slow" style={{ animationDirection: "reverse" }} />
              <div className="absolute inset-24 rounded-full border border-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <AxisLogo className="h-32 w-32 animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Painéis */}
      <section id="paineis" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Painéis Dedicados</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Acesso por papel</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { to: "/admin", t: "Admin", d: "Usuários, mesas, relatórios globais" },
            { to: "/terapeuta", t: "Terapeuta", d: "Sessões, mesas, protocolos" },
            { to: "/cliente", t: "Cliente", d: "Evolução, frequência diária, sessões" },
            { to: "/aluno", t: "Aluno", d: "Cursos, apostilas, certificação" },
          ].map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="glass rounded-xl p-6 hover:border-primary/50 hover:shadow-glow transition-all group"
            >
              <div className="font-display text-2xl text-gold-glow">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-xs text-primary group-hover:gap-2 transition-all">
                Acessar painel <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="flex items-center gap-3">
                <AxisLogo className="h-7 w-7" />
                <div className="font-display text-lg text-glow">AXIS CORE™</div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground max-w-md">
                Criado por Márcia Britto · Tecnologia Multidimensional Aplicada à Consciência.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" /> LGPD · GDPR · Sessões auditadas
            </div>
          </div>
          <div className="mt-8">
            <Disclaimer />
          </div>
        </div>
      </footer>
    </div>
  );
}
