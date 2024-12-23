'use client'

import Link from 'next/link'
import { useState } from 'react'
import { UserIcon } from '../icons/Icons'

// eslint-disable-next-line react/prop-types
export const FollowCard = ({ id, isFollowing, imgSrc, name, specialty, loggedIn }) => {
  const [isFollow, setIsFollow] = useState(isFollowing)
  const textButton = isFollow ? 'Seguido' : 'Seguir'

  const getSlug = () => {
    const nameString = name?.split(' ')
    const slug = nameString?.join('-')

    return slug?.toLocaleLowerCase()
  }

  const slug = getSlug()

  return (
    <article className='w-full flex justify-between items-center relative xxs:justify-normal dark:text-white'>
      <img src={imgSrc} alt={`Foto de perfil del Dr(a). ${name}`} className='w-10 h-10 object-cover rounded-lg mr-1 xxs:w-14 xxs:h-14 xs:w-20 xs:h-20 xs:mr-4 md:mr-3 md:w-20 md:h-20 xl:w-24 xl:h-24' />
      <Link href={`/profile/${slug}/${id}`} className='flex flex-col gap-1 max-w-60 md:justify-between'>
        <header>
          <h3 className='font-bold text-sm xs:text-base md:text-lg'>{name}</h3>
          <p className='uppercase font-bold text-[8px] xs:text-[9px] md:text-[10px]'>Especialista en {specialty}</p>
        </header>
        <footer className='hidden gap-1 text-nowrap xxs:flex'>
          <UserIcon className='w-3 h-3 bg-black rounded-full px-[1px] pt-[0.8px] pb-[1px] fill-white md:mr-1' />
          <span className='font-bold text-[9px]'>Muchos usuarios siguen esta cuenta</span>
        </footer>
      </Link>
      <aside className='w-max xxs:absolute right-0'>
        {
          loggedIn
            ? (
              <button onClick={() => setIsFollow(!isFollow)} className={`w-max px-2 py-1 text-white rounded-full text-xs transition hover:transition hover:scale-105 ${isFollow ? 'bg-blue-900' : 'bg-blue-500'} xs:px-4 xs:py-1 xs:text-base`}>
                {textButton}
              </button>
              )
            : (
              <Link href='/login' className='w-max px-2 py-1 text-white rounded-full text-xs transition hover:transition hover:scale-105 bg-blue-500 xs:px-4 xs:py-1 xs:text-base'>
                Seguir
              </Link>
              )
        }
      </aside>
    </article>
  )
}
