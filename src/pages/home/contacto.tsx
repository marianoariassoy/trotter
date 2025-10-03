import Form from './form'

const contacto = ({ lan }: { lan: string }) => {
  return (
    <section
      className='px-4 mt-12 lg:mt-20'
      id='contact'
    >
      <h1 className='text-primary text-center font-medium text-3xl lg:text-5xl mb-12'>
        {lan === 'en' ? 'Get in Touch' : 'Contáctenos'}
      </h1>
      <div className='max-w-5xl m-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-y-8'>
          <div className='font-semibold text-lg'>
            <h3>Trotter Law PLLC</h3>
            <p className='text-primary'>M. Victoria Sánchez, Esq.</p>
          </div>
          <div className='text-primary flex flex-col gap-y-2 lg:mt-6'>
            <div className='flex items-center gap-x-2'>
              <span className='border rounded-full border-primary p-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 640'
                  className='fill-current w-5 h-5'
                >
                  <path d='M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z' />
                </svg>
              </span>
              <a
                href='mailto:info@trotter.pro'
                className='font-semibold hover:text-secondary'
              >
                info@trotter.pro
              </a>
            </div>
            <div className='flex items-center gap-x-2'>
              <span className='border rounded-full border-primary p-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 640'
                  className='fill-current w-5 h-5'
                >
                  <path d='M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z' />
                </svg>
              </span>
              <span className='font-semibold'>+1 (786) 832 0763</span>
            </div>
          </div>
          <div className='flex'>
            <a
              href='https://calendly.com/m-victoria-sanchez-post/30min?back=1&month=2025-07'
              target='_blank'
              rel='noreferrer'
              className='border text-primary font-semibold px-8 py-3 rounded-full hover:text-secondary hover:border-secondary flex items-center gap-x-2'
            >
              {lan === 'es' ? 'Reservar una cita' : 'Book Appointment'}

              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 640 640'
                className='fill-current w-5 h-5'
              >
                <path d='M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z' />
              </svg>
            </a>
          </div>
        </div>
        <div className='mt-8 lg:mt-0'>
          <Form lan={lan} />
        </div>
      </div>
    </section>
  )
}

export default contacto
