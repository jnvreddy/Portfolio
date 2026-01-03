import React, { useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // Note: Not preventing body scroll so main page remains visible

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Semi-transparent backdrop - allows main page to show through */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Centered Modal */}
      <div
        className="relative w-[90%] max-w-4xl h-[80vh] max-h-[800px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex justify-end p-4 sm:p-6">
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 overflow-y-auto">
          <div className="text-center space-y-8 w-full max-w-2xl">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>

            {/* Email Section */}
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-white/5 rounded-full border border-white/20">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white"
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
                </div>
                <div className="text-center">
                  <p className="text-gray-300 text-sm sm:text-base mb-2">Email me at</p>
                  <a
                    href="mailto:jnvreddy.dev@gmail.com"
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                  >
                    jnvreddy.dev@gmail.com
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-8"></div>

              {/* Additional Info */}
              <p className="text-gray-400 text-sm sm:text-base">
                Feel free to reach out if you'd like to collaborate, have a question, or just want to connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

