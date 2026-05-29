import { Link, useRouterState } from "@tanstack/react-router";
import { ReactNode } from "react";
import { AxisLogo } from "./AxisLogo";
import {
  LayoutDashboard,
  Activity,
  Sparkles,
  Users,
  FileText,
  GraduationCap,
  Settings,
  LogOut,
} from "lucide-react";

type NavItem = { to: string; label: string; icon: typeof Activity };

const navByRole: Record<string, NavItem[]> = {
  admin: [
    { to: "/admin", label: "Visão Geral", icon: LayoutDashboard },
    { to: "/admin", label: "Usuários", icon: Users },
    { to: "/admin", label: "Mesas & Hardware", icon: Sparkles },
    { to: "/admin", label: "Relatórios Globais", icon: FileText },
    { to: "/admin", label: "Configurações", icon: Settings },
  ],
  terapeuta: [
    { to: "/terapeuta", label: "Sessão Ativa", icon: Activity },
    { to: "/terapeuta", label: "Mesas Multidimensionais", icon: Sparkles },
    { to: "/terapeuta", label: "Clientes", icon: Users },
    { to: "/terapeuta", label: "Relatórios", icon: FileText },
  ],
  cliente: [
    { to: "/cliente", label: "Frequência do Dia", icon: Sparkles },
    { to: "/cliente", label: "Minhas Sessões", icon: Activity },
    { to: "/cliente", label: "Evolução de Chakras", icon: LayoutDashboard },
    { to: "/cliente", label: "Materiais", icon: FileText },
  ],
  aluno: [
    { to: "/aluno", label: "Meus Cursos", icon: GraduationCap },
    { to: "/aluno", label: "Apostilas", icon: FileText },
    { to: "/aluno", label: "Exercícios", icon: Activity },
    { to: "/aluno", label: "Certificações", icon: Sparkles },
  ],
};

const roleLabel: Record<string, string> = {
  admin: "Administrador",
  terapeuta: "Terapeuta",
  cliente: "Cliente",
  aluno: "Aluno",
};

export function DashboardLayout({
  role,
  children,
}: {
  role: "admin" | "terapeuta" | "cliente" | "aluno";
  children: ReactNode;
}) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const items = navByRole[role];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 glass-strong border-r border-border flex flex-col">
        <Link to="/" className="flex items-center gap-3 px-6 py-6 border-b border-border">
          <AxisLogo className="h-9 w-9 animate-pulse-ring" />
          <div>
            <div className="font-display text-lg leading-tight text-glow">AXIS CORE™</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Quantum Multidim.
            </div>
          </div>
        </Link>

        <div className="px-6 py-4 border-b border-border">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Painel</div>
          <div className="text-sm font-medium text-accent text-gold-glow">{roleLabel[role]}</div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {items.map((item, i) => {
            const Icon = item.icon;
            const active = i === 0 && path === item.to;
            return (
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all ${
                  active
                    ? "bg-primary/10 text-primary border border-primary/30 shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-border">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-destructive transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Sair</span>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0 grid-bg">
        <div className="px-8 py-8 max-w-[1600px] mx-auto">{children}</div>
      </main>
    </div>
  );
}
