'use client'

import { LoginProvider } from '@/context/login'
import { SearchProvider } from '@/context/searchBar'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'sonner'
import { EndPage } from './components/EndPage'
import { AppLayout } from './layouts/AppLayout'
import Progress from '@/context/Progress'

export function Providers ({ children }) {
  return (
    <LoginProvider>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
        <SearchProvider>
          <Toaster position='top-right' expand richColors closeButton duration='6000' />
          <Progress>
            <AppLayout>
              {children}
            </AppLayout>
          </Progress>
          <EndPage />
        </SearchProvider>
      </GoogleOAuthProvider>
    </LoginProvider>
  )
}
