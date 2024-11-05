'use client'

import { LoginContext } from '@/context/login'
import Link from 'next/link'
import { useContext } from 'react'
import { SettingsIcon } from '../components/icons/Icons'

export const Hero = () => {
  const { personalData, userData } = useContext(LoginContext)
  return (
    <section className='w-full justify-center items-center flex px-4 pt-20'>
      <div className='w-full flex justify-start items-center max-w-7xl py-1 bg-primaryBlue rounded-xl gap-8 shadow-lg relative'>
        <img className='rounded-full border-2 border-white w-1/6 max-w-56 shadow-lg' src={personalData?.img} alt={`Foto de perfil de ${personalData?.nombre}`} />
        <span className='text-white'>
          <h1 className='font-semibold flex gap-2 flex-wrap items-center md:text-2xl'>{userData && userData?.namePaciente}</h1>
          <p className='text-xs md:text-base'>{personalData?.correo}</p>
        </span>
        <div className='absolute top-4 right-4'>
          <Link href='/profile-patient/configuration'>
            <SettingsIcon className='w-5 h-5 text-white transition hover:text-blue-400' />
          </Link>
        </div>
      </div>
    </section>
  )
}
