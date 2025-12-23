import React from 'react';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { skillCategories, technicalSkills, projects } from '../constants/data';

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

                {/* Projects Section */}
                <div id="projects" className="mb-16">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Featured Projects
                    </h3>

                    {/* Project 1 */}
                    <div className="mb-12">
                        <Card className="p-0 overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                {/* Image - 40% */}
                                <div className="w-full md:w-[40%] h-64 md:h-auto">
                                    <img
                                        src={projects[0].image}
                                        alt={projects[0].title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Project+Image';
                                        }}
                                    />
                                </div>
                                {/* Information - 60% */}
                                <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-center">
                                    <Badge className="mb-3 w-fit">
                                        {projects[0].category}
                                    </Badge>
                                    <h4 className="text-2xl font-semibold text-white mb-3">
                                        {projects[0].title}
                                    </h4>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {projects[0].description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {projects[0].technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        {projects[0].liveUrl && (
                                            <a
                                                href={projects[0].liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="primary" className="text-sm">
                                                    Live Demo
                                                </Button>
                                            </a>
                                        )}
                                        {projects[0].githubUrl && (
                                            <a
                                                href={projects[0].githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="outline" className="text-sm">
                                                    GitHub
                                                </Button>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Project 2 */}
                    <div>
                        <Card className="p-0 overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                {/* Image - 40% */}
                                <div className="w-full md:w-[40%] h-64 md:h-auto">
                                    <img
                                        src={projects[1].image}
                                        alt={projects[1].title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Project+Image';
                                        }}
                                    />
                                </div>
                                {/* Information - 60% */}
                                <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-center">
                                    <Badge className="mb-3 w-fit">
                                        {projects[1].category}
                                    </Badge>
                                    <h4 className="text-2xl font-semibold text-white mb-3">
                                        {projects[1].title}
                                    </h4>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {projects[1].description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {projects[1].technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        {projects[1].liveUrl && (
                                            <a
                                                href={projects[1].liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="primary" className="text-sm">
                                                    Live Demo
                                                </Button>
                                            </a>
                                        )}
                                        {projects[1].githubUrl && (
                                            <a
                                                href={projects[1].githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="outline" className="text-sm">
                                                    GitHub
                                                </Button>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

