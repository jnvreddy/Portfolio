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
                backgroundColor: '#000000'
            }}
        />
    );
};

export default Background;

