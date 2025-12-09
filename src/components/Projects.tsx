import React, { useState } from 'react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
import SectionHeader from './ui/SectionHeader';
import { projects } from '../constants/data';

const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" className="min-h-screen bg-transparent relative overflow-hidden py-20">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionHeader
                    title="My Projects"
                    subtitle="A collection of projects showcasing my skills in Android development, full-stack applications, and AI integration"
                />

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            variant={selectedCategory === category ? 'primary' : 'secondary'}
                            className="px-6 py-2 rounded-full"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <Card
                            key={project.id}
                            className="group overflow-hidden shadow-lg transition-all duration-500 hover:scale-105"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/* Category Badge */}
                                <Badge className="mb-3">
                                    {project.category}
                                </Badge>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
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
                                            className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded border border-gray-600"
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
                        </Card>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-400 text-lg">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;

