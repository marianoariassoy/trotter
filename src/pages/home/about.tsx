const about = ({ lan }: { lan: string }) => {
  return (
    <div
      className='flex flex-col gap-y-8 relative bg-[url("/assets/bg-social.svg")] bg-cover lg:bg-contain bg-center bg-no-repeat bg-opa'
      id='about'
    >
      <div className='relative px-4'>
        <div className='absolute h-40 w-full z-20 inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/0'></div>

        <img
          src='/assets/img-left.webp'
          alt='about'
          className='h-full absolute -ml-[55%] lg:-ml-[200px]'
        />
        <img
          src='/assets/img-right.webp'
          alt='about'
          className='h-full absolute right-0 -mr-[55%] lg:-mr-[200px]'
        />

        <div className='text-center text-primary flex flex-col gap-2 lg:gap-y-6 pt-12 pb-40 relative z-10'>
          <h2 className='font-bold text-xl lg:text-2xl'>{lan === 'en' ? 'Founder | Trotter' : 'Fundador | Trotter'}</h2>
          <hr className='border-primary w-32 mx-auto border-2 border-t' />
          <h1 className='text-4xl lg:text-6xl text-primary font-medium flex flex-col items-center justify-center'>
            {lan === 'en' ? (
              <>
                <span>Tech-Savvy</span>
                <span>Business Law</span>
              </>
            ) : (
              <>
                <span>Tech-Savvy</span>
                <span>Negocios Legales</span>
              </>
            )}
          </h1>
        </div>
      </div>

      <div className='max-w-5xl m-auto flex flex-col gap-y-12 px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-y-2 gap-x-4'>
          <span className='py-4 px-8 font-medium bg-primary text-white text-center rounded-full'>
            M. Victoria Sánchez
          </span>
          <span className='py-4 px-8 font-medium bg-primary text-white text-center rounded-full'>
            {lan === 'en' ? 'Business & Corporate Lawyer' : 'Negocio y Asesora Legal'}
          </span>
          <span className='py-4 px-8 font-medium bg-primary text-white text-center rounded-full'>Trotter PRO</span>
        </div>
        <div className='aspect-[7/5]'>
          <img
            src='/assets/profile.jpg'
            alt='about'
            className='w-full h-full rounded-4xl object-cover'
          />
        </div>
      </div>

      <div className='max-w-5xl m-auto flex flex-col gap-y-8 px-4'>
        <div className='text-sm lg:text-lg lg:leading-6 font-medium'>
          <h3 className='font-bold'>{lan === 'en' ? 'Founder | Trotter' : 'Fundador | Trotter'}</h3>
          {lan === 'en' ? (
            <p>
              Tech-Savvy Business Law Services Founder | Cross-Border Deal Architect | Community Volunteer
              <br />
              <br />
              Victoria Sanchez is the founder of <strong>Trotter Law PLLC</strong> a lawfirm. Trotter Law blends
              top-tier legal acumen with smart technology to deliver faster, “smarter”, and more cost-effective legal
              solutions—designed with the client’s journey in mind. Our motto is Client First.
              <br />
              <br />
              A seasoned attorney and Harvard Law graduate, Victoria brings over two decades of experience in venture
              capital, M&A, and international structuring. Her legal career spans multinational financial institutions,
              tech firms and top-tier law firms across Latin America, the U.S., and Europe. She has advised startups,
              growth-stage companies, and investors navigating complex cross-border transactions and regulatory
              landscapes. Her professional journey includes roles at Patagon.com, Mastercard, JP Morgan Securities,
              Greenberg Traurig and PAG.LAW, as well as leadership positions in private firms and entrepreneurial
              ventures.
              <br />
              <br />
              Victoria’s fluency in English, Spanish, Portuguese, and conversational Turkish reflects her truly global
              practice—and client base. Her multicultural insight is matched by her commitment to making legal services
              more accessible and transparent through the thoughtful integration of automation and AI.
              <br />
              <br />
              Beyond her practice, she serves as an advisor to the board of <strong>WeInvest LATAM</strong> , an NGO of
              female investors in Latam working together to educate and to advance innovative opportunities within Latin
              America. She is also a dedicated community volunteer, supporting initiatives for public education, an avid
              reader and a tennis player.
              <br />
              <br />
              Victoria founded <strong>Trotter Law PLLC</strong> to provide{' '}
              <strong>business-focused legal services</strong> that integrate corporate law, immigration, and
              cross-border strategy. She also launched Trotter Pro, to bring efficiency and clarity to U.S. immigration
              processes, and created <strong> El Libro Mágico Amarillo</strong> , a personalized children’s book project
              for Spanish-speaking families.
            </p>
          ) : (
            <p>
              Fundadora de servicios jurídicos especializados en tecnología | Arquitecta de acuerdos transfronterizos |
              Voluntaria comunitaria
              <br />
              <br />
              Victoria Sánchez es la fundadora del bufete de abogados Trotter Law PLLC. Trotter Law combina una gran
              perspicacia jurídica con tecnología inteligente para ofrecer soluciones legales más rápidas, «más
              inteligentes» y más rentables, diseñadas teniendo en cuenta la trayectoria del cliente. Nuestro lema es
              «El cliente es lo primero».
              <br />
              <br />
              Victoria, una abogada con amplia experiencia y graduada en Derecho por Harvard, cuenta con más de dos
              décadas de experiencia en capital riesgo, fusiones y adquisiciones y estructuración internacional. Su
              carrera jurídica abarca instituciones financieras multinacionales, empresas tecnológicas y bufetes de
              abogados de primer nivel en América Latina, Estados Unidos y Europa. Ha asesorado a empresas emergentes,
              empresas en fase de crecimiento e inversores en transacciones transfronterizas complejas y entornos
              normativos. Su trayectoria profesional incluye puestos en Patagon.com, Mastercard, JP Morgan Securities,
              Greenberg Traurig y PAG.LAW, así como puestos de liderazgo en empresas privadas y proyectos empresariales.
              <br />
              <br />
              El dominio de Victoria del inglés, el español, el portugués y el turco coloquial refleja su práctica
              verdaderamente global y su base de clientes. Su visión multicultural se complementa con su compromiso de
              hacer que los servicios jurídicos sean más accesibles y transparentes mediante la integración cuidadosa de
              la automatización y la inteligencia artificial.
              <br />
              <br />
              Más allá de su práctica, es asesora de la junta directiva de WeInvest LATAM, una ONG de mujeres inversoras
              de Latinoamérica que trabajan juntas para educar y promover oportunidades innovadoras en América Latina.
              Ella es
            </p>
          )}
        </div>
        {lan === 'en' ? (
          <div className='text-primary lg:text-xl flex flex-col lg:leading-6'>
            <span className='font-bold'>Admitted to:</span>
            <span className='font-semibold'>
              • New York <br />• Florida
            </span>
            <span className='font-bold mt-4'>Languages:</span>
            <span className='font-semibold'>
              • English (fluent) <br />
              • Spanish (native / fluent)
              <br />
              • Portuguese (fluent)
              <br />
              • Turkish (conversational)
              <br />
            </span>
          </div>
        ) : (
          <div className='text-primary text-xl flex flex-col leading-6'>
            <span className='font-bold'>Admitida en:</span>
            <span className='font-semibold'>
              • Nueva York <br />• Florida
            </span>
            <span className='font-bold mt-4'>Idiomas:</span>
            <span className='font-semibold'>
              • Inglés (fluente) <br />
              • Español (nativo / fluente)
              <br />
              • Portugués (fluente)
              <br />
              • Turco (conversacional)
              <br />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default about
