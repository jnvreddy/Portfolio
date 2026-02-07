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
      className="fixed top-0 right-4 z-50 bg-gray-900/30 backdrop-blur-sm border border-gray-600/50 rounded-b-lg shadow-lg shadow-blue-500/10 transition-all duration-300 hover:bg-gray-900/40 hover:border-gray-600/70 group overflow-hidden"
      aria-label="Contact"
    >
      <div className="flex flex-col items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5">
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
              ? 'max-h-[200px] opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-2'
          }`}
        >
          Contact
        </span>
      </div>
    </button>
  );
};

export default FloatingContactButton;
