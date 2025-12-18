import React from 'react';
import Card from './ui/Card';

const Footer: React.FC = () => {

    return (
        <footer className="bg-transparent text-white py-16 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Email Display */}
                <div className="max-w-md mx-auto mb-12">
                    <Card className="p-8 text-center">
                        <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                        <p className="text-gray-300 text-lg">jnvreddyofficial@gmail.com</p>
                    </Card>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 Your Name. All rights reserved. Built with React & TypeScript.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
