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
      title_en: 'Mergers & Acquisitions (M&A)',
      title_es: 'Fusiones y adquisiciones (M&A)'
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
      title_en: 'Entity formation and structuring ',
      text_en: 'LLCs, corporations, partnerships',
      title_es: 'Formación de entidades y estructuración',
      text_es: 'Sociedades de responsabilidad limitada, empresas, sociedades cooperativas'
    },
    {
      title_en: 'Contract drafting and negotiation',
      text_en: 'Vendor, client, and partnership agreements',
      title_es: 'Redactar contratos y negociaciones',
      text_es: 'Contratos de proveedores, clientes y sociedades cooperativas'
    },
    {
      title_en: 'Employment law guidance',
      text_en: 'Executive agreements, compliance, non compete',
      title_es: 'Orientación jurídica sobre empleo',
      text_es: 'Contratos de ejecutivo, cumplimiento, no compete'
    },
    {
      title_en: 'Day-to-day counsel',
      text_en: 'Ongoing legal support for companies, founders and executives',
      title_es: 'Asistencia jurídica de día a día',
      text_es: 'Asistencia jurídica de empresas, fundadores y ejecutivos'
    }
  ]

  const dataCorporate = [
    {
      title_en: 'Corporate governance and compliance',
      text_en: '',
      title_es: 'Gobernanza corporativa y cumplimiento',
      text_es: ''
    },
    {
      title_en: 'Shareholder agreements and board matters',
      text_en: '',
      title_es: 'Contratos de acciones y asuntos del consejo',
      text_es: ''
    },
    {
      title_en: 'Financing, capital raises, and private placements',
      text_en: '',
      title_es: 'Financiamiento, inversiones, y colocación privada',
      text_es: ''
    },
    {
      title_en: 'Commercial transactions and joint ventures',
      text_en: '',
      title_es: 'Transacciones comerciales y inversiones',
      text_es: ''
    }
  ]

  const dataMergers = [
    {
      title_en: 'Due diligence and risk assessment',
      text_en: '',
      title_es: 'Revisión de riesgos y evaluación de riesgos',
      text_es: ''
    },
    {
      title_en: 'Negotiating terms and drafting agreementss',
      text_en: '',
      title_es: 'Redactar contratos y negociaciones',
      text_es: ''
    },
    {
      title_en: 'Closing transactions efficiently',
      text_en: '',
      title_es: 'Cerrar transacciones de forma eficiente',
      text_es: ''
    },
    {
      title_en: 'Post-closing integration planning',
      text_en: '',
      title_es: 'Planificación de integración después de cierre',
      text_es: ''
    }
  ]

  const dataInmigration = [
    {
      title_en: 'Business and investor visas: B1/B2, Naturalization, EB-1A, EB-2 NIW, O-1A, E-1, E-2, K-1',
      text_en: '',
      title_es: 'Visas de negocio y inversionista: B1/B2, Naturalización, EB-1A, EB-2 NIW, O-1A, E-1, E-2, K-1',
      text_es: ''
    },
    {
      title_en: 'Corporate immigration compliance and audits',
      text_en: '',
      title_es: 'Cumplimiento y auditoría de inmigración corporativa',
      text_es: ''
    },
    {
      title_en: 'Global relocation strategies for international teams',
      text_en: '',
      title_es: 'Estrategias de relocalización global para equipos internacionales',
      text_es: ''
    },
    {
      title_en: 'Family-based and humanitarian immigration optionsg',
      text_en: '',
      title_es: 'Opciones de inmigración basadas en la familia y humanitaria',
      text_es: ''
    }
  ]

  const dataCrossBorder = [
    {
      title_en: 'Structuring international transactions',
      text_en: '',
      title_es: 'Estructuración de transacciones internacionales',
      text_es: ''
    },
    {
      title_en: 'Compliance with foreign investment laws',
      text_en: '',
      title_es: 'Cumplimiento con las leyes de inversión extranjera',
      text_es: ''
    },
    {
      title_en: 'Multijurisdictional risk analysis',
      text_en: '',
      title_es: 'Análisis de riesgos multilingüísticos',
      text_es: ''
    },
    {
      title_en: 'Integration of tax and regulatory strategy',
      text_en: '',
      title_es: 'Integración de estrategia fiscal y regulatoria',
      text_es: ''
    }
  ]

  return (
    <div className='relative mt-12'>
      <section
        className='max-w-5xl m-auto mt-12 lg:mt-20 px-4'
        id='practice-areas'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div>
            <h1 className='text-primary font-medium text-4xl lg:text-6xl pr-20 mb-8'>
              {lan === 'en' ? 'Practice Areas ' : 'Áreas de Practica'}
            </h1>
          </div>
          <div className='flex flex-col gap-y-2 pb-12'>
            {data.map((item, index) => (
              <button
                key={index}
                className={`border border-primary rounded-full p-4 text-primary font-medium hover:text-white  ${
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
            text={
              lan === 'en'
                ? 'I provide business-focused legal services that integrate corporate law, immigration, and cross-border strategy.'
                : 'Presto servicios jurídicos centrados en los negocios que integran el derecho corporativo, la inmigración y la estrategia transfronteriza.'
            }
            image='/assets/article1.jpg'
            items={dataBusiness}
            title2={lan === 'en' ? 'Why it matters:' : '¿Por qué es importante?'}
            text2={
              lan === 'en'
                ? 'Proper business law guidance helps companies avoid disputes, attract investors, and grow sustainably.'
                : 'La orientación legal sobre negocios ayuda a las empresas a evitar disputas, atraer inversionistas y crecer sosteniblemente.'
            }
            lan={lan}
          />
        )}

        {active === 'Corporate Law & Governance' && (
          <AreasArticle
            title={lan === 'en' ? 'Corporate Law & Governance' : 'Derecho corporativo y gobernanza'}
            text={
              lan === 'en'
                ? 'I provide counsel to private and closely held companies on:'
                : 'Presto servicios jurídicos centrados en los negocios que integran el derecho corporativo, la inmigración y la estrategia transfronteriza.'
            }
            image='/assets/article2.jpg'
            items={dataCorporate}
            title2={
              lan === 'en'
                ? 'A well-structured corporate framework builds stability and protects both leadership and shareholders.'
                : 'Un marco bien estructurado de negocios construye estabilidad y protege tanto el liderazgo como los accionistas.'
            }
            text2=''
            lan={lan}
          />
        )}

        {active === 'Mergers & Acquisitions (M&A)' && (
          <AreasArticle
            title={lan === 'en' ? 'Mergers & Acquisitions (M&A)' : 'Fusiones y adquisiciones (M&A)'}
            text={
              lan === 'en'
                ? 'I guide buyers, sellers, and investors through complex deals:'
                : 'Asesoro a compradores, vendedores e inversores en transacciones complejas:'
            }
            image='/assets/article3.jpg'
            items={dataMergers}
            title2={
              lan === 'en'
                ? 'Every transaction is treated with precision, speed, and care to protect long-term value.'
                : 'Todos los procesos se tratan con precisión, velocidad y cuidado para proteger el valor a largo plazo.'
            }
            text2=''
            lan={lan}
          />
        )}

        {active === 'Immigration & Global Mobility' && (
          <AreasArticle
            title={lan === 'en' ? 'Immigration & Global Mobility' : 'Inmigración y movilidad global'}
            text={
              lan === 'en'
                ? 'I work with corporations, executives, and individuals to navigate U.S. immigration law:'
                : 'Trabajo con empresas, ejecutivos y particulares para orientarlos en materia de legislación migratoria estadounidense:'
            }
            image='/assets/article4.jpg'
            items={dataInmigration}
            title2={
              lan === 'en'
                ? 'Immigration is not just paperwork—it’s about securing futures, moving talent, and growing businesses globally.'
                : 'La inmigración no es solo papeleo, sino que se trata de asegurar el futuro, mover el talento y hacer crecer los negocios a nivel mundial.'
            }
            text2=''
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
            text={
              lan === 'en'
                ? 'For businesses and investors operating across jurisdictions, I provide:'
                : 'Para empresas e inversores que operan en diferentes jurisdicciones, ofrezco:'
            }
            image='/assets/article5.jpg'
            items={dataCrossBorder}
            title2=''
            text2=''
            lan={lan}
          />
        )}
      </section>
    </div>
  )
}

export default AboutText
