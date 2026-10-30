import React from 'react';
import { motion } from 'framer-motion';
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

        {/* Banner de Troca de Óleo em Destaque */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-emerald-500/10 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                Centro de Lubrificação & Manutenção
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Sua Troca de Óleo com Garantia das Principais Marcas Mundiais
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Nossos mecânicos realizam o check-up gratuito de mais de 15 itens essenciais para a saúde mecânica do seu automóvel: fluido de freio, líquido de arrefecimento, palhetas, filtros e lâmpadas, com agilidade e laudo técnico.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="#unidades"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all text-center shadow-lg hover:-translate-y-0.5"
              >
                Localizar Posto com Troca de Óleo
              </a>
              <span className="text-center text-xs text-slate-400">
                Atendimento rápido sem agendamento prévio.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
