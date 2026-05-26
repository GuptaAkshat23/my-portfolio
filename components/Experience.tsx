"use client";

import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-3xl mx-auto py-24 px-8 md:px-0">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl font-bold mb-12 text-neutral-100"
      >
        Experience
      </motion.h2>

      <div className="space-y-16">
        {experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative pl-6 border-l border-neutral-800"
          >
            {/* Timeline Dot */}
            <div className="absolute w-3 h-3 bg-neutral-700 rounded-full -left-[6.5px] top-2 border-2 border-neutral-950" />
            
            {/* Header: Role & Date */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
              <h3 className="text-xl font-semibold text-neutral-200">{exp.role}</h3>
              <span className="text-sm font-mono text-neutral-500 whitespace-nowrap">{exp.date}</span>
            </div>

            {/* Subheader: Company & Location */}
            <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
              <span className="font-medium text-emerald-400">{exp.company}</span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="text-neutral-400">{exp.location}</span>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-6">
              {exp.points.map((point, i) => (
                <li key={i} className="text-neutral-400 leading-relaxed flex gap-3 text-[15px]">
                  <span className="text-neutral-600 mt-1">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-xs font-medium rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300"
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