import React from 'react';
import { X } from 'lucide-react';

const ImageModal = ({ imageUrl, isOpen, onClose }) => {
    // Added transition classes for a smooth fade-in/out effect
    const modalClasses = isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none';

    if (!imageUrl) return null; // Only render if there's a URL to show

    return (
        // Modal Overlay - Uses fixed position and z-index 50 to cover everything
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${modalClasses}`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }} // High opacity background for full focus
            onClick={onClose} // Clicking the background closes the modal
        >
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 text-white hover:text-indigo-400 transition-colors z-[51] p-2 rounded-full bg-gray-800/50"
                onClick={onClose}
                aria-label="Close image modal"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Modal Content - Click handler stops click events from propagating to the backdrop */}
            <div
                className="max-w-full max-h-full overflow-hidden p-4"
            >
                <img
                    src={imageUrl}
                    alt="Full View"
                    // Tailwind classes for responsive image display
                    className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl border border-indigo-400/50"
                    loading="lazy"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                />
            </div>
        </div>
    );
};

export default ImageModal;
