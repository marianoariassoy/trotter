import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Hora = ({ lan }: { lan: string }) => {
  const { data, loading } = useFetch(`/texts`)
  if (!data) return null

  return (
    <section
      className='py-[30vh] bg-[url("/assets/hero_bg.webp")] bg-cover bg-no-repeat flex items-center justify-center px-4 relative bg-[center_50%]'
      id='home'
    >
      <div className='absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white'></div>;
      <div className='relative z-10 max-w-4xl m-auto flex flex-col gap-y-8 lg:gap-y-10 items-center justify-center text-center px-8'>
        <h1 className='text-4xl lg:text-6xl text-primary font-medium'>
          {lan === 'en' ? 'Business, Corporate, and Immigration Lawyer' : 'Negocios, Empresas y Inmigración Legal'}
        </h1>
        <span className='p-4 px-8 font-medium bg-primary text-white text-center rounded-full'>
          {lan === 'en'
            ? 'Strategic Legal Guidance for Businesses and Individuals'
            : 'Asistencia Jurídica Estratégica para Negocios y Individuos'}
        </span>
        <div className='font-medium m-auto whitespace-break-spaces'>
          {loading ? <Loader /> : lan === 'en' ? data[0].text_en : data[0].text}
        </div>
      </div>
    </section>
  )
}

export default Hora
