import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

/**
 * ImageModal — Full-screen image lightbox.
 *
 * Accessibility improvements over previous version:
 * - role="dialog" + aria-modal="true"
 * - Escape key closes the modal
 * - Focus is trapped inside (single focusable element = close button)
 * - Focus moves to close button on open
 */
const ImageModal = ({ imageUrl, isOpen, onClose }) => {
  const closeButtonRef = useRef(null);

  // Move focus to close button when modal opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      // Trap Tab inside the modal (only one focusable element anyway)
      if (e.key === 'Tab') {
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!imageUrl) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-[51] p-2 rounded-full bg-white/10 border border-white/20 text-white hover:text-brand-coral-light hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-brand-coral"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image container — stopPropagation prevents backdrop click from closing when clicking image */}
      <div
        className="max-w-full max-h-full overflow-hidden p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Full-size view"
          loading="lazy"
          className="w-auto h-auto max-w-[90vw] max-h-[88vh] object-contain rounded-xl shadow-2xl border border-brand-coral/30"
        />
      </div>
    </div>
  );
};

export default ImageModal;
