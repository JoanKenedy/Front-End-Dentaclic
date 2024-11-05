/* eslint-disable react/prop-types */
import { ChevronDown, Close } from './icons/Icons'
import { AutoCompleteInput } from './maps/AutoCompleteInput'
import { SpecialtyMenu } from './SpecialtyMenu'

export const Search = ({ specialty, addressShow, errorLocation, errorSpecialty, hideTopMenu, show, setSearchMenu, activeMenu, setActiveMenu, onHandleSelectLocation, onHandleSelectSpecialty, onHandleSubmit }) => {
  // needed props: specialty, setSpecialty, location, setLocation
  return (
    <nav className={`w-screen flex flex-col h-svh z-[21] fixed top-0 right-0 bg-blue-600 py-4 px-4 items-center transition origin-top dark:bg-darkColor ${show ? 'scale-y-100' : 'scale-y-0'} md:flex md:flex-col md:bg-transparent md:h-auto md:py-0 md:px-0`}>
      <header className='w-full flex justify-center items-center h-9 translate-x-2 md:hidden'>
        <div className={`w-full max-w-46 flex items-center text-xs py-1 pl-1 pr-3 h-full rounded-full gap-1 shadow-[0px_0px_4px_1px_rgb(0_0_0_/_0.2)] relative z-[3] transition dark:text-white ${errorLocation && 'border border-red-500'} ${activeMenu === 'search' ? 'bg-slate-300 dark:bg-gray-800' : 'bg-white dark:bg-darkLightColor'}`}>
          <button aria-label='Cerrar buscador' onClick={() => setSearchMenu(false)} className='relative z-10'><Close className='w-7 h-7 bg-primaryBlue rounded-full p-1 text-white' /></button>
          <button onClick={() => setActiveMenu('search')} className='w-full inline-flex'>
            {addressShow.streetAndNumber === '' ? 'Ubicación' : <span className='truncate w-full max-w-24 inline-block xxs:max-w-28 xs:max-w-36'>{addressShow.streetAndNumber}, {addressShow.region}</span>}
          </button>
        </div>
        <button onClick={() => setActiveMenu('specialty')} className={`w-full flex items-center max-w-46 text-xs py-1 pr-3 pl-6 -translate-x-4 h-full rounded-e-full shadow-[0px_0px_4px_1px_rgb(0_0_0_/_0.2)] relative z-[2] transition dark:text-white ${errorSpecialty && 'border border-red-500'} ${activeMenu === 'specialty' ? 'bg-slate-300 dark:bg-gray-800' : 'bg-white dark:bg-darkLightColor'}`}>
          {!specialty ? 'Especialidad' : <span className='truncate w-full max-w-36 inline-block xs:max-w-24'>{specialty}</span>}
        </button>
      </header>
      <div className={`w-[270px] ${activeMenu === 'search' ? 'scale-y-100 block' : 'scale-y-0 hidden'} delay-150 transition origin-top flex flex-col max-w-[380px] xxs:w-[calc(90%_-_32px)] bg-white dark:bg-darkLightColor rounded-b-xl pt-5 -z-[1] absolute top-8 md:top-14 md:left-20 md:shadow-button md:rounded-t-xl md:pt-3 ${hideTopMenu ? 'lg:top-16' : 'lg:top-20'} xl:left-1/2 xl:-translate-x-[450px]`}>
        <button aria-label='Cerrar buscador' onClick={() => setSearchMenu(false)} className='hidden absolute top-2 right-2 text-blue-700 hover:text-red-600 md:block'><Close className='w-5' /></button>
        <AutoCompleteInput addressShow={addressShow} setActiveMenu={setActiveMenu} onHandleSelectLocation={onHandleSelectLocation} />
        <button aria-label='Cargar más resultados' className='w-full flex justify-center items-center'>
          <ChevronDown className='text-blue-600 w-8' />
        </button>
      </div>
      <SpecialtyMenu specialty={specialty} onHandleSubmit={onHandleSubmit} activeMenu={activeMenu} setSearchMenu={setSearchMenu} onHandleSelectSpecialty={onHandleSelectSpecialty} hideTopMenu={hideTopMenu} />
    </nav>
  )
}
