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

                {/* About Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Personal Introduction */}
                    <Card className="p-8">
                        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="text-3xl">👋</span>
                            Who I Am
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I'm a Junior Software Engineer with hands-on experience in multi-stack development,
                            specializing in Android native development with Kotlin and full-stack web applications.
                            With over a year of professional experience, I've worked on diverse projects ranging
                            from mobile apps to AI-powered e-commerce platforms.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            My experience includes leading AI feature development for the Chat & Shop project,
                            where I built intelligent chat capabilities and integrated AI technologies. Beyond
                            technical work, I've mentored 10+ interns and conducted technical interviews,
                            developing strong leadership and communication skills.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I'm passionate about building scalable solutions, working with cutting-edge
                            technologies like AI/ML, and contributing to team success through effective
                            collaboration and project ownership. I believe in continuous learning and
                            sharing knowledge with the developer community.
                        </p>
                    </Card>

                    {/* What I Do */}
                    <Card className="p-8">
                        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                            <span className="text-3xl">🚀</span>
                            What I Do
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">▹</span>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Android Native Development</h4>
                                    <p className="text-gray-400 text-sm">
                                        Building native Android applications using Kotlin, Jetpack Compose,
                                        and modern Android architecture patterns. Experience with Room database
                                        and RESTful API integration.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">▹</span>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Full-Stack Development</h4>
                                    <p className="text-gray-400 text-sm">
                                        Developing end-to-end applications with React, Node.js, and various
                                        databases. Experience in both frontend and backend API development.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">▹</span>
                                <div>
                                    <h4 className="text-white font-medium mb-1">AI Application Integration</h4>
                                    <p className="text-gray-400 text-sm">
                                        Leading AI feature development, integrating machine learning models,
                                        and building intelligent applications. Experience with Chat & Shop AI project.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">▹</span>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Leadership & Mentoring</h4>
                                    <p className="text-gray-400 text-sm">
                                        Mentoring 10+ interns, conducting technical interviews for hiring,
                                        and managing projects using Jira. Strong focus on team coordination
                                        and knowledge sharing.
                                    </p>
                                </div>
                            </li>
                        </ul>
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

