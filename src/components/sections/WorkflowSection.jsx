import React from 'react';
import ScrollReveal from '../ScrollReveal';
import SectionHeader from '../SectionHeader';

const PHASES = [
  {
    phase: '01',
    title: 'Discovery & Foundation',
    period: 'Sep – Oct 2025',
    color: '#ff785a', // brand-coral-light
    items: [
      'Defined Product Backlog & user stories',
      'Created UI/UX wireframes in Figma',
      'Set up GitHub repositories & branching strategy',
      'Designed database schema (code-first)',
      'Configured Azure & CI/CD foundations',
    ],
  },
  {
    phase: '02',
    title: 'Core API & Frontend',
    period: 'Oct – Nov 2025',
    color: '#1d76ca', // brand-blue-light
    items: [
      'Built ASP.NET Core API endpoints (auth, businesses, users)',
      'Implemented JWT + Refresh Token authentication',
      'Deployed initial React frontend & routing',
      'Built Expo mobile app scaffolding',
      'Integrated ImageKit for media uploads',
    ],
  },
  {
    phase: '03',
    title: 'Feature Integration',
    period: 'Nov – Dec 2025',
    color: '#fbbf24', // amber
    items: [
      'Completed order & delivery coordination module',
      'Built job board & rider dashboard',
      'Integrated Azure Functions (image processing)',
      'Implemented review & rating system',
      'Role-based dashboards (Admin, Business, Rider)',
    ],
  },
  {
    phase: '04',
    title: 'Testing & Hardening',
    period: 'Jan – Feb 2026',
    color: '#10b981', // emerald
    items: [
      'xUnit & NUnit test suites for all services',
      'Playwright E2E test automation',
      'Postman API collection (100+ tests)',
      'Load testing with k6 benchmarks',
      'Security audit: rate limiting & CORS',
    ],
  },
  {
    phase: '05',
    title: 'Launch & Documentation',
    period: 'Feb – Mar 2026',
    color: '#ff785a', // brand-coral-light
    items: [
      'Production deployment to Azure App Service',
      'Docker containerization & ACR pipeline',
      'OpenAPI / Scalar documentation published',
      'Portfolio site developed & launched',
      'Capstone project presentation prepared',
    ],
  },
];

const WorkflowSection = () => (
  <section id="timeline" className="section-border-top py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        badge="Agile Workflow"
        titleStart="Project"
        highlight="Timeline"
        subtitle="Executed across 5 focused phases following Scrum methodology with clearly defined deliverables."
      />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-0.5 timeline-line opacity-40" />

        <div className="space-y-10">
          {PHASES.map((phase, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={i} direction={isEven ? 'left' : 'right'} delay={1}>
                <div className={`relative flex flex-col sm:flex-row gap-6 ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="flex-1 sm:max-w-[calc(50%-2rem)] ml-14 sm:ml-0">
                    <div
                      className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 border border-white/5"
                      style={{ borderColor: `${phase.color}25` }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-[10px] font-black px-2.5 py-1 rounded-lg"
                          style={{ background: `${phase.color}15`, color: phase.color, border: `1px solid ${phase.color}30` }}
                        >
                          PHASE {phase.phase}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">{phase.period}</span>
                      </div>
                      <h3 className="text-lg font-black text-white mb-4">{phase.title}</h3>
                      <ul className="space-y-2.5">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: phase.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full border-4 border-[#030508] shadow-lg" style={{ background: phase.color, boxShadow: `0 0 15px ${phase.color}60` }} />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block flex-1 sm:max-w-[calc(50%-2rem)]" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default WorkflowSection;
