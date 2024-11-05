'use client'

import { useState, useEffect, useCallback } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Urgencias from '../../assets/images/icons/urgencias.webp'
import Brackets from '../../assets/images/icons/tirantes.webp'
import Extra from '../../assets/images/icons/extraccion-dental.webp'
import Periodoncia from '../../assets/images/icons/Periodoncia.webp'
import Bebe from '../../assets/images/icons/bebe.webp'
import Brillante from '../../assets/images/icons/brillante.webp'
import Diente from '../../assets/images/icons/diente.webp'
import Endodoncia from '../../assets/images/icons/endodoncia.webp'
import Microscopio from '../../assets/images/icons/microscopio.webp'
import Knife from '../../assets/images/icons/bisturi.webp'
import Implante from '../../assets/images/icons/implante-dental.webp'
import Limpieza from '../../assets/images/icons/limpieza-dental.webp'
import Link from 'next/link'

export const SliderSpecialties = () => {
  const specialties = [
    {
      name: 'Preventiva',
      icon: Diente,
      href: '/'
    },
    {
      name: 'Implantología',
      icon: Implante,
      href: '/'
    },
    {
      name: 'Endodoncia',
      icon: Endodoncia,
      href: '/'
    },
    {
      name: 'Cirugía Bucal',
      icon: Knife,
      href: '/'
    },
    {
      name: 'Urgencias',
      icon: Urgencias,
      className: 'text-red-600',
      href: '/'
    },
    {
      name: 'Laboratorio Dental',
      icon: Microscopio,
      href: '/'
    },
    {
      name: 'Ortodoncia',
      icon: Brackets,
      href: '/'
    },
    {
      name: 'Cosmetica Dental',
      icon: Brillante,
      href: '/'
    },
    {
      name: 'Odontopediatría',
      icon: Bebe,
      href: '/'
    },
    {
      name: 'Extracción Dental',
      icon: Extra,
      href: '/'
    },
    {
      name: 'Periodoncia',
      icon: Periodoncia,
      href: '/'
    },
    {
      name: 'Limpieza Dental',
      icon: Limpieza,
      href: '/'
    },
    {
      name: 'Urgencias',
      icon: Urgencias,
      className: 'text-red-600',
      href: '/'
    },
    {
      name: 'Odontopediatría',
      icon: Bebe,
      href: '/'
    },
    {
      name: 'Laboratorio Dental',
      icon: Microscopio,
      href: '/'
    },
    {
      name: 'Ortodoncia',
      icon: Brackets,
      href: '/'
    },
    {
      name: 'Cosmetica Dental',
      icon: Brillante,
      href: '/'
    },
    {
      name: 'Odontopediatría',
      icon: Bebe,
      href: '/'
    }
  ]
  const sliderOptions = {
    pagination: false,
    role: 'banner',
    width: '100%',
    label: 'Slider de Especialidades',
    autoWidth: true,
    perMove: 9,
    focus: 'center',
    gap: '15px',
    breakpoints: {
      767: {
        arrows: false,
        perMove: 5
      }
    }
  }

  const [hideTopMenu, setHideTopMenu] = useState(false)
  const [y, setY] = useState(0)

  const handleScroll = useCallback(() => {
    if (y > 50) {
      setHideTopMenu(true)
    } else {
      setHideTopMenu(false)
    }
    setY(window.scrollY)
  }, [y])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])
  return (
    <section className={`w-full flex justify-start bg-white p-2 shadow-lg fixed top-[68px] z-[2] transition duration-100 dark:bg-darkColor md:top-[60px] md:justify-center ${hideTopMenu ? 'lg:top-[63px]' : 'lg:top-[88px]'}`}>
      <div className='w-full flex max-w-3xl slider-specialties md:justify-center md:items-center xl:max-w-6xl'>
        <Splide
          aria-labelledby='Slider especialidades'
          options={sliderOptions}
          tag='section'
        >
          {
            specialties.map((specialty, i) => (
              <SplideSlide key={i}>
                <Link href='/search-click' className={`flex flex-col justify-center items-center px-1 rounded-xl bg-white w-max gap-1 transition dark:bg-darkColor ${specialty.className} hover:scale-105`}>
                  <img src={specialty.icon.src} alt={`Icono de ${specialty.name}`} className='w-7 h-auto aspect-square dark:text-white' />
                  <span className='text-xs text-nowrap dark:text-white'>{specialty.name}</span>
                </Link>
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
    </section>
  )
}
