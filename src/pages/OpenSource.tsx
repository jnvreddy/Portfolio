import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Organization {
    id: number;
    name: string;
    avatar: string;
    description: string;
    url: string;
    contributions: number;
}

interface Contribution {
    id: number;
    type: 'PR' | 'Issue';
    title: string;
    repository: string;
    organization: string;
    url: string;
    status: 'merged' | 'open' | 'closed';
    date: string;
    description: string;
}

const OpenSource: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'organizations' | 'contributions'>('organizations');

    const organizations: Organization[] = [
        {
            id: 1,
            name: 'React',
            avatar: 'https://github.com/facebook.png',
            description: 'A JavaScript library for building user interfaces',
            url: 'https://github.com/facebook/react',
            contributions: 12
        },
        {
            id: 2,
            name: 'Vite',
            avatar: 'https://github.com/vitejs.png',
            description: 'Next generation frontend tooling',
            url: 'https://github.com/vitejs/vite',
            contributions: 8
        },
        {
            id: 3,
            name: 'TypeScript',
            avatar: 'https://github.com/microsoft.png',
            description: 'JavaScript with syntax for types',
            url: 'https://github.com/microsoft/TypeScript',
            contributions: 5
        },
        {
            id: 4,
            name: 'Tailwind CSS',
            avatar: 'https://github.com/tailwindlabs.png',
            description: 'A utility-first CSS framework',
            url: 'https://github.com/tailwindlabs/tailwindcss',
            contributions: 15
        }
    ];

    const contributions: Contribution[] = [
        {
            id: 1,
            type: 'PR',
            title: 'Fix: Resolve memory leak in component unmount',
            repository: 'react',
            organization: 'React',
            url: 'https://github.com/facebook/react/pull/12345',
            status: 'merged',
            date: '2024-01-15',
            description: 'Fixed a memory leak issue that occurred when components were unmounted without proper cleanup.'
        },
        {
            id: 2,
            type: 'PR',
            title: 'Feature: Add dark mode support to configuration',
            repository: 'vite',
            organization: 'Vite',
            url: 'https://github.com/vitejs/vite/pull/6789',
            status: 'merged',
            date: '2024-02-20',
            description: 'Added comprehensive dark mode support with automatic theme detection and manual override options.'
        },
        {
            id: 3,
            type: 'Issue',
            title: 'Bug: Type inference fails with nested generics',
            repository: 'TypeScript',
            organization: 'TypeScript',
            url: 'https://github.com/microsoft/TypeScript/issues/10123',
            status: 'closed',
            date: '2024-03-10',
            description: 'Reported and helped resolve type inference issues with deeply nested generic types.'
        },
        {
            id: 4,
            type: 'PR',
            title: 'Enhancement: Improve build performance',
            repository: 'tailwindcss',
            organization: 'Tailwind CSS',
            url: 'https://github.com/tailwindlabs/tailwindcss/pull/4567',
            status: 'open',
            date: '2024-04-05',
            description: 'Optimized build process to reduce compilation time by 30% for large projects.'
        },
        {
            id: 5,
            type: 'Issue',
            title: 'Documentation: Update migration guide',
            repository: 'react',
            organization: 'React',
            url: 'https://github.com/facebook/react/issues/8901',
            status: 'closed',
            date: '2024-01-28',
            description: 'Improved migration guide documentation with clearer examples and common pitfalls.'
        },
        {
            id: 6,
            type: 'PR',
            title: 'Fix: Resolve CSS purging issue in production',
            repository: 'tailwindcss',
            organization: 'Tailwind CSS',
            url: 'https://github.com/tailwindlabs/tailwindcss/pull/3210',
            status: 'merged',
            date: '2024-03-22',
            description: 'Fixed an issue where critical CSS classes were being purged incorrectly in production builds.'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'merged':
                return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
            case 'open':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'closed':
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    const getTypeIcon = (type: string) => {
        return type === 'PR' ? '🔀' : '📝';
    };

    return (
        <div className="min-h-screen bg-transparent">
            <Header />
            
            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="min-h-[60vh] flex items-center justify-center bg-transparent relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                            Open Source Contributions
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in-up-delay">
                            Contributing to open source projects and making the developer community better, one PR at a time.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="bg-transparent relative overflow-hidden py-20">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-12">
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-2 inline-flex gap-2">
                                <button
                                    onClick={() => setActiveTab('organizations')}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                        activeTab === 'organizations'
                                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-400/25'
                                            : 'text-gray-300 hover:text-cyan-400'
                                    }`}
                                >
                                    Organizations
                                </button>
                                <button
                                    onClick={() => setActiveTab('contributions')}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                        activeTab === 'contributions'
                                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-400/25'
                                            : 'text-gray-300 hover:text-cyan-400'
                                    }`}
                                >
                                    Contributions
                                </button>
                            </div>
                        </div>

                        {/* Organizations Tab */}
                        {activeTab === 'organizations' && (
                            <div>
                                <h2 className="text-3xl font-bold text-white text-center mb-12">
                                    Organizations I've Contributed To
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {organizations.map((org) => (
                                        <a
                                            key={org.id}
                                            href={org.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/20"
                                        >
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-16 h-16 rounded-full bg-gray-700 mb-4 flex items-center justify-center overflow-hidden">
                                                    <img
                                                        src={org.avatar}
                                                        alt={org.name}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.src = 'https://via.placeholder.com/64';
                                                        }}
                                                    />
                                                </div>
                                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                    {org.name}
                                                </h3>
                                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                    {org.description}
                                                </p>
                                                <div className="flex items-center gap-2 text-cyan-400 text-sm">
                                                    <span>🔀</span>
                                                    <span>{org.contributions} contributions</span>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Contributions Tab */}
                        {activeTab === 'contributions' && (
                            <div>
                                <h2 className="text-3xl font-bold text-white text-center mb-12">
                                    Pull Requests & Issues
                                </h2>
                                
                                {/* Stats */}
                                <div className="grid md:grid-cols-3 gap-6 mb-12">
                                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                                            {contributions.filter(c => c.type === 'PR').length}
                                        </div>
                                        <div className="text-gray-300">Pull Requests</div>
                                    </div>
                                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                                            {contributions.filter(c => c.type === 'Issue').length}
                                        </div>
                                        <div className="text-gray-300">Issues</div>
                                    </div>
                                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                                            {contributions.filter(c => c.status === 'merged').length}
                                        </div>
                                        <div className="text-gray-300">Merged PRs</div>
                                    </div>
                                </div>

                                {/* Contributions List */}
                                <div className="space-y-6">
                                    {contributions.map((contribution) => (
                                        <a
                                            key={contribution.id}
                                            href={contribution.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-400/20"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="text-2xl">{getTypeIcon(contribution.type)}</span>
                                                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                                            {contribution.title}
                                                        </h3>
                                                    </div>
                                                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                                                        <span className="flex items-center gap-1">
                                                            <span>🏢</span>
                                                            <span>{contribution.organization}</span>
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <span>📦</span>
                                                            <span>{contribution.repository}</span>
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <span>📅</span>
                                                            <span>{new Date(contribution.date).toLocaleDateString()}</span>
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-300 leading-relaxed">
                                                        {contribution.description}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-end gap-2">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(contribution.status)}`}>
                                                        {contribution.status}
                                                    </span>
                                                    <span className="text-cyan-400 text-sm group-hover:underline">
                                                        View →
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default OpenSource;

