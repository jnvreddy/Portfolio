import React from 'react';
import SectionHeader from './ui/SectionHeader';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-transparent relative py-12">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionHeader
                    title="My Projects"
                    subtitle="A collection of projects showcasing my skills in Android development, full-stack applications, and AI integration"
                />
                <div className="text-center py-20">
                    <p className="text-gray-400 text-lg">Needs to be implemented</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;

