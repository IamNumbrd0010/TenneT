import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Eye, Code, Layers, ShieldCheck, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import BrowserMockup from '../components/BrowserMockup.jsx';
import { projects } from '../data/projects.js';
import { personalInfo } from '../data/personal.js';
import { services } from '../data/services.js';

export default function HomePage() {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const activeProject = projects[activePreviewIndex] || projects[0];
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="relative pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pb-20 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
          {/* Top availability & domain kicker */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 font-mono mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Available for New Projects &amp; Roles</span>
            </span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <span className="text-neutral-300">Web Developer &amp; Creative Studio</span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <span className="text-blue-400/90">React · JavaScript · Modern Web</span>
          </div>

          {/* Main Grid: Headline & Visual Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline and Positioning */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Websites that make ideas feel real.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
                Tennet creates modern websites and digital experiences for businesses, brands, and ideas. Led by an independent developer combining intentional design with rock-solid frontend code.
              </p>

              {/* Primary Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/work"
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-all duration-200 shadow-xl shadow-blue-600/25 flex items-center gap-2 cursor-pointer group"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3.5 bg-white/5 hover:bg-blue-600/15 text-neutral-200 hover:text-white font-semibold text-xs uppercase tracking-wider rounded-md border border-white/10 hover:border-blue-500/40 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </Link>
              </div>

              {/* Factual credibility markers */}
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md">
                <div>
                  <span className="block font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">100%</span>
                  <span className="text-xs text-neutral-400 mt-0.5 block">Custom Handcrafted</span>
                </div>
                <div>
                  <span className="block font-mono text-xl sm:text-2xl font-bold text-blue-400 tabular-nums">Mobile</span>
                  <span className="text-xs text-neutral-400 mt-0.5 block">First Responsive</span>
                </div>
                <div>
                  <span className="block font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">0%</span>
                  <span className="text-xs text-neutral-400 mt-0.5 block">Generic Templates</span>
                </div>
              </div>
            </div>

            {/* Right Column: Layered Browser Showcase & Interactive Switcher */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                <BrowserMockup
                  src={activeProject.image}
                  alt={activeProject.title}
                  url={`https://${activeProject.id}.tennet.studio`}
                  title={activeProject.title}
                  category={activeProject.category}
                  liveUrl={activeProject.liveUrl}
                  className="w-full"
                />

                {/* Floating Project Metadata Overlay */}
                <div className="absolute -bottom-5 right-4 sm:right-6 bg-[#131722]/95 backdrop-blur-md border border-blue-500/20 p-3 sm:p-4 rounded-xl shadow-2xl max-w-xs flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Preview {activeProject.number}</span>
                    </div>
                    <div className="font-semibold text-white text-sm truncate">{activeProject.title}</div>
                    <div className="text-xs text-neutral-400 truncate">{activeProject.category}</div>
                  </div>
                  <Link
                    to={`/work/${activeProject.id}`}
                    className="p-2.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Inspect case study"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Interactive Project Switcher Ribbon */}
              <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                <span className="text-xs text-neutral-400 font-mono mr-2 shrink-0">Switch Preview:</span>
                {projects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => setActivePreviewIndex(idx)}
                    className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      activePreviewIndex === idx
                        ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30 border border-blue-400/50'
                        : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    {proj.number} · {proj.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANIMATED MARQUEE RIBBON */}
      <div className="py-4 border-y border-blue-500/15 bg-[#08090e] overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center text-xs font-mono tracking-widest text-blue-300/80">
          <span className="mx-6">SELECTED WORKS</span>
          <span className="text-blue-500">✦</span>
          <span className="mx-6">MODERN REACT &amp; JAVASCRIPT</span>
          <span className="text-blue-500">✦</span>
          <span className="mx-6">DESIGN THINKING &amp; ART DIRECTION</span>
          <span className="text-blue-500">✦</span>
          <span className="mx-6">MOBILE FIRST RESPONSIVE</span>
          <span className="text-blue-500">✦</span>
          <span className="mx-6">ACCESSIBLE &amp; LIGHTNING FAST</span>
          <span className="text-blue-500">✦</span>
          <span className="mx-6">WHATSAPP &amp; E-COMMERCE WORKFLOWS</span>
          <span className="text-blue-500">✦</span>
          <span className="mx-6">ZERO TEMPLATES · HANDCRAFTED CODE</span>
          <span className="text-blue-500">✦</span>
          <span className="mx-6">SELECTED WORKS</span>
          <span className="text-blue-500">✦</span>
          <span className="mx-6">MODERN REACT &amp; JAVASCRIPT</span>
          <span className="text-blue-500">✦</span>
          <span className="mx-6">DESIGN THINKING &amp; ART DIRECTION</span>
          <span className="text-blue-500">✦</span>
          <span className="mx-6">MOBILE FIRST RESPONSIVE</span>
          <span className="text-blue-500">✦</span>
          <span className="mx-6">ACCESSIBLE &amp; LIGHTNING FAST</span>
        </div>
      </div>

      {/* 3. BRAND STATEMENT & PHILOSOPHY */}
      <section className="py-24 sm:py-32 bg-[#0c0d14] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>The Tennet Stance</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              Design. Development. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
                Digital experiences.
              </span>
            </h2>

            <p className="mt-8 text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
              Tennet combines design thinking and modern frontend engineering to craft websites that are visually compelling, responsive across every device, and built to drive results. No bloated frameworks or generic templates—just thoughtful code and intentional interfaces.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/8">
              <div className="p-5 rounded-xl bg-[#12141c] border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">01 / Aesthetics</span>
                <h3 className="text-base font-semibold text-white">Visual Distinction</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mt-2">
                  Clean editorial layouts, disciplined typography, and tailored art direction that elevate your brand.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#12141c] border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">02 / Engineering</span>
                <h3 className="text-base font-semibold text-white">Performant Code</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mt-2">
                  Built strictly with modern React, semantic structure, and snappy micro-interactions that never stutter.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#12141c] border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">03 / Utility</span>
                <h3 className="text-base font-semibold text-white">Real Outcomes</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mt-2">
                  Streamlined client booking, WhatsApp order workflows, and clear information flow that converts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURATED SELECTED WORK HIGHLIGHT */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-white/10 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Featured Creations</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                Selected Work
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              <span>Explore All Archive Works ({projects.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Projects Gallery */}
          <div className="space-y-28 sm:space-y-36">
            {featuredProjects.map((project, index) => {
              const isReversed = index % 2 === 1;

              return (
                <article
                  key={project.id}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Visual Preview Column */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Link to={`/work/${project.id}`} className="block group">
                      <BrowserMockup
                        src={project.image}
                        alt={project.title}
                        url={`https://${project.id}.tennet.studio`}
                        title={project.title}
                        category={project.category}
                        liveUrl={project.liveUrl}
                        className="w-full"
                      />
                    </Link>
                  </div>

                  {/* Information Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
                    <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3">
                      <span className="text-2xl font-bold text-white tracking-tighter">{project.number}</span>
                      <span aria-hidden="true" className="text-neutral-600">/</span>
                      <span className="uppercase tracking-widest text-blue-400 font-semibold">{project.category}</span>
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                      <Link to={`/work/${project.id}`} className="hover:text-blue-400 transition-colors">
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-sm font-medium text-neutral-400 mt-1">
                      {project.tagline}
                    </p>

                    <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech row */}
                    <div className="mt-5 pt-5 border-t border-white/5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                        Core Technologies
                      </span>
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-neutral-300 font-mono">
                        {project.technologies.map((tech, i) => (
                          <React.Fragment key={tech}>
                            <span className="hover:text-blue-400 transition-colors">{tech}</span>
                            {i < project.technologies.length - 1 && (
                              <span className="text-neutral-600 select-none">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mt-5 space-y-1.5">
                      {project.features.slice(0, 2).map((feature) => (
                        <div key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        to={`/work/${project.id}`}
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-lg shadow-blue-600/25"
                      >
                        <span>Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-md border border-white/10 transition-colors flex items-center gap-1.5"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                          <span>Live Site</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#12141c] hover:bg-blue-600 text-white text-xs font-mono uppercase tracking-widest rounded-lg border border-blue-500/20 hover:border-blue-500 transition-all duration-300 shadow-xl"
            >
              <span>View All Projects in Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICES TEASER & ESTIMATOR PREVIEW */}
      <section className="py-24 sm:py-32 bg-[#0c0d14] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Capabilities</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                What I Build
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5"
            >
              <span>Explore Services &amp; Interactive Cost Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="bg-[#12141c] p-7 rounded-xl border border-white/8 hover:border-blue-500/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                    <span className="text-blue-400 font-bold">{service.number}</span>
                    <span>{service.category}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium mt-1">{service.summary}</p>
                  <p className="text-sm text-neutral-300 mt-4 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link
                    to="/services"
                    className="text-xs font-mono uppercase text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    <span>View deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOUNDER SPOTLIGHT TEASER */}
      <section className="py-24 sm:py-32 relative bg-[#090a0e]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#12141c] p-8 sm:p-12 rounded-2xl border border-blue-500/20 shadow-2xl relative overflow-hidden">
            {/* Ambient blue backdrop glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="lg:col-span-4">
              <div className="aspect-square rounded-xl overflow-hidden border border-blue-500/30 relative">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#0a0b0e]/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Studio Lead</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-center space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
                <span>The Person Behind Tennet</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                "I build modern websites and digital experiences for businesses, brands, and ideas."
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                My name is <strong className="text-white font-semibold">{personalInfo.name}</strong>. Tennet began as my personal web development practice and is positioned to grow into a multidisciplinary creative web studio. Whether you are hiring a dedicated frontend developer or commissioning a custom digital flagship, I bring intentionality and clean execution to every project.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-1.5"
                >
                  <span>Read Full Bio &amp; Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-md border border-white/10 transition-colors"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0b0e] to-[#06080e] border-t border-blue-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Ready for Q4 Commissions &amp; Engineering Roles</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            LET'S BUILD SOMETHING.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Have a project, business idea, or website that needs to exist? Or are you hiring for a frontend engineering role? Let's discuss scope and timeline.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-widest rounded-lg transition-all shadow-xl shadow-blue-600/30 flex items-center gap-2"
            >
              <span>Start a Conversation ↗</span>
            </Link>
            <Link
              to="/work"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white font-semibold text-xs uppercase tracking-widest rounded-lg border border-white/15 transition-all"
            >
              <span>Browse All Work</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
