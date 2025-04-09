import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-100"
    >
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Hi, I'm <span className="text-blue-600">J NAGAVARDHAN REDDY</span>
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          I'm a full-stack developer passionate about building responsive,
          modern websites using MERN stack.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
