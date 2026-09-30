import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Team", path: "/team" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3.5 bg-[#0a0b0e]/90 backdrop-blur-md border-b border-blue-500/15 shadow-xl shadow-black/60"
            : "py-5 bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark with blue dot */}
          <Link
            to="/"
            className="group flex items-center gap-1.5 font-display font-extrabold text-xl tracking-tight text-white hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            <span>TENNET</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
          </Link>

          {/* Zone 2: Multi-Page Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-200 relative py-1 hover:text-white ${
                    isActive
                      ? "text-white font-semibold after:w-full after:bg-blue-500"
                      : "text-neutral-300 hover:after:w-full hover:after:bg-blue-400"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-200`
                }>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary action + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600/15 hover:bg-blue-600 text-blue-300 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-md border border-blue-500/30 hover:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-blue-600/20 whitespace-nowrap cursor-pointer">
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-blue-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#0a0b0e]/98 backdrop-blur-2xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between"
          role="dialog"
          aria-modal="true">
          <div className="flex flex-col space-y-6">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-mono">
              Pages
            </span>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-2xl font-bold transition-colors py-1 ${
                  location.pathname === "/"
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}>
                Home
              </Link>
              {navLinks.map((link) => {
                const isActive = location.pathname.startsWith(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-display text-2xl font-bold transition-colors py-1 ${
                      isActive
                        ? "text-blue-400"
                        : "text-white hover:text-blue-400"
                    }`}>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-md tracking-wider uppercase transition-colors shadow-lg shadow-blue-600/30">
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono pt-2">
              <span>TENNET</span>
              <span className="text-blue-400">REACT &amp; JAVASCRIPT</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
