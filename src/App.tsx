import React from 'react';
import { LocalizationProvider } from '@/contexts/LocalizationContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { Trailer } from '@/components/Trailer';
import { Roadmap } from '@/components/Roadmap';
import { Footer } from '@/components/Footer';
import { Lightbox } from '@/components/Lightbox';

const App: React.FC = () => {
  return (
    <LocalizationProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Features />
          <Trailer />
          <Roadmap />
        </main>
        <Footer />
        <Lightbox />
      </div>
    </LocalizationProvider>
  );
};

export default App;
