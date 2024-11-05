'use client'

import { useContext, useRef, useState } from 'react'
import Logo from '../../assets/images/logos/imagotipo-dentaclic.png'
import { Home, PinFilled, SettingsFilled, UserFilled } from '../components/icons/Icons'
import { LoginContext } from '@/context/login'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import { useTheme } from '@/hooks/useTheme'
import { MenuDashboard } from './MenuDashboard'
import Link from 'next/link'

export const NavBarDashboard = ({ isIndex }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('/dashboard')
  const { personalData, profileCreated } = useContext(LoginContext)

  const getSlug = (name) => {
    if (name) {
      const nameString = name.split(' ')
      const slug = nameString.join('-')

      return slug.toLocaleLowerCase()
    }
  }

  const BUTTONS = [
    {
      id: '/dashboard',
      icon: Home,
      title: 'Dashboard'
    },
    {
      id: `/dashboard/my-profile/${getSlug(personalData?.nombre)}`,
      icon: UserFilled,
      title: 'Ver perfil'
    },
    {
      id: '/dashboard/my-profile/locations',
      icon: PinFilled,
      title: 'Ubicaciones'
    },
    // {
    //   id: '/dashboard/photos',
    //   icon: PhotoFilled,
    //   title: 'Fotografías y videos'
    // },
    {
      id: '/dashboard/my-profile/edit-profile',
      icon: SettingsFilled,
      title: 'Editar perfil'
    }
  ]

  const { theme, setTheme } = useTheme()

  console.log(selectedMenu)

  const showButtons = (index) => {
    if (!profileCreated && index === 4) {
      return 'block transition md:pr-4 md:rounded-lg hover:bg-slate-500 hover:text-white'
    } else if (!profileCreated) {
      return 'hidden transition md:pr-4 md:rounded-lg hover:bg-slate-500 hover:text-white'
    } else if (profileCreated) {
      return 'block transition md:pr-4 md:rounded-lg hover:bg-slate-500 hover:text-white'
    }
  }

  const selectElement = useRef(null)

  const handleClickOutsideFn = () => setShowMenu(false)

  useOnClickOutside(selectElement, handleClickOutsideFn)

  return (
    <nav className={`${isIndex ? 'fixed' : 'fixed md:sticky'} left-0 bottom-0 z-30 transition-all bg-gray-200 w-full ${showMenu ? 'md:max-w-60' : 'md:max-w-16'} md:h-svh md:top-0`} ref={selectElement} onMouseOver={() => setShowMenu(true)}>
      <ul className='flex px-2 py-2 gap-4 justify-center relative md:py-4 md:px-4 md:justify-start md:grid md:place-items-start md:overflow-hidden'>
        <li className='hidden md:flex gap-2 items-start text-xl w-max font-semibold'>
          <Link href='/' className='flex gap-2 items-start text-xl w-max font-semibold' onClick={() => setSelectedMenu('')}>
            <img className='w-9' src={Logo.src} alt='Logo de Dentaclic' />
            <p className={`transition origin-left ${showMenu ? 'scale-100' : 'scale-0'}`}>Dentaclic</p>
          </Link>
        </li>
        {
          BUTTONS.map((btn, i) => (
            <li key={i} className={showButtons(i)}>
              <Link href={btn.id} title={`Ir a ${btn.title}`} className='flex gap-2 justify-start items-center w-max' onClick={() => setSelectedMenu(btn.id)}>
                <btn.icon className={`w-9 p-2 rounded-md transition ${selectedMenu === btn.id ? 'fill-blue-900 bg-gray-400' : 'fill-blue-400 bg-gray-300'}`} />
                <span className={`hidden transition origin-left md:block ${showMenu ? 'scale-100' : 'scale-0'}`}>{btn.title}</span>
              </Link>
            </li>
          ))
        }
        <MenuDashboard isMobile showMenu={showMenu} theme={theme} setTheme={setTheme} />
      </ul>
      <MenuDashboard showMenu={showMenu} theme={theme} setTheme={setTheme} />
    </nav>
  )
}
