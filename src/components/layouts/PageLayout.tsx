import React from 'react';
import FloatingContactButton from '../FloatingContactButton';
import Footer from '../Footer';

interface PageLayoutProps {
    children: React.ReactNode;
    showFooter?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, showFooter = true }) => {
    return (
        <div className="min-h-screen bg-transparent">
            <FloatingContactButton />
            <main className="pb-20">
                {children}
            </main>
            {showFooter && <Footer />}
        </div>
    );
};

export default PageLayout;

