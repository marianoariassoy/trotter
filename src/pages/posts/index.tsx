import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { useLocation, useParams, Link } from 'wouter'
import Image from '../home/Image'

const Index = () => {
  const { lan } = useDataContext()
  const section = useLocation()[0].split('/')[1]
  let title = ''
  let subtitle = ''

  if (section === 'articles') {
    if (lan === 'en') {
      title = 'Articles'
      subtitle = 'Article'
    } else {
      title = 'Artículos'
      subtitle = 'Artículo'
    }
  } else if (section === 'videos') {
    title = 'Videos'
    subtitle = 'Video'
  } else {
    if (lan === 'en') {
      title = 'Posts'
      subtitle = 'Post'
    } else {
      title = 'Publicaciones'
      subtitle = 'Publicación'
    }
  }

  const { slug } = useParams() as { slug: string }

  const post = [
    {
      title_en: 'B-1',
      title_es: 'B-1',
      url: '/articles/B-1'
    },
    {
      title_en: 'Seguros Empresariales',
      title_es: 'Seguros Empresariales',
      url: '/articles/understanding-the-b-1-visa-business-travel-without-u-s-employment'
    },
    {
      title_en: 'Acuerdos de No competencia',
      title_es: 'Acuerdos de No competencia',
      url: '/articles/seguros-empresariales'
    },
    {
      title_en: 'M&A en 2025',
      title_es: 'M&A en 2025',
      url: '/articles/acuerdos-de-no-competencia'
    }
  ]
  return (
    <Layout>
      <section className='max-w-5xl m-auto pt-30 flex flex-col gap-y-4 lg:gap-y-8 px-4'>
        <div className='flex flex-col gap-y-8'>
          <h1 className='text-primary font-medium text-3xl lg:text-5xl'>{title}</h1>
          <div className='flex gap-2 items-center flex-wrap'>
            {post.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className={`border border-primary px-8 py-2 text-lg rounded-2xl font-medium hover:text-white hover:bg-primary transition-all ${
                  '/' + section + '/' + slug === item.url ? 'bg-primary text-white' : ''
                }`}
              >
                {lan === 'en' ? item.title_en : item.title_es}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-y-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-y-4 pt-8'>
              <h2 className='text-primary font-medium text-3xl lg:text-5xl mb-2'>{subtitle}</h2>
              <span className='font-semibold lg:text-3xl text-tertiary'>
                Understanding the B-1 Visa: Business Travel Without U.S. Employment
              </span>
              <span className='text-lg italic'> By M. Victoria Sanchez, Esq.</span>
            </div>
            <div>
              <div className='aspect-square lg:aspect-[7/5] overflow-hidden rounded-2xl'>
                <Image
                  src='/images/article1.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div>
            <p className='lg:text-lg'>
              When planning travel to the United States for business, it is essential to understand the limits of what a
              B-1 visa allows. Missteps can have serious consequences, including denial of entry and complications for
              future visa applications. A B-1 visa is intended for legitimate business activities, but it does not
              permit employment in the U.S. The distinction between business and employment can at times be difficult to
              see, which is why preparation and clarity are critical. The B-1 visa is built on a few fundamental
              principles. The traveler must remain employed by and receive payment from a foreign company, with the
              principal place of business and accrual of profits remaining outside the United States. The visit must be
              temporary and for a clearly defined business purpose. Finally, the traveler must maintain strong ties to
              their home country and have no intent to immigrate. Customs and Border Protection officers have broad
              discretion at ports of entry, and admission is never guaranteed. To be admitted, a traveler must establish
              three things: a residence abroad that they do not intend to abandon, an intent to remain in the U.S. only
              for a limited period, and a specific business-related purpose for the trip. Understanding what activities
              are permissible under a B-1 visa is critical. Examples of permitted activities include attending business
              meetings, negotiating contracts, and participating in conferences or trade shows. The traveler cannot
              perform work for a U.S. entity. Prohibited activities include managing day-to-day operations of a U.S.
              business, providing direct services to U.S. clients, being placed on a U.S. payroll, or taking on
              responsibilities that resemble employment. Because officers have significant discretion, documentation is
              critical. Travelers should be prepared to present organized evidence that supports their eligibility for
              B-1 admission. This includes proof of ongoing employment abroad, such as an employment letter, recent pay
              statements, and business cards. It is equally important to show meaningful ties to the home country, like
              property ownership, family relationships, or other indicators of an intent to return. The traveler should
              carry an invitation letter from the U.S. affiliate describing the purpose of the visit and clearly stating
              that no U.S. employment will be undertaken. Flight details, hotel reservations, and proof of funds to
              cover the trip should also be readily available. Having this documentation in order helps the traveler
              clearly explain their purpose and demonstrate nonimmigrant intent during inspection. In short, the B-1
              visa is a useful tool for those engaging in legitimate business activities in the U.S., so long as those
              activities do not cross into employment. Remaining employed and paid abroad, demonstrating strong
              home-country ties, and traveling with complete documentation are key to avoiding issues at the border.
              When questions arise, it is always best to consult with experienced counsel before traveling. Careful
              preparation is the best safeguard against delays, misunderstandings, and the serious consequences of a
              denied entry. Legal Notice: The information provided in this presentation is for informational purposes
              only. It does not constitute legal or tax advice and should not be interpreted as such. Laws, cases, and
              statutes may change, and errors or omissions may exist. You should always conduct your own independent
              research. Neither M. Victoria Sánchez nor Trotter Law PLLC is responsible for any actions taken based on
              the information contained in this presentation.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
