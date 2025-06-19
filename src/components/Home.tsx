
function Home() {
 
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 font-inter">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 font-inter font-light leading-relaxed">
            Full-Stack Software Engineer crafting digital experiences with modern technologies
          </p>
          
        </div>
      </div>
    </section>
    )
  }
  
  export default Home