import Form from './form'
import Newsletter from './newsletter'

const contacto = ({ lan }: { lan: string }) => {
  return (
    <section
      className='px-4 mt-20 mb-12 flex flex-col gap-y-12'
      id='contact'
    >
      <div className='flex flex-col gap-y-8 w-full'>
        <h1 className='text-primary text-center font-medium text-5xl lg:text-7xl '>
          {lan === 'en' ? 'Get in Touch' : 'Contacto'}
        </h1>
        <div className='w-full max-w-xl m-auto'>
          <Form lan={lan} />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 w-full text-center'>
        <h1 className='text-primary text-center font-medium text-xl lg:text-3xl'>
          {lan === 'en' ? 'Subscribe to our newsletter' : 'Suscríbete a nuestro newsletter'}
        </h1>
        <p className='font-medium mb-2 max-w-64 m-auto'>
          {lan === 'en'
            ? 'To receive important updates in the current changing environment.'
            : 'Para acceder a información precisa y actualizada en un panorama regulatorio dinámico.'}
        </p>
        <div className='w-full max-w-xl m-auto'>
          <Newsletter lan={lan} />
        </div>
      </div>
    </section>
  )
}

export default contacto
