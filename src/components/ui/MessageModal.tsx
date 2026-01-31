import React, { useEffect } from 'react';
import Button from './Button';

export type MessageVariant = 'success' | 'error' | 'info';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  variant?: MessageVariant;
  buttonText?: string;
}

const MessageModal: React.FC<MessageModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  variant = 'success',
  buttonText = 'OK',
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const variantStyles = {
    success: 'text-emerald-400',
    error: 'text-red-400',
    info: 'text-blue-400',
  };

  const iconPaths = {
    success: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    error: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    info: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="message-modal-title"
      aria-describedby="message-modal-desc"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5">
          <div className={`flex-shrink-0 ${variantStyles[variant]}`}>
            <svg
              className="w-12 h-12 sm:w-14 sm:h-14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {iconPaths[variant]}
            </svg>
          </div>
          <div className="space-y-2">
            <h2
              id="message-modal-title"
              className="text-lg sm:text-xl md:text-2xl font-bold text-white"
            >
              {title}
            </h2>
            <p
              id="message-modal-desc"
              className="text-sm sm:text-base text-gray-300 leading-relaxed"
            >
              {message}
            </p>
          </div>
          <Button
            type="button"
            variant="primary"
            onClick={onClose}
            className="w-full sm:w-auto min-w-[120px] sm:min-w-[140px]"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
