'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function POST (name, token, role) {
  cookies().set(name, token)
  cookies().set('role', role)
}

export async function PUT (name) {
  cookies().delete(name)
  cookies().delete('role')
  redirect('/login')
}
