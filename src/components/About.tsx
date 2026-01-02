import React from 'react';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { technicalSkills } from '../constants/data';

const About: React.FC = () => {
    return (
        <section id="about" className="h-screen bg-transparent relative overflow-hidden py-12">
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

                {/* Skills Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Technical Skills
                    </h3>

                    {/* Marquee Container */}
                    <div className="relative overflow-hidden w-full py-8">
                        <div
                            className="flex gap-12 items-center"
                            style={{
                                animation: 'marquee 40s linear infinite',
                                display: 'flex',
                                width: 'max-content'
                            }}
                        >
                            {/* First set of skills */}
                            {technicalSkills.map((skill, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform duration-300"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-16 h-16 sm:w-20 sm:h-20"
                                            style={{ filter: skill.color ? `drop-shadow(0 0 8px ${skill.color})` : undefined }}
                                        />
                                        <span className="text-white text-sm font-medium whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                            {/* Duplicate for seamless loop */}
                            {technicalSkills.map((skill, index) => {
                                return (
                                    <div
                                        key={`duplicate-${index}`}
                                        className="flex-shrink-0 flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform duration-300"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-16 h-16 sm:w-20 sm:h-20"
                                            style={{ filter: skill.color ? `drop-shadow(0 0 8px ${skill.color})` : undefined }}
                                        />
                                        <span className="text-white text-sm font-medium whitespace-nowrap">
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

