const areasTip = ({
  title,
  text,
  image,
  items,
  title2,
  text2,
  lan
}: {
  title: string
  text: string
  image: string
  items: { title_en: string; text_en: string; title_es: string; text_es: string }[]
  title2: string
  text2: string
  lan: string
}) => {
  return (
    <article className='flex flex-col gap-y-4 lg:gap-y-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='pt-8 mb-4 lg:pr-20'>
          <h1 className='text-primary font-medium text-4xl mb-2'>{title}</h1>
          <p className='font-medium text-lg'>{text}</p>
        </div>
        <div className='aspect-[7/5]'>
          <img
            src={image}
            alt={title}
            className='h-full w-full rounded-4xl object-center object-cover'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
        {items.map((item, index) => (
          <div
            className='rounded-3xl px-6 py-6 lg:p-8 flex flex-col gap-y-2 bg-gradient-to-b from-primary via-primary to-primary/50'
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
        <div className='text-center border border-primary p-8 rounded-3xl flex flex-col gap-y-2'>
          <h2 className='text-primary font-medium text-2xl lg:text-3xl'>{title2}</h2>
          <p className='font-medium text-lg max-w-2xl m-auto leading-6'>{text2}</p>
        </div>
      )}
    </article>
  )
}

export default areasTip
