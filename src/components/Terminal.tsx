import { useEffect, useState } from "react";

const lines = [
  { prompt: "$", text: "npx create-nycole-app --stack next+ai", delay: 60 },
  { prompt: ">", text: "→ Instalando dependências...", delay: 25, muted: true },
  { prompt: ">", text: "✓ React + Next.js + TypeScript", delay: 25, ok: true },
  { prompt: ">", text: "✓ Supabase conectado", delay: 25, ok: true },
  { prompt: ">", text: "✓ Agente IA (n8n) inicializado", delay: 25, ok: true },
  { prompt: "$", text: "deploy --production", delay: 60 },
  { prompt: ">", text: "🚀 Portfólio online em nycole.dev", delay: 25, accent: true },
];

export function Terminal() {
  const [visible, setVisible] = useState<number>(0);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    if (visible >= lines.length) {
      const reset = setTimeout(() => {
        setVisible(0);
        setCurrent("");
      }, 3000);
      return () => clearTimeout(reset);
    }
    const line = lines[visible];
    if (current.length < line.text.length) {
      const t = setTimeout(() => setCurrent(line.text.slice(0, current.length + 1)), line.delay);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisible((v) => v + 1);
        setCurrent("");
      }, 400);
      return () => clearTimeout(t);
    }
  }, [current, visible]);

  return (
    <div className="rounded-xl border border-border bg-card/80 backdrop-blur-md shadow-card overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-muted-foreground">~/nycole — zsh</span>
      </div>
      <div className="p-5 min-h-[240px] space-y-1.5">
        {lines.slice(0, visible).map((l, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-primary">{l.prompt}</span>
            <span
              className={
                l.ok
                  ? "text-green-400"
                  : l.accent
                    ? "text-gradient font-semibold"
                    : l.muted
                      ? "text-muted-foreground"
                      : "text-foreground"
              }
            >
              {l.text}
            </span>
          </div>
        ))}
        {visible < lines.length && (
          <div className="flex gap-2">
            <span className="text-primary">{lines[visible].prompt}</span>
            <span className="cursor-blink text-foreground">{current}</span>
          </div>
        )}
      </div>
    </div>
  );
}
