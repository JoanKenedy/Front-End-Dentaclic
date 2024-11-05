'use client'

import { useEffect, useRef, useState } from 'react'
import { useVerifyCode } from './hooks/useVerifyCode'
import { useRouter } from 'next/navigation'

/* eslint-disable react/prop-types */
export const VerifyOTP = ({ setShowModal, showModal, setIsLoading, email }) => {
  const endpointResendMail = process.env.NEXT_PUBLIC_API + 'auth/resend-email'
  const input1Ref = useRef(null)
  const input2Ref = useRef(null)
  const input3Ref = useRef(null)
  const input4Ref = useRef(null)
  const input5Ref = useRef(null)
  const input6Ref = useRef(null)
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false)
    setIsLoading(false)
  }

  const resendMail = () => {
    setLoading(true)
    console.log(email)
    fetch(endpointResendMail, {
      method: 'POST',
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
        console.log(response)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }

  const { success, setFirstNumber, setSecondNumber, setThirdNumber, setFourNumber, setFiveNumber, setSixNumber, error1, error2, error3, error4, error5, error6, isLoading, submitForm } = useVerifyCode({ setShowModal })

  useEffect(() => {
    if (success) {
      router.push('/login')
    }
  }, [success])

  return (
    <div className={`w-full h-svh bg-slate-500/50 px-4 fixed transition duration-300 top-0 right-0 z-20 ${showModal ? 'scale-100' : 'scale-0'}`}>
      <form className='w-11/12 max-w-80 bg-white flex flex-col items-center justify-center py-5 px-8 gap-5 shadow-md rounded-2xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>
        <span className='text-lg text-slate-700 font-bold'>Ingresa tu código</span>
        <p className='text-xs text-center'>Te enviamos un código de verificación a tu correo</p>
        <div className='w-full flex gap-2 items-center justify-center'>
          <input onChange={(e) => setFirstNumber(e.target.value)} onKeyUp={(e) => Number.isInteger(parseInt(e.target.value)) && input2Ref.current.focus()} autoFocus={showModal} type='number' className={`w-9 h-9 bg-zinc-200 text-center border-none rounded-lg text-[rgb(44,44,44)] outline-none font-semibold caret-[rgb(127,129,255)] focus:bg-[rgba(127,129,255,0.199)] transition valid:bg-[rgba(127,129,255,0.199)] ${error1 && 'outline-red-500'} ${success && 'outline-green-500'}`} id='input1Id' ref={input1Ref} />
          <input onChange={(e) => setSecondNumber(e.target.value)} onKeyUp={(e) => Number.isInteger(parseInt(e.target.value)) && input3Ref.current.focus()} type='number' className={`w-9 h-9 bg-zinc-200 text-center border-none rounded-lg text-[rgb(44,44,44)] outline-none font-semibold caret-[rgb(127,129,255)] focus:bg-[rgba(127,129,255,0.199)] transition valid:bg-[rgba(127,129,255,0.199)] ${error2 && 'outline-red-500'} ${success && 'outline-green-500'}`} id='input2Id' ref={input2Ref} />
          <input onChange={(e) => setThirdNumber(e.target.value)} onKeyUp={(e) => Number.isInteger(parseInt(e.target.value)) && input4Ref.current.focus()} type='number' className={`w-9 h-9 bg-zinc-200 text-center border-none rounded-lg text-[rgb(44,44,44)] outline-none font-semibold caret-[rgb(127,129,255)] focus:bg-[rgba(127,129,255,0.199)] transition valid:bg-[rgba(127,129,255,0.199)] ${error3 && 'outline-red-500'} ${success && 'outline-green-500'}`} id='input3Id' ref={input3Ref} />
          <input onChange={(e) => setFourNumber(e.target.value)} onKeyUp={(e) => Number.isInteger(parseInt(e.target.value)) && input5Ref.current.focus()} type='number' className={`w-9 h-9 bg-zinc-200 text-center border-none rounded-lg text-[rgb(44,44,44)] outline-none font-semibold caret-[rgb(127,129,255)] focus:bg-[rgba(127,129,255,0.199)] transition valid:bg-[rgba(127,129,255,0.199)] ${error4 && 'outline-red-500'} ${success && 'outline-green-500'}`} id='input4Id' ref={input4Ref} />
          <input onChange={(e) => setFiveNumber(e.target.value)} onKeyUp={(e) => Number.isInteger(parseInt(e.target.value)) && input6Ref.current.focus()} type='number' className={`w-9 h-9 bg-zinc-200 text-center border-none rounded-lg text-[rgb(44,44,44)] outline-none font-semibold caret-[rgb(127,129,255)] focus:bg-[rgba(127,129,255,0.199)] transition valid:bg-[rgba(127,129,255,0.199)] ${error5 && 'outline-red-500'} ${success && 'outline-green-500'}`} id='input5Id' ref={input5Ref} />
          <input onChange={(e) => setSixNumber(e.target.value)} onKeyUp={(e) => submitForm(e)} type='number' className={`w-9 h-9 bg-zinc-200 text-center border-none rounded-lg text-[rgb(44,44,44)] outline-none font-semibold caret-[rgb(127,129,255)] focus:bg-[rgba(127,129,255,0.199)] transition valid:bg-[rgba(127,129,255,0.199)] ${error6 && 'outline-red-500'} ${success && 'outline-green-500'}`} id='input6Id' ref={input6Ref} />
        </div>
        <button onClick={submitForm} disabled={isLoading} className='w-full h-8 border-none bg-blue-400 text-white font-semibold cursor-pointer rounded-xl transition hover:bg-blue-700 disabled:opacity-75 disabled:hover:cursor-not-allowed' type='submit'>
          {isLoading ? <div aria-label='Verificando información' className='inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]' /> : 'Verificar'}
        </button>
        <button onClick={() => handleCloseModal()} type='button' className='absolute top-1 right-1 shadow-xl bg-white rounded-full w-6 h-6 border-none text-lg'>×</button>
        <p className='text-sm flex flex-col justify-center items-center text-nowrap'>¿No recibiste el código?
          <button className='text-blue-500' type='button' onClick={resendMail}>
            {loading ? <div aria-label='Reenviando' className='inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]' /> : 'Reenviar código'}
          </button>
        </p>
      </form>
    </div>
  )
}
