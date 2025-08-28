import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@/contexts/LocalizationContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { Trailer } from '@/components/Trailer';
import { Roadmap } from '@/components/Roadmap';
import { Footer } from '@/components/Footer';
import { Lightbox } from '@/components/Lightbox';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';
import { Contact } from '@/components/Contact';

const App: React.FC = () => {
  return (
    <LocalizationProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Features />
              <Trailer />
              <Roadmap />
            </main>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Lightbox />
      </div>
    </LocalizationProvider>
  );
};

export default App;
