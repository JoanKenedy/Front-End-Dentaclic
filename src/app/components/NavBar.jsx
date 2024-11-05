'use client'

import LogoDentaclic from '@/assets/images/logos/logo-dentaclic.png'
import LogoDentaclicWhite from '@/assets/images/logos/logo-dentaclic-white.png'
import { SearchIcon } from './icons/Icons'
import { useContext, useRef, useState, useEffect } from 'react'
import { SearchContext } from '@/context/searchBar'
import { useTheme } from '@/hooks/useTheme'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import Link from 'next/link'
import { ButtonLogin } from './auth/ButtonLogin'
import { Search } from './Search'

export const NavBar = () => {
  const { search } = useContext(SearchContext)
  const selectElement = useRef(null)
  const { theme, setTheme } = useTheme()

  const handleClickOutsideFn = () => search.setSearchMenu(false)
  const [logo, setLogo] = useState(LogoDentaclic)

  useOnClickOutside(selectElement, handleClickOutsideFn)

  useEffect(() => {
    if (theme === 'dark') {
      setLogo(LogoDentaclicWhite)
    } else if (theme === 'light') {
      setLogo(LogoDentaclic)
    }
  }, [theme])

  return (
    <div ref={selectElement}>
      <header className='w-full flex justify-center items-center flex-col fixed top-0 z-20 bg-white shadow-[0px_2px_8px_-4px_rgb(0_0_0_/_0.4)] md:fixed dark:bg-darkColor'>
        <nav className={`w-full flex justify-between items-center max-w-7xl px-4 py-3 gap-4 md:items-center ${search.hideTopMenu ? '' : 'lg:py-4'}`}>
          <Link href='/' className={`w-32 hidden transition-all duration-200 md:inline-block md:w-full md:max-w-36 ${search.hideTopMenu ? 'lg:max-w-32' : 'lg:max-w-48'}`}>
            <img src={logo.src} alt='Logo Dentaclic' className='w-full' />
          </Link>
          <button onClick={() => search.setSearchMenu(true)} className='w-full flex justify-start items-center px-2 py-2 rounded-full gap-2 shadow-[0px_0px_4px_1px_rgb(0_0_0_/_0.1)] dark:bg-darkLightColor dark:text-white md:hidden'>
            <SearchIcon className='w-7 h-7 bg-primaryBlue rounded-full p-1 text-white md:order-2' />
            <span className='text-sm text-start'>Doctores</span>
          </button>
          <div className='w-full hidden justify-center items-center transition-all duration-500 md:flex md:flex-col'>
            <section className={`w-full hidden justify-between items-center px-2 transition-all rounded-full bg-white gap-2 shadow-[0px_0px_4px_1px_rgb(0_0_0_/_0.1)] dark:bg-darkLightColor dark:text-white md:flex md:relative lg:gap-0 ${search.hideTopMenu ? 'lg:h-10 lg:max-w-max lg:justify-normal' : 'max-w-3xl'}`}>
              <button onClick={() => search.handleLocation()} className={`rounded-full w-full flex items-center flex-col text-sm px-2 py-2 transition-all duration-200 hover:transition hover:duration-200 hover:bg-gray-600/25 ${search.errorLocation && 'border border-red-500'} ${search.hideTopMenu ? 'lg:px-2 w-24' : 'lg:px-8'} lg:h-full`}>
                <strong className={`font-bold truncate w-full max-w-48 inline-block ${search.hideTopMenu ? '' : 'xl:max-w-64'}`}>
                  {search.addressShow.streetAndNumber === '' ? 'Ubicación' : <>{search.addressShow.streetAndNumber}, {search.addressShow.region}</>}
                </strong>
                <span className={`hidden text-nowrap transition-all ${search.hideTopMenu ? 'scale-0' : 'scale-100 lg:block'}`}>Ciudad o Estado</span>
              </button>
              <span className='text-gray-600 lg:text-2xl' aria-hidden>|</span>
              <button onClick={() => search.handleSpecialty()} className={`rounded-full w-full flex items-center flex-col text-sm px-2 py-2 transition-all duration-200 hover:transition hover:duration-200 hover:bg-gray-600/25 ${search.errorSpecialty && 'border border-red-500'} ${search.hideTopMenu ? 'lg:px-2' : 'lg:px-8'} lg:h-full`}>
                <strong className='font-bold truncate w-full max-w-48 inline-block'>
                  {!search.specialty ? 'Especialidad médica' : search.specialty}
                </strong><span className={`hidden text-nowrap transition-all ${search.hideTopMenu ? 'scale-0' : 'scale-100 lg:block'}`}>¿Cuál es tu malestar?</span>
              </button>
              <button onClick={() => search.handleSubmit()} className='flex justify-end items-center rounded-full bg-primaryBlue transition-all duration-300 hover:duration-300 hover:transition hover:bg-blue-900' aria-label='Buscar especialistas'>
                <SearchIcon className={`w-7 h-7 rounded-full p-1 text-white ${search.hideTopMenu ? '' : 'lg:w-10 lg:h-10'}`} />
              </button>
            </section>
          </div>
          <ButtonLogin theme={theme} setTheme={setTheme} />
        </nav>
      </header>
      <Search
        errorLocation={search.errorLocation}
        errorSpecialty={search.errorSpecialty}
        onHandleSelectLocation={search.handleSelectLocation}
        onHandleSelectSpecialty={search.handleSelectSpecialty}
        show={search.showSearchMenu}
        setSearchMenu={search.setSearchMenu}
        activeMenu={search.activeMenu}
        setActiveMenu={search.setActiveMenu}
        onHandleSubmit={search.handleSubmit}
        specialty={search.specialty}
        setSpecialty={search.setSpecialty}
        location={search.location}
        addressShow={search.addressShow}
        setLocation={search.setLocation}
        hideTopMenu={search.hideTopMenu}
      />
    </div>
  )
}
