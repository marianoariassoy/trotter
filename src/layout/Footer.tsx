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
            <div className='flex flex-col gap-y-4 text-white'>
              <h3 className='font-bold'>SOCIALS</h3>
              <div className='flex items-center gap-x-4'>
                <a
                  href='https://www.instagram.com/trotter.pro/'
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
                <a
                  href='https://www.linkedin.com/company/trotter-pro/'
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
                    <path d='M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z' />
                  </svg>
                </a>
              </div>
            </div>
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
