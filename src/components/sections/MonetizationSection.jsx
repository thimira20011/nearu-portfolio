import React from 'react';
import { 
  Star, 
  Gem, 
  Megaphone, 
  Map, 
  Globe, 
  CreditCard, 
  Sparkles, 
  GraduationCap, 
  Check 
} from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const TIERS = [
  {
    icon: Star,
    title: 'Premium Listings',
    subtitle: 'Boosted Visibility',
    color: '#fbbf24', // gold
    borderClass: 'border-amber-500/20 hover:border-amber-500/40',
    badgeClass: 'text-amber-400 bg-amber-500/10',
    desc: 'Businesses pay for priority placement in search results and browse feeds — maximum exposure to the student market.',
    features: ['Top of search results', 'Featured in browse feed', 'Highlighted badge on listing'],
  },
  {
    icon: Gem,
    title: 'Pro Subscription',
    subtitle: 'Advanced Tools',
    color: '#ff785a', // brand-coral-light
    borderClass: 'border-brand-coral/30 hover:border-brand-coral/50',
    badgeClass: 'text-brand-coral-light bg-brand-coral/10',
    desc: 'Monthly subscription unlocking analytics dashboards, bulk order tools, promotional scheduling, and priority support.',
    features: ['Advanced analytics dashboard', 'Promotion scheduling tools', 'Bulk inquiry management', 'Priority support'],
    highlight: true,
  },
  {
    icon: Megaphone,
    title: 'Ad Placement',
    subtitle: 'Native Advertising',
    color: '#1d76ca', // brand-blue-light
    borderClass: 'border-brand-blue/20 hover:border-brand-blue/40',
    badgeClass: 'text-brand-blue-light bg-brand-blue/10',
    desc: 'Standard display advertising via AdSense integration or direct sponsor placements within the student browse experience.',
    features: ['Banner & inline ad slots', 'Campus-targeted audience', 'Direct sponsor deals'],
  },
];

const ROADMAP = [
  { phase: 'Q3 2026', icon: Globe, title: 'City-Wide Expansion', desc: 'Scale beyond campus to serve the broader town — same platform, wider reach.', color: '#1d76ca' },
  { phase: 'Q4 2026', icon: CreditCard, title: 'Transaction Fees', desc: 'Optional small percentage fee per completed order/booking processed through NearU.', color: '#ff785a' },
  { phase: 'Q1 2027', icon: Sparkles, title: 'AI Recommendations', desc: 'Personalized service discovery using order history and behavioral patterns.', color: '#fbbf24' },
  { phase: 'Q2 2027', icon: GraduationCap, title: 'Multi-Campus', desc: 'Partner with universities across Sri Lanka — university-to-university network.', color: '#10b981' },
];

const MonetizationSection = () => (
  <section id="monetization" className="section-border-top py-24 px-4 bg-gradient-to-b from-transparent to-[#030508]/40">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 border border-brand-coral/25 text-brand-coral-light text-sm font-semibold mb-4">
            Business Model
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Monetization & <span className="gradient-text-coral text-glow-coral">Roadmap</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            A multi-tiered revenue model built for sustainable growth and scalable impact.
          </p>
        </div>
      </ScrollReveal>

      {/* Revenue Tiers */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {TIERS.map((tier, i) => {
          const TierIcon = tier.icon;
          return (
            <ScrollReveal key={i} delay={i + 1}>
              <div className={`glass-card p-6 h-full border ${tier.borderClass} flex flex-col ${
                tier.highlight 
                  ? 'ring-1 ring-brand-coral/30 shadow-lg shadow-brand-coral/10 hover:scale-105' 
                  : 'hover:scale-105'
              } transition-all duration-300 relative`}>
                
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-brand-coral text-white text-[10px] font-black uppercase tracking-wider shadow-lg shadow-brand-coral/40">
                      Primary Model
                    </span>
                  </div>
                )}
                
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-4">
                  <TierIcon className="w-6 h-6" style={{ color: tier.color }} />
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${tier.badgeClass} mb-2`}>
                    {tier.subtitle}
                  </span>
                  <h3 className="text-xl font-black text-white">{tier.title}</h3>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{tier.desc}</p>
                
                <ul className="space-y-3 border-t border-white/5 pt-4 mt-auto">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: tier.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Future Roadmap */}
      <ScrollReveal>
        <div className="glass-card p-8 border border-white/5">
          <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center">
              <Map className="w-5 h-5 text-brand-coral-light" />
            </div>
            Future Roadmap
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROADMAP.map((item, i) => {
              const RoadIcon = item.icon;
              return (
                <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-brand-coral/25 transition-all duration-300">
                  <p className="text-[10px] font-black uppercase tracking-wider mb-2" style={{ color: item.color }}>{item.phase}</p>
                  
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center mb-3">
                    <RoadIcon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  
                  <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default MonetizationSection;
