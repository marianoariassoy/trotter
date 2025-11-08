// import Image from './Image'

const areasTip = ({
  title,
  text,
  items,
  title2,
  text2,
  lan
}: {
  title: string
  text: string
  items: { title_en: string; text_en: string; title_es: string; text_es: string }[]
  title2: string
  text2: string
  lan: string
}) => {
  return (
    <article className='flex flex-col gap-y-8 lg:gap-y-12'>
      <div className='pt-8 mb-4 lg:pr-20'>
        <h1 className='text-primary font-medium text-4xl mb-2'>{title}</h1>
        <p className='font-medium text-lg'>{text}</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
        {items.map((item, index) => (
          <div
            className='rounded-3xl px-6 py-6 lg:p-8 flex flex-col gap-y-2 bg-gradient-to-b from-primary   to-primary/30 text-sm'
            key={index}
          >
            <h1 className='text-white font-semibold text-xl lg:text-2xl lg:leading-7'>
              {lan === 'en' ? item.title_en : item.title_es}
            </h1>
            <p className='fotn-medium text-lg leading-6'>{lan === 'en' ? item.text_en : item.text_es}</p>
          </div>
        ))}
      </div>
      {title2 && (
        <div className='text-center border border-primary p-8 lg:px-20 rounded-3xl flex flex-col gap-y-2'>
          <h2 className='text-primary font-medium text-2xl lg:text-3xl'>{title2}</h2>
          <p className='font-medium text-lg max-w-2xl m-auto leading-6'>{text2}</p>
        </div>
      )}
    </article>
  )
}

export default areasTip
