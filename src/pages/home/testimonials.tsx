import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Testimonials = ({ lan }: { lan: string }) => {
  const { data, loading } = useFetch(`/testimonials`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='px-4 max-w-5xl m-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20'>
      {data.map((item, index) => (
        <div
          key={index}
          className='flex flex-col border border-gray-400 rounded-xl text-sm bg-white shadow'
        >
          <div className='flex flex-col gap-x-4 p-4 pb-2 border-b border-gray-400'>
            <h2 className='font-bold'>{item.title}</h2>
            <div className='flex items-center'>
              {Array.from({ length: item.stars }).map((_, i) => (
                <span key={i}>⭐️</span>
              ))}
            </div>
          </div>
          <div className='p-4 text-gray-500 pt-2'>
            <p className='text-primary font-medium'>{lan === 'en' ? item.text_en : item.text_es}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Testimonials
