import React from 'react';
import { 
  Terminal, 
  GitPullRequest, 
  Hammer, 
  TestTube, 
  Container, 
  Send, 
  Cpu, 
  Globe, 
  Eye, 
  Activity, 
  RefreshCw 
} from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const PIPELINE_STEPS = [
  { icon: Terminal, label: 'Code', desc: 'Developer pushes to GitHub branch' },
  { icon: GitPullRequest, label: 'Pull Request', desc: 'Code review & peer approval' },
  { icon: Hammer, label: 'Build', desc: 'dotnet build — compile & restore' },
  { icon: TestTube, label: 'Test', desc: 'xUnit & NUnit automated tests' },
  { icon: Container, fill: true, label: 'Docker', desc: 'Container image built & pushed to ACR' },
  { icon: Send, label: 'Deploy', desc: 'Azure App Service auto-deployment' },
];

const TESTING_TYPES = [
  { icon: Cpu, label: 'Unit Tests', tech: 'xUnit / NUnit', desc: 'Core business logic & entity validations', color: 'coral' },
  { icon: Globe, label: 'API Tests', tech: 'Postman / Newman', desc: 'All 100+ REST endpoints validated', color: 'blue' },
  { icon: Eye, label: 'E2E Tests', tech: 'Playwright', desc: 'Automated UI & client flows verification', color: 'emerald' },
  { icon: Activity, label: 'Load Tests', tech: 'k6 / Benchmarks', desc: 'Throughput benchmarks & scaling testing', color: 'amber' },
];

const ProcessSection = () => (
  <section id="cicd" className="section-border-top py-24 px-4 bg-gradient-to-b from-transparent to-[#030508]/40">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 border border-brand-coral/25 text-brand-coral-light text-sm font-semibold mb-4">
            DevOps
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            CI/CD <span className="gradient-text-coral text-glow-coral">Pipeline</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            A fully automated delivery pipeline ensures every commit is tested, built, and deployed with zero manual steps.
          </p>
        </div>
      </ScrollReveal>

      {/* Pipeline Visualization */}
      <ScrollReveal>
        <div className="glass-card p-8 sm:p-10 mb-12 border border-white/5">
          <h3 className="text-base font-bold text-white mb-10 text-center uppercase tracking-widest opacity-60">Deployment Pipeline Flow</h3>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-brand-coral/60 via-brand-blue/60 to-brand-coral/60" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 relative z-10">
              {PIPELINE_STEPS.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center gap-3 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center shadow-lg group-hover:border-brand-coral/40 group-hover:shadow-brand-coral/10 hover:scale-105 transition-all duration-300">
                      <StepIcon className="w-6 h-6 text-brand-coral-light group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-brand-coral-light transition-colors">{step.label}</p>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Agile Methodology */}
      <ScrollReveal delay={1}>
        <div className="glass-card p-8 mb-8 border border-white/5">
          <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-brand-coral-light animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            Agile Methodology: Scrum
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Roles', detail: 'Product Owner, Scrum Master, Dev Team', color: 'coral' },
              { label: 'Tooling', detail: 'Jira / Trello for backlog & sprint planning', color: 'blue' },
              { label: 'Artifacts', detail: 'Product Backlog, Sprint Backlogs, Definition of Done', color: 'emerald' },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl border border-white/5 bg-white/[0.01] text-center hover:border-white/10 transition-colors">
                <p className={`font-bold text-sm mb-2 ${
                  item.color === 'coral' ? 'text-brand-coral-light' : 
                  item.color === 'blue' ? 'text-brand-blue-light' : 
                  'text-emerald-400'
                }`}>
                  {item.label}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Testing Strategy */}
      <ScrollReveal delay={2}>
        <div>
          <h3 className="text-xl font-black text-white mb-6 pl-1">Testing Strategy</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTING_TYPES.map((t, i) => {
              const TestIcon = t.icon;
              return (
                <div key={i} className={`glass-card p-5 border-t-2 ${
                  t.color === 'coral' ? 'border-brand-coral hover:border-brand-coral/60' :
                  t.color === 'blue' ? 'border-brand-blue hover:border-brand-blue/60' :
                  t.color === 'emerald' ? 'border-emerald-500 hover:border-emerald-500/60' : 
                  'border-amber-500 hover:border-amber-500/60'
                } hover:scale-105 transition-all duration-200`}>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-4">
                    <TestIcon className={`w-5 h-5 ${
                      t.color === 'coral' ? 'text-brand-coral-light' :
                      t.color === 'blue' ? 'text-brand-blue-light' :
                      t.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'
                    }`} />
                  </div>
                  <p className="font-bold text-white text-sm">{t.label}</p>
                  <p className={`text-xs font-semibold mt-1 ${
                    t.color === 'coral' ? 'text-brand-coral-light' :
                    t.color === 'blue' ? 'text-brand-blue-light' :
                    t.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'
                  }`}>{t.tech}</p>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProcessSection;
