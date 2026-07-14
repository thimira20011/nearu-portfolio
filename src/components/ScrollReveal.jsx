import React, { useState, useEffect, useRef } from 'react';

const ScrollReveal = ({ children, className = '', direction = 'up', delay = 0, threshold = 0.1 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const directionClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal';
  const delayClass = delay ? `stagger-${delay}` : '';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${directionClass} ${delayClass} ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
