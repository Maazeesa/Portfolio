import dashboardImage from "@assets/dashboard_1751928862572.png";
import formImage from "@assets/form_1751928867608.png";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-sgr-beige/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sgr-dark-brown mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-sgr-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing key projects and systems developed for Saudi Gold Refinery's operational excellence.
            </p>
          </div>

          {/* SGR Exploration Dashboard */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-yellow-400/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-sgr-gold rounded-lg flex items-center justify-center">
                    <i className="fas fa-chart-area text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold sgr-dark-brown">SGR Exploration Dashboard</h3>
                    <p className="sgr-brown">Real-time Mining Operations Analytics</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Comprehensive exploration dashboard monitoring trenching, drilling, and safety metrics across 
                  12+ active projects. Features real-time KPI tracking, utilization analysis, and automated reporting.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-check-circle sgr-gold"></i>
                    <span className="text-gray-700">Real-time drilling & trenching metrics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-check-circle sgr-gold"></i>
                    <span className="text-gray-700">Safety incident tracking & analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-check-circle sgr-gold"></i>
                    <span className="text-gray-700">Manpower utilization optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-check-circle sgr-gold"></i>
                    <span className="text-gray-700">Automated sample analysis workflow</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-sgr-gold/20 sgr-brown text-sm rounded-full">Power BI</span>
                  <span className="px-3 py-1 bg-sgr-gold/20 sgr-brown text-sm rounded-full">Azure SQL</span>
                  <span className="px-3 py-1 bg-sgr-gold/20 sgr-brown text-sm rounded-full">Power Automate</span>
                  <span className="px-3 py-1 bg-sgr-gold/20 sgr-brown text-sm rounded-full">Excel</span>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-sgr-beige/50 rounded-lg p-3">
                    <div className="text-2xl font-bold sgr-gold">15%</div>
                    <div className="text-sm sgr-brown">Efficiency Gain</div>
                  </div>
                  <div className="bg-sgr-beige/50 rounded-lg p-3">
                    <div className="text-2xl font-bold sgr-gold">30%</div>
                    <div className="text-sm sgr-brown">Faster Reporting</div>
                  </div>
                  <div className="bg-sgr-beige/50 rounded-lg p-3">
                    <div className="text-2xl font-bold sgr-gold">100%</div>
                    <div className="text-sm sgr-brown">On-time Delivery</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-sgr-beige/30">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={dashboardImage} 
                    alt="SGR Exploration Dashboard showing mining operations analytics and KPIs" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-medium">Live Dashboard Interface</div>
                    <div className="text-white/80 text-xs">Real-time SGR exploration metrics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DWMOR System */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-yellow-400/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 bg-sgr-beige/30 lg:order-2">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={formImage} 
                    alt="DWMOR form interface for daily, weekly, and monthly operating reports" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-medium">DWMOR Form Interface</div>
                    <div className="text-white/80 text-xs">Automated reporting system</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:order-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-sgr-gold rounded-lg flex items-center justify-center">
                    <i className="fas fa-file-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold sgr-dark-brown">DWMOR System</h3>
                    <p className="sgr-brown">Daily Weekly Monthly Operating Reports</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Comprehensive reporting system automating the generation of Daily, Weekly, and Monthly Operating Reports. 
                  Streamlined data collection, processing, and distribution across SGR operations.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-check-circle sgr-gold"></i>
                    <span className="text-gray-700">Automated report generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-check-circle sgr-gold"></i>
                    <span className="text-gray-700">Multi-format output (PDF, Excel, Dashboard)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-check-circle sgr-gold"></i>
                    <span className="text-gray-700">Regulatory compliance tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-check-circle sgr-gold"></i>
                    <span className="text-gray-700">Executive summary generation</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-sgr-gold/20 sgr-brown text-sm rounded-full">Microsoft Forms</span>
                  <span className="px-3 py-1 bg-sgr-gold/20 sgr-brown text-sm rounded-full">Power Platform</span>
                  <span className="px-3 py-1 bg-sgr-gold/20 sgr-brown text-sm rounded-full">SharePoint</span>
                  <span className="px-3 py-1 bg-sgr-gold/20 sgr-brown text-sm rounded-full">Python</span>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-sgr-beige/50 rounded-lg p-3">
                    <div className="text-2xl font-bold sgr-gold">20%</div>
                    <div className="text-sm sgr-brown">Time Reduction</div>
                  </div>
                  <div className="bg-sgr-beige/50 rounded-lg p-3">
                    <div className="text-2xl font-bold sgr-gold">98%</div>
                    <div className="text-sm sgr-brown">Accuracy Rate</div>
                  </div>
                  <div className="bg-sgr-beige/50 rounded-lg p-3">
                    <div className="text-2xl font-bold sgr-gold">10%</div>
                    <div className="text-sm sgr-brown">Decision Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Pipeline Workflow */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-400/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold sgr-dark-brown mb-4">Data Pipeline Architecture</h3>
              <p className="text-gray-600">End-to-end data processing workflow for SGR operations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-sgr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-database text-white text-xl"></i>
                </div>
                <h4 className="font-semibold sgr-dark-brown mb-2">Data Collection</h4>
                <p className="text-sm text-gray-600">Azure SQL Database, Forms, Excel</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sgr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-cogs text-white text-xl"></i>
                </div>
                <h4 className="font-semibold sgr-dark-brown mb-2">Processing</h4>
                <p className="text-sm text-gray-600">Power Query, Python Scripts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sgr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-bar text-white text-xl"></i>
                </div>
                <h4 className="font-semibold sgr-dark-brown mb-2">Analytics</h4>
                <p className="text-sm text-gray-600">Power BI, Statistical Analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sgr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-robot text-white text-xl"></i>
                </div>
                <h4 className="font-semibold sgr-dark-brown mb-2">Automation</h4>
                <p className="text-sm text-gray-600">Power Automate, Scheduled Tasks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sgr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-share-alt text-white text-xl"></i>
                </div>
                <h4 className="font-semibold sgr-dark-brown mb-2">Distribution</h4>
                <p className="text-sm text-gray-600">Dashboards, Reports, Alerts</p>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center mt-8">
              <div className="flex items-center space-x-16">
                <i className="fas fa-arrow-right sgr-gold text-xl"></i>
                <i className="fas fa-arrow-right sgr-gold text-xl"></i>
                <i className="fas fa-arrow-right sgr-gold text-xl"></i>
                <i className="fas fa-arrow-right sgr-gold text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
