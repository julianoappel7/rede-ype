// Dados oficiais e auditados dos postos da Rede Ypê extraídos fielmente da planilha oficial
// Tabela: "RELAÇÃO DOS POSTOS, BANDEIRA COMBUSTÍVEIS E SERVIÇOS"
export const UNIDADES = [
  {
    id: 1,
    nome: "Auto Posto Ipê S.J.Campos LTDA",
    bandeira: "Shell",
    bandeiraCor: "text-amber-600 bg-amber-50 border-amber-200",
    badgeCor: "bg-red-500",
    endereco: "Avenida Guadalupe, 659",
    bairro: "Jardim América",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3931-1001",
    // Serviços e Combustíveis conforme tabela oficial:
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "V-Power",
    dieselS10: true,
    dieselS500: true,
    lavagem: true, // Terceirizada
    trocaOleo: true,
    calibrador: true,
    destaque: "Shell V-Power, Diesel S-10 e S-500, Troca de Óleo e Lavagem Terceirizada.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Guadalupe+659+Jardim+America+Sao+Jose+dos+Campos"
  },
  {
    id: 2,
    nome: "Cunha's Auto Posto LTDA",
    bandeira: "Ipiranga",
    bandeiraCor: "text-blue-700 bg-blue-50 border-blue-200",
    badgeCor: "bg-blue-600",
    endereco: "Avenida Guadalupe, 660",
    bairro: "Jardim América",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 24h",
    telefone: "(12) 3931-2002",
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "Ipmax",
    dieselS10: true,
    dieselS500: true,
    lavagem: false,
    trocaOleo: true,
    calibrador: true,
    destaque: "Atendimento 24 horas de segunda a sábado com Gasolina Ipmax e Troca de Óleo.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Guadalupe+660+Jardim+America+Sao+Jose+dos+Campos"
  },
  {
    id: 3,
    nome: "Auto Posto Bosque dos Ipês S. J. Campos LTDA",
    bandeira: "Petrobras",
    bandeiraCor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    badgeCor: "bg-emerald-600",
    endereco: "Rua Gisele Martins, 401",
    bairro: "Jardim Morumbi",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3937-3003",
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "Grid",
    dieselS10: true,
    dieselS500: true,
    lavagem: false,
    trocaOleo: true,
    calibrador: true,
    destaque: "Bandeira Petrobras com Gasolina Grid, Diesel S-10 / S-500 e Troca de Óleo.",
    mapsUrl: "https://maps.google.com/?q=Rua+Gisele+Martins+401+Jardim+Morumbi+Sao+Jose+dos+Campos"
  },
  {
    id: 4,
    nome: "Posto de Serviços Super Jet Ski LTDA",
    bandeira: "Petrobras",
    bandeiraCor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    badgeCor: "bg-emerald-600",
    endereco: "Avenida Pedro Friggi, 1001",
    bairro: "Jardim Motorama",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3912-4004",
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "Grid",
    dieselS10: true,
    dieselS500: true,
    lavagem: true, // Terceirizada
    trocaOleo: false,
    calibrador: true,
    destaque: "Petrobras Grid no Jardim Motorama com Lavagem Terceirizada e Calibrador.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Pedro+Friggi+1001+Jardim+Motorama+Sao+Jose+dos+Campos"
  },
  {
    id: 5,
    nome: "HP Comércio de Combustíveis LTDA",
    bandeira: "Petrobras",
    bandeiraCor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    badgeCor: "bg-emerald-600",
    endereco: "Avenida Tivoli, 71",
    bairro: "Vila Betânia",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3922-5005",
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "Grid",
    dieselS10: true,
    dieselS500: true,
    lavagem: true, // Terceirizada
    trocaOleo: false,
    calibrador: true,
    destaque: "Localização estratégica na Vila Betânia com Lavagem Terceirizada e Gasolina Grid.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Tivoli+71+Vila+Betania+Sao+Jose+dos+Campos"
  },
  {
    id: 6,
    nome: "Auto Posto Vila Maria LTDA",
    bandeira: "Shell",
    bandeiraCor: "text-amber-600 bg-amber-50 border-amber-200",
    badgeCor: "bg-red-500",
    endereco: "Rua Vinte e Um de Abril, 412",
    bairro: "Vila Maria",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3921-6006",
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "V-Power",
    dieselS10: true,
    dieselS500: true,
    lavagem: true, // Terceirizada
    trocaOleo: true,
    calibrador: true,
    destaque: "Bandeira Shell com V-Power, Troca de Óleo, Lavagem Terceirizada e Calibrador.",
    mapsUrl: "https://maps.google.com/?q=Rua+Vinte+e+Um+de+Abril+412+Vila+Maria+Sao+Jose+dos+Campos"
  },
  {
    id: 7,
    nome: "Auto Posto Vila Tesouro LTDA",
    bandeira: "Shell",
    bandeiraCor: "text-amber-600 bg-amber-50 border-amber-200",
    badgeCor: "bg-red-500",
    endereco: "Avenida Cidade Jardim, 7469",
    bairro: "Vila Tesouro",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3907-7007",
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "V-Power",
    dieselS10: true,
    dieselS500: true,
    lavagem: true, // Terceirizada
    trocaOleo: false,
    calibrador: true,
    destaque: "Shell V-Power e Diesels na Vila Tesouro com Lavagem Terceirizada.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Cidade+Jardim+7469+Vila+Tesouro+Sao+Jose+dos+Campos"
  },
  {
    id: 8,
    nome: "Auto Posto Santa Inês LTDA",
    bandeira: "Petrobras",
    bandeiraCor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    badgeCor: "bg-emerald-600",
    endereco: "Avenida Andrômeda, 1222",
    bairro: "Jardim Satélite",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3931-8008",
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "Grid",
    dieselS10: true,
    dieselS500: true,
    lavagem: false,
    trocaOleo: true,
    calibrador: true,
    destaque: "Na principal avenida do Jardim Satélite: Petrobras Grid e Troca de Óleo.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Andromeda+1222+Jardim+Satelite+Sao+Jose+dos+Campos"
  },
  {
    id: 9,
    nome: "Auto Posto Vila Rossi LTDA",
    bandeira: "Petrobras",
    bandeiraCor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    badgeCor: "bg-emerald-600",
    endereco: "Avenida Cruzeiro do Sul, 3003",
    bairro: "Vila Rossi",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3921-9009",
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "Grid",
    dieselS10: true,
    dieselS500: true,
    lavagem: true, // Terceirizada
    trocaOleo: false,
    calibrador: true,
    destaque: "Petrobras Grid na Vila Rossi com Lavagem Terceirizada e Calibrador.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Cruzeiro+do+Sul+3003+Vila+Rossi+Sao+Jose+dos+Campos"
  },
  {
    id: 10,
    nome: "Auto Posto Avenida Brasil S. J. Campos LTDA",
    bandeira: "Petrobras",
    bandeiraCor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    badgeCor: "bg-emerald-600",
    endereco: "Avenida Brasil, 1265",
    bairro: "Vila Paiva",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3922-1010",
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "Grid",
    dieselS10: true,
    dieselS500: true,
    lavagem: true, // Terceirizada
    trocaOleo: true,
    calibrador: true,
    destaque: "Combustíveis Petrobras Grid, Troca de Óleo e Lavagem Terceirizada na Vila Paiva.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Brasil+1265+Vila+Paiva+Sao+Jose+dos+Campos"
  },
  {
    id: 11,
    nome: "Auto Posto Cajuru LTDA",
    bandeira: "Petrobras",
    bandeiraCor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    badgeCor: "bg-emerald-600",
    endereco: "Avenida Engenheiro Juarez de Siqueira Brito Wanderley, 1981",
    bairro: "Cajuru",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3905-1111",
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "Grid",
    dieselS10: true,
    dieselS500: true,
    lavagem: false,
    trocaOleo: true,
    calibrador: true,
    destaque: "Unidade Cajuru com Gasolina Grid, Diesel S-10, S-500 e Centro de Troca de Óleo.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Engenheiro+Juarez+de+Siqueira+Brito+Wanderley+1981+Cajuru+Sao+Jose+dos+Campos"
  },
  {
    id: 12,
    nome: "Auto Posto Putim LTDA",
    bandeira: "Petrobras",
    bandeiraCor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    badgeCor: "bg-emerald-600",
    endereco: "Estrada Municipal do Putim, 1",
    bairro: "Putim",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3944-1212",
    conveniencia: false,
    gasolinaComum: true,
    gasolinaAditivada: "Grid",
    dieselS10: true,
    dieselS500: true,
    lavagem: false,
    trocaOleo: false,
    calibrador: true,
    destaque: "Abastecimento ágil no Putim com Gasolina Comum e Grid, Diesel S-10 e Calibrador.",
    mapsUrl: "https://maps.google.com/?q=Estrada+Municipal+do+Putim+1+Putim+Sao+Jose+dos+Campos"
  },
  {
    id: 13,
    nome: "Auto Posto da Gruta de São José dos Campos LTDA",
    bandeira: "Ipiranga",
    bandeiraCor: "text-blue-700 bg-blue-50 border-blue-200",
    badgeCor: "bg-blue-600",
    endereco: "Avenida Deputado Benedito Matarazzo, 4229",
    bairro: "Jardim das Indústrias",
    cidade: "São José dos Campos - SP",
    horario: "Seg a Sáb 06h00 às 22h00 | Dom 06h00 às 19h00",
    telefone: "(12) 3933-1313",
    conveniencia: true, // Única unidade com loja de conveniência
    gasolinaComum: true,
    gasolinaAditivada: "Ipmax",
    dieselS10: true,
    dieselS500: true,
    lavagem: false,
    trocaOleo: true,
    calibrador: true,
    destaque: "Posto modelo da Gruta: Loja de Conveniência exclusiva, Gasolina Ipmax e Troca de Óleo.",
    mapsUrl: "https://maps.google.com/?q=Avenida+Deputado+Benedito+Matarazzo+4229+Jardim+das+Industrias+Sao+Jose+dos+Campos"
  }
];

