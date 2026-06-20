"use client";

import { motion } from "framer-motion";
import { education, skills, achievements } from "../data/portfolio";
import { GraduationCap, Code2, Layers, Wrench, Cpu, Trophy } from "lucide-react";

export default function EducationSkills() {
  return (
    <section id="education-skills" className="mx-auto w-full max-w-5xl px-1 py-24 sm:px-2 md:px-0">

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

        {/* EDUCATION & ACHIEVEMENTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <div>
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-neutral-100">
              <GraduationCap className="text-violet-cursed" /> Education
            </h2>

            <div className="rounded-2xl border border-line bg-surface/60 p-6 md:p-8">
              <h3 className="mb-1 text-xl font-bold text-neutral-200">{education.school}</h3>
              <p className="mb-4 font-medium text-cyan-cursed">{education.degree}</p>
              <p className="mb-6 font-mono text-sm text-neutral-500">{education.date}</p>
              <p className="mb-6 text-neutral-400">{education.description}</p>

              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-300">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, index) => (
                  <span key={index} className="rounded-md border border-line bg-background/60 px-3 py-1 text-xs font-medium text-neutral-400">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-neutral-100">
              <Trophy className="text-violet-cursed" size={24} /> Key Achievements
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 rounded-xl border border-line/60 bg-surface/40 p-4">
                  <span className="mt-1 text-cyan-cursed">▹</span>
                  <p className="text-sm leading-relaxed text-neutral-300">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-neutral-100">
            <Cpu className="text-violet-cursed" /> Technical Arsenal
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-300">
                <Code2 size={16} className="text-cyan-cursed" /> Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="rounded-md border border-line bg-surface px-3 py-1 text-sm font-medium text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-300">
                <Layers size={16} className="text-cyan-cursed" /> Frameworks &amp; Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="rounded-md border border-line bg-surface px-3 py-1 text-sm font-medium text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-300">
                <Wrench size={16} className="text-cyan-cursed" /> Developer Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="rounded-md border border-line bg-surface px-3 py-1 text-sm font-medium text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-300">
                <Layers size={16} className="text-cyan-cursed" /> Domains
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.domains.map((skill, index) => (
                  <span key={index} className="rounded-md border border-line bg-surface px-3 py-1 text-sm font-medium text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}