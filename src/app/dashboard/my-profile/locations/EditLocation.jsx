'use client'

import { useUpdateLocation } from './hooks/useUpdateLocation'
import { MapForm } from './MapForm'

export const EditLocation = () => {
  const { addressError, address, setAddress, handleSubmit, updateCoordinates, handleFormSubmit } = useUpdateLocation()

  return (
    <form className='w-full grid gap-4 place-content-center place-items-center p-4' onSubmit={handleSubmit}>
      <div className='w-full p-4 grid mt-3 border border-slate-100 max-w-6xl rounded-xl shadow-xl lg:h-max lg:col-span-2'>
        <span className='text-[#151717] font-semibold text-lg'>Ingresa tu dirección <span className='text-red-500'>*</span></span>
        <span className='text-xs text-gray-500 mb-4'>Ingresa la dirección de tu consultorio para que tus pacientes puedan encontrarte, puedes arrastrar el pin hasta el punto deseado.</span>
        <span className='text-xs text-red-500'>{addressError}</span>
        <MapForm address={address} setAddress={setAddress} handleFormSubmit={handleFormSubmit} updateCoordinates={updateCoordinates} addressError={addressError} />
      </div>
    </form>
  )
}
