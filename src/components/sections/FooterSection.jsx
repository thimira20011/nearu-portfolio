import React from 'react';
import { Github, ExternalLink, ArrowRight, Cpu, Globe, Smartphone } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import nearuLogo from '../../assets/logo.svg';
import SectionHeader from '../SectionHeader';

const REPOS = [
  {
    icon: Cpu,
    title: 'NearU Backend',
    subtitle: '.NET 10 / ASP.NET Core Web API',
    desc: 'RESTful API with JWT authentication, PostgreSQL relational database, SignalR real-time hubs, and OpenAPI documentation.',
    url: 'https://github.com/Nearu-Project-SUSL/NearU-Backend',
    color: '#ff785a', // brand-coral-light
    tags: ['.NET 10', 'PostgreSQL', 'Docker', 'JWT Auth'],
  },
  {
    icon: Globe,
    title: 'NearU Frontend',
    subtitle: 'React 18 + Vite + TypeScript',
    desc: 'Multi-role web application featuring React Router client routing, Tailwind CSS styling, and Radix UI primitives.',
    url: 'https://github.com/Nearu-Project-SUSL/NearU-Frontend',
    color: '#1d76ca', // brand-blue-light
    tags: ['React 18', 'TypeScript', 'Tailwind', 'Vite 6'],
  },
  {
    icon: Smartphone,
    title: 'NearU Mobile',
    subtitle: 'Expo SDK 54 + React Native',
    desc: 'Cross-platform iOS & Android mobile application with file-based routing, secure storage, and FCM notifications.',
    url: 'https://github.com/Nearu-Project-SUSL/NearU-Moblie-App',
    color: '#fbbf24', // amber
    tags: ['Expo 54', 'React Native', 'FCM Alerts', 'Secure Store'],
  },
];

const FooterSection = () => (
  <section className="section-border-top py-24 px-4 bg-gradient-to-b from-transparent to-[#030508]/60">
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        badge="Open Source"
        titleStart="Explore the"
        highlight="Code"
        subtitle="All three repositories are publicly available. Star, fork, or contribute."
      />

      {/* Repo Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {REPOS.map((repo, i) => {
          const RepoIcon = repo.icon;
          return (
            <ScrollReveal key={i} delay={i + 1}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex flex-col group hover:scale-[1.03] transition-all duration-300 border border-white/5"
                style={{ borderColor: `${repo.color}25` }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-5">
                  <RepoIcon className="w-6 h-6" style={{ color: repo.color }} />
                </div>
                <h3 className="font-black text-white text-lg mb-1 group-hover:text-brand-coral-light transition-colors">{repo.title}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color: repo.color }}>{repo.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">{repo.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5 border-t border-white/5 pt-4">
                  {repo.tags.map((tag, ti) => (
                    <span key={ti} className="text-[10px] px-2 py-0.5 rounded-full border font-semibold"
                      style={{ borderColor: `${repo.color}30`, color: repo.color, background: `${repo.color}0d` }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-slate-500 group-hover:text-white transition-colors text-sm font-bold mt-auto">
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Live API CTA */}
      <ScrollReveal>
        <div className="rounded-2xl border border-brand-coral/20 bg-gradient-to-br from-brand-coral/5 to-brand-blue/5 p-8 sm:p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <p className="text-green-400 font-bold text-xs sm:text-sm uppercase tracking-wider">Production API — Live</p>
          </div>
          <h3 className="text-3xl font-black text-white mb-2">Explore the Live API</h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Interactive Scalar API documentation — browse all endpoints, view schemas, and test requests directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.nearusab.me/scalar/v1"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-api-btn"
              className="btn-primary flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold text-sm"
            >
              Open API Docs
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Nearu-Project-SUSL"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github-btn"
              className="btn-secondary flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold text-sm"
            >
              GitHub Organization
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 py-10 px-4 bg-[#030508]">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={nearuLogo} className="w-7 h-7 object-contain" alt="NearU Logo" />
        <span className="text-white font-bold">Near<span className="gradient-text-coral">U</span></span>
        <span className="text-slate-600 text-xs sm:text-sm ml-2">© 2025 Capstone Project — SUSL Group 11</span>
      </div>
      <p className="text-slate-600 text-[10px] sm:text-xs text-center">
        Built with ASP.NET Core · React · Expo · PostgreSQL · Azure
      </p>
    </div>
  </footer>
);

export { FooterSection, Footer };
