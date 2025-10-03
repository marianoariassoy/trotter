const porque = ({ lan }: { lan: string }) => {
  return (
    <section className='h-[30vh] lg:h-[50vh] flex justify-center items-center relative bg-[url("/assets/bg-social.svg")] bg-contain bg-center bg-no-repeat'>
      {/* <div className='w-full h-full absolute bg-gradient-to-b from-transparent via-secondary/50 to-transparent -z-10'></div> */}

      <h1 className='max-w-7xl m-auto px-8 text-primary w-full text-center font-medium text-3xl lg:text-5xl'>
        {lan === 'es' ? 'Seguinos' : 'Follow Us'}
      </h1>
    </section>
  )
}

export default porque
