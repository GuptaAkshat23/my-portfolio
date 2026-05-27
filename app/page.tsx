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

const LeetCodeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.543l3.995 3.739 6.22 5.705c.473.477 1.164.723 1.846.737.763-.031 1.485-.278 2.083-.718l-.001-.004c.145-.106.281-.225.405-.353l.004-.002c.328-.351.583-.75.753-1.182.164-.407.253-.842.261-1.282.008-.439-.063-.873-.21-1.282a3.652 3.652 0 0 0-.583-1.077l-1.05-1.026-.002-.001-4.718-4.636c-.452-.444-1.121-.692-1.782-.692-.66 0-1.33.248-1.782.692l-2.02 1.968-.004.004c-.394.396-.948.583-1.492.545-.536-.046-1.037-.308-1.375-.724a2.002 2.002 0 0 1-.161-2.12c.231-.416.591-.749 1.023-.951l.004-.002 2.015-1.961c.907-.887 1.355-2.043 1.355-3.232 0-1.188-.448-2.344-1.355-3.232l-2.015-1.962a1.996 1.996 0 0 1-.363-2.399 2.008 2.008 0 0 1 1.638-.971c.545-.038 1.098.15 1.492.546l2.02 1.967c.452.445 1.121.692 1.782.692.66 0 1.33-.247 1.782-.692l4.718-4.636c.452-.444.693-1.042.693-1.677 0-.635-.241-1.233-.693-1.677l-6.22-5.705A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.18 1.18 0 0 0-.831.352l-2.066 2.044a1.2 1.2 0 0 0-.27 1.35 1.168 1.168 0 0 0 .96.65c.307.014.606-.09.83-.292l2.067-2.045a1.183 1.183 0 0 0 .346-.84 1.196 1.196 0 0 0-1.036-1.219z" />
  </svg>
);

const CodeforcesIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
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
          <a href={heroData.links.github} title="GitHub" target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-800 rounded-lg hover:bg-neutral-900 text-neutral-300 transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href={heroData.links.linkedin} title="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-800 rounded-lg hover:bg-neutral-900 text-neutral-300 transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href={heroData.links.leetcode} title="LeetCode" target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-800 rounded-lg hover:bg-neutral-900 text-neutral-300 transition-colors">
            <LeetCodeIcon size={20} />
          </a>
          <a href={heroData.links.codeforces} title="Codeforces" target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-800 rounded-lg hover:bg-neutral-900 text-neutral-300 transition-colors">
            <CodeforcesIcon size={20} />
          </a>
          <a href={heroData.links.email} title="Email" className="p-3 border border-neutral-800 rounded-lg hover:bg-neutral-900 text-neutral-300 transition-colors">
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