'use client'

import { useEffect, useState } from 'react'

export function useTheme () {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const themeLocal = JSON.parse(window.localStorage.getItem('theme'))

    if (themeLocal) {
      setTheme(themeLocal.themeToSave)
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }
  }, [])

  return { theme, setTheme }
}
