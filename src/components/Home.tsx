import Header from "./Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      {/* Main Section */}
      <section
        id="home"
        className="flex flex-col h-[100vh] items-center justify-center text-center py-24 px-6 transition-colors duration-300"
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

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-6 h-[100vh] bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6 text-left">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Junior Software Engineer @ IndPro.AB </h3>
              <p className="text-gray-600 dark:text-gray-400">2024 - Present</p>
              <p>
                Worked on scalable MERN applications, REST APIs, and optimized performance for
                enterprise-level solutions.
              </p>
            </div>
          
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 h-[100vh] bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Portfolio Website</h3>
              <p className="text-gray-600 dark:text-gray-400">React, Tailwind, Dark Mode</p>
              <p>A modern portfolio showcasing my projects, blogs, and freelancing work.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">E-commerce App</h3>
              <p className="text-gray-600 dark:text-gray-400">MERN Stack</p>
              <p>
                A full-featured online store with authentication, payments, and admin dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
