import React, { useState } from 'react';
import { useContactModal } from '../contexts/ContactModalContext';

const FloatingContactButton: React.FC = () => {
  const { openModal } = useContactModal();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={openModal}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/30 group overflow-hidden"
      aria-label="Contact"
    >
      <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span
          className={`text-white text-sm sm:text-base font-medium whitespace-nowrap transition-all duration-300 ${
            isHovered
              ? 'max-w-[200px] opacity-100 translate-x-0'
              : 'max-w-0 opacity-0 -translate-x-2'
          }`}
        >
          Contact
        </span>
      </div>
    </button>
  );
};

export default FloatingContactButton;
