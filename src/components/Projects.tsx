import React from 'react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
import SectionHeader from './ui/SectionHeader';
import { projects } from '../constants/data';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-transparent relative py-12">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionHeader
                    title="My Projects"
                    subtitle="A collection of projects showcasing my skills in Android development, full-stack applications, and AI integration"
                />

                {/* Projects Grid */}
                <div className="flex flex-col gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="w-full group overflow-hidden shadow-lg transition-all duration-500 hover:scale-105"
                        >
                            <div className="flex flex-row min-h-[300px]">
                                {/* Project Image */}
                                <div className="relative w-[40%] min-h-[300px] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full min-h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Project+Image';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Project Content */}
                                <div className="w-[60%] p-6">
                                {/* Category Badge */}
                                <Badge className="mb-3">
                                    {project.category}
                                </Badge>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-white/5 backdrop-blur-sm text-gray-300 px-2 py-1 rounded border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <Button variant="primary" className="w-full text-sm">
                                                Live Demo
                                            </Button>
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <Button variant="outline" className="w-full text-sm">
                                                GitHub
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

