import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
            {/* Simple Box Dot Pattern */}
            <div
                className="absolute inset-0 opacity-25"
                style={{
                    backgroundImage: `
                        radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                    backgroundPosition: '0 0'
                }}
            />

            {/* Content with Professional Animations */}
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                    Welcome to My Portfolio
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in-up-delay">
                    I'm a passionate developer creating beautiful and functional web experiences.
                    Explore my work and discover how I can help bring your ideas to life.
                </p>
            </div>
        </section>
    );
};

export default Hero;
