import React, { useState } from 'react';
import { Mail, MessageSquare, ArrowUpRight, Github, Linkedin, Twitter, Check, Send } from 'lucide-react';
import { personalInfo } from '../data/personal.js';

export default function Contact() {
  const { contact } = personalInfo;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'New Website',
    budgetOrTimeline: 'Flexible',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'New Website',
    'E-Commerce Store',
    'Frontend / Dev Role',
    'Website Redesign',
    'Custom Web App'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare mailto link with encoded subject and body
    const subject = encodeURIComponent(`[Tennet Inquiry] ${formState.projectType} from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nInquiry Type: ${formState.projectType}\nTimeline/Budget: ${formState.budgetOrTimeline}\n\nProject Overview:\n${formState.message}`
    );

    // Open user's default email client
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Jamiu / Tennet, I'm reaching out about a ${formState.projectType}.\nMy name is ${formState.name || 'a visitor'}.\nNote: ${formState.message || 'I would like to discuss working together.'}`
    );
    const cleanNumber = contact.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ff5a1f]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dramatic Editorial Callout */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff5a1f] uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
              <span>Initiate Collaboration</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              LET'S BUILD SOMETHING.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-lg leading-relaxed">
              Have a project, business idea, or website that needs to exist? Or are you hiring for a frontend engineering role? Let's discuss scope, timelines, and how to bring it to life.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-10 space-y-4 max-w-md">
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-[#12141c] border border-white/8 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-[#ff5a1f] text-neutral-300 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Direct Email
                    </span>
                    <span className="text-sm font-semibold text-white">{contact.email}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {contact.whatsappNumber && (
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full group flex items-center justify-between p-4 rounded-xl bg-[#12141c] border border-white/8 hover:border-emerald-500/30 transition-all text-left cursor-pointer"
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

            {/* Social Channels */}
            <div className="mt-8 pt-8 border-t border-white/10 max-w-md">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                Professional Networks
              </span>
              <div className="flex items-center gap-4 text-neutral-400">
                {contact.github && (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono hover:text-white transition-colors"
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
                    className="flex items-center gap-1.5 text-xs font-mono hover:text-white transition-colors"
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
                    className="flex items-center gap-1.5 text-xs font-mono hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>X</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#12141c] border border-white/10 shadow-2xl">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Start a Conversation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Fill in a few details and send directly to my inbox or open immediately in WhatsApp.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-center space-y-3">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Inquiry Composed</h4>
                  <p className="text-xs text-neutral-300">
                    Your email client has opened with your project brief. You can also message me directly on WhatsApp if you prefer a rapid reply!
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs font-mono text-[#ff5a1f] underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Inquiry Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormState({ ...formState, projectType: type })}
                          className={`px-3 py-1.5 rounded text-xs transition-colors cursor-pointer ${
                            formState.projectType === type
                              ? 'bg-[#ff5a1f] text-white font-medium'
                              : 'bg-white/5 text-neutral-400 hover:text-white border border-white/5'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
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
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1017] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5a1f]"
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
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1017] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5a1f]"
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1017] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5a1f] resize-none"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#ff5a1f] hover:bg-[#ff7a45] text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#ff5a1f]/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Email ↗</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="py-3 px-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
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
    </section>
  );
}
