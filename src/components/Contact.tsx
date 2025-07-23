import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Telefone',
      details: '+244 945 144 455',
      description: 'Ligue-nos a qualquer hora'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'andre.afonso@bluoshen.co.ao',
      description: 'Resposta em 24 horas'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Localização',
      details: 'Rua Rei Katyavala, Bloco B',
      description: 'Luanda, Angola'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Horário',
      details: 'Sempre aberto',
      description: 'Disponível 24/7'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
            Contacte-nos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pronto para o Servir
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contacto connosco para solicitar um orçamento ou esclarecer qualquer dúvida. 
            A nossa equipa está sempre disponível para o ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informações de Contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="text-primary">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-lg text-primary font-medium">{info.details}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">Nossa Localização</h4>
                    <p className="text-gray-600">Rua Rei Katyavala, Bloco B</p>
                    <p className="text-gray-600">Luanda, Angola</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Solicitar Orçamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+244 xxx xxx xxx"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu.email@exemplo.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço Pretendido *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="transporte-executivo">Transporte Executivo</option>
                        <option value="aluguer-viaturas">Aluguer de Viaturas</option>
                        <option value="transporte-grupos">Transporte de Grupos</option>
                        <option value="transfers-aeroporto">Transfers Aeroporto</option>
                        <option value="transporte-seguro">Transporte Seguro</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Descreva as suas necessidades de transporte..."
                        rows={4}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Pedido
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Pedido Enviado com Sucesso!
                    </h3>
                    <p className="text-gray-600">
                      Obrigado pelo seu interesse. Entraremos em contacto consigo brevemente.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Precisa de Transporte Urgente?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Ligue-nos agora e teremos uma solução pronta para si em minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+244945144455"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +244 945 144 455
              </a>
              <a
                href="mailto:andre.afonso@bluoshen.co.ao"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;