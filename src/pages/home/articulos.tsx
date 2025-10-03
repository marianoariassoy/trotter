import Article from './articulosItem'

const articulos = ({ lan }: { lan: string }) => {
  const data = [
    {
      title_en: 'Articles',
      title_es: 'Artículos',
      text_en: 'I am both a lawyer and entrepreneur, understanding risk, opportunity, and strategy.',
      text_es: 'Soy un abogado y empresario, comprendiendo riesgos, oportunidades y estrategias.',
      image: '/assets/article1.jpg'
    },
    {
      title_en: 'Videos',
      title_es: 'Videos',
      text_en: '25+ years spanning business law, corporate governance, M&A, and immigration.',
      text_es: '25+ años de experiencia en negocios, gobernanza corporativa, fusiones y inmigración.',
      image: '/assets/article2.jpg'
    },
    {
      title_en: 'Posts',
      title_es: 'Publicaciones',
      text_en: '25+ years spanning business law, corporate governance, M&A, and immigration.',
      text_es: '25+ años de experiencia en negocios, gobernanza corporativa, fusiones y inmigración.',
      image: '/assets/article3.jpg'
    }
  ]

  return (
    <section
      id='articles'
      className='mt-12 lg:mt-20'
    >
      <div className='px-4 max-w-5xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='lg:pr-20 pt-8'>
          <h1 className='text-primary font-medium text-4xl mb-2'>
            {lan === 'en' ? 'Articles Videos' : 'Video Artículos'}
          </h1>
          <p className='font-medium lg:text-lg mb-4'>
            {lan === 'en'
              ? 'Clients trust Trotter Law PLLC for business law, corporate transactions, M&A, and immigration matters, for its practical, modern, dedicated, hands on and multilingual counsel.'
              : 'Trotter Law PLLC es un servicio jurídico de confianza para negocios, transacciones corporativas, fusiones y inmigración, para su asesoramiento práctico, moderno, dedicado, en vivo y multilingüe.'}
          </p>
        </div>
        <div className='flex flex-col gap-y-4'>
          {data.map((item, index) => (
            <Article
              key={index}
              lan={lan}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default articulos
