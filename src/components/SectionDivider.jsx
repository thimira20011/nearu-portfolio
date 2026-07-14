import React from 'react';

/**
 * SectionDivider — Animated SVG wave divider between sections.
 * Creates organic flowing transitions instead of hard-cut borders.
 * Supports coral (warm) and blue (cool) variants.
 */
const SectionDivider = ({ variant = 'coral', flip = false }) => {
  const colors = {
    coral: {
      stop1: 'rgba(224, 86, 56, 0.15)',
      stop2: 'rgba(224, 86, 56, 0.05)',
      stop3: 'rgba(224, 86, 56, 0)',
    },
    blue: {
      stop1: 'rgba(15, 76, 129, 0.18)',
      stop2: 'rgba(15, 76, 129, 0.06)',
      stop3: 'rgba(15, 76, 129, 0)',
    },
  };

  const c = colors[variant] || colors.coral;

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none ${flip ? 'rotate-180' : ''}`}
      style={{ height: '80px', marginTop: '-1px', marginBottom: '-1px' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`wave-grad-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c.stop1} />
            <stop offset="50%" stopColor={c.stop2} />
            <stop offset="100%" stopColor={c.stop3} />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
          fill={`url(#wave-grad-${variant})`}
          className="section-wave"
        />
        <path
          d="M0,50 C360,10 720,70 1080,30 C1260,10 1380,45 1440,35 L1440,0 L0,0 Z"
          fill={`url(#wave-grad-${variant})`}
          opacity="0.5"
          className="section-wave-2"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
