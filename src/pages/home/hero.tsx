const hora = ({ lan }: { lan: string }) => {
  return (
    <section
      className='py-[30vh] bg-[url("/assets/hero_bg.webp")] bg-cover bg-no-repeat flex items-center justify-center px-4 relative bg-[center_50%]'
      id='home'
    >
      <div className='absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white'></div>;
      <div className='relative z-10 max-w-4xl m-auto flex flex-col gap-y-8 lg:gap-y-10 items-center justify-center text-center px-8'>
        <h1 className='text-4xl lg:text-6xl text-primary font-medium'>
          {lan === 'en' ? 'Business, Corporate, and Immigration Lawyer' : 'Negocios, Empresas y Inmigración Legal'}
        </h1>
        <span className='p-4 px-8 font-medium bg-primary text-white text-center rounded-full'>
          {lan === 'en'
            ? 'Strategic Legal Guidance for Businesses and Individuals'
            : 'Asistencia Jurídica Estratégica para Negocios y Individuos'}
        </span>
        <div className='font-medium  m-auto whitespace-break-spaces'>
          {lan === 'en'
            ? `M. Victoria Sánchez, founder of Trotter Law PLLC, a Florida professional limited liability company. Over 25 years of experience, businesses and individuals build, grow, and move across borders with confidence. 
          At Trotter Law PLLC we practice combines business law, corporate transactions, mergers & acquisitions, global mobility and immigration, offering clients seamless, practical solutions.`
            : `M. Victoria Sánchez, fundadora de Trotter Law PLLC, una compañía de responsabilidad limitada de Florida. Con más de 25 años de experiencia, empresas y individuos construyen, crecen y mueven a través de fronteras con confianza. 

            En Trotter Law PLLC practicamos la combinación de derechos de negocios, transacciones corporativas, fusiones y inmigración, ofreciendo soluciones prácticas seamless.`}
        </div>
      </div>
    </section>
  )
}

export default hora
