import React from 'react';
import ScrollReveal from '../ScrollReveal';

const REPOS = [
  {
    icon: '⚙️',
    title: 'NearU Backend',
    subtitle: '.NET 10 / ASP.NET Core Web API',
    desc: 'RESTful API with JWT auth, PostgreSQL, SignalR, and full OpenAPI documentation.',
    url: 'https://github.com/Nearu-Project-SUSL/NearU-Backend',
    color: '#a855f7',
    tags: ['.NET 10', 'PostgreSQL', 'Docker', 'JWT'],
  },
  {
    icon: '🌐',
    title: 'NearU Frontend',
    subtitle: 'React 18 + Vite + TypeScript',
    desc: 'Multi-role web app with React Router, Tailwind CSS, and Radix UI component library.',
    url: 'https://github.com/Nearu-Project-SUSL/NearU-Frontend',
    color: '#06b6d4',
    tags: ['React 18', 'TypeScript', 'Tailwind', 'Vite'],
  },
  {
    icon: '📱',
    title: 'NearU Mobile',
    subtitle: 'Expo SDK 54 + React Native',
    desc: 'Cross-platform iOS & Android app with file-based routing, secure JWT storage, and Firebase push notifications.',
    url: 'https://github.com/Nearu-Project-SUSL/NearU-Moblie-App',
    color: '#22c55e',
    tags: ['Expo', 'React Native', 'Firebase', 'TypeScript'],
  },
];

const FooterSection = () => (
  <section className="section-border-top py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-400 text-sm font-semibold mb-4">
            Open Source
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Explore the <span className="gradient-text">Code</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            All three repositories are publicly available. Star, fork, or contribute.
          </p>
        </div>
      </ScrollReveal>

      {/* Repo Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {REPOS.map((repo, i) => (
          <ScrollReveal key={i} delay={i + 1}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex flex-col group hover:scale-105 transition-all duration-300 block"
              style={{ borderColor: `${repo.color}25` }}
            >
              <div className="text-4xl mb-4">{repo.icon}</div>
              <h3 className="font-black text-white text-lg mb-1 group-hover:text-violet-300 transition-colors">{repo.title}</h3>
              <p className="text-xs font-semibold mb-3" style={{ color: repo.color }}>{repo.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">{repo.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {repo.tags.map((tag, ti) => (
                  <span key={ti} className="text-xs px-2 py-0.5 rounded-full border font-medium"
                    style={{ borderColor: `${repo.color}30`, color: repo.color, background: `${repo.color}0d` }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-slate-500 group-hover:text-white transition-colors text-sm font-semibold mt-auto">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      {/* Live API CTA */}
      <ScrollReveal>
        <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 p-8 sm:p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <p className="text-green-400 font-semibold text-sm">Production API — Live</p>
          </div>
          <h3 className="text-3xl font-black text-white mb-2">Explore the Live API</h3>
          <p className="text-slate-400 mb-8">
            Interactive Scalar API documentation — browse all endpoints, view schemas, and test requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.nearusab.me/scalar/v1"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-api-btn"
              className="btn-primary flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold"
            >
              Open API Docs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://github.com/Nearu-Project-SUSL"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github-btn"
              className="btn-secondary flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold"
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
  <footer className="border-t border-white/5 py-10 px-4">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center">
          <span className="text-white font-black text-xs">N</span>
        </div>
        <span className="text-white font-bold">Near<span className="gradient-text">U</span></span>
        <span className="text-slate-700 text-sm ml-2">© 2025 Capstone Project — SUSL Group 11</span>
      </div>
      <p className="text-slate-700 text-xs text-center">
        Built with ASP.NET Core · React · Expo · PostgreSQL · Azure
      </p>
    </div>
  </footer>
);

export { FooterSection, Footer };
