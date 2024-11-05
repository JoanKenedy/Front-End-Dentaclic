import Lupa from '@/assets/images/icons/lupa.webp'
import Calendar from '@/assets/images/icons/calendario.webp'
import Follow from '@/assets/images/icons/follow.webp'

export const Features = () => {
  const infoFeatures = [
    {
      icon: Lupa,
      title: 'Encuentra a un especialista',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, temporibus'
    },
    {
      icon: Calendar,
      title: 'Pide una cita',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, temporibus'
    },
    {
      icon: Follow,
      title: 'Sigue a los especialistas',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, temporibus'
    }
  ]
  return (
    <section className='w-full flex justify-center items-center bg-bgBeige dark:bg-darkLightColor'>
      <div className='w-full grid place-content-center place-items-center grid-cols-1 gap-5 max-w-7xl px-4 py-14 lg:grid-cols-3'>
        {
          infoFeatures.map((feature, i) => (
            <article key={i} className='flex justify-center items-center shadow-xl bg-white gap-4 p-2 relative dark:bg-darkColor'>
              <img className='w-16 lg:w-24' src={feature.icon.src} alt={`Icono referente a ${feature.title}`} />
              <div className='text-center'>
                <h3 className='text-primaryBlue text-sm font-bold uppercase dark:text-white'>{feature.title}</h3>
                <p className='text-xs text-gray-700 dark:text-white'>{feature.description}</p>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}
