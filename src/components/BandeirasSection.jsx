import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BANDEIRAS_INFO } from '../data/postosData';
import { PetrobrasLogo, ShellLogo, IpirangaLogo } from './BrandLogos';
import { ShieldCheck, Zap, Award, Gauge, Sparkles, CheckCircle2 } from 'lucide-react';

export const BandeirasSection = () => {
  const [selectedBrand, setSelectedBrand] = useState('Petrobras');

  const brandComponents = {
    Petrobras: {
      Logo: PetrobrasLogo,
      image: './images/posto-petrobras.jpg',
      badgeClass: 'bg-emerald-500/10 text-emerald-700 border-emerald-300',
      accentBg: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      borderColor: 'border-emerald-500/30',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700',
      iconColor: 'text-emerald-600',
    },
    Shell: {
      Logo: ShellLogo,
      image: './images/posto-shell.jpg',
      badgeClass: 'bg-red-500/10 text-red-700 border-red-300',
      accentBg: 'from-red-500/10 via-amber-500/5 to-transparent',
      borderColor: 'border-red-500/30',
      buttonBg: 'bg-red-600 hover:bg-red-700',
      iconColor: 'text-red-600',
    },
    Ipiranga: {
      Logo: IpirangaLogo,
      image: './images/posto-ipiranga-oficial.jpg',
      badgeClass: 'bg-blue-500/10 text-blue-700 border-blue-300',
      accentBg: 'from-blue-500/10 via-amber-500/5 to-transparent',
      borderColor: 'border-blue-500/30',
      buttonBg: 'bg-blue-600 hover:bg-blue-700',
      iconColor: 'text-blue-600',
    },
  };

  const currentBrandData = BANDEIRAS_INFO.find((b) => b.nome === selectedBrand);
  const currentConfig = brandComponents[selectedBrand];

  return (
    <section id="bandeiras" className="py-20 md:py-28 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B2545] text-[#FFD100] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#FFD100]" />
            <span>Padrão Rigoroso de Pureza e Desempenho</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            As Três Maiores Bandeiras do País no Mesmo Padrão de Atendimento
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Na Rede Ypê, você tem a certeza da procedência direta das refinarias e distribuidoras oficiais. Escolha sua bandeira preferida e conheça os diferenciais de cada formulação.
          </p>
        </div>

        {/* Brand Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {BANDEIRAS_INFO.map((b) => {
            const isSelected = selectedBrand === b.nome;
            return (
              <button
                key={b.nome}
                onClick={() => setSelectedBrand(b.nome)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B2545] text-white border-[#0B2545] shadow-lg shadow-blue-950/15 scale-102'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-[#0B2545]'
                }`}
              >
                <span>{b.nome}</span>
                <span className={`text-xs px-2 py-0.5 rounded-md font-extrabold ${isSelected ? 'bg-[#FFD100] text-[#0B2545]' : 'bg-slate-200 text-slate-600'}`}>
                  {b.nome === 'Shell' ? 'V-Power' : b.nome === 'Petrobras' ? 'Grid & Podium' : 'Ipimax'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedBrand}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className={`rounded-3xl border ${currentConfig.borderColor} bg-gradient-to-b ${currentConfig.accentBg} p-6 sm:p-10 shadow-xl overflow-hidden`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Brand Overview, 4K Photo & Header */}
              <div className="lg:col-span-5 space-y-5">
                {/* 4K Gas Station Photo with Company Logo Overlay */}
                <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-slate-900 shadow-lg border border-white/80 group">
                  <img
                    src={currentConfig.image}
                    alt={`Posto Bandeira ${selectedBrand} - Rede Ypê`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 p-2.5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-md">
                    <currentConfig.Logo className="h-7 sm:h-8 w-auto" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold bg-slate-900/80 backdrop-blur-xs px-3 py-1 rounded-lg border border-white/15">
                      Pista Homologada {selectedBrand} • 4K
                    </span>
                  </div>
                </div>
                
                <div>
                  <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${currentConfig.badgeClass} mb-2`}>
                    {currentBrandData.slogan}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">
                    {currentBrandData.tagline}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-white/80 border border-slate-200/80 text-sm text-slate-700 leading-relaxed shadow-xs">
                  <span className="font-bold text-slate-900 block mb-1">Serviço Exclusivo Homologado:</span>
                  {currentBrandData.servicoChave}
                </div>

                <a
                  href="#unidades"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  <span>Ver postos com bandeira {selectedBrand}</span>
                  <span className="text-base">→</span>
                </a>
              </div>

              {/* Specific Tech Cards (3 Key Technologies) */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentBrandData.destaques.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center font-black text-xs text-slate-700">
                          0{idx + 1}
                        </span>
                        <CheckCircle2 className={`w-5 h-5 ${currentConfig.iconColor}`} />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-2">
                        {item.produto}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.descricao}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                      <Gauge className="w-3.5 h-3.5" />
                      <span>Rendimento Comprovado</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tri-Card Grid comparison preview below with 4K Photos & Brand Logos */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-slate-50/90 border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                <img
                  src="./images/posto-petrobras.jpg"
                  alt="Postos Petrobras Rede Ypê"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2.5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-md">
                  <PetrobrasLogo className="h-7 w-auto" />
                </div>
                <span className="absolute bottom-3 right-3 text-[11px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-1 rounded-lg shadow-xs">
                  Postos de Combustíveis
                </span>
              </div>
              <div className="p-6 pb-2">
                <h4 className="font-extrabold text-[#0B2545] text-base mb-1.5">Padrão Petrobras</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aditivação de ponta com a consagrada <strong>Gasolina Grid</strong>, Diesel S-10 e S-500 de alta performance presentes nos postos de combustíveis em SJC.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-3 mt-3 border-t border-slate-200/80 text-[11px] font-bold text-emerald-700">
              Morumbi, Motorama, Betânia, Satélite, Rossi, Vila Paiva, Cajuru e Putim
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50/90 border border-slate-200/90 hover:border-red-400 hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                <img
                  src="./images/posto-shell.jpg"
                  alt="Postos Shell Rede Ypê"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2.5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-md">
                  <ShellLogo className="h-7 w-auto" />
                </div>
                <span className="absolute bottom-3 right-3 text-[11px] font-black uppercase tracking-wider bg-red-600 text-white px-2.5 py-1 rounded-lg shadow-xs">
                  Postos de Combustíveis
                </span>
              </div>
              <div className="p-6 pb-2">
                <h4 className="font-extrabold text-[#0B2545] text-base mb-1.5">Tecnologia Shell</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fórmula Dynaflex mundial com <strong>Shell V-Power</strong>, Diesel Evolux S-10 e serviços de troca de óleo e lavagem.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-3 mt-3 border-t border-slate-200/80 text-[11px] font-bold text-red-700">
              Jardim América (Guadalupe), Vila Maria e Vila Tesouro
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50/90 border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                <img
                  src="./images/posto-ipiranga-oficial.jpg"
                  alt="Postos Ipiranga Rede Ypê"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2.5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-md">
                  <IpirangaLogo className="h-7 w-auto" />
                </div>
                <span className="absolute bottom-3 right-3 text-[11px] font-black uppercase tracking-wider bg-blue-600 text-white px-2.5 py-1 rounded-lg shadow-xs">
                  Postos de Combustíveis
                </span>
              </div>
              <div className="p-6 pb-2">
                <h4 className="font-extrabold text-[#0B2545] text-base mb-1.5">Ecossistema Ipiranga</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rendimento máximo com a aditivação <strong>Ipmax</strong>, atendimento 24h na Guadalupe e loja de conveniência exclusiva no Posto da Gruta.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-3 mt-3 border-t border-slate-200/80 text-[11px] font-bold text-blue-700">
              Cunha's (Av. Guadalupe 660) e Posto da Gruta (Jd. das Indústrias)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
