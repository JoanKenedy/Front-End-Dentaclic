'use client'

import debounce from 'just-debounce-it'
import { useCallback, useId } from 'react'
import { useGetSuggestions } from './hooks/useGetSuggestions'
import { MapPin } from '@/app/components/icons/Icons'

/* eslint-disable react/prop-types */
export const AutoCompletePlace = ({ handleManualInputChange, setAddress, streetAndNumber }) => {
  const addressId = useId()
  const { suggestions, getSuggestions, handleSuggestionClick, isLoading, setIsLoading } = useGetSuggestions({ setAddress })

  const debouncedGetSuggestions = useCallback(
    debounce(query => {
      getSuggestions(query)
    }, 500)
    , []
  )

  const handleChange = (event) => {
    handleManualInputChange(event, 'streetAndNumber')
    debouncedGetSuggestions(event.target.value)
    setIsLoading(true)
  }

  return (
    <div className='w-full'>
      <label htmlFor={addressId} className='font-semibold text-lg'>Buscar Dirección</label>
      <input
        id={addressId}
        name={addressId}
        type='text'
        placeholder='CDMX, Puerto Vallarta, Tijuana...'
        value={streetAndNumber}
        onChange={handleChange}
        className='w-full border border-slate-500 rounded-md p-2 focus:outline focus:outline-blue-500'
      />
      <ul className={`w-full h-full max-h-80 overflow-y-auto border-b border-x shadow-lg rounded-es-lg rounded-ee-lg ${suggestions[2] ? 'border-gray-500' : 'border-transparent'}`}>
        {
          isLoading && <div className='w-full flex justify-center items-center overflow-hidden'><div aria-label='Cargando información' className='inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-blue-500 dark:text-white motion-reduce:animate-[spin_1.5s_linear_infinite]' /></div>
        }
        {
          suggestions[2]?.map((suggestion, i) => (
            <li key={i} onClick={() => handleSuggestionClick(suggestion)} className='flex gap-2 cursor-default px-2 py-2 transition hover:bg-slate-300 xs:gap-4 md:w-full'>
              <MapPin className='text-blue-600 w-8' />
              <span className='text-sm max-w-[70%]'>{suggestion.place_name}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
