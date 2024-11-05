import { Body } from './Body'

export async function generateMetadata ({ params, searchParams }, parent) {
  // read route params
  const id = params.id

  const getUserEndpoint = process.env.NEXT_PUBLIC_API + 'buscar/especialistas/' + id
  // fetch data
  const user = await fetch(getUserEndpoint).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: user.especialista.usuario.nombre,
    description: user.especialista.sobreMi || '',
    openGraph: {
      images: [user.especialista.usuario.img, ...previousImages]
    }
  }
}

export default function ProfileDoctor () {
  return (
    <>
      <section className='w-full flex justify-center items-center relative pb-10 dark:bg-darkLightColor'>
        <Body />
      </section>
    </>
  )
}
