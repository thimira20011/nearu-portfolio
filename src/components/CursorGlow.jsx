import React, { useEffect, useRef } from 'react';

/**
 * CursorGlow — Smooth radial gradient that follows the cursor.
 *
 * Optimisations over the previous version:
 * - rAF loop only runs while the cursor is in motion (stops within ~0.5px of target)
 * - No continuous animation drain when the user is idle
 * - respects prefers-reduced-motion
 */
const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Honour reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.display = 'none';
      return;
    }

    let rafId;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let isRunning = false;

    const applyGlow = () => {
      el.style.background = `radial-gradient(
        350px circle at ${currentX}px ${currentY}px,
        rgba(224, 86, 56, 0.055),
        rgba(15, 76, 129, 0.028) 45%,
        transparent 72%
      )`;
    };

    const animate = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.15;
      currentY += dy * 0.15;
      applyGlow();

      // Keep looping only while moving (> 0.5px delta)
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        rafId = requestAnimationFrame(animate);
      } else {
        isRunning = false;
      }
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    applyGlow(); // Initial paint

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 z-30 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default CursorGlow;
