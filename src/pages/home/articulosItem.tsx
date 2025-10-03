const articulosItem = ({
  lan,
  item
}: {
  lan: string
  item: { title_en: string; title_es: string; text_en: string; text_es: string; image: string }
}) => {
  return (
    <article className='rounded-2xl p-4 flex gap-4 border border-primary'>
      <div className='aspect-square max-w-38 lg:max-w-44'>
        <img
          src={item.image}
          alt={item.title_en}
          className='h-full w-full rounded-2xl object-center object-cover'
        />
      </div>
      <div className='flex flex-col lg:gap-y-2'>
        <h1 className='text-primary font-semibold text-2xl'>{lan === 'en' ? item.title_en : item.title_es}</h1>
        <p className='fotn-medium leading-5'>{lan === 'en' ? item.text_en : item.text_es}</p>
      </div>
    </article>
  )
}

export default articulosItem
