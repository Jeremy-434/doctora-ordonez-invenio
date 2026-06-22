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
    name: 'Dra. Ileynne Stephany Ordoñez Olaya',
    tagline: 'Psicología clínica cristiana con enfoque integral. Neuropsicología, terapia de pareja y familia.',
    logo: '/images/logo.svg',
    logoInverted: '/images/logo-inverted.svg',
  },
  whatsapp: {
    number: '+573183780170',
    defaultMessage: 'Hola Dra. Ileynne, me gustaría agendar una consulta psicológica.',
  },
  ghlCalendarId: 'lRPFwJAjpYNAAI66BHlY',
  calendarBaseUrl: 'https://www.invenioagency.com/widget/booking/',
  seo: {
    title: 'Dra. Ileynne Stephany Ordoñez Olaya | Psicóloga Clínica en Bogotá',
    description: 'Psicóloga clínica cristiana con formación en neuropsicología y terapia de pareja y familia. Atención en línea para pacientes en Colombia y el exterior.',
    ogImage: 'https://via.placeholder.com/1200x630?text=Dra.+Ileynne+Stephany+Ordoñez+Olaya',
    canonicalUrl: 'https://doctoraeileynne.co',
  },
  hero: {
    headline: 'Terapia que restaura\nel alma y fortalece la fe.',
    subheadline: 'Acompañamiento terapéutico con principios cristianos para ansiedad, depresión, duelos y conflictos de pareja. Psicología clínica integrada en neuropsicología y terapia basada en evidencia.',
    trust: '★ · Psicóloga Clínica Cristiana | Núm. Colegiado: 116956',
    ctaPrimary: 'Agendar',
  },
  trustIndicators: {
    logos: ['Psicóloga Clínica Cristiana', 'Terapia Cognitivo Conductual', 'Neuropsicología'],
    metrics: 'Especialista en Psicología Cristiana y Bienestar Emocional',
    objections: ['Solo pacientes particulares', 'Efectivo, Transferencia o Tarjeta de débito', 'Consultas 100% en línea'],
  },
  services: {
    title: 'Especialidades',
    items: [
      {
        title: 'Consulta Psicológica en Línea',
        icon: '01',
        description: 'Atención para ansiedad, depresión y sanidad emocional. 100% en línea. Desde $130.000',
      },
      {
        title: 'Consulta Virtual de Pareja',
        icon: '02',
        description: 'Conflictos de pareja, comunicación y restauración matrimonial. Desde $160.000',
      },
      {
        title: 'Terapia Familiar',
        icon: '03',
        description: 'Orientación familiar y fortalecimiento de vínculos. Desde $150.000',
      },
      {
        title: 'Consulta Psicológica Infantil',
        icon: '04',
        description: 'Acompañamiento para niños y orientación a padres en pautas de crianza. Desde $130.000',
      },
      {
        title: 'Evaluación Neuropsicológica',
        icon: '05',
        description: 'Evaluación en adolescentes y adultos con formación integral. Desde $150.000',
      },
      {
        title: 'Salud Mental Empresarial',
        icon: '06',
        description: 'Capacitaciones y asesoría psicológica para equipos y organizaciones. Desde $300.000',
      },
      {
        title: 'Coaching Familiar',
        icon: '07',
        description: 'Desarrollo integral de la familia con enfoque cristiano. Desde $250.000',
      },
    ],
    cta: 'Agenda tu consulta en línea. Escríbenos por WhatsApp.',
  },
  process: {
    title: 'Metodología Clínica',
    subtitle: 'Un proceso cálido, riguroso e integrado con principios cristocéntricos.',
    steps: [
      {
        number: '01',
        title: 'Agendas',
        description: 'Contacto sencillo y discreto. Tu cita coordinada de forma rápida 100% en línea desde cualquier lugar de Colombia o el exterior.',
      },
      {
        number: '02',
        title: 'Evaluamos',
        description: 'Historia clínica profunda y evaluación psicológica integral con formación en neuropsicología, en un entorno seguro y sin juicios.',
      },
      {
        number: '03',
        title: 'Tratamos',
        description: 'Psicoterapia individual, familiar o de pareja integrando TCC, terapia cristiana y terapias basadas en evidencia.',
      },
      {
        number: '04',
        title: 'Seguimos',
        description: 'Acompañamiento continuo con amor, empatía y propósito. Revisión de avances hasta restaurar el alma, renovar la mente y fortalecer la fe.',
      },
    ],
  },
  infrastructure: {
    title: 'Modalidades de Atención',
    items: [
      {
        title: 'Videoconsulta en Línea',
        description: 'Sesiones 100% en línea desde cualquier ciudad de Colombia o el exterior. Misma calidad clínica, ambiente cálido y confidencial.',
        image: 'https://via.placeholder.com/400x300?text=Videoconsulta+en+Linea',
      },
      {
        title: 'Enfoque Cristiano-Clínico',
        description: 'Integración de Psicología Cristiana con TCC y terapias basadas en evidencia. Atención que reconoce la dimensión emocional y espiritual.',
        image: 'https://via.placeholder.com/400x300?text=Enfoque+Cristiano',
      },
      {
        title: 'Especialización en Neuropsicología',
        description: 'Evaluación neuropsicológica en adolescentes y adultos. Formación integral para entender cómo mente, emociones y fe se conectan.',
        image: 'https://via.placeholder.com/400x300?text=Neuropsicologia',
      },
    ],
  },
  educational: {
    title: 'Psicología con propósito',
    subtitle: 'Contenido psicoeducativo desde una perspectiva cristiana y clínica. Conocimiento para restaurar el alma y renovar la mente.',
    youtubeLink: 'https://youtube.com',
    videoUrl: '',
  },
  team: {
    title: 'Quién te acompaña',
    members: [
      {
        name: 'Dra. Ileynne Stephany Ordoñez Olaya',
        role: 'Psicóloga Clínica Cristiana | Neuropsicología & Terapia de Pareja y Familia',
        description: 'Soy psicóloga clínica cristiana con formación en neuropsicología y en terapia de pareja y familia. Mi práctica profesional está fundamentada en la Psicología Cristiana y en el enfoque cognitivo–conductual, integrando herramientas de la psicología basada en la evidencia con principios y valores cristocéntricos. De esta manera, brindo una atención que reconoce y fortalece tanto la dimensión emocional como espiritual del ser humano. Acompaño procesos con amor, empatía y propósito en: ansiedad, depresión y sanidad emocional; duelos, crisis de fe, rupturas y propósito de vida; conflictos de pareja, comunicación y restauración matrimonial; orientación familiar y fortalecimiento de vínculos; evaluación neuropsicológica en adolescentes y adultos. Núm. Colegiado: 116956.',
        image: 'https://via.placeholder.com/400x500?text=Dra.+Ileynne+Ordoñez',
      },
    ],
  },
  testimonials: {
    title: 'Lo que dicen mis pacientes',
    items: [
      {
        quote: 'Muy bonitas las sesiones con Stephany, muchas Gracias por su tiempo',
        author: 'Carlos Fuentes',
        date: '15 de enero de 2026',
        stars: 5,
      },
      {
        quote: 'Es muy cálida en especial en mi caso con adolecente',
        author: 'Diana R.',
        date: '10 de enero de 2026',
        stars: 5,
      },
      {
        quote: 'La Dra Ileynne se destaca por su alto nivel de profesionalismo, ética y compromiso con el bienestar de sus pacientes. Facilita procesos de autoconocimiento y desarrollo personal que contribuyen significativamente a la salud mental y emocional.',
        author: 'Manuel Alexander',
        date: '29 de agosto de 2025',
        stars: 5,
      },
      {
        quote: 'En mi opinión siento que es un espacio seguro en el cual me transmitio mucha confianza y se que con su experiencia nos va ayudar mucho con mi hijo.',
        author: 'Luz Myriam Barrios Cely',
        date: '28 de agosto de 2025',
        stars: 5,
      },
      {
        quote: 'Una terapia muy productiva sinceramente escucharla me da paz y sus consejos me ayudan mucho para ser mejor cada día.. Gracias Doctora Stephany',
        author: 'Alex Villa',
        date: '31 de julio de 2025',
        stars: 5,
      },
      {
        quote: 'Me sentí muy escuchada y se notó la disposición y el compromiso para ayudarme',
        author: 'Valeria Ramírez',
        date: '29 de julio de 2025',
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
        q: '¿Cuáles son las especialidades principales de la Dra. Ileynne?',
        a: 'La Dra. Ileynne es Psicóloga Clínica Cristiana y Neuropsicóloga. Ofrece: Consulta Psicológica en Línea, Consulta Virtual de Pareja, Terapia Familiar, Consulta Psicológica Infantil, Evaluación Neuropsicológica, Salud Mental Empresarial, Coaching Familiar, Psicoterapia Individual, y Asesoría Psicológica con principios cristianos.',
      },
      {
        q: '¿En dónde está ubicado el consultorio?',
        a: 'La Dra. Ileynne atiende a sus pacientes en: CARRERA 55 No 152B-68, Suba, Bogotá 101111. Las consultas son 100% en línea, lo que permite atender a pacientes en cualquier ciudad de Colombia o en el exterior.',
      },
      {
        q: '¿Puedo tener la consulta en línea sin desplazarme?',
        a: 'Sí, la Dra. Ileynne ofrece consulta 100% en línea. Solo tienes que seleccionar una fecha y hora disponible en el calendario y acceder desde cualquier lugar con conexión a internet.',
      },
      {
        q: '¿Cómo se realiza el pago al finalizar la consulta?',
        a: 'La Dra. Ileynne recibe los siguientes métodos de pago: Efectivo, Tarjeta de débito y Transferencia bancaria.',
      },
      {
        q: '¿Qué idiomas habla la Dra. Ileynne?',
        a: 'Puedes comunicarte con la Dra. Ileynne en Español.',
      },
      {
        q: '¿Cómo puedo reservar una cita?',
        a: 'El calendario está actualizado en tiempo real. Solo tienes que elegir el día y hora que te convengan entre las disponibles. La reserva es gratuita y recibirás un recordatorio por WhatsApp antes de la consulta.',
      },
      {
        q: '¿Cuándo podría tener una cita?',
        a: 'Hay horas disponibles durante la semana. Consulta el calendario actualizado en tiempo real para ver la primera hora disponible. La reserva es siempre inmediata y gratuita. También puedes contactar por WhatsApp al 318 378 0170.',
      },
      {
        q: '¿Acepta aseguradoras?',
        a: 'No. La Dra. Ileynne solo atiende pacientes particulares. Puedes pagar directamente para reservar tu cita. No se trabaja con aseguradoras ni EPS.',
      },
    ],
  },
  contact: {
    title: 'Agenda tu consulta',
    location: 'CARRERA 55 No 152B-68, Suba, Bogotá 101111',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127253.25362947477!2d-74.19502985392074!3d4.646549221191068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a2fb60a12e5%3A0xc3191f63b4f9f60!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1717281352467!5m2!1sen!2sus',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    reasons: ['Ansiedad o depresión', 'Terapia de pareja', 'Psicología infantil', 'Neuropsicología', 'Sanidad emocional', 'Crisis de fe', 'Coaching familiar', 'Otro'],
  },
  footer: {
    tagline: 'Psicología clínica cristiana que restaura el alma y fortalece la fe. Con amor. Con propósito.',
    navLinks: ['Especialidades', 'Proceso', 'Sobre mí', 'Reseñas', 'Ubicación'],
    copyright: '© 2026 Dra. Ileynne Stephany Ordoñez Olaya. Todos los derechos reservados.',
  },
};
