// import Image from './Image'

const areasTip = ({
  title,
  subtitle,
  text,
  items,
  text2,
  lan
}: {
  title: string
  subtitle: string
  text: string
  items: { title_en: string; text_en: string; title_es: string; text_es: string }[]
  text2: string
  lan: string
}) => {
  return (
    <article className='flex flex-col gap-y-8 lg:gap-y-12'>
      <div className='pt-8 mb-4 flex flex-col'>
        <h1 className='text-3xl lg:text-5xl text-primary font-bold'>{title}</h1>
        <span className='text-xl lg:text-3xl text-primary font-bold mb-8'>{subtitle}</span>
        <p className='font-medium text-xl'>{text}</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-12'>
        {items.map((item, index) => (
          <div
            className='rounded-3xl px-6 py-6 lg:p-8 flex flex-col gap-y-2 bg-gradient-to-b from-primary to-primary/50 text-sm relative'
            key={index}
          >
            <div className='absolute text-8xl font-bold -top-12 text-primary text-outline'>{index + 1}</div>
            <h1 className='text-white font-semibold text-xl leading-6 mt-4'>
              {lan === 'en' ? item.title_en : item.title_es} —
            </h1>
            <p className='font-medium text-lg leading-5'>{lan === 'en' ? item.text_en : item.text_es}</p>
          </div>
        ))}
      </div>
      <div className='text-center border border-primary p-8 lg:px-20 rounded-4xl flex flex-col gap-y-2'>
        <h2 className='text-primary font-medium text-2xl lg:text-4xl'>
          {lan === 'en' ? 'Why it matters:' : '¿Por qué es relevante?'}
        </h2>
        <p className='font-medium text-lg lg:text-xl max-w-3xl m-auto leading-6'>{text2}</p>
      </div>
    </article>
  )
}

export default areasTip
