import { createContext, useContext, useState } from 'react'

const TodoBoxContext = createContext()

export const useTodoBoxContext = () => {
  return useContext(TodoBoxContext)
}

export const TodoBoxProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const boxOpener = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.idBox === id) {
          todo.isOpened = !todo.isOpened
        }
        return todo
      })
    )
  }

  const boxRemover = (id, title) => {
    const youSure = window.confirm(
      title.length > 10
        ? `Вы точно хотите удалить "${title.slice(0, 15)}..."?`
        : `Вы точно хотите удалить "${title}"?`
    )

    if (youSure) {
      setTodos(todos.filter((todo) => todo.idBox !== id))

      localStorage.removeItem('todos')
    }
  }

  const noteRemover = (id) => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          notes: todo.notes.filter((note) => note.id !== id),
        }
      })
    )

    localStorage.removeItem('todos')
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
        boxOpener,
        doneHandler,
        boxRemover,
        noteRemover,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoBoxContext.Provider>
  )
}
