'use client'

import { useContext, useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { useCreatePatient } from '@/app/register/hooks/useCreatePatient'
import { decodeJwt } from '@/utils/decodeJwt'
import { LoginContext } from '../login'
import { PUT } from '@/app/api/route'

export function useUserData () {
  const { setLoggedIn, loggedIn, setUserData, setEmail, setPersonalData, setLoading, setProfileCreated } = useContext(LoginContext)
  const { createPatient } = useCreatePatient()
  const responseError = useRef()

  useEffect(() => {
    setLoading(true)
    const user = JSON.parse(window.localStorage.getItem('user'))
    let collection

    if (!user) {
      setLoggedIn(false)
      return
    }

    setPersonalData(user.personalData)

    const { payload } = decodeJwt(user.token)
    const expirationTime = payload.exp
    const timeNow = Math.round(((new Date().getTime()) / 1000))

    if (timeNow > expirationTime) {
      window.localStorage.removeItem('user')
      PUT('token')
      setLoggedIn(false)
      toast.info('Tu sesión ha caducado, por favor, vuelve a iniciar sesión')
      // router.push('/login')
    }

    if (user.role === 'ESPECIALISTA') {
      collection = 'sesion/especialistas/'
    } else if (user.role === 'CLINICA') {
      collection = 'sesion/clinicas/'
    } else if (user.role === 'PACIENTE') {
      collection = 'sesion/pacientes/'
    }

    const endpointApiSession = process.env.NEXT_PUBLIC_API + collection + user.id

    fetch(endpointApiSession, {
      method: 'GET',
      headers: {
        'x-token': user.token
      }
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
        if (response.message !== 'Unauthorized') {
          setLoggedIn(true)
          setEmail(user.email)

          if (user.role === 'ESPECIALISTA') {
            setUserData(response.especialistaBuscar)
            setPersonalData(response.especialistaBuscar.usuario)
            setProfileCreated(true)
          } else if (user.role === 'CLINICA') {
            setUserData(response.clinica)
            setProfileCreated(true)
          } else if (user.role === 'PACIENTE') {
            setUserData(response.pacienteBuscar)
            setPersonalData(response.pacienteBuscar.usuario)
            setProfileCreated(true)
          }
        } else {
          toast.error('Error, invalid token, you need to login')
        }
      })
      .catch((error) => {
        console.log(error.message)
        responseError.current = error.message
        if (error.message === '{"msg":"El id enviado si especialista pero no ha creado su perfil "}') {
          setLoggedIn(true)
          setEmail(user.email)
          setProfileCreated(false)
          toast.info('Aún no has creado tu perfil de especialista', {
            description: 'Por favor, llena los datos para crear tu perfil y puedas aparecer en resultados.'
          })
        }
      })
      .finally(() => {
        setLoading(false)
        if (responseError.current === '{"msg":"El id enviado si es paciente pero no ha creado su perfil de paciente"}') {
          setLoggedIn(true)
          setEmail(user.email)
          createPatient()
        }
      })
  }, [loggedIn, setEmail, setLoggedIn, setUserData])
}