export const BANDEIRAS_INFO = [
  {
    nome: "Petrobras",
    slogan: "Energia que move o Brasil",
    logoColor: "#008542",
    accentColor: "border-emerald-500/30 text-emerald-600",
    tagline: "Tecnologia de Ponta & Rendimento Máximo",
    postosCount: 8,
    destaques: [
      {
        produto: "Gasolina Petrobras Grid",
        descricao: "Aditivação especial de última geração que reduz o atrito mecânico e mantém bicos injetores e válvulas 100% limpos."
      },
      {
        produto: "Diesel Petrobras S-10 & S-500",
        descricao: "Combustíveis diesel de alta fluidez e máxima proteção para utilitários, vans e frotas de carga."
      },
      {
        produto: "Troca de Óleo Especializada",
        descricao: "Centros automotivos equipados para lubrificação de precisão com óleos homologados pelas montadoras."
      }
    ],
    servicoChave: "8 Unidades em São José dos Campos operando com padrão Petrobras Grid."
  },
  {
    nome: "Shell",
    slogan: "Vá bem, vá de Shell",
    logoColor: "#DD1D20",
    accentColor: "border-amber-500/30 text-amber-600",
    tagline: "Inovação V-Power & Eficiência de Fórmulas Globais",
    postosCount: 3,
    destaques: [
      {
        produto: "Shell V-Power",
        descricao: "Tecnologia Dynaflex desenvolvida em parceria com a Scuderia Ferrari para restaurar o desempenho do motor."
      },
      {
        produto: "Diesel Shell Evolux S-10 & S-500",
        descricao: "Maior economia por quilômetro rodado e redução de emissões no escapamento."
      },
      {
        produto: "Lavagem Terceirizada & Calibragem",
        descricao: "Infraestrutura com lavagem especializada de veículos e calibradores digitais gratuitos."
      }
    ],
    servicoChave: "3 Unidades estratégicas em SJC (Guadalupe, Vila Maria e Vila Tesouro)."
  },
  {
    nome: "Ipiranga",
    slogan: "Completa pra mim",
    logoColor: "#004494",
    accentColor: "border-blue-500/30 text-blue-600",
    tagline: "Ipmax, Rendimento & Ponto da Gruta",
    postosCount: 2,
    destaques: [
      {
        produto: "Linha Ipmax",
        descricao: "Fórmula aditivada exclusiva que entrega mais rendimento e economia real por litro no tanque."
      },
      {
        produto: "Unidade Gruta com Conveniência",
        descricao: "Espaço completo de conveniência exclusivo na Av. Deputado Benedito Matarazzo para sua parada."
      },
      {
        produto: "Cunha's Auto Posto 24 Horas",
        descricao: "Atendimento ininterrupto 24h na Av. Guadalupe com troca de óleo e calibrador."
      }
    ],
    servicoChave: "2 Unidades chave: Cunha's (24h) e Auto Posto da Gruta."
  }
];
