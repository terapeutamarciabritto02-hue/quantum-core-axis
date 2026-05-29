import { useEffect, useRef } from "react";

export function HRVMonitor() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    const points: number[] = Array(120).fill(0);
    let t = 0;
    let raf = 0;

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      // Generate a faux ECG/HRV waveform
      t += 0.08;
      const base = Math.sin(t) * 0.2;
      const spike = Math.sin(t * 6) > 0.92 ? Math.random() * 1.4 : 0;
      const noise = (Math.random() - 0.5) * 0.1;
      points.push(base + spike + noise);
      points.shift();

      ctx.strokeStyle = "oklch(0.82 0.16 200 / 0.8)";
      ctx.lineWidth = 1.8;
      ctx.shadowBlur = 12;
      ctx.shadowColor = "oklch(0.82 0.16 200)";
      ctx.beginPath();
      points.forEach((p, i) => {
        const x = (i / points.length) * width;
        const y = height / 2 - p * (height / 2.5);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative h-32 rounded-lg glass overflow-hidden">
      <canvas ref={ref} className="w-full h-full block" />
      <div className="absolute top-2 left-3 text-[10px] uppercase tracking-widest text-muted-foreground">
        HRV · Tempo Real
      </div>
      <div className="absolute top-2 right-3 flex items-center gap-1.5 text-[10px] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        LIVE
      </div>
    </div>
  );
}
