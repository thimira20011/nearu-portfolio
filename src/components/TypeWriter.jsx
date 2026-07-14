import React, { useState, useEffect, useRef } from 'react';

/**
 * TypeWriter — Cycles through phrases with a character-by-character typing effect.
 * Includes blinking cursor and auto-delete → re-type loop.
 */
const TypeWriter = ({ 
  phrases = [], 
  typingSpeed = 60, 
  deletingSpeed = 35, 
  pauseDuration = 2000,
  className = '' 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex];

    const tick = () => {
      if (!isDeleting) {
        // Typing
        const nextText = currentPhrase.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === currentPhrase) {
          // Finished typing — pause, then start deleting
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
        timeoutRef.current = setTimeout(tick, typingSpeed + Math.random() * 40);
      } else {
        // Deleting
        const nextText = currentPhrase.slice(0, displayText.length - 1);
        setDisplayText(nextText);

        if (nextText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          timeoutRef.current = setTimeout(tick, typingSpeed);
          return;
        }
        timeoutRef.current = setTimeout(tick, deletingSpeed);
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink text-brand-coral-light font-light">|</span>
    </span>
  );
};

export default TypeWriter;
