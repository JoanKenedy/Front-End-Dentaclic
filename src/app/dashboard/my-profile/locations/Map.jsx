'use client'
import { MapPin } from '@/app/components/icons/Icons'
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'

export const Map = ({ longitude, latitude, updateCoordinates }) => {
  const TOKEN = process.env.NEXT_PUBLIC_TOKEN_MAPBOX
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom: 16
  })

  const [marker, setMarker] = useState({
    latitude,
    longitude
  })

  useEffect(() => {
    setViewport((oldViewPort) => ({
      ...oldViewPort,
      latitude,
      longitude
    }))
    setMarker({ latitude, longitude })
    updateCoordinates({ latitude, longitude })
  }, [latitude, longitude])

  const handleMarkerDrag = (event) => {
    const latitude = event.lngLat.lat
    const longitude = event.lngLat.lng

    setMarker({ latitude, longitude })
    updateCoordinates({ latitude, longitude })
  }

  return (
    <div className='w-full h-80'>
      <ReactMapGl
        {...viewport}
        mapboxAccessToken={TOKEN}
        mapStyle='mapbox://styles/mapbox/streets-v12'
        onMove={(event) => {
          setViewport(event.viewState)
        }}
      >
        <Marker
          latitude={marker.latitude}
          longitude={marker.longitude}
          draggable
          onDragEnd={handleMarkerDrag}
        >
          <MapPin className='marker w-10 h-10 text-blue-500' />
        </Marker>
      </ReactMapGl>
    </div>
  )
}
