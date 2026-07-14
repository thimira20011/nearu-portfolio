import React, { useEffect, useRef } from 'react';

/**
 * CursorGlow — A global mouse-following radial gradient overlay.
 * Creates a subtle "flashlight" effect on dark surfaces.
 * Automatically disabled when prefers-reduced-motion is set.
 */
const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Respect reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      el.style.display = 'none';
      return;
    }

    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Smooth lerp animation for buttery movement
    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      el.style.background = `radial-gradient(
        300px circle at ${currentX}px ${currentY}px,
        rgba(224, 86, 56, 0.06),
        rgba(15, 76, 129, 0.03) 40%,
        transparent 70%
      )`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};

export default CursorGlow;
