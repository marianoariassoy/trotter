import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const About = ({ lan }: { lan: string }) => {
  const { data, loading } = useFetch(`/texts`)
  if (!data) return null

  return (
    <div
      className='flex flex-col gap-y-8 relative bg-[url("/assets/bg-social.svg")] bg-cover lg:bg-contain bg-center bg-no-repeat'
      id='about'
    >
      <div className='w-full relative px-4'>
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
      </div>

      <div className='max-w-5xl m-auto flex flex-col gap-y-12 px-4'>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-y-2 gap-x-4'>
          <span className='py-4 px-8 font-medium bg-primary text-white text-center rounded-full'>
            M. Victoria Sánchez
          </span>
          <span className='py-4 px-8 font-medium bg-primary text-white text-center rounded-full'>
            {lan === 'en' ? 'Business & Corporate Lawyer' : 'Negocio y Asesora Legal'}
          </span>
          <span className='py-4 px-8 font-medium bg-primary text-white text-center rounded-full'>Trotter PRO</span>
        </div>

        <div className='aspect-[7/5] w-full'>
          <img
            src='/assets/profile.jpg'
            alt='about'
            className='w-full h-full rounded-4xl object-cover'
          />
        </div>
      </div>

      <div className='max-w-5xl m-auto flex flex-col gap-y-8 px-4'>
        <div className='text-sm lg:text-lg lg:leading-6 font-medium whitespace-break-spaces'>
          <h3 className='font-bold'>{lan === 'en' ? 'Founder | Trotter' : 'Fundador | Trotter'}</h3>
          {loading ? <Loader /> : lan === 'en' ? data[1].text_en : data[1].text}
        </div>
        {lan === 'en' ? (
          <div className='text-primary lg:text-xl flex flex-col lg:leading-6'>
            <span className='font-bold'>Admitted to:</span>
            <span className='font-semibold'>
              • New York <br />• Florida
            </span>
            <span className='font-bold mt-4'>Languages:</span>
            <span className='font-semibold'>
              • English (fluent) <br />
              • Spanish (native / fluent)
              <br />
              • Portuguese (fluent)
              <br />
              • Turkish (conversational)
              <br />
            </span>
          </div>
        ) : (
          <div className='text-primary text-xl flex flex-col leading-6'>
            <span className='font-bold'>Admitida en:</span>
            <span className='font-semibold'>
              • Nueva York <br />• Florida
            </span>
            <span className='font-bold mt-4'>Idiomas:</span>
            <span className='font-semibold'>
              • Inglés (fluente) <br />
              • Español (nativo / fluente)
              <br />
              • Portugués (fluente)
              <br />
              • Turco (conversacional)
              <br />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default About
