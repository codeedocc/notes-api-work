import { createContext, useContext, useState } from 'react'

const NewsContext = createContext()

export const useNewsContext = () => {
  return useContext(NewsContext)
}

export const NewsProvider = ({ children }) => {
  const [showNews, setShowNews] = useState(false)

  return (
    <NewsContext.Provider
      value={{
        setShowNews,
        showNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}
