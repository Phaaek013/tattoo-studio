import React from 'react';
import { Award, Shield, Heart, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Profissionais Certificados',
      description: 'Artistas experientes com certificações em biossegurança e técnicas avançadas de tatuagem.'
    },
    {
      icon: Shield,
      title: 'Máxima Segurança',
      description: 'Equipamentos esterilizados, materiais descartáveis e protocolos rigorosos de higiene.'
    },
    {
      icon: Heart,
      title: 'Arte Personalizada',
      description: 'Cada tatuagem é única, desenvolvida em colaboração com o cliente para resultado perfeito.'
    },
    {
      icon: Clock,
      title: 'Flexibilidade de Horários',
      description: 'Funcionamos em horários flexíveis para se adaptar à sua agenda e disponibilidade.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre o <span className="text-orange-500">Pk'House Studio</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Há mais de 10 anos, o Pk'House Studio se dedica a transformar histórias, 
              sonhos e personalidades em obras de arte permanentes na pele. Nossa paixão 
              pela tatuagem vai além da técnica - é sobre criar conexões e memórias duradouras.
            </p>
            
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Localizado no coração da cidade, nosso estúdio combina tradição e inovação, 
              oferecendo um ambiente acolhedor, seguro e inspirador para que você viva 
              uma experiência única e inesquecível.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://via.placeholder.com/600x700/1a1a1a/ff4444?text=Pk'House+Interior"
                alt="Interior do Pk'House Studio"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-orange-500/20 rounded-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '1000+', label: 'Tatuagens Realizadas' },
            { number: '10+', label: 'Anos de Experiência' },
            { number: '500+', label: 'Clientes Satisfeitos' },
            { number: '100%', label: 'Materiais Esterilizados' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;