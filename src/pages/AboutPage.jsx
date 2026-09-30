import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Github, Linkedin, Twitter, CheckCircle2, ArrowRight, ArrowUpRight, Terminal, Sparkles, Code2 } from 'lucide-react';
import { personalInfo } from '../data/personal.js';

export default function AboutPage() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('All');
  const { contact, skills } = personalInfo;

  const filteredSkills =
    selectedSkillCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === selectedSkillCategory);

  return (
    <div className="pt-32 pb-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Studio Identity</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Built by a developer.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
              Growing into a studio.
            </span>
          </h1>

          <p className="mt-4 text-lg text-neutral-300 max-w-2xl leading-relaxed font-light">
            Tennet operates at the intersection of aesthetic discipline and technical execution.
          </p>
        </div>

        {/* Section 1: The Person Behind Tennet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-blue-500/20 bg-[#12141c] p-6 shadow-2xl relative">
              <div className="aspect-square rounded-xl overflow-hidden border border-white/8 relative bg-[#0e1017] mb-6">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#0a0b0e]/90 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-blue-300 border border-blue-500/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>{personalInfo.availability}</span>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-white">{personalInfo.name}</h2>
              <p className="text-sm font-mono text-blue-400 mt-1">{personalInfo.role}</p>

              <div className="flex items-center gap-2 text-xs text-neutral-400 mt-3 font-mono">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{personalInfo.location}</span>
              </div>

              {/* Direct links */}
              <div className="mt-6 pt-6 border-t border-white/8 flex flex-col space-y-2.5">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-between text-xs font-mono text-neutral-300 hover:text-white p-2.5 rounded-lg bg-white/5 hover:bg-blue-600/20 hover:border-blue-500/30 border border-transparent transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span className="truncate">{contact.email}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center gap-4 text-neutral-400">
                {contact.github && (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-blue-400 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-blue-400 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {contact.twitter && (
                  <a
                    href={contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-blue-400 transition-colors"
                    title="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              A Personal Developer Practice with Studio Ambitions
            </h3>

            <div className="space-y-4 text-base text-neutral-300 leading-relaxed font-light">
              <p>
                My name is <strong className="text-white font-medium">{personalInfo.name}</strong>, and I founded Tennet to build digital spaces that stand out from the endless wave of generic web templates.
              </p>
              <p>
                {personalInfo.bio}
              </p>
              <p>
                {personalInfo.extendedBio}
              </p>
            </div>

            {/* Dual Purpose Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-xl bg-[#12141c] border border-blue-500/20">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-2">
                  For Hiring Teams &amp; Recruiters
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  I understand modern frontend engineering deeply: component lifecycle, reusability, semantic HTML5, zero-layout-shift performance, and pixel-accurate implementation from design specs.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#12141c] border border-blue-500/20">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-2">
                  For Clients &amp; Business Founders
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  I eliminate the friction of traditional agencies. You get direct access to the developer, faster turnaround, zero bureaucratic bloat, and custom solutions tailored to your revenue goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Interactive Skills Matrix */}
        <div className="mb-24 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/5 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
                <Terminal className="w-3.5 h-3.5" />
                <span>Verified Stack</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Technical Capabilities &amp; Workflow
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {['All', 'Core Frontend', 'Design & UI', 'Tools & Workflow'].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedSkillCategory(category)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                    selectedSkillCategory === category
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-white/5 text-neutral-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-[#12141c] border border-white/5 hover:border-blue-500/30 transition-all flex items-center justify-between"
              >
                <div>
                  <h4 className="font-medium text-white text-sm">{skill.name}</h4>
                  <span className="text-[11px] font-mono text-neutral-400">{skill.category}</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Principles */}
        <div className="pt-12 border-t border-white/10">
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-8">
            The 4 Guiding Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInfo.principles.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-xl bg-[#12141c] border border-white/8 hover:border-blue-500/30 transition-all"
              >
                <span className="font-mono text-2xl font-bold text-blue-400 block mb-3">{p.number}</span>
                <h3 className="font-display text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center pt-12 border-t border-white/5">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-widest rounded-lg transition-colors shadow-lg shadow-blue-600/30"
          >
            <span>Let's Discuss Opportunities ↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
