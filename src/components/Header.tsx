import React, { useState } from 'react';
import { Menu, X, Phone, Mail, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '../hooks/useAuth';
import { UserProfile } from './UserProfile';
import { AuthModal } from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, loading } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+244 945 144 455</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>andre.afonso@bluoshen.co.ao</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Sempre aberto • Luanda, Angola</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              DuploC <span className="text-accent">Transporters</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Auth & CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!loading && (
              <>
                {user ? (
                  <UserProfile />
                ) : (
                  <Button
                    onClick={() => setIsAuthModalOpen(true)}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Entrar
                  </Button>
                )}
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Solicitar Orçamento
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                Contacto
              </button>
              <div className="px-3 py-2 space-y-2">
                {!loading && (
                  <>
                    {!user && (
                      <Button
                        onClick={() => setIsAuthModalOpen(true)}
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <LogIn className="h-4 w-4 mr-2" />
                        Entrar
                      </Button>
                    )}
                    <Button
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                    >
                      Solicitar Orçamento
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  );
};

export default Header;