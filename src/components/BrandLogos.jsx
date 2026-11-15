import React from 'react';

/**
 * Logo Oficial BR Petrobras idêntica à imagem fornecida:
 * Caixa verde com cantos arredondados contendo "BR" estilizado (B branco, R amarelo),
 * seguido do nome "PETROBRAS" em verde escuro corporativo.
 */
export const PetrobrasLogo = ({ className = "h-9 w-auto" }) => (
  <svg viewBox="0 0 220 52" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Caixa Verde com BR */}
    <rect x="2" y="3" width="56" height="46" rx="6" fill="#008542" />
    {/* Letra B Branca */}
    <path
      d="M14 13H24.5C28 13 30.5 14.8 30.5 18C30.5 20.2 29.2 21.8 27.2 22.4C29.8 23.2 31.5 25 31.5 28C31.5 31.8 28.5 34 24.5 34H14V13ZM19.2 21.5H23.5C24.8 21.5 25.8 20.8 25.8 19.5C25.8 18.2 24.8 17.5 23.5 17.5H19.2V21.5ZM19.2 29.5H24C25.5 29.5 26.5 28.8 26.5 27.2C26.5 25.8 25.5 25.2 24 25.2H19.2V29.5Z"
      fill="#FFFFFF"
    />
    {/* Letra R Amarela com corte característico */}
    <path
      d="M33 13H42.5C46.5 13 49.5 15.2 49.5 19C49.5 21.5 48.2 23.5 46 24.2L50.5 34H44.8L41 25.5H38.2V34H33V13ZM38.2 21.2H41.8C43.2 21.2 44.2 20.5 44.2 19.2C44.2 17.8 43.2 17.2 41.8 17.2H38.2V21.2Z"
      fill="#FFCC00"
    />
    {/* Texto PETROBRAS */}
    <text
      x="68"
      y="34"
      fontFamily="'Inter', 'Arial Black', system-ui, sans-serif"
      fontWeight="900"
      fontSize="23"
      fill="#008542"
      letterSpacing="0.8"
    >
      PETROBRAS
    </text>
  </svg>
);

/**
 * Logo Oficial Shell idêntica à imagem fornecida:
 * Concha amarela e vermelha clássica e tipografia "Shell" em vermelho forte.
 */
export const ShellLogo = ({ className = "h-9 w-auto" }) => (
  <svg viewBox="0 0 180 52" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Símbolo Concha Shell */}
    <g transform="translate(2, 4)">
      <path
        d="M22 2C13.5 2 4 12.5 4 23.5C4 34.5 12 41 22 41C32 41 40 34.5 40 23.5C40 12.5 30.5 2 22 2Z"
        fill="#FFD200"
        stroke="#DD1D20"
        strokeWidth="2.8"
      />
      <path d="M22 2V41" stroke="#DD1D20" strokeWidth="2.4" />
      <path d="M13 7.5C15 15 17.5 30 18.5 41" stroke="#DD1D20" strokeWidth="2.1" />
      <path d="M31 7.5C29 15 26.5 30 25.5 41" stroke="#DD1D20" strokeWidth="2.1" />
      <path d="M6.5 17.5C11 24 14 34.5 16.5 40" stroke="#DD1D20" strokeWidth="1.8" />
      <path d="M37.5 17.5C33 24 30 34.5 27.5 40" stroke="#DD1D20" strokeWidth="1.8" />
    </g>
    {/* Tipografia Shell */}
    <text
      x="54"
      y="35"
      fontFamily="'Inter', system-ui, sans-serif"
      fontWeight="900"
      fontSize="26"
      fill="#DD1D20"
      letterSpacing="0.5"
    >
      Shell
    </text>
  </svg>
);

/**
 * Logo Oficial Ipiranga Original (idêntica ao material oficial da Rede Ypê):
 * Ícone quadrado amarelo (#FFD100) à esquerda com a faixa curva azul (#003893) e o "i" amarelo,
 * seguido da tipografia "Ipiranga" em azul escuro itálico corporativo.
 */
