import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Minus, Check, ArrowRight, Calculator, HelpCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { services } from '../data/services.js';

export default function ServicesPage() {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(0);

  // Interactive Estimator State
  const [projectScope, setProjectScope] = useState({
    type: 'Business Website',
    pages: '4-7 Pages',
    features: ['Mobile First Responsive', 'SEO Optimization'],
  });

  const availableFeatures = [
    { id: 'whatsapp', name: 'WhatsApp Direct Ordering', tag: 'High-Conversion' },
    { id: 'ecommerce', name: 'Custom Product Catalog / Filters', tag: 'E-Commerce' },
    { id: 'animations', name: 'Custom Interactive Animations', tag: 'Creative' },
    { id: 'cms', name: 'Database / Realtime Sync (Firebase)', tag: 'Full-Stack' },
    { id: 'booking', name: 'Consultation & Booking Scheduler', tag: 'Business' },
  ];

  const handleToggleFeature = (featureName) => {
    setProjectScope((prev) => {
      const exists = prev.features.includes(featureName);
      return {
        ...prev,
        features: exists
          ? prev.features.filter((f) => f !== featureName)
          : [...prev.features, featureName],
      };
    });
  };

  // Estimated turnaround calculation
  const getEstimatedTimeline = () => {
    let base = 2; // weeks
    if (projectScope.pages === '8+ Pages') base += 2;
    if (projectScope.type === 'E-Commerce Websites' || projectScope.type === 'Custom Web Experiences') base += 1.5;
    base += projectScope.features.length * 0.5;
    return `${Math.floor(base)}-${Math.ceil(base + 1.5)} Weeks`;
  };

  const handleProceedWithEstimate = () => {
    const briefNote = `Project Type: ${projectScope.type}, Scope: ${projectScope.pages}, Add-ons: ${projectScope.features.join(', ')}`;
    navigate(`/contact?type=${encodeURIComponent(projectScope.type)}&scope=${encodeURIComponent(briefNote)}`);
  };

  // FAQs
  const faqs = [
    {
      q: 'Do you use WordPress or website builder templates?',
      a: 'Never. Every website built by Tennet is custom-coded using modern React and clean JavaScript. This guarantees maximum page speed, perfect responsive layout fidelity, clean SEO semantic tags, and complete code ownership without plugin vulnerabilities.'
    },
    {
      q: 'Can you work as an individual frontend engineer on an existing team?',
      a: 'Yes. In addition to full studio commissions, I am available for full-time frontend engineering roles and contract developer sprints to implement UI components and features.'
    },
    {
      q: 'How does the direct WhatsApp checkout work for businesses?',
      a: 'Instead of forcing customers through complicated payment gateway setups that cause high drop-off rates in direct markets, we build an automated ordering pipeline. When the customer picks items and options, a pre-formatted order message opens directly in your business WhatsApp.'
    },
    {
      q: 'What is required to get started on a project?',
      a: 'A quick discovery conversation to clarify goals, timeline, and deliverables. Once aligned, we kick off with wireframing and design direction before moving straight into code.'
    }
  ];

  return (
    <div className="pt-32 pb-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Studio Offerings</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            What I Build
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Full-cycle web development from initial wireframes to production deployment. Every project is engineered for speed, responsiveness, and conversion.
          </p>
        </div>

        {/* 1. Services List */}
        <div className="divide-y divide-white/10 border-y border-white/10 mb-24">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.title}
                className={`transition-colors duration-200 ${
                  isExpanded ? 'bg-blue-950/10' : 'hover:bg-white/[0.01]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  className="w-full py-8 sm:py-10 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                    <span className="font-mono text-sm sm:text-base text-neutral-400 group-hover:text-blue-400 transition-colors tabular-nums">
                      {service.number}
                    </span>

                    <div>
                      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {service.title}
                      </h2>
                      <span className="text-xs font-mono text-blue-400 uppercase tracking-wider mt-1 block">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline text-xs text-neutral-400 max-w-xs text-right line-clamp-1">
                      {service.summary}
                    </span>
                    <div className="p-2 rounded-full border border-white/10 text-neutral-400 group-hover:text-white group-hover:border-blue-500/50 transition-all shrink-0">
                      {isExpanded ? <Minus className="w-4 h-4 text-blue-400" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="pb-8 pt-2 pl-0 sm:pl-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-white/5">
                    <div className="md:col-span-7">
                      <p className="text-base text-neutral-300 leading-relaxed font-light">
                        {service.description}
                      </p>

                      <div className="mt-6">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-400 hover:text-blue-300 uppercase tracking-wider transition-colors"
                        >
                          <span>Commission this service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-[#12141c] p-5 rounded-xl border border-blue-500/15">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block mb-3">
                        Included Deliverables
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 2. Interactive Project Scope & Turnaround Estimator */}
        <div className="mb-24 p-8 sm:p-12 rounded-2xl bg-[#12141c] border border-blue-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Planner</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Interactive Project Scope Estimator
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mb-8">
            Select your anticipated scope and feature requirements to calculate typical delivery timelines and prepare an instant project brief.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Type */}
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  1. Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Business Website', 'E-Commerce Store', 'Custom Web App'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectScope({ ...projectScope, type })}
                      className={`p-3 text-xs rounded-lg text-left transition-all cursor-pointer ${
                        projectScope.type === type
                          ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                          : 'bg-[#0d0f15] text-neutral-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pages */}
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  2. Breadth / Page Count
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1-3 Pages', '4-7 Pages', '8+ Pages'].map((pages) => (
                    <button
                      key={pages}
                      type="button"
                      onClick={() => setProjectScope({ ...projectScope, pages })}
                      className={`p-3 text-xs rounded-lg text-center transition-all cursor-pointer ${
                        projectScope.pages === pages
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'bg-[#0d0f15] text-neutral-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {pages}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features Add-ons */}
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  3. Key Interactive Capabilities
                </label>
                <div className="space-y-2">
                  {availableFeatures.map((feat) => {
                    const isChecked = projectScope.features.includes(feat.name);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => handleToggleFeature(feat.name)}
                        className={`w-full p-3 rounded-lg text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-blue-950/40 border border-blue-500/40 text-white'
                            : 'bg-[#0d0f15] text-neutral-400 hover:text-white border border-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center ${
                              isChecked ? 'bg-blue-600 text-white' : 'border border-neutral-600'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span>{feat.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-blue-400/80">{feat.tag}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 bg-[#0e1017] p-6 sm:p-8 rounded-xl border border-blue-500/30 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block mb-2">
                  Estimated Delivery Timeline
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-mono text-white mb-2 tabular-nums">
                  {getEstimatedTimeline()}
                </div>
                <p className="text-xs text-neutral-400">
                  Includes full design approval, component development, mobile optimization, and production deployment.
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-400">Selected Type:</span>
                    <span className="font-semibold text-white">{projectScope.type}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-400">Volume:</span>
                    <span className="font-semibold text-white">{projectScope.pages}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-400">Capabilities:</span>
                    <span className="font-semibold text-blue-400">{projectScope.features.length} selected</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleProceedWithEstimate}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer"
                >
                  <span>Submit This Brief for Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Studio Process */}
        <div className="mb-24">
          <div className="mb-10">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
              Methodology
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              From Concept to Launch in 4 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#12141c] border border-white/5">
              <span className="font-mono text-2xl font-bold text-blue-400 block mb-2">01</span>
              <h3 className="font-semibold text-white text-base mb-1">Discovery &amp; Wireframe</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Clarifying business goals, audience expectations, and architectural site structure before touching code.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#12141c] border border-white/5">
              <span className="font-mono text-2xl font-bold text-blue-400 block mb-2">02</span>
              <h3 className="font-semibold text-white text-base mb-1">Visual Design</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Tailored typography, high-contrast layouts, bespoke browser previews, and responsive mobile prototypes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#12141c] border border-white/5">
              <span className="font-mono text-2xl font-bold text-blue-400 block mb-2">03</span>
              <h3 className="font-semibold text-white text-base mb-1">Frontend Engineering</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Clean React component coding, accessibility checks, smooth animations, and API or WhatsApp integration.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#12141c] border border-white/5">
              <span className="font-mono text-2xl font-bold text-blue-400 block mb-2">04</span>
              <h3 className="font-semibold text-white text-base mb-1">Deploy &amp; Support</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Production hosting setup, domain configuration, performance testing, and post-launch handoff documentation.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Frequently Asked Questions */}
        <div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-[#12141c] border border-white/5">
                <h3 className="font-semibold text-white text-base mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
