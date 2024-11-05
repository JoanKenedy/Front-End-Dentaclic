'use client'

import { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import { usePathname } from 'next/navigation'

export const SearchBar = () => {
  const location = usePathname()
  const [showNavBar, setShowNavBar] = useState(false)

  useEffect(() => {
    setShowNavBar(location.startsWith('/dashboard'))
  }, [location])

  return (
    !showNavBar && <NavBar />
  )
}
