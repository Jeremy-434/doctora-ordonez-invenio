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
    name: 'Dr. Fernando Bonilla',
    tagline: 'Psicología clínica y psicoterapia. Acompañamiento humano basado en la evidencia científica.',
    logo: '/images/logo.svg',
    logoInverted: '/images/logo-inverted.svg',
  },
  whatsapp: {
    number: '+573143300000',
    defaultMessage: 'Hola Dr. Bonilla, me gustaría agendar una consulta psicológica.',
  },
  ghlCalendarId: 'lRPFwJAjpYNAAI66BHlY',
  calendarBaseUrl: 'https://www.invenioagency.com/widget/booking/',
  seo: {
    title: 'Dr. Fernando Bonilla | Psicólogo Clínico y Psicoterapeuta en Bogotá',
    description: 'Psicólogo clínico con más de 19 años de experiencia. Especialista en psicoterapia, mindfulness y terapias de tercera generación. Atención presencial y virtual en Bogotá.',
    ogImage: '/images/og-image.jpg',
    canonicalUrl: 'https://doctorbonilla.co',
  },
  hero: {
    headline: 'Psicología clínica y\npsicoterapia con enfoque\nhumano y científico.',
    subheadline: 'Acompaño procesos de cambio, crecimiento y bienestar emocional. Más de 19 años atendiendo personas de todas las edades, sin ningún tipo de discriminación.',
    trust: '★ · +19 años de experiencia profesional',
    ctaPrimary: 'Agendar',
  },
  trustIndicators: {
    logos: ['Profesional en Psicología', 'Especialista en Psicología Clínica', 'Máster en Psicoterapia'],
    metrics: '+19 años atendiendo en Bogotá',
    objections: ['Solo pacientes particulares', 'Efectivo o Transferencia', 'Presencial y Videoconsulta'],
  },
  services: {
    title: 'Especialidades',
    items: [
      {
        title: 'Psicoterapia Individual',
        icon: '01',
        description: 'Psicoterapia individual, terapia para ansiedad, crisis personal y profesional. Consulta presencial o virtual.',
      },
      {
        title: 'Terapia de Pareja',
        icon: '02',
        description: 'Psicoterapia de pareja, abordaje de problemas relacionales y consulta virtual de pareja.',
      },
      {
        title: 'Terapia Familiar & Adolescentes',
        icon: '03',
        description: 'Terapia familiar y acompañamiento psicológico individual y grupal para adolescentes.',
      },
      {
        title: 'Psicoterapia Infantil & Crianza',
        icon: '04',
        description: 'Psicoterapia para niños y orientación en pautas de crianza para padres y cuidadores.',
      },
      {
        title: 'Terapia Cognitiva del Comportamiento (TCC)',
        icon: '05',
        description: 'Intervención basada en TCC, Mindfulness y terapias contextuales de tercera generación para un abordaje moderno y basado en evidencia.',
      },
      {
        title: 'Evaluación Psicológica & Orientación Vocacional',
        icon: '06',
        description: 'Evaluación psicológica integral y orientación vocacional para tomar decisiones con claridad y criterio.',
      },
      {
        title: 'Asesoría Psicológica & Psicoeducación',
        icon: '07',
        description: 'Asesoría psicológica, psicoeducación y acompañamiento en procesos de cambio y bienestar emocional.',
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
        description: 'Atención en consultorio privado. Carrera 118 #86-20, Bogotá. Ambiente cálido, confidencial y sin juicios.',
        image: '/infra-1.jpg',
      },
      {
        title: 'Videoconsulta',
        description: 'Sesiones de psicoterapia en línea desde cualquier lugar. Misma calidad clínica, sin desplazamiento.',
        image: '/infra-2.jpg',
      },
      {
        title: 'Enfoque Basado en Evidencia',
        description: 'Terapias de tercera generación, TCC y Mindfulness. Intervención clínica rigurosa y adaptada a cada persona.',
        image: '/infra-3.jpg',
      },
    ],
  },
  educational: {
    title: 'Psicología sin misterios',
    subtitle: 'Contenido psicoeducativo para entender mejor tu salud mental y emocional. Conocimiento accesible y basado en evidencia.',
    youtubeLink: 'https://youtube.com',
  },
  team: {
    title: 'Quién te acompaña',
    members: [
      {
        name: 'Fernando Alexander Bonilla Sandoval',
        role: 'Psicólogo Clínico | Máster en Psicoterapia Contextual',
        description: 'Profesional en Psicología, Especialista en Psicología Clínica y Máster en Psicoterapia desde un enfoque contextualista. Más de 19 años acompañando procesos de cambio, crecimiento y bienestar emocional en personas de todas las edades.',
        image: '/team-1.jpg',
      },
    ],
  },
  testimonials: {
    title: 'Lo que dicen mis pacientes',
    items: [
      {
        quote: 'El Dr. Bonilla me ayudó a entender mis patrones de ansiedad con una claridad que nunca antes había tenido. Su enfoque humano y profesional fue exactamente lo que necesitaba.',
        author: 'Andrea M.',
        date: 'Hace 2 semanas',
        stars: 5,
      },
      {
        quote: 'Después de meses de dificultades en mi relación, la terapia de pareja con el Dr. Bonilla nos dio herramientas reales para comunicarnos mejor. Lo recomiendo ampliamente.',
        author: 'Carlos y Luisa P.',
        date: 'Hace 1 mes',
        stars: 5,
      },
      {
        quote: 'Llevé a mi hijo a psicoterapia infantil con el Dr. Bonilla y el cambio fue notable. Su paciencia y experticia con niños es increíble. Muy agradecidos.',
        author: 'Marcela T.',
        date: 'Hace 3 meses',
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
        q: '¿Cuáles son las especialidades principales del Dr. Bonilla?',
        a: 'Fernando Alexander Bonilla Sandoval es Psicólogo. Ofrece servicios de Asesoría psicológica y psicoeducación, Pautas de crianza, Evaluación psicológica, Orientación vocacional, Psicoterapia de pareja, Psicoterapia Individual, Psicoterapia Infantil, Terapia cognitiva del comportamiento (TCC), Terapia de pareja y Terapia familiar.',
      },
      {
        q: '¿En dónde está ubicado el consultorio del Dr. Bonilla?',
        a: 'Fernando Alexander Bonilla Sandoval atiende a sus pacientes en: Carrera 118 #86-20, Bogotá.',
      },
      {
        q: '¿Puedo tener la consulta en línea sin desplazarme al consultorio?',
        a: 'Sí, el Dr. Bonilla ofrece consulta de forma remota. Solo tienes que seleccionar "consulta en línea" al reservar tu cita desde el calendario y elegir la fecha y hora disponible.',
      },
      {
        q: '¿Cómo se realiza el pago al finalizar la consulta?',
        a: 'Fernando Alexander Bonilla Sandoval recibe los siguientes métodos de pago: Efectivo y Transferencia.',
      },
      {
        q: '¿Qué idiomas habla el Dr. Bonilla?',
        a: 'Puedes comunicarte con Fernando Alexander Bonilla Sandoval en Español.',
      },
      {
        q: '¿Cómo puedo reservar una cita?',
        a: 'El calendario está actualizado en tiempo real. Solo tienes que elegir el día y hora que te convengan entre las disponibles. La reserva es gratuita y recibirás un recordatorio antes de la visita.',
      },
      {
        q: '¿Cuándo podría tener una cita con el Dr. Bonilla?',
        a: 'A veces el Dr. Bonilla tiene horas disponibles dentro de la misma semana o para la siguiente. Consulta su calendario actualizado en tiempo real para ver la primera hora disponible. La reserva es siempre inmediata y gratuita.',
      },
      {
        q: '¿El Dr. Bonilla acepta aseguradoras?',
        a: 'No. El Dr. Bonilla sólo atiende pacientes particulares. Puede pagar directamente para reservar su cita. No se trabaja con aseguradoras ni EPS.',
      },
    ],
  },
  contact: {
    title: 'Agenda tu consulta',
    location: 'Carrera 118 #86-20, Bogotá, Colombia',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127253.25362947477!2d-74.19502985392074!3d4.646549221191068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a2fb60a12e5%3A0xc3191f63b4f9f60!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1717281352467!5m2!1sen!2sus',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    reasons: ['Psicoterapia individual', 'Terapia de pareja', 'Terapia familiar', 'Psicoterapia infantil', 'Ansiedad o crisis emocional', 'Orientación vocacional', 'Evaluación psicológica', 'Otro'],
  },
  footer: {
    tagline: 'Psicología clínica y bienestar emocional. Con criterio. Sin juicios.',
    navLinks: ['Especialidades', 'Proceso', 'Sobre mí', 'Reseñas', 'Ubicación'],
    copyright: '© 2026 Dr. Fernando Bonilla. Todos los derechos reservados.',
  },
};
