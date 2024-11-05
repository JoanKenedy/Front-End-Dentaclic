'use client'

import { useCallback, useId, useState } from 'react'
import debounce from 'just-debounce-it'
import { usePlaces } from './hooks/usePlaces'
import { MapPin } from '../icons/Icons'

/* eslint-disable react/prop-types */
export const AutoCompleteInput = ({ onHandleSelectLocation, setActiveMenu, addressShow }) => {
  const { handleManualInputChange, setAddress, address } = usePlaces({ onHandleSelectLocation })
  const streetAndNumber = address.streetAndNumber
  const [suggestions, setSuggestions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const accessToken = process.env.NEXT_PUBLIC_TOKEN_MAPBOX
  const addressId = useId()
  const placeholder = `${addressShow.streetAndNumber}, ${addressShow.region}`

  const debouncedGetSuggestions = useCallback(
    debounce(query => {
      const API_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${accessToken}&country=mx&language=es`
      fetch(API_URL, {
        method: 'GET'
      })
        .then((response) => response.json())
        .then((response) => {
          setSuggestions(Object.values(response))
          setIsLoading(false)
        })
        .catch((error) => console.error(error))
    }, 500)
    , [])

  const handleChange = (event) => {
    handleManualInputChange(event, 'streetAndNumber')
    debouncedGetSuggestions(event.target.value)
    setIsLoading(true)
  }

  const handleSuggestionClick = (suggestion) => {
    const streetAndNumber = suggestion.place_name.split(',')[0]
    const latitude = suggestion.center[1]
    const longitude = suggestion.center[0]

    const addressCopy = {
      streetAndNumber,
      place: '',
      locality: '',
      postcode: '',
      country: '',
      region: '',
      latitude,
      longitude
    }

    suggestion.context.forEach(element => {
      const identifier = element.id.split('.')[0]

      addressCopy[identifier] = element.text
    })

    if (addressCopy.place === 'Mexico City') {
      addressCopy.place = addressCopy.locality
      addressCopy.region = 'Ciudad de México'
    }

    setAddress(addressCopy)
    setSuggestions([])
    setActiveMenu('specialty')
    onHandleSelectLocation(addressCopy)
  }

  return (
    <div>
      <label htmlFor={addressId} className='hidden font-semibold text-lg dark:text-white md:px-4 md:block'>Buscar Dirección</label>
      <input
        id={addressId}
        name={addressId}
        type='text'
        placeholder={addressShow.streetAndNumber === '' ? 'CDMX, Puerto Vallarta, Tijuana...' : placeholder}
        value={streetAndNumber}
        onChange={handleChange}
        className='w-full px-2 py-1 shadow-lg rounded-md mt-3 mb-3 focus:outline focus:outline-blue-500 dark:bg-darkColor md:px-4 md:mt-1'
      />
      <div className='h-full max-h-80 overflow-y-auto'>
        {
          isLoading && <div className='w-full flex justify-center items-center overflow-hidden'><div aria-label='Cargando información' className='inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-blue-500 dark:text-white motion-reduce:animate-[spin_1.5s_linear_infinite]' /></div>
        }
        {
          suggestions[2]?.map((suggestion, i) => (
            <button key={i} onClick={() => handleSuggestionClick(suggestion)} className='flex gap-2 px-2 py-2 transition hover:bg-slate-300 dark:text-white dark:hover:bg-darkColor xs:gap-4 md:w-full'>
              <MapPin className='text-blue-600 w-8' />
              <span className='text-sm max-w-[70%]'>{suggestion.place_name}</span>
            </button>
          ))
        }
      </div>
    </div>
  )
}
