export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sgr-dark-brown mb-4">About Me</h2>
            <div className="w-20 h-1 bg-sgr-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a results-driven Data Analyst and Project Monitor with over 3 years of experience in streamlining operational workflows and automating reporting systems. I specialize in using Power BI, Azure SQL, Advanced Excel, Google Sheets to deliver actionable insights that reduce delays, improve budget tracking, and enhance decision-making.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
              Currently, I work at Saudi Gold Refinery in the CFO Office, where I lead initiatives for real-time project monitoring, reporting automation, and process optimization across mining & exploration operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-sgr-beige/30 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-semibold sgr-dark-brown mb-4">Current Role</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-building sgr-gold"></i>
                    <span className="text-gray-700 font-medium">Saudi Gold Refinery – CFO Office</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-map-marker-alt sgr-gold"></i>
                    <span className="text-gray-700">Riyadh, Saudi Arabia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-calendar sgr-gold"></i>
                    <span className="text-gray-700">June 2024 – Present</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold sgr-dark-brown mb-3">Key Achievements:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check sgr-gold mt-1"></i>
                    <span>Reduced project delays by 15% through milestone tracking automation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check sgr-gold mt-1"></i>
                    <span>Improved reporting efficiency by 30% via Power Automate</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check sgr-gold mt-1"></i>
                    <span>Cut budget overruns by 5% using forecasting dashboards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check sgr-gold mt-1"></i>
                    <span>Delivered 90% on-time completion across 16+ projects</span>
                  </li>
                </ul>
              </div>

              <div className="bg-sgr-beige/30 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-semibold sgr-dark-brown mb-4">Areas of Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-sgr-beige/50 rounded-lg p-3 text-center">
                    <i className="fas fa-chart-line sgr-gold text-xl mb-2"></i>
                    <p className="text-sm font-medium sgr-dark-brown">Data Analytics</p>
                  </div>
                  <div className="bg-sgr-beige/50 rounded-lg p-3 text-center">
                    <i className="fas fa-project-diagram sgr-gold text-xl mb-2"></i>
                    <p className="text-sm font-medium sgr-dark-brown">Project Monitoring</p>
                  </div>
                  <div className="bg-sgr-beige/50 rounded-lg p-3 text-center">
                    <i className="fas fa-robot sgr-gold text-xl mb-2"></i>
                    <p className="text-sm font-medium sgr-dark-brown">Process Automation</p>
                  </div>
                  <div className="bg-sgr-beige/50 rounded-lg p-3 text-center">
                    <i className="fas fa-chart-bar sgr-gold text-xl mb-2"></i>
                    <p className="text-sm font-medium sgr-dark-brown">Business Intelligence</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <a 
                    href="https://drive.google.com/file/d/1m-eUhGdWU6qjQR1uUQVlQOjEcLVTR1ds/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-sgr-gold hover:bg-sgr-light-gold text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    <i className="fas fa-download"></i>
                    <span>Download Resume</span>
                  </a>
                </div>
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
                      <span className="text-sm text-gray-700">Advanced Excel</span>
                      <span className="text-xs sgr-gold">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sgr-gold h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Google Sheets</span>
                      <span className="text-xs sgr-gold">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sgr-gold h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Google Studio</span>
                      <span className="text-xs sgr-gold">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sgr-gold h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Python</span>
                      <span className="text-xs sgr-gold">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sgr-gold h-2 rounded-full w-3/4"></div>
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
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Power Query</span>
                      <span className="text-xs sgr-gold">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sgr-gold h-2 rounded-full w-5/6"></div>
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
