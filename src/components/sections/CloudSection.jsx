import React from 'react';
import ScrollReveal from '../ScrollReveal';

// ============================================================
// IMAGE PLACEHOLDERS — Replace URL below with your real Azure diagram
// ============================================================
// const IMG_AZURE_DIAGRAM = "YOUR_AZURE_ARCHITECTURE_DIAGRAM_URL_HERE";

const AZURE_SERVICES = [
  { icon: '🖥️', name: 'Azure App Service', desc: 'Hosts the containerized .NET API (Docker)' },
  { icon: '🌐', name: 'Application Gateway', desc: 'Load balancing & SSL termination' },
  { icon: '🚀', name: 'Azure CDN', desc: 'Static asset caching & global delivery' },
  { icon: '🗄️', name: 'Azure SQL / PostgreSQL', desc: 'Managed relational database' },
  { icon: '🗃️', name: 'Azure Blob Storage', desc: 'Images, menus, documents' },
  { icon: '🔐', name: 'Entra ID (AAD)', desc: 'Identity & role management' },
  { icon: '⚡', name: 'Azure Functions', desc: 'Serverless: image processing & notifications' },
  { icon: '📧', name: 'Communication Services', desc: 'Email & SMS for order confirmations' },
  { icon: '📦', name: 'Container Registry', desc: 'Docker image repository for CI/CD' },
];

const CloudSection = ({ openImageModal }) => (
  <section id="cloud" className="section-border-top py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-sm font-semibold mb-4">
            Cloud Infrastructure
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Azure Cloud <span className="gradient-text">Strategy</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Designed for reliability and scalability using Azure as the industry-standard cloud platform.
          </p>
        </div>
      </ScrollReveal>

      {/* Architecture Diagram Placeholder */}
      <ScrollReveal delay={1}>
        <div
          className="glass-card p-2 mb-12 border-dashed border-2 border-cyan-500/20 group cursor-pointer overflow-hidden rounded-2xl"
          onClick={() => openImageModal && openImageModal(null)}
        >
          <div className="aspect-video rounded-xl bg-gradient-to-br from-cyan-500/5 to-violet-500/5 flex flex-col items-center justify-center border border-white/5">
            <span className="text-5xl mb-4">☁️</span>
            <p className="text-slate-500 font-semibold text-sm">Azure Architecture Diagram</p>
            <p className="text-slate-700 text-xs mt-1">
              {/* Replace IMG_AZURE_DIAGRAM constant above with your real diagram URL */}
              Add your Azure architecture diagram image URL to display here
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Azure Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {AZURE_SERVICES.map((svc, i) => (
          <ScrollReveal key={i} delay={Math.floor(i / 3) + 1}>
            <div className="glass-card p-5 flex items-start gap-4 group hover:border-cyan-500/30 transition-all duration-200">
              <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{svc.icon}</span>
              <div>
                <p className="font-bold text-white text-sm">{svc.name}</p>
                <p className="text-slate-500 text-xs mt-1">{svc.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Tiered Architecture Breakdown */}
      <ScrollReveal>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass-card p-6 border-l-4 border-violet-500">
            <p className="text-violet-400 font-bold text-xs uppercase tracking-wider mb-3">Application Layer</p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><strong className="text-white">Compute:</strong> Azure App Service (Docker)</li>
              <li><strong className="text-white">Traffic:</strong> Azure Application Gateway</li>
              <li><strong className="text-white">Delivery:</strong> Azure CDN</li>
            </ul>
          </div>
          <div className="glass-card p-6 border-l-4 border-cyan-500">
            <p className="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-3">Data & Storage</p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><strong className="text-white">DB:</strong> Azure SQL / PostgreSQL</li>
              <li><strong className="text-white">Files:</strong> Azure Blob Storage</li>
              <li><strong className="text-white">Security:</strong> Entra ID</li>
            </ul>
          </div>
          <div className="glass-card p-6 border-l-4 border-green-500">
            <p className="text-green-400 font-bold text-xs uppercase tracking-wider mb-3">Serverless Functions</p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><strong className="text-white">Images:</strong> Resize on upload</li>
              <li><strong className="text-white">Notify:</strong> Email/SMS via Comms</li>
              <li><strong className="text-white">Tasks:</strong> Scheduled cleanup</li>
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CloudSection;
