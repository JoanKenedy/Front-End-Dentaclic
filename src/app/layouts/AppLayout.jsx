import { useUserData } from '@/context/hooks/useUserData'
import { LoginContext } from '@/context/login'
import { useContext } from 'react'
import { NavBarDashboard } from '../dashboard/NavBarDashboard'
import { SearchBar } from '../components/SearchBar'
import { ProfileCreated } from '../components/ProfileCreated'

export const AppLayout = ({ children }) => {
  const { personalData, profileCreated } = useContext(LoginContext)
  useUserData()

  return (
    <>
      <ProfileCreated profileCreated={profileCreated} />
      {
        personalData.rol === 'ESPECIALISTA' && <NavBarDashboard isIndex />
      }
      <main className='dark:bg-darkLightColor'>
        <SearchBar />
        {children}
      </main>
    </>
  )
}
