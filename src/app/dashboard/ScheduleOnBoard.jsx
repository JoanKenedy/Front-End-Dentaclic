export const ScheduleOnBoard = () => {
  return (
    <article className='w-full h-full flex flex-col justify-center items-start p-4 bg-white rounded-xl shadow-button gap-3'>
      <h3 className='text-xl font-semibold'>Solicitud de cita</h3>
      <div className='w-full flex flex-col gap-3'>
        <div className='w-full flex justify-between items-center gap-2'>
          <img className='rounded-full object-cover w-10 h-10 aspect-square' src='https://cdn.dentarios.com.mx/assets/images/perfil-de-usuario.webp' alt='Foto de perfil del usuario' />
          <p className='line-clamp-2 text-ellipsis whitespace-normal'>Uriel Zahuantitla</p>
          <button className='px-2 py-1 rounded-full bg-primaryBlue text-white text-sm'>
            Aceptar
          </button>
        </div>
        <div className='w-full flex justify-between items-center gap-2'>
          <img className='rounded-full object-cover w-10 h-10 aspect-square' src='https://cdn.dentarios.com.mx/assets/images/perfil-de-usuario.webp' alt='Foto de perfil del usuario' />
          <p className='line-clamp-2 text-ellipsis whitespace-normal'>Kenedi Mayo</p>
          <button className='px-2 py-1 rounded-full bg-primaryBlue text-white text-sm'>
            Aceptar
          </button>
        </div>
        <div className='w-full flex justify-between items-center gap-2'>
          <img className='rounded-full object-cover w-10 h-10 aspect-square' src='https://cdn.dentarios.com.mx/assets/images/perfil-de-usuario.webp' alt='Foto de perfil del usuario' />
          <p className='line-clamp-2 text-ellipsis whitespace-normal'>André Gutierrez</p>
          <button className='px-2 py-1 rounded-full bg-primaryBlue text-white text-sm'>
            Aceptar
          </button>
        </div>
      </div>
    </article>
  )
}
