'use server'

import { cookies } from 'next/headers'

export async function handleCookies () {
  async function deleteCookie (data) {
    cookies().delete('name')
  }

  async function saveCookie (name, value) {
    cookies().set(name, value)
  }
}
