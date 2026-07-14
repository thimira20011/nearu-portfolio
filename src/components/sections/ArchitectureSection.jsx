import React, { useState } from 'react';
import { Laptop, Network, Cpu, FolderGit, Database, Layers, Radio, Container, Key } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const LAYERS = [
  {
    id: 'clients',
    label: 'Client Applications',
    sublabel: 'React Web + Expo Mobile',
    icon: Laptop,
    color: '#ff785a', // Coral highlight
    bg: 'rgba(224,86,56,0.06)',
    border: 'rgba(224,86,56,0.25)',
    hoverBg: 'rgba(224,86,56,0.15)',
    desc: 'React 18 (Vite + TypeScript) web application alongside the Expo React Native mobile client. Both leverage secure HTTPS and real-time WebSockets to interact with the backend API.',
    tags: ['React 18', 'Expo SDK 54', 'TypeScript', 'Axios', 'JWT Store'],
  },
  {
    id: 'gateway',
    label: 'ASP.NET Core Web API',
    sublabel: 'REST Gateway — api.nearusab.me',
    icon: Network,
    color: '#3b82f6', // Blue highlight
    bg: 'rgba(59,130,246,0.06)',
    border: 'rgba(59,130,246,0.25)',
    hoverBg: 'rgba(59,130,246,0.15)',
    desc: 'The centralized API Gateway handling routing, JWT authentication validation, CORS policy, rate limiting, and OpenAPI schema generation through Scalar UI.',
    tags: ['.NET 10', 'JWT Middleware', 'Rate Limiting', 'CORS', 'Scalar UI'],
  },
  {
    id: 'services',
    label: 'Service Layer',
    sublabel: 'Core Business Logic',
    icon: Cpu,
    color: '#ff785a',
    bg: 'rgba(224,86,56,0.04)',
    border: 'rgba(224,86,56,0.2)',
    hoverBg: 'rgba(224,86,56,0.12)',
    desc: 'Encapsulates the core domain logic: order processing, dynamic driver matching, rating aggregations, job board queries, and business tier subscriptions. Injected dynamically via ASP.NET Core Dependency Injection.',
    tags: ['Business Services', 'DI Container', 'Service Pattern', 'xUnit Verified'],
  },
  {
    id: 'repos',
    label: 'Repository Layer',
    sublabel: 'Data Access Abstraction',
    icon: FolderGit,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.04)',
    border: 'rgba(59,130,246,0.2)',
    hoverBg: 'rgba(59,130,246,0.12)',
    desc: 'Decoupled data access utilizing the Repository and Unit of Work patterns. Abstracts Entity Framework Core LINQ queries from business logic to ensure strict testability.',
    tags: ['Repository Pattern', 'EF Core 10', 'LINQ Queries', 'Unit of Work'],
  },
  {
    id: 'database',
    label: 'PostgreSQL Database',
    sublabel: 'Railway Hosted — Production',
    icon: Database,
    color: '#10b981', // Green accent
    bg: 'rgba(16,185,129,0.04)',
    border: 'rgba(16,185,129,0.25)',
    hoverBg: 'rgba(16,185,129,0.12)',
    desc: 'The primary relational store, managed via EF Core code-first migrations. Production environment runs on Railway. Employs parameterized queries and indexing for rapid data delivery.',
    tags: ['PostgreSQL', 'Code-First Migrations', 'Railway Hosting', 'SQL Safety'],
  },
];

const SIDE_SERVICES = [
  { icon: Layers, label: 'ImageKit CDN', desc: 'Image optimization & CDN caching' },
  { icon: Radio, label: 'SignalR Hubs', desc: 'Real-time WebSocket alerts' },
  { icon: Container, label: 'Docker Container', desc: 'Containerized production build' },
  { icon: Key, label: 'ASP.NET Identity', desc: 'Role-based access control' },
];

