import Image from './Image'
import { Link } from 'wouter'

const articulosItem = ({
  lan,
  item
}: {
  lan: string
  item: {
    title_en: string
    title_es: string
    subtitle_en: string
    subtitle_es: string
    text_en: string
    text_es: string
    image: string
    url: string
  }
}) => {
  return (
    <article className='rounded-2xl p-4 flex flex-col lg:flex-row items-start gap-4 gap-x-6 border border-primary bg-white relative'>
      <div className='lg:w-2/5'>
        <Link href={item.url}>
          <div className='aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl hover:opacity-80 cursor-pointer transition-all'>
            <Image
              src={item.image}
              alt={item.title_en}
            />
          </div>
        </Link>
      </div>
      <div className='lg:w-3/5 flex items-end gap-2'>
        <div className='flex flex-col lg:gap-y-2 '>
          <h1 className='text-primary font-bold text-3xl'>{lan === 'en' ? item.title_en : item.title_es}</h1>
          <h2 className='font-semibold text-sm'>{lan === 'en' ? item.subtitle_en : item.subtitle_es}</h2>
          <p className='fotn-medium leading-5 text-sm'>{lan === 'en' ? item.text_en : item.text_es}</p>
        </div>
        <div>
          <Link
            href={item.url}
            className='font-bold text-3xl absolute bottom-4 right-4 hover:text-secondary'
          >
            +
          </Link>
        </div>
      </div>
    </article>
  )
}

export default articulosItem
