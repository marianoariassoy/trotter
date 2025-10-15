import Article from './articulosItem'

const articulos = ({ lan }: { lan: string }) => {
  const data = [
    {
      title_en: 'Articles',
      title_es: 'Artículos',
      subtitle_en: 'Understanding the B-1 Visa: Business Travel Without U.S. Employment',
      subtitle_es: 'Entendiendo el visado B-1: Viajes de Negocios sin Trabajo de Estado Unidos',
      text_en:
        'When planning travel to the United States for business, it is essential to understand the limits of what a B-1 visa allowBy M. Victoria Sanchez, Esq. When planning travel to the United States for business, it is essential to understand the limits of what a B-1 visa allow por M. Victoria Sanchez',
      text_es:
        'Cuando planee viajes a los Estados Unidos para negocios, es esencial entender los límites de lo que permite el visado B-1Por M. Victoria Sanchez',
      image: '/images/article1.jpg',
      url: '/articles/B-1'
    },
    {
      title_en: 'Videos',
      title_es: 'Videos',
      subtitle_en: 'About to sign a contract?',
      subtitle_es: '¿Acabas de firmar un contrato?',
      text_en:
        'Before you do, consult with an attorney.Many times, clients reach out to us after they’ve already signed a contract — only to find themselves facing problems: abusive clauses, unforeseen obligations, disproportionate penalties, or legal limitations they didn’t understand at the time of signing. .',
      text_es:
        'Antes de hacerlo, consulte con un abogado.A veces, los clientes llegan a nosotros después de que ya hayan firmado un contrato — solo para encontrarse con problemas: cláusulas abusivas, obligaciones inesperadas, multas proporcionales o limitaciones legales que no entendieron al momento de firmar.Mi recomendación: Es siempre más fácil, más rápido y más costoso revisar el contrato antes que intentar solucionar conflictos más tarde.',
      image: '/assets/article3.jpg',
      url: '/videos/about-to-sign-a-contract'
    },
    {
      title_en: 'Posts',
      title_es: 'Publicaciones',
      subtitle_en: 'H-1B: ACTUALIZACIONES IMPORTANTES',
      subtitle_es: 'H-1B: ACTUALIZACIONES IMPORTANTES',
      text_en:
        'Legal Notice: The information provided in this presentation has only informational purposes. It is not legal advice nor tax advice and should not be construed as such. Laws, cases, and statutes may change, and there may be errors or omissions. You always must conduct your own independent research. ',
      text_es:
        'Aviso Legal: La información proporcionada en esta presentación tiene únicamente fines informativos. No constituye asesoramiento legal ni fiscal y no debe interpretarse como tal. Las leyes, casos y estatutos pueden cambiar, y pueden existir errores u omisiones. Usted siempre debe realizar su propia investigación independiente. Ni M. Victoria Sánchez ni Trotter Law PLLC son responsables por cualquier acción tomada basada en la información contenida en esta presentación.',
      image: '/images/article2.jpg',
      url: '/posts/h-1b-actualizaciones-importantes'
    }
  ]

  return (
    <section
      id='articles'
      className='mt-12 lg:mt-20'
    >
      <div className='px-4 max-w-5xl m-auto flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-2/5'>
          <h1 className='text-primary font-medium text-4xl lg:text-7xl mb-2'>
            {lan === 'en' ? 'Articles Videos Posts' : 'Video Artículos y Posts'}
          </h1>
          <p className='font-medium lg:text-xl mb-4'>
            {lan === 'en'
              ? 'Articles, videos, and posts on Linkedin.'
              : 'Publicaciones, artículos y videos en Linkdin.'}
          </p>
        </div>
        <div className='flex flex-col gap-y-4 lg:w-3/5'>
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
