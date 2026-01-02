import React from 'react';

const Footer: React.FC = () => {

    return (
        <footer className="bg-transparent text-white py-16 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
                        © 2024 Jnv Reddy. All rights reserved. Built with
                        <span className="text-red-500">❤️</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
