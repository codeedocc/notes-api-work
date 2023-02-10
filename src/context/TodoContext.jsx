import { createContext, useContext, useState } from 'react'

const TodoBoxContext = createContext()

export const useTodoBoxContext = () => {
  return useContext(TodoBoxContext)
}

export const TodoBoxProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const boxHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.idBox === id) {
          todo.isOpened = !todo.isOpened
        }
        return todo
      })
    )
  }

  const doneHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          notes: todo.notes.map((note) => {
            if (note.id === id) {
              return { ...note, completed: !note.completed }
            }
            return note
          }),
        }
      })
    )
  }

  return (
    <TodoBoxContext.Provider
      value={{
        todos,
        setTodos,
        boxHandler,
        doneHandler,
      }}
    >
      {children}
    </TodoBoxContext.Provider>
  )
}
