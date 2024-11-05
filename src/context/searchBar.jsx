'use client'

/* eslint-disable react/prop-types */
import { createContext } from 'react'
import { useSearchBar } from './hooks/useSearchBar'

export const SearchContext = createContext()

export function SearchProvider ({ children }) {
  const search = useSearchBar()

  return (
    <SearchContext.Provider
      value={{
        search
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
