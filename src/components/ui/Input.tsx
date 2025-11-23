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
                    {label} {required && <span className="text-cyan-400">*</span>}
                </label>
            )}
            <input
                className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    error
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400'
                } ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-400">{error}</p>
            )}
        </div>
    );
};

export default Input;

