import React from 'react';
import ScrollReveal from './ScrollReveal';

/**
 * SectionHeader — Reusable section title block used by every section.
 * Eliminates the repeated badge + h2 + description pattern (~165 lines saved).
 *
 * @prop {string}  badge       - Small pill label above the title
 * @prop {string}  titleStart  - Text before the gradient highlight word
 * @prop {string}  highlight   - The gradient-coloured word(s) in the h2
 * @prop {string}  [titleEnd]  - Optional text after the highlight (e.g. "We Solved")
 * @prop {string}  [subtitle]  - Supporting paragraph below the h2
 * @prop {'coral'|'blue'} [variant='coral'] - Colour theme
 * @prop {string}  [maxWidth='max-w-xl']    - Tailwind max-width on subtitle
 *
 * @example
 *   <SectionHeader
 *     badge="Technology Stack"
 *     titleStart="Built with"
 *     highlight="Modern Tech"
 *     subtitle="A carefully chosen stack..."
 *   />
 */
const SectionHeader = ({
  badge,
  titleStart,
  highlight,
  titleEnd = '',
  subtitle,
  variant = 'coral',
  maxWidth = 'max-w-xl',
}) => {
  const variantClasses = {
    coral: {
      badge:    'bg-brand-coral/10 border border-brand-coral/25 text-brand-coral-light',
      gradient: 'gradient-text-coral text-glow-coral',
    },
    blue: {
      badge:    'bg-brand-blue/10 border border-brand-blue/25 text-brand-blue-light',
      gradient: 'gradient-text-blue text-glow-blue',
    },
  };

  const cls = variantClasses[variant] ?? variantClasses.coral;

  return (
    <ScrollReveal>
      <div className="text-center mb-16">
        {badge && (
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${cls.badge}`}>
            {badge}
          </span>
        )}

        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
          {titleStart && `${titleStart} `}
          <span className={cls.gradient}>{highlight}</span>
          {titleEnd && ` ${titleEnd}`}
        </h2>

        {subtitle && (
          <p className={`text-slate-400 text-base sm:text-lg ${maxWidth} mx-auto`}>
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
};

export default SectionHeader;
