'use client'

import { useRef } from 'react'
import { GalleryLocation } from './GalleryLocation'
import { Building, ImageIcon } from '@/app/components/icons/Icons'

/* eslint-disable react/prop-types */
export const Locations = ({ activeMenu, profileData }) => {
  const link = useRef()

  const formatAddress = () => {
    if (profileData) {
      const address = profileData.calle + ', ' + profileData.colonia + ', ' + profileData.codigoPostal + ', ' + profileData.ciudad
      link.current = `https://www.google.com.mx/maps/search/${profileData.latitud},${profileData.longitud}/@${profileData.latitud},${profileData.longitud}`
      return address
    }
  }

  return (
    <section className={`w-full flex-col gap-5 rounded-xl bg-white dark:bg-darkColor dark:text-white shadow-xl p-4 mt-4 ${activeMenu === '3' ? 'flex' : 'hidden'}`}>
      <article className='text-blue-800 dark:text-white'>
        <span className='text-blue-800 font-bold flex gap-2 mb-2 dark:text-white'><Building className='w-6 h-6 text-blue-500 dark:text-white' />Ubicaciones</span>
        <p className='transition-all duration-300 overflow-hidden'>
          {formatAddress()}
        </p>
        <a className='text-xs underline' href={link.current} target='_blank' rel='noopener noreferrer'>Ver ubicación</a>
      </article>
      <article className='text-blue-800 dark:text-white'>
        <span className='text-blue-800 font-bold flex gap-2 mb-2 dark:text-white'><ImageIcon className='w-6 h-6 text-blue-500 dark:text-white' />Fotos del consultorio</span>
        <GalleryLocation
          galleryID='my-test-gallery'
          images={[
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
              width: 1875,
              height: 2500
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
              width: 1669,
              height: 2500
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
              width: 2500,
              height: 1666
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
              width: 1669,
              height: 2500
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
              width: 2500,
              height: 1666
            }
          ]}
        />
      </article>
    </section>
  )
}
