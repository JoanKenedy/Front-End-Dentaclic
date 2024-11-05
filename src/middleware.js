import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export function middleware (request) {
  const token = cookies().get('token')
  const role = cookies().get('role')

  const { origin } = request.nextUrl

  if (token && (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register'))) {
    const previousURL = request.headers.get('referer') || `${origin}/`
    return NextResponse.redirect(previousURL)
  }

  if (request.nextUrl.pathname.startsWith('/profile-patient')) {
    if (!token) {
      const previousURL = request.headers.get('referer') || `${origin}/`
      return NextResponse.redirect(previousURL)
    }
    if (role) {
      if (role.value !== 'PACIENTE') {
        const previousURL = request.headers.get('referer') || `${origin}/`
        return NextResponse.redirect(previousURL)
      }
    }
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      const previousURL = request.headers.get('referer') || `${origin}/`
      return NextResponse.redirect(previousURL)
    }
    if (role) {
      if (role.value !== 'ESPECIALISTA') {
        const previousURL = request.headers.get('referer') || `${origin}/`
        return NextResponse.redirect(previousURL)
      }
    }
  }
}

export const config = {
  matcher: ['/login', '/register', '/profile-patient/:path*', '/dashboard/:path*']
}
