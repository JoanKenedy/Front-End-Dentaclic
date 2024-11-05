import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useSearchBar () {
  const [addressShow, setAddressShow] = useState({
    streetAndNumber: '',
    region: ''
  })
  const [hideTopMenu, setHideTopMenu] = useState(false)
  const [showSearchMenu, setSearchMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState('search')
  const [linkMaps, setLinkMaps] = useState('')
  const [y, setY] = useState(0)

  const [specialty, setSpecialty] = useState('')
  const [location, setLocation] = useState('')

  const [errorLocation, setErrorLocation] = useState(false)
  const [errorSpecialty, setErrorSpecialty] = useState(false)

  const handleSelectLocation = (address) => {
    setActiveMenu('specialty')
    setLocation(`${address.place}, ${address.region}, ${address.latitude}, ${address.longitude}`)
    setLinkMaps(`https://www.google.com.mx/maps/search/${address.latitude},${address.longitude}/@${address.latitude},${address.longitude}`)
    setAddressShow({
      streetAndNumber: address.streetAndNumber,
      region: address.region
    })
    console.log('Selected address:', address)
  }

  const handleSelectSpecialty = ({ resultSpecialty }) => {
    setSpecialty(resultSpecialty)
  }

  const handleSubmit = () => {
    let flag = true
    setErrorLocation(false)
    setErrorSpecialty(false)

    if (!location) {
      toast.error('Ingresa una dirección')
      setErrorLocation(true)
      flag = false
    }

    if (!specialty) {
      toast.error('Ingresa una especialidad')
      setErrorSpecialty(true)
      flag = false
    }

    if (flag) {
      setSearchMenu(false)
      // router.push(`/search?location=${location}&specialty=${specialty}&link=${linkMaps}`)
    }
  }

  const handleScroll = useCallback(() => {
    if (y > 50) {
      setHideTopMenu(true)
    } else {
      setHideTopMenu(false)
    }
    setY(window.scrollY)
  }, [y])

  const handleLocation = () => {
    setSearchMenu(true)
    setActiveMenu('search')
  }
  const handleSpecialty = () => {
    setSearchMenu(true)
    setActiveMenu('specialty')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // Cleanup the effect
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { errorLocation, errorSpecialty, addressShow, hideTopMenu, showSearchMenu, activeMenu, setActiveMenu, specialty, setSpecialty, location, setLocation, handleSelectLocation, setSearchMenu, handleLocation, handleSubmit, handleSpecialty, handleSelectSpecialty }
}
