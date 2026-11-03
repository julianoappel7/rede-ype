import React from 'react';
import { motion } from 'framer-motion';
import { PetrobrasLogo, ShellLogo, IpirangaLogo } from './BrandLogos';
import { 
  ShieldCheck, 
  Droplets, 
  Coffee, 
  Zap, 
  CheckCircle, 
  Car, 
  Clock, 
  Award,
  Layers
} from 'lucide-react';

export const ServicesSection = () => {
  const differentials = [
    {
      icon: ShieldCheck,
      iconColor: 'text-emerald-600',
      bgGlow: 'bg-emerald-500/10',
      title: 'Controle Rigoroso de Pureza',
      description: 'Testes de densidade e teor de etanol realizados diariamente na frente do cliente para máxima transparência e conformidade com a ANP.'
    },
    {
      icon: Droplets,
      iconColor: 'text-amber-500',
      bgGlow: 'bg-amber-500/10',
      title: 'Troca de Óleo Especializada',
      description: 'Profissionais certificados para aplicação dos lubrificantes homologados pelas montadoras (Lubrax, Shell Helix e Ipiranga) com check-up de filtros.'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-indigo-600',
      bgGlow: 'bg-indigo-500/10',
      title: 'Checagem de Níveis na Pista',
      description: 'Verificação gratuita de água do radiador, fluido de freio, palhetas e lâmpadas a cada abastecimento com total zelo e transparência.'
    },
    {
      icon: Zap,
      iconColor: 'text-blue-600',
      bgGlow: 'bg-blue-500/10',
      title: 'Atendimento Rápido e Eficiente',
      description: 'Pistas amplas e frentistas treinados para um fluxo contínuo e sem esperas desnecessárias, com suporte a todas as formas de pagamento digital.'
    },
    {
      icon: Car,
      iconColor: 'text-teal-600',
      bgGlow: 'bg-teal-500/10',
      title: 'Ducha e Calibragem Digital',
      description: 'Mantenha a segurança e o consumo equilibrado dos seus pneus com calibradores eletrônicos de alta precisão disponíveis gratuitamente.'
    },
    {
      icon: Award,
      iconColor: 'text-purple-600',
      bgGlow: 'bg-purple-500/10',
      title: 'Programas de Vantagens Integrados',
      description: 'Acumule pontos e aproveite descontos em combustíveis e parceiros através de programas oficiais como Km de Vantagens, Shell Box e Premmia.'
    }
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Diferenciais Que Agregam Valor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Excelência em Cada Detalhe da Sua Parada
          </h2>
          <p className="mt-4 text-base text-slate-600">
            A Rede Ypê foi pensada para transformar o simples ato de abastecer em uma experiência de conforto, segurança mecânica e economia para o seu veículo.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${item.bgGlow} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${item.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700">
                  <CheckCircle className="w-4 h-4 mr-1.5 text-emerald-600" />
                  <span>Padrão Rede Ypê Garantido</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Banner de Troca de Óleo em Destaque com Fotos 4K e Logos das Empresas */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl space-y-10">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-emerald-500/10 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                  Centro de Lubrificação & Manutenção 4K
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
                  Lubrax • Shell Helix • Ipiranga Jet Oil
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Sua Troca de Óleo com Garantia das Principais Marcas Mundiais
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Nossos mecânicos realizam o check-up gratuito de mais de 15 itens essenciais para a saúde mecânica do seu automóvel: fluido de freio, líquido de arrefecimento, palhetas, filtros e lâmpadas, com agilidade e laudo técnico.
              </p>

              {/* Logos das 3 Empresas Homologadas para Troca de Óleo */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="bg-white px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2">
                  <PetrobrasLogo className="h-6 sm:h-7 w-auto" />
                </div>
                <div className="bg-white px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2">
                  <ShellLogo className="h-6 sm:h-7 w-auto" />
                </div>
                <div className="bg-white px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2">
                  <IpirangaLogo className="h-6 sm:h-7 w-auto" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="#unidades"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all text-center shadow-lg hover:-translate-y-0.5"
              >
                Localizar Posto com Troca de Óleo
              </a>
              <span className="text-center text-xs text-slate-300">
                Atendimento rápido sem agendamento prévio em 8 unidades.
              </span>
            </div>
          </div>

          {/* Galeria 4K da Troca de Óleo e Pistas com Logos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pt-4 border-t border-white/10">
            
            {/* Foto 4K 1: Aplicação de Óleo Sintético */}
            <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-slate-950 border border-white/15 shadow-xl group">
              <img
                src="./images/troca-de-oleo-1.jpg"
                alt="Troca de Óleo Sintético Homologado na Rede Ypê"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
              
              {/* Badges com Logos das Empresas na Imagem */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                <span className="bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-lg shadow-md">
                  🛢️ Lubrificantes 100% Originais
                </span>
                <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl shadow-md">
                  <PetrobrasLogo className="h-4 sm:h-5 w-auto" />
                  <span className="text-slate-300">|</span>
                  <ShellLogo className="h-4 sm:h-5 w-auto" />
                  <span className="text-slate-300">|</span>
                  <IpirangaLogo className="h-4 sm:h-5 w-auto" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-base sm:text-lg font-extrabold text-white">
                  Óleos Sintéticos e Semissintéticos de Alta Performance
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Aplicação precisa seguindo rigorosamente a viscosidade recomendada pelo manual do seu veículo.
                </p>
              </div>
            </div>

            {/* Foto 4K 2: Box Completo de Troca de Óleo e Filtros */}
            <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-slate-950 border border-white/15 shadow-xl group">
              <img
                src="./images/troca-de-oleo-2.jpg"
                alt="Box de Troca de Óleo e Check-up Mecânico Rede Ypê"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

              {/* Logo Rede Ypê + Selo Check-up */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                    Y
                  </div>
                  <span className="text-xs font-black tracking-tight text-slate-900">
                    REDE <span className="text-emerald-600">YPÊ</span>
                  </span>
                </div>
                <span className="bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-lg shadow-md">
                  ✓ Check-up 15 Itens Grátis
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-base sm:text-lg font-extrabold text-white">
                  Elevador Hidráulico, Troca de Filtros & Inspeção Completa
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Ambiente limpo, moderno e equipado para atender carros de passeio, SUVs, picapes e frotas comerciais.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
