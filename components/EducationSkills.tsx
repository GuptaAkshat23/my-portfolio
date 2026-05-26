"use client";

import { motion } from "framer-motion";
import { education, skills } from "../data/portfolio";
import { GraduationCap, Code2, Layers, Wrench, Cpu } from "lucide-react";

export default function EducationSkills() {
  return (
    <section id="education-skills" className="w-full max-w-5xl mx-auto py-24 px-8 md:px-0">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* EDUCATION COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-neutral-100 mb-8 flex items-center gap-3">
            <GraduationCap className="text-emerald-500" /> Education
          </h2>
          
          <div className="p-6 md:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <h3 className="text-xl font-bold text-neutral-200 mb-1">{education.school}</h3>
            <p className="text-emerald-400 font-medium mb-4">{education.degree}</p>
            <p className="text-sm text-neutral-500 font-mono mb-6">{education.date}</p>
            <p className="text-neutral-400 mb-6">{education.description}</p>
            
            <h4 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wider">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, index) => (
                <span key={index} className="px-3 py-1 text-xs font-medium rounded-md bg-neutral-950 border border-neutral-800 text-neutral-400">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SKILLS COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-neutral-100 mb-8 flex items-center gap-3">
            <Cpu className="text-emerald-500" /> Technical Arsenal
          </h2>

          <div className="space-y-6">
            
            {/* Languages */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-300 mb-3 flex items-center gap-2">
                <Code2 size={16} className="text-neutral-500"/> Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="px-3 py-1 text-sm font-medium rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-300 mb-3 flex items-center gap-2">
                <Layers size={16} className="text-neutral-500"/> Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="px-3 py-1 text-sm font-medium rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-300 mb-3 flex items-center gap-2">
                <Wrench size={16} className="text-neutral-500"/> Developer Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="px-3 py-1 text-sm font-medium rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}