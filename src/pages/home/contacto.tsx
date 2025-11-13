import Form from './form'

const contacto = ({ lan }: { lan: string }) => {
  return (
    <section
      className='px-4 mt-20'
      id='contact'
    >
      <h1 className='text-primary text-center font-medium text-5xl lg:text-7xl mb-12'>
        {lan === 'en' ? 'Get in Touch' : 'Contáctenos'}
      </h1>
      <div className='max-w-2xl m-auto'>
        <Form lan={lan} />
      </div>
    </section>
  )
}

export default contacto
