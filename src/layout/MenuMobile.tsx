import { useDataContext } from '../context/useDataContext'
import { menu } from '../lib/data'
import Lan from './Lan'
import { Link } from 'wouter'

const MenuMobile = () => {
  const { lan } = useDataContext()

  const scrollToSection = (id: string) => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('#menu-mobile')?.classList.toggle('show-menu')

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
    <div
      className='fixed w-screen top-30 show-menu px-4 z-40 transition-all duration-500 ease-in-out lg:hidden'
      id='menu-mobile'
    >
      <nav className='p-8 rounded-4xl bg-white/60 backdrop-blur-lg flex flex-col justify-center items-center gap-4'>
        <ul className='flex flex-col gap-2 font-semibold items-center'>
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={`/#` + item.tag}
                onClick={() => scrollToSection(item.tag)}
                className='hover:text-secondary'
              >
                {lan === 'es' ? item.title_es : item.title_en}
              </Link>
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
          <li className='my-8'>
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
    </div>
  )
}

export default MenuMobile
