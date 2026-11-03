import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Award, Sparkles, ChevronRight, Fuel, Camera } from 'lucide-react';
import { PetrobrasLogo, ShellLogo, IpirangaLogo, RedeYpeLogo } from './BrandLogos';

export const Hero = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const heroPhotos = [
    {
      brand: 'Petrobras',
      title: 'Padrão Petrobras Grid • 8 Unidades',
      subtitle: 'Pistas amplas iluminadas em LED com Gasolina Grid, Diesel S-10 e Troca de Óleo',
      image: './images/posto-petrobras.jpg',
      Logo: PetrobrasLogo,
      badgeBg: 'bg-emerald-600 text-white'
    },
    {
      brand: 'Shell',
      title: 'Tecnologia Shell V-Power • 3 Unidades',
      subtitle: 'Abastecimento de alta performance com fórmula Dynaflex, Troca de Óleo e Lavagem',
      image: './images/posto-shell.jpg',
      Logo: ShellLogo,
      badgeBg: 'bg-red-600 text-white'
    },
    {
      brand: 'Ipiranga',
      title: 'Ecossistema Ipiranga Ipmax • 2 Unidades',
      subtitle: 'Atendimento 24h na Av. Guadalupe e Loja de Conveniência exclusiva no Posto da Gruta',
      image: './images/posto-ipiranga-oficial.jpg',
      Logo: IpirangaLogo,
      badgeBg: 'bg-blue-600 text-white'
    }
  ];

  const currentHeroPhoto = heroPhotos[activePhotoIndex];
  const ActiveBrandLogo = currentHeroPhoto.Logo;

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-100/60 via-amber-100/40 to-blue-100/30 blur-3xl rounded-full" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-emerald-100/40 blur-2xl rounded-full" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-100/50 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Main Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
              <span>Rede Ypê • 13 Postos de Combustíveis em SJC</span>
            </div>

            {/* Cidades em Super Destaque */}
            <div className="pt-2 pb-1">
              <div className="inline-block p-1.5 sm:p-2 rounded-2xl bg-white border-2 border-slate-900/10 shadow-md">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900 px-2 py-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-red-500 fill-red-500/20" /> Cidades & Região:
                  </span>
                  {[
                    { nome: 'São José dos Campos', cor: 'bg-blue-600 text-white shadow-blue-500/20' },
                    { nome: 'Jacareí', cor: 'bg-emerald-700 text-white shadow-emerald-500/20' },
                    { nome: 'Taubaté', cor: 'bg-amber-500 text-slate-950 font-black shadow-amber-500/20' },
                    { nome: 'Caçapava', cor: 'bg-slate-900 text-white shadow-slate-900/20' }
                  ].map((cid) => (
                    <span
                      key={cid.nome}
                      className={`inline-flex items-center text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-xl shadow-sm ${cid.cor} hover:scale-105 transition-transform cursor-default`}
                    >
                      {cid.nome}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Mais do que abastecimento: 13 unidades com controle rigoroso de pureza, procedência direta das refinarias homologadas Petrobras, Shell e Ipiranga, com serviços de lavagem, troca de óleo e calibradores digitais.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#unidades"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 hover:-translate-y-0.5"
              >
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Relação dos 13 Postos</span>
                <ChevronRight className="w-4 h-4 ml-1 opacity-70" />
              </a>

              <a
                href="#bandeiras"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-sm hover:border-slate-300"
              >
                <Fuel className="w-5 h-5 text-blue-600" />
                <span>Nossas Bandeiras</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">13</div>
                <div className="text-xs text-slate-500 font-medium">Postos Oficiais</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">100%</div>
                <div className="text-xs text-slate-500 font-medium">Combustível Testado</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">3</div>
                <div className="text-xs text-slate-500 font-medium">Grandes Bandeiras</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual 4K Photo & Brand Logos Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none">

              {/* Outer Card with subtle glass glow */}
              <div className="relative rounded-3xl p-4 sm:p-6 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-slate-200/60 overflow-hidden space-y-4">

                {/* Status Indicator */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold tracking-wide uppercase text-emerald-800">Infraestrutura 4K • Operação Ativa</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-bold bg-slate-100 px-2.5 py-1 rounded-full">
                    <Camera className="w-3.5 h-3.5 text-emerald-600" /> Galeria Oficial
                  </span>
                </div>

                {/* Main 4K Station Photo with Overlaid Company Logos */}
                <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-slate-900 shadow-lg group">
                  <img
                    src={currentHeroPhoto.image}
                    alt={currentHeroPhoto.title}
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/25 to-transparent" />

                  {/* Top-Left Rede Ypê Official Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-white/50 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                      Y
                    </div>
                    <span className="text-xs font-black tracking-tight text-slate-900">
                      REDE <span className="text-emerald-600">YPÊ</span>
                    </span>
                  </div>

                  {/* Top-Right Active Brand Logo Overlay */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white/60">
                    <ActiveBrandLogo className="h-7 sm:h-8 w-auto" />
                  </div>

                  {/* Bottom Caption inside 4K Photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 text-white">
                    <div>
                      <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md mb-1 ${currentHeroPhoto.badgeBg}`}>
                        Bandeira {currentHeroPhoto.brand}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold leading-tight drop-shadow-xs">
                        {currentHeroPhoto.title}
                      </h3>
                      <p className="text-[11px] text-slate-200 line-clamp-1 mt-0.5">
                        {currentHeroPhoto.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive 3-Photo Thumbnail Strip with Company Logos */}
                <div className="grid grid-cols-3 gap-2.5">
                  {heroPhotos.map((item, idx) => {
                    const ThumbLogo = item.Logo;
                    const isSelected = activePhotoIndex === idx;
                    return (
                      <button
                        key={item.brand}
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all text-left group cursor-pointer ${isSelected
                          ? 'border-emerald-600 ring-2 ring-emerald-500/30 scale-[1.02]'
                          : 'border-slate-200 opacity-80 hover:opacity-100'
                          }`}
                      >
                        <div className="aspect-16/10 w-full overflow-hidden bg-slate-800">
                          <img
                            src={item.image}
                            alt={`Posto ${item.brand}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-1.5 bg-white flex items-center justify-center border-t border-slate-100">
                          <ThumbLogo className="h-5 sm:h-6 w-auto" />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Quality Seal Feature Box */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-amber-500/10 border border-emerald-500/20 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900">Relação Oficial e Certificada</h2>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Todos os 13 postos contam com controle volumétrico, teste de densímetro na bomba e laudos da ANP.
                    </p>
                  </div>
                </div>

              </div>

              {/* Decorative Floating Pill */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white border border-slate-200 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">+4.8 Avaliação</div>
                  <div className="text-[10px] text-slate-500">Satisfação dos motoristas</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
