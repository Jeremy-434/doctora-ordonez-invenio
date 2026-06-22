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
    videoUrl: string;
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
    name: 'Dra. Liliana Castillo',
    tagline: 'Psicología clínica con enfoque humano. Ansiedad, depresión y bienestar emocional.',
    logo: '/images/logo.svg',
    logoInverted: '/images/logo-inverted.svg',
  },
  whatsapp: {
    number: '+573143300000',
    defaultMessage: 'Hola Dra. Liliana, me gustaría agendar una consulta psicológica.',
  },
  ghlCalendarId: 'lRPFwJAjpYNAAI66BHlY',
  calendarBaseUrl: 'https://www.invenioagency.com/widget/booking/',
  seo: {
    title: 'Dra. Liliana Castillo | Psicóloga Clínica en Bogotá',
    description: 'Psicóloga clínica con más de 18 años de experiencia en ansiedad, depresión y bienestar emocional. Atención presencial en Bogotá y videoconsulta.',
    ogImage: 'https://via.placeholder.com/1200x630?text=Dra.+Liliana+Castillo',
    canonicalUrl: 'https://doctorbonilla.co',
  },
  hero: {
    headline: 'Recupera tu tranquilidad\ny bienestar emocional.',
    subheadline: 'Te acompaño a superar la ansiedad, el estrés y la depresión con herramientas reales. Más de 18 años acompañando adultos y niños en Bogotá.',
    trust: '★ · +18 años de experiencia profesional',
    ctaPrimary: 'Agendar',
  },
  trustIndicators: {
    logos: ['Psicóloga Clínica', 'Terapia Cognitivo Conductual', 'Mindfulness MBSR'],
    metrics: '+18 años atendiendo en Bogotá',
    objections: ['Solo pacientes particulares', 'Efectivo o Transferencia', 'Presencial y Videoconsulta'],
  },
  services: {
    title: 'Especialidades',
    items: [
      {
        title: 'Consulta Psicológica',
        icon: '01',
        description: 'Atención para ansiedad, estrés y depresión. Consulta presencial o videoconsulta. $110.000',
      },
      {
        title: 'Terapia de Pareja',
        icon: '02',
        description: 'Abordaje de problemas relacionales, comunicación y conflicto. $110.000',
      },
      {
        title: 'Consulta Psicológica Infantil',
        icon: '03',
        description: 'Acompañamiento para niños y orientación a padres en pautas de crianza. $110.000',
      },
      {
        title: 'Terapia Cognitiva del Comportamiento (TCC)',
        icon: '04',
        description: 'Intervención basada en evidencia para trastornos de ansiedad, conducta y estados del ánimo. $110.000',
      },
      {
        title: 'Salud Mental Empresarial',
        icon: '05',
        description: 'Capacitaciones y asesoría psicológica para equipos y organizaciones. Desde $100.000',
      },
      {
        title: 'Consulta en Línea',
        icon: '06',
        description: 'Videoconsulta con la misma calidad clínica, sin desplazamiento. $110.000',
      },
      {
        title: 'Evaluación Psicológica',
        icon: '07',
        description: 'Valoración integral y orientación vocacional. $110.000',
      },
    ],
    cta: 'Da el primer paso hacia tu bienestar. Cuéntanos por WhatsApp.',
  },
  process: {
    title: 'Metodología Clínica',
    subtitle: 'Un proceso humano, riguroso y basado en la evidencia científica.',
    steps: [
      {
        number: '01',
        title: 'Agendas',
        description: 'Contacto sencillo y discreto. Tu cita coordinada de forma rápida, presencial o en línea.',
      },
      {
        number: '02',
        title: 'Evaluamos',
        description: 'Historia clínica profunda y evaluación psicológica integral en un entorno de total confianza y sin juicios.',
      },
      {
        number: '03',
        title: 'Tratamos',
        description: 'Psicoterapia individual, familiar o de pareja con técnicas basadas en TCC, Mindfulness y terapias contextuales.',
      },
      {
        number: '04',
        title: 'Seguimos',
        description: 'Acompañamiento continuo, revisión de avances y ajuste del proceso terapéutico hasta consolidar el bienestar.',
      },
    ],
  },
  infrastructure: {
    title: 'Modalidades de Atención',
    items: [
      {
        title: 'Consulta Presencial',
        description: 'Atención en consultorio privado. Carrera 19a #84-29, Usaquén, Bogotá. Ambiente cálido, confidencial y sin juicios.',
        image: 'https://via.placeholder.com/400x300?text=Consulta+Presencial',
      },
      {
        title: 'Videoconsulta',
        description: 'Sesiones de psicoterapia en línea desde cualquier lugar. Misma calidad clínica, sin desplazamiento.',
        image: 'https://via.placeholder.com/400x300?text=Videoconsulta',
      },
      {
        title: 'Enfoque Basado en Evidencia',
        description: 'Terapias de tercera generación, TCC y Mindfulness. Intervención clínica rigurosa y adaptada a cada persona.',
        image: 'https://via.placeholder.com/400x300?text=Enfoque+en+Evidencia',
      },
    ],
  },
  educational: {
    title: 'Psicología sin misterios',
    subtitle: 'Contenido psicoeducativo para entender mejor tu salud mental y emocional. Conocimiento accesible y basado en evidencia.',
    youtubeLink: 'https://youtube.com',
    videoUrl: '',
  },
  team: {
    title: 'Quién te acompaña',
    members: [
      {
        name: 'Dra. Liliana Isabel Castillo Castillo',
        role: 'Psicóloga Clínica | Terapia Cognitivo Conductual & Mindfulness',
        description: 'Psicóloga clínica con más de 18 años de experiencia en tratamientos para trastornos de ansiedad, estrés y depresión. Te acompaño a recuperar la tranquilidad, fortalecer tu autoestima y desarrollar herramientas para afrontar los desafíos de la vida con mayor seguridad y confianza. Núm. Colegiado: 283766.',
        image: 'https://via.placeholder.com/400x500?text=Dra.+Liliana+Castillo',
      },
    ],
  },
  testimonials: {
    title: 'Lo que dicen mis pacientes',
    items: [
      {
        quote: 'La dra es increíble, llevo meses con ella y me ha ayudado bastante en mi proceso. 100% recomendada',
        author: 'Gabriela M.',
        date: '4 de mayo de 2026',
        stars: 5,
      },
      {
        quote: 'Es una excelente psicóloga, siempre empática, enseña con paciencia y amor.',
        author: 'Ana María G.',
        date: '1 de mayo de 2026',
        stars: 5,
      },
      {
        quote: 'Muy eficaz, hay compromiso, profesionalismo, atención y escucha, muy acertada.',
        author: 'Patricia C.',
        date: '19 de noviembre de 2025',
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
        q: '¿Cuáles son las especialidades principales de la Dra. Liliana?',
        a: 'La Dra. Liliana ofrece Consulta Psicológica para ansiedad y depresión, Terapia de Pareja, Consulta Psicológica Infantil, Terapia Cognitiva del Comportamiento (TCC), Salud Mental Empresarial, Consulta en Línea y Evaluación Psicológica.',
      },
      {
        q: '¿En dónde está ubicado el consultorio?',
        a: 'La Dra. Liliana atiende a sus pacientes en: Carrera 19a #84-29, grupo 7, Usaquén, Bogotá 110221. También ofrece videoconsulta.',
      },
      {
        q: '¿Puedo tener la consulta en línea sin desplazarme?',
        a: 'Sí, la Dra. Liliana ofrece consulta de forma remota. Solo tienes que seleccionar "consulta en línea" al reservar tu cita desde el calendario y elegir la fecha y hora disponible.',
      },
      {
        q: '¿Cómo se realiza el pago al finalizar la consulta?',
        a: 'La Dra. Liliana recibe los siguientes métodos de pago: Efectivo, Transferencia, Tarjeta de crédito y Tarjeta de débito.',
      },
      {
        q: '¿Qué idiomas habla la Dra. Liliana?',
        a: 'Puedes comunicarte con la Dra. Liliana en Español e Inglés.',
      },
      {
        q: '¿Cómo puedo reservar una cita?',
        a: 'El calendario está actualizado en tiempo real. Solo tienes que elegir el día y hora que te convengan entre las disponibles. La reserva es gratuita y recibirás un recordatorio antes de la visita.',
      },
      {
        q: '¿Cuándo podría tener una cita?',
        a: 'A veces hay horas disponibles dentro de la misma semana o para la siguiente. Consulta el calendario actualizado en tiempo real para ver la primera hora disponible. La reserva es siempre inmediata y gratuita.',
      },
      {
        q: '¿Acepta aseguradoras?',
        a: 'No. La Dra. Liliana solo atiende pacientes particulares. Puedes pagar directamente para reservar tu cita. No se trabaja con aseguradoras ni EPS.',
      },
    ],
  },
  contact: {
    title: 'Agenda tu consulta',
    location: 'Carrera 19a #84-29, grupo 7, Usaquén, Bogotá 110221',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127253.25362947477!2d-74.19502985392074!3d4.646549221191068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a2fb60a12e5%3A0xc3191f63b4f9f60!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1717281352467!5m2!1sen!2sus',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    reasons: ['Ansiedad o estrés', 'Depresión', 'Terapia de pareja', 'Psicología infantil', 'Salud mental empresarial', 'Evaluación psicológica', 'Orientación vocacional', 'Otro'],
  },
  footer: {
    tagline: 'Psicología clínica y bienestar emocional. Con empatía. Con resultados.',
    navLinks: ['Especialidades', 'Proceso', 'Sobre mí', 'Reseñas', 'Ubicación'],
    copyright: '© 2026 Dra. Liliana Isabel Castillo Castillo. Todos los derechos reservados.',
  },
};
