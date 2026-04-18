// ─── CONFIG ───────────────────────────────────────────────────────────────────
export const FORMSPREE_ID = "xvzdawrj";

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
export const NAV_LINKS = ["projetos", "processo", "sobre", "contato"];

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { name: "LinkedIn",  href: "https://linkedin.com/in/zurannii" },
  { name: "Instagram", href: "https://instagram.com/techbyzuran" },
  { name: "Behance",   href: "https://www.behance.net/robertanascime8" },
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
    behance: "https://www.behance.net/gallery/247724309/Caso-de-estudo-LEcho",
    image: "/lecho.png",
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
    image: "/rock.png",
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
    behance: "https://www.behance.net/gallery/244811253/PassaBot-ID-visual",
    /* Lembre-se de colocar a imagem do Passabot na pasta public com esse nome (ou altere aqui para o nome real do arquivo) */
    image: "/passabot.png", 
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
  "Figma", "Protopie", "Metodologias Ágeis",
  "React", "TypeScript", "JavaScript", "HTML", "CSS", "Angular",
  "Node.js", "Python", "Java",
  "Design Thinking", "UX Research", "UX Design", "UI Design",
  "Wireframing", "Prototyping", "User Flows", "Usability Testing",
  "Design Systems", "Responsive Design", "Mobile First",
  "Scrum", "Kanban", "Product Thinking",
  "VSCode", "Git", "GitHub", "Notion",
  "Acessibilidade", "Interação Humano-Computador",
  "AI aplicada ao Design", "Prompt Engineering",
  "Generative AI", "Design Assistido por IA",
  "Vibe Coding", "No-code",
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
  {
    year: "2026",
    role: "UX/UI Designer & Pesquisadora",
    company: "Campus Mobile / PIBIC",
    desc: "Participação na Campus Mobile em São Paulo, com visitas técnicas à Claro e USP. Atuação em iniciação científica (PIBIC) e desenvolvimento de pré-projeto de mestrado focado em design e tecnologia."
  },
  {
    year: "2025",
    role: "Mentora de UI/UX & Designer",
    company: "Hacker Cidadão / TechWoman / ByteGirls",
    desc: "Mentoria em UX/UI em eventos de inovação da Prefeitura do Recife e TechWoman. Atuação como freelancer e staff designer da comunidade ByteGirls, com participação em hackathons e conquistas em pódios."
  },
  {
    year: "2024",
    role: "UX/UI Designer",
    company: "Hackathons & Projetos",
    desc: "Transição para design e tecnologia, participando ativamente de hackathons, com premiações e desenvolvimento de soluções digitais focadas em experiência do usuário."
  },
  {
    year: "2023",
    role: "Estudante de Design Gráfico",
    company: "Formação Inicial",
    desc: "Início da trajetória no design, com foco em fundamentos visuais, criatividade e construção de base para atuação em produtos digitais."
  }
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

export const TIPOS_PROJETO = ["UI/UX Design", "Design Research", "Product Design", "Branding", "Mentoria, Workshops", "Projetos completos (do conceito à implementação)"];

export const ORCAMENTOS = [
  "Até R$ 3.000",
  "R$ 3.000 – R$ 5.000",
  "R$ 5.000 – R$ 10.000",
  "Acima de R$ 10.000",
];
