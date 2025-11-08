const porque = ({ lan }: { lan: string }) => {
  const Icon1 = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-12 fill-current'
      viewBox='0 0 640 640'
    >
      <path d='M184 120C184 89.1 209.1 64 240 64L264 64C281.7 64 296 78.3 296 96L296 544C296 561.7 281.7 576 264 576L232 576C202.2 576 177.1 555.6 170 528C169.3 528 168.7 528 168 528C123.8 528 88 492.2 88 448C88 430 94 413.4 104 400C84.6 385.4 72 362.2 72 336C72 305.1 89.6 278.2 115.2 264.9C108.1 252.9 104 238.9 104 224C104 179.8 139.8 144 184 144L184 120zM456 120L456 144C500.2 144 536 179.8 536 224C536 239 531.9 253 524.8 264.9C550.5 278.2 568 305 568 336C568 362.2 555.4 385.4 536 400C546 413.4 552 430 552 448C552 492.2 516.2 528 472 528C471.3 528 470.7 528 470 528C462.9 555.6 437.8 576 408 576L376 576C358.3 576 344 561.7 344 544L344 96C344 78.3 358.3 64 376 64L400 64C430.9 64 456 89.1 456 120z' />
    </svg>
  )

  const Icon2 = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 640'
      className='h-12 fill-current'
    >
      <path d='M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM241.3 383.4C256.3 399 282.4 416 320 416C357.6 416 383.7 399 398.7 383.4C407.9 373.8 423.1 373.5 432.6 382.7C442.1 391.9 442.5 407.1 433.3 416.6C411.2 439.6 373.3 464 320 464C266.7 464 228.8 439.6 206.7 416.6C197.5 407 197.8 391.8 207.4 382.7C217 373.6 232.2 373.8 241.3 383.4zM208 272C208 254.3 222.3 240 240 240C257.7 240 272 254.3 272 272C272 289.7 257.7 304 240 304C222.3 304 208 289.7 208 272zM400 240C417.7 240 432 254.3 432 272C432 289.7 417.7 304 400 304C382.3 304 368 289.7 368 272C368 254.3 382.3 240 400 240z' />
    </svg>
  )

  const Icon3 = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 640'
      className='h-12 fill-current'
    >
      <path d='M240 120L240 160L400 160L400 120C400 115.6 396.4 112 392 112L248 112C243.6 112 240 115.6 240 120zM192 160L192 120C192 89.1 217.1 64 248 64L392 64C422.9 64 448 89.1 448 120L448 160L476.1 160C488.8 160 501 165.1 510 174.1L561.9 226C570.9 235 576 247.2 576 259.9L576 336L440 336L440 320C440 306.7 429.3 296 416 296C402.7 296 392 306.7 392 320L392 336L248 336L248 320C248 306.7 237.3 296 224 296C210.7 296 200 306.7 200 320L200 336L64 336L64 259.9C64 247.2 69.1 235 78.1 226L130 174.1C139 165.1 151.2 160 163.9 160L192 160zM64 480L64 384L200 384L200 400C200 413.3 210.7 424 224 424C237.3 424 248 413.3 248 400L248 384L392 384L392 400C392 413.3 402.7 424 416 424C429.3 424 440 413.3 440 400L440 384L576 384L576 480C576 515.3 547.3 544 512 544L128 544C92.7 544 64 515.3 64 480z' />
    </svg>
  )

  const Icon4 = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 640'
      className='h-12 fill-current'
    >
      <path d='M300.9 149.2L184.3 278.8C179.7 283.9 179.9 291.8 184.8 296.7C215.3 327.2 264.8 327.2 295.3 296.7L327.1 264.9C331.3 260.7 336.6 258.4 342 258C348.8 257.4 355.8 259.7 361 264.9L537.6 440L608 384L608 96L496 160L472.2 144.1C456.4 133.6 437.9 128 418.9 128L348.5 128C347.4 128 346.2 128 345.1 128.1C328.2 129 312.3 136.6 300.9 149.2zM148.6 246.7L255.4 128L215.8 128C190.3 128 165.9 138.1 147.9 156.1L144 160L32 96L32 384L188.4 514.3C211.4 533.5 240.4 544 270.3 544L286 544L279 537C269.6 527.6 269.6 512.4 279 503.1C288.4 493.8 303.6 493.7 312.9 503.1L353.9 544.1L362.9 544.1C382 544.1 400.7 539.8 417.7 531.8L391 505C381.6 495.6 381.6 480.4 391 471.1C400.4 461.8 415.6 461.7 424.9 471.1L456.9 503.1L474.4 485.6C483.3 476.7 485.9 463.8 482 452.5L344.1 315.7L329.2 330.6C279.9 379.9 200.1 379.9 150.8 330.6C127.8 307.6 126.9 270.7 148.6 246.6z' />
    </svg>
  )

  const Icon5 = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 640'
      className='h-12 fill-current'
    >
      <path d='M119.7 263.7L150.6 294.6C156.6 300.6 164.7 304 173.2 304L194.7 304C203.2 304 211.3 307.4 217.3 313.4L246.6 342.7C252.6 348.7 256 356.8 256 365.3L256 402.8C256 411.3 259.4 419.4 265.4 425.4L278.7 438.7C284.7 444.7 288.1 452.8 288.1 461.3L288.1 480C288.1 497.7 302.4 512 320.1 512C337.8 512 352.1 497.7 352.1 480L352.1 477.3C352.1 468.8 355.5 460.7 361.5 454.7L406.8 409.4C412.8 403.4 416.2 395.3 416.2 386.8L416.2 352.1C416.2 334.4 401.9 320.1 384.2 320.1L301.5 320.1C293 320.1 284.9 316.7 278.9 310.7L262.9 294.7C258.7 290.5 256.3 284.7 256.3 278.7C256.3 266.2 266.4 256.1 278.9 256.1L313.6 256.1C326.1 256.1 336.2 246 336.2 233.5C336.2 227.5 333.8 221.7 329.6 217.5L309.9 197.8C306 194 304 189.1 304 184C304 178.9 306 174 309.7 170.3L327 153C332.8 147.2 336.1 139.3 336.1 131.1C336.1 123.9 333.7 117.4 329.7 112.2C326.5 112.1 323.3 112 320.1 112C224.7 112 144.4 176.2 119.8 263.7zM528 320C528 285.4 519.6 252.8 504.6 224.2C498.2 225.1 491.9 228.1 486.7 233.3L473.3 246.7C467.3 252.7 463.9 260.8 463.9 269.3L463.9 304C463.9 321.7 478.2 336 495.9 336L520 336C522.5 336 525 335.7 527.3 335.2C527.7 330.2 527.8 325.1 527.8 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z' />
    </svg>
  )

  const Icon6 = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 640'
      className='h-12 fill-current'
    >
      <path d='M420.9 448C428.2 425.7 442.8 405.5 459.3 388.1C492 353.7 512 307.2 512 256C512 150 426 64 320 64C214 64 128 150 128 256C128 307.2 148 353.7 180.7 388.1C197.2 405.5 211.9 425.7 219.1 448L420.8 448zM416 496L224 496L224 512C224 556.2 259.8 592 304 592L336 592C380.2 592 416 556.2 416 512L416 496zM312 176C272.2 176 240 208.2 240 248C240 261.3 229.3 272 216 272C202.7 272 192 261.3 192 248C192 181.7 245.7 128 312 128C325.3 128 336 138.7 336 152C336 165.3 325.3 176 312 176z' />
    </svg>
  )

  const data = [
    {
      title_en: 'Smart Tech Efficiency.',
      text_en: 'Legal expertise enhanced by AI and automation to make processes faster. ',
      title_es: 'Eficiencia tecnológica inteligente.',
      text_es: 'Experiencia legal mejorada por AI y automatización para mejorar el flujo de trabajo. ',
      image: '/assets/porque1.jpg',
      icon: <Icon1 />
    },
    {
      title_en: 'Transparent Fees.',
      text_en: 'No surprises. Flat fee, retainer and other arrangements available.',
      title_es: 'Tarifas transparentes.',
      text_es: 'Sin sorpresas. Tarifa plana, retención y otras disposiciones disponibles.',
      image: '/assets/porque2.jpg',
      icon: <Icon2 />
    },
    {
      title_en: '25+ years.',
      text_en: 'Navigating corporate, business, M&A, and immigration challenges.',
      title_es: '25+ años.',
      text_es: 'Navegando desafíos de negocios, corporativos, fusiones y inmigración.',
      image: '/assets/porque3.jpg',
      icon: <Icon3 />
    },
    {
      title_en: 'Hands-On Partnership.',
      text_en: 'Involved from start to finish.',
      title_es: 'Asociación en vivo.',
      text_es: 'Involucrado desde el principio hasta el final.',
      image: '/assets/porque1.jpg',
      icon: <Icon4 />
    },
    {
      title_en: 'Global Mindset.',
      text_en: 'Multilingual and multicultural approach for cross-border success.',
      title_es: 'Mente global.',
      text_es: 'Apto multi-lenguaje y multicultural para lograr éxito en el extranjero.',
      image: '/assets/porque2.jpg',
      icon: <Icon5 />
    },
    {
      title_en: 'Business-First Perspective.',
      text_en: 'Legal expertise with entrepreneurial insight.',
      title_es: 'Perspectiva empresarial.',
      text_es: 'Experiencia legal con perspectiva empresarial.',
      image: '/assets/porque3.jpg',
      icon: <Icon6 />
    }
  ]

  return (
    <section
      className='px-4 max-w-6xl m-auto flex flex-col gap-y-12 mt-20'
      id='why-trotter'
    >
      <div className='max-w-2xl m-auto flex flex-col justify-center items-center gap-y-4 text-center'>
        <h1 className='text-primary font-medium text-4xl lg:text-6xl'>
          {lan === 'en' ? 'How we work' : 'Cómo funciona'}
        </h1>
        <p className='font-medium lg:text-lg'>
          {lan === 'en'
            ? `Clients trust Trotter Law for business law, corporate transactions, M&A, and immigration matters for our practical, modern, dedicated, hands on and multilingual counsel.`
            : `Los clientes confían en Trotter Law por la legalidad de negocios, transacciones corporativas, fusiones y inmigración para nuestra asesoría práctica, moderna, dedicada, en vivo y multilingüe.`}
        </p>
      </div>
      <div className='max-w-4xl m-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {data.map((item, index) => (
          <div
            key={index}
            className='group relative border border-primary rounded-3xl p-4 flex flex-col gap-y-2 items-start aspect-[7/4] overflow-hidden'
          >
            <div
              className='absolute inset-0 bg-cover bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110'
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className='relative z-10'>
              <div className='text-primary mb-2'>{item.icon}</div>
              <h1 className='text-primary font-medium text-xl lg:text-2xl leading-5 mb-2'>
                {lan === 'en' ? item.title_en : item.title_es}
              </h1>
              <p className='leading-5'>{lan === 'en' ? item.text_en : item.text_es}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default porque
