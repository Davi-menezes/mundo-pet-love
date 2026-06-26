export const BUSINESS = {
  name: 'Mundo Pet Love',
  tagline: 'Porque eles\nmerecem o melhor.',
  sub: 'Pet shop, banho & tosa, veterinário e farmácia — tudo em um só lugar, com cuidado de verdade, em Porto Velho.',
  address: 'R. Pau Ferro, 1528–1544 · Porto Velho, RO',
  phone: '(XX) XXXX-XXXX',
  whatsapp: '55XXXXXXXXXXX',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mundo%20Pet%20Love%20-%20Pet%20Shop%2C%20Banho%20e%20Tosa&query_place_id=ChIJ_UM5I3pcMpIRLaBZq1ZXhpE',
  waMsg: 'Olá! Gostaria de agendar um serviço no Mundo Pet Love.',
}

export const STATS = [
  { value: '8+',  label: 'Anos cuidando' },
  { value: '4k+', label: 'Pets atendidos' },
  { value: '4',   label: 'Especialidades' },
  { value: '4.9', label: 'Avaliação média' },
]

// SVG icon paths for services (no emoji)
export const SERVICES = [
  {
    icon: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,.1)',
    title: 'Pet Shop',
    desc: 'Rações premium, acessórios, higiene e tudo que seu pet precisa, num só lugar.',
    items: ['Rações super-premium', 'Brinquedos & acessórios', 'Higiene & beleza'],
  },
  {
    icon: '<path d="M5 22V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18"/><path d="M5 22H3"/><path d="M19 22h2"/><path d="M9 6h1"/><path d="M14 6h1"/><path d="M9 10h6"/><path d="M9 14h6"/>',
    color: '#fb923c',
    bg: 'rgba(251,146,60,.1)',
    title: 'Banho & Tosa',
    desc: 'Grooming profissional com produtos de qualidade. Seu pet sai impecável.',
    items: ['Tosa higiênica e artística', 'Banho com shampoo especial', 'Hidratação & perfume'],
  },
  {
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    color: '#34d399',
    bg: 'rgba(52,211,153,.08)',
    title: 'Veterinário',
    desc: 'Consultas, vacinas e diagnóstico com veterinários experientes e dedicados.',
    items: ['Consultas clínicas', 'Vacinas em dia', 'Exames & diagnóstico'],
  },
  {
    icon: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    color: '#fb7185',
    bg: 'rgba(251,113,133,.08)',
    title: 'Farmácia Vet.',
    desc: 'Medicamentos originais, suplementos e produtos para manter seu pet saudável.',
    items: ['Medicamentos originais', 'Suplementos & vitaminas', 'Antipulgas & vermífugos'],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Ana Paula R.',
    pet: 'Golden Retriever',
    avatar: 'A',
    color: '#f59e0b',
    text: 'Minha Mel adora vir aqui! A equipe trata ela com muito carinho. Com certeza o melhor pet shop de Porto Velho.',
    stars: 5,
  },
  {
    name: 'Carlos Mendes',
    pet: 'Gato Siamês',
    avatar: 'C',
    color: '#34d399',
    text: 'Veterinário atencioso e muito competente. Meu Simba fica calmo só de entrar lá. Super recomendo.',
    stars: 5,
  },
  {
    name: 'Fernanda Silva',
    pet: 'Yorkshire',
    avatar: 'F',
    color: '#fb923c',
    text: 'A tosa ficou perfeita! Minha Lola saiu linda demais. Ambiente limpo, equipe carinhosa. Nota 10.',
    stars: 5,
  },
]
