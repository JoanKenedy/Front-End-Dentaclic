import 'mapbox-gl/dist/mapbox-gl.css'
import { AddressForm } from './AddressForm'
import { Map } from './Map'

export const MapForm = ({ address, setAddress, handleFormSubmit, updateCoordinates, addressError }) => {
  return (
    <div className='w-full grid place-content-center max-w-7xl gap-5 lg:grid-cols-2'>
      <AddressForm handleFormSubmit={handleFormSubmit} address={address} setAddress={setAddress} addressError={addressError} />
      {address.longitude && address.latitude && <Map longitude={address.longitude} latitude={address.latitude} updateCoordinates={updateCoordinates} />}
    </div>
  )
}
