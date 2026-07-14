import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const ROLES = [
  {
    id: 'student',
    icon: '🎓',
    title: 'Students & Guests',
    color: 'violet',
    borderColor: 'border-violet-500/40',
    glowColor: 'hover:shadow-violet-500/20',
    badgeClass: 'bg-violet-500/10 text-violet-300',
    features: [
      'Browse & discover local services by category',
      'Order food, laundry, printing & custom errands',
      'Request on-demand campus rides',
      'Browse & apply for part-time jobs and gigs',
      'Search nearby hostels & student accommodation',
      'Save favourites for quick access',
      'Submit detailed reviews & star ratings',
    ],
  },
  {
    id: 'rider',
    icon: '🏍️',
    title: 'Student Riders',
    color: 'cyan',
    borderColor: 'border-cyan-500/40',
    glowColor: 'hover:shadow-cyan-500/20',
    badgeClass: 'bg-cyan-500/10 text-cyan-300',
    features: [
      'Toggle active/offline delivery status',
      'Receive & accept incoming delivery requests',
      'Real-time navigation & customer contact',
      'Track completed gigs & earnings',
      'Manage vehicle info & rider profile',
      'View delivery history & performance stats',
    ],
  },
  {
    id: 'business',
    icon: '🏪',
    title: 'Campus Businesses',
    color: 'emerald',
    borderColor: 'border-emerald-500/40',
    glowColor: 'hover:shadow-emerald-500/20',
    badgeClass: 'bg-emerald-500/10 text-emerald-300',
    features: [
      'Register & manage professional business profiles',
      'Upload photos, menus, pricing & service details',
      'Manage incoming orders & appointments',
      'Post deals & promotional offers to student feed',
      'Dashboard: views, ratings & sales overview',
      'Respond to customer reviews',
      'Post job openings for student applicants',
    ],
  },
  {
    id: 'admin',
    icon: '🛡️',
    title: 'Platform Admin',
    color: 'amber',
    borderColor: 'border-amber-500/40',
    glowColor: 'hover:shadow-amber-500/20',
    badgeClass: 'bg-amber-500/10 text-amber-300',
    features: [
      'Approve / reject business registrations',
      'Moderate reported users & reviews',
      'Manage monetization & subscription tiers',
      'Remove services with poor ratings',
      'Platform-wide analytics dashboard',
      'Manage disclaimer & policy content',
    ],
  },
];

const FeaturesSection = () => {
  const [activeRole, setActiveRole] = useState('student');
  const active = ROLES.find(r => r.id === activeRole);

  return (
    <section id="features" className="section-border-top py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-400 text-sm font-semibold mb-4">
              Core Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Built for <span className="gradient-text">Every Role</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              NearU adapts dynamically to four distinct roles, each with a tailored interface and workflow.
            </p>
          </div>
        </ScrollReveal>

        {/* Role Selector Tabs */}
        <ScrollReveal delay={1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {ROLES.map(role => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                id={`role-tab-${role.id}`}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                  activeRole === role.id
                    ? `${role.borderColor} ${role.badgeClass} shadow-lg shadow-violet-500/10`
                    : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <span className="text-lg">{role.icon}</span>
                {role.title}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Role Card */}
        <ScrollReveal>
          <div className={`glass-card p-8 sm:p-10 border ${active.borderColor} hover:shadow-2xl ${active.glowColor} transition-all duration-300`}>
            <div className="flex items-start gap-4 mb-8">
              <div className="text-5xl leading-none">{active.icon}</div>
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${active.badgeClass} mb-2`}>
                  {active.title}
                </span>
                <h3 className="text-2xl font-black text-white">
                  {active.title} Features
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {active.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors duration-200"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300 text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Safety & Moderation banner */}
        <ScrollReveal delay={2}>
          <div className="mt-8 glass-card p-6 border border-rose-500/20 bg-rose-500/[0.03]">
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">🔒</span>
              <div>
                <h4 className="font-bold text-rose-300 mb-1">Platform Safety & Moderation</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  All business registrations require <strong className="text-white">Admin Approval</strong> before going live.
                  Businesses with consistently poor reviews can be flagged and removed.
                  A mandatory <strong className="text-white">Terms & Conditions</strong> agreement and a visible disclaimer ensure full user transparency:
                  <em className="text-slate-500"> "This platform lists contacts only — NearU does not take responsibility for external service quality or agreements."</em>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesSection;
