import bg from '@/assets/images/background/bg.webp'
import woman from '@/assets/images/woman.webp'
import phone from '@/assets/images/medios-de-comunicacion-social.webp'
import graphic from '@/assets/images/grafico-de-barras.webp'
import man from '@/assets/images/man.webp'
import { Star } from '../icons/Icons'

export const EndBanner = () => {
  return (
    <section className='w-full justify-center items-center bg-pro bg-center shadow-lg relative z-[1] lg:h-[444px]'>
      <div className='w-full flex justify-center items-center bg-[#669999d4] pt-10 pb-2 lg:h-full'>
        <div className='w-full bg-white shadow-[0px_4px_5px_1px_rgb(0_0_0_/_0.4)] my-9 md:flex md:justify-center dark:bg-darkColor md:items-center'>
          <div className='w-full max-w-7xl md:flex md:justify-center md:items-center'>
            <article className='p-4 w-full grid grid-cols-1 gap-4 place-items-center lg:grid-cols-2'>
              <div className='relative w-72 h-36 -translate-y-16 xxs:w-80 xs:w-96 xs:h-40 lg:w-[500px]'>
                <img src={bg.src} alt='Consultorio dental de referencia' className='w-72 absolute right-1/2 translate-x-1/2 z-0 xs:w-80 lg:w-[500px] lg:max-w-4xl lg:-bottom-32' />
                <img src={woman.src} alt='Imagen referente de una odontóloga' className='w-48 absolute -bottom-[58px] right-1/2 translate-x-1/2 z-[1] xs:w-56 xs:-bottom-16 lg:max-w-2xl lg:w-[410px] lg:-bottom-[206px]' />
                <div className='w-max flex flex-col items-center px-1 py-2 bg-white rounded-2xl shadow-[0px_0px_4px_2px_rgb(0_0_0_/_0.4)] absolute z-[2] -bottom-10 xs:left-5 lg:px-2 lg:py-3 lg:-bottom-24 lg:left-0'>
                  <img src={phone.src} alt='Imagen referente al uso de redes sociales' className='w-10 lg:w-16' />
                  <span className='uppercase font-bold text-[7px] text-center -mb-1 lg:text-[9px]'>Publica en tu</span>
                  <span className='uppercase font-bold text-primaryBlue text-[8px] text-center lg:text-[10px]'>perfil personal</span>
                </div>
                <div className='w-max flex flex-col items-center py-1 px-1 bg-white rounded-2xl shadow-[0px_0px_4px_2px_rgb(0_0_0_/_0.4)] absolute z-[2] -top-4 right-0 xs:right-5 lg:py-2 lg:px-2 lg:-top-16 lg:-right-[2px]'>
                  <img src={graphic.src} alt='Gráfica de crecimiento de ingresos' className='w-10 lg:w-16' />
                  <span className='uppercase font-bold text-primaryBlue text-xs text-center mt-1 lg:text-base'>Ingresos</span>
                </div>
                <div className='w-max flex items-center py-1 px-2 gap-2 bg-white rounded-2xl shadow-[0px_0px_4px_2px_rgb(0_0_0_/_0.4)] absolute z-[0] top-16 -right-3 xs:right-4 lg:px-3 xl:px-5 lg:top-20 xl:gap-4 xl:-right-10'>
                  <span className='uppercase text-white text-sm text-center p-1 bg-primaryBlue lg:text-lg xl:text-2xl'>5.0</span>
                  <div>
                    <span className='text-yellow-500 flex'>
                      <Star className='fill-yellow-500 w-4 lg:w-5 xl:w-7' />
                      <Star className='fill-yellow-500 w-4 lg:w-5 xl:w-7' />
                      <Star className='fill-yellow-500 w-4 lg:w-5 xl:w-7' />
                      <Star className='fill-yellow-500 w-4 lg:w-5 xl:w-7' />
                      <Star className='fill-yellow-500 w-4 lg:w-5 xl:w-7' />
                    </span>
                    <span className='font-bold text-primaryBlue text-[8px] flex flex-col lg:text-[10px] xl:text-sm'>
                      Valoración General
                      <small className='text-[6px] lg:text-[8px] lg:-mt-1 xl:text-[10px]'>30 opiniones</small>
                    </span>
                  </div>
                </div>
                <div className='w-max flex items-center py-1 px-2 gap-2 bg-[#33ba87] rounded-lg shadow-[0px_0px_4px_2px_rgb(0_0_0_/_0.4)] absolute z-[0] top-5 -left-2 xs:left-2 lg:-left-2 lg:-top-4'>
                  <img src={man.src} alt='Foto de perfil de un paciente' className='w-8 lg:w-14' />
                  <div>
                    <span className='font-bold text-white text-[8px] flex flex-col lg:text-[11px]'>
                      <small className='text-[6px] text-black lg:text-[9px]'>Cita Agendada</small>
                      Carlos B.
                      <small className='text-[6px] text-[#174835] lg:text-[9px]'>09:00</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex gap-2 flex-col'>
                <h3 className='font-bold text-blue-900 text-xl dark:text-white lg:text-3xl'>¿Eres odontólogo y buscas atraer pacientes?</h3>
                <ul className='text-primaryBlue marker:text-blue-900 dark:text-white dark:marker:text-white list-disc ml-4 lg:text-lg'>
                  <li>Conecta con pacientes que están buscando especialistas cerca de ti</li>
                  <li>Deja que los pacientes agenden contigo, sin tanta complicación</li>
                  <li>Consigue opiniones verificadas de pacientes reales que agendaron contigo</li>
                </ul>
                <a href='#' className='w-max text-bold text-white bg-blue-600 rounded-lg px-2 py-1 text-lg transition hover:transition hover:bg-blue-900 lg:px-3'>Dentaclic Pro</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
