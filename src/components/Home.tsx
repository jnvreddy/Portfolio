import Header from "./Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Jnv Reddy</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300">
          A passionate Software Engineer specializing in MERN stack & full-stack development.
          I love building scalable web apps and creating seamless user experiences.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-5xl mx-auto py-20 px-6 border-b border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I am a Software Engineer with expertise in the MERN stack, MEAN stack, and PostgreSQL.
          With a strong foundation in scalable backend systems and optimized frontend development,
          I enjoy solving complex problems and bringing innovative ideas to life.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto py-20 px-6 border-b border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A short description of this project. It demonstrates my skills in full-stack
                development, performance optimization, and clean architecture.
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Feel free to reach out for collaborations, freelance work, or just a friendly chat.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Jnv Reddy. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
