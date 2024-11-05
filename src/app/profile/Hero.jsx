import { CalendarMonth, Check, Send, Star } from '@/app/components/icons/Icons'
import Bg from '@/assets/images/background/bg-perfil-doc.webp'

/* eslint-disable react/prop-types */
export const Hero = ({ loading, userData }) => {
  return (
    loading || !userData ? <LoadingHero /> : <InfoHero userData={userData} />
  )
}

export const InfoHero = ({ userData }) => {
  return (
    <section className='w-full rounded-xl bg-white shadow-xl dark:bg-darkColor dark:text-white'>
      <img className='w-full h-36 object-cover rounded-t-xl bg-white dark:bg-darkColor lg:h-48 xl:h-56' src={Bg.src} alt='Fondo de perfil del Dr. Raúl' />
      <article className='px-4 relative mt-20 xs:flex xs:flex-col md:flex-row md:items-end md:-mt-12'>
        <img className='w-32 border-4 aspect-square bg-white object-cover border-white dark:border-darkLightColor rounded-s-md rounded-e-full shadow-button absolute -top-36 left-1/2 -translate-x-1/2 md:static md:w-44 md:h-44 md:-translate-x-0 md:left-10 md:-top-20 xl:w-48 xl:-top-24' src={userData?.usuario?.img} alt={`Fotografía de perfil del Dr(a). ${userData?.usuario.nombre}`} />
        <div className='flex flex-col md:ml-4'>
          <h1 className='flex items-center font-bold gap-2 text-lg text-nowrap xs:text-xl xl:text-2xl'>Dr. {userData?.usuario.nombre} <span><Check className='w-6 h-6 p-1 bg-blue-500 rounded-full text-white' /></span></h1>
          <h2 className='flex gap-1 text-xs text-blue-400 xxs:text-sm xs:text-base xl:text-lg'>
            {
              userData?.especialidades.map((el, i) => {
                if (i < 3) {
                  return <span key={i}>{el} {userData.especialidades.length > 1 && i !== 2 && '-'}</span>
                } else {
                  return null
                }
              })
            }
          </h2>
          <h3 className='text-slate-500 text-sm xs:text-base xl:text-lg dark:text-white/60'>{userData?.ciudad}</h3>
          <h4 className='text-slate-700 text-sm xs:text-base xl:text-lg dark:text-white/60'>No. de cédula:
            {
              userData?.cedulaProfesional.map((cedula, i) => {
                if (i < 3) {
                  return <span key={i}> {cedula}</span>
                } else {
                  return null
                }
              })
            }
          </h4>
        </div>
      </article>
      <div className='px-4 my-4 hidden'>
        <h5 className='w-full grid gap-2 grid-cols-[repeat(auto-fill,_minmax(100px,_max-content))]'>
          <span className='w-max px-4 py-1 rounded-full bg-slate-400 text-white text-xs'>Ortodoncia</span>
          <span className='w-max px-4 py-1 rounded-full bg-slate-400 text-white text-xs'>Implantología</span>
          <span className='w-max px-4 py-1 rounded-full bg-slate-400 text-white text-xs'>Cirujana</span>
        </h5>
      </div>
      <article className='px-4 gap-2 mt-4 flex flex-col items-center md:grid md:grid-cols-3'>
        <button className='max-w-96 w-full justify-center bg-blue-500 text-white rounded-md shadow-button flex items-center gap-2 px-2 py-1'>
          <CalendarMonth className='w-5 h-5 text-white' />
          Agendar cita
        </button>
        <button disabled className='max-w-96 disabled:cursor-not-allowed w-full justify-center bg-blue-800 text-white rounded-md shadow-button flex items-center gap-2 px-2 py-1'>
          <Send className='w-5 h-5' />
          Mensaje
        </button>
        <button className='max-w-96 w-full px-2 py-1 h-8 text-white rounded-md text-sm transition hover:bg-blue-800 bg-blue-500 xs:px-4 xs:py-1 xs:text-base'>
          Seguir
        </button>
        <div className='flex justify-center gap-2 md:col-start-3'>
          <span className='font-bold text-lg'>5.0</span>
          <div className='flex gap-1 relative pb-8'>
            <Star className='w-6 h-6 fill-yellow-500 text-yellow-500' />
            <Star className='w-6 h-6 fill-yellow-500 text-yellow-500' />
            <Star className='w-6 h-6 fill-yellow-500 text-yellow-500' />
            <Star className='w-6 h-6 fill-yellow-500 text-yellow-500' />
            <Star className='w-6 h-6 fill-yellow-500 text-yellow-500' />
            <span className='text-xs absolute right-1/2 translate-x-1/2 bottom-4 text-nowrap md:right-0 md:translate-x-0'>30 Opiniones</span>
          </div>
        </div>
      </article>
    </section>
  )
}

