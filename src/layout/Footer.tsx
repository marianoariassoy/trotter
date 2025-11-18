import { useDataContext } from '../context/useDataContext'
import { Link } from 'wouter'

const Footer = () => {
  const { lan } = useDataContext()

  return (
    <footer className='mt-12 lg:mt-20 px-4 text-sm lg:text-base'>
      <div className='bg-primary pt-20 rounded-4xl rounded-b-none px-4 lg:px-0'>
        <div className='max-w-5xl m-auto text-white'>
          <img
            src='/assets/logo-white.svg'
            alt='logo'
            className='h-6 lg:h-8 mb-4 lg:mb-8'
          />
          <div className='flex justify-between gap-4 mb-8'>
            <div className='flex flex-col gap-y-4 items-start'>
              <div className='flex flex-col'>
                <h3 className='font-semibold text-xl'>M. Victoria Sánchez, Esq.</h3>
                <span>{lan === 'es' ? 'Licenciada en Florida & New York' : 'Licensed in Florida & New York'}</span>
              </div>
              <div className='flex flex-col'>
                <h3 className='font-semibold text-xl'>{lan === 'es' ? 'Contacto.' : 'Contact.'}</h3>
                <span>+1 (786) 832-0763</span>
                <a
                  href='mailto:victoria@trotter.law'
                  className='underline'
                >
                  victoria@trotter.law
                </a>
              </div>
            </div>
            <div className='flex flex-col gap-y-4 text-white'>
              <h3 className='font-bold text-xl'>{lan === 'es' ? 'Seguinos' : 'Follow Us'}</h3>
              <div className='flex items-center gap-x-4'>
                <a
                  href='https://www.linkedin.com/in/m-victoria-sanchez-5b84251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-secondary'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 640 640'
                    fill='currentColor'
                    className='h-10 w-10 transition-all'
                  >
                    <path d='M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className='border-t border-white mt-8 pt-8 flex flex-col lg:flex-row justify-between lg:items-center pb-8 gap-2 text-sm lg:text-base'>
            <div>Copyright Trotter Law 2025</div>
            <div className='flex items-center gap-x-4 flex-wrap'>
              <Link
                href='https://www.trotter.pro/privacy-policy'
                target='_blank'
                rel='noreferrer'
                className='hover:underline'
              >
                {lan === 'es' ? 'Política de privacidad' : 'Privacy Policy'}
              </Link>
              <span>|</span>
              <Link
                href='https://www.trotter.pro/terms-of-use'
                className='hover:underline'
                target='_blank'
                rel='noreferrer'
              >
                {lan === 'es' ? 'Términos de uso' : 'Terms and conditions'}
              </Link>
              <span>|</span>
              <Link
                href='https://www.trotter.pro/legal-disclaimer'
                className='hover:underline'
                target='_blank'
                rel='noreferrer'
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
