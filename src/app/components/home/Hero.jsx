/* eslint-disable react/prop-types */
import HeroImage from '@/assets/images/hero-bg.webp'
import HeroImageMov from '@/assets/images/hero-bg-mov.webp'
import { useContext } from 'react'
import { SearchContext } from '@/context/searchBar'
import Link from 'next/link'

export const Hero = ({ loggedIn }) => {
  const { search } = useContext(SearchContext)

  return (
    <section className='w-full relative mt-32 md:mt-[120px] lg:mt-[145px]'>
      <img src={HeroImage.src} alt='Imagen de dos dentistas sonriendo' className='hidden w-full h-[80svh] object-cover shadow-[0px_0px_4px_1px_rgb(0_0_0_/_0.5)] md:block md:h-[600px]' />
      <img src={HeroImageMov.src} alt='Imagen de dos dentistas sonriendo' className='w-full h-auto object-cover shadow-[0px_0px_4px_1px_rgb(0_0_0_/_0.5)] xs:h-[90svh] md:hidden' />
      <article className='flex flex-col text-white absolute top-5 px-4 xs:top-10 md:top-auto md:bottom-10 md:max-w-md md:gap-3 lg:left-[5%] lg:bottom-16 xl:max-w-2xl xl:bottom-28'>
        <h1 className='md:text-3xl lg:text-5xl'><strong className='font-semibold'>Encuentra un especialista </strong>y agenda tu cita</h1>
        {
          loggedIn
            ? (
              <button
                className='w-max px-4 py-1 rounded-full bg-white shadow-[0px_4px_12px_-1px_rgb(0_0_0_/_0.6)] text-greenBlue font-semibold text-xl transition hover:transition hover:scale-105 lg:text-2xl'
                onClick={() => search.setSearchMenu(true)}
              >Buscar
              </button>
              )
            : (
              <Link
                href='/register'
                className='w-max flex justify-between my-2 items-center px-4 py-1 rounded-full bg-white shadow-[0px_4px_12px_-1px_rgb(0_0_0_/_0.6)] text-greenBlue font-semibold text-xl transition hover:transition hover:scale-105 lg:text-2xl'
              >
                Regístrate
              </Link>
              )
        }
        <h2 className='lg:text-base'><strong>¿Eres odontólogo?</strong>, y buscas promocionar tus servicios.</h2>
        <Link href={loggedIn ? '/register-doc' : '/register'} className='inline-block w-max text-2xl group transition duration-300 lg:text-3xl'>
          Haz clic aquí
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px] bg-white' />
        </Link>
      </article>
    </section>
  )
}
