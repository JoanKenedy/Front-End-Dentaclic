'use client'

import { usePlaces } from '@/app/components/maps/hooks/usePlaces'
import { LoginContext } from '@/context/login'
import { useContext, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

export function useUpdateLocation () {
  const handleSelectLocation = () => {}
  const endpointEditSpecialist = useRef()
  const user = useRef()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      user.current = JSON.parse(window.localStorage.getItem('user'))
    }
  }, [])

  const { userData, loading } = useContext(LoginContext)
  const { address, setAddress, handleFormSubmit, updateCoordinates } = usePlaces({ handleSelectLocation })

  const flag = useRef()
  const body = useRef()

  const [isLoading, setIsLoading] = useState(false)

  const newAddress = useRef()

  useEffect(() => {
    if (userData) {
      newAddress.current = { ...address }
      endpointEditSpecialist.current = process.env.NEXT_PUBLIC_API + 'especialista/' + userData._id
      if (userData.calle) {
        newAddress.current.streetAndNumber = userData.calle
      }
      if (userData.colonia) {
        newAddress.current.place = userData.colonia
      }
      if (userData.ciudad) {
        newAddress.current.region = userData.ciudad
      }
      if (userData.codigoPostal) {
        newAddress.current.postcode = userData.codigoPostal
      }
      if (userData.latitud) {
        newAddress.current.latitude = userData.latitud
      }
      if (userData.longitud) {
        newAddress.current.longitude = userData.longitud
      }
      newAddress.current.country = 'México'
      setAddress(newAddress.current)
    }
  }, [userData])

  // Errors
  const [addressError, setAddressError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    flag.current = true
    setAddressError(null)

    if (!address.streetAndNumber || !address.country || !address.latitude || !address.place || !address.postcode || !address.region) {
      flag.current = false
      setAddressError('Todos los campos son necesarios')
    }

    if (flag.current) {
      body.current = { codigoPostal: address.postcode, latitud: address.latitude, longitud: address.longitude, ciudad: address.region, colonia: address.place, calle: address.streetAndNumber }
      updateLocation()
    }
  }

  const updateLocation = () => {
    setIsLoading(true)
    fetch(endpointEditSpecialist.current, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-token': user.current.token
      },
      body: JSON.stringify(body.current)
    })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text()
          throw new Error(text)
        } else {
          return response.json()
        }
      })
      .then((response) => {
        console.log(response)
        toast.success('Dirección actualizada correctamente')
        window.location.assign('/dashboard')
      })
      .catch((error) => {
        toast.error('Ocurrió un error al actualizar')
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  return {
    handleSubmit,
    isLoading,
    loading,
    address,
    addressError,
    setAddress,
    handleFormSubmit,
    updateCoordinates
  }
}
