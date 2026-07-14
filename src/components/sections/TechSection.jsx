import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const TECH_CATEGORIES = [
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    color: 'violet',
    tagClass: 'bg-violet-500/10 border-violet-500/30 text-violet-300',
    hoverClass: 'hover:bg-violet-500/20 hover:border-violet-400/50 hover:shadow-violet-500/20',
    stack: [
      { name: '.NET 10 / ASP.NET Core', desc: 'Web API framework (C#)' },
      { name: 'PostgreSQL', desc: 'Primary relational database' },
      { name: 'Entity Framework Core 10', desc: 'Code-first ORM & migrations' },
      { name: 'JWT + Refresh Tokens', desc: 'Secure authentication' },
      { name: 'ASP.NET Identity', desc: 'User & role management' },
      { name: 'ImageKit', desc: 'Image storage & optimization' },
      { name: 'BCrypt.Net', desc: 'Password hashing' },
      { name: 'AspNetCoreRateLimit', desc: 'API rate limiting' },
      { name: 'OpenAPI / Scalar UI', desc: 'Interactive API documentation' },
      { name: 'Docker', desc: 'Containerized deployment' },
      { name: 'SignalR', desc: 'Real-time WebSocket hubs' },
      { name: 'xUnit / NUnit', desc: 'Unit & integration testing' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend Web',
    icon: '🌐',
    color: 'cyan',
    tagClass: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
    hoverClass: 'hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-cyan-500/20',
    stack: [
      { name: 'React 18', desc: 'UI component framework' },
      { name: 'TypeScript', desc: 'Type-safe development' },
      { name: 'Vite 6', desc: 'Lightning-fast build tool' },
      { name: 'React Router 7', desc: 'Client-side routing' },
      { name: 'Tailwind CSS 4', desc: 'Utility-first styling' },
      { name: 'Radix UI', desc: 'Accessible primitives' },
      { name: 'Material UI', desc: 'Component library' },
      { name: 'Axios', desc: 'HTTP client with interceptors' },
      { name: 'JWT auto-refresh', desc: 'Seamless token rotation' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile App',
    icon: '📱',
    color: 'emerald',
    tagClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    hoverClass: 'hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:shadow-emerald-500/20',
    stack: [
      { name: 'Expo SDK 54', desc: 'React Native managed workflow' },
      { name: 'React Native 0.81', desc: 'Cross-platform mobile' },
      { name: 'TypeScript', desc: 'Type-safe codebase' },
      { name: 'Expo Router', desc: 'File-based navigation' },
      { name: 'Axios + Interceptors', desc: 'Self-healing JWT client' },
      { name: 'expo-secure-store', desc: 'Encrypted token storage' },
      { name: 'Firebase', desc: 'Push notifications (FCM)' },
      { name: 'Google OAuth', desc: 'Social authentication' },
      { name: 'Reanimated 3', desc: 'Smooth animations' },
      { name: 'Lucide React Native', desc: 'Icon system' },
    ],
  },
];

const TechSection = () => {
  const [activeCat, setActiveCat] = useState('backend');
  const active = TECH_CATEGORIES.find(c => c.id === activeCat);

  return (
    <section id="tech" className="section-border-top py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-400 text-sm font-semibold mb-4">
              Technology Stack
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Built with <span className="gradient-text">Modern Tech</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              A carefully chosen stack across three platforms — built for performance, security, and scale.
            </p>
          </div>
        </ScrollReveal>

        {/* Platform Tabs */}
        <ScrollReveal delay={1}>
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {TECH_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                id={`tech-tab-${cat.id}`}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                  activeCat === cat.id
                    ? `${cat.tagClass} shadow-lg`
                    : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tech Tags Grid */}
        <ScrollReveal>
          <div className="glass-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">{active.icon}</span>
              <div>
                <h3 className="text-xl font-black text-white">{active.label} Stack</h3>
                <p className="text-slate-500 text-sm">{active.stack.length} technologies</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {active.stack.map((tech, i) => (
                <div
                  key={i}
                  className={`tech-badge group relative px-4 py-2.5 rounded-xl border text-sm font-semibold cursor-default shadow-md ${active.tagClass} ${active.hoverClass} transition-all duration-200`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {tech.name}
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#0d0d1e] border border-white/10 rounded-lg text-xs text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 shadow-xl">
                    {tech.desc}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* All three columns summary */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {TECH_CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i + 1}>
              <div className={`glass-card p-5 text-center border ${cat.tagClass.includes('violet') ? 'border-violet-500/20' : cat.tagClass.includes('cyan') ? 'border-cyan-500/20' : 'border-emerald-500/20'}`}>
                <div className="text-3xl mb-2">{cat.icon}</div>
                <p className={`text-sm font-bold ${cat.tagClass.split(' ')[2]}`}>{cat.label}</p>
                <p className="text-xs text-slate-600 mt-1">{cat.stack.length} technologies</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
