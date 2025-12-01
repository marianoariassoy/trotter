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
            : 'Tecnología que acelera. Experiencia que respalda. Cercanía que construye relaciones.'}
        </h3>
        <div className='lg:text-lg lg:leading-6 font-medium whitespace-break-spaces text-center'>
          {loading ? <Loader /> : lan === 'en' ? data[1].text_en : data[1].text}
        </div>

        <h2 className='text-xl lg:text-2xl text-primary font-bold text-center my-4'>
          {lan === 'en' ? 'CREDENTIALS' : 'CREDENCIALES'}
        </h2>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 text-center font-medium'>
          <div className='flex flex-col'>
            <h3 className='text-primary font-bold text-xl'>{lan === 'en' ? 'EDUCATION:' : 'EDUCACIÓN:'}</h3>
            <span>&bull; LLM Harvard Law School</span>
            <span>&bull; Universidad Católica Argentina (Medalla de Oro)</span>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-primary font-bold uppercase text-xl'>
              {lan === 'en' ? 'ADMITTED TO PRACTICE:' : 'Admisiones profesionales:'}
            </h3>
            <span>&bull; New York</span>
            <span>&bull; Argentina</span>
            <span>&bull; Florida</span>
          </div>
          <div className='flex flex-col'>
            {lan === 'en' ? (
              <>
                <h3 className='text-primary font-bold text-xl'>LANGUAGES</h3>
                <span>&bull; English</span>
                <span>&bull; Spanish</span>
                <span>&bull; Portuguese</span>
                <span>&bull; Turkish</span>
              </>
            ) : (
              <>
                <h3 className='text-primary font-bold text-xl'>IDIOMAS</h3>
                <span>&bull; Inglés</span>
                <span>&bull; Español</span>
                <span>&bull; Portugués</span>
                <span>&bull; Turco</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
