import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const About = ({ lan }: { lan: string }) => {
  const { data, loading } = useFetch(`/texts`)
  if (!data) return null

  return (
    <div
      className='flex flex-col gap-y-8 relative bg-[url("/assets/bg-social.svg")] bg-cover lg:bg-contain bg-center bg-no-repeat mt-8'
      id='about'
    >
      <div className='aspect-square lg:aspect-video w-full max-w-4xl m-auto z-20 px-4 mt-28'>
        <img
          src='https://backend.ligadecapitanes.com.ar/trotter/images-static/aboutimage.jpg'
          alt='about'
          className='w-full h-full rounded-4xl object-cover'
        />
      </div>

      <div className='max-w-4xl m-auto flex flex-col gap-y-4 px-4'>
        <h3 className='font-medium text-center text-xl lg:text-3xl'>
          {lan === 'en'
            ? 'Global mindset. Tech - powered. Clients first. Real results.'
            : 'Mente global. Tecnología - impulsada. Clientes primero. Resultados reales.'}
        </h3>
        <div className='lg:text-lg lg:leading-6 font-medium whitespace-break-spaces text-center'>
          {loading ? <Loader /> : lan === 'en' ? data[1].text_en : data[1].text}
        </div>
      </div>
    </div>
  )
}

export default About
