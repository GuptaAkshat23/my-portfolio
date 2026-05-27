"use client";

import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto py-24 px-8 md:px-0">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-neutral-100 mb-4">Proof of Work</h2>
        <p className="text-neutral-400">Scalable systems, ML pipelines, and full-stack architecture.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            <div>
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-2xl font-bold text-neutral-200 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                {/* Action Links (GitHub / Live) */}
                <div className="flex gap-3 text-neutral-400">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <GithubIcon size={22} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-neutral-400 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-xs font-medium rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300"
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