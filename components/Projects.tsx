"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects, type Project } from "../data/portfolio";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const srx = useSpring(rx, { stiffness: 150, damping: 15 });
  const sry = useSpring(ry, { stiffness: 150, damping: 15 });

  const background = useTransform(
    [gx, gy],
    ([x, y]) => `radial-gradient(440px circle at ${x}% ${y}%, rgba(139,92,246,0.18), transparent 55%)`
  );

  const onMove = (e: React.PointerEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 10);
    rx.set((0.5 - py) * 10);
    gx.set(px * 100);
    gy.set(py * 100);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-surface/60 p-6 transition-colors md:p-8 ${
        project.featured
          ? "border-violet-cursed/40 hover:border-violet-cursed/70 md:col-span-2"
          : "border-line hover:border-line-strong"
      }`}
    >
      <motion.div
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative">
        {project.featured && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-cursed/30 bg-violet-cursed/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-violet-200">
            <span className="pulse-cursed h-1.5 w-1.5 rounded-full bg-cyan-cursed" />
            Featured
          </span>
        )}

        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-neutral-100 transition-colors group-hover:text-violet-200">
            {project.title}
          </h3>
          <div className="flex gap-3 text-neutral-400">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label={`${project.title} source on GitHub`}>
                <GithubIcon size={22} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan-cursed" aria-label={`${project.title} live site`}>
                <ExternalLink size={22} />
              </a>
            )}
          </div>
        </div>

        <p className="mb-6 leading-relaxed text-neutral-400">{project.description}</p>
      </div>

      <div className="relative mt-auto flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span key={i} className="rounded-md border border-line bg-background/60 px-3 py-1 text-xs font-medium text-neutral-300">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-1 py-24 sm:px-2 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-cursed"></p>
        <h2 className="mb-4 text-3xl font-bold text-neutral-100">Projects</h2>
        <p className="text-neutral-400">Scalable systems, ML pipelines, and full-stack architecture.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}