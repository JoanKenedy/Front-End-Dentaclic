'use client'

import { useId } from 'react'
import { useUpdateProfile } from './hooks/useUpdateProfile'
import { SelectDegree } from './SelectDegree'
import { SelectSpecialty } from './SelectSpecialty'
import { Close } from '@/app/components/icons/Icons'
import { MapForm } from '../locations/MapForm'
import { SelectLanguage } from './SelectLanguage'

export const FormEditProfile = () => {
  const nameInputId = useId()
  const phoneId = useId()
  const imageId = useId()

  const {
    handleSubmit,
    isLoading,
    loading,
    nameError,
    phoneError,
    experiencesError,
    specialtyError,
    imageError,
    cedulaError,
    degreeError,
    addressError,
    educationsError,
    languageError,
    setSelectedDegree,
    selectedDegree,
    name,
    setName,
    phone,
    setPhone,
    image,
    cedulas,
    degree,
    specialties,
    experiences,
    about,
    setAbout,
    address,
    setAddress,
    handleFormSubmit,
    updateCoordinates,
    educations,
    languages,
    handleNewImage,
    handleAddNewField,
    handleRemoveField,
    handleFieldChange,
    isRegister
  } = useUpdateProfile()

  return (
    loading
      ? <LoadingData />
      : (
        <form className='w-full grid gap-4 max-w-xl lg:max-w-full lg:grid-cols-2' onSubmit={handleSubmit}>
          <div className='w-full p-4 grid mt-3 border border-slate-100 rounded-xl shadow-xl lg:h-max lg:row-span-3'>
            <div className={`w-1/2 mb-4 rounded-md ${imageError && 'border border-red-500'}`}>
              <label className='w-full relative' htmlFor={imageId}>
                <img className='w-full h-full aspect-square rounded-md object-cover' src={image} alt='Foto de perfil' />
                <span className='text-xs bg-slate-700/80 text-white w-full flex justify-center items-center py-[2px] rounded-es-md rounded-ee-md absolute bottom-0 right-0'>Sube tu imagen</span>
              </label>
              <input disabled={isLoading} type='file' name={imageId} id={imageId} className='hidden' onChange={(e) => handleNewImage(e)} />
            </div>
            <SelectDegree degreeError={degreeError} degree={degree} selected={selectedDegree} setSelected={setSelectedDegree} />
            <div className='mt-4'>
              <label className='text-[#151717] font-semibold' htmlFor={nameInputId}>Nombre Completo <span className='text-red-500'>*</span> </label>
            </div>
            <div className={`rounded-lg h-[38px] flex items-center w-full transition relative ${nameError ? 'border-red-600' : 'border-slate-200'} border focus-within:border focus-within:border-blue-400`}>
              <input disabled={isLoading} id={nameInputId} type='text' value={name} onChange={(e) => setName(e.target.value)} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none' placeholder='Escribe tu nombre completo' />
              {nameError && <span className='text-red-600 text-xs absolute -bottom-4 left-2'>{nameError}</span>}
            </div>
            <div className='mt-4'>
              <label className='text-[#151717] font-semibold' htmlFor={phoneId}>Número de celular <span className='text-red-500'>*</span> </label>
            </div>
            <div className={`rounded-lg h-[38px] flex items-center w-full transition relative ${phoneError ? 'border-red-600' : 'border-slate-200'} border focus-within:border focus-within:border-blue-400`}>
              <input disabled={isLoading} id={phoneId} type='text' value={phone} onChange={(e) => setPhone(e.target.value)} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none' placeholder='Escribe tu número de celular' />
              {phoneError && <span className='text-red-600 text-xs absolute -bottom-4 left-2'>{phoneError}</span>}
            </div>
          </div>

          <div className='w-full p-4 grid mt-3 border border-slate-100 rounded-xl shadow-xl lg:h-max'>
            <span className='text-[#151717] font-semibold text-lg'>Número de cédula <span className='text-red-500'>*</span></span>
            <span className='text-xs text-gray-500'>Los cambios en el número de cédula deben ser aprobados por un moderador</span>
            <span className='text-red-500 text-[10px]'>{cedulaError}</span>
            <div>
              {cedulas?.map((cedula, index) => (
                <div key={index}>
                  <div className='w-full flex gap-2 items-center justify-center h-[38px] mt-2'>
                    <div className={`rounded-lg h-[38px] flex items-center w-full transition relative ${cedulaError ? 'border-red-500' : 'border-slate-200'} border focus-within:border focus-within:border-blue-400`}>
                      <input disabled={isLoading} type='text' name={`cedula-${index}`} value={cedula} onChange={(e) => handleFieldChange('cedula', index, e)} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none' placeholder='Escribe tu cédula' />
                    </div>
                    <button disabled={isLoading} type='button' onClick={() => handleRemoveField('cedula', index)}><Close className='w-6 text-red-500 transition rounded-full hover:bg-red-500 hover:text-white' /></button>
                  </div>
                </div>
              ))}
              <button disabled={isLoading} type='button' className='px-2 py-[2px] mt-2 rounded-lg bg-primaryBlue text-white text-center transition hover:bg-blue-950' onClick={() => handleAddNewField('cedula')}>
                Agregar nueva
              </button>
            </div>
          </div>

          <div className='w-full p-4 grid mt-3 border border-slate-100 rounded-xl shadow-xl lg:h-max'>
            <div className='grid'>
              <span className='text-[#151717] font-semibold text-lg'>Selecciona tu especialidad <span className='text-red-500'>*</span></span>
              <span className='text-red-500 text-[10px]'>{specialtyError}</span>
              {
                specialties?.map((specialty, index) => (
                  <div key={index} className='w-full flex gap-2 justify-center items-center mt-2'>
                    <SelectSpecialty specialtyError={specialtyError} value={specialty} handleSelectSpecialty={handleFieldChange} idSpecialty={index} />
                    <button disabled={isLoading} type='button' onClick={() => handleRemoveField('specialty', index)}><Close className='w-6 text-red-500 transition rounded-full hover:bg-red-500 hover:text-white' /></button>
                  </div>
                ))
              }
              <button disabled={isLoading} type='button' className='w-max px-2 py-[2px] mt-2 rounded-lg bg-primaryBlue text-white text-center transition hover:bg-blue-950' onClick={() => handleAddNewField('specialty')}>
                Agregar nueva
              </button>
            </div>
          </div>

          <div className='w-full p-4 grid mt-3 border border-slate-100 rounded-xl shadow-xl lg:h-max'>
            <span className='text-[#151717] font-semibold text-lg'>Experiencia <span className='text-red-500'>*</span></span>
            <span className='text-xs text-gray-500'>Para muchas personas, la educación médica es tan crucial como la experiencia profesional. Asegúrese de incluir detalles sobre su formación universitaria.</span>
            <span className='text-red-500'>{experiencesError}</span>
            <div>
              {experiences.map((experience, index) => (
                <div key={index}>
                  <div className='w-full flex gap-2 items-center justify-center h-[38px] mt-2'>
                    <div className='rounded-lg h-[38px] flex items-center w-full transition relative border-slate-200 border focus-within:border focus-within:border-blue-400'>
                      <input disabled={isLoading} type='text' name={`experiencia-${index}`} value={experience} onChange={(e) => handleFieldChange('experiences', index, e)} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none' placeholder='Experiencia' />
                    </div>
                    <button disabled={isLoading} type='button' onClick={() => handleRemoveField('experiences', index)}><Close className='w-6 text-red-500 transition rounded-full hover:bg-red-500 hover:text-white' /></button>
                  </div>
                </div>
              ))}
              <button disabled={isLoading} type='button' className='px-2 py-[2px] mt-2 rounded-lg bg-primaryBlue text-white text-center transition hover:bg-blue-950' onClick={() => handleAddNewField('experiences')}>
                Agregar nueva
              </button>
            </div>
          </div>

          {
            !isRegister && (
              <div className='w-full p-4 grid mt-3 border border-slate-100 rounded-xl shadow-xl lg:h-max lg:col-span-2'>
                <span className='text-[#151717] font-semibold text-lg'>Ingresa tu dirección <span className='text-red-500'>*</span></span>
                <span className='text-xs text-gray-500 mb-4'>Ingresa la dirección de tu consultorio para que tus pacientes puedan encontrarte, puedes arrastrar el pin hasta el punto deseado.</span>
                <span className='text-xs text-red-500'>{addressError}</span>
                <MapForm address={address} setAddress={setAddress} handleFormSubmit={handleFormSubmit} updateCoordinates={updateCoordinates} addressError={addressError} />
              </div>
            )
          }

          <div className='w-full p-4 grid mt-3 gap-2 border border-slate-100 rounded-xl shadow-xl lg:h-max lg:row-span-2'>
            <span className='text-[#151717] font-semibold text-lg'>Sobre mí</span>
            <span className='text-xs text-gray-500'>En esta sección, por favor, proporciona una breve descripción sobre ti.</span>
            <textarea
              name='aboutMe'
              disabled={isLoading}
              className='rounded-lg p-2 resize-none h-40 flex items-center w-full transition relative border-slate-200 border focus-visible:border focus-visible:border-blue-400 focus-visible:outline focus-visible:outline-blue-400'
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>

          <div className='w-full p-4 grid mt-3 border border-slate-100 rounded-xl shadow-xl lg:h-max'>
            <span className='text-[#151717] font-semibold text-lg'>Formación académica</span>
            <span className='text-xs text-gray-500'>Para muchas personas, la educación médica es tan crucial como la experiencia profesional. Asegúrese de incluir detalles sobre su formación universitaria.</span>
            <span className='text-red-500 text-[10px]'>{educationsError}</span>
            <div>
              {educations?.map((education, index) => (
                <div key={index}>
                  <div className='w-full flex gap-2 items-center justify-center h-[38px] mt-2'>
                    <div className='rounded-lg h-[38px] flex items-center w-full transition relative border-slate-200 border focus-within:border focus-within:border-blue-400'>
                      <input disabled={isLoading} type='text' name={`experiencia-${index}`} value={education} onChange={(e) => handleFieldChange('educations', index, e)} className='bg-slate-100 pl-4 rounded-lg border-none w-full h-full focus:outline-none' placeholder='IPN' />
                    </div>
                    <button disabled={isLoading} type='button' onClick={() => handleRemoveField('educations', index)}><Close className='w-6 text-red-500 transition rounded-full hover:bg-red-500 hover:text-white' /></button>
                  </div>
                </div>
              ))}
              <button disabled={isLoading} type='button' className='px-2 py-[2px] mt-2 rounded-lg bg-primaryBlue text-white text-center transition hover:bg-blue-950' onClick={() => handleAddNewField('educations')}>
                Agregar nueva
              </button>
            </div>
          </div>

          <div className='w-full p-4 grid mt-3 border border-slate-100 rounded-xl shadow-xl lg:h-max'>
            <div className='grid'>
              <span className='text-[#151717] font-semibold text-lg'>Idiomas</span>
              <span className='text-xs text-gray-500'>Incluye todos los idiomas que hablas. De esta manera, los visitantes extranjeros en tu ciudad también podrán ponerse en contacto contigo.</span>
              <span className='text-red-500 text-[10px]'>{languageError}</span>
              {
                languages?.map((language, index) => (
                  <div key={index} className='w-full flex gap-2 justify-center items-center mt-2'>
                    <SelectLanguage value={language} handleSelectLanguage={handleFieldChange} idLanguage={index} />
                    <button
                      disabled={isLoading}
                      type='button'
                      onClick={() => handleRemoveField('language', index)}
                    >
                      <Close className='w-6 text-red-500 transition rounded-full hover:bg-red-500 hover:text-white' />
                    </button>
                  </div>
                ))
              }
              <button
                disabled={isLoading}
                type='button'
                className='w-max px-2 py-[2px] mt-2 rounded-lg bg-primaryBlue text-white text-center transition hover:bg-blue-950'
                onClick={() => handleAddNewField('language')}
              >
                Agregar idioma
              </button>
            </div>
          </div>
          <div className='w-full p-4 flex flex-col justify-between items-center mt-3 border border-slate-100 rounded-xl shadow-xl md:flex-row lg:col-span-2'>
            <span className='text-[#151717] font-semibold text-lg'>Completa todo tu perfil para tener mejores resultados.</span>
            <button disabled={isLoading} type='submit' className='w-max px-4 py-2 mt-2 rounded-lg bg-primaryBlue text-white text-center transition hover:bg-blue-950'>
              {isLoading ? <div aria-label='Cargando información' className='inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]' /> : 'Enviar'}
            </button>
          </div>
        </form>
        )
  )
}

