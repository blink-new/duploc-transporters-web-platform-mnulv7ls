import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-accent/10 pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
                Especialistas em Transporte
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transporte
                <span className="text-primary block">Executivo</span>
                <span className="text-accent">de Confiança</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              A DuploC Transporters é especialista em transporte e aluguer de viaturas em Angola. 
              Oferecemos soluções de mobilidade profissionais e seguras para empresas e particulares.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollToSection('services')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
              >
                Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
              >
                Contactar Agora
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Segurança</h3>
                  <p className="text-sm text-gray-600">Máxima segurança</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7</h3>
                  <p className="text-sm text-gray-600">Sempre disponível</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Profissional</h3>
                  <p className="text-sm text-gray-600">Equipa experiente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FQudqBAoLl9T1XkX88kWOXcItqEb2%2F473597256_4093692660950235_1243041500675627743_n1__34366a11.jpg?alt=media&token=cdea548b-0b6f-4448-8070-9a4fd75d6908"
                alt="DuploC Transporters - Frota de Veículos"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;