import AreasArticle from './areasArticle'
import { useState } from 'react'

const AboutText = ({ lan }: { lan: string }) => {
  const [active, setActive] = useState<string>('Business Law')

  const data = [
    {
      title_en: 'Business Law',
      title_es: 'DERECHO COMERCIAL'
    },
    {
      title_en: 'Corporate Law & Governance',
      title_es: 'DERECHO SOCIETARIO Y GOBERNANZA CORPORATIVA'
    },
    {
      title_en: 'Mergers & Acquisitions',
      title_es: 'MERGERS & ACQUISITIONS (M&A)'
    },
    {
      title_en: 'Immigration & Global Mobility',
      title_es: 'Inmigración y movilidad global'
    },
    {
      title_en: 'Cross-Border & International Transactions',
      title_es: 'TRANSACCIONES TRANSFRONTERIZAS E INTERNACIONALES'
    }
  ]

  const dataBusiness = [
    {
      title_en: 'Form and structure your company',
      text_en: 'LLCs, corporations, and partnerships designed for growth and investor readiness.',
      title_es: 'Constituya y estructure su empresa',
      text_es: 'Creación de LLCs, corporaciones y sociedades diseñadas para crecer y atraer inversores.'
    },
    {
      title_en: 'Draft and negotiate solid contracts',
      text_en: 'Vendor, client, and partnership agreements that protect your business interests',
      title_es: 'Redacte y negocie contratos sólidos',
      text_es: 'Acuerdos con proveedores, clientes y socios comerciales que protegen los intereses de su empresa.'
    },
    {
      title_en: 'Manage your team with conﬁdence',
      text_en: 'Clear executive agreements, employee and compliance manuals and non-compete policies.',
      title_es: 'Gestione su equipo con confianza',
      text_es: 'Redacción de contratos ejecutivos, manuales de empleados y cumplimiento, y políticas de no competencia.'
    },
    {
      title_en: 'Get dat-to-day legal support',
      text_en:
        'Ongoing guidance for founders, managers and executives to navigate challenges as your business evolves.',
      title_es: 'Reciba acompañamiento legal en el día a día',
      text_es:
        'Asesoramiento continuo para fundadores, gerentes y ejecutivos a fin de navegar desafíos a medida que su negocio evoluciona..'
    }
  ]

  const dataCorporate = [
    {
      title_en: 'Build solid governance structures',
      text_en: 'Shareholder agreements, bylaws, and board policies that promote clarity and trust. ',
      title_es: 'Construir estructuras de gobierno corporativo sólidas',
      text_es: 'Acuerdos de accionistas, estatutos y políticas de directorio que promueven claridad y confianza..'
    },
    {
      title_en: 'Draft and negotiate solid contracts',
      text_en:
        'Manage corporate compliance — ensuring your company meets Florida and federal requirements while minimising risk.',
      title_es: 'Gestionar el cumplimiento corporativo',
      text_es: 'Asegurar que su empresa cumpla con los requisitos de Florida y federales, minimizando riesgos.'
    },
    {
      title_en: 'Manage your team with conﬁdence',
      text_en: 'Navigate ﬁnancing and capital raises — legal support for safes, convertible notes, and equity rounds.',
      title_es: 'Navegar procesos de financiamiento y levantamiento de capitalo',
      text_es: 'Asesoramiento legal para SAFEs, notas convertibles y rondas de equity.'
    },
    {
      title_en: 'Structure strategic partnerships and joint ventures',
      text_en: 'From negotiation to execution, aligning interests and protecting value.',
      title_es: 'Estructurar alianzas estratégicas y joint ventures',
      text_es: 'Desde la negociación hasta la ejecución, alineando intereses y protegiendo valor.'
    }
  ]

  const dataMergers = [
    {
      title_en: 'Conduct thorough due diligence',
      text_en: 'Uncover risks and identify opportunities before closing.',
      title_es: 'Llevando a cabo una due diligence exhaustiva',
      text_es: 'Identificación de riesgos y oportunidades antes del cierre.'
    },
    {
      title_en: 'Structure and negotiate deals',
      text_en: 'Purchase agreements, investment terms, and shareholder arrangements that safeguard your interests.',
      title_es: 'Estructurando y negociando deals',
      text_es: 'Contratos de compra, términos de inversión y acuerdos entre accionistas que resguardan sus intereses. '
    },
    {
      title_en: 'Close transactions efﬁciently',
      text_en: 'From drafting to execution, ensuring compliance.',
      title_es: 'Cerrando operaciones de M&A de manera eficiente',
      text_es: 'Desde la redacción hasta la ejecución, garantizando cumplimiento en cada instancia.'
    },
    {
      title_en: 'Plan post-closing integrations',
      text_en: 'Supporting smooth transitions for teams, operations, and governance.',
      title_es: 'Planificando la integración posterior al cierre',
      text_es: 'Acompañamiento para transiciones fluidas en equipos, operaciones y gobernanza corporativa..'
    }
  ]

  const dataInmigration = [
    {
      title_en: 'Design the right visa strategy ',
      text_en:
        'For founders, investors,  and professionals (B1/B2, EB-1A, EB-2  NIW, O-1A, E-1, E-2, naturalization and more).',
      title_es: 'Diseñamos la estrategia de visa adecuada',
      text_es:
        'Para fundadores, inversores y profesionales (B1/B2, EB-1A, EB-2 NIW, O-1A, E-1, E-2, naturalización, entre otras).'
    },
    {
      title_en: 'Ensure compliance and readiness ',
      text_en: 'Guiding corporations through immigration audits and documentation.',
      title_es: 'Garantizamos el cumplimiento y preparación',
      text_es: 'Acompañando a corporaciones en auditorías migratorias y gestión documental..'
    },
    {
      title_en: 'Support global mobility programs ',
      text_en: 'Facilitating smooth relocation and work authorisation for international teams',
      title_es: 'Respaldamos programas de movilidad global l',
      text_es: 'Facilitando procesos de relocation y autorizaciones de trabajo para equipos internacionales.'
    }
  ]

  const dataCrossBorder = [
    {
      title_en: 'Structure and negotiate international',
      text_en: 'Transactions that align with your strategic objectives.',
      title_es: 'Estructuramos y negociamos transacciones internacionales',
      text_es: 'Alineadas con sus objetivos estratégicos.'
    },
    {
      title_en: 'Ensure compliance with foreign investment, corporate, and regulatory ',
      text_en: 'Requirements in multiple jurisdictions.',
      title_es: 'Garantizamos el cumplimiento ',
      text_es: 'En materia de inversión extranjera, normas societarias y regulación en diversas jurisdicciones.'
    },
    {
      title_en: 'Assess and manage multijurisdictional risks',
      text_en: 'From due diligence to dispute prevention.',
      title_es: 'Evaluamos y gestionamos riesgos multijurisdiccionales',
      text_es: 'Desde la due diligence hasta la prevención de disputas.'
    },
    {
      title_en: 'Integrate legal, and operational strategies',
      text_en: 'For smooth cross-border execution.',
      title_es: 'Integramos estrategias legales y operativas',
      text_es: 'Para una ejecución transfronteriza fluida.'
    }
  ]

  return (
    <div className='relative mt-20'>
      <section
        className='max-w-5xl m-auto px-4'
        id='practice-areas'
      >
        <div>
          <h1 className='text-primary font-medium text-5xl lg:text-7xl pr-20 mb-8'>
            {lan === 'en' ? 'Practice Areas ' : 'Áreas de Práctica'}
          </h1>

          <div className='flex items-center gap-2 flex-wrap mb-4'>
            {data.map((item, index) => (
              <button
                key={index}
                className={`border text-sm border-primary rounded-full p-4 text-primary font-semibold hover:text-white uppercase ${
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
                : 'Construya o desarrolle su negocio con claridad y confianza.'
            }
            text={
              lan === 'en'
                ? 'We combine corporate law, and strategy — helping founders and companies make informed decisions from day one. '
                : 'Combinamos el derecho corporativo y la estrategia — ayudando a los fundadores y las empresas a tomar decisiones informadas desde el día uno.'
            }
            items={dataBusiness}
            text2={
              lan === 'en'
                ? 'Smart business law isn’t just about avoiding risks — it’s about building a strong foundation that lets you grow sustainably and focus on what matters most: your vision. OUR MANTRA IS M&A READY FROM DAY ONE.'
                : 'El derecho empresarial inteligente no se trata solo de evitar riesgos: se trata de construir una base sólida que le permita crecer de manera sostenible y enfocarse en lo que realmente importa: su visión. Nuestro mantra: listos para M&A desde el día uno.'
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
                : 'Decisiones inteligentes y estratégicas para su empresa.'
            }
            text={
              lan === 'en'
                ? 'Tailored legal counsel to private and closely held companies, guiding founders, boards, and executives to:'
                : 'Asesoramiento legal a medida para compañías privadas y de capital cerrado, guiando a fundadores, directorios y ejecutivos para:'
            }
            items={dataCorporate}
            text2={
              lan === 'en'
                ? 'Strong governance and smart corporate structuring are the backbone of sustainable growth.'
                : 'Una gobernanza corporativa sólida y una estructura societaria inteligente son la columna vertebral de un crecimiento sostenible..'
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
                : 'Crezca, fusiónese o venda su empresa con certeza.'
            }
            text={
              lan === 'en'
                ? 'End-to-end legal guidance for buyers, sellers, and investors to minimise risk, protect value, and move smoothly through each stage of the process:'
                : 'Asesoramiento legal integral para compradores, vendedores e inversores, orientado a minimizar riesgos, proteger valor y acompañar cada etapa del proceso de M&A:'
            }
            items={dataMergers}
            text2={
              lan === 'en'
                ? 'Smart M&A deal planning and precise execution turn complex transactions into lasting growth — protecting your investment and setting the stage for future success.'
                : 'Una planificación inteligente y una ejecución precisa en procesos de M&A convierten transacciones complejas en crecimiento sostenible, protegen su inversión y preparan el terreno para el éxito futuro.'
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
                : 'Expanda sus oportunidades — y su equipo — con confianza.'
            }
            text={
              lan === 'en'
                ? 'We help corporations, executives, and individuals navigate U.S. immigration law with clarity and precision — from investor and talent visas to full corporate relocations.'
                : 'Asesoramos a corporaciones, ejecutivos e individuos en derecho migratorio de los Estados Unidos — desde visas para inversores y profesionales hasta relocations.'
            }
            items={dataInmigration}
            text2={
              lan === 'en'
                ? 'Strategic immigration guidance empowers companies and individuals to grow, move, and thrive within the U.S. — without uncertainty or unnecessary delays.'
                : 'Un asesoramiento migratorio estratégico permite que empresas e individuos crezcan, se trasladen y prosperen dentro de los Estados Unidos — sin incertidumbre ni demoras innecesarias.'
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
                : 'Donde la visión global se encuentra con la precisión jurídica.'
            }
            text={
              lan === 'en'
                ? 'For businesses and investors operating across jurisdictions, we deliver tailored strategies to structure deals, ensure compliance, and align local law and regulatory frameworks, while working with local counsel in each jurisdiction.'
                : 'Asesoramos a empresas e inversores que operan en múltiples jurisdicciones de la siguiente manera:'
            }
            items={dataCrossBorder}
            text2={
              lan === 'en'
                ? 'Global business demands local expertise in every market — and the ability to connect it all through one trusted legal partner.'
                : 'El negocio global exige conocimiento local en cada mercado — y la capacidad de integrarlo todo a través de un socio estratégico legal de confianza..'
            }
            lan={lan}
          />
        )}
      </section>
    </div>
  )
}

export default AboutText
