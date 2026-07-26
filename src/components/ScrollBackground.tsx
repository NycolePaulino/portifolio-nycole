import { useEffect, useRef, useState } from "react";

export function ScrollBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progressRef.current = p;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let dpr = 1;

    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    let nodes: Node[] = [];

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(90, Math.max(28, (w * h) / 24000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
      }));
    };

    build();
    window.addEventListener("resize", build);

    const draw = () => {
      const p = progressRef.current;
      ctx.clearRect(0, 0, w, h);

      // link distance shrinks as we scroll -> network dissolves into particles
      const linkDist = 150 - p * 90;
      const speed = reduce ? 0 : 1 - p * 0.55;

      for (const n of nodes) {
        n.x += n.vx * speed;
        n.y += n.vy * speed;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * (0.28 - p * 0.16);
            if (alpha <= 0) continue;
            ctx.strokeStyle = `rgba(140, 82, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const radius = n.r * (1 + p * 0.6);
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 118, 255, ${0.45 + p * 0.25})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 transition-[background] duration-700"
        style={{
          background: `radial-gradient(120% 80% at ${20 + progress * 60}% ${10 + progress * 70}%, oklch(0.62 0.24 296 / ${0.22 - progress * 0.08}), transparent 65%)`,
        }}
      />
      <div
        className="grid-bg absolute inset-x-0 h-[200%]"
        style={{
          top: `${-progress * 40}vh`,
          opacity: 0.5 - progress * 0.4,
          maskImage: "radial-gradient(ellipse at 50% 30%, black, transparent 75%)",
        }}
      />
      <div
        className="absolute h-[46vw] w-[46vw] rounded-full blur-[120px]"
        style={{
          left: `${8 + progress * 45}%`,
          top: `${-10 + progress * 30}%`,
          background: "oklch(0.62 0.24 296 / 0.22)",
          transition: "left .6s ease-out, top .6s ease-out",
        }}
      />
      <div
        className="absolute h-[38vw] w-[38vw] rounded-full blur-[130px]"
        style={{
          right: `${5 + progress * 30}%`,
          bottom: `${-5 + progress * 25}%`,
          background: "oklch(0.72 0.22 300 / 0.16)",
          transition: "right .6s ease-out, bottom .6s ease-out",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,oklch(var(--background))_100%)]" />
    </div>
  );
}
