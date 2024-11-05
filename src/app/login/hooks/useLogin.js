'use client'

import { POST } from '@/app/api/route'
import { LoginContext } from '@/context/login'
import { useContext, useState } from 'react'
import { toast } from 'sonner'

export function useLogin () {
  const [isLoading, setIsLoading] = useState(false)
  const { setPersonalData } = useContext(LoginContext)
  const url = process.env.NEXT_PUBLIC_API + 'auth/login/'

  const getLogin = ({ correo, password, setEmail, setLoggedIn, setLoading, from, setEmailError, setPasswordError, rememberMe, setSuccess }) => {
    setIsLoading(true)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ correo, password })
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
        if (rememberMe) {
          window.localStorage.setItem('credentials', JSON.stringify({ email: correo, password }))
        }
        window.localStorage.setItem('user', JSON.stringify({ correo, token: response.token, id: response.usuario.uid, role: response.usuario.rol, personalData: response.usuario }))
        setLoggedIn(true)
        POST('token', response.token, response.usuario.rol)
        setPersonalData(response.usuario)
        setEmail(correo)
        setSuccess(true)
        if (response.usuario.rol === 'ESPECIALISTA' && from === '/') {
          setSuccess(true) // Dashboard
        } else {
          setSuccess(true) // permanentRedirect(from, 'replace')
        }
      })
      .catch((error) => {
        console.log(error)
        if (error) {
          setEmailError('Correo o contraseña incorrectos')
          setPasswordError('Correo o contraseña incorrectos')
          toast.error('Correo o contraseña incorrectos')
        }
      })
      .finally(() => {
        setIsLoading(false)
        setLoading && setLoading(false)
      })
  }

  return { isLoading, getLogin, setIsLoading }
}
