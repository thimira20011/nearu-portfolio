import React, { useState } from 'react';
import { 
  AppWindow, 
  ShieldAlert, 
  Zap, 
  Database, 
  FolderOpen, 
  KeyRound, 
  Cpu, 
  Mail, 
  Archive, 
  Cloud, 
  ArrowRight, 
  Info 
} from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const AZURE_SERVICES = [
  { icon: AppWindow, name: 'Azure App Service', desc: 'Hosts the containerized .NET API in Docker' },
  { icon: ShieldAlert, name: 'Application Gateway', desc: 'Enterprise load balancing, SSL termination, and protection' },
  { icon: Zap, name: 'Azure CDN', desc: 'Static asset caching & lightning-fast global asset delivery' },
  { icon: Database, name: 'Azure SQL / PostgreSQL', desc: 'Relational data store for accounts and transactions' },
  { icon: FolderOpen, name: 'Azure Blob Storage', desc: 'Object storage for user avatars, listings, and menus' },
  { icon: KeyRound, name: 'Entra ID (AAD)', desc: 'Identity protection, OAuth, and admin role enforcement' },
  { icon: Cpu, name: 'Azure Functions', desc: 'Serverless execution for background image compression' },
  { icon: Mail, name: 'Communication Services', desc: 'SMS and Email hubs for real-time delivery alerts' },
  { icon: Archive, name: 'Container Registry', desc: 'Docker image repository for automated Git releases' },
];

