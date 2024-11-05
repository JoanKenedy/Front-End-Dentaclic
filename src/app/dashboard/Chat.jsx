import { SearchIcon } from '../components/icons/Icons'

export const Chat = () => {
  return (
    <article className='w-full h-full flex flex-col justify-center items-start p-4 bg-white rounded-xl shadow-button gap-3'>
      <h3 className='text-xl font-semibold'>Chats</h3>
      <div className='relative w-full'>
        <SearchIcon className='w-5 text-gray-400 absolute top-1/2 -translate-y-1/2 left-1' />
        <input className='w-full shadow-button rounded-full pr-2 pl-7 py-1' type='text' name='chat' id='chat' placeholder='Buscar Chats' />
      </div>
      <h4>Bandeja de entrada</h4>
      <div className='w-full flex flex-col gap-1'>
        <div className='w-full flex gap-2'>
          <img className='rounded-full object-cover w-10 h-10 aspect-square' src='https://cdn.dentarios.com.mx/assets/images/perfil-de-usuario.webp' alt='Foto de perfil del usuario' />
          <span>
            <span>Alexis Espinosa</span>
            <p className='line-clamp-2 text-ellipsis whitespace-normal text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, incidunt fugiat ex voluptate sunt quasi fugit neque velit veritatis sed!</p>
            <span className='text-xs'>Hace 2hrs</span>
          </span>
        </div>
        <div className='w-full flex gap-2'>
          <img className='rounded-full object-cover w-10 h-10 aspect-square' src='https://cdn.dentarios.com.mx/assets/images/perfil-de-usuario.webp' alt='Foto de perfil del usuario' />
          <span>
            <span>Alexis Espinosa</span>
            <p className='line-clamp-2 text-ellipsis whitespace-normal text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, incidunt fugiat ex voluptate sunt quasi fugit neque velit veritatis sed!</p>
            <span className='text-xs'>Hace 2hrs</span>
          </span>
        </div>
      </div>
    </article>
  )
}
