export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sgr-dark-brown mb-4">About Me</h2>
            <div className="w-20 h-1 bg-sgr-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meticulous Project Coordinator specializing in managing project milestones, budgets, and operational efficiency 
              with a focus on regulatory compliance and reporting automation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-sgr-beige/30 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-semibold sgr-dark-brown mb-4">Current Role</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-building sgr-gold"></i>
                    <span className="text-gray-700">Saudi Gold Refinery - CFO Office</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-calendar sgr-gold"></i>
                    <span className="text-gray-700">June 2024 - Present</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-map-marker-alt sgr-gold"></i>
                    <span className="text-gray-700">Riyadh, Saudi Arabia</span>
                  </div>
                </div>
              </div>

              <div className="bg-sgr-beige/30 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-semibold sgr-dark-brown mb-4">Key Achievements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check sgr-gold mt-1"></i>
                    <span>15% reduction in project delays</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check sgr-gold mt-1"></i>
                    <span>30% improvement in reporting automation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check sgr-gold mt-1"></i>
                    <span>5% reduction in budget overruns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check sgr-gold mt-1"></i>
                    <span>100% on-time project completion</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-sgr-beige/30 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-semibold sgr-dark-brown mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Power BI</span>
                      <span className="text-xs sgr-gold">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sgr-gold h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Azure SQL</span>
                      <span className="text-xs sgr-gold">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sgr-gold h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Python</span>
                      <span className="text-xs sgr-gold">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sgr-gold h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Power Automate</span>
                      <span className="text-xs sgr-gold">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sgr-gold h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sgr-beige/30 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-semibold sgr-dark-brown mb-4">Languages</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">English</span>
                    <span className="sgr-gold font-medium">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Hindi</span>
                    <span className="sgr-gold font-medium">Native</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Urdu</span>
                    <span className="sgr-gold font-medium">Native</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Arabic</span>
                    <span className="sgr-gold font-medium">Basic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
