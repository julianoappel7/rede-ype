import React from 'react';
import { RedeYpeLogo } from './BrandLogos';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  Clock,
  Globe,
  Share2,
  MessageCircle
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <RedeYpeLogo dark={true} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              A Rede Ypê reúne 13 postos de combustíveis operando com padrão rigoroso de pureza sob as bandeiras Petrobras, Shell e Ipiranga. Máxima procedência, agilidade de pista e serviços automotivos em São José dos Campos.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#contato" 
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Website Oficial"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a 
                href="#contato" 
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Compartilhar"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a 
                href="#contato" 
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Atendimento"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#bandeiras" className="hover:text-emerald-400 transition-colors">Qualidade & Bandeiras</a>
              </li>
              <li>
                <a href="#unidades" className="hover:text-emerald-400 transition-colors">Relação dos 13 Postos</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-emerald-400 transition-colors">Troca de Óleo & Serviços</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-emerald-400 transition-colors">Fale Conosco</a>
              </li>
            </ul>
          </div>

          {/* Bandeiras Representadas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Bandeiras Oficiais
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <strong className="text-slate-200">Petrobras:</strong> Gasolina Grid, Podium & Lubrax+
              </li>
              <li>
                <strong className="text-slate-200">Shell:</strong> V-Power, Shell Select & Helix
              </li>
              <li>
                <strong className="text-slate-200">Ipiranga:</strong> Ipimax, AmPm & Jet Oil
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                100% de conformidade com os laudos da ANP e auditorias periódicas.
              </li>
            </ul>
          </div>

          {/* Atendimento & Comercial */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Central Comercial & Frotas
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Atendimento Regional: Campinas, Mogi Mirim, Mogi Guaçu e Circuito das Águas - SP</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Central: (19) 3806-0000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>contato@redeypepostos.com.br</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Suporte a frotistas: Seg a Sex, 08h às 18h</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Rede Ypê (Rede Ipê Postos). Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
