import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const ProfileCreated = ({ profileCreated }) => {
  const router = useRouter()
  useEffect(() => {
    if (!profileCreated) {
      router.push('/dashboard/my-profile/edit-profile/')
    }
  }, [])
  return <></>
}
