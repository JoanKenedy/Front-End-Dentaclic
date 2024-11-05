'use client'
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

// 1. Crear el contexto
export const LoginContext = createContext()

// 2. crear el provider

export function LoginProvider ({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [userData, setUserData] = useState('')
  const [personalData, setPersonalData] = useState('')
  const [loading, setLoading] = useState(false)
  const [profileCreated, setProfileCreated] = useState(false)

  return (
    <LoginContext.Provider value={{
      loggedIn,
      setLoggedIn,
      email,
      setEmail,
      userData,
      setUserData,
      personalData,
      setPersonalData,
      loading,
      setLoading,
      setProfileCreated,
      profileCreated
    }}
    >
      {children}
    </LoginContext.Provider>
  )
}
