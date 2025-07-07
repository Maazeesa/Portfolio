export default function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sgr-dark-brown mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-sgr-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Career progression in data analytics and project management</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sgr-gold"></div>

            <div className="space-y-12">
              {/* Current Role */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-sgr-gold rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-sgr-beige/30 rounded-xl p-6 border border-yellow-400/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold sgr-dark-brown">Data Analyst - CFO Office</h3>
                    <span className="sgr-gold font-medium">06/2024 - Present</span>
                  </div>
                  <p className="sgr-brown font-medium mb-3">Saudi Gold Refinery • Riyadh, Saudi Arabia</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Monitored 12+ projects ensuring 100% on-time completion</li>
                    <li>• Reduced reporting time by 20% through automation</li>
                    <li>• Achieved 15% reduction in project delays</li>
                    <li>• Improved decision-making speed by 10%</li>
                  </ul>
                </div>
              </div>

              {/* Previous Role */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-sgr-light-gold rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-xl p-6 border border-yellow-400/20 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold sgr-dark-brown">Business Analyst & Data Team Lead</h3>
                    <span className="sgr-gold font-medium">04/2023 - 05/2024</span>
                  </div>
                  <p className="sgr-brown font-medium mb-3">NovaVente | Home of Technology • Mumbai</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Led data team supporting 12% increase in sales</li>
                    <li>• Delivered weekly reports for 10-13 clients with 98% accuracy</li>
                    <li>• Improved forecast accuracy by 15%</li>
                    <li>• Increased lead conversion rate by 15%</li>
                  </ul>
                </div>
              </div>

              {/* Early Role */}
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-white rounded-xl p-6 border border-yellow-400/20 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold sgr-dark-brown">Assistant to the Project Manager</h3>
                    <span className="sgr-gold font-medium">06/2022 - 02/2023</span>
                  </div>
                  <p className="sgr-brown font-medium mb-3">Shree Balaji Exterior • Mumbai</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Managed material records for 13+ construction projects</li>
                    <li>• Reduced material waste by 5%</li>
                    <li>• Improved procurement efficiency by 15%</li>
                    <li>• Reduced material costs by 7%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
