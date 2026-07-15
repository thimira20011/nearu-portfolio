/**
 * Shared colour presets for consistent Tailwind class usage across sections.
 * Use COLOR_PRESETS[colorKey].text etc. instead of repeated ternary chains.
 *
 * @example
 *   import { COLOR_PRESETS } from '../../utils/colors';
 *   <Icon className={`w-6 h-6 ${COLOR_PRESETS[cat.color].text}`} />
 *   glowColor={COLOR_PRESETS[active.color].glow(0.25)}
 */
export const COLOR_PRESETS = {
  coral: {
    text:    'text-brand-coral-light',
    bg:      'bg-brand-coral/10',
    border:  'border-brand-coral/30',
    /** Full pill/badge classes */
    tag:     'bg-brand-coral/10 border-brand-coral/30 text-brand-coral-light',
    tagHover:'hover:bg-brand-coral/20 hover:border-brand-coral-light/50 hover:shadow-brand-coral/10',
    hex:     '#ff785a',
    /** Returns a CSS rgba string for use in style props / TiltCard glowColor */
    glow:    (alpha = 0.3) => `rgba(224, 86, 56, ${alpha})`,
  },
  blue: {
    text:    'text-brand-blue-light',
    bg:      'bg-brand-blue/10',
    border:  'border-brand-blue/30',
    tag:     'bg-brand-blue/10 border-brand-blue/30 text-brand-blue-light',
    tagHover:'hover:bg-brand-blue/20 hover:border-brand-blue-light/50 hover:shadow-brand-blue/10',
    hex:     '#1d76ca',
    glow:    (alpha = 0.3) => `rgba(15, 76, 129, ${alpha})`,
  },
  amber: {
    text:    'text-amber-400',
    bg:      'bg-amber-500/10',
    border:  'border-amber-500/30',
    tag:     'bg-amber-500/10 border-amber-500/30 text-amber-400',
    tagHover:'hover:bg-amber-500/20 hover:border-amber-400/50 hover:shadow-amber-500/10',
    hex:     '#fbbf24',
    glow:    (alpha = 0.3) => `rgba(245, 158, 11, ${alpha})`,
  },
  emerald: {
    text:    'text-emerald-400',
    bg:      'bg-emerald-500/10',
    border:  'border-emerald-500/30',
    tag:     'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    tagHover:'hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:shadow-emerald-500/10',
    hex:     '#10b981',
    glow:    (alpha = 0.3) => `rgba(16, 185, 129, ${alpha})`,
  },
  slate: {
    text:    'text-slate-300',
    bg:      'bg-slate-500/10',
    border:  'border-slate-500/30',
    tag:     'bg-slate-500/10 border-slate-500/30 text-slate-300',
    tagHover:'hover:bg-slate-500/20 hover:border-slate-400/50 hover:shadow-slate-500/10',
    hex:     '#94a3b8',
    glow:    (alpha = 0.3) => `rgba(100, 116, 139, ${alpha})`,
  },
};
