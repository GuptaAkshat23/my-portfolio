"use client";

import { useEffect, useRef } from "react";

export default function CursedField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;

    type P = { x: number; y: number; vx: number; vy: number; r: number; life: number; max: number; hue: number };
    let particles: P[] = [];
    const COUNT = reduce ? 0 : 70;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const colorFor = (hue: number, a: number) =>
      hue < 0.5 ? `rgba(139,92,246,${a})` : `rgba(34,211,238,${a})`;

    const spawn = (): P => ({
      x: rand(0, width),
      y: height + rand(0, 60),
      vx: rand(-0.15, 0.15),
      vy: rand(-0.5, -1.3),
      r: rand(0.6, 2.2),
      life: 0,
      max: rand(120, 320),
      hue: Math.random(),
    });

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.life++;
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        if (dx * dx + dy * dy < 26000) {
          p.vx += dx * 0.0009;
          p.vy += dy * 0.0009;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;

        const t = Math.min(p.life / p.max, 1);
        const alpha = Math.sin(t * Math.PI) * 0.6;
        ctx.beginPath();
        ctx.fillStyle = colorFor(p.hue, alpha);
        ctx.shadowBlur = 8;
        ctx.shadowColor = colorFor(p.hue, alpha);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.max || p.y < -40) Object.assign(p, spawn());
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };

    resize();
    particles = Array.from({ length: COUNT }, spawn);
    if (COUNT > 0) raf = requestAnimationFrame(tick);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouse.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}