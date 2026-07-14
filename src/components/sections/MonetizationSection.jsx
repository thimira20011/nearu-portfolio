import React from 'react';
import ScrollReveal from '../ScrollReveal';

const TIERS = [
  {
    icon: '⭐',
    title: 'Premium Listings',
    subtitle: 'Boosted Visibility',
    color: '#f59e0b',
    borderClass: 'border-amber-500/30',
    badgeClass: 'text-amber-400 bg-amber-500/10',
    desc: 'Businesses pay for priority placement in search results and browse feeds — maximum exposure to the student market.',
    features: ['Top of search results', 'Featured in browse feed', 'Highlighted badge on listing'],
  },
  {
    icon: '💎',
    title: 'Pro Subscription',
    subtitle: 'Advanced Tools',
    color: '#a855f7',
    borderClass: 'border-violet-500/40',
    badgeClass: 'text-violet-300 bg-violet-500/10',
    desc: 'Monthly subscription unlocking analytics dashboards, bulk order tools, promotional scheduling, and priority support.',
    features: ['Advanced analytics dashboard', 'Promotion scheduling tools', 'Bulk inquiry management', 'Priority support'],
    highlight: true,
  },
  {
    icon: '📢',
    title: 'Ad Placement',
    subtitle: 'Native Advertising',
    color: '#06b6d4',
    borderClass: 'border-cyan-500/30',
    badgeClass: 'text-cyan-400 bg-cyan-500/10',
    desc: 'Standard display advertising via AdSense integration or direct sponsor placements within the student browse experience.',
    features: ['Banner & inline ad slots', 'Campus-targeted audience', 'Direct sponsor deals'],
  },
];

const ROADMAP = [
  { phase: 'Q3 2026', icon: '🌍', title: 'City-Wide Expansion', desc: 'Scale beyond campus to serve the broader town — same platform, wider reach.' },
  { phase: 'Q4 2026', icon: '💳', title: 'Transaction Fees', desc: 'Optional small percentage fee per completed order/booking processed through NearU.' },
  { phase: 'Q1 2027', icon: '🤖', title: 'AI Recommendations', desc: 'Personalized service discovery using order history and behavioral patterns.' },
  { phase: 'Q2 2027', icon: '🏫', title: 'Multi-Campus', desc: 'Partner with universities across Sri Lanka — university-to-university network.' },
];

const MonetizationSection = () => (
  <section id="monetization" className="section-border-top py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-400 text-sm font-semibold mb-4">
            Business Model
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Monetization & <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A multi-tiered revenue model built for sustainable growth and scalable impact.
          </p>
        </div>
      </ScrollReveal>

      {/* Revenue Tiers */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {TIERS.map((tier, i) => (
          <ScrollReveal key={i} delay={i + 1}>
            <div className={`glass-card p-6 h-full border ${tier.borderClass} flex flex-col ${tier.highlight ? 'ring-1 ring-violet-500/30 shadow-lg shadow-violet-500/10' : ''} hover:scale-105 transition-transform duration-200 relative`}>
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-violet-500 text-white text-xs font-bold shadow-lg shadow-violet-500/40">Most Revenue</span>
                </div>
              )}
              <div className="text-4xl mb-4">{tier.icon}</div>
              <div className="mb-4">
                <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold ${tier.badgeClass} mb-2`}>{tier.subtitle}</span>
                <h3 className="text-xl font-black text-white">{tier.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{tier.desc}</p>
              <ul className="space-y-2">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: tier.color }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Future Roadmap */}
      <ScrollReveal>
        <div className="glass-card p-8">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-2">
            <span>🗺️</span> Future Roadmap
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROADMAP.map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-violet-500/20 transition-all duration-200">
                <p className="text-xs text-violet-400 font-bold mb-2">{item.phase}</p>
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default MonetizationSection;
