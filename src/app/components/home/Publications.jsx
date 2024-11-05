import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Link from 'next/link'

export const Publications = () => {
  const publications = [
    {
      id: 1,
      imgSrc: 'https://pub-4c96926c5f5a4d74ad4be60f6b07a4a6.r2.dev/post-1.webp',
      title: 'Día Mundial de la Salud Dental',
      clinic: 'Arte Dental Condesa',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, incidunt facilis molestiae adipisci impedit quis atque',
      href: '#'
    },
    {
      id: 2,
      imgSrc: 'https://pub-4c96926c5f5a4d74ad4be60f6b07a4a6.r2.dev/post-2.webp',
      title: 'Cepillos Dentales para Brackets',
      clinic: 'Clínica Dental Orthodentic',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, incidunt facilis molestiae adipisci impedit quis atque',
      href: '#'
    },
    {
      id: 3,
      imgSrc: 'https://pub-4c96926c5f5a4d74ad4be60f6b07a4a6.r2.dev/post-3.webp',
      title: 'Laboratorio Digital',
      clinic: 'Dental Ramac',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, incidunt facilis molestiae adipisci impedit quis atque',
      href: '#'
    },
    {
      id: 4,
      imgSrc: 'https://pub-4c96926c5f5a4d74ad4be60f6b07a4a6.r2.dev/post-1.webp',
      title: 'Día Mundial de la Salud Dental',
      clinic: 'Arte Dental Condesa',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, incidunt facilis molestiae adipisci impedit quis atque',
      href: '#'
    },
    {
      id: 5,
      imgSrc: 'https://pub-4c96926c5f5a4d74ad4be60f6b07a4a6.r2.dev/post-2.webp',
      title: 'Cepillos Dentales para Brackets',
      clinic: 'Clínica Dental Orthodentic',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, incidunt facilis molestiae adipisci impedit quis atque',
      href: '#'
    },
    {
      id: 6,
      imgSrc: 'https://pub-4c96926c5f5a4d74ad4be60f6b07a4a6.r2.dev/post-3.webp',
      title: 'Laboratorio Digital',
      clinic: 'Dental Ramac',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, incidunt facilis molestiae adipisci impedit quis atque',
      href: '#'
    }
  ]
  const optionsSplide = {
    type: 'loop',
    arrows: false,
    pagination: false,
    perPage: 1,
    perMove: 1,
    width: '100%',
    gap: '25px',
    padding: '5rem',
    focus: 'center',
    autoWidth: true,
    breakpoints: {
      767: {
        padding: 0
      }
    }
  }
  return (
    <aside className='w-full h-full max-w-[612px] flex flex-col bg-white dark:bg-darkLightColor shadow-xl rounded-xl px-4 py-4 gap-3 xsm:py-6 xsm:px-6 sm:py-8 sm:px-10 lg:py-6 lg:px-6 xl:py-8 xl:px-10'>
      <h3 className='font-bold text-xl dark:text-white md:text-3xl'>Últimas Publicaciones</h3>
      <div className=''>
        <Splide
          aria-labelledby='Slider publications'
          options={optionsSplide}
        >
          {
            publications.map((publication) => (
              <SplideSlide key={publication.id}>
                <article className='rounded-xl bg-white shadow-xl w-full h-auto max-w-64 border dark:bg-darkColor dark:text-white border-gray-500 hover:cursor-grab xxs:max-w-72'>
                  <img src={publication.imgSrc} alt={`Banner de la publicación ${publication.title} de ${publication.clinic}`} className='w-full h-auto aspect-square rounded-t-xl' />
                  <div className='p-4 gap-2 max-h-44 flex justify-between flex-col'>
                    <div>
                      <h4 className='font-bold overflow-hidden text-ellipsis whitespace-nowrap'>{publication.title}</h4>
                      <h5 className='text-xs'>{publication.clinic}</h5>
                    </div>
                    <p className='text-xs max-h-16 overflow-hidden text-ellipsis'>{publication.text}</p>
                    <Link
                      href={publication.href}
                      className='inline-block w-full uppercase text-xs py-1 bg-blue-700 rounded-full transition text-white text-center hover:transition hover:bg-blue-900'
                    >
                      Ver publicación
                    </Link>
                  </div>
                </article>
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
    </aside>
  )
}
