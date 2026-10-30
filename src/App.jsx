import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BandeirasSection } from './components/BandeirasSection';
import { UnidadesSection } from './components/UnidadesSection';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
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
