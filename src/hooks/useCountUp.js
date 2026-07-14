import { useState, useEffect, useRef } from 'react';

/**
 * useCountUp — Animates a number from 0 to `end` when triggered.
 * Uses requestAnimationFrame with ease-out timing for smooth deceleration.
 * Triggers via IntersectionObserver when the element scrolls into view.
 *
 * @param {number} end - Target number to count up to
 * @param {number} duration - Animation duration in ms (default 1500)
 * @returns {{ ref, count }} - Attach ref to the container element
 */
const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, count };
};

export default useCountUp;
