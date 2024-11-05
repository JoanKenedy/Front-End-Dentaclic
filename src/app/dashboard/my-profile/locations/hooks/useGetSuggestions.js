'use client'

import { useState } from 'react'

export function useGetSuggestions ({ setAddress }) {
  const [suggestions, setSuggestions] = useState([])
  const accessToken = process.env.NEXT_PUBLIC_TOKEN_MAPBOX
  const [isLoading, setIsLoading] = useState(false)

  const getSuggestions = (query) => {
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
  }

  return { suggestions, getSuggestions, handleSuggestionClick, isLoading, setIsLoading }
}
