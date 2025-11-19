import React from 'react';

interface Skill {
    name: string;
    category: 'language' | 'framework' | 'tool' | 'other';
}

interface SkillCategory {
    title: string;
    skills: Skill[];
    icon: string;
}

const About: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: 'Programming Languages',
            icon: '💻',
            skills: [
                { name: 'JavaScript', category: 'language' },
                { name: 'TypeScript', category: 'language' },
                { name: 'Python', category: 'language' },
                { name: 'Java', category: 'language' },
                { name: 'HTML/CSS', category: 'language' },
                { name: 'SQL', category: 'language' }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            icon: '⚛️',
            skills: [
                { name: 'React', category: 'framework' },
                { name: 'Node.js', category: 'framework' },
                { name: 'Express', category: 'framework' },
                { name: 'Next.js', category: 'framework' },
                { name: 'Vue.js', category: 'framework' },
                { name: 'Tailwind CSS', category: 'framework' }
            ]
        },
        {
            title: 'Tools & Technologies',
            icon: '🛠️',
            skills: [
                { name: 'Git', category: 'tool' },
                { name: 'Docker', category: 'tool' },
                { name: 'AWS', category: 'tool' },
                { name: 'MongoDB', category: 'tool' },
                { name: 'PostgreSQL', category: 'tool' },
                { name: 'Firebase', category: 'tool' }
            ]
        },
        {
            title: 'Other Skills',
            icon: '🌟',
            skills: [
                { name: 'Agile/Scrum', category: 'other' },
                { name: 'UI/UX Design', category: 'other' },
                { name: 'RESTful APIs', category: 'other' },
                { name: 'GraphQL', category: 'other' },
                { name: 'Testing', category: 'other' },
                { name: 'CI/CD', category: 'other' }
            ]
        }
    ];

    return (
        <section id="about" className="min-h-screen bg-transparent relative overflow-hidden py-20">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About Me
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Get to know more about my background and expertise
                    </p>
                </div>

                {/* About Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Personal Introduction */}
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-400/20">
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
                    </div>

                    {/* What I Do */}
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-400/20">
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
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Technical Skills
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        {skillCategories.map((category, categoryIndex) => (
                            <div
                                key={categoryIndex}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-400/20"
                            >
                                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <span className="text-2xl">{category.icon}</span>
                                    {category.title}
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="bg-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/30 hover:bg-cyan-400/30 hover:border-cyan-400 transition-all duration-300"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-400/20">
                    <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                        <span className="text-3xl">💡</span>
                        Soft Skills
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            'Problem Solving',
                            'Team Collaboration',
                            'Communication',
                            'Time Management',
                            'Adaptability',
                            'Attention to Detail',
                            'Creative Thinking',
                            'Leadership',
                            'Continuous Learning'
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-gray-300"
                            >
                                <span className="text-cyan-400">✓</span>
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