export const IpirangaLogo = ({ className = "h-9 w-auto" }) => (
  <svg viewBox="0 0 205 52" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Emblema Quadrado Amarelo Original Ipiranga */}
    <rect x="2" y="3" width="48" height="46" rx="9" fill="#FFD100" />
    {/* Escudo Curvo Azul Oficial dentro do quadrado amarelo */}
    <path
      d="M11 8C15 8 36 8 40 8C42 8 43 9.5 42.5 11.5L36.5 44H10C8 44 7 42.5 7.5 40.5L13.5 10.5C13.8 9 11 8 11 8Z"
      fill="#003893"
    />
    {/* Ponto amarelo do 'i' */}
    <circle cx="27.5" cy="15.5" r="4" fill="#FFD100" />
    {/* Haste curva amarela do 'i' */}
    <path
      d="M22.5 22.5H30.5L26.5 40.5H18.5L22.5 22.5Z"
      fill="#FFD100"
    />
    {/* Detalhe laranja/vermelho inferior da curva Ipiranga */}
    <path
      d="M8 42.5H37L36.2 45H7.5L8 42.5Z"
      fill="#F58220"
    />
    {/* Tipografia "Ipiranga" em Azul Escuro Itálico Original */}
    <text
      x="60"
      y="35"
      fontFamily="'Inter', 'Arial Black', system-ui, sans-serif"
      fontWeight="900"
      fontStyle="italic"
      fontSize="26"
      fill="#003893"
      letterSpacing="-0.3"
    >
      Ipiranga
    </text>
  </svg>
);

/**
 * Logo Oficial da Rede Ypê na paleta institucional (Azul Marinho Profundo + Amarelo Ipê Ouro + Clean White)
 */
export const RedeYpeLogo = ({ className = "h-10 w-auto", dark = false }) => (
  <div className="flex items-center gap-3">
    <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-[#0B2545] border-2 border-[#FFD100] shadow-md shadow-blue-950/20 text-[#FFD100] font-black text-2xl tracking-tighter">
      <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Copa de Ipê Amarelo estilizada + Gota/Chama de Energia */}
        <circle cx="18" cy="11" r="4.5" fill="#FFD100" />
        <circle cx="11.5" cy="14.5" r="4" fill="#FFD100" opacity="0.92" />
        <circle cx="24.5" cy="14.5" r="4" fill="#FFD100" opacity="0.92" />
        <path d="M16 17H20L21.5 29H14.5L16 17Z" fill="#FFFFFF" />
        <path d="M11 29H25" stroke="#FFD100" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
    <div className="flex flex-col">
      <div className="flex items-center gap-1.5">
        <span className={`text-2xl font-black tracking-tight leading-none ${dark ? 'text-white' : 'text-[#0B2545]'}`}>
          REDE <span className={dark ? 'text-[#FFD100]' : 'text-[#D99B00]'}>YPÊ</span>
        </span>
      </div>
      <span className={`text-[10px] uppercase font-extrabold tracking-widest mt-0.5 ${dark ? 'text-blue-200/80' : 'text-slate-500'}`}>
        Postos de Combustíveis
      </span>
    </div>
  </div>
);

/**
 * Moldura / Enquadramento elegante das 3 Bandeiras para o topo da aba principal
 */
export const TopBandeirasEnquadradas = ({ className = "" }) => (
  <div className={`inline-flex items-center gap-3 sm:gap-4 p-2 sm:p-2.5 px-3 sm:px-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm hover:shadow-md transition-all ${className}`}>
    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-400 border-r border-slate-200 pr-2.5 hidden sm:inline">
      Bandeiras Homologadas
    </span>
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="hover:scale-105 transition-transform">
        <PetrobrasLogo className="h-7 sm:h-8 w-auto" />
      </div>
      <div className="w-px h-6 bg-slate-200" />
      <div className="hover:scale-105 transition-transform">
        <ShellLogo className="h-7 sm:h-8 w-auto" />
      </div>
      <div className="w-px h-6 bg-slate-200" />
      <div className="hover:scale-105 transition-transform">
        <IpirangaLogo className="h-7 sm:h-8 w-auto" />
      </div>
    </div>
  </div>
);
