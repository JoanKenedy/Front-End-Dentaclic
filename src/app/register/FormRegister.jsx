'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useId } from 'react'
import LogoSmall from '@/assets/images/logos/imagotipo-dentaclic.png'
import { useValidateForm } from '../login/hooks/useValidateForm'
import { EyeOff, EyePassword } from '../components/icons/Icons'
import Link from 'next/link'
import { LoginGoogle } from '../components/auth/LoginGoogle'
import { VerifyOTP } from '../components/auth/VerifyOTP'

function RegisterForm () {
  const location = useSearchParams()
  const from = location.get('from') || '/'

  const { success, setSuccess, lastNameError, setLastName, roleError, role, setRole, name, email, password, onButtonClick, setName, setEmail, setPassword, setShowPassword, setIsLoading, showPassword, isLoading, emailError, passwordError, responseError, nameError, showModal, setShowModal } = useValidateForm({ formName: 'register' })
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()
  const roleId = useId()
  const lastNameId = useId()

  return (
    <>
      <section className='w-full flex justify-center items-center pt-24 md:pt-28 pb-10 dark:bg-darkLightColor'>
        <div className='w-full flex justify-center items-center max-w-7xl flex-col px-4'>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full flex justify-center items-center flex-col max-w-md bg-white rounded-lg shadow-button p-6 dark:bg-darkColor dark:text-white'>
              <img src={LogoSmall.src} alt='Imagotipo de Dentaclic' className='w-24 mb-5' />
              <h2 className='text-2xl font-bold mb-4'>¡Sonríe, te estás registrando!</h2>
              <form className='flex flex-col relative'>
                {responseError && <span className='text-red-600 text-sm text-nowrap absolute -top-8 left-1/2 -translate-x-1/2'>{responseError}</span>}
                <div className=''>
                  <label className='text-[#151717] font-semibold dark:text-white' htmlFor={nameId}>Nombre </label>
                </div>
                <div className={`rounded-lg h-12 flex items-center w-full transition relative mb-3 ${nameError ? 'border-red-600' : 'border-slate-200  dark:border-darkColor'} border focus-within:border focus-within:border-blue-400`}>
                  <input type='text' name='Nombre' id={nameId} onChange={(e) => setName(e.target.value.trim())} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none dark:bg-darkLightColor' placeholder='Escribe tu nombre' />
                  {nameError && <span className='text-red-600 text-xs absolute -bottom-4 left-2 text-nowrap'>{nameError}</span>}
                </div>
                <div className=''>
                  <label className='text-[#151717] font-semibold dark:text-white' htmlFor={lastNameId}>Apellidos </label>
                </div>
                <div className={`rounded-lg h-12 flex items-center w-full transition relative mb-3 ${lastNameError ? 'border-red-600' : 'border-slate-200 dark:border-darkColor'} border focus-within:border focus-within:border-blue-400`}>
                  <input type='text' name='Apellido' id={lastNameId} onChange={(e) => setLastName(e.target.value.trim())} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none dark:bg-darkLightColor' placeholder='Escribe tus apellidos' />
                  {lastNameError && <span className='text-red-600 text-xs absolute -bottom-4 left-2 text-nowrap'>{lastNameError}</span>}
                </div>
                <div className=''>
                  <label className='text-[#151717] font-semibold dark:text-white' htmlFor={emailId}>Email </label>
                </div>
                <div className={`rounded-lg h-12 flex items-center w-full transition relative mb-3 ${emailError ? 'border-red-600' : 'border-slate-200 dark:border-darkColor'} border focus-within:border focus-within:border-blue-400`}>
                  <input type='text' name='Correo' id={emailId} onChange={(e) => setEmail(e.target.value.trim())} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none dark:bg-darkLightColor' placeholder='Escribe tu correo electrónico' />
                  {emailError && <span className='text-red-600 text-xs absolute -bottom-4 left-2'>{emailError}</span>}
                </div>
                <div className=''>
                  <label className='text-[#151717] font-semibold dark:text-white' htmlFor={roleId}>¿Cómo te quieres registrar? </label>
                </div>
                <div className={`rounded-lg h-12 flex items-center w-full transition relative mb-3 ${roleError ? 'border-red-600' : 'border-slate-200 dark:border-darkColor'} border focus-within:border focus-within:border-blue-400`}>
                  <select name='Role' value={role} id={roleId} onChange={(e) => setRole(e.target.value)} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none dark:bg-darkLightColor' placeholder='Selecciona como te quieres registrar'>
                    <option value='PACIENTE'>Paciente</option>
                    <option value='ESPECIALISTA'>Odontólogo</option>
                    {/* <option value='CLINICA'>Clínica</option> */}
                  </select>
                  {roleError && <span className='text-red-600 text-xs absolute -bottom-4 left-2'>{roleError}</span>}
                </div>
                <div className=''>
                  <label className='text-[#151717] font-semibold dark:text-white' htmlFor={passwordId}>Contraseña </label>
                </div>
                <div className={`rounded-lg h-12 flex items-center w-full transition ${passwordError ? 'border-red-500' : 'border-slate-200 dark:border-darkColor'} border focus-within:border focus-within:border-blue-400 relative mb-3`}>
                  <input type={showPassword ? 'text' : 'password'} id={passwordId} name='Password' onChange={(e) => setPassword(e.target.value)} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none dark:bg-darkLightColor' placeholder='Escribe tu contraseña' />
                  <span onClick={() => setShowPassword(!showPassword)} className='cursor-pointer absolute right-5'>
                    {showPassword ? <EyeOff className='dark:fill-white' /> : <EyePassword className='dark:fill-white' />}
                  </span>
                  {passwordError && <span className='text-red-600 text-xs absolute -bottom-8 left-2 flex flex-wrap'>{passwordError}</span>}
                </div>
                <p className='text-sm text-gray-700 dark:text-white/60'>Al hacer clic en <span className='text-blue-500'>Registrarse</span>, confirmas que has leído, entendido y aceptas los <a className='text-blue-500' href='#' target='_blank' rel='noopener noreferrer'>Términos y Condiciones</a>, así como nuestra <a className='text-blue-500' href='#' target='_blank' rel='noopener noreferrer'>Política de Privacidad</a></p>
                <p className='mt-4'>
                  ¿Ya tienes una cuenta?
                  <Link className='text-sm text-blue-500 hover:underline mt-4 ml-2' href={`/login?from=${from}`}>Inicia Sesión</Link>
                </p>
                <button onClick={onButtonClick} type='submit' disabled={isLoading} className='self-end mt-5 mb-3 bg-blue-500 border-none text-white font-medium text-sm rounded-xl h-12 w-full cursor-pointer transition hover:bg-[#2d79f3] disabled:opacity-75 disabled:hover:cursor-not-allowed'>
                  {isLoading ? <div aria-label='Cargando información' className='inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]' /> : 'Registrarse'}
                </button>
              </form>
              <div className='flex w-full items-center gap-3 justify-between flex-col'>
                <hr className='w-full h-[1px] text-slate-300' />
                <LoginGoogle success={success} setSuccess={setSuccess} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <VerifyOTP
        showModal={showModal}
        setShowModal={setShowModal}
        setIsLoading={setIsLoading}
        name={name}
        email={email}
        password={password}
        from={from}
        role={role}
      />
    </>
  )
}

export const FormRegister = () => {
  return (
    <Suspense>
      <RegisterForm />
    </Suspense>
  )
}
