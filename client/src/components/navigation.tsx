import { useState } from "react";
import { Link } from "wouter";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-lg border-b border-yellow-400/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-sgr-gold to-sgr-light-gold rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-white text-lg"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold sgr-dark-brown">Mo Maaz</h1>
                <p className="text-sm sgr-brown">محمد معاذ</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="sgr-dark-brown hover:sgr-gold transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="sgr-brown hover:sgr-gold"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform z-50 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 space-y-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="sgr-brown hover:sgr-gold"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
          <nav className="space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="block sgr-dark-brown hover:sgr-gold transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
