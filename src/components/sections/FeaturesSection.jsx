import React, { useState } from 'react';
import { GraduationCap, Bike, Store, Shield, Lock, Check } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const ROLES = [
  {
    id: 'student',
    icon: GraduationCap,
    title: 'Students & Guests',
    color: 'coral',
    borderColor: 'border-brand-coral/40',
    glowColor: 'hover:shadow-brand-coral/10 hover:border-brand-coral/60',
    badgeClass: 'bg-brand-coral/15 text-brand-coral-light',
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
    icon: Bike,
    title: 'Student Riders',
    color: 'blue',
    borderColor: 'border-brand-blue/40',
    glowColor: 'hover:shadow-brand-blue/10 hover:border-brand-blue/60',
    badgeClass: 'bg-brand-blue/15 text-brand-blue-light',
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
    icon: Store,
    title: 'Campus Businesses',
    color: 'amber',
    borderColor: 'border-amber-500/40',
    glowColor: 'hover:shadow-amber-500/10 hover:border-amber-500/60',
    badgeClass: 'bg-amber-500/15 text-amber-400',
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
    icon: Shield,
    title: 'Platform Admin',
    color: 'slate',
    borderColor: 'border-slate-500/40',
    glowColor: 'hover:shadow-slate-500/10 hover:border-slate-500/60',
    badgeClass: 'bg-slate-500/15 text-slate-300',
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
  const ActiveIcon = active.icon;

  return (
    <section id="features" className="section-border-top py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 border border-brand-coral/25 text-brand-coral-light text-sm font-semibold mb-4">
              Core Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Built for <span className="gradient-text-coral text-glow-coral">Every Role</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
              NearU adapts dynamically to four distinct roles, each with a tailored interface and workflow.
            </p>
          </div>
        </ScrollReveal>

        {/* Role Selector Tabs */}
        <ScrollReveal delay={1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {ROLES.map(role => {
              const RoleIcon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  id={`role-tab-${role.id}`}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 border ${
                    activeRole === role.id
                      ? `${role.borderColor} ${role.badgeClass} shadow-lg shadow-brand-coral/5`
                      : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <RoleIcon className="w-4 h-4" />
                  {role.title}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Role Card */}
        <ScrollReveal>
          <div className={`glass-card p-8 sm:p-10 border ${active.borderColor} ${active.glowColor} transition-all duration-300`}>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                <ActiveIcon className={`w-8 h-8 ${active.id === 'student' ? 'text-brand-coral-light' : active.id === 'rider' ? 'text-brand-blue-light' : active.id === 'business' ? 'text-amber-400' : 'text-slate-300'}`} />
              </div>
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
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-200"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${active.id === 'student' ? 'text-brand-coral-light' : active.id === 'rider' ? 'text-brand-blue-light' : active.id === 'business' ? 'text-amber-400' : 'text-slate-300'}`} />
                  <span className="text-slate-300 text-sm">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Safety & Moderation banner */}
        <ScrollReveal delay={2}>
          <div className="mt-8 glass-card p-6 border border-brand-coral/20 bg-brand-coral/[0.01]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-coral/10 flex items-center justify-center flex-shrink-0 border border-brand-coral/20">
                <Lock className="w-5 h-5 text-brand-coral-light" />
              </div>
              <div>
                <h4 className="font-bold text-brand-coral-light mb-1">Platform Safety & Moderation</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  All business registrations require <strong className="text-white font-semibold">Admin Approval</strong> before going live.
                  Businesses with consistently poor reviews can be flagged and removed.
                  A mandatory <strong className="text-white font-semibold">Terms & Conditions</strong> agreement and a visible disclaimer ensure full user transparency:
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
