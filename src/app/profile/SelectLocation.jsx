'use client'

import { useRef, useState } from 'react'
import { Check, ChevronDownSmall, MapPin } from '@/app/components/icons/Icons'
import useOnClickOutside from '@/hooks/useOnClickOutside'

const infoLocations = [
  {
    id: 1,
    name: 'Tlalpan, CDMX',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Coyoacán, CDMX',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Benito Juárez, CDMX',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
  }
]

export const SelectLocation = ({ profileData }) => {
  const [selected, setSelected] = useState(infoLocations[0])
  const [showSelect, setShowSelect] = useState(false)
  const selectElement = useRef(null)

  const handleClickOutsideFn = () => setShowSelect(false)

  useOnClickOutside(selectElement, handleClickOutsideFn)

  const handleSelected = (id) => {
    setSelected(infoLocations[id - 1])
    setShowSelect(false)
  }

  const locations = () => {
    if (Array.isArray(profileData?.ciudad)) {
      return (
        profileData?.ciudad.map((location) => (
          <div onClick={() => handleSelected(location.id)} key={location.id} className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-blue-500 hover:text-white dark:hover:bg-darkColor'>
            <div className='flex items-center dark:text-white'>
              <img alt='' src={location.avatar} className='h-5 w-5 flex-shrink-0 rounded-full' />
              <span className='ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
                {location.name}
              </span>
            </div>
            <span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-500 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
              <Check aria-hidden='true' className='h-5 w-5' />
            </span>
          </div>
        ))
      )
    } else {
      return (
        <div onClick={() => handleSelected(profileData?.ciudad)} className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-blue-500 hover:text-white dark:hover:bg-darkColor'>
          <div className='flex items-center dark:text-white'>
            <MapPin className='w-4 h-4' />
            <span className='ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
              {profileData?.calle}, {profileData?.colonia}, {profileData?.ciudad}
            </span>
          </div>
          <span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-500 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
            <Check aria-hidden='true' className='h-5 w-5' />
          </span>
        </div>
      )
    }
  }

  return (
    <>
      <div className='relative dark:bg-darkColor' ref={selectElement}>
        <span className='text-blue-900 flex items-center gap-2 dark:text-white'><MapPin className='w-4 h-4' /> Selecciona una dirección</span>
        <button onClick={() => setShowSelect(!showSelect)} className='relative w-full cursor-default rounded-md bg-white dark:bg-darkLightColor dark:text-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-darkLightColor focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
          <span className='flex items-center'>
            <MapPin className='w-4 h-4' />
            <span className='ml-3 block truncate'>{profileData?.calle}, {profileData?.colonia}, {profileData?.ciudad}</span>
          </span>
          <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
            <ChevronDownSmall className='w-5 text-gray-400' />
          </span>
        </button>
        <div className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-darkLightColor py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm ${showSelect ? 'block' : 'hidden'}`}>
          {
            locations()
          }
          {/* {infoLocations.map((location) => (
            <div onClick={() => handleSelected(location.id)} key={location.id} className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-blue-500 hover:text-white'>
              <div className='flex items-center'>
                <img alt='' src={location.avatar} className='h-5 w-5 flex-shrink-0 rounded-full' />
                <span className='ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
                  {location.name}
                </span>
              </div>
              <span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-500 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
                <Check aria-hidden='true' className='h-5 w-5' />
              </span>
            </div>
          ))} */}
        </div>
      </div>
    </>
  )
}
