'use client'

import { CalendarMonth, MapPin } from '@/app/components/icons/Icons'
import { SelectLocation, SelectSpecialty } from '@/app/profile'
import useOnClickOutside from '@/hooks/useOnClickOutside'
/* eslint-disable react/prop-types */
import { useRef } from 'react'

export const CalendarSchedule = ({ showSchedule, setShowSchedule, loading, profileData, isProfile }) => {
  return (
    !loading || profileData ? <InfoCalendar profileData={profileData} showSchedule={showSchedule} setShowSchedule={setShowSchedule} isProfile={isProfile} /> : ''
  )
}

export const InfoCalendar = ({ showSchedule, setShowSchedule, profileData, isProfile }) => {
  const handleClickOutsideFn = () => setShowSchedule(false)

  const selectElement = useRef(null)
  useOnClickOutside(selectElement, handleClickOutsideFn)

  return (
    <aside ref={selectElement} className={`w-11/12 flex flex-col bg-white dark:bg-darkColor dark:text-white shadow-xl rounded-xl gap-3 pb-4 transition origin-bottom-right fixed z-10 right-1/2 translate-x-1/2 bottom-28 ${showSchedule ? 'scale-100' : 'scale-0'} lg:scale-100 lg:sticky lg:translate-x-0 lg:right-0 ${isProfile ? 'lg:top-10 lg:mt-0' : 'lg:top-20 lg:mt-32'}  lg:max-w-96 lg:h-max lg:bottom-0`}>
      <span className='flex gap-2 text-white bg-blue-500 px-4 py-2 rounded-t-xl'><CalendarMonth className='w-6 h-6' /> Agendar Cita</span>
      <article className='w-full px-4'>
        <SelectLocation profileData={profileData} />
      </article>
      <article className='w-full px-4'>
        <SelectSpecialty profileData={profileData} />
      </article>
      <article className='px-4'>
        <div className='w-full grid grid-cols-5'>
          <section className='flex flex-col justify-center items-center'>
            <header className='flex flex-col justify-center items-center'>
              <span className='text-center text-xs'>Hoy</span>
              <span className='text-center text-nowrap text-xs'>14 May</span>
            </header>
            <button>-</button>
            <button>-</button>
            <button>-</button>
            <button>-</button>
            <button>-</button>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <header className='flex flex-col justify-center items-center'>
              <span className='text-center text-xs'>Hoy</span>
              <span className='text-center text-nowrap text-xs'>14 May</span>
            </header>
            <button>-</button>
            <button>-</button>
            <button>-</button>
            <button>-</button>
            <button>-</button>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <header className='flex flex-col justify-center items-center'>
              <span className='text-center text-xs'>Hoy</span>
              <span className='text-center text-nowrap text-xs'>14 May</span>
            </header>
            <button>-</button>
            <button>-</button>
            <button>-</button>
            <button>-</button>
            <button>-</button>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <header className='flex flex-col justify-center items-center'>
              <span className='text-center text-xs'>Hoy</span>
              <span className='text-center text-nowrap text-xs'>14 May</span>
            </header>
            <button>-</button>
            <button>-</button>
            <button>-</button>
            <button>-</button>
            <button>-</button>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <header className='flex flex-col justify-center items-center'>
              <span className='text-center text-xs'>Hoy</span>
              <span className='text-center text-nowrap text-xs'>14 May</span>
            </header>
            <button className='px-2 py-1 bg-blue-300 rounded-md text-xs text-white'>10:00</button>
            <button>-</button>
            <button>-</button>
            <button className='px-2 py-1 bg-blue-300 rounded-md text-xs text-white'>14:00</button>
            <button>-</button>
          </section>
        </div>
      </article>
    </aside>
  )
}

export const LoadingCalendar = () => {
  return (
    <aside className='w-11/12 flex flex-col bg-white shadow-xl rounded-xl gap-3 pb-4 transition origin-bottom-right fixed z-10 right-1/2 translate-x-1/2 bottom-28 lg:scale-100 lg:sticky lg:translate-x-0 lg:right-0 lg:mt-10 lg:max-w-96 lg:h-max lg:bottom-0 lg:top-20'>
      <span className='flex gap-2 text-white bg-blue-500 px-4 py-2 rounded-t-xl'><CalendarMonth className='w-6 h-6' /> Agendar Cita</span>
      <article className='w-full px-4'>
        <p className='text-blue-900 flex gap-2'><MapPin className='w-4 h-4' /> Selecciona una dirección</p>
        <div className='bg-slate-400 animate-pulse h-10 w-full pl-1 py-2 rounded-lg border-none focus:outline-none' />
      </article>
      <article className='w-full px-4'>
        <p className='text-blue-900 flex gap-2'><MapPin className='w-4 h-4' /> Selecciona una dirección</p>
        <div className='bg-slate-400 animate-pulse h-10 w-full pl-1 py-2 rounded-lg border-none focus:outline-none' />
      </article>
      <article className='px-4'>
        <div className='w-full grid grid-cols-5'>
          <section className='flex flex-col justify-center items-center gap-1'>
            <header className='flex flex-col justify-center items-center'>
              <span className='animate-pulse bg-slate-400 w-6 h-3 rounded-full' />
              <span className='animate-pulse bg-slate-400 w-10 h-3 rounded-full mt-1' />
            </header>
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
          </section>
          <section className='flex flex-col justify-center items-center gap-1'>
            <header className='flex flex-col justify-center items-center'>
              <span className='animate-pulse bg-slate-400 w-6 h-3 rounded-full' />
              <span className='animate-pulse bg-slate-400 w-10 h-3 rounded-full mt-1' />
            </header>
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
          </section>
          <section className='flex flex-col justify-center items-center gap-1'>
            <header className='flex flex-col justify-center items-center'>
              <span className='animate-pulse bg-slate-400 w-6 h-3 rounded-full' />
              <span className='animate-pulse bg-slate-400 w-10 h-3 rounded-full mt-1' />
            </header>
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
          </section>
          <section className='flex flex-col justify-center items-center gap-1'>
            <header className='flex flex-col justify-center items-center'>
              <span className='animate-pulse bg-slate-400 w-6 h-3 rounded-full' />
              <span className='animate-pulse bg-slate-400 w-10 h-3 rounded-full mt-1' />
            </header>
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
          </section>
          <section className='flex flex-col justify-center items-center gap-1'>
            <header className='flex flex-col justify-center items-center'>
              <span className='animate-pulse bg-slate-400 w-6 h-3 rounded-full' />
              <span className='animate-pulse bg-slate-400 w-10 h-3 rounded-full mt-1' />
            </header>
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
            <div className='w-10 h-6 rounded-md bg-slate-400 animate-pulse' />
          </section>
        </div>
      </article>
    </aside>
  )
}
