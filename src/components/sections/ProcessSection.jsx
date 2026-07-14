import React from 'react';
import ScrollReveal from '../ScrollReveal';

const PIPELINE_STEPS = [
  { icon: '💻', label: 'Code', desc: 'Developer pushes to GitHub branch' },
  { icon: '🔀', label: 'Pull Request', desc: 'Code review & peer approval' },
  { icon: '🔨', label: 'Build', desc: 'dotnet build — compile & restore' },
  { icon: '🧪', label: 'Test', desc: 'xUnit & NUnit automated tests' },
  { icon: '🐋', label: 'Docker', desc: 'Container image built & pushed to ACR' },
  { icon: '🚀', label: 'Deploy', desc: 'Azure App Service auto-deployment' },
];

const TESTING_TYPES = [
  { icon: '⚡', label: 'Unit Tests', tech: 'xUnit / NUnit', desc: 'Core business logic validation', color: 'violet' },
  { icon: '🔌', label: 'API Tests', tech: 'Postman / Newman', desc: 'All REST endpoints validated', color: 'cyan' },
  { icon: '🎭', label: 'E2E Tests', tech: 'Playwright', desc: 'Automated UI verification', color: 'emerald' },
  { icon: '📊', label: 'Load Tests', tech: 'k6 / Benchmarks', desc: 'Performance & throughput testing', color: 'amber' },
];

const ProcessSection = () => (
  <section id="cicd" className="section-border-top py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-400 text-sm font-semibold mb-4">
            DevOps
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            CI/CD <span className="gradient-text">Pipeline</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A fully automated delivery pipeline ensures every commit is tested, built, and deployed with zero manual steps.
          </p>
        </div>
      </ScrollReveal>

      {/* Pipeline Visualization */}
      <ScrollReveal>
        <div className="glass-card p-8 sm:p-10 mb-12">
          <h3 className="text-lg font-bold text-white mb-8 text-center">Deployment Pipeline Flow</h3>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-violet-500/60 via-cyan-500/60 to-violet-500/60" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 relative z-10">
              {PIPELINE_STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-2xl border border-violet-500/20 shadow-lg shadow-violet-500/10 hover:border-violet-500/40 hover:shadow-violet-500/20 transition-all duration-200">
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{step.label}</p>
                    <p className="text-xs text-slate-600 mt-0.5 leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Agile Methodology */}
      <ScrollReveal delay={1}>
        <div className="glass-card p-8 mb-8">
          <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
            <span>🔄</span> Agile Methodology: Scrum
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Roles', detail: 'Product Owner, Scrum Master, Dev Team', color: 'violet' },
              { label: 'Tooling', detail: 'Jira / Trello for backlog & sprint planning', color: 'cyan' },
              { label: 'Artifacts', detail: 'Product Backlog, Sprint Backlogs, DoD', color: 'emerald' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                <p className={`font-bold text-sm mb-2 ${item.color === 'violet' ? 'text-violet-400' : item.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'}`}>
                  {item.label}
                </p>
                <p className="text-slate-400 text-xs">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Testing Strategy */}
      <ScrollReveal delay={2}>
        <div>
          <h3 className="text-xl font-black text-white mb-6">Testing Strategy</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTING_TYPES.map((t, i) => (
              <div key={i} className={`glass-card p-5 border-t-2 ${
                t.color === 'violet' ? 'border-violet-500' :
                t.color === 'cyan' ? 'border-cyan-500' :
                t.color === 'emerald' ? 'border-emerald-500' : 'border-amber-500'
              } hover:scale-105 transition-transform duration-200`}>
                <div className="text-3xl mb-3">{t.icon}</div>
                <p className="font-bold text-white text-sm">{t.label}</p>
                <p className={`text-xs font-semibold mt-1 ${
                  t.color === 'violet' ? 'text-violet-400' :
                  t.color === 'cyan' ? 'text-cyan-400' :
                  t.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'
                }`}>{t.tech}</p>
                <p className="text-slate-500 text-xs mt-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProcessSection;
