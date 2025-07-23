import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FQudqBAoLl9T1XkX88kWOXcItqEb2%2F473597256_4093692660950235_1243041500675627743_n1__34366a11.jpg?alt=media&token=cdea548b-0b6f-4448-8070-9a4fd75d6908',
      alt: 'DuploC Transporters - Frota de Veículos Executivos',
      title: 'Frota Executiva'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FQudqBAoLl9T1XkX88kWOXcItqEb2%2F473597256_4093692660950235_1243041500675627743_n__34366a11.jpg?alt=media&token=ad8a750c-675a-4622-87bb-f3538cd93e3e',
      alt: 'DuploC Transporters - Veículos de Luxo',
      title: 'Veículos Premium'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FQudqBAoLl9T1XkX88kWOXcItqEb2%2F240507120_3108976226088555_1284673521560146744_n__d025bd14.jpg?alt=media&token=aacc427c-9a92-45b0-980e-39a3eb35a056',
      alt: 'DuploC Transporters - Equipa Profissional',
      title: 'Equipa Profissional'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FQudqBAoLl9T1XkX88kWOXcItqEb2%2F475073570_4104634946522673_4318299035603008447_n__69738c62.jpg?alt=media&token=7eaf88b4-da7c-414c-a316-901cf0c3e9d4',
      alt: 'DuploC Transporters - Serviços de Transporte',
      title: 'Serviços Especializados'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
            Nossa Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça a Nossa Frota e Equipa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns dos nossos veículos e a nossa equipa profissional, sempre prontos para oferecer 
            o melhor serviço de transporte em Angola.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Veículos na Frota</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-600">Disponibilidade</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Title */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-semibold bg-black/50 rounded-lg px-4 py-2">
                {images[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;