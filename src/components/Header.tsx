import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white border border-gray-200 rounded-full px-8 py-4 shadow-sm">
      <nav className="flex space-x-8">
        <Link 
          to="/" 
          className="text-gray-700 hover:text-white transition-all duration-300 hover:scale-105 relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        {isHomePage && (
          <>
            <a href="#about" className="text-gray-700 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#experience" className="text-gray-700 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-gray-700 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-white transition-all duration-300 hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </>
        )}
        <Link 
          to="/opensource" 
          className="text-gray-700 hover:text-white transition-all duration-300 hover:scale-105 relative group"
        >
          Open Source
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;