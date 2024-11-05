'use client'

import { useState } from 'react'

export function usePlaces ({ handleSelectLocation }) {
  const [address, setAddress] = useState({
    streetAndNumber: '',
    place: '',
    locality: '',
    postcode: '',
    region: '',
    country: '',
    latitude: '',
    longitude: ''
  })

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (address.streetAndNumber) {
      console.log('Selected address:', address)
      handleSelectLocation(address)
    }
  }

  const updateCoordinates = ({ latitude, longitude }) => {
    setAddress({ ...address, latitude, longitude })
  }

  const handleManualInputChange = (event, stateProperty) => {
    const newAddress = { ...address }
    newAddress[stateProperty] = event.target.value

    setAddress(newAddress)
  }

  return { address, setAddress, handleFormSubmit, updateCoordinates, handleManualInputChange }
}
