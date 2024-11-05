'use client'

import { usePlaces } from '@/app/components/maps/hooks/usePlaces'
import { LoginContext } from '@/context/login'
import { useContext, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

const degree = ['Selecciona tu título', 'Prof.', 'Dr.', 'Dra.', 'Lic.', 'Mtro.', 'Mtra.']

export function useUpdateProfile () {
  const handleSelectLocation = () => {}
  const endpointEditSpecialist = useRef()

  const user = useRef()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      user.current = JSON.parse(window.localStorage.getItem('user'))
    }
  }, [])

  const { personalData, userData, loading } = useContext(LoginContext)
  const { address, setAddress, handleFormSubmit, updateCoordinates } = usePlaces({ handleSelectLocation })

  const method = useRef()
  const body = useRef()
  const flag = useRef()

  const [image, setImage] = useState('https://cdn.dentarios.com.mx/assets/images/perfil-de-usuario.webp')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedDegree, setSelectedDegree] = useState(degree[0])
  const [cedulas, setCedulas] = useState([''])
  const [specialties, setSpecialties] = useState(['Selecciona'])
  const [about, setAbout] = useState('')
  const [educations, setEducations] = useState([])
  const [languages, setLanguages] = useState([])
  const [experiences, setExperiences] = useState([''])
  const [isLoading, setIsLoading] = useState(false)
  const [isRegister, setIsRegister] = useState(false)

  const newAddress = useRef()

  useEffect(() => {
    setName(personalData.nombre)
    setImage(personalData.img)
  }, [personalData])

  useEffect(() => {
    if (userData) {
      newAddress.current = { ...address }
      endpointEditSpecialist.current = process.env.NEXT_PUBLIC_API + 'especialista/' + userData._id
      method.current = 'PUT'
      setSpecialties(userData.especialidades)
      setPhone(userData.numCelular)
      setEducations(userData.formacionAcademica)
      setExperiences(userData.experiencias)
      setCedulas(userData.cedulaProfesional)

      if (userData.idioma) {
        setLanguages(userData.idioma)
      }
      if (userData.sobreMi) {
        setAbout(userData.sobreMi)
      }
      if (userData.calle) {
        newAddress.current.streetAndNumber = userData.calle
      }
      if (userData.colonia) {
        newAddress.current.place = userData.colonia
      }
      if (userData.ciudad) {
        newAddress.current.region = userData.ciudad
      }
      if (userData.codigoPostal) {
        newAddress.current.postcode = userData.codigoPostal
      }
      if (userData.latitud) {
        newAddress.current.latitude = userData.latitud
      }
      if (userData.longitud) {
        newAddress.current.longitude = userData.longitud
      }
      newAddress.current.country = 'México'
      setAddress(newAddress.current)
      setIsRegister(true)
    } else {
      endpointEditSpecialist.current = process.env.NEXT_PUBLIC_API + 'especialista'
      method.current = 'POST'
    }
  }, [userData])

  // Errors
  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [degreeError, setDegreeError] = useState(false)
  const [cedulaError, setCedulaError] = useState(false)
  const [specialtyError, setSpecialtyError] = useState(false)
  const [experiencesError, setExperiencesError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [educationsError, setEducationsError] = useState(false)
  const [languageError, setLanguageError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    flag.current = true
    setNameError(null)
    setPhoneError(null)
    setDegreeError(null)
    setCedulaError(null)
    setSpecialtyError(null)
    setExperiencesError(null)
    setAddressError(null)
    setLanguageError(null)
    setEducationsError(null)

    if (!name || name.length < 4) {
      flag.current = false
      setNameError('El nombre es requerido')
    }
    if (!phone) {
      flag.current = false
      setPhoneError('El teléfono debe de tener 10 números')
    }
    if (selectedDegree === degree[0]) {
      flag.current = false
      setDegreeError('Selecciona tu título')
    }
    if (!cedulas[0]) {
      flag.current = false
      setCedulaError('Agrega mínimo una especialidad')
    }
    cedulas.map((ced) => (verifyField('cedula', ced)))

    if (!experiences[0]) {
      flag.current = false
      setExperiencesError('Agrega mínimo una especialidad')
    }
    experiences.map((experience) => (verifyField('experiences', experience)))

    if (!specialties[0]) {
      flag.current = false
      setSpecialtyError('Agrega mínimo una especialidad')
    }
    specialties.map((specialty) => (verifyField('specialty', specialty)))

    if (!address.streetAndNumber || !address.country || !address.latitude || !address.place || !address.postcode || !address.region) {
      flag.current = false
      setAddressError('Todos los campos son necesarios')
    }

    if (languages.length !== 0) {
      languages.map((lang) => (verifyField('language', lang)))
    }

    if (educations.length !== 0) {
      educations.map((education) => (verifyField('educations', education)))
    }

    if (flag.current) {
      body.current = { codigoPostal: address.postcode, latitud: address.latitude, longitud: address.longitude, ciudad: address.region, colonia: address.place, calle: address.streetAndNumber, numCelular: phone, cedulaProfesional: cedulas, especialidades: specialties, experiencias: experiences }

      if (!userData) {
        body.current.usuario = personalData.uid
      }
      if (about) {
        body.current.sobreMi = about
      }
      if (educations.length !== 0) {
        body.current.formacionAcademica = educations
      }
      if (languages.length !== 0) {
        body.current.idioma = languages
      }
      if (image !== personalData.img) {
        changeImage()
      }
      createSpecialist()
    }
  }

  const changeImage = () => {
    const endpoint = process.env.NEXT_PUBLIC_API + 'usuarios/' + personalData.uid
    fetch(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-token': user.token
      },
      body: JSON.stringify({ img: 'https://cdn.dentarios.com.mx/assets/images/imagotipo-dentaclic.png' })
    })
  }

  const createSpecialist = () => {
    setIsLoading(true)
    fetch(endpointEditSpecialist.current, {
      method: method.current,
      headers: {
        'Content-Type': 'application/json',
        'x-token': user.current.token
      },
      body: JSON.stringify(body.current)
    })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text()
          throw new Error(text)
        } else {
          return response.json()
        }
      })
      .then((response) => {
        console.log(response)
        toast.success('Datos actualizados correctamente')
        window.location.assign('/dashboard')
      })
      .catch((error) => {
        toast.error('Ocurrió un error al actualizar')
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  const verifyField = (collection, field) => {
    switch (collection) {
      case 'cedula':
        if (!field) {
          flag.current = false
          setCedulaError('La cédula es requerida')
        }
        break
      case 'specialty':
        if (field === 'Selecciona') {
          flag.current = false
          setSpecialtyError('La especialidad es requerida')
        }
        break
      case 'educations':
        if (!field) {
          flag.current = false
          setEducationsError('Llena todos los campos de formación')
        }
        break
      case 'language':
        if (field === 'Selecciona') {
          flag.current = false
          setLanguageError('Llena todos los campos de lenguaje')
        }
        break
      case 'experiences':
        if (!field) {
          flag.current = false
          setExperiencesError('Escribe al menos una experiencia')
        }
        break
      default:
        break
    }
  }

  const handleNewImage = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setImageError('')
      const fileType = selectedFile.type
      const validImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
      if (validImageTypes.includes(fileType)) {
        setImage(URL.createObjectURL(selectedFile))
      } else {
        setImage(null)
        setImageError('Por favor, sube una imagen válida (.jpg, .webp, .png, .gif)')
        toast.error('Por favor, sube una imagen válida (.jpg, .webp, .png, .gif)')
      }
    }
  }

  const handleAddNewField = (collection) => {
    switch (collection) {
      case 'cedula':
        setCedulas([...cedulas, ''])
        break
      case 'specialty':
        setSpecialties([...specialties, 'Selecciona'])
        break
      case 'educations':
        setEducations([...educations, ''])
        break
      case 'language':
        setLanguages([...languages, 'Selecciona'])
        break
      case 'experiences':
        setExperiences([...experiences, ''])
        break
      default:
        break
    }
  }

  const handleRemoveField = (collection, index) => {
    switch (collection) {
      case 'cedula':
        {
          const newCedulas = cedulas.filter((_, i) => i !== index)
          setCedulas(newCedulas)
        }
        break
      case 'specialty':
        {
          const newSpecialties = specialties.filter((_, i) => i !== index)
          setSpecialties(newSpecialties)
        }
        break
      case 'educations':
        {
          const newEducations = educations.filter((_, i) => i !== index)
          setEducations(newEducations)
        }
        break
      case 'language':
        {
          const newLanguages = languages.filter((_, i) => i !== index)
          setLanguages(newLanguages)
        }
        break
      case 'experiences':
        {
          const newExperiences = experiences.filter((_, i) => i !== index)
          setExperiences(newExperiences)
        }
        break
      default:
        break
    }
  }

  const handleFieldChange = (collection, index, event) => {
    switch (collection) {
      case 'cedula':
        {
          const newCedulas = cedulas.map((cedula, i) => (i === index ? event.target.value : cedula))
          setCedulas(newCedulas)
        }
        break
      case 'specialty':
        {
          const text = event.target.innerText
          const newSpecialties = specialties.map((specialty, i) => (i === index ? text : specialty))
          setSpecialties(newSpecialties)
        }
        break
      case 'educations':
        {
          const newEducations = educations.map((education, i) => (i === index ? event.target.value : education))
          setEducations(newEducations)
        }
        break
      case 'language':
        {
          const text = event.target.innerText
          const newLanguages = languages.map((language, i) => (i === index ? text : language))
          setLanguages(newLanguages)
        }
        break
      case 'experiences':
        {
          const newExperiences = experiences.map((experience, i) => (i === index ? event.target.value : experience))
          setExperiences(newExperiences)
        }
        break
      default:
        break
    }
  }

  return {
    isRegister,
    handleSubmit,
    isLoading,
    loading,
    nameError,
    phoneError,
    imageError,
    degreeError,
    cedulaError,
    specialtyError,
    experiencesError,
    addressError,
    educationsError,
    languageError,
    setImageError,
    selectedDegree,
    setSelectedDegree,
    name,
    setName,
    phone,
    setPhone,
    image,
    setImage,
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
    handleFieldChange
  }
}
