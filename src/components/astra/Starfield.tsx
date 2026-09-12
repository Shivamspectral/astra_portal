import { useEffect, useRef } from "react";

type Star = { x: number; y: number; z: number; r: number };

export function Starfield({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

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
      const count = Math.floor((w * h) / 6500);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.9 + 0.1,
        r: Math.random() * 1.3 + 0.2,
      }));
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    let t = 0;
    const draw = () => {
      t += 0.006;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        const px = s.x + pointer.x * s.z * 18;
        const py = s.y + pointer.y * s.z * 18;
        const twinkle = 0.55 + Math.sin(t * 3 + s.x * 0.05) * 0.35;
        ctx.beginPath();
        ctx.arc(px, py, s.r * s.z, 0, Math.PI * 2);
        ctx.fillStyle =
          s.z > 0.8
            ? `rgba(56,189,248,${0.5 * twinkle})`
            : `rgba(255,255,255,${0.75 * twinkle * s.z})`;
        ctx.fill();

        if (!reduce) {
          s.y += s.z * 0.08;
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

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
