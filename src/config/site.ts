export interface SiteConfig {
  brand: {
    name: string;
    logo: string;
    tagline: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accentLight: string;
    bg: string;
    text: string;
    gold: string;
  };
  font: string;
  ghlCalendarId: string;
  calendarBaseUrl: string;
  whatsapp: string;
  seo: {
    title: string;
    description: string;
    ogImage: string;
    canonicalUrl: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    image: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  services: Array<{
    title: string;
    icon: string;
    description: string;
  }>;
  process: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    stars: number;
  }>;
  cta: {
    headline: string;
    subtext: string;
    button: string;
  };
  footer: {
    tagline: string;
    navLinks: string[];
    copyright: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: 'Unifisio',
    logo: '/logo.jpg',
    tagline: 'Tu salud y movimiento son nuestra prioridad',
  },
  colors: {
    primary: '#0B5E8A',
    secondary: '#00BFD8',
    accentLight: '#E8F4FB',
    bg: '#FFFFFF',
    text: '#111111',
    gold: '#F4A100',
  },
  font: 'Inter',
  ghlCalendarId: 'N2oMWoHSIvzBX4r9rvfY',
  calendarBaseUrl: 'https://www.invenioagency.com/widget/booking/',
  whatsapp: '+549XXXXXXXXXX',
  seo: {
    title: 'Unifisio | Kinesiología y Rehabilitación',
    description:
      'Tratamientos kinesiológicos personalizados. Primera consulta sin cargo. Agendá tu turno online.',
    ogImage: '/og-image.jpg',
    canonicalUrl: 'https://unifisio.invenioagency.com',
  },
  hero: {
    headline: 'Recuperá tu movimiento, recuperá tu vida',
    subheadline:
      'Tratamientos kinesiológicos personalizados para que volvás a moverte sin dolor, con la calidez y el seguimiento que merecés.',
    image: '/hero.jpg',
    ctaPrimary: 'Agendá tu turno gratis',
    ctaSecondary: 'Ver nuestros servicios',
    trust: ['✓ Profesionales certificados', '✓ Turnos en 24 hs', '✓ Primera consulta sin cargo'],
  },
  stats: [
    { value: '+500', label: 'Pacientes atendidos' },
    { value: '10+', label: 'Años de experiencia' },
    { value: '98%', label: 'Satisfacción de pacientes' },
    { value: '20+', label: 'Tratamientos disponibles' },
  ],
  services: [
    {
      title: 'Kinesiología Deportiva',
      icon: '🏃',
      description:
        'Rehabilitación y prevención de lesiones para deportistas de todos los niveles y disciplinas.',
    },
    {
      title: 'Rehabilitación Post-Quirúrgica',
      icon: '🔧',
      description:
        'Acompañamos tu recuperación después de una cirugía con protocolos actualizados y seguimiento personalizado.',
    },
    {
      title: 'Tratamiento del Dolor',
      icon: '⚡',
      description:
        'Abordaje integral del dolor agudo y crónico de columna, cuello, hombros y articulaciones.',
    },
    {
      title: 'Electroterapia',
      icon: '🔬',
      description:
        'Técnicas de neuroestimulación y ultrasonido terapéutico para acelerar la cicatrización y reducir el dolor.',
    },
    {
      title: 'Pilates Terapéutico',
      icon: '🧘',
      description:
        'Fortalecimiento del core, corrección postural y mejora del equilibrio con ejercicio terapéutico supervisado.',
    },
    {
      title: 'Atención Domiciliaria',
      icon: '🏠',
      description:
        'Llevamos el tratamiento hasta tu hogar para mayor comodidad, continuidad y adherencia al tratamiento.',
    },
  ],
  process: [
    {
      number: '01',
      title: 'Evaluación inicial',
      description:
        'Analizamos tu condición, historial clínico y objetivos para diseñar el plan de tratamiento ideal para vos.',
    },
    {
      number: '02',
      title: 'Plan personalizado',
      description:
        'Aplicamos el tratamiento más adecuado con seguimiento continuo de tu evolución y ajustes cuando sea necesario.',
    },
    {
      number: '03',
      title: 'Alta y mantenimiento',
      description:
        'Te acompañamos hasta la recuperación total y te damos las herramientas para mantenerte sano y activo.',
    },
  ],
  testimonials: [
    {
      quote:
        'Llegué con dolor crónico de columna y después de 8 sesiones pude retomar el deporte. Excelente atención, muy profesionales y siempre disponibles para consultas.',
      author: 'María G.',
      role: 'Paciente — Kinesiología deportiva',
      stars: 5,
    },
    {
      quote:
        'Me operaron la rodilla y Unifisio me ayudó a recuperarme mucho más rápido de lo esperado. El seguimiento fue constante y los resultados, increíbles.',
      author: 'Carlos M.',
      role: 'Paciente — Rehabilitación post-quirúrgica',
      stars: 5,
    },
    {
      quote:
        'El servicio a domicilio fue ideal para mí. Muy puntual, profesional y efectivo. Ya no tengo los dolores que me impedían trabajar. Los recomiendo al 100%.',
      author: 'Laura S.',
      role: 'Paciente — Atención domiciliaria',
      stars: 5,
    },
  ],
  cta: {
    headline: '¿Seguís viviendo con dolor?',
    subtext: 'La primera consulta es sin cargo. Agendá hoy y empezá tu recuperación.',
    button: 'Reservar mi turno',
  },
  footer: {
    tagline: 'Tu salud y movimiento son nuestra prioridad',
    navLinks: ['Servicios', 'Proceso', 'Testimonios', 'Agendá tu turno'],
    copyright: '© 2025 Unifisio. Todos los derechos reservados.',
  },
};
