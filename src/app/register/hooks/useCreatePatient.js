'use client'

export function useCreatePatient () {
  const endpointCreatePatient = process.env.NEXT_PUBLIC_API + 'paciente'
  const createPatient = () => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    fetch(endpointCreatePatient, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-token': user.token
      },
      body: JSON.stringify({ namePaciente: user.personalData.nombre, apellidos: user.personalData.apellidos, numTelefono: '5555555555', consentimiento: 1, usuario: user.personalData.uid })
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
      })
      .catch((error) => console.error(error))
  }

  return { createPatient }
}
