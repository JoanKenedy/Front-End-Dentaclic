import { useId } from 'react'
import { AutoCompletePlace } from './AutoCompletePlace'

/* eslint-disable react/prop-types */
export const AddressForm = ({ handleFormSubmit, address, setAddress, addressError }) => {
  const countryId = useId()
  const handleManualInputChange = (event, stateProperty) => {
    const newAddress = { ...address }
    newAddress[stateProperty] = event.target.value

    setAddress(newAddress)
  }
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full flex flex-wrap justify-between items-center max-w-7xl gap-4' onSubmit={handleFormSubmit}>
        <AutoCompletePlace
          setAddress={setAddress}
          handleManualInputChange={handleManualInputChange}
          streetAndNumber={address.streetAndNumber}
        />

        <div className='flex flex-col'>
          <label htmlFor='City'>Estado</label>
          <input className={`border ${addressError ? 'border-red-500' : 'border-slate-500'} rounded-md p-2 focus:outline focus:outline-blue-500`} type='text' id='City' placeholder='Estado' value={address.region} onChange={(event) => handleManualInputChange(event, 'region')} />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='Alcaldía'>Alcaldía/Municipio</label>
          <input className={`border ${addressError ? 'border-red-500' : 'border-slate-500'} rounded-md p-2 focus:outline focus:outline-blue-500`} type='text' id='Alcaldía' placeholder='Alcaldía/Municipio' value={address.place} onChange={(event) => handleManualInputChange(event, 'place')} />
        </div>

        <div className='flex flex-col'>
          <label htmlFor={countryId}>País</label>
          <input className={`border ${addressError ? 'border-red-500' : 'border-slate-500'} rounded-md p-2 focus:outline focus:outline-blue-500`} type='text' id={countryId} placeholder='País' value={address.country} onChange={(event) => handleManualInputChange(event, 'country')} />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='Postcode'>Código Postal</label>
          <input className={`border ${addressError ? 'border-red-500' : 'border-slate-500'} rounded-md p-2 focus:outline focus:outline-blue-500`} type='text' id='Postcode' placeholder='Código Postal' value={address.postcode} onChange={(event) => handleManualInputChange(event, 'postcode')} />
        </div>
      </div>
    </div>
  )
}
