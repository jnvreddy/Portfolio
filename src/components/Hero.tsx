import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="h-screen flex items-center justify-center bg-transparent relative overflow-hidden">
            {/* Content with Professional Animations */}
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                    Junior Software Engineer
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in-up-delay">
                    Specializing in Android native development, full-stack applications, and AI integration.
                    With experience in multi-stack development, team leadership, and delivering impactful solutions.
                </p>
            </div>
        </section>
    );
};

export default Hero;
