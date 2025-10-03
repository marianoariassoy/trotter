import { useDataContext } from '../context/useDataContext'
import { Link } from 'wouter'

const Footer = () => {
  const { lan } = useDataContext()

  return (
    <footer className='mt-12 lg:mt-20 px-4'>
      <div className='bg-primary pt-20 rounded-4xl rounded-b-none px-4 lg:px-0'>
        <div className='max-w-5xl m-auto text-white'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8'>
            <div className='flex flex-col gap-y-4 items-start'>
              <img
                src='/assets/logo-white.svg'
                alt='logo'
                className='h-6 lg:h-8 mb-4 lg:mb-8'
              />
              <div className='flex flex-col'>
                <h3 className='font-semibold text-xl'>M. Victoria Sánchez, Esq.</h3>
                <span>{lan === 'es' ? 'Licenciada en Florida & New York' : 'Licensed in Florida & New York'}</span>
              </div>
              <div className='flex flex-col'>
                <h3 className='font-semibold text-xl'>{lan === 'es' ? 'Contacto.' : 'Contact.'}</h3>
                <span>+1 (786) 832-0763</span>
                <a
                  href='mailto:info@trotter.pro'
                  className='underline'
                >
                  info@trotter.pro
                </a>
              </div>

              <a
                href='https://www.trotter.pro/'
                target='_blank'
                rel='noreferrer'
                className='border border-white font-semibold px-6 py-2 rounded-full hover:text-secondary hover:border-secondary text-2xl mt-4'
              >
                Trotter.pro
              </a>
            </div>
            <div className='flex justify-center lg:justify-end items-center'>
              <img
                src='/assets/social.png'
                alt='social'
                className='w-full max-w-70'
              />
            </div>
          </div>
          <div className='text-sm lg:text-base'>
            {lan === 'es' ? (
              <p>
                Esta versión coloca la negociación de negocios al frente, posicionando usted como tanto un negocio como
                un experto en inmigración mientras destaca su perspectiva transbordadora única y experiencia
                empresarial. También establece una fuerte base para el crecimiento de SEO.
              </p>
            ) : (
              <p>
                This version places business law at the forefront, positioning you as both a corporate and immigration
                expert while highlighting your unique cross-border perspective and entrepreneurial experience. It also
                establishes a strong foundation for SEO growth.
              </p>
            )}
          </div>
          <div className='border-t border-white mt-8 pt-8 flex flex-col lg:flex-row justify-between lg:items-center pb-8 gap-2 text-sm lg:text-base'>
            <div>Copyright Trotter Law 2025</div>
            <div className='flex items-center gap-x-4 flex-wrap'>
              <Link
                href='/'
                className='hover:underline'
              >
                {lan === 'es' ? 'Política de privacidad' : 'Privacy Policy'}
              </Link>
              <span>|</span>
              <Link
                href='/'
                className='hover:underline'
              >
                {lan === 'es' ? 'Términos de uso' : 'Terms and condictions'}
              </Link>
              <span>|</span>
              <Link
                href='/'
                className='hover:underline'
              >
                {lan === 'es' ? 'Aviso legal' : 'Legal disclaimer'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
