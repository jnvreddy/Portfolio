import React from 'react';

const Background: React.FC = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                backgroundColor: '#000000',
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                backgroundPosition: '0 0'
            }}
        />
    );
};

export default Background;

