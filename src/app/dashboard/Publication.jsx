import { PhotoIcon } from '../components/icons/Icons'

export const Publication = () => {
  return (
    <article className='w-full h-full flex flex-col justify-center items-start p-4 bg-white rounded-xl shadow-button lg:order-3'>
      <h2>Publicaciones</h2>
      <div className='w-full flex gap-2 items-center'>
        <img className='rounded-full border-2 border-white w-1/6 max-w-56 shadow-lg' src='https://cdn.dentarios.com.mx/assets/images/perfil-de-usuario.webp' alt='Foto de perfil' />
        <div className='w-full relative'>
          <input className='w-full rounded-full shadow-button py-1 px-2' type='text' name='Publication' id='Publication' placeholder='¿Que estás pensando, Salvador?' />
          <label htmlFor='picture' className='absolute top-1/2 -translate-y-1/2 right-2'>
            <PhotoIcon className='w-5 fill-white text-green-400' />
          </label>
          <input type='file' name='picture' id='picture' className='hidden' />
        </div>
      </div>
      <div className='w-full flex justify-end mt-2'>
        <button className='w-max px-2 py-1 text-white rounded-full bg-blue-500 text-sm'>
          Publicar
        </button>
      </div>
    </article>
  )
}
