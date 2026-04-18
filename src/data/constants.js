// ─── CONFIG ───────────────────────────────────────────────────────────────────
// Substitua pelo seu ID do Formspree: https://formspree.io → New Form → copie o ID
export const FORMSPREE_ID = "SEU_ID_AQUI";

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
export const NAV_LINKS = ["projetos", "processo", "sobre", "contato"];

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { name: "LinkedIn",  href: "https://linkedin.com/in/zurannii" },
  { name: "Instagram", href: "https://instagram.com/techbyzuran" },
  { name: "Behance",   href: "https://behance.net" },
  { name: "Dribbble",  href: "https://dribbble.com" },
];

// ─── HOME ─────────────────────────────────────────────────────────────────────
export const STATS = [
  { num: "01+", label: "Ano criando soluções digitais" },
  { num: "05+", label: "Projetos entregues entre UX, produto e interfaces digitais" },
  { num: "20+", label: "Experiências práticas em hackathons e projetos colaborativos" },
];

// ─── PROJETOS ─────────────────────────────────────────────────────────────────
export const PROJETOS = [
  {
    num: "01",
    year: "2026",
    tags: ["User Experience", "Innovation Strategy"],
    title: "L'Écho — L'Oréal Brandstorm",
    desc: "Desenvolvimento de um dispositivo olfativo ativado por voz que redefine a experiência de fragrâncias no ambiente doméstico. O L'Écho combina design minimalista com tecnologia de precisão para criar jornadas sensoriais personalizadas. O projeto engloba desde a conceção do produto físico até a interface de interação, focado no futuro do bem-estar digital.",
    impacto: [
      "Experiência Multi-sensorial Integrada",
      "Prototipagem de Interação por Voz",
      "Redução de esforço físico",
    ],
    // Substitua null pela URL do Behance quando disponível
    behance: null,
    imgLabel: "L'Écho — Imagem do projeto",
  },
  {
    num: "02",
    year: "2026",
    tags: ["UI/UX Design", "Front-end Development"],
    title: "Redesign Experience: Rock & Ribs",
    desc: "Redesign estratégico focado na digitalização da experiência gastronômica. O projeto prioriza uma interface intuitiva com alta hierarquia visual, facilitando a navegação entre o cardápio digital e o sistema de reservas.",
    impacto: [
      "Otimização do fluxo de pedidos digitais",
      "Interface adaptativa para múltiplos dispositivos",
      "Fortalecimento da identidade visual da marca no digital",
    ],
    behance: null,
    imgLabel: "Rock & Ribs — Imagem do projeto",
  },
  {
    num: "03",
    year: "2026",
    tags: ["Branding", "Product Design"],
    title: "Identidade Visual: Passabot",
    desc: "Criação de identidade visual e experiência de marca para o Passabot. O foco foi traduzir agilidade e confiança através de um design minimalista, utilizando cores de alto contraste e uma simbologia moderna que comunica a essência tecnológica do produto de forma amigável e funcional.",
    impacto: [
      "Consistência visual em todos os touchpoints",
      "Aumento do reconhecimento de marca no setor",
      "Sistema de design escalável para futuras features",
    ],
    behance: null,
    imgLabel: "Passabot — Imagem do projeto",
  },
];

// ─── PROCESSO ─────────────────────────────────────────────────────────────────
export const ETAPAS = [
  {
    num: "01",
    title: "Descoberta & Pesquisa",
    desc: "Imersão no contexto do negócio. Entrevistas com stakeholders, análise competitiva e mapeamento de jornadas. O objetivo é entender não apenas o que fazer, mas por quê.",
    entregas: ["Research Report", "User Personas", "Journey Maps", "Competitive Analysis"],
  },
  {
    num: "02",
    title: "Estratégia & Conceito",
    desc: "Definição de princípios de design, arquitetura de informação e hierarquias visuais. Aqui nasce a estrutura que sustentará todas as decisões posteriores.",
    entregas: ["Design Principles", "Information Architecture", "Wireframes", "User Flows"],
  },
  {
    num: "03",
    title: "Design Visual",
    desc: "Tradução da estratégia em interface. Sistema de cores, tipografia, componentes e estados. Cada elemento visual tem função definida e razão de existir.",
    entregas: ["Visual Design", "Design System", "Component Library", "Style Guide"],
  },
  {
    num: "04",
    title: "Prototipagem & Teste",
    desc: "Validação através de protótipos interativos. Testes de usabilidade revelam fricções invisíveis. Iteramos até que o fluxo seja intuitivo e eficiente.",
    entregas: ["Interactive Prototype", "Usability Tests", "Findings Report", "Iterations"],
  },
  {
    num: "05",
    title: "Implementação",
    desc: "Colaboração próxima com desenvolvimento. Handoff detalhado, especificações técnicas e acompanhamento durante build. Design não termina no Figma.",
    entregas: ["Dev Handoff", "Technical Specs", "Asset Export", "QA Support"],
  },
  {
    num: "06",
    title: "Análise & Evolução",
    desc: "Monitoramento de métricas pós-lançamento. O que funciona? O que pode melhorar? Design é processo contínuo, não entrega final.",
    entregas: ["Analytics Setup", "Performance Report", "Improvement Plan", "Roadmap"],
  },
];

