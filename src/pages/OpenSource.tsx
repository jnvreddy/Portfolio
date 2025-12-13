import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layouts/PageLayout';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { organizations, contributions } from '../constants/data';
import { getTypeIcon } from '../utils/validation';

const OpenSource: React.FC = () => {
    const [selectedOrgId, setSelectedOrgId] = useState<number | null>(null);

    // Set default organization on page load
    useEffect(() => {
        if (organizations.length > 0 && selectedOrgId === null) {
            setSelectedOrgId(organizations[0].id);
        }
    }, [selectedOrgId]);

    // Get contributions for selected organization
    const selectedContributions = selectedOrgId
        ? contributions.filter(c => {
            const org = organizations.find(o => o.id === selectedOrgId);
            return org && c.organization === org.name;
        })
        : [];

    const selectedOrg = organizations.find(o => o.id === selectedOrgId);

    return (
        <PageLayout showFooter={false}>
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
                    {/* Organizations List */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            Organizations I've Contributed To
                        </h2>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {organizations.map((org) => (
                                <button
                                    key={org.id}
                                    onClick={() => setSelectedOrgId(org.id)}
                                    className="group flex flex-col items-center transition-all"
                                >
                                    <div className={`w-16 h-16 rounded-full bg-gray-700 mb-3 flex items-center justify-center overflow-hidden transition-all ${
                                        selectedOrgId === org.id 
                                            ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-transparent scale-110' 
                                            : 'group-hover:scale-105'
                                    }`}>
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
                                    <h3 className={`text-base font-semibold transition-colors ${
                                        selectedOrgId === org.id
                                            ? 'text-cyan-400'
                                            : 'text-white group-hover:text-cyan-400'
                                    }`}>
                                        {org.name}
                                    </h3>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contributions for Selected Organization */}
                    {selectedOrg && (
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-white text-center mb-12">
                                Contributions to {selectedOrg.name}
                            </h2>
                            
                            {/* Stats */}
                            {selectedContributions.length > 0 && (
                                <div className="grid md:grid-cols-3 gap-6 mb-12">
                                    <Card className="p-6 text-center">
                                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                                            {selectedContributions.filter(c => c.type === 'PR').length}
                                        </div>
                                        <div className="text-gray-300">Pull Requests</div>
                                    </Card>
                                    <Card className="p-6 text-center">
                                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                                            {selectedContributions.filter(c => c.type === 'Issue').length}
                                        </div>
                                        <div className="text-gray-300">Issues</div>
                                    </Card>
                                    <Card className="p-6 text-center">
                                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                                            {selectedContributions.filter(c => c.status === 'merged').length}
                                        </div>
                                        <div className="text-gray-300">Merged PRs</div>
                                    </Card>
                                </div>
                            )}

                            {/* Contributions List */}
                            {selectedContributions.length > 0 ? (
                                <div className="space-y-6">
                                    {selectedContributions.map((contribution) => (
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
                            ) : (
                                <Card className="p-12 text-center">
                                    <p className="text-gray-400 text-lg">
                                        No contributions found for {selectedOrg.name}
                                    </p>
                                </Card>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </PageLayout>
    );
};

export default OpenSource;

