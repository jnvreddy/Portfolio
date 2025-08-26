import Header from "./Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-24 px-6 transition-colors duration-300"
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
        className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6 text-left">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Software Engineer @ XYZ Corp</h3>
              <p className="text-gray-600 dark:text-gray-400">2022 - Present</p>
              <p>
                Worked on scalable MERN applications, REST APIs, and optimized performance for
                enterprise-level solutions.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Frontend Developer Intern @ ABC Tech</h3>
              <p className="text-gray-600 dark:text-gray-400">2021 - 2022</p>
              <p>
                Built responsive UI components using React, improved accessibility, and optimized
                load times by 30%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6 text-left">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold">B.Tech in Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-400">XYZ University, 2018 - 2022</p>
              <p>Graduated with distinction. Specialized in full-stack development and cloud computing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
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

      {/* Freelancing Section */}
      <section
        id="freelancing"
        className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Freelancing</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I’m open to freelance opportunities in MERN stack, full-stack web development,
            and building scalable web solutions. Let’s collaborate to bring your ideas to life!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
