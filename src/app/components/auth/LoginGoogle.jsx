'use client'

import { POST } from '@/app/api/route'
import { LoginContext } from '@/context/login'
import { decodeJwt } from '@/utils/decodeJwt'
/* eslint-disable react/prop-types */
import { GoogleLogin } from '@react-oauth/google'
import { useRouter } from 'next/navigation'
import { useContext, useId, useRef, useState } from 'react'
import { toast } from 'sonner'

export const LoginGoogle = ({ success, setSuccess }) => {
  const { setLoggedIn, setEmail, setPersonalData } = useContext(LoginContext)
  const [modalForm, setModalForm] = useState(false)
  const [role, setRole] = useState('PACIENTE')
  const [isLoading, setIsLoading] = useState(false)
  const roleId = useId()
  const endpointGoogleLogin = process.env.NEXT_PUBLIC_API + 'auth/google'
  const endpointExistEmail = process.env.NEXT_PUBLIC_API + 'auth/howToRegister'
  const router = useRouter()

  const credential = useRef()

  const handleError = () => {
    console.error('Error to login with Google')
  }

  const handleSuccess = (credentialResponse) => {
    if (credentialResponse.credential) {
      const { payload } = decodeJwt(credentialResponse.credential)
      credential.current = credentialResponse.credential
      existEmail(payload.email)
    }
  }

  const existEmail = (email) => {
    fetch(endpointExistEmail, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ correo: email })
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
        if (response.register) {
          loginWithGoogle(credential.current)
        } else {
          toast.info('Correo ya registrado', {
            description: 'Tu correo fue registrado con contraseña, inicia sesión con ella en su lugar'
          })
          router.push('/login')
        }
      })
      .catch((error) => {
        if (error.message === '{"msg":"No existe el correo en nuestro BD"}') {
          setModalForm(true)
        }
      })
  }

  const loginWithGoogle = (credentialResponse, register) => {
    let body
    if (register) {
      body = { id_token: credentialResponse, rol: role }
    } else {
      body = { id_token: credentialResponse }
    }
    setIsLoading(true)
    fetch(endpointGoogleLogin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
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
        window.localStorage.setItem('user', JSON.stringify({ correo: response.usuario.correo, token: response.token, id: response.usuario.uid, role: response.usuario.rol, personalData: response.usuario }))
        setLoggedIn(true)
        setPersonalData(response.usuario)
        setEmail(response.usuario.correo)
        POST('token', response.token, response.usuario.rol)
        router.push('/')
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }

  const submitForm = (event) => {
    event.preventDefault()
    const register = true
    loginWithGoogle(credential.current, register)
  }

  return (
    <>
      <GoogleLogin useOneTap onError={handleError} onSuccess={handleSuccess} />
      <div className={`w-full h-svh bg-slate-500/50 px-4 fixed transition duration-300 top-0 right-0 z-20 ${modalForm ? 'scale-100' : 'scale-0'}`}>
        <form className='w-11/12 max-w-80 bg-white flex flex-col items-center justify-center py-5 px-8 gap-5 shadow-md rounded-2xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>
          <span className='text-lg text-slate-700 font-bold'>¿Cómo te quieres registrar?</span>
          <div className='w-full flex gap-2 items-center justify-center'>
            <select name='Role' value={role} id={roleId} onChange={(e) => setRole(e.target.value)} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none' placeholder='Selecciona como te quieres registrar'>
              <option value='PACIENTE'>Paciente</option>
              <option value='ESPECIALISTA'>Odontólogo</option>
              {/* <option value='CLINICA'>Clínica</option> */}
            </select>
          </div>
          <button onClick={submitForm} disabled={isLoading} className='w-full h-8 border-none bg-blue-400 text-white font-semibold cursor-pointer rounded-xl transition hover:bg-blue-700 disabled:opacity-75 disabled:hover:cursor-not-allowed' type='submit'>
            {isLoading ? <div aria-label='Verificando información' className='inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]' /> : 'Enviar'}
          </button>
          <button onClick={() => setModalForm(false)} type='button' className='absolute top-1 right-1 shadow-xl bg-white rounded-full w-6 h-6 border-none text-lg'>×</button>
        </form>
      </div>
    </>
  )
}