const ArchitectureSection = () => {
  const [hoveredLayer, setHoveredLayer] = useState('clients');
  const activeDetail = LAYERS.find(l => l.id === hoveredLayer) || LAYERS[0];
  const ActiveIcon = activeDetail.icon;

  return (
    <section id="architecture" className="section-border-top py-24 px-4 bg-gradient-to-b from-transparent to-[#030508]/40">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 border border-brand-coral/25 text-brand-coral-light text-sm font-semibold mb-4">
              Software Architecture
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              System <span className="gradient-text-coral text-glow-coral">Architecture</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
              Hover over each layer of the interactive 3D stack to trace data flow through the NearU platform.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: 3D Isometric Stack Visual */}
          <div className="lg:col-span-6 flex justify-center items-center py-8">
            <div className="perspective-container relative w-full max-w-[360px] h-[460px] flex items-center justify-center">
              <div className="isometric-stack relative w-[300px] h-[200px]">
                {LAYERS.map((layer, index) => {
                  const LayerIcon = layer.icon;
                  // Render stack bottom-to-top visually. Top layer (index 0) has highest translateZ.
                  const offsetZ = (4 - index) * 64; 
                  const isHovered = hoveredLayer === layer.id;
                  
                  return (
                    <div
                      key={layer.id}
                      className="isometric-layer absolute inset-0 rounded-2xl border flex flex-col justify-between p-4 cursor-pointer select-none"
                      style={{
                        transform: `translateZ(${offsetZ + (isHovered ? 28 : 0)}px)`,
                        backgroundColor: isHovered ? layer.hoverBg : layer.bg,
                        borderColor: isHovered ? layer.color : layer.border,
                        boxShadow: isHovered 
                          ? `0 25px 50px rgba(0,0,0,0.65), 0 0 30px ${layer.color}35` 
                          : `0 4px 12px rgba(0,0,0,0.45)`,
                        zIndex: 20 - index,
                      }}
                      onMouseEnter={() => setHoveredLayer(layer.id)}
                      onClick={() => setHoveredLayer(layer.id)}
                    >
                      {/* Isometric Grid Wireframe Overlay */}
                      <div className="absolute inset-0 bg-grid-glow opacity-10 rounded-2xl pointer-events-none" />

                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-xs font-black uppercase tracking-wider opacity-60" style={{ color: layer.color }}>
                          Layer 0{5 - index}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center">
                          <LayerIcon className="w-4 h-4" style={{ color: layer.color }} />
                        </div>
                      </div>

                      <div className="relative z-10">
                        <p className="font-black text-white text-base leading-tight">{layer.label}</p>
                        <p className="text-[10px] font-semibold mt-0.5" style={{ color: layer.color }}>{layer.sublabel}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Active Detail Panel */}
          <div className="lg:col-span-6 space-y-6">
            {/* Dynamic Dashboard Card */}
            <div className="glass-card p-8 border border-white/5 relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/[0.01] to-transparent rounded-full pointer-events-none" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0">
                  <ActiveIcon className="w-8 h-8" style={{ color: activeDetail.color }} />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded border" style={{ borderColor: `${activeDetail.color}30`, color: activeDetail.color, background: `${activeDetail.color}0d` }}>
                    Active Layer Overview
                  </span>
                  <h3 className="text-2xl font-black text-white mt-2">{activeDetail.label}</h3>
                  <p className="text-xs font-semibold" style={{ color: activeDetail.color }}>{activeDetail.sublabel}</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 border-t border-white/5 pt-6">
                {activeDetail.desc}
              </p>

              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Key Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {activeDetail.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-xs px-2.5 py-1 rounded-lg border font-semibold"
                      style={{ borderColor: `${activeDetail.color}25`, color: activeDetail.color, background: `${activeDetail.color}08` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Services list */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-4 pl-1">Side / Auxiliary Integrations</p>
              <div className="grid grid-cols-2 gap-3">
                {SIDE_SERVICES.map((svc, i) => {
                  const SvcIcon = svc.icon;
                  return (
                    <div key={i} className="glass-card p-4 flex items-center gap-3 border border-white/5 hover:border-brand-coral/20 hover:scale-[1.02] transition-all">
                      <div className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center flex-shrink-0">
                        <SvcIcon className="w-4 h-4 text-brand-coral-light" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-xs leading-none">{svc.label}</p>
                        <p className="text-[10px] text-slate-500 mt-1 leading-tight">{svc.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
