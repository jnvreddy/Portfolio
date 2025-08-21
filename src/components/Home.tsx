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
    </div>
  );
};

export default Home;
