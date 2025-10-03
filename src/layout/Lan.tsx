import { language } from '../lib/data'
import { useDataContext } from '../context/useDataContext'

const Lan = () => {
  const { lan, setLan } = useDataContext()

  return (
    <div className='flex flex-row lg:flex-col gap-x-2 leading-3 text-sm items-start'>
      {language.map((item, index) => (
        <button
          key={index}
          className={`uppercase cursor-pointer ${item.tag === lan ? 'font-bold' : ' '} hover:text-secondary`}
          onClick={() => setLan(item.tag)}
        >
          {item.title}
        </button>
      ))}
    </div>
  )
}

export default Lan