const CloudSection = () => {
  const [activeNode, setActiveNode] = useState('appservice');

  const CLOUD_NODES = {
    gateway: {
      title: 'Azure Application Gateway',
      role: 'Entry Point & SSL',
      desc: 'Intercepts incoming client traffic, enforces SSL termination, and routes requests to the App Service container pool.',
    },
    appservice: {
      title: 'Azure App Service',
      role: 'Core Web API Hosting',
      desc: 'Hosts the Linux Docker containers containing the .NET Web API. Auto-scales based on active memory usage.',
    },
    db: {
      title: 'Azure Database / PostgreSQL',
      role: 'Production Relational DB',
      desc: 'Managed PostgreSQL cluster storing relational entities with automated backups, threat protection, and custom indexing.',
    },
    blob: {
      title: 'Azure Blob Storage',
      role: 'Object Storage & CDN',
      desc: 'Houses unstructured binary assets like product menus, user profile photos, and files, paired with Azure CDN for rapid delivery.',
    },
    functions: {
      title: 'Azure Serverless Functions',
      role: 'Event-Driven Compute',
      desc: 'Fires serverless tasks upon Blob storage updates to resize upload streams, parse documents, and send mail updates.',
    },
  };

  const nodeInfo = CLOUD_NODES[activeNode] || CLOUD_NODES.appservice;

  return (
    <section id="cloud" className="section-border-top py-24 px-4 bg-gradient-to-b from-[#030508]/40 to-transparent">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/25 text-brand-blue-light text-sm font-semibold mb-4">
              Cloud Infrastructure
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Azure Cloud <span className="gradient-text-blue text-glow-blue">Strategy</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
              Production-grade architecture designed for extreme availability, horizontal scaling, and secure data handling.
            </p>
          </div>
        </ScrollReveal>

        {/* 3D Topology Interactive SVG */}
        <ScrollReveal delay={1}>
          <div className="glass-card p-6 mb-12 border border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-transparent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider pl-2 border-l-2 border-brand-blue">
              Interactive Topology Map (Click a node to inspect)
            </h3>

            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* SVG Map */}
              <div className="md:col-span-8 bg-black/40 rounded-xl p-4 border border-white/5 shadow-inner">
                <svg viewBox="0 0 700 350" className="w-full h-auto drop-shadow-[0_10px_20px_rgba(15,76,129,0.15)]">
                  {/* Grid Lines */}
                  <g opacity="0.15">
                    <line x1="50" y1="0" x2="50" y2="350" stroke="#1d76ca" strokeWidth="1" />
                    <line x1="150" y1="0" x2="150" y2="350" stroke="#1d76ca" strokeWidth="1" />
                    <line x1="250" y1="0" x2="250" y2="350" stroke="#1d76ca" strokeWidth="1" />
                    <line x1="350" y1="0" x2="350" y2="350" stroke="#1d76ca" strokeWidth="1" />
                    <line x1="450" y1="0" x2="450" y2="350" stroke="#1d76ca" strokeWidth="1" />
                    <line x1="550" y1="0" x2="550" y2="350" stroke="#1d76ca" strokeWidth="1" />
                    <line x1="650" y1="0" x2="650" y2="350" stroke="#1d76ca" strokeWidth="1" />
                    
                    <line x1="0" y1="50" x2="700" y2="50" stroke="#1d76ca" strokeWidth="1" />
                    <line x1="0" y1="150" x2="700" y2="150" stroke="#1d76ca" strokeWidth="1" />
                    <line x1="0" y1="250" x2="700" y2="250" stroke="#1d76ca" strokeWidth="1" />
                  </g>

                  {/* Connected Tracks */}
                  <path id="route1" d="M 50,175 L 180,175" stroke="#1d76ca" strokeWidth="3" fill="none" opacity="0.4" />
                  <path id="route2" d="M 180,175 L 350,175" stroke="#1d76ca" strokeWidth="3" fill="none" opacity="0.4" />
                  <path id="route3" d="M 350,175 Q 430,90 520,90" stroke="#ff785a" strokeWidth="2" fill="none" opacity="0.4" />
                  <path id="route4" d="M 350,175 Q 430,260 520,260" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.4" />
                  <path id="route5" d="M 350,175 Q 350,270 420,270" stroke="#e05638" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="3 3" />

                  {/* Moving Pulsing Signals */}
                  <circle r="4" fill="#fbbf24">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 50,175 L 180,175" />
                  </circle>
                  <circle r="4" fill="#60a5fa">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 180,175 L 350,175" />
                  </circle>
                  <circle r="3" fill="#ff785a">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 350,175 Q 430,90 520,90" />
                  </circle>
                  <circle r="3" fill="#10b981">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M 350,175 Q 430,260 520,260" />
                  </circle>

                  {/* Nodes */}
                  {/* 1. Client Endpoint */}
                  <g transform="translate(50, 175)" className="cursor-pointer">
                    <circle cx="0" cy="0" r="14" fill="#0b0e17" stroke="#1d76ca" strokeWidth="2" />
                    <circle cx="0" cy="0" r="4" fill="#1d76ca" />
                    <text x="0" y="28" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">Clients</text>
                  </g>

                  {/* 2. Gateway Node */}
                  <g transform="translate(180, 175)" className="cursor-pointer" onClick={() => setActiveNode('gateway')}>
                    <circle cx="0" cy="0" r="28" fill="#0c0f1a" stroke={activeNode === 'gateway' ? '#1d76ca' : '#1e293b'} strokeWidth={activeNode === 'gateway' ? 3 : 1.5} className="transition-all duration-300" />
                    {/* SVG Icon representation inside */}
                    <g transform="translate(-10, -10) scale(0.85)" stroke={activeNode === 'gateway' ? '#1d76ca' : '#64748b'} strokeWidth="2" fill="none">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </g>
                    <text x="0" y="42" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">Gateway</text>
                  </g>

                  {/* 3. Central Web API (App Service) */}
                  <g transform="translate(350, 175)" className="cursor-pointer" onClick={() => setActiveNode('appservice')}>
                    <circle cx="0" cy="0" r="34" fill="#0c0f1a" stroke={activeNode === 'appservice' ? '#3b82f6' : '#1e293b'} strokeWidth={activeNode === 'appservice' ? 3.5 : 1.5} />
                    <g transform="translate(-12, -12) scale(1)" stroke={activeNode === 'appservice' ? '#3b82f6' : '#64748b'} strokeWidth="2" fill="none">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a6 6 0 0 0 0-12z" />
                    </g>
                    <text x="0" y="48" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">App Service</text>
                  </g>

                  {/* 4. Blob Storage (Top Right) */}
                  <g transform="translate(520, 90)" className="cursor-pointer" onClick={() => setActiveNode('blob')}>
                    <circle cx="0" cy="0" r="28" fill="#0c0f1a" stroke={activeNode === 'blob' ? '#ff785a' : '#1e293b'} strokeWidth={activeNode === 'blob' ? 3 : 1.5} />
                    <g transform="translate(-10, -10) scale(0.85)" stroke={activeNode === 'blob' ? '#ff785a' : '#64748b'} strokeWidth="2" fill="none">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </g>
                    <text x="0" y="42" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">Blob Storage</text>
                  </g>

                  {/* 5. Database (Bottom Right) */}
                  <g transform="translate(520, 260)" className="cursor-pointer" onClick={() => setActiveNode('db')}>
                    <circle cx="0" cy="0" r="28" fill="#0c0f1a" stroke={activeNode === 'db' ? '#10b981' : '#1e293b'} strokeWidth={activeNode === 'db' ? 3 : 1.5} />
                    <g transform="translate(-10, -10) scale(0.85)" stroke={activeNode === 'db' ? '#10b981' : '#64748b'} strokeWidth="2" fill="none">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                    </g>
                    <text x="0" y="42" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">PostgreSQL</text>
                  </g>

                  {/* 6. Azure Functions (Bottom Left of Center) */}
                  <g transform="translate(420, 270)" className="cursor-pointer" onClick={() => setActiveNode('functions')}>
                    <circle cx="0" cy="0" r="24" fill="#0c0f1a" stroke={activeNode === 'functions' ? '#e05638' : '#1e293b'} strokeWidth={activeNode === 'functions' ? 2.5 : 1.5} />
                    <g transform="translate(-8, -9) scale(0.75)" stroke={activeNode === 'functions' ? '#e05638' : '#64748b'} strokeWidth="2" fill="none">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </g>
                    <text x="0" y="38" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">Functions</text>
                  </g>
                </svg>
              </div>

              {/* Inspector Information Panel */}
              <div className="md:col-span-4 space-y-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-4 h-4 text-brand-blue-light" />
                    <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Node Inspector</span>
                  </div>
                  
                  <h4 className="text-lg font-black text-white">{nodeInfo.title}</h4>
                  <p className="text-xs font-semibold text-brand-blue-light mt-1">{nodeInfo.role}</p>
                  
                  <p className="text-slate-400 text-xs sm:text-sm mt-3 pt-3 border-t border-white/5 leading-relaxed">
                    {nodeInfo.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Azure Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {AZURE_SERVICES.map((svc, i) => {
            const SvcIcon = svc.icon;
            return (
              <ScrollReveal key={i} delay={Math.floor(i / 3) + 1}>
                <div className="glass-card p-5 flex items-start gap-4 group hover:border-brand-blue/30 hover:scale-[1.02] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <SvcIcon className="w-5 h-5 text-brand-blue-light" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{svc.name}</p>
                    <p className="text-slate-500 text-xs mt-1 leading-snug">{svc.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Tiered Architecture Breakdown */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass-card p-6 border-l-4 border-brand-coral">
              <p className="text-brand-coral-light font-bold text-xs uppercase tracking-wider mb-3">Application Layer</p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><strong className="text-white font-semibold">Compute:</strong> Azure App Service (Docker)</li>
                <li><strong className="text-white font-semibold">Traffic:</strong> Azure Application Gateway</li>
                <li><strong className="text-white font-semibold">Delivery:</strong> Azure CDN</li>
              </ul>
            </div>
            <div className="glass-card p-6 border-l-4 border-brand-blue">
              <p className="text-brand-blue-light font-bold text-xs uppercase tracking-wider mb-3">Data & Storage</p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><strong className="text-white font-semibold">DB:</strong> Azure SQL / PostgreSQL</li>
                <li><strong className="text-white font-semibold">Files:</strong> Azure Blob Storage</li>
                <li><strong className="text-white font-semibold">Security:</strong> Entra ID</li>
              </ul>
            </div>
            <div className="glass-card p-6 border-l-4 border-emerald-500">
              <p className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3">Serverless Functions</p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><strong className="text-white font-semibold">Images:</strong> Resize on upload streams</li>
                <li><strong className="text-white font-semibold">Notify:</strong> Email/SMS via Comms</li>
                <li><strong className="text-white font-semibold">Tasks:</strong> Scheduled database cleanup</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CloudSection;
