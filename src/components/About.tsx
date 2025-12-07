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
                            I'm a passionate full-stack developer with a love for creating beautiful, 
                            functional, and user-friendly web applications. With years of experience 
                            in modern web technologies, I specialize in building scalable solutions 
                            that solve real-world problems.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            My journey in web development started with a curiosity about how websites 
                            work, and it has evolved into a career focused on crafting exceptional 
                            digital experiences. I enjoy working with cutting-edge technologies and 
                            staying up-to-date with industry best practices.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, 
                            contributing to open-source projects, or sharing knowledge with the 
                            developer community. I believe in continuous learning and always 
                            strive to improve my skills.
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
                                    <h4 className="text-white font-medium mb-1">Frontend Development</h4>
                                    <p className="text-gray-400 text-sm">
                                        Building responsive and interactive user interfaces using React, 
                                        TypeScript, and modern CSS frameworks.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">▹</span>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Backend Development</h4>
                                    <p className="text-gray-400 text-sm">
                                        Creating robust server-side applications, RESTful APIs, and 
                                        database solutions with Node.js and various databases.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">▹</span>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Full-Stack Solutions</h4>
                                    <p className="text-gray-400 text-sm">
                                        Developing end-to-end applications from concept to deployment, 
                                        ensuring seamless integration between frontend and backend.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">▹</span>
                                <div>
                                    <h4 className="text-white font-medium mb-1">UI/UX Design</h4>
                                    <p className="text-gray-400 text-sm">
                                        Designing intuitive and visually appealing interfaces that 
                                        provide excellent user experiences.
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

