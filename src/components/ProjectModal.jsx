import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import BrowserMockup from './BrowserMockup.jsx';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    // Lock body scroll while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // ESC key listener
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0e1017] rounded-2xl border border-white/10 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#12141c] border-b border-white/8 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-white font-bold">{project.number}</span>
            <span>/</span>
            <span className="text-[#ff5a1f] uppercase tracking-wider">{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Project Title & Tagline */}
          <div>
            <h2 id="modal-title" className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-base text-neutral-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Browser Preview Frame */}
          <BrowserMockup
            src={project.image}
            alt={project.title}
            url={`https://${project.id}.tennet.studio`}
            title={project.title}
            category={project.category}
            liveUrl={project.liveUrl}
          />

          {/* Overview & Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-white/8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                My Role
              </span>
              <span className="text-sm font-semibold text-white">{project.role}</span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                Industry
              </span>
              <span className="text-sm font-semibold text-white">{project.category}</span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                Year Built
              </span>
              <span className="text-sm font-semibold text-white">{project.year}</span>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#ff5a1f] mb-2">Project Brief</h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#12141c] p-6 rounded-xl border border-white/5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">The Challenge</h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">The Solution</h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Implemented Features */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-white mb-3">Key Features &amp; Deliverables</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-[#ff5a1f] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                {project.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 rounded border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-6 border-t border-white/8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#ff5a1f] hover:bg-[#ff7a45] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-md border border-white/10 transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Close Window (Esc)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
