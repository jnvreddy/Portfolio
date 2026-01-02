import React from 'react';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { primarySkills, secondarySkills } from '../constants/data';

const About: React.FC = () => {
    return (
        <section id="about" className="h-[200vh] bg-transparent relative overflow-hidden py-12">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionHeader
                    title="About Me"
                    subtitle="Get to know more about my background and expertise"
                />

                {/* About Content */}
                <div className="max-w-3xl mx-auto mb-16">
                    <Card className="p-8">
                        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="text-3xl">👋</span>
                            Who I Am
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            I am a Junior Software Engineer specializing in Android native application development, with strong expertise in Kotlin, Java, and Spring Boot–based backend systems. I also have hands-on experience building full-stack web applications using React, Next.js, and Tailwind CSS, allowing me to work comfortably across mobile and web platforms.
                        </p>
                    </Card>
                </div>
            </div>

            {/* Skills Section - Full Width */}
            <div className="w-full mb-16 relative z-10">
                <h3 className="text-3xl font-bold text-white text-center mb-12">
                    Technical Skills
                </h3>

                {/* Primary Skills Section */}
                <div className="mb-12">
                    <h4 className="text-xl font-semibold text-white text-center mb-6">
                        Primary Skills
                    </h4>
                    <div className="relative overflow-hidden w-full py-6 left-0">
                        <div
                            className="flex items-center"
                            style={{
                                animation: 'marquee 35s linear infinite',
                                display: 'flex',
                                width: 'max-content',
                                gap: '4rem',
                                willChange: 'transform'
                            }}
                        >
                            {/* First set of primary skills */}
                            {primarySkills.map((skill, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform duration-300"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-all duration-300 group-hover:scale-110"
                                        />
                                        <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                            {/* Duplicate for seamless loop */}
                            {primarySkills.map((skill, index) => {
                                return (
                                    <div
                                        key={`duplicate-${index}`}
                                        className="flex-shrink-0 flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform duration-300"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-all duration-300 group-hover:scale-110"
                                        />
                                        <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Secondary Skills Section */}
                <div>
                    <h4 className="text-xl font-semibold text-gray-400 text-center mb-6 flex items-center justify-center gap-2">
                        <span className="text-xl">🔧</span>
                        Secondary Skills
                    </h4>
                    <div className="relative overflow-hidden w-full py-6 left-0">
                        <div
                            className="flex items-center"
                            style={{
                                animation: 'marquee 30s linear infinite',
                                display: 'flex',
                                width: 'max-content',
                                gap: '3.5rem',
                                willChange: 'transform'
                            }}
                        >
                            {/* First set of secondary skills */}
                            {secondarySkills.map((skill, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform duration-300"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-80"
                                        />
                                        <span className="text-gray-400 text-[10px] sm:text-xs font-medium whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                            {/* Duplicate for seamless loop */}
                            {secondarySkills.map((skill, index) => {
                                return (
                                    <div
                                        key={`duplicate-${index}`}
                                        className="flex-shrink-0 flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform duration-300"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-80"
                                        />
                                        <span className="text-gray-400 text-[10px] sm:text-xs font-medium whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

