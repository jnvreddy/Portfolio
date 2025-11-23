import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface PageLayoutProps {
    children: React.ReactNode;
    showFooter?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, showFooter = true }) => {
    return (
        <div className="min-h-screen bg-transparent">
            <Header />
            <main className="pt-32 pb-20">
                {children}
            </main>
            {showFooter && <Footer />}
        </div>
    );
};

export default PageLayout;

