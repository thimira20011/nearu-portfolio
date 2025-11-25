import React from 'react';

const PlaceholderImage = ({
    width = '100%',
    height = '100%',
    className = '',
    shape = 'square',
    text = 'Image Placeholder',
    imageUrl = '',
    objectFitClass = 'object-cover',
    onClick
}) => {
    const baseClasses = "flex items-center justify-center border-2 border-dashed border-gray-600 text-gray-400 font-semibold";
    const shapeClasses = shape === 'circle' ? 'rounded-full' : 'rounded-xl';
    // Add conditional styling for clickable images
    // The 'onClick' prop existence determines if cursor/hover effects are applied.
    const cursorClass = onClick ? 'cursor-zoom-in hover:shadow-lg hover:shadow-indigo-500/30 transition-shadow' : '';

    if (imageUrl) {
        // If a valid image URL is provided, render the image
        return (
            <img
                src={imageUrl}
                alt={text}
                className={`${shapeClasses} w-full h-full ${objectFitClass} ${className} ${cursorClass}`}
                style={{ width, height, minHeight: height, minWidth: width }}
                loading="lazy"
                onClick={onClick} // Attach click handler here (only if provided)
                // Optional: Add onerror to handle broken links
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = 'none'; // Hide broken image
                    e.currentTarget.parentElement.innerHTML = `<div class="${baseClasses} ${shapeClasses} w-full h-full bg-red-900/50">Error Loading Image</div>`;
                }}
            />
        );
    }

    // Otherwise, render the placeholder box
    return (
        <div
            className={`${baseClasses} ${shapeClasses} ${className} bg-gray-700/50 ${cursorClass}`}
            style={{ width, height, minHeight: height, minWidth: width }}
            onClick={onClick} // Attach click handler here (only if provided)
        >
            {/* Lucide Photo Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="text-xs sm:text-sm">{text}</span>
        </div>
    );
};

export default PlaceholderImage;
