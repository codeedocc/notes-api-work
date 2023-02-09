import { createContext, useContext, useState } from 'react'

const TodoBoxContext = createContext()

export const useTodoBoxContext = () => {
  return useContext(TodoBoxContext)
}

export const TodoBoxProvider = ({ children }) => {
  const [openBox, setOpenBox] = useState(false)
  const [done, setDone] = useState(false)

  return (
    <TodoBoxContext.Provider
      value={{
        openBox,
        setOpenBox,
        done,
        setDone,
      }}
    >
      {children}
    </TodoBoxContext.Provider>
  )
}
