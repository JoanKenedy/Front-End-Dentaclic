'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDownSmall, Tooth } from '@/app/components/icons/Icons'
import useOnClickOutside from '@/hooks/useOnClickOutside'

export const SelectSpecialty = ({ profileData }) => {
  const [selected, setSelected] = useState(null)
  const [showSelect, setShowSelect] = useState(false)
  const selectElement = useRef(null)

  const handleClickOutsideFn = () => setShowSelect(false)

  useOnClickOutside(selectElement, handleClickOutsideFn)

  useEffect(() => {
    if (profileData) {
      setSelected(profileData?.especialidades[0])
    }
  }, [profileData])

  const handleSelected = (specialty) => {
    setSelected(specialty)
    setShowSelect(false)
  }

  return (
    <>
      <div className='relative' ref={selectElement}>
        <span className='text-blue-900 flex items-center gap-2 dark:text-white'><Tooth className='w-4 h-4' /> Selecciona una especialidad</span>
        <button onClick={() => setShowSelect(!showSelect)} className='relative w-full cursor-default rounded-md bg-white dark:bg-darkLightColor dark:ring-darkLightColor dark:text-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
          <span className='flex items-center'>
            <Tooth className='w-4 h-4' />
            <span className='ml-3 block truncate'>{selected}</span>
          </span>
          <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
            <ChevronDownSmall className='w-5 text-gray-400' />
          </span>
        </button>
        <div className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-darkLightColor dark:text-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm ${showSelect ? 'block' : 'hidden'}`}>
          {
            profileData && (
              profileData?.especialidades.map((specialty, i) => (
                <div onClick={() => handleSelected(specialty)} key={i} className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-blue-500 hover:text-white dark:text-white dark:hover:bg-darkColor'>
                  <div className='flex items-center'>
                    <Tooth className='w-4 h-4' />
                    <span className='ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
                      {specialty}
                    </span>
                  </div>
                  <span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-500 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
                    <Check aria-hidden='true' className='h-5 w-5' />
                  </span>
                </div>
              ))
            )
          }
        </div>
      </div>
    </>
  )
}
