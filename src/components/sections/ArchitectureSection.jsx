import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const LAYERS = [
  {
    id: 'clients',
    label: 'Client Applications',
    sublabel: 'React Web + Expo Mobile',
    icon: '💻📱',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.35)',
    hoverBg: 'rgba(168,85,247,0.15)',
    desc: 'React 18 (Vite + TypeScript) web app and Expo React Native mobile app. Both communicate via REST with JWT Bearer tokens.',
    tags: ['React 18', 'Expo SDK 54', 'TypeScript', 'Axios', 'JWT'],
  },
  {
    id: 'gateway',
    label: 'ASP.NET Core Web API',
    sublabel: 'REST Gateway — api.nearusab.me',
    icon: '🌐',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.06)',
    border: 'rgba(6,182,212,0.3)',
    hoverBg: 'rgba(6,182,212,0.12)',
    desc: 'The central API gateway handling routing, authentication middleware, CORS policy, rate limiting, and OpenAPI documentation via Scalar UI.',
    tags: ['.NET 10', 'JWT Middleware', 'Rate Limiting', 'CORS', 'Scalar UI'],
  },
  {
    id: 'services',
    label: 'Service Layer',
    sublabel: 'Core Business Logic',
    icon: '⚙️',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.05)',
    border: 'rgba(168,85,247,0.25)',
    hoverBg: 'rgba(168,85,247,0.12)',
    desc: 'Encapsulates all business rules: order processing, delivery coordination, review management, job matching, and payment tier logic. Injected via ASP.NET DI.',
    tags: ['Business Logic', 'DI Container', 'Dependency Injection', 'Service Pattern'],
  },
  {
    id: 'repos',
    label: 'Repository Layer',
    sublabel: 'Data Access Abstraction',
    icon: '📂',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.04)',
    border: 'rgba(6,182,212,0.2)',
    hoverBg: 'rgba(6,182,212,0.1)',
    desc: 'Repository pattern abstracts EF Core queries from business logic. Enables testability and future database swapping without touching business code.',
    tags: ['Repository Pattern', 'EF Core', 'LINQ', 'Unit of Work'],
  },
  {
    id: 'database',
    label: 'PostgreSQL Database',
    sublabel: 'Railway Hosted — Production',
    icon: '🗄️',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.05)',
    border: 'rgba(34,197,94,0.25)',
    hoverBg: 'rgba(34,197,94,0.1)',
    desc: 'Primary relational data store with code-first migrations via EF Core. Hosted on Railway in production. Parameterized queries prevent SQL injection.',
    tags: ['PostgreSQL', 'EF Core Migrations', 'Code-First', 'Railway Hosting'],
  },
];

const SIDE_SERVICES = [
  { icon: '🖼️', label: 'ImageKit', desc: 'Image storage & CDN delivery' },
  { icon: '🔔', label: 'SignalR', desc: 'Real-time WebSocket notifications' },
  { icon: '🐋', label: 'Docker', desc: 'Containerized production build' },
  { icon: '🔑', label: 'ASP.NET Identity', desc: 'Role-based access control' },
];

const ArchitectureSection = () => {
  const [hoveredLayer, setHoveredLayer] = useState(null);

  return (
    <section id="architecture" className="section-border-top py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-400 text-sm font-semibold mb-4">
              Software Architecture
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              System <span className="gradient-text">Architecture</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Hover each layer to explore how the NearU platform is structured — from client to database.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid lg:grid-cols-4 gap-6 items-start">
            {/* Main Architecture Diagram */}
            <div className="lg:col-span-3 space-y-2">
              {LAYERS.map((layer, i) => (
                <div key={layer.id} className="relative">
                  {/* Connector arrow */}
                  {i > 0 && (
                    <div className="flex justify-center mb-2">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-0.5 h-4 bg-gradient-to-b from-violet-500/50 to-cyan-500/50" />
                        <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l6 6a1 1 0 01-1.414 1.414L10 5.414 4.707 10.707a1 1 0 01-1.414-1.414l6-6A1 1 0 0110 3z" clipRule="evenodd" transform="rotate(180 10 10)" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <div
                    className="arch-layer rounded-xl px-6 py-4 border cursor-pointer transition-all duration-300"
                    style={{
                      background: hoveredLayer === layer.id ? layer.hoverBg : layer.bg,
                      borderColor: hoveredLayer === layer.id ? layer.color : layer.border,
                      boxShadow: hoveredLayer === layer.id ? `0 0 30px ${layer.color}20, 0 4px 20px rgba(0,0,0,0.3)` : 'none',
                    }}
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    id={`arch-layer-${layer.id}`}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{layer.icon}</span>
                        <div>
                          <p className="font-bold text-white text-sm sm:text-base">{layer.label}</p>
                          <p className="text-xs" style={{ color: layer.color }}>{layer.sublabel}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {layer.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="text-xs px-2 py-0.5 rounded-full border font-medium"
                            style={{ borderColor: `${layer.color}40`, color: layer.color, background: `${layer.color}10` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expanded description on hover */}
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ maxHeight: hoveredLayer === layer.id ? '80px' : '0', opacity: hoveredLayer === layer.id ? 1 : 0 }}
                    >
                      <p className="text-slate-400 text-sm mt-3 pt-3 border-t" style={{ borderColor: `${layer.color}20` }}>
                        {layer.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Side Services */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">External Services</p>
              {SIDE_SERVICES.map((svc, i) => (
                <div key={i} className="glass-card p-4 text-center hover:border-violet-500/30 transition-all duration-200">
                  <div className="text-2xl mb-2">{svc.icon}</div>
                  <p className="text-sm font-bold text-white">{svc.label}</p>
                  <p className="text-xs text-slate-600 mt-1">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ArchitectureSection;
