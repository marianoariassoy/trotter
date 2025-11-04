import { menu } from '../lib/data'
import { useDataContext } from '../context/useDataContext'
import { Link } from 'wouter'
import Lan from './Lan'
import { useState } from 'react'

const Header = () => {
  const { lan } = useDataContext()
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false)

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
              <li
                key={index}
                className='relative flex justify-center'
              >
                {item.subMenu && item.subMenu.length > 0 ? (
                  <>
                    <button
                      className='hover:text-secondary cursor-pointer flex items-center gap-x-1'
                      onClick={() => setOpenSubMenu(!openSubMenu)}
                    >
                      {lan === 'es' ? item.title_es : item.title_en}

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 640 640'
                        className={`h-4 w-4 text-current transition-all ${openSubMenu ? 'rotate-180' : ''}`}
                      >
                        <path d='M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z' />
                      </svg>
                    </button>

                    {openSubMenu && (
                      <div
                        className='absolute top-14 w-60 bg-white/60 backdrop-blur-lg p-4 rounded-2xl flex-col gap-y-4 z-50 hidden lg:flex'
                        onClick={() => setOpenSubMenu(!openSubMenu)}
                      >
                        {item.subMenu.map((itemSubmenu, index) => (
                          <Link
                            key={index}
                            to={`/#` + item.tag}
                            onClick={() => scrollToSection(item.tag)}
                            className='hover:text-secondary cursor-pointer leading-4'
                          >
                            {lan === 'es' ? itemSubmenu.title_es : itemSubmenu.title_en}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    onClick={() => scrollToSection(item.tag)}
                    to={`/#` + item.tag}
                    className='hover:text-secondary cursor-pointer'
                  >
                    {lan === 'es' ? item.title_es : item.title_en}
                  </Link>
                )}
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
