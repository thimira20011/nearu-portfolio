import React, { useEffect, useRef } from 'react';
import { Github, BookOpen, GraduationCap, Store, Bike, Shield } from 'lucide-react';
import TypeWriter from '../TypeWriter';
import useCountUp from '../../hooks/useCountUp';

const GITHUB_ORG_URL = "https://github.com/Nearu-Project-SUSL";
const LIVE_API_URL = "https://api.nearusab.me/scalar/v1";

const STATS = [
  { value: 4, label: 'User Roles', suffix: '' },
  { value: 10, label: 'Core Modules', suffix: '+' },
  { value: 3, label: 'Platforms', suffix: '' },
  { value: 100, label: 'API Endpoints', suffix: '+' },
];

const TYPEWRITER_PHRASES = [
  'Connecting Students, Businesses & Riders',
  'Powered by .NET, React & Azure',
  'Hyper-Local. Real-Time. Secure.',
];

/** Animated stat card with count-up effect */
const StatCard = ({ value, label, suffix, delay }) => {
  const { ref, count } = useCountUp(value, 1500);
  return (
    <div
      ref={ref}
      className="glass-card shimmer-on-hover p-4 text-center hover:scale-105 transition-all duration-300 hover:border-brand-coral/30 load-scale-in"
      style={{ animationDelay: `${1.0 + delay * 0.12}s` }}
    >
      <div className="text-2xl sm:text-3xl font-black gradient-text-coral">
        {count}<span className="text-brand-coral-light">{suffix}</span>
      </div>
      <div className="text-[10px] sm:text-xs text-slate-500 mt-1 font-semibold uppercase tracking-wider">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animFrame;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles — 50 particles keeps good visual density while halving O(n²) connection cost
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.4,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.5 ? '224,86,56' : '59,130,246', // brand-coral vs brand-blue
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(224,86,56,${0.06 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center hero-gradient overflow-hidden pt-20 pb-16">
      {/* Particle canvas */}
      <canvas ref={canvasRef} id="particle-canvas" className="load-fade load-delay-7" />

      {/* Glow orbs — parallax-ready */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none load-fade load-delay-1 parallax-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none load-fade load-delay-2 parallax-slow" />

      {/* Ambient floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="ambient-particle"
            style={{
              '--size': `${2 + Math.random() * 3}px`,
              '--particle-color': i % 3 === 0 ? 'rgba(224, 86, 56, 0.35)' : 'rgba(59, 130, 246, 0.3)',
              '--drift-x': `${(Math.random() - 0.5) * 120}px`,
              '--drift-y': `${-40 - Math.random() * 80}px`,
              '--duration': `${6 + Math.random() * 6}s`,
              '--delay': `${Math.random() * 5}s`,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge — orchestrated entry */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-coral/10 border border-brand-coral/25 text-brand-coral-light text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm load-slide-down load-delay-2">
              <span className="w-2 h-2 rounded-full bg-brand-coral ping-slow inline-block animate-pulse" />
              Sabaragamuwa University of Sri Lanka — Capstone 2025
            </div>

            {/* Main Title — blur-in for dramatic reveal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-none text-white load-blur-in load-delay-3">
              Near<span className="gradient-text-coral text-glow-coral">U</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-slate-200 mb-4 leading-snug load-slide-up load-delay-4">
              Hyper-Local Campus Service &amp; Gig Marketplace
            </p>

            {/* TypeWriter cycling phrases */}
            <div className="h-7 mb-4 load-fade load-delay-5">
              <TypeWriter
                phrases={TYPEWRITER_PHRASES}
                className="text-slate-400 text-sm sm:text-base font-medium"
                typingSpeed={55}
                deletingSpeed={30}
                pauseDuration={2200}
              />
            </div>

            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed load-fade load-delay-5">
              An enterprise-grade cross-platform solution linking university students, local businesses, and student riders in one self-sustaining, secure campus ecosystem.
            </p>

            {/* CTA Buttons — spring scale-in */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 load-scale-in load-delay-6">
              <a
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-btn"
                className="btn-primary glow-pulse-coral flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-white font-bold text-sm w-full sm:w-auto"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
              <a
                href={LIVE_API_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-api-btn"
                className="btn-secondary flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-white font-bold text-sm w-full sm:w-auto"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Interactive API Docs
              </a>
            </div>

            {/* Stats — animated count-up */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              {STATS.map((stat, i) => (
                <StatCard key={i} value={stat.value} label={stat.label} suffix={stat.suffix} delay={i} />
              ))}
            </div>
          </div>

          {/* Right Column: Premium 3D SVG Campus Grid Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-square flex justify-center items-center float-anim">
              {/* Radial backdrop light */}
              <div className="absolute w-80 h-80 rounded-full bg-brand-coral/5 blur-3xl pointer-events-none" />

              {/* 3D Map SVG */}
              <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_20px_50px_rgba(224,86,56,0.15)]">
                <defs>
                  {/* Grid pattern */}
                  <pattern id="isometric-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(224, 86, 56, 0.08)" strokeWidth="1"/>
                  </pattern>
                  {/* Gradients */}
                  <linearGradient id="grid-plane-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0c1120" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#05070c" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="coral-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff785a" />
                    <stop offset="100%" stopColor="#e05638" />
                  </linearGradient>
                  <linearGradient id="blue-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#0f4c81" />
                  </linearGradient>
                  <linearGradient id="amber-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>

                {/* Perspective transformed group */}
                <g transform="translate(0, 50)">
                  {/* Base grid plate (Isometric projection) */}
                  <polygon 
                    points="250,50 450,150 450,310 250,410 50,310 50,150" 
                    fill="url(#grid-plane-grad)" 
                    stroke="rgba(224, 86, 56, 0.2)" 
                    strokeWidth="2"
                  />

                  {/* Internal Grid Lines */}
                  <polygon 
                    points="250,70 430,160 430,290 250,380 70,290 70,160" 
                    fill="url(#isometric-grid)" 
                    opacity="0.6"
                  />

                  {/* Connected road tracks */}
                  <path 
                    d="M 120,185 L 250,250 M 250,250 L 380,185 M 250,250 L 250,370" 
                    stroke="rgba(15, 76, 129, 0.4)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeDasharray="4 8"
                  />

                  {/* Center Node Hub */}
                  <circle cx="250" cy="250" r="16" fill="#0f4c81" opacity="0.3" />
                  <circle cx="250" cy="250" r="8" fill="#ff785a" className="animate-pulse" />

                  {/* 1. Student Node (Left) */}
                  <g transform="translate(120, 185)" role="img" aria-label="Students">
                    {/* Pulsing ring */}
                    <ellipse cx="0" cy="0" rx="20" ry="10" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ animationDuration: '3s' }} />
                    {/* Shadow ellipse */}
                    <ellipse cx="0" cy="5" rx="14" ry="7" fill="black" opacity="0.4" />
                    {/* Floating Pin */}
                    <g transform="translate(0, -32)" className="hover:-translate-y-2 transition-transform duration-300">
                      <path d="M-14,0 C-14,-22 14,-22 14,0 C14,14 0,28 0,28 C0,28 -14,14 -14,0 Z" fill="url(#amber-glow)" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="0" cy="-2" r="10" fill="#030508" />
                      {/* Icon representation (GraduationCap) */}
                      <g transform="translate(-6, -8) scale(0.5)">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
                      </g>
                    </g>
                    {/* Label */}
                    <text y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(251,191,36,0.75)" letterSpacing="0.5">Students</text>
                  </g>

                  {/* 2. Business Node (Right) */}
                  <g transform="translate(380, 185)" role="img" aria-label="Businesses">
                    {/* Pulsing ring */}
                    <ellipse cx="0" cy="0" rx="20" ry="10" fill="none" stroke="#e05638" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ animationDuration: '3.5s' }} />
                    {/* Shadow ellipse */}
                    <ellipse cx="0" cy="5" rx="14" ry="7" fill="black" opacity="0.4" />
                    {/* Floating Pin */}
                    <g transform="translate(0, -32)" className="hover:-translate-y-2 transition-transform duration-300">
                      <path d="M-14,0 C-14,-22 14,-22 14,0 C14,14 0,28 0,28 C0,28 -14,14 -14,0 Z" fill="url(#coral-glow)" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="0" cy="-2" r="10" fill="#030508" />
                      {/* Icon representation (Store) */}
                      <g transform="translate(-6, -8) scale(0.5)">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#ff785a" strokeWidth="2.5" fill="none" />
                        <path d="M9 22V12h6v10" stroke="#ff785a" strokeWidth="2.5" fill="none" />
                      </g>
                    </g>
                    {/* Label */}
                    <text y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(255,120,90,0.75)" letterSpacing="0.5">Businesses</text>
                  </g>

                  {/* 3. Rider Node (Bottom Center) */}
                  <g transform="translate(250, 370)" role="img" aria-label="Riders">
                    {/* Pulsing ring */}
                    <ellipse cx="0" cy="0" rx="20" ry="10" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ animationDuration: '4s' }} />
                    {/* Shadow ellipse */}
                    <ellipse cx="0" cy="5" rx="14" ry="7" fill="black" opacity="0.4" />
                    {/* Floating Pin */}
                    <g transform="translate(0, -32)" className="hover:-translate-y-2 transition-transform duration-300">
                      <path d="M-14,0 C-14,-22 14,-22 14,0 C14,14 0,28 0,28 C0,28 -14,14 -14,0 Z" fill="url(#blue-glow)" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="0" cy="-2" r="10" fill="#030508" />
                      {/* Icon representation (Bike/Moto) */}
                      <g transform="translate(-6, -8) scale(0.5)">
                        <circle cx="5.5" cy="17.5" r="3.5" stroke="#60a5fa" strokeWidth="2.5" fill="none" />
                        <circle cx="18.5" cy="17.5" r="3.5" stroke="#60a5fa" strokeWidth="2.5" fill="none" />
                        <path d="M15 17.5L12 9H6.5" stroke="#60a5fa" strokeWidth="2.5" fill="none" />
                        <path d="M12 9l3-4h3.5" stroke="#60a5fa" strokeWidth="2.5" fill="none" />
                      </g>
                    </g>
                    {/* Label */}
                    <text y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(96,165,250,0.75)" letterSpacing="0.5">Riders</text>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700 scroll-bounce pointer-events-none">
        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Scroll</span>
        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
