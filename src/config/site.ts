export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    logo: string;
    logoInverted: string;
  };
  whatsapp: {
    number: string;
    defaultMessage: string;
  };
  ghlCalendarId: string;
  calendarBaseUrl: string;
  seo: {
    title: string;
    description: string;
    ogImage: string;
    canonicalUrl: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    trust: string;
    ctaPrimary: string;
  };
  trustIndicators: {
    logos: string[];
    metrics: string;
    objections: string[];
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      icon: string;
      description: string;
    }>;
    cta: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  infrastructure: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
  educational: {
    title: string;
    subtitle: string;
    youtubeLink: string;
  };
  team: {
    title: string;
    members: Array<{
      name: string;
      role: string;
      description: string;
      image: string;
    }>;
  };
  testimonials: {
    title: string;
    items: Array<{
      quote: string;
      author: string;
      date: string;
      stars: number;
    }>;
  };
  loyalty: {
    title: string;
    benefits: Array<{
      title: string;
      description: string;
    }>;
  };
  faq: {
    title: string;
    questions: Array<{
      q: string;
      a: string;
    }>;
  };
  contact: {
    title: string;
    location: string;
    mapUrl: string;
    videoUrl: string;
    reasons: string[];
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
    tagline: 'Fisioterapia y rehabilitación en Bogotá. Movimiento medido. Recuperación con criterio.',
    logo: '/images/logo.svg',
    logoInverted: '/images/logo-inverted.svg',
  },
  whatsapp: {
    number: '+573000000000',
    defaultMessage: 'Hola Unifisio, me gustaría agendar una cita.',
  },
  ghlCalendarId: 'N2oMWoHSIvzBX4r9rvfY',
  calendarBaseUrl: 'https://www.invenioagency.com/widget/booking/',
  seo: {
    title: 'Unifisio | Fisioterapia y Rehabilitación en Bogotá',
    description: 'Clínica de fisioterapia deportiva y rehabilitación. Recuperación con criterio y movimiento medido.',
    ogImage: '/images/og-image.jpg',
    canonicalUrl: 'https://unifisio.co',
  },
  hero: {
    headline: 'Fisioterapia y rehabilitación en Bogotá.\nMovimiento medido.\nRecuperación con criterio.',
    subheadline: 'Equilibrio, rendimiento y bienestar: tu cuerpo en manos expertas.',
    trust: '★ 5.0 · 108 reseñas en Google',
    ctaPrimary: 'Agendar',
  },
  trustIndicators: {
    logos: ['Universidad Europea - Real Madrid', 'Universidad Iberoamericana'],
    metrics: '+15 años atendiendo en Bogotá',
    objections: ['Particular (Sin EPS)', 'Cotización personalizada', 'Cita para el día siguiente'],
  },
  services: {
    title: 'Especialidades',
    items: [
      {
        title: 'Recuperación y rendimiento',
        icon: '01',
        description: 'Traumatología y deportiva.',
      },
      {
        title: 'Especialidades clínicas',
        icon: '02',
        description: 'Neurológica, geriátrica, suelo pélvico, oncológica.',
      },
      {
        title: 'Técnicas de tratamiento',
        icon: '03',
        description: 'Fisioterapia invasiva (punción seca/EPI), agentes físicos, terapia manual.',
      },
      {
        title: 'Prevención y bienestar',
        icon: '04',
        description: 'Laboral, dolor crónico.',
      },
    ],
    cta: '¿No sabes cuál te corresponde? Cuéntanos por WhatsApp.',
  },
  process: {
    title: 'Metodología',
    subtitle: 'No te toca turno. Te toca proceso.',
    steps: [
      {
        number: '01',
        title: 'Agendas',
        description: 'Nos contactas y coordinamos tu cita rápidamente, sin esperas de meses.',
      },
      {
        number: '02',
        title: 'Diagnosticamos',
        description: 'Evaluación clínica profunda para entender el origen de tu problema.',
      },
      {
        number: '03',
        title: 'Tratamos',
        description: 'Aplicamos la técnica exacta que tu cuerpo necesita, combinando métodos si es necesario.',
      },
      {
        number: '04',
        title: 'Acompañamos',
        description: 'Seguimiento de tu evolución hasta darte el alta y prevenir recaídas.',
      },
    ],
  },
  infrastructure: {
    title: 'El Espacio',
    items: [
      {
        title: 'Ejercicio terapéutico',
        description: 'Área equipada para rehabilitación funcional.',
        image: '/infra-1.jpg',
      },
      {
        title: 'Camilla profesional',
        description: 'Espacio privado y cómodo para terapia manual.',
        image: '/infra-2.jpg',
      },
      {
        title: 'Terapia invasiva',
        description: 'Entorno clínico estéril para procedimientos.',
        image: '/infra-3.jpg',
      },
    ],
  },
  educational: {
    title: 'Expertos que enseñan',
    subtitle: 'Aprende con nosotros desde casa. Visita nuestro canal de YouTube para rutinas y consejos.',
    youtubeLink: 'https://youtube.com',
  },
  team: {
    title: 'Quién te atiende',
    members: [
      {
        name: 'Dra. Jeniffer Carolina Ramírez',
        role: 'Enfoque clínico y Cuidado crítico',
        description: 'Especialista en rehabilitación compleja y atención clínica detallada.',
        image: '/team-1.jpg',
      },
      {
        name: 'Dr. Sebastián Guzmán',
        role: 'Fisioterapia deportiva - Real Madrid',
        description: 'Experto en rendimiento deportivo y recuperación acelerada de lesiones.',
        image: '/team-2.jpg',
      },
    ],
  },
  testimonials: {
    title: 'Lo que dicen nuestros pacientes',
    items: [
      {
        quote: 'La atención es impecable. El Dr. Sebastián me ayudó a volver a correr después de una lesión grave.',
        author: 'Andrés M.',
        date: 'Hace 2 semanas',
        stars: 5,
      },
      {
        quote: 'Llegué con dolor crónico y la Dra. Jeniffer encontró la causa en la primera sesión. Increíble equipo.',
        author: 'Laura V.',
        date: 'Hace 1 mes',
        stars: 5,
      },
      {
        quote: 'El espacio, los equipos y la calidad humana son de otro nivel. Cien por ciento recomendados en Bogotá.',
        author: 'Felipe C.',
        date: 'Hace 2 meses',
        stars: 5,
      },
    ],
  },
  loyalty: {
    title: 'Nuestros Beneficios',
    benefits: [
      {
        title: '50% OFF',
        description: 'Por un referido',
      },
      {
        title: '1 Sesión Gratis',
        description: 'Por dos referidos',
      },
      {
        title: '15% OFF',
        description: 'En tu mes de cumpleaños',
      },
    ],
  },
  faq: {
    title: 'Preguntas Frecuentes',
    questions: [
      {
        q: '¿Dónde están ubicados?',
        a: 'Nos encontramos en el barrio Los Mártires, Bogotá. Cerca de las vías principales.',
      },
      {
        q: '¿Por qué no publican los precios?',
        a: 'Cada paciente es único. Realizamos una cotización personalizada basada en el tipo de tratamiento y duración que realmente necesitas.',
      },
      {
        q: '¿Qué es la punción seca?',
        a: 'Es una técnica de fisioterapia invasiva que utiliza agujas muy finas para tratar puntos gatillo y relajar la musculatura profunda.',
      },
      {
        q: '¿Atienden EPS?',
        a: 'Somos una clínica particular. Esto nos permite dedicarte el tiempo completo (sin afanes) y usar tecnología avanzada en cada sesión.',
      },
    ],
  },
  contact: {
    title: 'Visítanos',
    location: 'Los Mártires, Bogotá, Colombia',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127253.25362947477!2d-74.19502985392074!3d4.646549221191068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a2fb60a12e5%3A0xc3191f63b4f9f60!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1717281352467!5m2!1sen!2sus',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // placeholder
    reasons: ['Lesión deportiva', 'Dolor crónico', 'Rehabilitación post-quirúrgica', 'Otro'],
  },
  footer: {
    tagline: 'Tu cuerpo en manos expertas.',
    navLinks: ['Servicios', 'Proceso', 'Equipo', 'Reseñas', 'Ubicación'],
    copyright: '© 2026 Unifisio. Todos los derechos reservados.',
  },
};
