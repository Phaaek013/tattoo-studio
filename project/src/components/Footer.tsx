import React from 'react';
import { Instagram, MessageCircle, Clock, MapPin, Phone, Mail, Palette } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre o Pk\'House Studio.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Pk'House Studio</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transformamos suas ideias em arte permanente. Venha conhecer nosso estúdio 
              e descobrir por que somos referência em tatuagem na cidade.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/pkhousestudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
              <button 
                onClick={handleWhatsAppClick}
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              
              <a 
                href="https://tiktok.com/@pkhousestudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-500 p-3 rounded-full transition-colors duration-300"
              >
                <div className="h-5 w-5 flex items-center justify-center">
                  <span className="text-xs font-bold">TT</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">contato@inkhousestudio.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Rua das Artes, 123<br />
                  Centro - São Paulo, SP<br />
                  CEP: 01000-000
                </span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">Horário de Funcionamento</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Segunda à Sexta</div>
                  <div className="text-sm">09:00 - 19:00</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Sábados</div>
                  <div className="text-sm">09:00 - 17:00</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Domingos</div>
                  <div className="text-sm">Fechado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Pk'House Studio. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">
                Política de Privacidade
              </button>
              <button className="hover:text-white transition-colors">
                Termos de Uso
              </button>
              <button className="hover:text-white transition-colors">
                Cuidados Pós-Tatuagem
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Pronto para sua próxima <span className="text-orange-500">tatuagem</span>?
          </h3>
          <p className="text-gray-400 mb-6">
            Entre em contato conosco e vamos transformar sua ideia em realidade!
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;