import Footer from "./Footer";
import Header from "./Header";
import Hero from "./home/Hero";
import About from "./home/About";
import ProjectsPreview from "./home/ProjectsPreview";
import Contact from "./home/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <ProjectsPreview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
