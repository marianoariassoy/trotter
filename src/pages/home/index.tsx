import Layout from '../../layout/Layout'
import Hero from './hero'
import About from './about'
import Areas from './areas'
import Social from './social'
import Porque from './porque'
import Articulos from './articulos'
import Contacto from './contacto'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()

  return (
    <Layout>
      <Hero lan={lan} />
      <About lan={lan} />
      <Areas lan={lan} />
      <div
        className='w-full bg-cover'
        style={{ backgroundImage: `url(/assets/bg.webp)` }}
      >
        <Porque lan={lan} />
        <Articulos lan={lan} />
        <Social lan={lan} />
      </div>

      <Contacto lan={lan} />
    </Layout>
  )
}

export default Index
