import {
  AtSign,
  IonLogoInstagram,
  IonLogoTiktok,
  IonSocialFacebook,
  IonSocialYoutubeOutline,
  Phone
} from './icons/Icons'
import GooglePartner from '../../assets/images/logos/partner-google.webp'
import GoogleSearch from '../../assets/images/logos/google-search.webp'
import Image from 'next/image'

export const EndPage = () => {
  const SocialMedia = [
    {
      id: 'Facebook',
      imgSrc: <IonSocialFacebook className='w-8 h-8 text-blue-500' />,
      link: 'https://www.facebook.com/Dentarios.mx/'
    },
    {
      id: 'Instagram',
      imgSrc: <IonLogoInstagram className='w-7 h-7 text-blue-500' />,
      link: 'https://www.instagram.com/dentarios.mx/'
    },
    {
      id: 'TikTok',
      imgSrc: <IonLogoTiktok className='w-7 h-7 text-blue-500' />,
      link: 'https://www.tiktok.com/es/'
    },
    {
      id: 'YouTube',
      imgSrc: <IonSocialYoutubeOutline className='w-7 h-7 text-blue-500' />,
      link: 'https://www.youtube.com/@dentariosmx5803'
    }
  ]
  return (
    <footer className='w-full flex justify-center items-center flex-col dark:bg-darkColor'>
      <section className='w-full grid px-4 grid-cols-1 py-10 max-w-7xl gap-4 md:py-16 md:grid-cols-2 lg:grid-cols-4'>
        <article className='w-full flex flex-col gap-2'>
          <span className='text-primaryBlue font-bold text-xl'>Contacto</span>
          <a
            href='mailto:dentariosmx@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 w-[fit-content]'
          >
            <AtSign className='w-6 fill-blue-800' />
            <span className='text-primaryBlue'>dentariosmx@gmail.com</span>
          </a>
          <a
            href='tel:5555555555'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 w-[fit-content]'
          >
            <Phone className='w-6 text-blue-800' />
            <span className='text-primaryBlue'>55 5555 5555</span>
          </a>
        </article>
        <article className='w-full flex flex-col gap-2'>
          <span className='text-primaryBlue font-bold text-xl'>
            Redes Sociales
          </span>
          <div className='w-full flex items-center gap-4'>
            {SocialMedia.map((item) => (
              <a
                href={item.link}
                target='_blank'
                title={`Ir a la página de ${item.id} de Dentarios`}
                rel='noopener noreferrer'
                key={item.id}
                className='flex w-[fit-content] transition hover:scale-105'
              >
                {item.imgSrc}
              </a>
            ))}
          </div>
        </article>
        <article className='w-full flex flex-col gap-2'>
          <span className='text-primaryBlue  font-bold text-xl'>
            Certificados
          </span>
          <div className='w-full flex items-center gap-4'>
            <Image
              src={GooglePartner.src}
              width={597}
              height={570}
              alt='Logo de Google Partner'
              className='w-16 h-16 border-gray-500 border-[1px] rounded-full'
            />
            <Image
              src={GoogleSearch.src}
              width={768}
              height={768}
              alt='Logo de Google Search'
              className='w-16 border-gray-500 border-[1px] rounded-full'
            />
          </div>
        </article>
        <article className=''>
          <span className='text-primaryBlue font-bold text-xl'>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Política de privacidad y condiciones de uso
            </a>
          </span>
        </article>
      </section>
      <section className='w-full text-center bg-primaryBlue px-4 py-2 text-white'>
        <p>Dentaclic | Una plataforma desarrollada por Dentarios, CDMX</p>
      </section>
    </footer>
  )
}
