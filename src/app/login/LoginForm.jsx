'use client'
/* eslint-disable react/prop-types */

import { useSearchParams, useRouter } from 'next/navigation'
import LogoSmall from '@/assets/images/logos/imagotipo-dentaclic.png'
import { EyeOff, EyePassword } from '../components/icons/Icons'
import LoginBG from '@/assets/images/background/login-bg.webp'
import { Suspense, useEffect, useId } from 'react'
import { useValidateForm } from './hooks/useValidateForm'
import Link from 'next/link'
import { LoginGoogle } from '../components/auth/LoginGoogle'

function Login () {
  const location = useSearchParams()
  const from = location.get('from') || '/'
  const router = useRouter()

  const emailId = useId()
  const passwordId = useId()

  const { success, setSuccess, email, password, setEmail, onButtonClick, emailError, passwordError, showPassword, setShowPassword, setPassword, isLoading, responseError, setRememberMe, rememberMe } = useValidateForm({ formName: 'login', from })

  useEffect(() => {
    const credentials = JSON.parse(window.localStorage.getItem('credentials'))

    if (credentials) {
      setRememberMe(true)
      setEmail(credentials.email)
      setPassword(credentials.password)
    }
  }, [])

  useEffect(() => {
    if (success) {
      router.push(from)
    }
  }, [success])

  return (
    <section className='w-full grid place-content-center place-items-center mt-3 lg:border lg:border-slate-100 dark:text-white dark:lg:border-darkColor lg:rounded-xl lg:shadow-xl lg:grid-cols-2'>
      <img className='hidden w-full h-full object-cover lg:block lg:rounded-s-xl' src={LoginBG.src} alt='Fotografía de dos odontólogos creando su cuenta en Dentaclic' />
      <div className='flex flex-col justify-center items-center gap-2 bg-white w-full max-w-[450px] border border-slate-100 dark:border-black dark:bg-darkLightColor rounded-xl shadow-xl p-1 xxs:p-4 lg:border-none lg:rounded-none lg:shadow-none lg:py-4'>
        <img src={LogoSmall.src} alt='Imagotipo de Dentaclic' className='w-24 mb-5' />
        <h1 className='font-semibold text-lg'>¡Sonríe, estás iniciando sesión!</h1>
        <form className='flex flex-col gap-2 mt-7 w-full max-w-[450px] relative' onSubmit={event => onButtonClick(event)}>
          {responseError && <span className='text-red-600 text-sm text-nowrap absolute -top-8 left-1/2 -translate-x-1/2'>{responseError}</span>}
          <div className=''>
            <p className='text-[#151717] dark:text-white font-semibold'>Email </p>
          </div>
          <div className={`rounded-lg h-12 flex items-center w-full transition relative mb-2 ${emailError ? 'border-red-600' : 'border-slate-200 dark:border-darkColor'} border focus-within:border focus-within:border-blue-400`}>
            <input id={emailId} name='email' type='text' autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value.trim())} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none dark:bg-darkColor' placeholder='Escribe tu correo electrónico' />
            {emailError && <span className='text-red-600 text-xs absolute -bottom-4 left-2'>{emailError}</span>}
          </div>
          <div className=''>
            <p className='text-[#151717] dark:text-white font-semibold'>Contraseña </p>
          </div>
          <div className={`rounded-lg h-12 flex items-center w-full transition ${passwordError ? 'border-red-600' : 'border-slate-200 dark:border-darkColor'} border focus-within:border focus-within:border-blue-400 relative mb-2`}>
            <input id={passwordId} name='password' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none dark:bg-darkColor' placeholder='Escribe tu contraseña' />
            <span onClick={() => setShowPassword(!showPassword)} className='cursor-pointer absolute right-5'>
              {showPassword ? <EyeOff className='dark:fill-white' /> : <EyePassword className='dark:fill-white' />}
            </span>
            {passwordError && <span className='text-red-600 text-xs absolute -bottom-4 left-2'>{passwordError}</span>}
          </div>
          <div className='flex items-center gap-3 justify-between flex-row my-2'>
            <div className='flex gap-2 items-center'>
              <label className='relative inline-flex items-center cursor-pointer'>
                <input type='checkbox' name='remember' className='sr-only peer' onChange={() => setRememberMe(!rememberMe)} checked={rememberMe} />
                <div className='group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-10 h-5  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-0 after:left-0 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 peer-hover:after:scale-95 peer-checked:after:rotate-0' />
              </label>
              <p className='text-sm'>Recordarme</p>
            </div>
            <Link href='/reset-password' className='text-blue-500 font-medium cursor-pointer text-nowrap text-sm'>Olvidé mi contraseña</Link>
          </div>
          <button onClick={onButtonClick} type='submit' disabled={isLoading} className='self-end mt-5 mb-3 bg-blue-500 border-none text-white font-medium text-sm rounded-xl h-12 w-full cursor-pointer transition hover:bg-[#2d79f3] disabled:opacity-75 disabled:hover:cursor-not-allowed'>
            {isLoading ? <div aria-label='Cargando información' className='inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]' /> : 'Iniciar Sesión'}
          </button>
        </form>
        <div className='flex w-full items-center gap-3 justify-between flex-col'>
          <hr className='w-full h-[1px] text-slate-300 dark:bg-darkColor' />
          <LoginGoogle setSuccess={setSuccess} success={success} />
        </div>
        <div className='text-center text-xs my-1 xxs:text-sm'>
          <span className='text-center text-xs mr-2 xxs:text-sm'>¿No tienes una cuenta?</span>
          <Link href={`/register?from=${from}`} className='text-blue-500'>Regístrate ahora</Link>
        </div>
      </div>
    </section>
  )
}

export const LoginForm = () => {
  return (
    <Suspense>
      <Login />
    </Suspense>
  )
}
