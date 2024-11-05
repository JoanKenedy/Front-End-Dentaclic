'use client'

import { useContext, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { MoonIcon, SunIcon } from '../components/icons/Icons'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import { LoginContext } from '@/context/login'
import { PUT } from '../api/route'

export const MenuDashboard = ({ isMobile, theme, setTheme, showMenu }) => {
  const { personalData, setLoggedIn } = useContext(LoginContext)
  const [showMenuUser, setShowMenuUser] = useState(false)
  const selectElement = useRef(null)

  const handleClickOutsideFn = () => setShowMenuUser(false)

  useOnClickOutside(selectElement, handleClickOutsideFn)

  const onButtonClick = async () => {
    window.localStorage.removeItem('user')
    setLoggedIn(false)
    await PUT('token')
    toast.success('Sesión cerrada exitosamente')
    window.location.href = '/login'
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    if (theme === 'dark') {
      htmlElement.classList.add('dark')
    } else if (theme === 'light') {
      htmlElement.classList.remove('dark')
    }
  }, [theme])

  const changeSchemeMode = () => {
    const themeToSave = theme === 'light' ? 'dark' : 'light'
    setTheme(themeToSave)
    window.localStorage.setItem('theme', JSON.stringify({ themeToSave }))
  }

  const DarkIconMode = () => {
    if (theme === 'light') {
      return (
        <>
          <SunIcon className='w-5' />
          Claro
        </>
      )
    } else if (theme === 'dark') {
      return (
        <>
          <MoonIcon className='w-5' />
          Oscuro
        </>
      )
    }
  }

  return (
    <div className={isMobile ? 'w-max md:hidden' : 'w-max hidden absolute bottom-4 left-3 md:inline-block'} ref={selectElement}>
      <div className='w-max flex justify-between items-center gap-1' onClick={() => setShowMenuUser(!showMenuUser)}>
        <button aria-label='Desplegar menu de usuario' className='rounded-full shadow-[0px_0px_4px_1px_rgb(0_0_0_/_0.1)] transition-all dark:bg-darkLightColor'>
          <img src={personalData?.img} className='w-9 h-9 aspect-square rounded-full transition-all object-cover' alt={`Foto de perfil de ${personalData.nombre}`} />
        </button>
        <p className={`hidden transition cursor-default origin-left truncate md:inline-block ${showMenu ? 'scale-100' : 'scale-0'}`}>{personalData?.nombre}</p>
      </div>
      <div className={`w-max flex flex-col gap-2 py-1 items-start absolute bottom-14 right-0 bg-white dark:bg-darkLightColor shadow-button origin-bottom rounded-lg md:left-10 md:bottom-8 z-20 transition md:origin-left ${showMenuUser ? 'scale-100' : 'scale-0'}`}>
        <button onClick={() => onButtonClick()} aria-label='Desplegar menu de usuario' className='w-full px-2 pt-2 pb-1 flex justify-between hover:bg-slate-200 dark:hover:bg-darkColor items-center gap-1 transition-all dark:bg-darkLightColor'>
          Cerrar Sesión
        </button>
        <button className='w-full px-2 pt-1 pb-2 transition hover:bg-slate-200 text-start flex justify-start items-center gap-2 dark:hover:bg-darkColor' onClick={() => changeSchemeMode()}>{DarkIconMode()}</button>
      </div>
    </div>
  )
}
