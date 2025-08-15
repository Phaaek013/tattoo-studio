import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma sessão de tatuagem no Pk\'House Studio.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Arte na <span className="text-orange-500">Pele</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transformamos suas ideias em obras de arte permanentes. 
            <br />Tatuagens únicas, profissionais e seguras no Pk'House Studio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleWhatsAppClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-500/25"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Agendar pelo WhatsApp</span>
            </button>
            
            <button
              onClick={scrollToGallery}
              className="border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Ver Trabalhos
            </button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-gray-400 mx-auto cursor-pointer" onClick={scrollToGallery} />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-32 bg-orange-500 opacity-20 rotate-45"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-32 bg-orange-500 opacity-20 rotate-45"></div>
    </section>
  );
};

export default Hero;