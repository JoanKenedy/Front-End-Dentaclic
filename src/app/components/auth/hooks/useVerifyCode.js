'use client'

import { useState } from 'react'
import { toast } from 'sonner'

export function useVerifyCode ({ setShowModal }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  const [error3, setError3] = useState(false)
  const [error4, setError4] = useState(false)
  const [error5, setError5] = useState(false)
  const [error6, setError6] = useState(false)
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [thirdNumber, setThirdNumber] = useState('')
  const [fourNumber, setFourNumber] = useState('')
  const [fiveNumber, setFiveNumber] = useState('')
  const [sixNumber, setSixNumber] = useState('')
  const [success, setSuccess] = useState(false)

  const verifyCodeURL = process.env.NEXT_PUBLIC_API + 'auth/verificarCuenta'

  const submitForm = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setSuccess(false)
    setError1(false)
    setError2(false)
    setError3(false)
    setError4(false)
    setError5(false)
    setError6(false)
    let flag = true

    // Validaciones
    if (!firstNumber) {
      setIsLoading(false)
      setError1(true)
      flag = false
    }
    if (!/^([0-9])*$/.test(firstNumber)) {
      setIsLoading(false)
      setError1(true)
      flag = false
    }
    if (firstNumber.length > 1) {
      setIsLoading(false)
      setError1(true)
      flag = false
    }
    if (!secondNumber) {
      setIsLoading(false)
      setError2(true)
      flag = false
    }
    if (!/^([0-9])*$/.test(secondNumber)) {
      setIsLoading(false)
      setError2(true)
      flag = false
    }
    if (secondNumber.length > 1) {
      setIsLoading(false)
      setError2(true)
      flag = false
    }
    if (!thirdNumber) {
      setIsLoading(false)
      setError3(true)
      flag = false
    }
    if (!/^([0-9])*$/.test(thirdNumber)) {
      setIsLoading(false)
      setError3(true)
      flag = false
    }
    if (thirdNumber.length > 1) {
      setIsLoading(false)
      setError3(true)
      flag = false
    }
    if (!fourNumber) {
      setIsLoading(false)
      setError4(true)
      flag = false
    }
    if (!/^([0-9])*$/.test(fourNumber)) {
      setIsLoading(false)
      setError4(true)
      flag = false
    }
    if (fourNumber.length > 1) {
      setIsLoading(false)
      setError4(true)
      flag = false
    }
    if (!fiveNumber) {
      setIsLoading(false)
      setError5(true)
      flag = false
    }
    if (!/^([0-9])*$/.test(fiveNumber)) {
      setIsLoading(false)
      setError5(true)
      flag = false
    }
    if (fiveNumber.length > 1) {
      setIsLoading(false)
      setError5(true)
      flag = false
    }
    if (!sixNumber) {
      setIsLoading(false)
      setError6(true)
      flag = false
    }
    if (!/^([0-9])*$/.test(sixNumber)) {
      setIsLoading(false)
      setError6(true)
      flag = false
    }
    if (sixNumber.length > 1) {
      setIsLoading(false)
      setError6(true)
      flag = false
    }

    if (flag) {
      verifyCode()
    }
  }

  const verifyCode = () => {
    const codeUser = parseInt((firstNumber + secondNumber + thirdNumber + fourNumber + fiveNumber + sixNumber))

    fetch(verifyCodeURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ codigo: codeUser })
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
        setIsLoading(false)
        setSuccess(true)
        setShowModal(false)
        toast.success('Cuenta creada correctamente')
      })
      .catch((error) => {
        console.log(error)
        setError1(true)
        setError2(true)
        setError3(true)
        setError4(true)
        setError5(true)
        setError6(true)
        setIsLoading(false)
        return error
      })
  }

  return { success, isLoading, submitForm, error1, error2, error3, error4, error5, error6, setFirstNumber, setSecondNumber, setThirdNumber, setFourNumber, setFiveNumber, setSixNumber }
}
