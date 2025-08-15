import React, { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Palette className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-white">Pk'House Studio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-white transition-colors">
              Galeria
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
              Contato
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <nav className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-white transition-colors text-left">
                Galeria
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors text-left">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-left">
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;