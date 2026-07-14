import React, { useState, useEffect } from 'react';
import { Github, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'cicd', label: 'CI/CD' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'monetization', label: 'Roadmap' },
  { id: 'team', label: 'Team' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = '';
      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030508]/85 backdrop-blur-xl border-b border-brand-coral/15 shadow-lg shadow-brand-coral/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group.first-letter"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-coral to-brand-coral-light flex items-center justify-center shadow-lg shadow-brand-coral/30 group-hover:shadow-brand-coral/50 transition-all duration-300">
            <span className="text-white font-black text-sm">N</span>
          </div>
          <span className="font-bold text-white text-lg tracking-tight hover:opacity-90 transition-opacity">
            Near<span className="gradient-text-coral">U</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? 'text-brand-coral-light bg-brand-coral/10 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px w-4 h-0.5 bg-brand-coral rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Nearu-Project-SUSL"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-lg btn-primary text-white text-sm font-semibold"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg hover:bg-white/5 text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0c0f1a]/95 backdrop-blur-xl border-b border-brand-coral/15">
          <ul className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeSection === id
                      ? 'text-brand-coral-light bg-brand-coral/15 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
