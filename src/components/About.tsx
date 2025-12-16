import React from 'react';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { skillCategories, technicalSkills } from '../constants/data';

const About: React.FC = () => {
    return (
        <section id="about" className="min-h-screen bg-transparent relative overflow-hidden py-20">
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
                            I'm a Junior Software Engineer specializing in Android native development with Kotlin and full-stack web applications. 
                            With over a year of professional experience, I've led AI feature development for e-commerce platforms, 
                            mentored 10+ interns, and built scalable solutions using cutting-edge technologies. 
                            I'm passionate about continuous learning, effective collaboration, and contributing to team success through 
                            both technical excellence and leadership.
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
                                const IconComponent = skill.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform duration-300"
                                    >
                                        <IconComponent
                                            className="text-5xl sm:text-6xl"
                                            style={{ color: skill.color }}
                                        />
                                        <span className="text-white text-sm font-medium whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                            {/* Duplicate for seamless loop */}
                            {technicalSkills.map((skill, index) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div
                                        key={`duplicate-${index}`}
                                        className="flex-shrink-0 flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform duration-300"
                                    >
                                        <IconComponent
                                            className="text-5xl sm:text-6xl"
                                            style={{ color: skill.color }}
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

