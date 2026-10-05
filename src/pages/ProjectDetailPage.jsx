import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle,
  ShieldCheck,
  Code,
  Layers,
} from "lucide-react";
import BrowserMockup from "../components/BrowserMockup.jsx";
import { projects } from "../data/projects.js";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'engineering' | 'features'

  // Find current project index
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[currentIndex] || projects[0];

  // Navigation to next and previous projects
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="pt-40 pb-32 text-center">
        <h2 className="text-2xl font-bold text-white">Project not found</h2>
        <Link to="/work" className="mt-4 text-blue-400 underline block">
          Return to All Works
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-32 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8">
          <Link to="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/work" className="hover:text-blue-400 transition-colors">
            Work
          </Link>
          <span>/</span>
          <span className="text-blue-400 truncate">{project.title}</span>
        </div>

        {/* Project Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3">
            <span className="text-2xl font-bold text-white">
              {project.number}
            </span>
            <span>/</span>
            <span className="uppercase text-blue-400 font-semibold tracking-wider">
              {project.category}
            </span>
            <span>·</span>
            <span>Completed {project.year}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="mt-3 text-lg sm:text-xl text-neutral-300 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Large Browser Mockup */}
        <div className="mb-12">
          <BrowserMockup
            src={project.image}
            alt={project.title}
            url={`${project.liveUrl}`}
            title={project.title}
            category={project.category}
            liveUrl={project.liveUrl}
            aspectRatio="aspect-16/10"
          />
        </div>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl bg-[#12141c] border border-blue-500/15 mb-12">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              Role
            </span>
            <span className="text-sm font-semibold text-white">
              {project.role}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              Industry
            </span>
            <span className="text-sm font-semibold text-white">
              {project.category}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              Year
            </span>
            <span className="text-sm font-semibold text-white">
              {project.year}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              Direct Action
            </span>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1">
                <span>Visit Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-sm text-neutral-400">
                Available upon request
              </span>
            )}
          </div>
        </div>

        {/* Interactive Case Study Content Tabs */}
        <div className="mb-14">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-8 overflow-x-auto scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                  : "bg-white/5 text-neutral-400 hover:text-white"
              }`}>
              Overview &amp; Architecture
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("features")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                activeTab === "features"
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                  : "bg-white/5 text-neutral-400 hover:text-white"
              }`}>
              Key Deliverables &amp; Features
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("engineering")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                activeTab === "engineering"
                  ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                  : "bg-white/5 text-neutral-400 hover:text-white"
              }`}>
              Tech Stack
            </button>
          </div>

          {/* Tab 1: Overview & Problem/Solution */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-blue-400 mb-3">
                  Project Narrative
                </h3>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#12141c] p-6 sm:p-8 rounded-xl border border-white/5">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span>The Challenge</span>
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>The Engineering Solution</span>
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Key Features */}
          {activeTab === "features" && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-sm font-mono uppercase tracking-wider text-blue-400 mb-4">
                Core Implemented Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div
                    key={feature}
                    className="p-5 rounded-xl bg-[#12141c] border border-white/8 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                    <div>
                      <span className="text-xs font-mono text-neutral-400 block mb-1">
                        Deliverable 0{i + 1}
                      </span>
                      <p className="text-sm font-medium text-white">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Tech Stack */}
          {activeTab === "engineering" && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-sm font-mono uppercase tracking-wider text-blue-400 mb-2">
                Technologies &amp; Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs font-mono text-blue-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-[#12141c] border border-white/5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white">
                  Quality Guarantees
                </h4>
                <ul className="text-xs text-neutral-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>
                      Tested across Chrome, Safari, Firefox, and mobile WebKit
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>
                      Zero layout shift (CLS &lt; 0.05) and instant paint times
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>
                      Accessible keyboard navigation and focus management
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Action Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mb-20">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/30">
                <span>Launch Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider rounded-md border border-white/10 transition-colors flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <Link
            to="/contact"
            className="text-xs font-mono uppercase text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold">
            <span>Commission a similar build</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-white/10">
          <Link
            to={`/work/${prevProject.id}`}
            className="p-6 rounded-xl bg-[#12141c] border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 group-hover:text-blue-400 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Project</span>
            </div>
            <div className="mt-3">
              <span className="text-xs text-neutral-400 font-mono">
                {prevProject.number} · {prevProject.category}
              </span>
              <h4 className="font-display text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {prevProject.title}
              </h4>
            </div>
          </Link>

          <Link
            to={`/work/${nextProject.id}`}
            className="p-6 rounded-xl bg-[#12141c] border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col justify-between text-right sm:text-right">
            <div className="flex items-center justify-end gap-2 text-xs font-mono text-neutral-400 group-hover:text-blue-400 transition-colors">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <div className="mt-3">
              <span className="text-xs text-neutral-400 font-mono">
                {nextProject.number} · {nextProject.category}
              </span>
              <h4 className="font-display text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {nextProject.title}
              </h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
