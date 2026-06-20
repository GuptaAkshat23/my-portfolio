"use client";

import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-3xl px-1 py-24 sm:px-2 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-cursed"></p>
        <h2 className="text-3xl font-bold text-neutral-100">Where I&apos;ve worked</h2>
      </motion.div>

      <div className="space-y-16">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative border-l border-line pl-6"
          >
            {/* Timeline node */}
            <div className="absolute -left-[6.5px] top-2 h-3 w-3 rounded-full border-2 border-background bg-violet-cursed" />

            <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <h3 className="text-xl font-semibold text-neutral-200">{exp.role}</h3>
              <span className="whitespace-nowrap font-mono text-sm text-neutral-500">{exp.date}</span>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
              <span className="font-medium text-cyan-cursed">{exp.company}</span>
              <span className="hidden text-neutral-600 sm:inline">•</span>
              <span className="text-neutral-400">{exp.location}</span>
            </div>

            <ul className="mb-6 space-y-3">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-neutral-400">
                  <span className="mt-1 text-violet-cursed">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-md border border-line bg-surface px-3 py-1 text-xs font-medium text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}