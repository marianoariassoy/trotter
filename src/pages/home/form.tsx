import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import { dataContact } from '../../lib/data'

const Form = ({ lan }: { lan: string }) => {
  type Inputs = {
    name: string
    email: string
    message: string
  }

  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)

    axios.post('http://fabricalacefira.com.ar/backend/send-email.php', { ...data }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const Error = () => {
    return <div className='text-sm font-medium mt-1 text-secondary pl-4'>{dataContact[lan].required}</div>
  }

  return (
    <>
      {error ? (
        <span className='text-2xl font-bold'>{dataContact[lan].error}</span>
      ) : sended ? (
        <span className='text-3xl font-bold'>{dataContact[lan].thanks}</span>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col items-end gap-y-2'
        >
          <div className='w-full'>
            <input
              className='w-full border border-primary h-11 rounded-full px-4 text-sm font-medium'
              placeholder={dataContact[lan].name}
              {...register('name', { required: true })}
            />
            {errors.name && <Error />}
          </div>
          <div className='w-full'>
            <input
              className='w-full border border-primary h-11 rounded-full px-4 text-sm font-medium'
              placeholder={dataContact[lan].email}
              {...register('email', { required: true })}
            />
            {errors.email && <Error />}
          </div>
          <textarea
            className='w-full border border-primary h-44 rounded-3xl p-4 text-sm font-medium'
            placeholder={dataContact[lan].message}
            {...register('message')}
          />
          <div className='flex justify-center'>
            {sending ? (
              <BeatLoader className='mt-6' />
            ) : (
              <button
                type='submit'
                id='button-form'
                className='font-semibold text-white h-11 transition px-8 rounded-full bg-primary hover:bg-secondary uppercase text-sm cursor-pointer'
              >
                {dataContact[lan].send}
              </button>
            )}
          </div>
        </form>
      )}
    </>
  )
}

export default Form
