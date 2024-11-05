'use client'

import { LoginContext } from '@/context/login'
import { useContext } from 'react'
import { Check, SettingsIcon } from '../components/icons/Icons'
import Link from 'next/link'

export const Hero = () => {
  const { personalData, userData } = useContext(LoginContext)

  const getSlug = (name) => {
    if (name) {
      const nameString = name.split(' ')
      const slug = nameString.join('-')

      return slug.toLocaleLowerCase()
    }
  }

  return (
    <section className='w-full justify-center items-center flex px-4'>
      <div className='w-full flex justify-start items-center max-w-7xl py-1 bg-primaryBlue rounded-xl gap-8 shadow-lg relative'>
        <img className='rounded-full aspect-square object-cover border-2 bg-white border-white w-1/6 max-w-56 shadow-lg' src={personalData?.img} alt={`Foto de perfil de ${personalData?.nombre}`} />
        <span className='text-white'>
          <h1 className='font-semibold flex gap-2 flex-wrap items-center md:text-2xl'>{personalData?.nombre} <span><Check className='w-4 h-4 p-[2px] bg-blue-500 rounded-full text-white' /></span></h1>
          <p className='text-xs md:text-base'>{personalData?.correo}</p>
          {userData.especialidades && <span className='bg-blue-500 px-2 rounded-full text-xs md:text-base'>{userData?.especialidades[0]}</span>}
        </span>
        <div className='absolute top-4 right-4'>
          <Link href={`/edit-profile/${getSlug(personalData?.nombre)}`}>
            <SettingsIcon className='w-5 h-5 text-white transition hover:text-blue-300' />
          </Link>
        </div>
      </div>
    </section>
  )
}
