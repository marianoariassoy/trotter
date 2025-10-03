import { menu } from '../lib/data'
import { useDataContext } from '../context/useDataContext'
import { Link } from 'wouter'
import Lan from './Lan'

const Header = () => {
  const { lan } = useDataContext()

  const OpenMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('#menu-mobile')?.classList.toggle('show-menu')
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className='fixed w-screen top-6 z-50 px-2'>
      <div className='w-full m-auto max-w-6xl py-6 px-8 rounded-full bg-white/60 backdrop-blur-lg flex justify-between items-center gap-4'>
        <div>
          <Link
            to='/'
            className='hover:opacity-80'
          >
            <img
              src='/assets/logo-main.svg'
              alt='logo'
              className='h-5 lg:h-6'
            />
          </Link>
        </div>
        <nav className='hidden lg:block'>
          <ul className='flex gap-4 font-semibold text-sm items-center flex-wrap'>
            {menu.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(item.tag)}
                  className='hover:text-secondary cursor-pointer'
                >
                  {lan === 'es' ? item.title_es : item.title_en}
                </button>
              </li>
            ))}
            <li>
              <a
                href='https://www.trotter.pro/'
                target='_blank'
                rel='noreferrer'
                className='hover:text-secondary'
              >
                {lan === 'es' ? 'TROTTER PRO' : 'TROTTER PRO'}
              </a>
            </li>
            <li>
              <a
                href='https://calendly.com/m-victoria-sanchez-post/30min?back=1&month=2025-07'
                target='_blank'
                rel='noreferrer'
                className='border px-4 py-3 rounded-full hover:text-secondary hover:border-secondary'
              >
                {lan === 'es' ? 'Reservar una cita' : 'Book Appointment'}
              </a>
            </li>
            <li>
              <Lan />
            </li>
          </ul>
        </nav>

        <div
          className='nav-menu lg:hidden'
          onClick={OpenMenu}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
