import { menu } from '../lib/data'
import { useDataContext } from '../context/useDataContext'
import { Link } from 'wouter'
import Lan from './Lan'
import { useState } from 'react'

const Header = () => {
  const { lan } = useDataContext()
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false)
  const [openSubMenuArticles, setOpenSubMenuArticles] = useState<boolean>(false)

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
      <div className='w-full m-auto max-w-6xl py-6 px-6 rounded-full bg-white/60 backdrop-blur-lg flex justify-between items-center gap-4'>
        <div>
          <Link
            to='/'
            className='hover:opacity-80'
          >
            <img
              src='/assets/logo-main.svg'
              alt='logo'
              className='h-5 lg:h-7'
            />
          </Link>
        </div>
        <nav className='hidden lg:block'>
          <ul className='flex gap-3 font-semibold text-sm items-center flex-wrap'>
            {menu.map((item, index) => (
              <li
                key={index}
                className='relative flex justify-center'
              >
                <>
                  {item.tag === 'practice-areas' ? (
                    <>
                      <button
                        className='hover:text-secondary cursor-pointer flex items-center gap-x-1 uppercase'
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
                  ) : item.tag === 'articles' ? (
                    <>
                      <button
                        className='hover:text-secondary cursor-pointer flex items-center gap-x-1 uppercase'
                        onClick={() => setOpenSubMenuArticles(!openSubMenuArticles)}
                      >
                        {lan === 'es' ? item.title_es : item.title_en}

                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 640 640'
                          className={`h-4 w-4 text-current transition-all ${openSubMenuArticles ? 'rotate-180' : ''}`}
                        >
                          <path d='M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z' />
                        </svg>
                      </button>
                      {openSubMenuArticles && (
                        <div
                          className='absolute top-14 w-60 bg-white/60 backdrop-blur-lg p-4 rounded-2xl flex-col gap-y-4 z-50 hidden lg:flex'
                          onClick={() => setOpenSubMenuArticles(!openSubMenuArticles)}
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
                      className='hover:text-secondary cursor-pointer uppercase'
                    >
                      {lan === 'es' ? item.title_es : item.title_en}
                    </Link>
                  )}
                </>
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
              <a
                href='https://www.linkedin.com/in/m-victoria-sanchez-5b84251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                target='_blank'
                rel='noreferrer'
                className='hover:text-secondary'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 640'
                  className='h-7 w-7'
                  fill='currentColor'
                >
                  <path d='M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z' />
                </svg>
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
