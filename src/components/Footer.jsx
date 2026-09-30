import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personal.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080c] border-t border-blue-950/40 py-16 text-neutral-400 font-sans text-xs relative overflow-hidden">
      {/* Subtle blue accent glow */}
      <div className="absolute top-0 right-1/3 w-80 h-32 bg-blue-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & positioning */}
          <div className="md:col-span-5 space-y-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-display font-extrabold text-2xl text-white tracking-tight hover:text-blue-400 transition-colors"
            >
              <span>TENNET</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Personal web development practice and growing creative studio. Creating modern websites and digital experiences for businesses, brands, and ideas.
            </p>
            <div className="text-[11px] font-mono text-blue-400 pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Independent Practice · Available Worldwide</span>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-white text-xs uppercase tracking-wider block">
              Pages
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-blue-400 transition-colors">
                  Selected &amp; All Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About &amp; Developer
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Services &amp; Cost Estimator
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-blue-400 transition-colors">
                  The Studio Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries & Social */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-white text-xs uppercase tracking-wider block">
              Direct Contact
            </span>
            <p className="text-sm text-neutral-300 font-mono">
              {personalInfo.contact.email}
            </p>
            <p className="text-xs text-neutral-400">
              Open for full-time engineering roles, freelance builds, and creative studio collaborations.
            </p>
            <div className="pt-2 flex items-center gap-4 text-neutral-400">
              {personalInfo.contact.github && (
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors p-1"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {personalInfo.contact.linkedin && (
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors p-1"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {personalInfo.contact.twitter && (
                <a
                  href={personalInfo.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors p-1"
                  title="X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="hover:text-blue-400 transition-colors p-1"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-neutral-400">
            <span>© {new Date().getFullYear()} TENNET. All rights reserved.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Designed &amp; built by {personalInfo.name}.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-blue-400 transition-colors font-mono cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
