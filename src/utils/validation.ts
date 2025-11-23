// Validation utilities

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const getStatusColor = (status: 'merged' | 'open' | 'closed'): string => {
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

export const getTypeIcon = (type: 'PR' | 'Issue'): string => {
    return type === 'PR' ? '🔀' : '📝';
};

