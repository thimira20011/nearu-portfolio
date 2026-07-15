import React, { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import nearuLogo from '../assets/logo.svg';
import useScrollState from '../hooks/useScrollState';

const NAV_LINKS = [
  { id: 'overview',      label: 'Overview'     },
  { id: 'features',      label: 'Features'     },
  { id: 'tech',          label: 'Tech Stack'   },
  { id: 'architecture',  label: 'Architecture' },
  { id: 'cloud',         label: 'Cloud'        },
  { id: 'cicd',          label: 'CI/CD'        },
  { id: 'timeline',      label: 'Timeline'     },
  { id: 'monetization',  label: 'Roadmap'      },
  { id: 'team',          label: 'Team'         },
];

const NAV_IDS = NAV_LINKS.map((l) => l.id);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY, scrollProgress, activeSection } = useScrollState(NAV_IDS);
  const scrolled = scrollY > 40;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
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
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2"
          aria-label="Back to top"
        >
          <img src={nearuLogo} className="w-8 h-8 object-contain" alt="NearU Logo" />
          <span className="font-bold text-white text-lg tracking-tight hover:opacity-90 transition-opacity">
            Near<span className="gradient-text-coral">U</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                aria-current={activeSection === id ? 'true' : undefined}
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
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/*
        Mobile Menu — CSS max-height transition instead of conditional render.
        This enables a smooth slide-down / slide-up animation on open/close.
      */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="bg-[#0c0f1a]/95 backdrop-blur-xl border-b border-brand-coral/15">
          <ul className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1" role="list">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  aria-current={activeSection === id ? 'true' : undefined}
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
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-coral to-brand-blue-light transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />
    </nav>
  );
};

export default Navbar;
