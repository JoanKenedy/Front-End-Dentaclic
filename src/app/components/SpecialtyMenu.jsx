'use client'

import { resultsSpecialties } from '@/mocks/specialties'
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Close } from './icons/Icons'

export const SpecialtyMenu = ({ onHandleSubmit, activeMenu, setSearchMenu, onHandleSelectSpecialty, hideTopMenu, specialty }) => {
  const [valueSpecialty, setValueSpecialty] = useState(specialty)
  const [results, setResults] = useState(resultsSpecialties)

  useEffect(() => {
    if (valueSpecialty) {
      const search = valueSpecialty.toLocaleLowerCase()
      getSpecialties({ newSearch: search })
    }
  }, [valueSpecialty])

  const handleChange = (event) => {
    const newSearch = event.target.value.toLocaleLowerCase()
    setValueSpecialty(newSearch)
    getSpecialties({ newSearch })
  }

  const handleSelectOption = ({ item }) => {
    onHandleSelectSpecialty({ resultSpecialty: item.name })
    setValueSpecialty(item.name)
  }

  const getSpecialties = ({ newSearch }) => {
    const filtered = resultsSpecialties.filter(specialty => specialty.name.toLocaleLowerCase().includes(newSearch))
    setResults(filtered)
  }

  return (
    <div className={`w-[270px] ${activeMenu === 'specialty' ? 'scale-y-100 block' : 'scale-y-0 hidden'} delay-150 transition origin-top flex flex-col gap-2 max-w-[380px] xxs:w-[calc(90%_-_32px)] bg-white dark:bg-darkLightColor dark:text-white rounded-b-xl pt-5 -z-[1] absolute top-8 md:top-14 md:shadow-button md:rounded-t-xl md:pt-3 ${hideTopMenu ? 'lg:top-16' : 'lg:top-20'} xl:right-1/2 xl:translate-x-56`}>
      <label htmlFor='Specialty' className='hidden font-semibold text-lg md:px-4 md:block'>Buscar Especialidad</label>
      <input value={valueSpecialty} onChange={(e) => handleChange(e)} type='text' name='Specialty' id='Specialty' placeholder='Ortodoncia, Implantes, Endodoncia...' className='w-full px-2 py-1 shadow-lg rounded-md mt-3 mb-3 focus:outline dark:bg-darkColor focus:outline-blue-500 md:mt-1' />
      <button onClick={() => setSearchMenu(false)} className='hidden absolute top-2 right-2 text-blue-700 hover:text-red-600 md:block'><Close className='w-5' /></button>
      <span className='px-4'>Más buscados...</span>
      <div className='w-full grid grid-cols-2'>
        {
          results.slice(0, 2).map((item) => (
            <button onClick={() => handleSelectOption({ item })} key={item.id} className='flex flex-col gap-2 px-4 transition rounded-md py-1 hover:bg-slate-300 dark:bg-darkColor'>
              <img src={item.imgSrc} alt={`Tratamiento de ${item.name}`} className='w-full aspect-square object-cover rounded-md' />
              <span>{item.name}</span>
            </button>
          ))
        }
      </div>
      {/* <button className='w-full flex justify-center items-center'>
        <ChevronDown className='text-blue-600 w-8' />
      </button> */}
      <div className='w-full grid place-items-center'>
        <button className='w-[calc(100%-2rem)] my-2 py-2 text-white bg-blue-500 rounded-md transition hover:bg-blue-400' onClick={() => onHandleSubmit()}>Buscar</button>
      </div>
    </div>
  )
}