export const LoadingData = () => {
  return (
    <div className='w-full grid gap-4 max-w-xl lg:max-w-full lg:grid-cols-2'>
      <div className='w-full p-4 grid mt-3 border gap-2 border-slate-100 rounded-xl shadow-xl lg:h-max lg:row-span-3'>
        <div className='w-1/2 mb-4 rounded-md'>
          <div className='w-full h-full aspect-square rounded-md bg-slate-400 animate-pulse' />
        </div>
        <div className='w-full max-w-56 h-8 rounded-md bg-slate-400 animate-pulse' />
        <div className='mt-4'>
          <div className='w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse' />
        </div>
        <div className='w-full max-w-56 h-8 rounded-md bg-slate-400 animate-pulse' />
        <div className='mt-4'>
          <div className='w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse' />
        </div>
        <div className='w-full max-w-56 h-8 rounded-md bg-slate-400 animate-pulse' />
        <div className='mt-4'>
          <div className='w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse' />
        </div>
      </div>

      <div className='w-full p-4 grid mt-3 gap-2 border border-slate-100 rounded-xl shadow-xl lg:h-max'>
        <div className='w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse' />
        <div>
          <div className='w-full max-w-56 h-8 rounded-md bg-slate-400 animate-pulse' />
          <div className='w-24 mt-2 h-8 rounded-md bg-slate-400 animate-pulse' />
        </div>
      </div>

      <div className='w-full p-4 grid mt-3 border border-slate-100 rounded-xl shadow-xl lg:h-max'>
        <div className='grid gap-2'>
          <div className='w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse' />
          <div className='w-full max-w-56 h-8 rounded-md bg-slate-400 animate-pulse' />
          <div className='w-24 h-8 rounded-md bg-slate-400 animate-pulse' />
        </div>
      </div>

      <div className='w-full p-4 flex flex-col justify-between items-center mt-3 border border-slate-100 rounded-xl shadow-xl md:flex-row lg:col-span-2'>
        <div className='w-full max-w-56 h-4 rounded-full bg-slate-400 animate-pulse' />
        <div className='w-24 h-8 rounded-md bg-slate-400 animate-pulse' />
      </div>
    </div>
  )
}
