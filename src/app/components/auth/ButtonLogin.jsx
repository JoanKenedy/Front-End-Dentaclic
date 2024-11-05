'use client'

/* eslint-disable react/prop-types */
import { LoginContext } from '@/context/login'
import Link from 'next/link'
import { useState, useEffect, useCallback, useContext } from 'react'
import { toast } from 'sonner'
import { ChevronDownSmall, MoonIcon, SunIcon, UserIcon } from '../icons/Icons'
import { PUT } from '@/app/api/route'

export const ButtonLogin = ({ theme, setTheme }) => {
  const { setLoggedIn, loggedIn, personalData, userData } = useContext(LoginContext)
  const [hideTopMenu, setHideTopMenu] = useState(false)
  const [showMenuUser, setShowMenuUser] = useState(false)
  const [y, setY] = useState(0)
  const stylesImgUser = `w-10 h-10 aspect-square rounded-full transition-all object-cover ${hideTopMenu ? 'md:w-7 md:h-7 lg:w-8 lg:h-8' : 'md:w-7 md:h-7 lg:w-10 lg:h-10'}`

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

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    if (theme === 'dark') {
      htmlElement.classList.add('dark')
    } else if (theme === 'light') {
      htmlElement.classList.remove('dark')
    }
  }, [theme])

  const onButtonClick = () => {
    window.localStorage.removeItem('user')
    setLoggedIn(false)
    PUT('token')
    toast.success('Sesión cerrada exitosamente')
  }

  const getSlug = (name) => {
    const nameString = name.split(' ')
    const slug = nameString.join('-')

    return slug.toLocaleLowerCase()
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

  const changeSchemeMode = () => {
    const themeToSave = theme === 'light' ? 'dark' : 'light'
    setTheme(themeToSave)
    window.localStorage.setItem('theme', JSON.stringify({ themeToSave }))
  }

  // const removeCookie = () => {
  //   PUT('token')
  // }

  const showButton = () => {
    if (loggedIn && personalData) {
      if (personalData.rol === 'ESPECIALISTA') {
        return (
          <>
            <Link href='/dashboard' className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Dashboard</Link>
            {userData && <Link href={`/profile/${getSlug(personalData.nombre)}/${userData._id}`} className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Ver perfil</Link>}
            <Link href={`edit-profile/${getSlug(personalData.nombre)}`} className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Editar perfil</Link>
            <button onClick={() => onButtonClick()} className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Cerrar Sesión</button>
            <button className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start flex gap-2 dark:hover:bg-darkColor' onClick={() => changeSchemeMode()}>{DarkIconMode()}</button>
          </>
        )
      } else if (personalData.rol === 'PACIENTE') {
        return (
          <>
            <Link href='/profile-patient' className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Mi perfil</Link>
            <Link href='/profile-patient/configuration' className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Editar perfil</Link>
            <button onClick={() => onButtonClick()} className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Cerrar Sesión</button>
            <button className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start flex gap-2 dark:hover:bg-darkColor' onClick={() => changeSchemeMode()}>{DarkIconMode()}</button>
          </>
        )
      } else if (personalData.rol === 'CLINICA') {
        return (
          <>
            <Link href='/dashboard' className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Dashboard</Link>
            <Link href='' className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Dashboard</Link>
            <button onClick={() => onButtonClick()} className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Cerrar Sesión</button>
            <button className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start flex gap-2 dark:hover:bg-darkColor' onClick={() => changeSchemeMode()}>{DarkIconMode()}</button>
          </>
        )
      }
    } else {
      return (
        <>
          <Link href='/register' className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Regístrate</Link>
          <Link href='/login' className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start dark:hover:bg-darkColor'>Iniciar Sesión</Link>
          <button className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start flex gap-2 dark:hover:bg-darkColor' onClick={() => changeSchemeMode()}>{DarkIconMode()}</button>
          {/* <button className='w-full pl-3 pr-12 py-2 transition hover:bg-slate-200 text-start flex gap-2 dark:hover:bg-darkColor' onClick={() => removeCookie()}>Remove Cookie</button> */}
        </>
      )
    }
  }
  // userData.usuarioId[0].usuario.img
  return (
    <div className={`flex flex-col relative ${personalData.rol === 'ESPECIALISTA' && 'hidden'}`} onMouseOver={() => setShowMenuUser(true)} onMouseOut={() => setShowMenuUser(false)}>
      <button aria-label={loggedIn ? 'Iniciar sesión' : 'Desplegar menu de usuario'} className={`w-max flex justify-between items-center gap-1 rounded-full shadow-[0px_0px_4px_1px_rgb(0_0_0_/_0.1)] transition-all dark:bg-darkLightColor ${loggedIn ? 'px-1 py-1' : 'px-1 py-1'}`}>
        {
          loggedIn && personalData
            ? (
              <img src={personalData.img} className={stylesImgUser} alt={`Foto de perfil de ${personalData.nombre}`} />
              )
            : (
              <UserIcon className={`w-7 h-7 transition-all bg-primaryBlue rounded-full px-[2px] pt-1 pb-[2px] fill-white md:mr-1 ${hideTopMenu ? 'lg:w-6 lg:h-6' : 'lg:w-8 lg:h-8'}`} />
              )
        }
        <ChevronDownSmall className={`w-7 hidden transition-all md:inline-block dark:text-white ${hideTopMenu ? 'lg:w-8' : 'lg:w-9'}`} />
      </button>
      <div className={`w-max flex flex-col items-start text-sm rounded-xl py-2 shadow-[0px_5px_8px_1px_rgb(0_0_0_/_0.4)] bg-white absolute top-12 right-0 transition origin-top dark:bg-darkLightColor dark:text-white md:top-10 lg:top-14 ${showMenuUser ? 'scale-y-1' : 'scale-y-0'}`}>
        {
          showButton()
        }
      </div>
    </div>
  )
}
