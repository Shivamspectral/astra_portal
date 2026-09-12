import { useEffect, useRef, useState } from "react";

type Star = { x: number; y: number; z: number; r: number };

/**
 * Persistent full-viewport space stage: drifting starfield canvas,
 * red nebula clouds, parallax planets and slow orbital rings.
 * Rendered once behind the whole site so the page reads as one interface.
 */
export function CosmicStage() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScroll(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let stars: Star[] = [];
    const pointer = { x: 0, y: 0 };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.floor((w * h) / 7000), 220);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.9 + 0.1,
        r: Math.random() * 1.25 + 0.2,
      }));
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    let t = 0;
    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, w, h);
      const sy = window.scrollY;

      for (const s of stars) {
        const px = s.x + pointer.x * s.z * 16;
        const py = (((s.y - sy * s.z * 0.12) % h) + h) % h;
        const twinkle = 0.5 + Math.sin(t * 3 + s.x * 0.05) * 0.4;
        ctx.beginPath();
        ctx.arc(px, py, s.r * s.z, 0, Math.PI * 2);
        ctx.fillStyle =
          s.z > 0.85
            ? `rgba(255,80,96,${0.55 * twinkle})`
            : `rgba(255,255,255,${0.8 * twinkle * s.z})`;
        ctx.fill();
        if (!reduce) {
          s.y += s.z * 0.05;
          if (s.y > h) s.y = -2;
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void" aria-hidden="true">
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />

      {/* drifting red nebula clouds */}
      <div
        className="nebula-red astra-nebula-a absolute -left-[20%] top-[-10%] h-[70vh] w-[80vw]"
        style={{ transform: `translateY(${scroll * -0.06}px)` }}
      />
      <div
        className="nebula-red astra-nebula-b absolute -right-[25%] top-[40%] h-[80vh] w-[85vw]"
        style={{ transform: `translateY(${scroll * -0.03}px)` }}
      />

      {/* parallax planet — upper right, blue-lit rim */}
      <div
        className="absolute -right-[18vw] -top-[22vw] h-[52vw] w-[52vw] rounded-full"
        style={{
          transform: `translateY(${scroll * 0.07}px)`,
          background:
            "radial-gradient(circle at 72% 78%, #10141c 0%, #05070d 60%, #05070d 100%)",
          boxShadow:
            "inset 18px 22px 60px rgba(120,190,255,0.20), 0 0 90px rgba(80,150,255,0.10)",
          border: "1px solid rgba(150,205,255,0.28)",
        }}
      />

      {/* parallax planet horizon — lower left */}
      <div
        className="absolute -bottom-[65vw] -left-[30vw] h-[120vw] w-[160vw] rounded-full"
        style={{
          transform: `translateY(${scroll * -0.05}px)`,
          background:
            "radial-gradient(ellipse at 50% 8%, rgba(120,190,255,0.14), rgba(5,7,13,0) 55%)",
          borderTop: "1px solid rgba(160,210,255,0.35)",
          boxShadow: "0 -18px 90px rgba(90,160,255,0.18)",
        }}
      />

      {/* small distant moon */}
      <div
        className="absolute left-[8%] top-[26%] h-16 w-16 rounded-full sm:h-24 sm:w-24"
        style={{
          transform: `translateY(${scroll * 0.16}px)`,
          background: "radial-gradient(circle at 35% 32%, #2a2f38, #0a0c12 70%)",
          boxShadow: "inset -6px -8px 18px rgba(0,0,0,0.8), 0 0 26px rgba(150,190,255,0.12)",
        }}
      />

      {/* giant slow orbital rings */}
      <div className="absolute left-1/2 top-1/2 h-[130vmin] w-[130vmin] -translate-x-1/2 -translate-y-1/2">
        <div className="astra-orbit absolute inset-0 rounded-full border border-white/[0.07]" />
        <div className="astra-orbit-rev absolute inset-[12%] rounded-full border border-scarlet/10" />
      </div>

      {/* fine technical grid + vignette */}
      <div className="grid-lines absolute inset-0 opacity-[0.35]" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)" }}
      />
    </div>
  );
}
