import { useState, useEffect, useRef } from 'react';

/**
 * useScrollState — Single consolidated scroll listener for the entire app.
 *
 * Provides:
 *   scrollY          — current window.scrollY
 *   scrollProgress   — 0–100, how far the user has scrolled down the page
 *   activeSection    — ID of the section currently in the viewport
 *
 * Also writes `--scroll` CSS custom property to <html> for any parallax usage.
 *
 * Replaces the duplicate scroll event listeners previously in App.jsx and Navbar.jsx.
 *
 * @param {string[]} [sectionIds] - Ordered list of section IDs to track
 */
const DEFAULT_IDS = [
  'overview', 'features', 'tech', 'architecture',
  'cloud', 'cicd', 'timeline', 'monetization', 'team',
];

const useScrollState = (sectionIds = DEFAULT_IDS) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const idsRef = useRef(sectionIds);

  useEffect(() => {
    idsRef.current = sectionIds;
  }, [sectionIds]);

  useEffect(() => {
    const handleScroll = () => {
      const sy = window.scrollY;
      setScrollY(sy);

      // Update CSS variable for any parallax users
      document.documentElement.style.setProperty('--scroll', sy);

      // Scroll progress (0–100)
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (sy / total) * 100 : 0);

      // Active section detection — last section whose top is above the viewport fold
      let current = '';
      idsRef.current.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Fire once on mount to initialise state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollProgress, activeSection };
};

export default useScrollState;
