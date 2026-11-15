import React, { useState, useEffect } from 'react';
import { RedeYpeLogo, TopBandeirasEnquadradas } from './BrandLogos';
import { Menu, X, MapPin } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Bandeiras Homologadas', href: '#bandeiras' },
    { name: 'Relação dos 15 Postos', href: '#unidades' },
    { name: 'Serviços & Troca de Óleo', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-2.5'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/50 py-3.5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo da Rede Ypê */}
          <a href="#hero" className="flex items-center shrink-0 transition-transform hover:scale-102">
            <RedeYpeLogo />
          </a>

          {/* Enquadramento Profissional das Logos das Bandeiras no Topo */}
          <div className="hidden lg:flex items-center justify-center">
            <TopBandeirasEnquadradas />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0B2545] px-3 py-2 rounded-xl transition-colors hover:bg-amber-50/80"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button + Instagram Official Link */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="https://www.instagram.com/redeypepostos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#0B2545] bg-slate-100 hover:bg-[#FFD100] transition-all border border-slate-200/80"
              title="Instagram Oficial @redeypepostos"
            >
              <span>@redeypepostos</span>
            </a>
            <a
              href="#unidades"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#0B2545] bg-[#FFD100] hover:bg-[#f5c400] transition-all shadow-md shadow-amber-500/20 hover:shadow-lg hover:-translate-y-0.5 border border-amber-400"
            >
              <MapPin className="w-4 h-4 text-[#0B2545]" />
              <span>Ver os 15 Postos</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Bandeiras Bar directly in header for smaller screens */}
        <div className="lg:hidden mt-2 pt-2 border-t border-slate-100 flex items-center justify-center">
          <TopBandeirasEnquadradas />
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-amber-50 hover:text-[#0B2545] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 space-y-2">
            <a
              href="#unidades"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-center text-sm font-bold text-[#0B2545] bg-[#FFD100] hover:bg-[#f5c400] shadow-md transition-all"
            >
              <MapPin className="w-4 h-4" />
              <span>Consultar os 15 Postos</span>
            </a>
            <a
              href="https://www.instagram.com/redeypepostos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-center text-xs font-bold text-white bg-[#0B2545] hover:bg-slate-800 transition-all"
            >
              <span>Siga no Instagram @redeypepostos</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
