import React from 'react';
import { Award, Target, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Excelência',
      description: 'Comprometemo-nos com a mais alta qualidade em todos os nossos serviços.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Precisão',
      description: 'Pontualidade e precisão são fundamentais no nosso trabalho diário.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Dedicação',
      description: 'Dedicação total à satisfação e segurança dos nossos clientes.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Eficiência',
      description: 'Soluções rápidas e eficientes para todas as necessidades de transporte.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
              Sobre a DuploC
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Especialistas em Transporte e Aluguer de Viaturas
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg">
                A <strong className="text-gray-900">DuploC Transporters</strong> é uma empresa especialista em transporte e aluguer de viaturas, 
                parte do grupo empresarial <strong className="text-primary">Bluoshen S.A</strong>, um grupo de gestão empresarial angolano 
                com fortes relações nos sectores público e privado.
              </p>
              <p>
                Com sede em Luanda, Angola, na Rua Rei Katyavala, Bloco B, oferecemos soluções completas de mobilidade 
                para empresas e particulares, sempre com o mais alto padrão de qualidade e profissionalismo.
              </p>
              <p>
                A nossa experiência e conhecimento do mercado angolano permite-nos oferecer serviços adaptados às 
                necessidades específicas de cada cliente, garantindo sempre segurança, conforto e pontualidade.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FQudqBAoLl9T1XkX88kWOXcItqEb2%2F240507120_3108976226088555_1284673521560146744_n__d025bd14.jpg?alt=media&token=aacc427c-9a92-45b0-980e-39a3eb35a056"
                alt="DuploC Transporters - Equipa Profissional"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Stats */}
            <div className="absolute -bottom-8 left-8 right-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-gray-600">Anos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">500+</div>
                    <div className="text-sm text-gray-600">Clientes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">Disponível</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bluoshen S.A</h3>
              <p className="text-gray-600 mb-4">
                A DuploC faz parte da Bluoshen S.A, um grupo de gestão empresarial angolano com fortes 
                relações nos sectores público e privado que permitiu à empresa expandir e diversificar 
                os seus negócios em muitos sectores distintos.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Hotelaria', 'Logística', 'Saúde', 'Aviação', 'Comércio', 'Imobiliário', 'Agronegócio'].map((sector, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Fornecer soluções de transporte e mobilidade de excelência, contribuindo para o 
                desenvolvimento empresarial e pessoal dos nossos clientes em Angola, sempre com 
                segurança, profissionalismo e inovação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;