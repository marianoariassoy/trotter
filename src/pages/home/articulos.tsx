import Article from './articulosItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Articulos = ({ lan }: { lan: string }) => {
  const { data, loading } = useFetch(`/home`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section
      id='articles'
      className='mt-12 lg:mt-20'
    >
      <div className='px-4 max-w-5xl m-auto flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-2/5'>
          <h1 className='text-primary font-medium text-4xl lg:text-7xl mb-2'>
            {lan === 'en' ? 'Articles Videos Posts' : 'Video Artículos y Posts'}
          </h1>
          <p className='font-medium lg:text-xl mb-4'>
            {lan === 'en'
              ? 'Articles, videos, and posts on Linkedin.'
              : 'Publicaciones, artículos y videos en Linkdin.'}
          </p>
        </div>
        <div className='flex flex-col gap-y-4 lg:w-3/5'>
          {data.map((item, index) => (
            <Article
              key={index}
              lan={lan}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articulos
