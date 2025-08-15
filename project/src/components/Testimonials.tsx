import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      rating: 5,
      text: 'Experiência incrível! O profissionalismo e a qualidade do trabalho superaram minhas expectativas. Minha tatuagem ficou perfeita!',
      image: 'https://via.placeholder.com/80x80/1a1a1a/ffffff?text=MS'
    },
    {
      id: 2,
      name: 'João Santos',
      rating: 5,
      text: 'Ambiente limpo, seguro e muito acolhedor. O artista entendeu exatamente o que eu queria. Recomendo demais!',
      image: 'https://via.placeholder.com/80x80/1a1a1a/ffffff?text=JS'
    },
    {
      id: 3,
      name: 'Ana Costa',
      rating: 5,
      text: 'Atendimento excepcional do início ao fim. A atenção aos detalhes e o cuidado com a higiene me deixaram muito segura.',
      image: 'https://via.placeholder.com/80x80/1a1a1a/ffffff?text=AC'
    },
    {
      id: 4,
      name: 'Pedro Oliveira',
      rating: 5,
      text: 'Melhor estúdio da região! Profissionais qualificados, equipamentos modernos e resultado final espetacular.',
      image: 'https://via.placeholder.com/80x80/1a1a1a/ffffff?text=PO'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O que nossos <span className="text-orange-500">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Depoimentos reais de pessoas que confiaram em nosso trabalho
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="h-12 w-12 text-orange-500 mb-6" />
            
            {/* Testimonial Content */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-orange-500"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-gray-400">Cliente Pk'House</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;