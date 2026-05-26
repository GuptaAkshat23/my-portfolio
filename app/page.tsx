"use client";

import { motion } from "framer-motion";
import { heroData } from "../data/portfolio";
import { MapPin, Mail, FileText } from "lucide-react";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import EducationSkills from "../components/EducationSkills"; // Added EducationSkills Import

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-neutral-950 text-neutral-50 selection:bg-neutral-800">
      
      {/* Background ambient glow (subtle, non-distracting) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <div className="max-w-3xl w-full z-10 flex flex-col items-start pt-20">
        
        {/* Role & Location (The 5-Second Rule) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-4 mb-8 text-sm font-medium text-neutral-400"
        >
          <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {heroData.role}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-neutral-500" />
            {heroData.location}
          </span>
        </motion.div>

        {/* Name Reveal */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400"
        >
          {heroData.name}.
        </motion.h1>

        {/* Clear Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed"
        >
          {heroData.description}
        </motion.p>

        {/* Accessible Contact & Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a href={heroData.links.resume} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2">
             <FileText size={18} /> View Resume
          </a>
          <a href={heroData.links.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-800 rounded-lg hover:bg-neutral-900 text-neutral-300 transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href={heroData.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-800 rounded-lg hover:bg-neutral-900 text-neutral-300 transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href={heroData.links.email} className="p-3 border border-neutral-800 rounded-lg hover:bg-neutral-900 text-neutral-300 transition-colors">
            <Mail size={20} />
          </a>
        </motion.div>

      </div>
      
      {/* PROFESSIONAL EXPERIENCE SECTION */}
      <Experience />

      {/* PROOF OF WORK SECTION */}
      <Projects />

      {/* EDUCATION & SKILLS SECTION */}
      <EducationSkills />

    </main>
  );
}