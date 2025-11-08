export const menu = [
  {
    title_es: 'Inicio',
    title_en: 'Home',
    tag: 'home',
    subMenu: []
  },
  {
    title_es: 'Por Que Trotter',
    title_en: 'How We Work',
    tag: 'why-trotter',
    subMenu: []
  },
  {
    title_es: 'Nosotros',
    title_en: 'About',
    tag: 'about',
    subMenu: []
  },
  {
    title_es: 'Areas de Practica',
    title_en: 'Practice Areas',
    tag: 'practice-areas',
    subMenu: [
      {
        title_es: 'Negocios Legales',
        title_en: 'Business Law',
        tag: 'business-law'
      },
      {
        title_es: 'Derecho corporativo y gobernanza',
        title_en: 'Corporate Law & Governance',
        tag: 'corporate-law'
      },
      {
        title_es: 'Fusiones y adquisiciones (M&A)',
        title_en: 'Mergers & Acquisitions (M&A)',
        tag: 'mergers-acquisitions'
      },
      {
        title_es: 'Inmigración y movilidad global',
        title_en: 'Immigration & Global Mobility',
        tag: 'immigration-global'
      },
      {
        title_es: 'Transacciones transfronterizas e internacionales',
        title_en: 'Cross-Border & International Transactions',
        tag: 'cross-border-international'
      }
    ]
  },
  {
    title_es: 'Recursos',
    title_en: 'Resources',
    tag: 'articles',
    subMenu: [
      {
        title_es: 'Artículos',
        title_en: 'Articles',
        tag: 'articles'
      },
      {
        title_es: 'Noticias',
        title_en: 'News',
        tag: 'news'
      }
    ]
  },
  {
    title_es: 'Contacto',
    title_en: 'Contact',
    tag: 'contact',
    subMenu: []
  }
]

export const language = [
  {
    title: 'Esp',
    tag: 'es'
  },
  {
    title: 'Eng',
    tag: 'en'
  }
]

export const dataContact = {
  es: {
    name: 'Nombre y apellido',
    email: 'E-Mail',
    message: 'Mensaje',
    send: 'Enviar',
    thanks: '¡Su mensaje fue enviado! Gracias por contactarte con nosotros.',
    error: 'Se produjo un error al enviar el mensaje :-(',
    required: 'Por favor complete este dat'
  },
  en: {
    name: 'Full name',
    email: 'Email Address',
    message: 'Message',
    send: 'Send',
    thanks: 'Your message was sent! Thank you for contacting us.',
    error: 'An error occurred while sending the message :-(',
    required: 'Please complete this field'
  }
}
