import React, { useState } from 'react';
import { Cpu, Globe, Smartphone } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import TiltCard from '../TiltCard';
import SectionHeader from '../SectionHeader';
import { COLOR_PRESETS } from '../../utils/colors';

const TECH_CATEGORIES = [
  {
    id: 'backend',
    label: 'Backend',
    icon: Cpu,
    color: 'coral',
    tagClass: 'bg-brand-coral/10 border-brand-coral/30 text-brand-coral-light',
    hoverClass: 'hover:bg-brand-coral/20 hover:border-brand-coral-light/50 hover:shadow-brand-coral/10',
    borderActive: 'border-brand-coral/20 hover:border-brand-coral/40',
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
    icon: Globe,
    color: 'blue',
    tagClass: 'bg-brand-blue/10 border-brand-blue/30 text-brand-blue-light',
    hoverClass: 'hover:bg-brand-blue/20 hover:border-brand-blue-light/50 hover:shadow-brand-blue/10',
    borderActive: 'border-brand-blue/20 hover:border-brand-blue/40',
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
    icon: Smartphone,
    color: 'amber',
    tagClass: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    hoverClass: 'hover:bg-amber-500/20 hover:border-amber-400/50 hover:shadow-amber-500/10',
    borderActive: 'border-amber-500/20 hover:border-amber-500/40',
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
  const ActiveIcon = active.icon;
  const colorSet = COLOR_PRESETS[active.color];

  return (
    <section id="tech" className="section-border-top py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Technology Stack"
          titleStart="Built with"
          highlight="Modern Tech"
          subtitle="A carefully chosen stack across three platforms — built for performance, security, and scale."
        />

        {/* Platform Tabs — fully accessible */}
        <ScrollReveal delay={1}>
          <div
            role="tablist"
            aria-label="Platform selector"
            className="flex justify-center gap-3 mb-10 flex-wrap"
          >
            {TECH_CATEGORIES.map(cat => {
              const TabIcon = cat.icon;
              const isActive = activeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  id={`tech-tab-${cat.id}`}
                  aria-selected={isActive}
                  aria-controls={`tech-panel-${cat.id}`}
                  onClick={() => setActiveCat(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${
                    isActive
                      ? `${cat.tagClass} shadow-lg shadow-brand-coral/5`
                      : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Tech Tags Grid — key triggers tab-fade-in animation on switch */}
        <ScrollReveal>
          <div
            key={active.id}
            id={`tech-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tech-tab-${active.id}`}
            className="tab-fade-in"
          >
            <TiltCard
              glowColor={colorSet.glow(0.22)}
              className="glass-card p-8 sm:p-10 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                  <ActiveIcon className={`w-6 h-6 ${colorSet.text}`} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{active.label} Stack</h3>
                  <p className="text-slate-500 text-xs">{active.stack.length} technologies</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {active.stack.map((tech) => (
                  <div
                    key={tech.name}
                    className={`tech-badge group relative px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold cursor-default shadow-md ${active.tagClass} ${active.hoverClass} transition-all duration-200`}
                  >
                    {tech.name}
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#0b0e17] border border-white/10 rounded-lg text-[10px] sm:text-xs text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 shadow-xl">
                      {tech.desc}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/10" />
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>
        </ScrollReveal>

        {/* All three columns summary */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {TECH_CATEGORIES.map((cat, i) => {
            const CatIcon = cat.icon;
            const catColor = COLOR_PRESETS[cat.color];
            return (
              <ScrollReveal key={cat.id} delay={i + 1}>
                <TiltCard
                  glowColor={catColor.glow(0.18)}
                  className={`glass-card p-5 text-center border h-full ${cat.borderActive}`}
                >
                  <div className="flex justify-center mb-2">
                    <CatIcon className={`w-8 h-8 ${catColor.text}`} />
                  </div>
                  <p className={`text-sm font-bold ${catColor.text}`}>{cat.label}</p>
                  <p className="text-xs text-slate-600 mt-1">{cat.stack.length} technologies</p>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
