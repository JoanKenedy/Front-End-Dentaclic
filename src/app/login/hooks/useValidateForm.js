'use client'

import { LoginContext } from '@/context/login'
import { useState, useContext } from 'react'
import { toast } from 'sonner'
import { useCreateUser } from './useCreateUser'
import { useLogin } from './useLogin'
import { useValidatePassword } from './useValidatePassword'

export function useValidateForm ({ formName, from }) {
  const { setLoggedIn } = useContext(LoginContext)
  const [success, setSuccess] = useState(false)
  // Set Info
  const [showModal, setShowModal] = useState(false)

  const [lastName, setLastName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('PACIENTE')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  // Errors
  const [lastNameError, setLastNameError] = useState('')
  const [nameError, setNameError] = useState('')
  const [roleError, setRoleError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [responseError, setResponseError] = useState(false)

  const { createUser } = useCreateUser()

  const { getLogin } = useLogin()
  const { validatePassword } = useValidatePassword()

  const onButtonClick = (event) => {
    // set initial error values to empty
    event.preventDefault()
    setIsLoading(true)
    setResponseError(false)
    setEmailError('')
    setPasswordError('')
    setNameError('')
    setRoleError('')
    setLastNameError('')

    if (formName === 'register') {
      if (!name) {
        setNameError('Introduce tu nombre')
        toast.error('Introduce tu nombre')
        setIsLoading(false)
        return
      }

      if (name.length < 3) {
        setNameError('Tu nombre debe tener al menos 3 caracteres')
        toast.error('Tu nombre debe tener al menos 3 caracteres')
        setIsLoading(false)
        return
      }

      if (!lastName) {
        setLastNameError('Introduce tu apellido')
        toast.error('Introduce tu apellido')
        setIsLoading(false)
        return
      }

      if (lastName.length < 3) {
        setLastNameError('Tu apellido debe tener al menos 3 caracteres')
        toast.error('Tu apellido debe tener al menos 3 caracteres')
        setIsLoading(false)
        return
      }
    }

    if (!email) {
      setEmailError('Introduce tu email')
      toast.error('Introduce tu email')
      setIsLoading(false)
      return
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Introduce un correo valido')
      toast.error('Introduce un correo valido')
      setIsLoading(false)
      return
    }

    if (formName === 'register') {
      if (!role) {
        setRoleError('Introduce cómo te quieres registrar')
        toast.error('Introduce cómo te quieres registrar')
        setIsLoading(false)
        return
      }
    }

    if (!password) {
      setPasswordError('Ingrese la contraseña')
      toast.error('Ingrese la contraseña')
      setIsLoading(false)
      return
    }

    if (formName === 'register') {
      const flagPassword = validatePassword({ password })

      if (!flagPassword) {
        createUser({ name, lastName, email, password, from, role, setEmailError, setShowModal, setLoading: setIsLoading })
      } else {
        setIsLoading(false)
      }
    }

    if (formName === 'login') {
      getLogin({ password, correo: email, setEmail, setSuccess, setLoggedIn, setLoading: setIsLoading, from, setEmailError, setPasswordError, rememberMe })
    }
  }

  return { success, setSuccess, rememberMe, setLastName, setRememberMe, lastNameError, role, name, email, password, setIsLoading, showModal, setShowModal, onButtonClick, setName, setEmail, setRole, setPassword, setShowPassword, showPassword, isLoading, roleError, emailError, passwordError, responseError, nameError }
}
