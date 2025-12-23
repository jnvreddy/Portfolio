import React from 'react';

const Footer: React.FC = () => {

    return (
        <footer className="bg-transparent text-white py-16 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 Jnv Reddy. All rights reserved. Built with React & TypeScript.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
