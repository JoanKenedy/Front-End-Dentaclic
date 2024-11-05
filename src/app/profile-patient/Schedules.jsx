import { Check, Close } from '../components/icons/Icons'

export const Schedules = () => {
  return (
    <article className='w-full flex flex-col justify-center items-start p-4 bg-white rounded-xl shadow-button gap-3'>
      <h3 className='text-xl font-semibold'>Próximas citas</h3>
      <div className='w-full flex gap-3'>
        <div className='w-max flex flex-col justify-center items-center p-2 bg-white rounded-xl shadow-button gap-2'>
          <img className='rounded-lg object-cover w-16 aspect-square' src='https://cdn.dentarios.com.mx/assets/images/perfil-de-usuario.webp' alt='Foto de perfil del usuario' />
          <div className='w-full flex justify-center items-center flex-col'>
            <span className='text-sm'>Leo Martínez</span>
            <span className='text-xs'>7:00</span>
          </div>
          <div className='flex gap-2'>
            <button className='p-2 bg-green-500 rounded-full'>
              <Check className='w-5 text-white' />
            </button>
            <button className='p-2 bg-red-500 rounded-full'>
              <Close className='w-5 text-white' />
            </button>
          </div>
        </div>
        <div className='w-max flex flex-col justify-center items-center p-2 bg-white rounded-xl shadow-button gap-2'>
          <img className='rounded-lg object-cover w-16 aspect-square' src='https://cdn.dentarios.com.mx/assets/images/perfil-de-usuario.webp' alt='Foto de perfil del usuario' />
          <div className='w-full flex justify-center items-center flex-col'>
            <span className='text-sm'>Nicolas Fernández</span>
            <span className='text-xs'>11:00</span>
          </div>
          <div className='flex gap-2'>
            <button className='p-2 bg-green-500 rounded-full'>
              <Check className='w-5 text-white' />
            </button>
            <button className='p-2 bg-red-500 rounded-full'>
              <Close className='w-5 text-white' />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
