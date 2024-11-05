'use client'

/* eslint-disable react/prop-types */
import { useState } from 'react'
import { BrandX, Facebook, Instagram, Language, School, Share, Star, UserSquare } from '@/app/components/icons/Icons'

export const About = ({ activeMenu, loading, profileData }) => {
  return (
    loading || !profileData ? <LoadingAbout /> : <InfoAbout activeMenu={activeMenu} profileData={profileData} />
  )
}

export const InfoAbout = ({ activeMenu, profileData }) => {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <section className={`w-full flex-col gap-5 rounded-xl bg-white dark:bg-darkColor shadow-xl dark:text-white p-4 mt-4 ${activeMenu === '1' ? 'flex' : 'hidden'}`}>
      <article className={`text-blue-800 ${!profileData?.sobreMi && 'hidden'}`}>
        <span className='text-blue-800 font-bold flex gap-2 mb-2 dark:text-white'><UserSquare className='w-6 h-6 text-blue-500 dark:text-white' />Sobre mí</span>
        <p className={`transition-all duration-300 overflow-hidden dark:text-white ${showDescription ? 'max-h-96' : 'max-h-24'} `}>{profileData?.sobreMi}</p>
        <button onClick={() => setShowDescription(!showDescription)} className='text-xs underline dark:text-white'>{showDescription ? 'Ocultar descripción completa' : 'Mostrar descripción completa'}</button>
      </article>
      <article>
        <span className='text-blue-800 font-bold flex gap-2 mb-2 dark:text-white'><Star className='w-6 h-6 text-blue-500 dark:text-white' /> Especialidades</span>
        <ul className='list-disc text-blue-800 ml-5 dark:text-white'>
          {
            profileData?.especialidades.map((el, i) => (
              <li key={i}>{el}</li>
            ))
          }
        </ul>
      </article>
      <article>
        <span className='text-blue-800 font-bold flex gap-2 mb-2 dark:text-white'><School className='w-6 h-6 text-blue-500 dark:text-white' /> Formación</span>
        <ul className='list-disc text-blue-800 ml-5 dark:text-white'>
          {
            profileData?.formacionAcademica.map((el, i) => (
              <li key={i}>{el}</li>
            ))
          }
        </ul>
      </article>
      <article className={`text-blue-800 ${profileData?.idioma[0] ? 'block' : 'hidden'}`}>
        <span className='text-blue-800 font-bold flex gap-2 mb-2 dark:text-white'><Language className='w-6 h-6 text-blue-500 dark:text-white' /> Idiomas</span>
        <ul className='list-disc text-blue-800 ml-5 dark:text-white'>
          {
            profileData?.idioma.map((el, i) => (
              <li key={i}>{el}</li>
            ))
          }
        </ul>
      </article>
      <article className='hidden'>
        <span className='text-blue-800 font-bold flex gap-2 mb-2'><Share className='w-6 h-6 text-blue-500' /> Redes Sociales</span>
        <div className='flex items-center gap-2'>
          <a className=' rounded-md flex w-max' href='http://facebook.com' target='_blank' rel='noopener noreferrer'>
            <Facebook className='w-10 h-10 text-blue-800' />
          </a>
          <a className='rounded-md flex w-max' href='http://instagram.com' target='_blank' rel='noopener noreferrer'>
            <Instagram className='w-12 h-12 text-blue-800' />
          </a>
          <a className='rounded-md flex w-max' href='http://x.com' target='_blank' rel='noopener noreferrer'>
            <BrandX className='w-12 h-12 text-blue-800' />
          </a>
        </div>
      </article>
    </section>
  )
}

export const LoadingAbout = () => {
  return (
    <section className='w-full flex flex-col gap-5 rounded-xl bg-white dark:bg-darkLightColor shadow-xl p-4 mt-4'>
      <article className='grid gap-2'>
        <span className='text-blue-800 font-bold flex gap-2 mb-2'><UserSquare className='w-6 h-6 text-blue-500' /></span>
        <div className='w-full rounded-full h-3 bg-slate-400 animate-pulse' />
        <div className='w-full rounded-full h-3 bg-slate-400 animate-pulse' />
        <div className='w-full rounded-full h-3 bg-slate-400 animate-pulse' />
        <div className='w-24 rounded-full h-6 bg-slate-400 animate-pulse' />
      </article>
      <article className='grid gap-2'>
        <span className='text-blue-800 font-bold flex gap-2 mb-2'><Star className='w-6 h-6 text-blue-500' /></span>
        <div className='list-disc text-blue-800 ml-5 grid gap-2'>
          <div className='w-24 rounded-full h-3 bg-slate-400 animate-pulse' />
          <div className='w-36 rounded-full h-3 bg-slate-400 animate-pulse' />
          <div className='w-36 rounded-full h-3 bg-slate-400 animate-pulse' />
          <div className='w-40 rounded-full h-3 bg-slate-400 animate-pulse' />
        </div>
      </article>
      <article className='grid gap-2'>
        <span className='text-blue-800 font-bold flex gap-2 mb-2'><School className='w-6 h-6 text-blue-500' /></span>
        <div className='list-disc text-blue-800 ml-5 grid gap-2'>
          <div className='w-24 rounded-full h-3 bg-slate-400 animate-pulse' />
          <div className='w-36 rounded-full h-3 bg-slate-400 animate-pulse' />
          <div className='w-36 rounded-full h-3 bg-slate-400 animate-pulse' />
          <div className='w-40 rounded-full h-3 bg-slate-400 animate-pulse' />
        </div>
      </article>
      <article className='text-blue-800'>
        <span className='text-blue-800 font-bold flex gap-2 mb-2'><Language className='w-6 h-6 text-blue-500' /></span>
        <div className='w-36 rounded-full h-3 bg-slate-400 animate-pulse' />
      </article>
      <article className='grid gap-2'>
        <span className='text-blue-800 font-bold flex gap-2 mb-2'><Share className='w-6 h-6 text-blue-500' /></span>
        <div className='flex items-center gap-2'>
          <a className=' rounded-md flex w-max' href='http://facebook.com' target='_blank' rel='noopener noreferrer'>
            <Facebook className='w-10 h-10 text-blue-800' />
          </a>
          <a className='rounded-md flex w-max' href='http://instagram.com' target='_blank' rel='noopener noreferrer'>
            <Instagram className='w-12 h-12 text-blue-800' />
          </a>
          <a className='rounded-md flex w-max' href='http://x.com' target='_blank' rel='noopener noreferrer'>
            <BrandX className='w-12 h-12 text-blue-800' />
          </a>
        </div>
      </article>
    </section>
  )
}
