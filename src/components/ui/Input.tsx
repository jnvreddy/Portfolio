import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, required, className = '', ...props }) => {
    return (
        <div>
            {label && (
                <label htmlFor={props.id} className="block text-sm font-medium text-gray-300 mb-2">
                    {label} {required && <span className="text-white">*</span>}
                </label>
            )}
            <input
                className={`w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    error
                        ? 'border-white/30 focus:ring-white/30'
                        : 'border-white/10 focus:border-white/30 focus:ring-white/20'
                } ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-gray-400">{error}</p>
            )}
        </div>
    );
};

export default Input;