export const PRINCIPIOS = [
  { title: "Clareza acima de tudo",    desc: "Interface complexa não impressiona. Interface clara resolve problemas." },
  { title: "Função define forma",       desc: "Estética emerge da funcionalidade, não o contrário." },
  { title: "Menos, mas melhor",         desc: "Cada elemento ganha espaço através de necessidade, não desejo." },
  { title: "Consistência sistemática",  desc: "Padrões claros criam familiaridade. Familiaridade gera confiança." },
];

export const TOOLS = [
  "Figma", "Adobe CC", "Protopie", "Metodologias Ágeis",
  "React", "TypeScript", "CSS", "Angular",
  "Design Thinking", "UX Research", "VSCode", "Notion",
];

// ─── SOBRE ────────────────────────────────────────────────────────────────────
export const ESPECIALIDADES = [
  "Product Design", "UX Strategy", "Design Systems", "Interface Design",
  "Prototyping", "User Research", "Visual Design", "Brand Experience",
  "Design Thinking", "FigJam & Figma", "AI applied to Design",
];

export const VALORES = [
  { title: "Obsessão pelo detalhe",    desc: "Cada pixel conta. Cada interação importa. Excelência está na soma de refinamentos imperceptíveis." },
  { title: "Pensamento estratégico",   desc: "Design não é arte aplicada. É negócio materializado. Cada decisão visual serve um objetivo mensurável." },
  { title: "Aprendizado contínuo",     desc: "Ferramentas evoluem. Padrões mudam. Curiosidade permanente mantém o trabalho relevante e contemporâneo." },
  { title: "Entrega com propósito",    desc: "Resultado final reflete compromisso com o processo. Não há atalhos para excelência sustentável." },
];

export const TRAJETORIA = [
  { year: "2024", role: "Senior Product Designer", company: "Tech Unicorn",    desc: "Liderança de design em produtos B2B complexos. Foco em escalabilidade e sistemas." },
  { year: "2022", role: "Lead UX/UI Designer",     company: "Digital Agency",  desc: "Gestão de equipe multidisciplinar. Projetos para marcas premium e startups." },
  { year: "2020", role: "Product Designer",         company: "FinTech Startup", desc: "Construção de produto 0 a 1. Pesquisa, prototipagem e testes com usuários." },
  { year: "2019", role: "UI Designer",              company: "Software House",  desc: "Primeiros passos em design de produto. Aprendizado através de volume e variedade." },
];

// ─── CONTATO ──────────────────────────────────────────────────────────────────
export const CANAIS = [
  { name: "Email",     value: "ma.robertanascimento@gmail.com", href: "mailto:ma.robertanascimento@gmail.com", tag: "Resposta em até 24h" },
  { name: "LinkedIn",  value: "/in/zurannii",                   href: "https://linkedin.com/in/zurannii",      tag: "Conexão profissional" },
  { name: "Instagram", value: "@techbyzuran",                   href: "https://instagram.com/techbyzuran",     tag: "Bastidores do processo" },
];

export const MODALIDADES = [
  "Freelance de longa duração",
  "Consultoria em Design Systems",
  "Product Design para startups",
  "Mentoria e workshops",
];

export const TIPOS_PROJETO = ["UI/UX Design", "Design System", "Product Design", "Branding", "Mentoria"];

export const ORCAMENTOS = [
  "Até R$ 5.000",
  "R$ 5.000 – R$ 15.000",
  "R$ 15.000 – R$ 30.000",
  "Acima de R$ 30.000",
];
