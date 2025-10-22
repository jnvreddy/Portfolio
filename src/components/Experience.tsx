import React from 'react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
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

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    Experience
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Frontend Developer
                        </h3>
                        <p className="text-gray-300 mb-4 text-lg">Company Name • 2022 - Present</p>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            Building responsive web applications using React, TypeScript, and modern CSS frameworks.
                            Creating user-friendly interfaces and optimizing performance for better user experience.
                        </p>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Full Stack Developer
                        </h3>
                        <p className="text-gray-300 mb-4 text-lg">Previous Company • 2020 - 2022</p>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            Developed end-to-end solutions with Node.js, React, and various databases.
                            Collaborated with cross-functional teams to deliver scalable applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
