import React, { useState } from 'react';
import { GraduationCap, Bike, Store, Shield, Lock, Check } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import TiltCard from '../TiltCard';
import SectionHeader from '../SectionHeader';
import { COLOR_PRESETS } from '../../utils/colors';

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
    title: 'Local Businesses',
    color: 'amber',
    borderColor: 'border-amber-500/30',
    glowColor: 'hover:shadow-amber-500/10 hover:border-amber-500/50',
    badgeClass: 'bg-amber-500/15 text-amber-400',
    features: [
      'Create & manage business profiles',
      'List products/services with pricing & details',
      'Create and update discounts/promos',
      'Manage incoming orders and request delivery riders',
      'Reply to student reviews & ratings',
      'View sales reports & analytics dashboard',
    ],
  },
  {
    id: 'admin',
    icon: Shield,
    title: 'Platform Admins',
    color: 'slate',
    borderColor: 'border-slate-500/30',
    glowColor: 'hover:shadow-slate-500/10 hover:border-slate-500/50',
    badgeClass: 'bg-slate-500/15 text-slate-300',
    features: [
      'Approve & moderate business registrations',
      'Manage user accounts & active roles',
      'Monitor active deliveries & rider logs',
      'Handle system reports & disputes',
      'Configure platform fees & commissions',
      'Access platform-wide financial statements',
    ],
  },
];

const FeaturesSection = () => {
  const [activeRole, setActiveRole] = useState('student');
  const active = ROLES.find(r => r.id === activeRole);
  const ActiveIcon = active.icon;
  const colorSet = COLOR_PRESETS[active.color];

  return (
    <section id="features" className="section-border-top py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Core Features"
          titleStart="Built for"
          highlight="Every Role"
          subtitle="NearU adapts dynamically to four distinct roles, each with a tailored interface and workflow."
        />

        {/* Role Selector Tabs — fully accessible */}
        <ScrollReveal delay={1}>
          <div
            role="tablist"
            aria-label="User role selector"
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {ROLES.map(role => {
              const RoleIcon = role.icon;
              const isActive = activeRole === role.id;
              return (
                <button
                  key={role.id}
                  role="tab"
                  id={`role-tab-${role.id}`}
                  aria-selected={isActive}
                  aria-controls={`role-panel-${role.id}`}
                  onClick={() => setActiveRole(role.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 border ${
                    isActive
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

        {/* Active Role Card — key triggers tab-fade-in animation on switch */}
        <ScrollReveal>
          <div
            key={active.id}
            id={`role-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`role-tab-${active.id}`}
            className="tab-fade-in"
          >
            <TiltCard
              glowColor={colorSet.glow(0.28)}
              className={`glass-card p-8 sm:p-10 border ${active.borderColor} ${active.glowColor} transition-all duration-300`}
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                  <ActiveIcon className={`w-8 h-8 ${colorSet.text}`} />
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
                    key={feat}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-200"
                  >
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colorSet.text}`} />
                    <span className="text-slate-300 text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>
        </ScrollReveal>

        {/* Safety & Moderation banner */}
        <ScrollReveal delay={2}>
          <TiltCard
            glowColor="rgba(224, 86, 56, 0.25)"
            className="mt-8 glass-card p-6 border border-brand-coral/20 bg-brand-coral/[0.01]"
          >
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
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesSection;
