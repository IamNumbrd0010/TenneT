import React from 'react';
import { Mail, Github, Linkedin, Twitter, MapPin, CheckCircle, ExternalLink, ArrowUpRight, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/personal.js';

export default function PersonBehind() {
  const { contact } = personalInfo;

  return (
    <section className="py-24 sm:py-32 relative bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
            <span>The Human Factor</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Person Behind Tennet
          </h2>
        </div>

        {/* Profile Card & Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Direct Contact Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#12141c] p-6 shadow-2xl relative">
              {/* Photo Frame */}
              <div className="aspect-square rounded-xl overflow-hidden border border-white/8 relative bg-[#0e1017] mb-6">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 bg-[#0a0b0e]/85 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-neutral-300 border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{personalInfo.availability}</span>
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="font-display text-2xl font-bold text-white">{personalInfo.name}</h3>
              <p className="text-sm font-mono text-[#ff5a1f] mt-1">{personalInfo.role}</p>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-neutral-400 mt-3 font-mono">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>{personalInfo.location}</span>
              </div>

              {/* Quick Channels */}
              <div className="mt-6 pt-6 border-t border-white/8 flex flex-col space-y-2.5">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-between text-xs font-mono text-neutral-300 hover:text-white p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#ff5a1f]" />
                    <span className="truncate">{contact.email}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>

                {contact.whatsappNumber && (
                  <a
                    href={`https://wa.me/${contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-mono text-neutral-300 hover:text-white p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp Direct</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                )}
              </div>

              {/* Social Icon Links */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center gap-4 text-neutral-400">
                {contact.github && (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-white transition-colors"
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
                    className="p-2 hover:text-white transition-colors"
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
                    className="p-2 hover:text-white transition-colors"
                    title="X / Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story & Dual Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xl sm:text-2xl font-light text-white leading-relaxed">
              "My name is <strong className="font-semibold text-white">{personalInfo.name}</strong>, and I'm a web developer focused on creating modern, responsive, and purposeful digital experiences."
            </div>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              <p>
                {personalInfo.bio}
              </p>
              <p>
                {personalInfo.extendedBio}
              </p>
            </div>

            {/* Dual Purpose Explainer Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-[#12141c] border border-white/8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#ff5a1f] block mb-2">
                  For Hiring Teams &amp; Recruiters
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  I bring solid React fundamentals, clean component architecture, and high attention to detail. Ready to step into frontend engineering roles and contribute immediately.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#12141c] border border-white/8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#ff5a1f] block mb-2">
                  For Clients &amp; Business Founders
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  I handle the entire web lifecycle—from visual design and responsive coding to WhatsApp/e-commerce checkout integration and production deployment.
                </p>
              </div>
            </div>

            {/* Quick credentials / work ethic points */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                Commitment to Quality
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#ff5a1f]" />
                  <span>Clean, hand-written React code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#ff5a1f]" />
                  <span>Zero unnecessary bundle weight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#ff5a1f]" />
                  <span>Tested on real mobile devices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#ff5a1f]" />
                  <span>Direct, transparent communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
