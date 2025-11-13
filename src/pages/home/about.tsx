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
      {/* <div className='w-full relative px-4'>
        <div className='absolute h-40 w-full z-20 inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/0'></div>

        <img
          src='/assets/img-left.webp'
          alt='about'
          className='h-full absolute -ml-[65%] lg:-ml-[200px]'
        />
        <img
          src='/assets/img-right.webp'
          alt='about'
          className='h-full absolute right-0 -mr-[65%] lg:-mr-[200px]'
        />

        <div className='text-center text-primary flex flex-col gap-2 lg:gap-y-6 pt-12 pb-40 relative z-10'>
          <h2 className='font-bold text-xl lg:text-2xl'>{lan === 'en' ? 'Founder | Trotter' : 'Fundador | Trotter'}</h2>
          <hr className='border-primary w-32 mx-auto border-2 border-t' />
          <h1 className='text-4xl lg:text-6xl text-primary font-medium flex flex-col items-center justify-center'>
            {lan === 'en' ? (
              <>
                <span>Tech-Savvy</span>
                <span>Business Law</span>
              </>
            ) : (
              <>
                <span>Tech-Savvy</span>
                <span>Negocios Legales</span>
              </>
            )}
          </h1>
        </div>
      </div> */}

      {/* <div className='max-w-5xl m-auto flex flex-col gap-y-12 px-4'>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-y-2 gap-x-4'>
          <span className='py-4 px-8 font-medium bg-primary text-white text-center rounded-full'>
            M. Victoria Sánchez
          </span>
          <span className='py-4 px-8 font-medium bg-primary text-white text-center rounded-full'>
            {lan === 'en' ? 'Business & Corporate Lawyer' : 'Negocio y Asesora Legal'}
          </span>
          <span className='py-4 px-8 font-medium bg-primary text-white text-center rounded-full'>Trotter PRO</span>
        </div>

    
      </div> */}

      <div className='aspect-square lg:aspect-video w-full max-w-4xl m-auto z-20 px-4 mt-28'>
        <img
          src='https://backend.ligadecapitanes.com.ar/trotter/images-static/aboutimage.jpg'
          alt='about'
          className='w-full h-full rounded-4xl object-cover'
        />
      </div>

      <div className='max-w-4xl m-auto flex flex-col gap-y-4 px-4'>
        <h3 className='font-medium text-center text-xl lg:text-3xl'>
          Global mindset. Tech powered. Client first. Real results.
        </h3>
        <div className='lg:text-lg lg:leading-6 font-medium whitespace-break-spaces text-center'>
          {loading ? <Loader /> : lan === 'en' ? data[1].text_en : data[1].text}
        </div>
      </div>
    </div>
  )
}

export default About
