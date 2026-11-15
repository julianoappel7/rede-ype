import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BandeirasSection } from './components/BandeirasSection';
import { UnidadesSection } from './components/UnidadesSection';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B2545] selection:bg-[#FFD100] selection:text-[#0B2545]">
      <Navbar />
      <main>
        <Hero />
        <BandeirasSection />
        <UnidadesSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
