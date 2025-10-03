const porque = ({ lan }: { lan: string }) => {
  const data = [
    {
      title_en: 'Business-First Perspective',
      text_en: 'I am both a lawyer and entrepreneur, understanding risk, opportunity, and strategy.',
      title_es: 'Perspectiva empresarial',
      text_es: 'Soy abogado y emprendedor, comprendiendo riesgo, oportunidad y estrategia.',
      image: '/assets/porque1.jpg'
    },
    {
      title_en: 'Comprehensive Experience',
      text_en: '25+ years spanning business law, corporate governance, M&A, and immigration.',
      title_es: 'Experiencia completa',
      text_es: '25+ años de experiencia en derechos de negocios, gobernanza corporativa, fusiones y inmigración.',
      image: '/assets/porque2.jpg'
    },
    {
      title_en: 'Multilingual Support',
      text_en: 'English, Spanish, Portuguese, Turkish for truly global communication.',
      title_es: ' Soporte multilingüe',
      text_es: 'Inglés, español, portugués, turco para comuicación realmente global.',
      image: '/assets/porque3.jpg'
    },
    {
      title_en: 'Modern, Efficient Processes',
      text_en: 'Leveraging technology to streamline immigration and legal workflows.',
      title_es: 'Procesos modernos y eficientes',
      text_es: 'Utilizando tecnología para mejorar el flujo de trabajo de inmigración y procesos legales.',
      image: '/assets/porque2.jpg'
    }
  ]

  return (
    <section
      className='px-4 max-w-5xl m-auto flex flex-col gap-y-12'
      id='why-trotter'
    >
      <div className='max-w-2xl m-auto flex flex-col justify-center items-center gap-y-4 text-center'>
        <h1 className='text-primary font-medium text-4xl lg:text-6xl'>
          {lan === 'en' ? 'Why Clients Choose Trotter Law' : '¿Por qué los clientes eligen Trotter Law?'}
        </h1>
        <p className='font-medium lg:text-lg'>
          {lan === 'en'
            ? `Clients trust Trotter Law for business law, corporate transactions, M&A, and immigration matters for our practical, modern, dedicated, hands on and multilingual counsel.`
            : `Los clientes confían en Trotter Law por la legalidad de negocios, transacciones corporativas, fusiones y inmigración para nuestra asesoría práctica, moderna, dedicada, en vivo y multilingüe.`}
        </p>
      </div>
      <div className='max-w-4xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {data.map((item, index) => (
          <div
            key={index}
            className='border border-primary rounded-3xl p-6 lg:p-8 flex flex-col gap-y-2 items-start aspect-[7/4] bg-cover bg-no-repeat'
            style={{
              backgroundImage: `url(${item.image})`
            }}
          >
            <h1 className='text-primary font-medium text-2xl lg:text-3xl'>
              {lan === 'en' ? item.title_en : item.title_es}
            </h1>
            <p className='lg:text-lg'>{lan === 'en' ? item.text_en : item.text_es}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default porque
