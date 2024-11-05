'use client'

import { useEffect, useState } from 'react'

export function useFetch (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    setLoading(true)
    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text()
          throw new Error(text)
        } else {
          return response.json()
        }
      })
      .then((data) => setData(data))
      .catch((error) => {
        setError(error)
        console.log(error)
      })
      .finally(() => setLoading(false))

    return () => abortController.abort()
  }, [url])

  return { data, loading, error }
}
