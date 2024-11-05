'use client'

import { toast } from 'sonner'
// import { useLogin } from './useLogin'
import { useState } from 'react'

export function useCreateUser () {
  // const { getLogin } = useLogin()
  const [isLoading, setIsLoading] = useState(false)
  const endpointCreateUser = process.env.NEXT_PUBLIC_API + 'usuarios/'

  const createUser = ({ name, email, password, lastName, from, role, setEmailError, setShowModal, setLoading }) => {
    setIsLoading(true)
    setEmailError('')
    const fullName = name + ' ' + lastName

    fetch(endpointCreateUser, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre: fullName, apellidos: lastName, correo: email, password, rol: role })
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
        setShowModal(true)
        setLoading(false)
      })
      .catch((error) => {
        const message = error.message.split(',')
        const path = message.find((el) => el === '"path":"correo"')
        setLoading(false)
        if (path) {
          setEmailError('Correo ya registrado')
          toast.error('Correo ya registrado')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return { createUser, isLoading }
}
