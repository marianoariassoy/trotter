import AreasArticle from './areasArticle'
import { useState } from 'react'

const AboutText = ({ lan }: { lan: string }) => {
  const [active, setActive] = useState<string>('Business Law')

  const data = [
    {
      title_en: 'Business Law',
      title_es: 'Negocios Legales'
    },
    {
      title_en: 'Corporate Law & Governance',
      title_es: 'Derecho corporativo y gobernanza'
    },
    {
      title_en: 'Mergers & Acquisitions',
      title_es: 'Fusiones y adquisiciones'
    },
    {
      title_en: 'Immigration & Global Mobility',
      title_es: 'Inmigración y movilidad global'
    },
    {
      title_en: 'Cross-Border & International Transactions',
      title_es: 'Transacciones transbordadoras y internacionales'
    }
  ]

  const dataBusiness = [
    {
      title_en: 'Form and structure your company',
      text_en: 'LLCs, corporations, and partnerships designed for growth and investor readiness.',
      title_es: 'Formación y estructuración de tu empresa',
      text_es:
        'Sociedades de responsabilidad limitada, empresas y sociedades cooperativas diseñadas para crecer y ser aptas para inversores.'
    },
    {
      title_en: 'Draft and negotiate solid contracts',
      text_en: 'vendor, client, and partnership agreements that protect your business interests',
      title_es: 'Redactar contratos y negociaciones',
      text_es: 'Contratos de proveedores, clientes y sociedades cooperativas que protegen tus intereses comerciales'
    },
    {
      title_en: 'Manage your team with conﬁdence',
      text_en: 'clear executive agreements, employee and compliance manuals and non-compete policies.',
      title_es: 'Orientación jurídica sobre empleo',
      text_es: 'Contratos de ejecutivo, cumplimiento, no compete, manuales de empleo y políticas de no compete.'
    },
    {
      title_en: 'Get dat-to-day legal support',
      text_en:
        'ongoing guidance for founders, managers and executives to navigate challenges as your business evolves.',
      title_es: 'Asistencia jurídica de día a día',
      text_es:
        'Asistencia jurídica de empresas, fundadores y ejecutivos para navegar los desafíos a medida que evoluciona tu negocio.'
    }
  ]

  const dataCorporate = [
    {
      title_en: 'Build solid governance structures',
      text_en: 'shareholder agreements, bylaws, and board policies that promote clarity and trust. ',
      title_es: 'Construye estructuras de gobernanza solidas',
      text_es:
        'contratos de acciones, leyes de asociación y políticas del consejo que promocionan claridad y confianza.'
    },
    {
      title_en: 'Draft and negotiate solid contracts',
      text_en:
        'Manage corporate compliance — ensuring your company meets Florida and federal requirements while minimising risk.',
      title_es: 'Redactar contratos y negociaciones',
      text_es:
        'Manejar el cumplimiento corporativo — asegurando que tu empresa cumple los requisitos de Florida y federales mientras minimizas los riesgos.'
    },
    {
      title_en: 'Manage your team with conﬁdence',
      text_en: 'Navigate ﬁnancing and capital raises — legal support for safes, convertible notes, and equity rounds.',
      title_es: 'Orientación jurídica sobre empleo',
      text_es:
        'Navegar ﬁnancias y inversiones de capital — asistencia jurídica para seguros, notas convertibles y redondeos de capital.'
    },
    {
      title_en: 'Get day-to-day legal support',
      text_en:
        'Structure strategic partnerships and joint ventures — from negotiation to execution, aligning interests and protecting value.',
      title_es: 'Asistencia jurídica de día a día',
      text_es:
        'Estructurar asociaciones estratégicas y inversiones — desde la negociación hasta la ejecución, alinando intereses y protegiendo valor.'
    }
  ]

  const dataMergers = [
    {
      title_en: 'Conduct thorough due diligence',
      text_en: 'uncover risks and identify opportunities before closing.',
      title_es: 'Revisión de riesgos y evaluación de riesgos',
      text_es: 'descubrir riesgos y identificar oportunidades antes de cerrar.'
    },
    {
      title_en: 'Structure and negotiate win-win deals',
      text_en: 'purchase agreements, investment terms, and shareholder arrangements that safeguard your interests.',
      title_es: 'Redactar contratos y negociaciones',
      text_es: 'contratos de compra, términos de inversión y arreglos de acciones que protegen tus intereses.'
    },
    {
      title_en: 'Close transactions efﬁciently',
      text_en: 'from drafting to execution, ensuring compliance.',
      title_es: 'Cerrar transacciones de forma efﬁciente',
      text_es: 'desde la redacción hasta la ejecución, asegurando cumplimiento.'
    },
    {
      title_en: 'Plan post-closing integrations',
      text_en: 'supporting smooth transitions for teams, operations, and governance.',
      title_es: 'Planificación de integración después de cierre',
      text_es: 'apoyando transiciones suaves para equipos, operaciones y gobernanza.'
    }
  ]

  const dataInmigration = [
    {
      title_en: 'Design the right visa strategy ',
      text_en:
        'for founders, investors,  and professionals (B1/B2, EB-1A, EB-2  NIW, O-1A, E-1, E-2, naturalisation and more).',
      title_es: 'Diseña la estrategia de visa adecuada',
      text_es:
        'para los fundadores, inversionistas y profesionales (B1/B2, EB-1A, EB-2 NIW, O-1A, E-1, E-2, naturalización y más).'
    },
    {
      title_en: 'Ensure compliance and readiness ',
      text_en: 'guiding corporations through immigration audits and documentation.',
      title_es: 'Asegura cumplimiento y preparación',
      text_es: 'guiando a las empresas a través de auditorías y documentación de inmigración.'
    },
    {
      title_en: 'Support global mobility programs ',
      text_en: 'facilitating smooth relocation and work authorisation for international teams',
      title_es: 'Apoya programas de movilidad global',
      text_es:
        'facilitando la relación suave de la relocalización y la autorización de trabajo para equipos internacionales'
    },
    {
      title_en: 'Advise on family and humanitarian options',
      text_en: 'offering compassionate, effective legal pathways for individuals and families.',
      title_es: 'Orienta sobre opciones de inmigración basadas en la familia y humanitaria',
      text_es: 'ofreciendo caminos legales compasivos y efectivos para individuos y familias.'
    }
  ]

  const dataCrossBorder = [
    {
      title_en: 'Structure and negotiate international',
      text_en: 'transactions that align with your strategic objectives.',
      title_es: 'Estructura y negocia transacciones internacionales',
      text_es: 'que alineen con tus objetivos estratégicos.'
    },
    {
      title_en: 'Ensure compliance with foreign investment, corporate, and regulatory ',
      text_en: 'requirements in multiple jurisdictions.',
      title_es: 'Asegura cumplimiento con las leyes de inversión extranjera, corporativa y regulatoria',
      text_es: 'requisitos en múltiples jurisdicciones.'
    },
    {
      title_en: 'Assess and manage multijurisdictional risks',
      text_en: 'from due diligence to dispute prevention.',
      title_es: 'Evalua y gestiona riesgos multilingüísticos',
      text_es: 'desde la revisión de riesgos hasta la prevención de disputas.'
    },
    {
      title_en: 'Integrate legal, and operational strategies',
      text_en: 'for smooth cross-border execution.',
      title_es: 'Integra estrategias legales y operativas',
      text_es: 'para una ejecución suave de transfronterizas.'
    }
  ]

  return (
    <div className='relative mt-28'>
      <section
        className='max-w-5xl m-auto mt-12 lg:mt-20 px-4'
        id='practice-areas'
      >
        <div>
          <h1 className='text-primary font-medium text-5xl lg:text-7xl pr-20 mb-8'>
            {lan === 'en' ? 'Practice Areas ' : 'Áreas de Practica'}
          </h1>

          <div className='flex items-center gap-2 flex-wrap mb-4'>
            {data.map((item, index) => (
              <button
                key={index}
                className={`border text-sm border-primary rounded-full p-4 text-primary font-semibold hover:text-white  ${
                  active === item.title_en ? 'bg-primary cursor-pointer text-white' : 'hover:bg-primary cursor-pointer'
                }`}
                onClick={() => setActive(item.title_en)}
              >
                {lan === 'en' ? item.title_en : item.title_es}
              </button>
            ))}
          </div>
        </div>

        {active === 'Business Law' && (
          <AreasArticle
            title={lan === 'en' ? 'Business Law' : 'Negocios Legales'}
            subtitle={
              lan === 'en'
                ? 'Build or grow your business with clarity and conﬁdence.'
                : 'Construya o crezca tu negocio con claridad y confianza.'
            }
            text={
              lan === 'en'
                ? 'We combine corporate law, and strategy — helping founders and companies make informed decisions from day one. '
                : 'Combinamos el derecho corporativo y la estrategia — ayudando a los fundadores y las empresas a tomar decisiones informadas desde el principio. '
            }
            items={dataBusiness}
            text2={
              lan === 'en'
                ? 'Smart business law isn’t just about avoiding risks — it’s about building a strong foundation that lets you grow sustainably and focus on what matters most: your vision. OUR MANTRA IS M&A READY FROM DAY ONE.'
                : 'La legalidad de negocios inteligente no es solo sobre evitar riesgos — es sobre construir una base fuerte que te permita crecer sosteniblemente y centrarte en lo que importa más: tu visión. NUESTRA MANTRA ES M&A LISTA DESDE EL PRIMER DIA.'
            }
            lan={lan}
          />
        )}

        {active === 'Corporate Law & Governance' && (
          <AreasArticle
            title={lan === 'en' ? 'Corporate Law & Governance' : 'Derecho corporativo y gobernanza'}
            subtitle={
              lan === 'en'
                ? 'Smart, strategic decisions for your company.'
                : 'Decisiones estratégicas inteligentes para tu empresa.'
            }
            text={
              lan === 'en'
                ? 'Tailored legal counsel to private and closely held companies, guiding founders, boards, and executives to:'
                : 'Orientación jurídica personalizada a las empresas privadas y bien tiendas, guiando a los fundadores, consejeros y ejecutivos a:'
            }
            items={dataCorporate}
            text2={
              lan === 'en'
                ? 'Strong governance and smart corporate structuring are the backbone of sustainable growth.'
                : 'La gobernanza y estructuración corporativa inteligente son los pilares de crecimiento sostenible.'
            }
            lan={lan}
          />
        )}

        {active === 'Mergers & Acquisitions' && (
          <AreasArticle
            title={lan === 'en' ? 'Mergers & Acquisitions' : 'Fusiones y adquisiciones'}
            subtitle={
              lan === 'en'
                ? 'Grow, merge, or sell your business with certainty.'
                : 'Crece, fusione o vende tu negocio con certeza.'
            }
            text={
              lan === 'en'
                ? 'End-to-end legal guidance for buyers, sellers, and investors to minimise risk, protect value, and move smoothly through each stage of the process:'
                : 'Orientación jurídica de alto nivel para compradores, vendedores y inversores para minimizar los riesgos, proteger el valor y moverse de forma fluida a través de cada etapa del proceso:'
            }
            items={dataMergers}
            text2={
              lan === 'en'
                ? 'Smart M&A deal planning and precise execution turn complex transactions into lasting growth — protecting your investment and setting the stage for future success.'
                : 'Planificación y ejecución de negocios M&A inteligentes y precisas convierten transacciones complejas en crecimiento duradero — protegiendo tu inversión y estableciendo el escenario para el éxito futuro.'
            }
            lan={lan}
          />
        )}

        {active === 'Immigration & Global Mobility' && (
          <AreasArticle
            title={lan === 'en' ? 'Immigration & Global Mobility' : 'Inmigración y movilidad global'}
            subtitle={
              lan === 'en'
                ? 'Expand your opportunities — and your team — with conﬁdence. '
                : 'Amplía tus oportunidades — y tu equipo — con confianza.'
            }
            text={
              lan === 'en'
                ? 'We help corporations, executives, and individuals navigate U.S. immigration law with clarity and precision — from investor and talent visas to full corporate relocations.'
                : 'Ayudamos a las empresas, ejecutivos y particulares a navegar la legislación migratoria estadounidense con claridad y precisión — desde las visas de inversión y talento hasta las relocaciones corporativas completas.'
            }
            items={dataInmigration}
            text2={
              lan === 'en'
                ? 'Strategic immigration guidance empowers companies and individuals to grow, move, and thrive within the U.S. — without uncertainty or unnecessary delays.'
                : 'La inmigración no es solo papeleo, sino que se trata de asegurar el futuro, mover el talento y hacer crecer los negocios a nivel mundial.'
            }
            lan={lan}
          />
        )}

        {active === 'Cross-Border & International Transactions' && (
          <AreasArticle
            title={
              lan === 'en'
                ? 'Cross-Border & International Transactions'
                : 'Transacciones transfronterizas e internacionales'
            }
            subtitle={
              lan === 'en'
                ? 'Where global vision meets legal precision.'
                : 'Donde la visión global se encuentra con precisión legal.'
            }
            text={
              lan === 'en'
                ? 'For businesses and investors operating across jurisdictions, we deliver tailored strategies to structure deals, ensure compliance, and align local law and regulatory frameworks, while working with local counsel in each jurisdiction.'
                : 'Para empresas e inversores que operan en diferentes jurisdicciones, ofrecemos estrategias personalizadas para estructurar negocios, asegurar cumplimiento y alinear marcos de ley y regulación locales, mientras trabajamos con asesores locales en cada jurisdicción.'
            }
            items={dataCrossBorder}
            text2={
              lan === 'en'
                ? 'Global business demands local expertise in every market — and the ability to connect it all through one trusted legal partner.'
                : 'Demandas comerciales globales exigen experiencia local en cada mercado — y la capacidad de conectarlo todo a través de un socio legal confiable.'
            }
            lan={lan}
          />
        )}
      </section>
    </div>
  )
}

export default AboutText
