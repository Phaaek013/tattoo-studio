import React from 'react';

const Gallery = () => {
  const images = [
    { id: 1, url: 'https://via.placeholder.com/400x500/1a1a1a/ff4444?text=Tattoo+1', category: 'Realismo' },
    { id: 2, url: 'https://via.placeholder.com/400x500/1a1a1a/ff4444?text=Tattoo+2', category: 'Tradicional' },
    { id: 3, url: 'https://via.placeholder.com/400x500/1a1a1a/ff4444?text=Tattoo+3', category: 'Minimalista' },
    { id: 4, url: 'https://via.placeholder.com/400x500/1a1a1a/ff4444?text=Tattoo+4', category: 'Geométrica' },
    { id: 5, url: 'https://via.placeholder.com/400x500/1a1a1a/ff4444?text=Tattoo+5', category: 'Aquarela' },
    { id: 6, url: 'https://via.placeholder.com/400x500/1a1a1a/ff4444?text=Tattoo+6', category: 'Blackwork' },
    { id: 7, url: 'https://via.placeholder.com/400x500/1a1a1a/ff4444?text=Tattoo+7', category: 'Oriental' },
    { id: 8, url: 'https://via.placeholder.com/400x500/1a1a1a/ff4444?text=Tattoo+8', category: 'Realismo' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa <span className="text-orange-500">Galeria</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos mais recentes e se inspire para sua próxima tatuagem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-[4/5] cursor-pointer"
            >
              <img
                src={image.url}
                alt={`Tatuagem ${image.category}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-lg font-semibold mb-2">{image.category}</h3>
                  <div className="w-12 h-0.5 bg-orange-500 mx-auto"></div>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Ver Mais Trabalhos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;