export const LoadingHero = () => {
  return (
    <section className='w-full rounded-xl shadow-xl'>
      <div className='w-full h-36 object-cover rounded-t-xl bg-slate-400 animate-pulse lg:h-48 xl:h-56' />
      <article className='px-4 relative mt-20 xs:flex xs:flex-col xs:items-center md:mt-5'>
        <div className='w-32 border-4 aspect-square object-cover bg-slate-400 animate-pulse border-white rounded-s-md rounded-e-full shadow-button absolute -top-36 left-1/2 -translate-x-1/2 md:w-44 md:-translate-x-0 md:left-10 md:-top-20 xl:w-48 xl:-top-24' />
        <div className='w-1/2 flex flex-col gap-2 md:ml-20 lg:ml-40 xl:ml-10'>
          <div className='w-[80%] max-w-56 h-4 rounded-full bg-slate-400 animate-pulse' />
          <div className='w-[80%] max-w-56 h-4 rounded-full bg-slate-400 animate-pulse' />
          <div className='w-[80%] max-w-56 h-4 rounded-full bg-slate-400 animate-pulse' />
          <div className='w-[80%] max-w-56 h-4 rounded-full bg-slate-400 animate-pulse' />
        </div>
      </article>
      <div className='px-4 my-4 hidden'>
        <h5 className='w-full grid gap-2 grid-cols-[repeat(auto-fill,_minmax(100px,_max-content))]'>
          <span className='w-max px-4 py-1 rounded-full bg-slate-400 text-white text-xs'>Ortodoncia</span>
          <span className='w-max px-4 py-1 rounded-full bg-slate-400 text-white text-xs'>Implantología</span>
          <span className='w-max px-4 py-1 rounded-full bg-slate-400 text-white text-xs'>Cirujana</span>
        </h5>
      </div>
      <article className='px-4 gap-2 mt-4 flex flex-col items-center md:grid md:grid-cols-3'>
        <button className='max-w-96 w-full justify-center h-8 bg-slate-400 rounded-md shadow-button flex items-center gap-2 px-2 py-1 animate-pulse' />
        <button className='max-w-96 w-full justify-center h-8 bg-slate-400 rounded-md shadow-button flex items-center gap-2 px-2 py-1 animate-pulse' />
        <button className='max-w-96 w-full justify-center h-8 bg-slate-400 rounded-md shadow-button flex items-center gap-2 px-2 py-1 animate-pulse' />
        <div className='flex justify-center gap-2 md:col-start-3'>
          <span className='w-12 h-8 bg-slate-400 animate-pulse rounded-full' />
          <div className='flex gap-1 relative pb-8'>
            <Star className='w-6 h-6 fill-slate-400 text-slate-400 animate-pulse' />
            <Star className='w-6 h-6 fill-slate-400 text-slate-400 animate-pulse' />
            <Star className='w-6 h-6 fill-slate-400 text-slate-400 animate-pulse' />
            <Star className='w-6 h-6 fill-slate-400 text-slate-400 animate-pulse' />
            <Star className='w-6 h-6 fill-slate-400 text-slate-400 animate-pulse' />
            <span className='w-24 h-2 bg-slate-400 animate-pulse rounded-full absolute right-1/2 translate-x-1/2 bottom-4 text-nowrap md:right-0 md:translate-x-0' />
          </div>
        </div>
      </article>
    </section>
  )
}
