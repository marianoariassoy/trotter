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
      className='mt-12 lg:mt-28'
    >
      <div className='px-4 max-w-5xl m-auto flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-2/5'>
          <h1 className='text-primary font-medium text-5xl lg:text-7xl mb-2 pr-20'>
            {lan === 'en' ? 'Resources' : 'Blog'}
          </h1>
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
