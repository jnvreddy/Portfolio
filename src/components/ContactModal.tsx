import React, { useEffect, useState } from 'react';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import Button from './ui/Button';
import MessageModal from './ui/MessageModal';
import type { MessageVariant } from './ui/MessageModal';
import { validateEmail } from '../utils/validation';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  body: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  body?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    body: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageModal, setMessageModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    variant: MessageVariant;
  }>({ isOpen: false, title: '', message: '', variant: 'success' });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Disable body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      // Cleanup on unmount
      if (isOpen) {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      }
    };
  }, [isOpen]);

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

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', email: '', body: '' });
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.body.trim()) {
      newErrors.body = 'Message is required';
    } else if (formData.body.trim().length < 10) {
      newErrors.body = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMessageModalClose = () => {
    const wasSuccess = messageModal.variant === 'success';
    setMessageModal((prev) => ({ ...prev, isOpen: false }));
    if (wasSuccess) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setMessageModal({
        isOpen: true,
        title: 'Configuration needed',
        message: 'Contact form is not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your environment.',
        variant: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create a nicely formatted HTML email
      const htmlMessage = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #667eea; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; }
              .value { padding: 10px; background-color: #f5f5f5; border-left: 3px solid #667eea; margin-top: 5px; }
              .message-box { padding: 15px; background-color: #f5f5f5; border-left: 3px solid #764ba2; margin-top: 5px; min-height: 100px; white-space: pre-wrap; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #888; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 New Portfolio Contact</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">From</div>
                  <div class="value">${formData.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${formData.email}" style="color: #667eea; text-decoration: none;">${formData.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">${formData.body}</div>
                </div>
                <div class="footer">
                  <p>Sent from your Portfolio Contact Form</p>
                  <p style="margin-top: 10px;">Received on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Portfolio Contact from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: htmlMessage,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      setMessageModal({
        isOpen: true,
        title: 'Message sent',
        message: "Thank you for your message! I'll get back to you soon.",
        variant: 'success',
      });
      setFormData({ name: '', email: '', body: '' });
      setErrors({});
      // Do NOT call onClose() here — contact modal stays open so success modal can show.
      // onClose() is called when user dismisses the success modal (handleMessageModalClose).
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessageModal({
        isOpen: true,
        title: 'Something went wrong',
        message: "We couldn't send your message right now. Please try again later.",
        variant: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Semi-transparent backdrop - allows main page to show through */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Centered Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative w-[90%] max-w-2xl max-h-[90vh] bg-gray-900/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl shadow-lg shadow-blue-500/10 overflow-y-auto hide-scrollbar flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center p-3 sm:p-4 flex-shrink-0">
          {/* Close Button - Always Right Side */}
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full ml-auto"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="w-full">
            {/* Title */}
            <h2 id="contact-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
              Get In Touch
            </h2>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <Input
                id="name"
                name="name"
                type="text"
                label="Name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                className="text-white"
              />

              <Input
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                className="text-white"
              />

              <Textarea
                id="body"
                name="body"
                label="Message"
                placeholder="Your message..."
                value={formData.body}
                onChange={handleChange}
                error={errors.body}
                required
                rows={4}
                className="text-white"
              />

              <div className="pt-2 sm:pt-3">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <MessageModal
      isOpen={messageModal.isOpen}
      onClose={handleMessageModalClose}
      title={messageModal.title}
      message={messageModal.message}
      variant={messageModal.variant}
    />
    </>
  );
};

export default ContactModal;

