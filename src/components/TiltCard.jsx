import React, { useRef, useCallback } from 'react';

/**
 * TiltCard — A perspective-aware card that tilts toward the cursor.
 * Features animated border gradient that follows cursor angle.
 * Max tilt: ±8°. Includes spring-physics reset on mouse leave.
 */
const TiltCard = ({ children, className = '', glowColor = 'rgba(224, 86, 56, 0.4)', style = {} }) => {
  const cardRef = useRef(null);
  const borderRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate tilt angles (max ±8°)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    // Calculate cursor angle for border gradient
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    if (borderRef.current) {
      borderRef.current.style.background = `conic-gradient(from ${angle}deg, ${glowColor}, transparent 60%, transparent 80%, ${glowColor})`;
      borderRef.current.style.opacity = '1';
    }
  }, [glowColor]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    if (borderRef.current) {
      borderRef.current.style.opacity = '0';
    }
  }, []);

  const hasFullHeight = className.includes('h-full');

  return (
    <div className={`relative group ${hasFullHeight ? 'h-full' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
      {/* Animated border glow layer */}
      <div
        ref={borderRef}
        className="absolute -inset-[1px] rounded-2xl opacity-0 blur-[1px]"
        style={{ transition: 'opacity 0.4s ease' }}
        aria-hidden="true"
      />

      {/* Card body */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative rounded-2xl ${className}`}
        style={{
          transition: 'transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
