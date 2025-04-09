import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">JNV Reddy</h1>
        <nav className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
