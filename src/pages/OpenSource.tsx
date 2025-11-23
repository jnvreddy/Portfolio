import React, { useState } from 'react';
import PageLayout from '../components/layouts/PageLayout';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import TabButton from '../components/ui/TabButton';
import { organizations, contributions } from '../constants/data';
import { getTypeIcon } from '../utils/validation';

const OpenSource: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'organizations' | 'contributions'>('organizations');

    return (
        <PageLayout>
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
                        <Card className="p-2 inline-flex gap-2">
                            <TabButton
                                label="Organizations"
                                isActive={activeTab === 'organizations'}
                                onClick={() => setActiveTab('organizations')}
                            />
                            <TabButton
                                label="Contributions"
                                isActive={activeTab === 'contributions'}
                                onClick={() => setActiveTab('contributions')}
                            />
                        </Card>
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
                                            className="group"
                                        >
                                            <Card className="p-6 hover:scale-105">
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
                                        </Card>
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
                                    <Card className="p-6 text-center">
                                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                                            {contributions.filter(c => c.type === 'PR').length}
                                        </div>
                                        <div className="text-gray-300">Pull Requests</div>
                                    </Card>
                                    <Card className="p-6 text-center">
                                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                                            {contributions.filter(c => c.type === 'Issue').length}
                                        </div>
                                        <div className="text-gray-300">Issues</div>
                                    </Card>
                                    <Card className="p-6 text-center">
                                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                                            {contributions.filter(c => c.status === 'merged').length}
                                        </div>
                                        <div className="text-gray-300">Merged PRs</div>
                                    </Card>
                                </div>

                                {/* Contributions List */}
                                <div className="space-y-6">
                                    {contributions.map((contribution) => (
                                        <a
                                            key={contribution.id}
                                            href={contribution.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block group"
                                        >
                                            <Card className="p-6">
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
                                                    <Badge variant="status" status={contribution.status}>
                                                        {contribution.status}
                                                    </Badge>
                                                    <span className="text-cyan-400 text-sm group-hover:underline">
                                                        View →
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
        </PageLayout>
    );
};

export default OpenSource;

