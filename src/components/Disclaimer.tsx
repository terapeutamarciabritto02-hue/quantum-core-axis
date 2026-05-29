import { Info } from "lucide-react";

export function Disclaimer() {
  return (
    <div className="glass rounded-md px-4 py-3 flex items-start gap-3 text-xs text-muted-foreground">
      <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" />
      <p>
        Ferramenta complementar de bem-estar vibracional. Não substitui diagnóstico, tratamento
        ou acompanhamento médico. O cliente é o protagonista do próprio processo.
      </p>
    </div>
  );
}
