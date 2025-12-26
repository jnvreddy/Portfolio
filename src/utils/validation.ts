// Validation utilities

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const getStatusColor = (status: 'merged' | 'open' | 'closed'): string => {
    switch (status) {
        case 'merged':
            return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
        case 'open':
            return 'bg-gray-400/20 text-gray-200 border-gray-400/30';
        case 'closed':
            return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        default:
            return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
};

export const getTypeIcon = (type: 'PR' | 'Issue'): string => {
    return type === 'PR' ? '🔀' : '📝';
};

