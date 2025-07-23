import React from 'react';
import { Phone, Mail, MapPin, Clock, Car, Shield, Users, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                DuploC <span className="text-accent">Transporters</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Especialistas em transporte e aluguer de viaturas em Angola. 
                Parte do grupo Bluoshen S.A, oferecemos soluções de mobilidade 
                profissionais e seguras para empresas e particulares.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span>+244 945 144 455</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span>andre.afonso@bluoshen.co.ao</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Rua Rei Katyavala, Bloco B, Luanda, Angola</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Sempre aberto - Disponível 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="https://web.facebook.com/duplocangola/?locale=pt_BR&_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  @duplocangola
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Car className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-gray-300">Transporte Executivo</span>
              </li>
              <li className="flex items-center space-x-2">
                <Car className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-gray-300">Aluguer de Viaturas</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-gray-300">Transporte de Grupos</span>
              </li>
              <li className="flex items-center space-x-2">
                <Car className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-gray-300">Transfers Aeroporto</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-gray-300">Transporte Seguro</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bluoshen Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">Bluoshen S.A</h4>
              <p className="text-gray-300 text-sm">
                Grupo de gestão empresarial angolano com fortes relações nos sectores público e privado, 
                presente em diversos sectores como hotelaria, logística, saúde, aviação, comércio, 
                imobiliário e agronegócio.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Sectores de Atuação</h4>
              <div className="flex flex-wrap gap-2">
                {['Hotelaria', 'Logística', 'Saúde', 'Aviação', 'Comércio', 'Imobiliário', 'Agronegócio', 'Transporte'].map((sector, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/20 text-accent text-xs rounded-full">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DuploC Transporters. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Parte do Grupo Bluoshen S.A</span>
              <span>•</span>
              <span>Luanda, Angola</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;