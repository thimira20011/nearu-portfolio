import React from 'react';
import ScrollReveal from '../ScrollReveal';

const PROBLEMS = [
  { icon: '🎓', title: 'Fragmented Discovery', desc: 'Students waste time searching across platforms for food, transport, gifts, and accommodation near campus.' },
  { icon: '🏪', title: 'Invisible Local Businesses', desc: 'Campus-adjacent businesses lack digital presence and miss out on the student market entirely.' },
  { icon: '🚗', title: 'Uncoordinated Rides', desc: 'No structured system for student-to-student ride sharing or on-demand campus transport.' },
  { icon: '💼', title: 'Limited Gig Opportunities', desc: 'Students struggle to find flexible, campus-friendly part-time jobs and micro-gigs.' },
];

const SOLUTIONS = [
  { label: 'Unified marketplace for all campus services' },
  { label: 'Role-based system: Student, Rider, Business, Admin' },
  { label: 'Real-time order tracking & delivery coordination' },
  { label: 'Integrated job board for student gigs' },
  { label: 'Review, rating, and business verification system' },
  { label: 'JWT-secured API with refresh token rotation' },
];

const OverviewSection = () => (
  <section id="overview" className="section-border-top py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-400 text-sm font-semibold mb-4">
            Project Overview
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The <span className="gradient-text">Problem</span> We Solved
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            NearU was born from a real need at Sabaragamuwa University — bridging the gap between students and local services.
          </p>
        </div>
      </ScrollReveal>

      {/* Problem Cards */}
      <div className="grid sm:grid-cols-2 gap-6 mb-20">
        {PROBLEMS.map((p, i) => (
          <ScrollReveal key={i} delay={i % 2 === 0 ? 1 : 2} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div className="glass-card p-6 h-full">
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Solution */}
      <ScrollReveal>
        <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">
                Our <span className="gradient-text">Solution</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                <strong className="text-slate-200">NearU</strong> is a full-stack, cross-platform marketplace that unifies food, transport, accommodation, gifts, and jobs into one hyper-local ecosystem — purpose-built for university campus life.
              </p>
              <ul className="space-y-3">
                {SOLUTIONS.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/40 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-3 h-3 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual callout */}
            <div className="space-y-4">
              <div className="glass-card p-6 border-l-4 border-violet-500">
                <p className="text-sm text-violet-400 font-semibold uppercase tracking-wider mb-1">Institution</p>
                <p className="text-white font-bold">Sabaragamuwa University of Sri Lanka</p>
                <p className="text-slate-500 text-sm">Faculty of Computing — Group 11</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-cyan-500">
                <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider mb-1">Live Backend</p>
                <a href="https://api.nearusab.me/scalar/v1" target="_blank" rel="noopener noreferrer"
                  className="text-white font-bold hover:text-cyan-300 transition-colors break-all">
                  api.nearusab.me
                </a>
                <p className="text-slate-500 text-sm mt-1">Production API — Always On</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-green-500">
                <p className="text-sm text-green-400 font-semibold uppercase tracking-wider mb-1">Academic Year</p>
                <p className="text-white font-bold">2025 — Capstone Project</p>
                <p className="text-slate-500 text-sm">Presented to Faculty of Computing</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OverviewSection;
