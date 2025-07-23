import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;