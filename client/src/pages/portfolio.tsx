import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-sgr-dark-brown text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-sgr-gold to-sgr-light-gold rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mo Maaz محمد معاذ</h3>
                <p className="sgr-light-gold">Data Analyst</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Specialized in mining industry data analytics and project management. 
              Currently driving operational excellence at Saudi Gold Refinery.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="tel:+966573218709" className="sgr-light-gold hover:text-yellow-400 transition-colors">
                <i className="fas fa-phone text-xl"></i>
              </a>
              <a href="mailto:mo.maaz@outlook.com" className="sgr-light-gold hover:text-yellow-400 transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://linkedin.com/in/mo-maaz-975b33255" target="_blank" rel="noopener noreferrer" className="sgr-light-gold hover:text-yellow-400 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
            
            <div className="border-t border-gray-600 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Mo Maaz. All rights reserved. • Riyadh, Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
