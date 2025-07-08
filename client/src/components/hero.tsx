import profileImage from "@assets/image_1751972735704.png";

export default function Hero() {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-sgr-beige via-white to-yellow-400/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold sgr-dark-brown mb-4">
              Mo Maaz <span className="sgr-gold">محمد معاذ</span>
            </h1>
            
            {/* Profile Picture */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-sgr-gold/30 mb-6">
                <img 
                  src={profileImage} 
                  alt="Mo Maaz محمد معاذ - Data Analyst" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold sgr-brown mb-6">Data Analyst | Reporting Automation | Mining & Exploration Operations</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Specialized Data Analyst & Project Monitor with 3+ years of experience driving operational efficiency and real-time analytics in mining and construction sectors. 
              Currently supporting executive operations at Saudi Gold Refinery's CFO Office.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleScrollToProjects}
              className="bg-sgr-gold hover:bg-sgr-light-gold text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={handleScrollToContact}
              className="border-2 border-sgr-gold sgr-gold hover:bg-sgr-gold hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Get In Touch
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-yellow-400/20">
              <div className="text-3xl font-bold sgr-gold mb-2">3+</div>
              <div className="sgr-brown font-medium">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-yellow-400/20">
              <div className="text-3xl font-bold sgr-gold mb-2">16+</div>
              <div className="sgr-brown font-medium">Projects Managed</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-yellow-400/20">
              <div className="text-3xl font-bold sgr-gold mb-2">30%</div>
              <div className="sgr-brown font-medium">Efficiency Improved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
