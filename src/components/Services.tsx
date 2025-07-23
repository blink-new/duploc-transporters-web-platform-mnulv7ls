import React from 'react';
import { Car, Users, Shield, Clock, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Transporte Executivo',
      description: 'Serviços de transporte premium para executivos e empresários, com veículos de luxo e motoristas profissionais.',
      features: ['Veículos de luxo', 'Motoristas experientes', 'Pontualidade garantida', 'Discrição total']
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Aluguer de Viaturas',
      description: 'Frota diversificada de veículos para aluguer, desde carros económicos até veículos de luxo.',
      features: ['Frota moderna', 'Preços competitivos', 'Flexibilidade', 'Manutenção incluída']
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Transporte de Grupos',
      description: 'Soluções de transporte para grupos e eventos corporativos com veículos de maior capacidade.',
      features: ['Autocarros modernos', 'Grupos até 50 pessoas', 'Eventos corporativos', 'Turismo empresarial']
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Transfers Aeroporto',
      description: 'Serviço especializado de transfers do e para o aeroporto com pontualidade e conforto.',
      features: ['Monitorização de voos', 'Serviço 24/7', 'Meet & Greet', 'Bagagem assistida']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Transporte Seguro',
      description: 'Serviços de transporte com segurança reforçada para clientes VIP e cargas especiais.',
      features: ['Segurança reforçada', 'Motoristas certificados', 'Veículos blindados', 'Escolta disponível']
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Disponibilidade 24/7',
      description: 'Serviços disponíveis 24 horas por dia, 7 dias por semana para todas as suas necessidades.',
      features: ['Sempre disponível', 'Resposta rápida', 'Emergências', 'Feriados incluídos']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas de Transporte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de transporte e aluguer de viaturas, 
            adaptados às necessidades específicas de cada cliente em Angola.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Precisa de um Serviço Personalizado?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contacte-nos para discutir as suas necessidades específicas de transporte. 
              Criamos soluções à medida para cada cliente.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Solicitar Orçamento Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;