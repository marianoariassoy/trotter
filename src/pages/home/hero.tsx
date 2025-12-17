import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Hora = ({ lan }: { lan: string }) => {
  const { data, loading } = useFetch(`/texts`)
  if (!data) return null

  return (
    <section
      className='bg-[url("/assets/hero_bg.webp")] bg-cover bg-no-repeat items-center justify-center px-4 relative bg-[center_50%] flex flex-col'
      id='home'
    >
      <div className='aspect-square lg:aspect-video w-full mt-40 mb-4 max-w-4xl m-auto z-20'>
        <img
          src='https://backend.ligadecapitanes.com.ar/trotter/images-static/mainimage.jpg'
          alt='logo'
          className='w-full h-full rounded-4xl object-cover z-20'
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white'></div>;
      <div className='relative z-10 max-w-4xl m-auto flex flex-col gap-y-4 items-center justify-center text-center px-8'>
        <div className='flex flex-col gap-y-4'>
          <div className='text-4xl lg:text-6xl font-medium flex items-center justify-center flex-wrap gap-x-2'>
            <h2 className='text-primary'>Trotter Law</h2>
            <h1 className='text-primary'>
              {lan === 'en'
                ? 'Smart, Strategic, and Trusted Legal counsel'
                : 'Asesoría legal inteligente, estratégica y de confianza'}
            </h1>
          </div>

          <span className='font-medium text-center text-2xl'>
            {lan === 'en'
              ? 'Modern Law. Powered by technology with human approach.'
              : 'Derecho moderno. Impulsado por la tecnología con enfoque humano.'}
          </span>
        </div>

        <div className='font-medium m-auto whitespace-break-spaces text-[1.1rem]'>
          {loading ? <Loader /> : lan === 'en' ? data[0].text_en : data[0].text}
        </div>
        <a
          href='https://calendly.com/m-victoria-sanchez-post/30min?back=1&month=2025-07'
          target='_blank'
          rel='noopener noreferrer'
          className='p-4 px-8 text-lg mt-4 font-medium bg-primary text-white text-center rounded-full hover:bg-black/90 uppercase'
        >
          {lan === 'en' ? 'Book Appointment' : 'Agendar consulta'}
        </a>
      </div>
    </section>
  )
}

export default Hora
