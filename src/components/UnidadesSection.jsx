import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UNIDADES } from '../data/postosData';
import { PetrobrasLogo, ShellLogo, IpirangaLogo } from './BrandLogos';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  Check, 
  X as XIcon, 
  Fuel, 
  Wrench, 
  Search, 
  Filter,
  ExternalLink,
  Sparkles,
  Table as TableIcon,
  LayoutGrid,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const UnidadesSection = () => {
  const [activeTab, setActiveTab] = useState(1); // ID do posto ativo
  const [filterBrand, setFilterBrand] = useState('Todas');
  const [filterService, setFilterService] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' ou 'tabela'

  // Filtragem
  const filteredUnidades = UNIDADES.filter((posto) => {
    const matchesBrand = filterBrand === 'Todas' || posto.bandeira === filterBrand;
    
    let matchesService = true;
    if (filterService === 'trocaOleo') matchesService = posto.trocaOleo;
    if (filterService === 'lavagem') matchesService = posto.lavagem;
    if (filterService === 'conveniencia') matchesService = posto.conveniencia;
    if (filterService === '24h') matchesService = posto.horario.includes('24h');

    const matchesSearch = 
      posto.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      posto.bairro.toLowerCase().includes(searchQuery.toLowerCase()) ||
      posto.endereco.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesBrand && matchesService && matchesSearch;
  });

  const currentPosto = 
    filteredUnidades.find((u) => u.id === activeTab) || 
    filteredUnidades[0] || 
    UNIDADES[0];

  const renderBrandLogo = (bandeira, size = "h-8 sm:h-9 w-auto") => {
    switch (bandeira) {
      case 'Shell':
        return <ShellLogo className={size} />;
      case 'Petrobras':
        return <PetrobrasLogo className={size} />;
      case 'Ipiranga':
        return <IpirangaLogo className={size} />;
      default:
        return null;
    }
  };

  const getStationImage = (bandeira) => {
    switch (bandeira) {
      case 'Shell':
        return './images/posto-shell.jpg';
      case 'Ipiranga':
        return './images/posto-ipiranga.jpg';
      case 'Petrobras':
      default:
        return './images/posto-petrobras.jpg';
    }
  };

  return (
    <section id="unidades" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>São José dos Campos • Relação Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Relação dos 13 Postos, Bandeiras, Combustíveis e Serviços
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Consulte a planilha detalhada com endereços, combustíveis aditivados, diesel, troca de óleo, lavagem terceirizada e horários de funcionamento em São José dos Campos.
          </p>
        </div>

        {/* Toolbar de Filtros & Alternância de Visualização */}
        <div className="mb-8 flex flex-col gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-sm">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por nome do posto, bairro ou endereço em SJC..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-slate-50/50"
              />
            </div>

            {/* Alternador de Modo de Visualização (Abas vs Planilha Completa) */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0 self-start md:self-auto">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'cards'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-emerald-600" />
                <span>Modo Interativo (Abas)</span>
              </button>
              <button
                onClick={() => setViewMode('tabela')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'tabela'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Tabela Completa (Conforme Planilha)</span>
              </button>
            </div>
          </div>

          {/* Filtros por Bandeira e por Serviços */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            
            {/* Bandeiras */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Bandeira:
              </span>
              {[
                { label: 'Todas', count: 13 },
                { label: 'Petrobras', count: 8 },
                { label: 'Shell', count: 3 },
                { label: 'Ipiranga', count: 2 }
              ].map(({ label, count }) => (
                <button
                  key={label}
                  onClick={() => setFilterBrand(label)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border ${
                    filterBrand === label
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    filterBrand === label ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {count}
                  </span>
                </button>
              ))}
            </div>

            {/* Serviços Específicos */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-bold text-slate-400 mr-1">Serviço:</span>
              {[
                { id: 'Todos', label: 'Todos' },
                { id: 'trocaOleo', label: 'Com Troca de Óleo' },
                { id: 'lavagem', label: 'Com Lavagem' },
                { id: 'conveniencia', label: 'Com Conveniência (Gruta)' },
                { id: '24h', label: 'Atendimento 24h' }
              ].map((serv) => (
                <button
                  key={serv.id}
                  onClick={() => setFilterService(serv.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                    filterService === serv.id
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {serv.label}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* -------------------- MODO TABELA COMPLETA (FIEL À IMAGEM) -------------------- */}
        {viewMode === 'tabela' ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Header da Tabela em Destaque */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <h3 className="font-black text-base sm:text-lg tracking-wider uppercase">
                  Relação dos Postos, Bandeira, Combustíveis e Serviços
                </h3>
                <span className="text-xs text-blue-200">
                  Dados oficiais auditados • Rede Ypê São José dos Campos
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">
                <span>Total: <strong>13 Postos</strong></span>
              </div>
            </div>

            {/* Conteúdo com Scroll Horizontal Suave */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-amber-400 text-slate-950 font-black uppercase tracking-wider text-[11px] border-b border-amber-500">
                  <tr>
                    <th className="py-3.5 px-3 text-center">#</th>
                    <th className="py-3.5 px-4 min-w-[200px]">Posto (Razão Social)</th>
                    <th className="py-3.5 px-3 min-w-[130px] text-center">Bandeira</th>
                    <th className="py-3.5 px-4 min-w-[260px]">Endereço / Bairro</th>
                    <th className="py-3.5 px-2 text-center" title="Conveniência">Conveniência</th>
                    <th className="py-3.5 px-2 text-center" title="Gasolina Comum">Gas. Comum</th>
                    <th className="py-3.5 px-3 text-center min-w-[110px]" title="Gasolina Aditivada">Gas. Aditivada</th>
                    <th className="py-3.5 px-2 text-center" title="Diesel S-10">Diesel S10</th>
                    <th className="py-3.5 px-2 text-center" title="Diesel S-500">Diesel S500</th>
                    <th className="py-3.5 px-2 text-center" title="Lavagem Terceirizada">Lavagem</th>
                    <th className="py-3.5 px-2 text-center" title="Troca de Óleo">Troca de Óleo</th>
                    <th className="py-3.5 px-2 text-center" title="Calibrador Digital">Calibrador</th>
                    <th className="py-3.5 px-4 min-w-[170px]">Horário</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredUnidades.map((posto) => (
                    <tr 
                      key={posto.id} 
                      className={`hover:bg-amber-50/50 transition-colors ${
                        posto.id === 13 ? 'bg-emerald-50/40' : ''
                      }`}
                    >
                      <td className="py-3.5 px-3 text-center font-black text-slate-900">
                        {posto.id}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-900 leading-tight">
                        {posto.nome}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <div className="flex items-center justify-center p-1.5 bg-white rounded-lg border border-slate-200/80 shadow-2xs">
                          {renderBrandLogo(posto.bandeira, "h-6 sm:h-7 w-auto")}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        <div className="font-semibold text-slate-900">{posto.endereco}</div>
                        <div className="text-[11px] text-slate-500">{posto.bairro} — {posto.cidade}</div>
                      </td>
                      {/* Conveniência */}
                      <td className="py-3.5 px-2 text-center">
                        {posto.conveniencia ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-black">✔️</span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-700 font-black">❌</span>
                        )}
                      </td>
                      {/* Gasolina Comum */}
                      <td className="py-3.5 px-2 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-black">✔️</span>
                      </td>
                      {/* Gasolina Aditivada */}
                      <td className="py-3.5 px-3 text-center">
                        <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-black ${
                          posto.gasolinaAditivada === 'V-Power'
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : posto.gasolinaAditivada === 'Ipmax'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}>
                          {posto.gasolinaAditivada}
                        </span>
                      </td>
                      {/* Diesel S10 */}
                      <td className="py-3.5 px-2 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-black">✔️</span>
                      </td>
                      {/* Diesel S500 */}
                      <td className="py-3.5 px-2 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-black">✔️</span>
                      </td>
                      {/* Lavagem */}
                      <td className="py-3.5 px-2 text-center">
                        {posto.lavagem ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-black">✔️</span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-700 font-black">❌</span>
                        )}
                      </td>
                      {/* Troca de Óleo */}
                      <td className="py-3.5 px-2 text-center">
                        {posto.trocaOleo ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-black">✔️</span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-700 font-black">❌</span>
                        )}
                      </td>
                      {/* Calibrador */}
                      <td className="py-3.5 px-2 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-black">✔️</span>
                      </td>
                      {/* Horário */}
                      <td className="py-3.5 px-4 font-semibold text-slate-700 text-[11px]">
                        {posto.horario}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legenda Oficial do Rodapé da Imagem */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-600">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5"><strong className="text-emerald-700">✔️</strong> Disponível</span>
                <span className="flex items-center gap-1.5"><strong className="text-red-700">❌</strong> Não possui</span>
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">🏪 Conveniência (somente Gruta #13)</span>
                <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800">⛽ Gasolina Comum (todos os postos)</span>
                <span className="px-2 py-0.5 rounded bg-red-100 text-red-800">V-Power (Shell)</span>
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800">Ipmax (Ipiranga)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">BR Grid (Petrobras)</span>
                <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800">Diesel S10 / S500 (todos)</span>
                <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800">Calibrador (todos)</span>
              </div>

              <button
                onClick={() => setViewMode('cards')}
                className="text-emerald-700 hover:text-emerald-800 font-bold underline"
              >
                Alternar para visualização em Abas →
              </button>
            </div>
          </div>
        ) : (
          /* -------------------- MODO INTERATIVO (ABAS + DETALHES) -------------------- */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Units Tab List (Coluna Esquerda com os 13 Postos) */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 p-3 shadow-sm max-h-[660px] overflow-y-auto space-y-2">
              <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Relação dos Postos ({filteredUnidades.length})</span>
                <span className="text-[11px] font-semibold text-emerald-600">Clique para abrir detalhes</span>
              </div>

              {filteredUnidades.length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-sm">
                  Nenhum posto encontrado com estes filtros.
                </div>
              ) : (
                filteredUnidades.map((posto) => {
                  const isActive = currentPosto && currentPosto.id === posto.id;
                  return (
                    <button
                      key={posto.id}
                      onClick={() => setActiveTab(posto.id)}
                      className={`w-full text-left p-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                        isActive
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-[1.01]'
                          : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-black px-2 py-0.5 rounded-md ${
                            isActive 
                              ? 'bg-white/20 text-white' 
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            #{posto.id < 10 ? `0${posto.id}` : posto.id}
                          </span>
                          <h4 className="font-bold text-sm leading-tight">
                            {posto.nome}
                          </h4>
                        </div>
                        <p className={`text-xs truncate max-w-[240px] sm:max-w-xs ${
                          isActive ? 'text-slate-300' : 'text-slate-500'
                        }`}>
                          {posto.bairro} • {posto.endereco}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
                        <div className="bg-white p-1 rounded-lg border border-slate-200/60 shadow-2xs">
                          {renderBrandLogo(posto.bandeira, "h-5 w-auto")}
                        </div>
                        <span className={`text-[10px] font-medium ${isActive ? 'text-slate-400' : 'text-slate-400'}`}>
                          {posto.horario.includes('24h') ? '24 Horas' : '06h às 22h'}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Painel de Detalhes da Unidade Selecionada (Coluna Direita) */}
            <div className="lg:col-span-7">
              {currentPosto && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPosto.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl space-y-6"
                  >
                    {/* 4K Photo Banner of Selected Station + Optional Oil Change Photo */}
                    <div className={`grid grid-cols-1 ${currentPosto.trocaOleo ? 'sm:grid-cols-12' : ''} gap-3`}>
                      <div className={`${currentPosto.trocaOleo ? 'sm:col-span-8' : ''} relative rounded-2xl overflow-hidden aspect-16/9 sm:aspect-auto sm:h-48 bg-slate-900 shadow-md group`}>
                        <img
                          src={getStationImage(currentPosto.bandeira)}
                          alt={currentPosto.nome}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md">
                          {renderBrandLogo(currentPosto.bandeira, "h-6 sm:h-7 w-auto")}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                          <span className="text-xs font-bold drop-shadow-xs">
                            Pista Homologada {currentPosto.bandeira} • {currentPosto.bairro}
                          </span>
                          <span className="text-[10px] font-black uppercase bg-emerald-600 px-2 py-0.5 rounded-md">
                            4K HD
                          </span>
                        </div>
                      </div>

                      {currentPosto.trocaOleo && (
                        <div className="sm:col-span-4 relative rounded-2xl overflow-hidden aspect-16/9 sm:aspect-auto sm:h-48 bg-slate-900 shadow-md group">
                          <img
                            src="./images/troca-de-oleo-1.jpg"
                            alt={`Troca de Óleo - ${currentPosto.nome}`}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
                          <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-1 rounded-lg shadow-xs">
                            🛢️ Troca de Óleo
                          </span>
                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <p className="text-xs font-extrabold leading-tight">
                              Centro de Lubrificação Ativo nesta Unidade
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Top Bar da Unidade Selecionada */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                            POSTO #{currentPosto.id < 10 ? `0${currentPosto.id}` : currentPosto.id}
                          </span>
                          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {currentPosto.horario}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                          {currentPosto.nome}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1 flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{currentPosto.endereco} — {currentPosto.bairro}, {currentPosto.cidade}</span>
                        </p>
                      </div>

                      {/* Logo Oficial da Bandeira Enquadrada e Aumentada */}
                      <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200/90 rounded-2xl shrink-0 flex items-center justify-center self-start sm:self-center shadow-xs">
                        {renderBrandLogo(currentPosto.bandeira, "h-9 sm:h-10 w-auto")}
                      </div>
                    </div>

                    {/* Slogan e Destaque da Unidade */}
                    <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                        {currentPosto.destaque}
                      </p>
                    </div>

                    {/* Combustíveis Disponíveis (Fiel à Tabela Oficial) */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Fuel className="w-4 h-4 text-emerald-600" />
                        <span>Combustíveis Disponíveis</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {/* Gasolina Comum */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800">
                          <span className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            Gasolina Comum
                          </span>
                          <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                            Disponível
                          </span>
                        </div>

                        {/* Gasolina Aditivada */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800">
                          <span className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                            Gasolina Aditivada ({currentPosto.gasolinaAditivada})
                          </span>
                          <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded ${
                            currentPosto.gasolinaAditivada === 'V-Power'
                              ? 'bg-red-100 text-red-800'
                              : currentPosto.gasolinaAditivada === 'Ipmax'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {currentPosto.gasolinaAditivada}
                          </span>
                        </div>

                        {/* Diesel S-10 */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800">
                          <span className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                            Diesel S-10
                          </span>
                          <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                            Disponível
                          </span>
                        </div>

                        {/* Diesel S-500 */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800">
                          <span className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                            Diesel S-500
                          </span>
                          <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                            Disponível
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Serviços Automotivos Conforme a Tabela */}
                    <div className="space-y-3 pt-1">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Wrench className="w-4 h-4 text-slate-700" />
                        <span>Serviços & Conveniência na Unidade</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {/* Troca de Óleo */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">🛢️</span>
                            <span className="text-xs font-bold text-slate-800">Troca de Óleo</span>
                          </div>
                          {currentPosto.trocaOleo ? (
                            <span className="flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                              <Check className="w-3 h-3 stroke-[3]" /> Possui
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                              <XIcon className="w-3 h-3" /> Não possui
                            </span>
                          )}
                        </div>

                        {/* Lavagem Terceirizada */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">🚗</span>
                            <span className="text-xs font-bold text-slate-800">Lavagem Terceirizada</span>
                          </div>
                          {currentPosto.lavagem ? (
                            <span className="flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                              <Check className="w-3 h-3 stroke-[3]" /> Possui
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                              <XIcon className="w-3 h-3" /> Não possui
                            </span>
                          )}
                        </div>

                        {/* Calibrador Digital */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">🛞</span>
                            <span className="text-xs font-bold text-slate-800">Calibrador Digital</span>
                          </div>
                          <span className="flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            <Check className="w-3 h-3 stroke-[3]" /> Possui
                          </span>
                        </div>

                        {/* Loja de Conveniência (Somente Gruta #13) */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">🏪</span>
                            <span className="text-xs font-bold text-slate-800">Conveniência</span>
                          </div>
                          {currentPosto.conveniencia ? (
                            <span className="flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                              <Check className="w-3 h-3 stroke-[3]" /> Exclusivo Gruta
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                              <XIcon className="w-3 h-3" /> Não possui
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Rodapé da Unidade com Botão Como Chegar */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>Central: <strong className="text-slate-800">{currentPosto.telefone}</strong></span>
                      </div>

                      <a
                        href={currentPosto.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/25 hover:-translate-y-0.5"
                      >
                        <Navigation className="w-4 h-4" />
                        <span>Como Chegar no Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                      </a>
                    </div>

                  </motion.div>
                </AnimatePresence>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
