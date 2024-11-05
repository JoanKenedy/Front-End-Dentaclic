'use client'

import { useState } from 'react'
import { toast } from 'sonner'

export function useValidatePassword () {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const minLengthPattern = /^.{8,}$/
  const uppercasePattern = /[A-Z]/
  const lowercasePattern = /[a-z]/
  const digitPattern = /\d/
  const specialCharPattern = /[@$!%*?&]/
  let errors = ''
  let flag = false

  const validatePassword = ({ password, repeatPassword }) => {
    setError('')

    if (repeatPassword) {
      if (!password || !repeatPassword) {
        setError('Introduce tu contraseña')
        toast.error('Introduce tu contraseña')
        setIsLoading(false)
        flag = true
        return flag
      }

      if (password !== repeatPassword) {
        errors = errors + ' 🔴 Las contraseñas no coinciden'
        setError(errors)
        toast.error('Las contraseñas no coinciden')
        setIsLoading(false)
        flag = true
      }
    }

    if (!minLengthPattern.test(password)) {
      errors = '🔴 Min. 8 caracteres '
      setError(errors)
      toast.error('Min. 8 caracteres')
      setIsLoading(false)
      flag = true
    }

    if (!uppercasePattern.test(password)) {
      errors = errors + '🔴 Una mayúscula '
      setError(errors)
      toast.error('Una mayúscula ')
      setIsLoading(false)
      flag = true
    }

    if (!lowercasePattern.test(password)) {
      errors = errors + '🔴 Una minúscula '
      setError(errors)
      toast.error('Una minúscula ')
      setIsLoading(false)
      flag = true
    }

    if (!digitPattern.test(password)) {
      errors = errors + '🔴 Un número '
      setError(errors)
      toast.error('Un número ')
      setIsLoading(false)
      flag = true
    }

    if (!specialCharPattern.test(password)) {
      errors = errors + ' 🔴 Un carácter especial'
      setError(errors)
      toast.error('Un carácter especial ')
      setIsLoading(false)
      flag = true
    }

    return flag
  }

  return { error, isLoading, setIsLoading, validatePassword }
}
