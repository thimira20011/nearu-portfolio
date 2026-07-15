import React from 'react';
import { GraduationCap, Store, Car, Briefcase, Check } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import SectionHeader from '../SectionHeader';

const PROBLEMS = [
  { icon: GraduationCap, title: 'Fragmented Discovery', desc: 'Students waste time searching across platforms for food, transport, hostels, and accommodation near campus.' },
  { icon: Store, title: 'Invisible Local Businesses', desc: 'Campus-adjacent businesses lack digital presence and miss out on the student market entirely.' },
  { icon: Car, title: 'Uncoordinated Rides', desc: 'No structured system for student-to-student ride sharing or on-demand campus transport.' },
  { icon: Briefcase, title: 'Limited Gig Opportunities', desc: 'Students struggle to find flexible, campus-friendly part-time jobs and micro-gigs.' },
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
      <SectionHeader
        badge="Project Overview"
        titleStart="The"
        highlight="Problem"
        titleEnd="We Solved"
        subtitle="NearU was born from a real need at Sabaragamuwa University — bridging the gap between students and local services."
        maxWidth="max-w-2xl"
      />

      {/* Problem Cards */}
      <div className="grid sm:grid-cols-2 gap-6 mb-20">
        {PROBLEMS.map((p, i) => {
          const Icon = p.icon;
          return (
            <ScrollReveal key={i} delay={i % 2 === 0 ? 1 : 2} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="glass-card p-6 h-full border border-brand-coral/15 hover:border-brand-coral/30 hover:shadow-brand-coral/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-coral/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-coral-light" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Solution */}
      <ScrollReveal>
        <div className="rounded-2xl border border-brand-coral/25 bg-gradient-to-br from-brand-coral/5 via-transparent to-brand-blue/5 p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">
                Our <span className="gradient-text-coral text-glow-coral">Solution</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm sm:text-base">
                <strong className="text-slate-200">NearU</strong> is a full-stack, cross-platform marketplace that unifies food, transport, accommodation, gifts, and jobs into one hyper-local ecosystem — purpose-built for university campus life.
              </p>
              <ul className="space-y-3">
                {SOLUTIONS.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-coral/10 border border-brand-coral/30 flex-shrink-0 flex items-center justify-center">
                      <Check className="w-3 h-3 text-brand-coral-light" />
                    </span>
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual callout */}
            <div className="space-y-4">
              <div className="glass-card p-6 border-l-4 border-brand-coral">
                <p className="text-xs text-brand-coral-light font-bold uppercase tracking-wider mb-1">Institution</p>
                <p className="text-white font-bold text-sm sm:text-base">Sabaragamuwa University of Sri Lanka</p>
                <p className="text-slate-500 text-xs mt-0.5">Faculty of Computing — Group 11</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-brand-blue">
                <p className="text-xs text-brand-blue-light font-bold uppercase tracking-wider mb-1">Live Backend</p>
                <a href="https://api.nearusab.me/scalar/v1" target="_blank" rel="noopener noreferrer"
                  className="text-white font-bold hover:text-brand-blue-light transition-colors break-all text-sm sm:text-base">
                  api.nearusab.me
                </a>
                <p className="text-slate-500 text-xs mt-1">Production API — Always On</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-amber-500">
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">Academic Year</p>
                <p className="text-white font-bold text-sm sm:text-base">2025 — Capstone Project</p>
                <p className="text-slate-500 text-xs mt-0.5">Presented to Faculty of Computing</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OverviewSection;
