import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MessageSquare, ArrowUpRight, Github, Linkedin, Twitter, Check, Send, Copy, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personal.js';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const { contact } = personalInfo;

  const initialType = searchParams.get('type') || 'New Website';
  const initialScope = searchParams.get('scope') || '';

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: initialType,
    timeline: 'Within 1 Month',
    budget: 'Flexible',
    message: initialScope ? `Scope details: ${initialScope}` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (searchParams.get('type')) {
      setFormState((prev) => ({
        ...prev,
        projectType: searchParams.get('type'),
        message: searchParams.get('scope') ? `Selected Scope: ${searchParams.get('scope')}` : prev.message,
      }));
    }
  }, [searchParams]);

  const projectTypes = [
    'New Website',
    'E-Commerce Store',
    'Frontend / Dev Role',
    'Website Redesign',
    'Custom Web App',
  ];

  const timelines = [
    'ASAP / 1-2 Weeks',
    'Within 1 Month',
    '2-3 Months',
    'Flexible',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Tennet Inquiry] ${formState.projectType} from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nInquiry Type: ${formState.projectType}\nTimeline: ${formState.timeline}\nBudget: ${formState.budget}\n\nProject Brief:\n${formState.message}`
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi Jamiu / Tennet,\nMy name is ${formState.name || 'a visitor'} and I'm reaching out about a ${formState.projectType}.\nTimeline: ${formState.timeline}\nDetails: ${formState.message || 'I would like to discuss working together.'}`
    );
    const cleanNumber = contact.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-32 pb-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct channels and headline */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Let's Connect</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
              LET'S BUILD SOMETHING.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              Have a project, business idea, or website that needs to exist? Or are you hiring for a frontend engineering role? Let's discuss requirements, timelines, and how to bring it to life.
            </p>

            {/* Direct Cards */}
            <div className="mt-10 space-y-4">
              {/* Copy Email Button Card */}
              <div className="p-4 rounded-xl bg-[#12141c] border border-blue-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Direct Email
                    </span>
                    <span className="text-sm font-semibold text-white font-mono">{contact.email}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded bg-white/5 hover:bg-blue-600 text-xs text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Card */}
              {contact.whatsappNumber && (
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full group flex items-center justify-between p-4 rounded-xl bg-[#12141c] border border-emerald-500/20 hover:border-emerald-500/50 transition-all text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500 text-emerald-400 group-hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                        Instant WhatsApp Chat
                      </span>
                      <span className="text-sm font-semibold text-white">Chat Directly with Developer</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform" />
                </button>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                Professional Networks
              </span>
              <div className="flex items-center gap-4 text-neutral-400">
                {contact.github && (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {contact.twitter && (
                  <a
                    href={contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>X</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#12141c] border border-blue-500/30 shadow-2xl">
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                Project Inquiry &amp; Brief Builder
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Fill in the details below to email me directly or launch a formatted WhatsApp chat.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-blue-950/30 border border-blue-500/40 text-center space-y-4">
                  <Check className="w-10 h-10 text-blue-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white">Inquiry Prepared</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Your email client has opened with your project brief. You can also click below to chat on WhatsApp if you prefer a quick direct reply!
                  </p>
                  <div className="pt-2 flex justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-md flex items-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs rounded-md cursor-pointer"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Inquiry Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormState({ ...formState, projectType: type })}
                          className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                            formState.projectType === type
                              ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                              : 'bg-[#0d0f15] text-neutral-400 hover:text-white border border-white/5'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Target Delivery Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelines.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormState({ ...formState, timeline: time })}
                          className={`p-2 text-xs rounded-md text-center transition-all cursor-pointer ${
                            formState.timeline === time
                              ? 'bg-blue-600 text-white font-semibold'
                              : 'bg-[#0d0f15] text-neutral-400 hover:text-white border border-white/5'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-neutral-400 mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1017] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-neutral-400 mb-1">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1017] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-neutral-400 mb-1">
                      Project Goals / Scope Notes
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your business, the website you need, or the role you are looking to fill..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1017] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Email ↗</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="py-3.5 px-5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp Quick Send</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
