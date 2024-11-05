'use client'

import { LoginContext } from '@/context/login'
import { useContext, useState } from 'react'
import { Hero } from './Hero'
import { About } from './About'
import { Publications } from './Publications'
import { Locations } from './Locations'
import { Reviews } from './Reviews'
import { Building, CalendarMonth, SpeakerPhone, Star, UserSquare } from '@/app/components/icons/Icons'
import { CalendarSchedule } from './CalendarSchedule'

export const Profile = () => {
  const [activeMenu, setActiveMenu] = useState('1')
  const [showSchedule, setShowSchedule] = useState(false)
  const { userData, loading } = useContext(LoginContext)

  return (
    <>
      <section className='w-full flex justify-center items-center relative pb-10 dark:bg-darkLightColor'>
        <div className='w-full flex justify-center max-w-7xl relative px-4 gap-4'>
          <div className='w-full flex justify-center items-center flex-col mt-10 lg:mt-10'>
            <Hero userData={userData} loading={loading} />
            <nav className='w-full shadow-xl grid grid-cols-4 place-content-center place-items-center mt-4 p-4 rounded-xl bg-white dark:bg-darkColor text-blue-800 font-semibold gap-4 sticky top-20 z-10'>
              <button onClick={() => setActiveMenu('1')} className={`flex justify-center transition-all border-b-2 ${activeMenu === '1' ? 'border-blue-800 dark:border-white/60' : 'border-transparent'} px-1`}><UserSquare className='w-6 h-6 text-blue-800 dark:text-white' /></button>
              <button onClick={() => setActiveMenu('2')} className={`flex justify-center transition-all border-b-2 ${activeMenu === '2' ? 'border-blue-800 dark:border-white/60' : 'border-transparent'} px-1`}><SpeakerPhone className='w-6 h-6 text-blue-800 dark:text-white' /></button>
              <button onClick={() => setActiveMenu('3')} className={`flex justify-center transition-all border-b-2 ${activeMenu === '3' ? 'border-blue-800 dark:border-white/60' : 'border-transparent'} px-1`}><Building className='w-6 h-6 text-blue-800 dark:text-white' /></button>
              <button onClick={() => setActiveMenu('4')} className={`flex justify-center transition-all border-b-2 ${activeMenu === '4' ? 'border-blue-800 dark:border-white/60' : 'border-transparent'} px-1`}><Star className='w-6 h-6 text-blue-800 dark:text-white' /></button>
            </nav>
            <About loading={loading} activeMenu={activeMenu} profileData={userData} />
            <Publications activeMenu={activeMenu} />
            <Locations activeMenu={activeMenu} profileData={userData} />
            <Reviews activeMenu={activeMenu} />
            <button onClick={() => setShowSchedule(!showSchedule)} className='p-4 bg-blue-600 rounded-full fixed bottom-4 right-3 z-10 lg:hidden'>
              <CalendarMonth className='w-10 h-10 text-white' />
            </button>
          </div>
          <CalendarSchedule profileData={userData} loading={loading} showSchedule={showSchedule} isProfile setShowSchedule={setShowSchedule} />
        </div>
      </section>
    </>
  )
}
